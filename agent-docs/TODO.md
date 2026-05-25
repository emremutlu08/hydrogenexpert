# TODO

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: User-approved architecture plan and current repo analysis

## Purpose

This file tracks prioritized follow-ups and architecture cleanup tasks.

## Active Backlog

1. Split `lib/services.ts` into `features/services/registry/` modules with compatibility exports.
2. Move large content registries out of `lib/` into feature/domain folders with compatibility exports as needed.
3. Review direct-composed pages for real repeated section patterns and extract only where DRY/KISS improves.
4. Update `agent-docs/CURRENT-STATE.md`, `REPO-STRUCTURE.md`, and `DECISIONS.md` after each architecture phase.

## Completed On 2026-05-25

- Added no-loss guardrails for routes, sitemap, service registry, source metadata, docs routing, llms, and image accessibility.
- Split `components/ServiceLandingPage.tsx` into focused common, developer-only, pricing/package, article, audit, and CTA helper modules while preserving the public interface.

## Non-Goals Unless Emre Asks

- Public redesign.
- New commercial copy.
- SEO/GEO full audit.
- Security full audit.
- Dependency update campaign.
- Publishing new Supabase-backed blog posts.
- Adding `.roo/` or `.cursor/` bootstrap files.
