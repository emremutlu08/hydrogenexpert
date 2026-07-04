# Content Production Playbook

Status: Active
Last updated: 2026-07-04
Owner: Agent
Source of truth: Current repo, `agent-docs/CONTENT-GOVERNANCE.md`, Shopify source-grounding rules, HydrogenExpert proof rules, named content/SEO/GEO skills

## Purpose

This playbook is the canonical execution guide for HydrogenExpert content production, SEO/GEO work, and public discovery maintenance.

For `SEO ne durumda`, `GEO ne durumda`, and similar current-state questions, use `agent-docs/SEO-GEO-AUDIT-CHECKLIST.md` as the required status checklist after reading this playbook.

Use it when the task touches blog posts, articles, service or landing pages, case studies, homepage/about/contact/hire-me pages, public discovery, sitemap, robots, `llms.txt`, `llms-full.txt`, schema, internal links, content registries, or source metadata.

This document is HydrogenExpert-specific. Do not import non-HydrogenExpert repo rules into this site. EveShop, Bayam, Rebel Bunny, Kirazev, and Clohi are valid HydrogenExpert proof and case-study names when used in the approved HydrogenExpert context.

## Mandatory Read Chain

Before content-related implementation:

1. Read `AGENTS.md`.
2. Check `git status --short --branch`.
3. Read `agent-docs/CONTENT-GOVERNANCE.md`.
4. Read `agent-docs/SEO-GEO-AUDIT-CHECKLIST.md` for `SEO ne durumda`, GEO status, technical SEO audit, AI search readiness, or checklist-style reporting.
5. Read `agent-docs/BLOG-PUBLISHING-PLAYBOOK.md` for Supabase-backed blog posts.
6. Read `agent-docs/PROJECT-BRIEF.md` for positioning and proof boundaries.
7. Read `agent-docs/DESIGN.md` for visible page, image, accessibility, and layout work.
8. Read `agent-docs/WORKFLOW.md` and `agent-docs/DEPLOYMENT-QA.md` before release or live verification.
9. Inspect the current code and registries before editing.

## Required Skill Set

Use these skills as the HydrogenExpert content quality stack. Apply the relevant parts to the task rather than producing generic reports.

For `SEO ne durumda` answers, `seo-content-strategist` and the relevant GEO skills are mandatory. Report the resulting status against `agent-docs/SEO-GEO-AUDIT-CHECKLIST.md`, including unknowns and access blockers.

| Skill | HydrogenExpert use |
| --- | --- |
| `seo-content-strategist` | Keyword, search intent, cluster shape, on-page SEO, technical SEO checks, and internal-link logic. |
| `competitive-strategist` | Gap analysis against competing answers, agencies, marketplaces, official docs, and alternative buyer paths without copying or using FUD. |
| `geo-content` | E-E-A-T, first-hand experience, author trust, topical depth, and AI-readable content structure. |
| `geo-citability` | Self-contained answer blocks, extractable paragraphs, direct definitions, comparison tables, and source-backed claims. |
| `geo-schema` | JSON-LD coverage, entity graph, Article/FAQPage/BreadcrumbList/Person/ProfessionalService-style schema review. |
| `geo-llmstxt` | `llms.txt` and `llms-full.txt` route coverage, page summaries, and AI-readable site map quality. |
| `humanizer` | Remove AI-ish filler while preserving the direct senior-operator voice. |
| `brand-guidelines` | Keep supporting artifacts visually consistent; HydrogenExpert site UI still follows `agent-docs/DESIGN.md` as the local brand source. |
| `gtm-copywriter` | Clear commercial copy, CTA fit, reader momentum, and credible action language. |
| `senior-product-marketer` | Buyer-stage clarity, outcome framing, package/service conversion paths, and friction reduction. |
| `positioning-statement` | Keep the service positioned as a senior-led Shopify Hydrogen agency alternative, not a generic agency. |
| `company-research` | Research public competitors, Shopify sources, client/public proof, or market context from attributable sources. |
| `marketing-strategist` | Tie content work to demand, conversion, topical authority, and a coherent commercial narrative. |
| `accessibility-basic-check` | Check alt/title text, headings, labels, contrast, keyboard/focus, and semantic structure when UI changes. |
| `design-review` | Review visible content surfaces for HydrogenExpert editorial polish, layout consistency, and responsive presentation. |
| `qa-test-planner` | Turn content/discovery changes into concrete regression, smoke, and validation steps. |

## Content-Bound Rule

HydrogenExpert content must be connected as one system. Do not ship isolated copy.

For each new or materially updated public content surface, decide which of these must change together:

