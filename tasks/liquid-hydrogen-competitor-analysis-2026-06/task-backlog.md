# Liquid and Hydrogen Competitor Task Backlog

Status: Implemented
Last updated: 2026-06-17
Owner: Agent
Source of truth: `competitor-profiles.md`, HydrogenExpert current repo, public competitor pages, Agent analysis

## Purpose

This backlog breaks competitor findings into small implementation tasks that can be executed after review. It is intentionally scoped so each task can be completed, validated, and shipped without turning the site into a generic agency clone.

Implementation note: The P0, P1, and P2 themes were implemented on branch `codex/liquid-hydrogen-competitor-gaps`. See `implementation-log.md` for changed surfaces and proof guardrails.

## Grounding

- Read-first routing: `AGENTS.md`.
- Planning rules: `agent-docs/PLAN-STANDARDS.md`.
- Documentation rules: `agent-docs/DOC-STANDARDS.md`.
- Content rules: `agent-docs/CONTENT-GOVERNANCE.md` and `agent-docs/CONTENT-PRODUCTION-PLAYBOOK.md`.
- Existing positioning: senior-led Hydrogen services, fixed-scope `$2K-$5K`, Liquid/no-rebuild as valid outcomes.
- Current relevant routes include `/shopify-hydrogen-vs-liquid`, `/when-not-to-use-hydrogen`, `/liquid-to-hydrogen-migration`, `/shopify-hydrogen-packages`, `/shopify-hydrogen-fit-audit`, `/headless-shopify-agency`, `/case-studies`, and `/services`.

## P0 Tasks

### LH-P0-01: Make Liquid a First-Class Decision Path

Competitor trigger: Limely, Flux, Liquify, Quickfire.

Objective: Make it obvious that HydrogenExpert can recommend Liquid cleanup or no rebuild when that is the safer business move.

Affected surfaces: `/services`, `/shopify-hydrogen-packages`, `/when-not-to-use-hydrogen`, `/shopify-hydrogen-vs-liquid`, service registry if needed.

Acceptance criteria:
- The primary service journey includes Liquid cleanup as a valid outcome.
- Liquid is not described as inferior by default.
- The page clearly explains when Liquid is faster, safer, or cheaper to maintain.
- Internal links route Liquid-curious buyers to case studies and fit review.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`
- `npm run verify:internal-links`

### LH-P0-02: Strengthen the Liquid-to-Hydrogen Migration Page

Competitor trigger: Arctic Grey, Conversion, Flux.

Objective: Make `/liquid-to-hydrogen-migration` the clearest buyer path for migration risk, SEO preservation, route mapping, and staged scope.

Affected surfaces: `/liquid-to-hydrogen-migration`, `/shopify-hydrogen-vs-liquid`, `/shopify-hydrogen-seo`, related links.

Acceptance criteria:
- Includes phased migration checklist.
- Names SEO risks: route mapping, metadata, canonical, structured data, redirects, content visibility.
- Explains when to keep Liquid.
- CTA routes to scope review, not a generic contact ask.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`
- `npm run verify:internal-links`

### LH-P0-03: Build a Liquid vs Hydrogen Fit Review Asset

Competitor trigger: Limely, Swanky, Flux, Superco.

Objective: Turn the existing honest decision posture into a conversion asset.

Affected surfaces: `/shopify-hydrogen-fit-audit`, `/shopify-hydrogen-vs-liquid`, `/contact`, lead-capture copy.

Acceptance criteria:
- Buyer can understand what to send: URL, current theme, problem, product count, design status, integrations, timeline.
- Output expectations are clear: Starter, Standard, Growth, Custom, Liquid cleanup, support, or no rebuild.
- No fake guarantee or fake diagnosis.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`
- Lead form smoke if fields or copy change.

### LH-P0-04: Upgrade Case Study Routing for Hydrogen and Liquid Proof

Competitor trigger: Avex, BAO, Absolute Web, Anatta.

Objective: Make approved Hydrogen and Liquid proof easier to connect to buyer decisions.

Affected surfaces: `/case-studies`, individual case studies, `/shopify-hydrogen-packages`, `/shopify-hydrogen-for-luxury-jewelry`, `/shopify-hydrogen-for-large-catalog-retail`.

Acceptance criteria:
- EveShop, Bayam, Rebel Bunny, Kirazev, and Clohi are mapped to the decision they prove.
- Liquid cases are not misrepresented as Hydrogen.
- Case cards show what each proof helps decide.
- No invented metrics, screenshots, logos, or testimonials.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`
- `npm run verify:internal-links`

### LH-P0-05: Add Senior Specialist vs Agency Comparison

Competitor trigger: Conversion, Swanky, We Make Websites, Charle, Eastside Co.

Objective: Explain when a buyer should choose a senior specialist, a full agency, or no rebuild.

