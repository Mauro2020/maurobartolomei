# Production operations

These files define a release process for the Bartolomei Systems application only. They must never be used to reload all PM2 processes or modify unrelated websites.

## Safety model

- Production runs as a dedicated non-root user.
- Every release is an immutable, full Git commit SHA.
- SMTP values live in `shared/production.env`, outside Git and release directories.
- A new release is installed, audited, checked, built, and started as a local canary before activation.
- `current` changes atomically only after the canary passes.
- Only the `bartolomeisystems` PM2 process is reloaded.
- A failed production health check restores the previous symlink automatically.
- Releases are never deleted automatically.

## Required server layout

```text
/srv/bartolomeisystems/
├── current -> releases/<commit-sha>
├── releases/
│   └── <commit-sha>/
└── shared/
    ├── deploy.lock
    ├── production.env
    └── logs/
```

`production.env` must belong to the application user and have mode `0600`.

## One-time migration

The initial migration from the legacy `/var/www` installation is deliberately not automated. It requires a maintenance approval and a separately documented rollback to the legacy PM2 working directory.

Before that migration:

1. Take a VM snapshot and a filesystem backup of the legacy application.
2. Create the dedicated application user and `/srv/bartolomeisystems` directories.
3. Install a repository-scoped, read-only GitHub deploy key for that user.
4. Create `shared/production.env` without printing its values and set mode `0600`.
5. Build the first release and create `current` as a symlink to it.
6. Start only the `bartolomeisystems` entry from `ecosystem.config.cjs`.
7. Verify the internal backend and public domain before removing nothing from the legacy directory.
8. Keep the legacy deployment intact until at least one subsequent release and rollback have been tested.

Do not change reverse-proxy configuration as part of this migration.

## Deploy an approved commit

Run as the dedicated application user:

```bash
./ops/deploy-release.sh <full-40-character-commit-sha>
```

The commit should be on the protected default branch and have a successful CI run. The script refuses root, concurrent runs, short refs, insecure environment-file permissions, duplicate releases, and deployments before the one-time migration is complete.

## Roll back

```bash
./ops/rollback-release.sh <previous-full-40-character-commit-sha>
```

The target must already exist under `releases/` and contain a completed `.next` build. If its health check fails, the script restores the release that was active when rollback began.

## Log rotation

Configure log rotation outside the repository for `shared/logs/*.log`. The application user must not receive permission to reload unrelated system services.
