# HydrogenExpert Content Protocol

This protocol keeps HydrogenExpert useful, source-grounded, and commercially honest. Read it before creating or materially updating Shopify, Hydrogen, Oxygen, Storefront API, Customer Account API, Storefront MCP, UCP, SEO, analytics, or migration content.

## Source Hierarchy

1. Personal production experience from Emre Mutlu.
2. Official Shopify docs checked through Shopify AI Toolkit / Shopify Dev MCP.
3. Google Search docs for SEO, helpful-content, spam, and structured-data policy.
4. Public case-study evidence already approved for HydrogenExpert.
5. Competitor references only for positioning research, not factual Shopify platform claims.

Shopify Dev MCP is for documentation, API, schema, and implementation grounding. Storefront MCP is for store-specific catalog, cart, checkout, policy, and agentic commerce topics. Do not use Storefront MCP as the primary source for Hydrogen platform facts.

## Claim Classification

Use these internal classifications in source metadata:

- `official_shopify_fact`: Current Shopify platform behavior, API shape, docs, limitations, or implementation guidance.
- `emre_experience`: Emre's production experience, operational judgment, or observed delivery pattern.
- `commercial_opinion`: Positioning, fit guidance, pricing framing, and buyer advice.
- `case_study_fact`: Approved client, role, stack, proof, or project-context detail.
- `seo_hypothesis`: SEO strategy or ranking logic grounded in Google guidance and site experience, not guaranteed outcome.

## Forbidden Content

- Fake testimonials, fake metrics, fake logos, fake screenshots, fake partner badges, fake ratings, or invented client approvals.
- Unsupported "Shopify Partner", "Shopify Plus Partner", or agency-team claims.
- "Hydrogen is always better" or "headless is the default upgrade" claims.
- Generic "best Shopify agency" filler.
- Rewritten Shopify docs with no operator interpretation.
- City, country, or vertical clone pages with near-identical copy.
- Fake freshness such as "latest" without a source check and `lastVerified` date.

## Required Page Standard

Every new or materially updated buyer-facing page must include:

- A unique buyer problem and decision context.
- Source-backed Shopify facts where platform behavior appears.
- Emre's operator interpretation separated from official facts.
- Clear decision guidance, including when Hydrogen may not be the right move.
- Contextual internal links to relevant service, case-study, and blog pages.
- Metadata, canonical, and schema review.
- Internal source metadata using `ContentSource` from `lib/content-sources.ts`.

Source metadata is internal by default. It does not need to be visible unless the page intentionally includes public references.

## Blog Production Workflow

Codex may prepare blog infrastructure, templates, source maps, and draft support material, but Codex must not publish Supabase-backed public blog posts on its own. Public blog publishing happens only when Emre provides the real input/source material and explicitly asks Codex to publish that article.

For every technical blog post:

1. Define target reader.
2. Define search intent and target keyword.
3. Query Shopify Dev MCP for official docs before platform claims are drafted.
4. Pull related HydrogenExpert service, case-study, and blog links.
5. Classify claims as official fact, Emre experience, interpretation, recommendation, or SEO hypothesis.
6. Draft with practical operator interpretation instead of only summarizing docs when Emre has asked for a draft or publish task.
7. Add source metadata sidecar in `lib/content-sources.ts`.
8. Add visible further reading only when it helps the reader.
9. Run `npm run audit:shopify-claims`.
10. Run lint, typecheck, and build.

Future blog metadata should include `title`, `description`, `targetKeyword`, `searchIntent`, `sourceMap`, `lastVerified`, `reviewedBy`, and `contentType`.

## AI-Assisted Content Review Checklist

- Does this page include original operator judgment?
- Does it add value beyond official Shopify docs?
- Are official Shopify facts source-backed?
- Is the page useful without ranking?
- Is the title honest?
- Are claims verifiable?
- Is there any fake freshness?
- Does the page duplicate another page?
- Is there a clear next step for the reader?
- Are source metadata and `lastVerified` present?

## Doorway Risk Review

Overlapping pages must differ by search intent, buyer, proof, decision table, and CTA. Review these pairs before publishing or expanding them:

- `/shopify-hydrogen-agency`
- `/shopify-hydrogen-agency-usa`
- `/headless-shopify-agency`
- `/shopify-hydrogen-developer`
- `/custom-shopify-hydrogen-storefront`

Do not create location pages unless the page has real differentiated content, proof, collaboration context, or buyer logic.

## PR Summary Requirement

Every content PR must include:

- Shopify Dev MCP sources checked.
- Personal experience or case-study claims used.
- `npm run audit:shopify-claims` result.
- AI-assisted content checklist completion.
- Notes about any unsupported or deferred claims.