Affected surfaces: `/shopify-hydrogen-agency`, `/shopify-hydrogen-agency-usa`, `/headless-shopify-agency`, possibly one article.

Acceptance criteria:
- Comparison is fair and not negative.
- Includes "choose an agency if..." and "choose a direct senior specialist if..."
- Does not claim HydrogenExpert has agency capacity, local office, partner status, or team size.
- CTA leads to fit review.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`

### LH-P0-06: Improve Headless Decision Tree

Competitor trigger: Flux, Swanky, Charle, Limely.

Objective: Make `/headless-shopify-agency` and `/shopify-hydrogen-vs-liquid` clearer about Liquid, Hydrogen, broader headless, and theme-native tradeoffs.

Affected surfaces: `/headless-shopify-agency`, `/shopify-hydrogen-vs-liquid`, `/when-not-to-use-hydrogen`.

Acceptance criteria:
- Buyer can compare Liquid, Hydrogen, and other headless paths quickly.
- Official Shopify platform claims are source-grounded before publishing.
- Maintenance ownership is explained.
- "Hydrogen is always better" is avoided.

Validation:
- Shopify source check before implementation.
- `npm run audit:shopify-claims`
- `npm run validate:content`

## P1 Tasks

### LH-P1-01: Add Liquid Cleanup Mini-Offer Clarity

Competitor trigger: Webinopoly, Liquify, Quickfire.

Objective: Capture serious Liquid cleanup projects while filtering out tiny theme tweaks.

Affected surfaces: `/when-not-to-use-hydrogen`, `/services`, `/contact`, possibly a dedicated article.

Acceptance criteria:
- Defines what Liquid cleanup includes and excludes.
- Makes "I may point you to a lighter option" a trust signal.
- Routes serious cleanup to fit review.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`

### LH-P1-02: Create Hydrogen Maintenance and Ownership Content

Competitor trigger: Flux, Limely, Swanky.

Objective: Explain the ongoing maintenance difference between Liquid and Hydrogen better than generic agency pages.

Affected surfaces: `/shopify-hydrogen-maintenance-cost`, `/shopify-hydrogen-cost`, `/shopify-hydrogen-vs-liquid`.

Acceptance criteria:
- Separates build cost from maintenance cost.
- Explains application ownership, dependencies, deployment, QA, and content editing.
- Includes when Liquid is cheaper long-term.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`

### LH-P1-03: Build a Migration SEO Risk Checklist

Competitor trigger: Conversion, Arctic Grey, Absolute Web.

Objective: Own the SEO-safe migration angle without promising "zero-loss" outcomes.

Affected surfaces: `/shopify-hydrogen-seo`, `/liquid-to-hydrogen-migration`, `/articles`.

Acceptance criteria:
- Checklist covers crawlability, redirects, canonical, metadata, schema, SSR content, sitemap, robots, internal links.
- Wording avoids guaranteed rankings.
- Links to fit audit or SEO cleanup.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`
- `npm run verify:internal-links`

### LH-P1-04: Improve Package Readiness and Timeline Dependencies

Competitor trigger: blubolt, Superco, Barrel.

Objective: Make fixed-scope packages easier to self-qualify.

Affected surfaces: `/shopify-hydrogen-packages`, `/shopify-hydrogen-cost`, `/upwork-shopify-hydrogen`.

Acceptance criteria:
- Readiness factors include design status, product count, integrations, account/cart behavior, SEO risk, content readiness.
- Timeline dependencies are clear without fake fixed delivery promises.
- Integration-heavy work routes to custom scope.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`

### LH-P1-05: Add US/UK Buyer Trust Notes

Competitor trigger: Conversion, Swanky, Eastside Co, We Make Websites, Velstar.

Objective: Improve US/UK trust without claiming local office or agency team.

Affected surfaces: `/shopify-hydrogen-agency-usa`, `/contact`, `/about`, `/services`.

Acceptance criteria:
- Remote collaboration, timezone overlap, async scoping, Upwork/LinkedIn proof, and direct senior delivery are clear.
- No fake US/UK office claim.
- CTA fits international buyers.

Validation:
- `npm run validate:content`
- Proof review against current approved proof.

### LH-P1-06: Create Competitor-Informed Article Cluster

Competitor trigger: Coalition, Charle, Flux, Limely, Swanky.

Objective: Add search/GEO content that answers repeated buyer questions before they compare agencies.

Candidate article titles:
- Shopify Liquid vs Hydrogen: when to keep the theme
- Liquid to Hydrogen migration checklist
- Hydrogen maintenance cost vs Shopify theme maintenance
- Headless Shopify agency vs senior Hydrogen developer
- Shopify Plus theme rebuild vs custom Hydrogen storefront

Acceptance criteria:
- Each article has unique search intent and not doorway duplication.
- Official Shopify claims are source-grounded.
- Internal links route to service pages, case studies, and fit review.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`
- `npm run verify:internal-links`

