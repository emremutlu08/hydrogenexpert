# HydrogenExpert Implementation Notes

Status: Active
Last updated: 2026-06-15
Owner: Agent
Source of truth: `package.json`, current code, agent analysis

## Purpose

This file captures implementation rules for the HydrogenExpert Next.js site.

## Runtime Shape

- Framework: Next.js App Router.
- Language: TypeScript.
- UI: React with shared components and Tailwind CSS through `app/globals.css`.
- Hosting: Vercel.
- Data: Supabase for posts, leads, and durable rate limiting.
- Security: shared helpers in `lib/security.ts` plus headers in `next.config.ts`.
- Node runtime: Vercel is configured for Node 24.x; GitHub scheduled validation uses Node 24; `package.json` allows Node `>=22 <25` so local Node 22 development remains supported while deployment stays on the Node 24 line.

Use `package.json` for exact versions.

## Script Source of Truth

Use `package.json` for exact scripts. Current important scripts include:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run test`
- `npm run typecheck`
- `npm run validate:content`
- `npm run audit:shopify-claims`
- `npm run verify:commercial-launch`
- `npm run verify:internal-links`
- `npm run indexnow:ping`

## Dependency Notes

- Keep `@types/node` on the Node 24 line while Vercel is configured for Node 24.x.
- Keep `eslint` on version 9 until the Next-managed ESLint plugin chain supports ESLint 10 without invalid peer dependencies.
- The 2026-06-15 safe refresh moved `@supabase/supabase-js` to `2.108.2`, `@tailwindcss/postcss` and `tailwindcss` to `4.3.1`, `@types/node` to `24.13.2`, `playwright` to `1.61.0`, `vitest` to `4.1.9`, and pinned `esbuild` to `0.28.1` through `overrides` to clear the transitive audit finding.
- Keep deferring the newer `@anthropic-ai/sdk` 0.x minor line for a separate compatibility review.

## Implementation Rules

- Keep route behavior stable during architecture refactors.
- Do not change public copy as part of a structural refactor unless the task explicitly requires it.
- Keep shared metadata helpers and structured-data builders centralized.
- Use existing shared components before adding new page-local patterns.
- For Shopify/Hydrogen claims, read `agent-docs/CONTENT-GOVERNANCE.md` first.
- For UI/image work, read `agent-docs/DESIGN.md` first.
- Do not publish public blog posts without explicit user request and real source material.

## API Rules

- API routes must return no-store headers unless there is a specific reason not to.
- Use shared security helpers from `lib/security.ts`.
- Lead capture and cron-style endpoints should use durable rate limiting where available, with in-memory fallback only as backup.
- Cloudflare Turnstile is active only when both `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` are configured.

## Architecture Direction

- `components/ServiceLandingPage.tsx` should become a thin shell over focused service page sections.
- `lib/services.ts` should become a compatibility surface over `features/services/registry/`.
- Large content registries should move toward feature/domain folders.
- Compatibility re-exports are acceptable during staged migrations.
