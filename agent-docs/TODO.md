# TODO

Status: Active
Last updated: 2026-07-04
Owner: Agent
Source of truth: User-approved architecture plan and current repo analysis

## Purpose

This file tracks prioritized follow-ups and architecture cleanup tasks.

## Active Backlog

1. Watch direct-composed pages during future additions; extract shared renderers only when multiple pages share data shape and behavior.
2. Revisit ESLint 10 after `eslint-config-next` and its bundled `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, and `eslint-plugin-react` dependency chain supports ESLint 10 without invalid peers.
3. External GEO follow-ups that need Emre: Bing Webmaster Tools domain verification, third-party HydrogenExpert brand entity signals, and client-approved case-study outcome metrics.

## Completed On 2026-07-04

- Removed the `lib/` compatibility re-exports (`services`, `content-sources`, `content-relations`, `post-enhancements`, `traffic-foundation`); all call sites now import canonical `features/` modules directly. Validated with lint, typecheck, tests, content validation, and build.
- Bounded the in-memory rate-limit fallback bucket store in `lib/security.ts` and added a guardrail test.
- Raised small mobile touch targets to a 44px minimum on trust bar badges, homepage proof title links, footer link lists, and About verified-profile links.
- Split `features/articles/traffic-gap-articles.ts` into per-article modules under `features/articles/traffic-gap/`.

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