### LH-P1-07: Add Extractable GEO Answer Blocks

Competitor trigger: Coalition, Absolute Web, Conversion.

Objective: Make AI/search systems understand HydrogenExpert's narrow value without broad agency claims.

Affected surfaces: priority commercial pages and article templates.

Acceptance criteria:
- Pages include short answer-first sections.
- "Best for / not best for" blocks are self-contained.
- llms summaries remain aligned with page truth if changed.

Validation:
- `npm run validate:content`
- `npm run verify:internal-links`
- `COMMERCIAL_LAUNCH_BASE_URL=https://hydrogenexpert.co NEXT_PUBLIC_SITE_URL=https://hydrogenexpert.co npm run verify:commercial-launch` if public discovery changes.

### LH-P1-08: Add Off-Site Authority Checklist

Competitor trigger: Velstar, Eastside Co, BAO, Avex.

Objective: Track truthful external proof opportunities without inventing partner status.

Affected surfaces: internal docs/tasks only first; public pages only after proof exists.

Acceptance criteria:
- Lists truthful profiles and directories to maintain: LinkedIn, Upwork, Udemy, personal site, GitHub if relevant, Shopify directory only if actually eligible.
- Separates "can do now" from "requires proof/access."
- No unsupported Shopify Partner or Plus Partner claim.

Validation:
- Manual proof review.

## P2 Tasks

### LH-P2-01: Add Premium Catalog Decision Content

Competitor trigger: BAO, Avex.

Objective: Use Bayam proof to explain when premium/luxury catalog UX justifies Hydrogen.

Affected surfaces: `/shopify-hydrogen-for-luxury-jewelry`, `/case-studies/bayam-*`, `/shopify-hydrogen-vs-liquid`.

Acceptance criteria:
- Explains catalog nuance, showroom trust, collection context, and premium browsing.
- Avoids fake luxury client expansion.
- Links to Bayam and fit review.

Validation:
- `npm run validate:content`
- Proof review.

### LH-P2-02: Add CPG/DTC Education Decision Content

Competitor trigger: Barrel, Charle.

Objective: Use Rebel Bunny and DTC education routes to clarify when content + commerce justify Hydrogen.

Affected surfaces: `/shopify-hydrogen-for-dtc-education-brands`, Rebel Bunny case study, `/shopify-hydrogen-vs-liquid`.

Acceptance criteria:
- Explains why commerce, education, partner paths, and brand storytelling may need one storefront system.
- Does not invent performance metrics.
- Links to packages and fit review.

Validation:
- `npm run validate:content`
- Proof review.

### LH-P2-03: Add Large Catalog Decision Content

Competitor trigger: Anatta, Absolute Web, Eastside Co.

Objective: Use EveShop and approved large-catalog proof to clarify when Hydrogen helps catalog complexity.

Affected surfaces: `/shopify-hydrogen-for-large-catalog-retail`, EveShop case study, package page.

Acceptance criteria:
- Explains catalog discovery, SSR content, route structure, and mobile/product flow.
- Uses only approved existing proof values.
- Does not imply all large catalogs need Hydrogen.

Validation:
- `npm run validate:content`
- `npm run audit:shopify-claims`

### LH-P2-04: Add Integration Complexity Boundaries

Competitor trigger: Sunrise Integration, Absolute Web, Barrel.

Objective: Clarify when a project becomes custom/agency-scale because of ERP, POS, B2B, wholesale, WMS, or custom app requirements.

Affected surfaces: `/shopify-hydrogen-packages`, `/contact`, `/shopify-hydrogen-cost`.

Acceptance criteria:
- Integration-heavy scope is not squeezed into Starter/Standard/Growth packages.
- Fit review asks enough to detect integration risk.
- Mentions that some work may require a larger agency or specialist integration partner.

Validation:
- `npm run validate:content`
- Lead form QA if fields change.

### LH-P2-05: Add Competitor Monitoring Cadence

Competitor trigger: all.

Objective: Keep this research from going stale.

Affected surfaces: this task folder or an automation doc only; no public page needed.

Acceptance criteria:
- Defines quarterly refresh list.
- Rechecks US/UK SERPs, Similarweb/Semrush-style estimates, official competitor pages, and HydrogenExpert pages.
- Flags competitor pages that changed Liquid/Hydrogen messaging.

Validation:
- Manual checklist update.

## Completion Checklist

- Every competitor in `competitor-profiles.md` has a one-by-one profile.
- Every P0 task names affected HydrogenExpert surfaces.
- Public implementation tasks include validation commands.
- No task requires fake proof, fake partner status, fake office, or invented metrics.
- Liquid, Hydrogen, and no-rebuild are all preserved as valid buyer outcomes.
- Work can be executed through the normal PR-first workflow after Emre approves implementation.
