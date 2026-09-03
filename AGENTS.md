# Bartolomei Systems operating agreement

## Scope

- Work only on the Bartolomei Systems repository and its dedicated application process.
- Treat unrelated websites, services, virtual hosts, databases, and PM2 processes as out of scope.
- Never expose, print, copy, commit, or summarize secret values or personal data.

## Autonomous work allowed

- Inspect and modify source files in this repository.
- Create `codex/*` branches and commits.
- Install dependencies in the workspace and update the lockfile.
- Run security audits, lint, type checking, tests, builds, and local smoke checks.
- Prepare versioned release artifacts and deployment plans.
- Fix in-scope failures found by the checks and repeat validation.

## Human approval required

- Merging or pushing directly to `main`.
- Switching the live production release or reloading the production process.
- Sending test email or making any external communication.
- Changing DNS, TLS certificates, firewall, SSH, users, permissions, credentials, or secrets.
- Changing or reloading global reverse-proxy configuration.
- Deleting releases, backups, repositories, logs, or production data.
- Purchasing services or expanding work to another system.

## Production safeguards

- Deploy only a full 40-character commit SHA that passed CI.
- Build and test a new release before changing the `current` symlink.
- Reload only the `bartolomeisystems` process; never reload every PM2 process.
- Do not invoke the global PM2 systemd reload operation.
- Run health checks after a release and automatically restore the previous release if they fail.
- Never run dependency auto-fixes or package upgrades directly in production.
- Keep SMTP configuration outside release directories with permission `0600`.

## Required verification

Before a branch is ready for review, run:

1. `npm ci`
2. `npm audit --omit=dev --audit-level=high`
3. `npm run secrets:check`
4. `npm run lint`
5. `npm run typecheck`
6. `npm run build`

Report any skipped or failing check explicitly.
