# HydrogenExpert Implementation Notes

Status: Active
Last updated: 2026-09-01
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
- `npm run report:traffic`

## Dependency Notes

- Keep `@types/node` on the Node 24 line while Vercel is configured for Node 24.x.
- Keep `eslint` on version 9 until the Next-managed ESLint plugin chain supports ESLint 10 without invalid peer dependencies.
- The 2026-06-15 safe refresh moved `@supabase/supabase-js` to `2.108.2`, `@tailwindcss/postcss` and `tailwindcss` to `4.3.1`, `@types/node` to `24.13.2`, `playwright` to `1.61.0`, `vitest` to `4.1.9`, and pinned `esbuild` to `0.28.1` through `overrides` to clear the transitive audit finding.
- The 2026-08-04 security refresh moved Next.js, `@next/third-parties`, and `eslint-config-next` to `16.3.0`, React and React DOM to `19.2.8`, and the PostCSS override to `8.5.25`; the lockfile also carries the fixed `brace-expansion` and `js-yaml` transitives required for a clean audit.
- The 2026-08-05 safe refresh moved `@supabase/supabase-js` and its aligned client packages from `2.108.2` to `2.112.0`; the new Node `>=22.0.0` requirement remains inside the repository's declared runtime range.
- The 2026-08-07 safe refresh moved `@supabase/supabase-js` and its aligned client packages from `2.112.0` to `2.112.2`.
- The 2026-08-08 safe styling-toolchain refresh moved `@tailwindcss/postcss` and `tailwindcss` from `4.3.1` to `4.3.3` while keeping the existing Tailwind 4 line and PostCSS override unchanged.
- The 2026-08-09 safe refresh moved ESLint from `9.39.4` to `9.39.5` while keeping the Next-compatible ESLint 9 line and aligned `@eslint/js` and `@eslint/eslintrc` packages.
- The 2026-08-10 safe test-tooling refresh moved `playwright` and `playwright-core` from `1.61.1` to `1.62.1` without changing the install-script set or any other transitive package.
- The 2026-08-11 safe tooling refresh moved `tsx` from `4.22.4` to `4.23.12` without changing its Node `>=18.0.0` or `esbuild ~0.28.0` compatibility boundary.
- The 2026-08-12 safe refresh moved `@supabase/supabase-js` and its five aligned client packages from `2.112.2` to `2.112.3` while keeping the Node `>=22.0.0` requirement and install-script set unchanged.
- The 2026-08-15 security refresh moved Next.js, `@next/third-parties`, and `eslint-config-next` from `16.3.0` to `16.3.1`, updated the PostCSS override from `8.5.25` to `8.5.26`, and resolved the `nanoid` high-severity advisory by moving the transitive package from `3.3.17` to `3.3.18`.
- The 2026-08-18 safe patch refresh moved the `esbuild` override from `0.28.1` to `0.28.2` for upstream TypeScript, JavaScript, and CSS correctness fixes.
- The 2026-08-19 safe test-tooling refresh moved Vitest and its seven version-coupled `@vitest/*` packages from `4.1.9` to `4.1.11`. The lockfile intentionally keeps Vite `8.1.0`, Rolldown `1.1.3`, and Lightning CSS `1.32.0` until their broader resolver update receives a separate compatibility review.
- The 2026-08-23 safe patch refresh moved Next.js, `@next/third-parties`, and `eslint-config-next` from `16.3.1` to stable `16.3.2`, a non-prerelease bug-fix backport, while preserving React `19.2.8` and the declared Node range.
- The 2026-08-24 type refresh moved `@types/react-dom` from `19.2.4` to `19.2.5`; runtime React and React DOM remain on `19.2.8`.
- The 2026-08-25 safe refresh moved `@supabase/supabase-js` and its five aligned client packages from `2.112.3` to `2.112.4` while keeping the Node `>=22.0.0` requirement and install-script set unchanged.
- The 2026-08-26 security refresh moved Next.js, `@next/third-parties`, and `eslint-config-next` from `16.3.2` to stable `16.3.3` to include the official critical RCE fixes for Windows-hosted servers and AVIF image optimization.
- The 2026-08-31 safe tooling refresh moved `tsx` from `4.23.12` to `4.23.13` to bound the shared transform cache without changing its Node `>=18.0.0` or `esbuild ~0.28.0` compatibility boundary.
- Keep `sanitize-html` at `2.17.5` until the declared Node range is compatible with its newer `>=22.12.0` engine requirement.
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

## Analytics And Reporting Rules

- Google Analytics is opt-in. Do not load it until `hydrogenexpert.analyticsConsent.v1` is `granted`; Vercel Analytics and Speed Insights remain the cookie-free baseline.
- Use one canonical event for each lead-funnel step: `lead_form_view`, `lead_form_start`, `lead_form_submit_success`, and `lead_form_submit_error`.
- Use `scope_review_cta_click` for internal or package scope-review intent and `external_contact_click` for LinkedIn or Upwork destinations.
- Never send names, email addresses, store URLs, message text, or other direct identifiers as analytics parameters. Use `source_kind`, `source_path`, `cta_destination`, and `package_name` for attribution context.
- `npm run report:traffic` reads GA4, Search Console, production health, Supabase aggregate lead counts when available, and PageSpeed/CrUX when quota is available. It must label unavailable sources explicitly and must not substitute invented or manually entered metrics. Use `--strict` for the weekly core-source gate and add `--require-pagespeed` during the performance phase.

## Architecture Direction

- `components/ServiceLandingPage.tsx` should become a thin shell over focused service page sections.
- The canonical service registry is `features/services/registry/`; import it directly (the `lib/services.ts` compatibility surface was removed on 2026-07-04).
- Large content registries should move toward feature/domain folders.
- Compatibility re-exports are acceptable during staged migrations, but must be removed once imports stabilize.
