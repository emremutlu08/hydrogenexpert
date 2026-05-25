# Repo Structure

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: Current repo and user-approved architecture plan

## Purpose

This file maps the repository structure and placement rules. Update it whenever a folder is added, removed, renamed, or repurposed.

## Root

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Read-first router for all agents. |
| `agent-docs/` | Canonical agent-facing project docs, standards, workflows, and decisions. |
| `app/` | Next.js App Router routes and route handlers. |
| `components/` | Shared React UI and section components. |
| `components/service-landing/` | Focused sections and helpers behind `ServiceLandingPage` while preserving `<ServiceLandingPage service={service} />`. |
| `features/services/registry/` | Canonical service package registry modules for base data, enrichments, source metadata, offer snapshots, and lookup helpers. |
| `lib/` | Shared runtime helpers, adapters, registries, and compatibility exports. |
| `features/` | Target home for domain modules and large registries as architecture cleanup progresses. |
| `data/` | Static structured project data such as case studies and logos. |
| `content/` | Content templates, source packs, internal reports, and outreach notes. |
| `docs/` | Historical or feature-specific project docs that are not canonical agent routing docs. |
| `public/` | Static public assets. |
| `scripts/` | Operational validation, reporting, generation, and indexing scripts. |
| `supabase/` | Supabase migrations and local metadata. |
| `tasks/` | Historical task/PRD notes. |
| `tests/` | Vitest tests and guardrails. |
| `CHANGELOG.md` | PR/deploy/verification paper trail. |
| `package.json` | Source of truth for scripts and dependency versions. |

Root compatibility stubs may exist for moved docs. Canonical content should live in `agent-docs/`.

## App Structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage. |
| `app/*/page.tsx` | Static or dynamic public routes. |
| `app/api/lead-capture/route.ts` | Lead capture endpoint. |
| `app/api/generate-post/route.ts` | Protected post-generation endpoint. |
| `app/sitemap.ts` | Dynamic sitemap entrypoint. |
| `app/robots.ts` | Robots entrypoint. |
| `app/feed.xml/route.ts` | RSS feed route. |
| `app/llms.txt/route.ts` and `app/llms-full.txt/route.ts` | AI-readable public summaries. |
| `app/globals.css` | Visual system and shared CSS contracts. |

## Target Feature Structure

Use this target structure when reducing large-module risk:

```txt
features/
├── services/
│   ├── registry/
│   ├── sections/ (only if service sections later move out of `components/service-landing/`)
│   └── ServiceLandingPage.tsx
├── content-sources/
├── content-relations/
├── post-enhancements/
├── traffic-foundation/
├── lead-capture/
└── generated-posts/
```

Use compatibility re-exports during migrations when it keeps call sites stable and lowers risk. `lib/services.ts` is currently a compatibility export for `features/services/registry/`.

## Placement Rules

- Route files should stay focused on metadata, data lookup, and rendering.
- Shared UI belongs in `components/` unless it is specific to a feature module being actively split.
- Shared business rules, security helpers, metadata helpers, and adapters may stay in `lib/`.
- Large domain registries should move toward `features/<domain>/`.
- Compatibility re-export modules are allowed during staged refactors, but should not become permanent parallel sources of truth.
- Do not add new root-level agent docs; add canonical docs to `agent-docs/` and route from `AGENTS.md`.
- Do not create abstractions that only wrap constant behavior.
