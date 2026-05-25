# TODO

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: User-approved architecture plan and current repo analysis

## Purpose

This file tracks prioritized follow-ups and architecture cleanup tasks.

## Active Backlog

1. Add no-loss guardrails for routes, sitemap, service registry, source metadata, docs routing, llms, lead form, and image accessibility.
2. Split `components/ServiceLandingPage.tsx` into focused common, developer-only, pricing/package, related-content, and schema modules while preserving the public interface.
3. Split `lib/services.ts` into `features/services/registry/` modules with compatibility exports.
4. Move large content registries out of `lib/` into feature/domain folders with compatibility exports as needed.
5. Review direct-composed pages for real repeated section patterns and extract only where DRY/KISS improves.
6. Update `agent-docs/CURRENT-STATE.md`, `REPO-STRUCTURE.md`, and `DECISIONS.md` after each architecture phase.

## Non-Goals Unless Emre Asks

- Public redesign.
- New commercial copy.
- SEO/GEO full audit.
- Security full audit.
- Dependency update campaign.
- Publishing new Supabase-backed blog posts.
- Adding `.roo/` or `.cursor/` bootstrap files.
