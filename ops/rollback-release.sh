#!/usr/bin/env bash
set -Eeuo pipefail

umask 077

readonly APP_NAME="bartolomeisystems"
readonly APP_ROOT="${BARTOLOMEI_APP_ROOT:-/srv/bartolomeisystems}"
readonly APP_PORT="${BARTOLOMEI_APP_PORT:-3000}"

fail() {
  printf 'Rollback failed: %s\n' "$*" >&2
  exit 1
}

[[ ${EUID} -ne 0 ]] || fail "run as the dedicated application user, never root"
[[ $# -eq 1 ]] || fail "usage: $0 <full-40-character-commit-sha>"

readonly COMMIT_SHA="$1"
[[ ${COMMIT_SHA} =~ ^[0-9a-f]{40}$ ]] || fail "the release identifier must be a lowercase 40-character Git SHA"

readonly TARGET_RELEASE="${APP_ROOT}/releases/${COMMIT_SHA}"
readonly CURRENT_LINK="${APP_ROOT}/current"
readonly SHARED_DIR="${APP_ROOT}/shared"

[[ -d ${TARGET_RELEASE}/.next ]] || fail "target is not a built release: ${TARGET_RELEASE}"
[[ -f ${TARGET_RELEASE}/ecosystem.config.cjs ]] || fail "target has no PM2 configuration"

exec 9>"${SHARED_DIR}/deploy.lock"
flock -n 9 || fail "another deployment or rollback is already running"

readonly PREVIOUS_RELEASE="$(readlink -f "${CURRENT_LINK}")"
readonly PENDING_LINK="${APP_ROOT}/.rollback-${COMMIT_SHA}"

ln -s "${TARGET_RELEASE}" "${PENDING_LINK}"
mv -Tf "${PENDING_LINK}" "${CURRENT_LINK}"
pm2 startOrReload "${CURRENT_LINK}/ecosystem.config.cjs" --only "${APP_NAME}" --update-env

healthy=false
for _ in {1..30}; do
  if curl --fail --silent --show-error "http://127.0.0.1:${APP_PORT}/" >/dev/null; then
    healthy=true
    break
  fi
  sleep 1
done

if [[ ${healthy} != true ]]; then
  restore_link="${APP_ROOT}/.restore-current"
  ln -s "${PREVIOUS_RELEASE}" "${restore_link}"
  mv -Tf "${restore_link}" "${CURRENT_LINK}"
  pm2 startOrReload "${CURRENT_LINK}/ecosystem.config.cjs" --only "${APP_NAME}" --update-env
  fail "target was unhealthy; original release restored"
fi

pm2 save
printf 'Rollback complete: %s\n' "${COMMIT_SHA}"
