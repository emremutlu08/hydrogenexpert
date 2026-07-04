# Decisions

Status: Active
Last updated: 2026-07-04
Owner: Agent
Source of truth: Current repo, user instruction, prior release workflow, agent analysis

## Purpose

This file records durable decisions so future agents do not re-litigate settled choices.

## Durable Decisions

- `AGENTS.md` is the canonical read-first router.
- `agent-docs/` is the canonical home for agent-facing project context, standards, workflow, and decisions.
- Root-level docs that predate `agent-docs/` should become compatibility stubs pointing to canonical docs.
- HydrogenExpert must remain a senior-led Shopify Hydrogen service and agency alternative, not a generic full-service agency.
- Public claims must stay source-grounded and conservative.
- HydrogenExpert content production, SEO/GEO, discovery, schema, `llms`, sitemap, and internal-link work routes through `agent-docs/CONTENT-PRODUCTION-PLAYBOOK.md`.
- `SEO ne durumda` and similar SEO/GEO status questions require relevant SEO/GEO skills first, then status reporting against `agent-docs/SEO-GEO-AUDIT-CHECKLIST.md`.
- Supabase-backed public blog publishing requires an explicit user request and real input/source material for the specific article.
- Meaningful changes require PR-first workflow, validation, deployment verification when relevant, changelog paper trail, merge/closeout, and remote branch cleanup unless Emre says otherwise.
- Final completion replies for finished HydrogenExpert work should include a clickable PR link and clickable live environment link.
- Architecture cleanup must preserve public behavior: URL, copy, metadata, schema, sitemap, robots, feed, llms, API response shape, form behavior, image alt/title behavior, and commercial positioning.

## Architecture Decisions

- Use staged refactors with guardrails instead of one large rewrite.
- Keep compatibility exports during large registry moves when it reduces risk.
- Prefer feature/domain folders for large registries and page-specific sections.
- Keep the public service page interface as `<ServiceLandingPage service={service} />`; internal service landing sections may live in `components/service-landing/` while the route import surface stays stable.
- Import canonical registries from `features/` directly; the temporary `lib/services.ts`, `lib/content-sources.ts`, `lib/content-relations.ts`, `lib/post-enhancements.ts`, and `lib/traffic-foundation.ts` compatibility re-exports were removed on 2026-07-04 after imports stabilized and validation confirmed no public behavior change.
- Keep `lib/` for stable adapters, shared helpers, security, and metadata modules; temporary compatibility modules are allowed only during active migrations.
- Do not split files only to satisfy size preferences; split when locality, leverage, testing, or DRY/KISS improves.
- Keep direct-composed resource, article, blog, and traffic-foundation pages local unless two or more pages share the same data shape and behavior. The 2026-05-25 final architecture pass found no useful generic renderer to extract without adding indirection.
