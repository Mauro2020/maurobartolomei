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
3. Confirm that the application user can read the public GitHub repository over HTTPS. If the repository becomes private, install a repository-scoped, read-only deploy key and override `BARTOLOMEI_REPOSITORY`.
4. Create `shared/production.env` without printing its values and set mode `0600`.
5. Build the first release and create `current` as a symlink to it.
6. Start only the `bartolomeisystems` entry from `ecosystem.config.cjs`.
7. Verify the internal backend and public domain before removing nothing from the legacy directory.
8. Keep the legacy deployment intact until at least one subsequent release and rollback have been tested.

Do not change reverse-proxy configuration as part of this migration.

The first migration was completed on 2026-09-03. Production now runs from `/srv/bartolomeisystems/current` as the dedicated `bartolomeisystems` user. The legacy `/var/www/bartolomeisystems` copy remains available as a temporary recovery source and is not part of normal deploys.

## Boot service

PM2 7 does not create the PID file expected by its generated `Type=forking` systemd unit on this VM. Install the repository unit instead:

```bash
sudo install -o root -g root -m 0644 ops/pm2-bartolomeisystems.service /etc/systemd/system/pm2-bartolomeisystems.service
sudo systemctl daemon-reload
sudo systemctl enable --now pm2-bartolomeisystems
```

This unit operates only on `/srv/bartolomeisystems/.pm2`. The existing root PM2 service that hosts unrelated applications must not be changed or reloaded.

## Deploy an approved commit

Run as the dedicated application user:

```bash
./ops/deploy-release.sh <full-40-character-commit-sha>
```

The commit should be on the protected default branch and have a successful CI run. The default repository URL is public HTTPS, so production needs no GitHub secret. The script refuses root, concurrent runs, short refs, insecure environment-file permissions, duplicate releases, and deployments before the one-time migration is complete.

## Roll back

```bash
./ops/rollback-release.sh <previous-full-40-character-commit-sha>
```

The target must already exist under `releases/` and contain a completed `.next` build. If its health check fails, the script restores the release that was active when rollback began.

## Log rotation

Configure log rotation outside the repository for `shared/logs/*.log`. The application user must not receive permission to reload unrelated system services.