- page body content,
- metadata, canonical, Open Graph, and titles,
- source metadata in `features/content-sources/`,
- related-link entries in `features/content-relations/`,
- blog visual, FAQ, pitch, and link enhancements in `features/post-enhancements/`,
- public route membership in `features/public-discovery/manifest.ts`,
- sitemap behavior through `app/sitemap.ts` and `lib/sitemap-entries.ts`,
- `llms.txt` and `llms-full.txt` through `app/llms.txt/route.ts`, `app/llms-full.txt/route.ts`, and `lib/llms.ts`,
- robots behavior through `app/robots.ts` when crawl policy changes,
- JSON-LD and schema-bearing rendered HTML,
- internal links from related service, article, blog, case-study, and commercial pages,
- validation scripts and tests when guardrails should enforce the rule.

## Production Workflow

Use this sequence for HydrogenExpert content work:

1. Define the page type, buyer stage, target keyword, search intent, and conversion job.
2. Run gap analysis against current HydrogenExpert pages, official Shopify sources, live SERP or competitor context when requested, and existing article/service clusters.
3. Check official Shopify sources before drafting Shopify, Hydrogen, Oxygen, Storefront API, Customer Account API, Storefront MCP, UCP, checkout, analytics, deployment, or platform-behavior claims. Check official Google Search documentation before SEO policy claims.
4. Separate official Shopify facts, Emre operator experience, commercial opinion, case-study facts, and SEO hypotheses.
5. Draft source-grounded copy that adds operator interpretation instead of rewriting official docs.
6. Humanize the copy into a direct expert voice: useful, specific, non-hype, and commercially honest.
7. Add answer-first sections, comparison tables, FAQs, summaries, and self-contained paragraphs where they improve AI citability.
8. Add or update schema: Article, BlogPosting, FAQPage, BreadcrumbList, ItemList, Person, ProfessionalService, or page-specific JSON-LD as appropriate.
9. Wire the content into sitemap, `llms`, source metadata, content relations, and internal links when the route should be discoverable.
10. Add a clear CTA that matches the page intent: scope review, audit, package path, contact, hire-me, or related proof.
11. Run proof safety review before finalizing.
12. Run final QA and record validation in the PR.

## Forbidden Content

Do not add:

- fake metrics,
- fake testimonials,
- fake client quotes,
- fake logos,
- fake partner badges,
- fake screenshots,
- fake ratings,
- fake office, address, local-presence, or team-capacity claims,
- unsupported Shopify Partner, Shopify Plus Partner, platform, API, Hydrogen, Oxygen, or SEO claims,
- private client evidence, private dashboards, private links, Slack/project-management screenshots, or private customer data,
- broad "best agency" filler,
- "Hydrogen is always better" positioning,
- city, country, vertical, or modifier pages with near-duplicate copy,
- non-HydrogenExpert repo content-production rules,
- internal review notes, AI scores, missing-material notes, or draft weaknesses in public content.

If a fact is missing, omit it or mark it internally as `Unknown - needs confirmation`. Do not turn the gap into public copy.

## Proof Safety

HydrogenExpert may use only approved proof from project docs, current code, public profiles, or explicit Emre input.

Allowed client and proof names include:

- EveShop,
- Bayam or Bayam Jewelry,
- Rebel Bunny or Rebel Bunny Matcha,
- Kirazev,
- Clohi.

Use those names only in HydrogenExpert proof, portfolio, case-study, or approved client-reference context. Do not remove them during cross-project cleanup. Do not turn Kirazev or Clohi into Hydrogen case studies; they are Shopify Liquid portfolio proof unless a newer approved source says otherwise.

Re-verify drift-prone proof before increasing or restating exact values such as Upwork status, job success score, hours, follower counts, ratings, or dated platform behavior.

## Content Publishing Surfaces

| Surface | Canonical files and registries | Rules |
| --- | --- | --- |
| Supabase-backed blog posts | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `lib/posts.ts`, `lib/post-content.ts`, `features/post-enhancements/index.ts`, `features/content-sources/index.ts` | Do not publish without explicit article-specific Emre approval and real source material. Keep private notes out of public content. |
| Articles | `app/articles/page.tsx`, `app/articles/[slug]/page.tsx`, `lib/articles.ts`, `features/articles/traffic-gap/`, `content/blog-clusters/shopify-authority-clusters.json`, `features/content-sources/index.ts` | Evergreen guides need keyword, intent, source metadata, public status, internal links, Article schema, sitemap, and `llms-full.txt` coverage when published. |
| Service and landing pages | `app/*/page.tsx`, `features/services/registry/`, `components/ServiceLandingPage.tsx`, `components/service-landing/` | Keep package/service positioning fixed-scope, senior-led, and honest about when Hydrogen is not right. |
| Case studies | `app/case-studies/page.tsx`, `app/case-studies/[slug]/page.tsx`, `data/caseStudies.ts`, `data/clientLogos.ts`, `lib/brand-client-assets.ts`, `docs/hydrogenexpert-v1/proof-registry.md` | Preserve EveShop, Bayam, Rebel Bunny, Kirazev, and Clohi where approved. Do not invent results, testimonials, logos, or metrics. |
| Commercial/public pages | `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/hire-me/page.tsx`, `app/services/page.tsx`, `app/cost/page.tsx`, `app/shopify-hydrogen-*`, `lib/decision-pages.ts` | Keep buyer-stage clarity, proof safety, CTA fit, metadata, schema, and internal links aligned. |
| Public discovery | `app/llms.txt/route.ts`, `app/llms-full.txt/route.ts`, `lib/llms.ts`, `app/sitemap.ts`, `lib/sitemap-entries.ts`, `app/robots.ts`, `features/public-discovery/manifest.ts`, `lib/structured-data.ts` | Route membership, summaries, sitemap entries, robots behavior, and schema must describe the same public truth. |
| Content registries | `features/content-sources/`, `features/public-discovery/`, `features/content-relations/`, `features/post-enhancements/`, `features/traffic-foundation/` | Update canonical `features/` modules directly; the `lib/` compatibility exports were removed on 2026-07-04. |

