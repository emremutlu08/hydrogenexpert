# TODO

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: User-approved architecture plan and current repo analysis

## Purpose

This file tracks prioritized follow-ups and architecture cleanup tasks.

## Active Backlog

1. Remove compatibility re-exports after imports have stabilized and a dedicated validation pass confirms no public behavior changed.
2. Watch direct-composed pages during future additions; extract shared renderers only when multiple pages share data shape and behavior.
3. Revisit ESLint 10 after `eslint-config-next` and its bundled `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, and `eslint-plugin-react` dependency chain supports ESLint 10 without invalid peers.

## Completed On 2026-05-25

- Added no-loss guardrails for routes, sitemap, service registry, source metadata, docs routing, llms, and image accessibility.
- Split `components/ServiceLandingPage.tsx` into focused common, developer-only, pricing/package, article, audit, and CTA helper modules while preserving the public interface.
- Split `lib/services.ts` into `features/services/registry/` modules with `lib/services.ts` retained as a compatibility re-export.
- Moved content registries into `features/content-sources/`, `features/content-relations/`, `features/post-enhancements/`, and `features/traffic-foundation/` with `lib/` compatibility re-exports.
- Completed the final architecture pass across direct-composed resource, article, blog, and traffic-foundation pages. No new renderer was extracted because the remaining repetition is layout rhythm over different data shapes, not duplicated business behavior.

## Non-Goals Unless Emre Asks

- Public redesign.
- New commercial copy.
- SEO/GEO full audit.
- Security full audit.
- Dependency update campaign.
- Publishing new Supabase-backed blog posts.
- Adding `.roo/` or `.cursor/` bootstrap files.
