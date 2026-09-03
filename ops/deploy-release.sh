#!/usr/bin/env bash
set -Eeuo pipefail

umask 077

readonly APP_NAME="bartolomeisystems"
readonly APP_ROOT="${BARTOLOMEI_APP_ROOT:-/srv/bartolomeisystems}"
readonly REPOSITORY="${BARTOLOMEI_REPOSITORY:-https://github.com/Mauro2020/maurobartolomei.git}"
readonly APP_PORT="${BARTOLOMEI_APP_PORT:-3000}"
readonly CANARY_PORT="${BARTOLOMEI_CANARY_PORT:-3100}"

fail() {
  printf 'Deploy failed: %s\n' "$*" >&2
  exit 1
}

[[ ${EUID} -ne 0 ]] || fail "run as the dedicated application user, never root"
[[ $# -eq 1 ]] || fail "usage: $0 <full-40-character-commit-sha>"

readonly COMMIT_SHA="$1"
[[ ${COMMIT_SHA} =~ ^[0-9a-f]{40}$ ]] || fail "the release identifier must be a lowercase 40-character Git SHA"

for command_name in git npm node curl pm2 flock; do
  command -v "${command_name}" >/dev/null || fail "missing command: ${command_name}"
done

readonly RELEASES_DIR="${APP_ROOT}/releases"
readonly SHARED_DIR="${APP_ROOT}/shared"
readonly ENV_FILE="${SHARED_DIR}/production.env"
readonly LOG_DIR="${SHARED_DIR}/logs"
readonly CURRENT_LINK="${APP_ROOT}/current"
readonly RELEASE_DIR="${RELEASES_DIR}/${COMMIT_SHA}"

install -d -m 0750 "${RELEASES_DIR}" "${SHARED_DIR}" "${LOG_DIR}"

exec 9>"${SHARED_DIR}/deploy.lock"
flock -n 9 || fail "another deployment is already running"

[[ -f ${ENV_FILE} ]] || fail "missing ${ENV_FILE}"
readonly ENV_MODE="$(stat -c '%a' "${ENV_FILE}")"
(( (8#${ENV_MODE} & 077) == 0 )) || fail "${ENV_FILE} must not be readable by group or others"
[[ -L ${CURRENT_LINK} ]] || fail "initial migration is not complete; current must already be a release symlink"
[[ ! -e ${RELEASE_DIR} ]] || fail "release already exists: ${RELEASE_DIR}"

readonly PREVIOUS_RELEASE="$(readlink -f "${CURRENT_LINK}")"
[[ -d ${PREVIOUS_RELEASE} ]] || fail "current release target is invalid"

printf 'Preparing release %s\n' "${COMMIT_SHA}"
git clone --filter=blob:none --no-checkout "${REPOSITORY}" "${RELEASE_DIR}"
git -C "${RELEASE_DIR}" fetch --depth=1 origin "${COMMIT_SHA}"
git -C "${RELEASE_DIR}" checkout --detach "${COMMIT_SHA}"
[[ $(git -C "${RELEASE_DIR}" rev-parse HEAD) == "${COMMIT_SHA}" ]] || fail "checked-out commit does not match"

ln -s "${ENV_FILE}" "${RELEASE_DIR}/.env"

npm --prefix "${RELEASE_DIR}" ci
npm --prefix "${RELEASE_DIR}" run secrets:check
npm --prefix "${RELEASE_DIR}" audit --omit=dev --audit-level=high
npm --prefix "${RELEASE_DIR}" run lint
npm --prefix "${RELEASE_DIR}" run typecheck
npm --prefix "${RELEASE_DIR}" run build

canary_pid=""
stop_canary() {
  if [[ -n ${canary_pid} ]] && kill -0 "${canary_pid}" 2>/dev/null; then
    kill "${canary_pid}" 2>/dev/null || true
    wait "${canary_pid}" 2>/dev/null || true
  fi
}
trap stop_canary EXIT

printf 'Starting isolated canary on port %s\n' "${CANARY_PORT}"
(
  cd "${RELEASE_DIR}"
  NODE_ENV=production node_modules/.bin/next start --hostname 127.0.0.1 --port "${CANARY_PORT}"
) >"${LOG_DIR}/canary-${COMMIT_SHA}.log" 2>&1 &
canary_pid="$!"

canary_ready=false
for _ in {1..30}; do
  if curl --fail --silent --show-error "http://127.0.0.1:${CANARY_PORT}/" >/dev/null \
    && curl --fail --silent --show-error "http://127.0.0.1:${CANARY_PORT}/robots.txt" >/dev/null; then
    canary_ready=true
    break
  fi
  sleep 1
done
[[ ${canary_ready} == true ]] || fail "canary health check failed"

stop_canary
canary_pid=""

readonly PENDING_LINK="${APP_ROOT}/.current-${COMMIT_SHA}"
ln -s "${RELEASE_DIR}" "${PENDING_LINK}"
mv -Tf "${PENDING_LINK}" "${CURRENT_LINK}"

rollback() {
  printf 'Health check failed; restoring %s\n' "${PREVIOUS_RELEASE}" >&2
  local rollback_link="${APP_ROOT}/.rollback-current"
  ln -s "${PREVIOUS_RELEASE}" "${rollback_link}"
  mv -Tf "${rollback_link}" "${CURRENT_LINK}"
  pm2 startOrReload "${CURRENT_LINK}/ecosystem.config.cjs" --only "${APP_NAME}" --update-env
}

pm2 startOrReload "${CURRENT_LINK}/ecosystem.config.cjs" --only "${APP_NAME}" --update-env

production_ready=false
for _ in {1..30}; do
  if curl --fail --silent --show-error "http://127.0.0.1:${APP_PORT}/" >/dev/null; then
    production_ready=true
    break
  fi
  sleep 1
done

if [[ ${production_ready} != true ]]; then
  rollback
  fail "production health check failed and the previous release was restored"
fi

pm2 save
printf 'Release %s is healthy. Previous release: %s\n' "${COMMIT_SHA}" "${PREVIOUS_RELEASE}"
