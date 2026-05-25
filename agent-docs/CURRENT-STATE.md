# Current State

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: Current repo, `package.json`, recent validation history, agent analysis

## Purpose

This file summarizes the current repo shape so future agents can orient quickly.

## Repo Snapshot

- Canonical path: `/Users/emremutlu/Apps/Codex/hydrogenexpert`.
- Primary branch: `main`.
- Current app shape: Next.js App Router marketing and lead-generation site.
- Public app code lives in `app/`, shared UI in `components/`, service landing sections in `components/service-landing/`, service registry modules in `features/services/registry/`, large content registries in `features/content-sources/`, `features/content-relations/`, `features/post-enhancements/`, and `features/traffic-foundation/`, shared helpers and compatibility exports in `lib/`, content/data in `content/` and `data/`.
- Canonical agent guidance now lives in `agent-docs/` with `AGENTS.md` as the router.

## Current Architecture Notes

- `components/ServiceLandingPage.tsx` is now a thin shell over focused service landing section modules; keep checking public output during follow-up refactors.
- `features/services/registry/` now separates service base data, enrichments, source metadata, offer snapshots, and lookup helpers; `lib/services.ts` remains a compatibility re-export.
- Large content registry modules now live under feature/domain folders with `lib/` compatibility re-exports.
- Direct-composed resource, article, blog, and traffic-foundation pages were reviewed on 2026-05-25. No shared renderer was extracted because the remaining repetition is mostly local layout rhythm over different data shapes, while reusable pieces already exist in `PageIntroSection`, `SectionHeader`, `RelatedLinks`, `JsonLd`, and feature registries.
- Treat compatibility re-exports as temporary migration support. Remove them only after imports have stabilized and tests confirm no public behavior changed.

## Validation Baseline

The current expected full validation set for meaningful code or content-rendering changes:

- `git diff --check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run validate:content`
- `npm run audit:shopify-claims`
- `NEXT_PUBLIC_SITE_URL=https://hydrogenexpert.co npm run build`

For architecture refactors, add local or preview smoke checks and `npm run verify:internal-links` when route/link behavior could be affected.

## Drift-Prone Facts

Re-verify before relying on:

- Live deployment status.
- PR numbers and deployment URLs.
- Upwork hours, ratings, public badges, and profile proof values.
- Current Shopify docs, Hydrogen API names, and SEO guidance.
- Supabase schema and production environment variable state.
