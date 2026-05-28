# HydrogenExpert Agent Guide

All agents working in this repository must read this file first before code changes, audits, planning, debugging, documentation updates, deployments, or live verification.

This file is the routing layer. It tells you where the current truth lives so you do not rely on stale chat context, scattered assumptions, or older root-level docs.

## Read Order

1. Read `AGENTS.md`.
2. Check `git status --short --branch` and preserve any existing user changes.
3. Read the relevant `agent-docs/` files for the task.
4. Before creating or materially updating a plan, read `agent-docs/PLAN-STANDARDS.md`.
5. Before creating or materially updating documentation, read `agent-docs/DOC-STANDARDS.md`.
6. Before shared-code, layout, registry, content, or architecture work, read `agent-docs/ENGINEERING-PRINCIPLES.md`.
7. Read tool-specific or task-specific rules only after the relevant project docs.
8. Inspect the current code before editing.

## Routing Table

| Need | Read |
| --- | --- |
| Quick current-session orientation | `agent-docs/HANDOFF.md` |
| Product, stack, business context, and positioning | `agent-docs/PROJECT-BRIEF.md` |
| Current repo snapshot and active areas | `agent-docs/CURRENT-STATE.md` |
| Repo folder map and placement rules | `agent-docs/REPO-STRUCTURE.md` |
| Durable technical, product, and workflow decisions | `agent-docs/DECISIONS.md` |
| Branch, PR, validation, deploy, and closeout rules | `agent-docs/WORKFLOW.md` |
| DRY, KISS, and code quality principles | `agent-docs/ENGINEERING-PRINCIPLES.md` |
| Prioritized backlog and follow-ups | `agent-docs/TODO.md` |
| Planning standards | `agent-docs/PLAN-STANDARDS.md` |
| Documentation writing standards | `agent-docs/DOC-STANDARDS.md` |
| Next.js, Vercel, Supabase, routes, scripts, and HydrogenExpert implementation notes | `agent-docs/HYDROGEN.md` |
| Shopify/Hydrogen content governance and publishing rules | `agent-docs/CONTENT-GOVERNANCE.md` |
| Content production, SEO/GEO, blog, article, landing page, case-study, public discovery, sitemap, llms, schema, and internal-link work | `agent-docs/CONTENT-PRODUCTION-PLAYBOOK.md` |
| SEO/GEO status questions such as `SEO ne durumda`, technical SEO checklist reporting, and AI search readiness | `agent-docs/SEO-GEO-AUDIT-CHECKLIST.md` |
| Blog publishing workflow and public-post guardrails | `agent-docs/BLOG-PUBLISHING-PLAYBOOK.md` |
| Visual system, accessibility, image alt/title, and UI rules | `agent-docs/DESIGN.md` |
| Deployment QA and live verification checklist | `agent-docs/DEPLOYMENT-QA.md` |
| Historical positioning rules | `docs/positioning-rules.md` |
| Historical Shopify source grounding notes | `docs/shopify-source-grounding.md` |
| External SEO authority profile checklist | `docs/seo-external-authority-checklist.md` |
| Deployment changelog and PR history | `CHANGELOG.md` |
| Package scripts and dependency versions | `package.json` |

## Precedence

- `AGENTS.md` is the canonical read-first file.
- Relevant `agent-docs/` files are the canonical project context.
- `agent-docs/DOC-STANDARDS.md` is the canonical standard for creating or materially updating documentation.
- `agent-docs/PLAN-STANDARDS.md` is the canonical standard for creating or materially updating plans.
- `agent-docs/ENGINEERING-PRINCIPLES.md` defines DRY, KISS, module shape, and architecture expectations.
- `agent-docs/HYDROGEN.md` defines implementation, runtime, validation, and script expectations for this Next.js site.
- `agent-docs/CONTENT-GOVERNANCE.md` defines Shopify/Hydrogen content and publishing guardrails.
- `agent-docs/CONTENT-PRODUCTION-PLAYBOOK.md` defines the execution workflow for HydrogenExpert content production, SEO/GEO, discovery, schema, `llms`, sitemap, and internal-link work.
- `agent-docs/SEO-GEO-AUDIT-CHECKLIST.md` defines the required response contract for `SEO ne durumda` and similar SEO/GEO status questions.
- `agent-docs/DESIGN.md` defines visual, accessibility, and image rules.
- `package.json` is the source of truth for dependency versions and scripts.
- Current code is the source of truth for behavior. If docs and code disagree, inspect the code and update docs as part of the work when appropriate.

## Safety Rules

- Do not put secrets, API keys, tokens, passwords, private customer data, private access links, or private customer evidence in documentation.
- Never overwrite or revert uncommitted user changes unless Emre explicitly asks.
- Do not invent metrics, testimonials, screenshots, logos, ratings, client quotes, approvals, revenue, conversion numbers, partner badges, office locations, or team claims.
- Keep HydrogenExpert positioned as a senior-led Shopify Hydrogen service and agency alternative, not as a generic full-service agency.
- Before Shopify, Hydrogen, Oxygen, Storefront API, Customer Account API, Storefront MCP, UCP, SEO, analytics, or migration content changes, read `agent-docs/CONTENT-GOVERNANCE.md`.
- Before content production, blog, article, landing page, case-study, public discovery, sitemap, `llms`, schema, SEO/GEO, or internal-link graph changes, read `agent-docs/CONTENT-PRODUCTION-PLAYBOOK.md`.
- When Emre asks `SEO ne durumda` or a close SEO/GEO status question, use the relevant SEO and GEO skills, then report the status of the checklist in `agent-docs/SEO-GEO-AUDIT-CHECKLIST.md` with live evidence and access blockers.
- Before UI or image work, read `agent-docs/DESIGN.md`; every meaningful image must have meaningful `alt` and `title`.
- Do not publish Supabase-backed public blog posts unless Emre provides real source/input material and explicitly asks to publish that specific article.
- Do not deploy directly from local work or an unreviewed branch.
- Use a PR for every meaningful change. After production is live and verified, merge or close the PR and delete the remote branch unless Emre explicitly asks otherwise.
