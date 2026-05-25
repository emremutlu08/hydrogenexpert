# TODO

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: User-approved architecture plan and current repo analysis

## Purpose

This file tracks prioritized follow-ups and architecture cleanup tasks.

## Active Backlog

1. Review direct-composed pages for real repeated section patterns and extract only where DRY/KISS improves.
2. Update `agent-docs/CURRENT-STATE.md`, `REPO-STRUCTURE.md`, and `DECISIONS.md` after each architecture phase.

## Completed On 2026-05-25

- Added no-loss guardrails for routes, sitemap, service registry, source metadata, docs routing, llms, and image accessibility.
- Split `components/ServiceLandingPage.tsx` into focused common, developer-only, pricing/package, article, audit, and CTA helper modules while preserving the public interface.
- Split `lib/services.ts` into `features/services/registry/` modules with `lib/services.ts` retained as a compatibility re-export.
- Moved content registries into `features/content-sources/`, `features/content-relations/`, `features/post-enhancements/`, and `features/traffic-foundation/` with `lib/` compatibility re-exports.

## Non-Goals Unless Emre Asks

- Public redesign.
- New commercial copy.
- SEO/GEO full audit.
- Security full audit.
- Dependency update campaign.
- Publishing new Supabase-backed blog posts.
- Adding `.roo/` or `.cursor/` bootstrap files.
