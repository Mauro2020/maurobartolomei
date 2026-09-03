# Bartolomei Systems

Website for Bartolomei Systems, built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Local development

Requirements:

- Node.js version from `.nvmrc`
- npm

```bash
nvm use
npm ci
cp .env.example .env
npm run dev
```

Never place real credentials in `.env.example` or committed files.

## Validation

```bash
npm audit --omit=dev --audit-level=high
npm run lint
npm run typecheck
npm run build
```

CI runs the same checks for pull requests, `main`, and `codex/*` branches.

## Production

Production is deployed as a versioned release identified by an immutable commit SHA. See [`ops/README.md`](ops/README.md). Production changes require explicit approval and must target only the `bartolomeisystems` application.