## HydrogenExpert Improvement Plan

Use this plan when Emre asks to improve content quality, SEO/GEO, or discovery based on these rules.

### 1. Audit and Inventory

- List all affected pages, routes, registries, and discovery outputs.
- Separate Supabase-backed blog posts, local articles, service pages, case studies, commercial pages, and discovery surfaces.
- Check current source metadata, `lastVerified`, claim classifications, schema, sitemap inclusion, `llms` inclusion, and related links.
- Identify orphan pages, duplicated intent, weak CTAs, missing source metadata, and unsupported proof.

### 2. Blog and Articles

- Confirm whether the work is Supabase-backed blog publishing or local `/articles` content.
- For blog posts, require Emre's explicit publication request and real input material.
- For articles, map keyword, intent, cluster role, official Shopify sources, internal links, FAQ, Article schema, and `llms-full.txt` summary.
- Keep `/blog` as production notes and `/articles` as evergreen merchant guides unless Emre changes the content architecture.

### 3. Service and Landing Pages

- Map each page to one buyer problem, one primary keyword or intent, and one conversion path.
- Keep senior-led agency-alternative positioning and fixed-scope package language where relevant.
- Add operator interpretation, decision tables, FAQ, proof, and internal links only when they are useful and sourced.
- Avoid near-duplicate agency, developer, expert, location, or vertical pages unless the page has differentiated search intent and buyer logic.

### 4. Case Studies and Proof

- Preserve approved HydrogenExpert client names.
- Keep EveShop and Bayam proof in their approved contexts.
- Use Rebel Bunny public Upwork feedback only where the source remains valid.
- Keep Kirazev and Clohi as Shopify Liquid portfolio proof, not Hydrogen proof.
- Do not add client logos, screenshots, testimonials, ratings, or metrics unless already approved and present in the repo or explicitly supplied by Emre.

### 5. Discovery, Schema, llms, Sitemap, and Internal Links

- Update `features/public-discovery/manifest.ts` when a static route should appear in public discovery or commercial verification.
- Update `lib/llms.ts` and `LLMS_CORE_PAGE_ENTRIES` when a route should shape AI-readable site understanding.
- Confirm sitemap behavior through `app/sitemap.ts` and `lib/sitemap-entries.ts`.
- Confirm robots behavior through `app/robots.ts` when crawl policy changes.
- Add or update JSON-LD so schema matches rendered content and entity proof.
- Update `features/content-relations/index.ts` for cluster-aware related links.
- Keep `features/content-sources/index.ts` current for Shopify/platform claims and static page metadata.

### 6. Final QA

- Proof safety: no fake or unsupported proof.
- Source safety: official Shopify/platform claims have current source metadata.
- GEO quality: answer blocks, extractable summaries, headings, FAQ, and self-contained passages.
- SEO quality: title, description, H1, canonical, schema, sitemap, robots, internal links, and image alt/title where relevant.
- Accessibility and design: semantic headings, useful alt/title, readable layout, focus and contrast for touched UI.
- Public/private boundary: no internal notes, private evidence, or draft commentary in public pages.
- Cross-project boundary: no non-HydrogenExpert repo rules in HydrogenExpert docs or content.

### 7. Validation Commands

Use the narrowest validation set that proves the change:

```bash
git diff --check
npm run validate:content
npm run audit:shopify-claims
```

For code, route, schema, registry, or rendered public-content changes, add:

```bash
npm run lint
npm run typecheck
npm run test
NEXT_PUBLIC_SITE_URL=https://hydrogenexpert.co npm run build
npm run verify:internal-links
```

For commercial launch or public discovery changes, add:

```bash
COMMERCIAL_LAUNCH_BASE_URL=https://hydrogenexpert.co NEXT_PUBLIC_SITE_URL=https://hydrogenexpert.co npm run verify:commercial-launch
```

If a change is docs-only and does not affect rendered app code, a full build is usually not required. Still run `git diff --check`, a cross-project leak scan, and `npm run validate:content` when content governance or routing is in scope.
