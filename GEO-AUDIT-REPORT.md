# GEO Audit Report: HydrogenExpert

**Audit Date:** 2026-05-05
**URL:** https://hydrogenexpert.co
**Business Type:** Agency/Services - solo senior Shopify Hydrogen consulting
**Pages Analyzed:** 35 sitemap URLs plus `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `feed.xml`, Lighthouse, desktop/mobile Playwright checks, and external entity search
**Method:** `geo-audit` skill workflow: live discovery, page-level crawl, AI visibility analysis, platform readiness, technical GEO, content E-E-A-T, schema review, and score aggregation.
**Remediation status:** Findings below were used as the baseline. Code-side fixes were implemented after the audit. Account-owner profile updates were completed on 2026-05-06 and HydrogenExpert schema now includes the owned personal site and YouTube channel; some third-party surfaces may still need public crawl/cache refresh time.

---

## Executive Summary

**Overall GEO Score: 75/100 (Good)**

HydrogenExpert has an excellent technical SEO foundation and strong niche citability for Shopify Hydrogen questions. The site is server-rendered, indexable, schema-rich, fast, and backed by real operator proof. The biggest remaining GEO gaps are not basic crawlability; they are external entity corroboration, schema identity consolidation, `llms.txt` formatting, and platform-specific signals for Gemini, Perplexity, and Bing Copilot.

### Remediation Completed In Code

| Finding | Status |
|---|---|
| `llms.txt` and `llms-full.txt` link format | Fixed locally: core/profile/blog links now use markdown link plus description format. |
| Schema entity `@id` reuse | Fixed locally: canonical ids were added for Person, ProfessionalService, Organization, and WebSite usage. |
| `Service.provider` identity fragmentation | Fixed locally: service schemas now point to the root HydrogenExpert provider entity. |
| Raw markdown headings in blog content | Fixed locally: markdown-like headings render as real `h2`/`h3` elements instead of paragraph text. |
| Semantic tables on high-intent decision pages | Fixed locally: service and decision-page logic now renders decision rows as real HTML tables. |
| Global `X-Robots-Tag` conflict | Fixed locally: the global `index, follow` header was removed so route-level noindex metadata can stand on its own. |
| IndexNow key support | Fixed locally: root and `.well-known` IndexNow key files were added. |
| Bing Webmaster meta support | Fixed locally: `BING_SITE_VERIFICATION` can emit `msvalidate.01` when configured. |
| Verified profile hub and editorial standard | Fixed locally: `/about` now includes canonical profile links, the owned personal site, YouTube, and an editorial/source standard section. |

External follow-up still needed: configure Bing Webmaster Tools with the verification value, ping IndexNow from the account/workflow that owns publishing, and let third-party profile/search caches refresh after the account-owner updates.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---:|---:|---:|
| AI Citability | 87/100 | 25% | 21.8 |
| Brand Authority | 52/100 | 20% | 10.4 |
| Content E-E-A-T | 80/100 | 20% | 16.0 |
| Technical GEO | 91/100 | 15% | 13.7 |
| Schema & Structured Data | 67/100 | 10% | 6.7 |
| Platform Optimization | 64/100 | 10% | 6.4 |
| **Overall GEO Score** | | | **74.9/100** |

---

## Critical Issues

None found. No domain-wide crawler block, no JavaScript-only content failure, no domain-level noindex, no 5xx failures in the sitemap crawl, and no invalid JSON-LD syntax was detected in the live pass.

---

## High Priority Issues

### Make `llms.txt` More Spec-Valid

`/llms.txt` and `/llms-full.txt` exist and are useful, but page links are plain `- Title: URL` lines instead of the more parseable `- [Title](URL): description` format. This reduces AI ingestion clarity even though the file is present and content-rich.

**Evidence:** live `/llms.txt` returned 2,873 bytes; `/llms-full.txt` returned 4,362 bytes; source is [lib/llms.ts](/Users/emremutlu/Apps/Codex/hydrogenexpert/lib/llms.ts).

### Consolidate Schema Entity Identity

Live JSON-LD coverage is broad, but entity references are fragmented. `ProfessionalService`, `Organization`, `Person`, `Service`, and `Article` schemas should reuse stable `@id` values such as `https://hydrogenexpert.co/#professionalservice`, `https://hydrogenexpert.co/#organization`, `https://hydrogenexpert.co/#website`, and `https://hydrogenexpert.co/about#emre-mutlu`.

**Evidence:** schema builders are in [lib/structured-data.ts](/Users/emremutlu/Apps/Codex/hydrogenexpert/lib/structured-data.ts); global schema is emitted from [app/layout.tsx](/Users/emremutlu/Apps/Codex/hydrogenexpert/app/layout.tsx).

### Fix `Service.provider` Canonical Target

Service schemas should point `provider` back to the canonical HydrogenExpert provider entity, not the individual service page URL. The current shape can fragment the entity graph across service pages.

**Evidence:** service schema generation is handled in [lib/structured-data.ts](/Users/emremutlu/Apps/Codex/hydrogenexpert/lib/structured-data.ts).

### Build Third-Party HydrogenExpert Entity Signals

External proof strongly supports Emre Mutlu as a Shopify Hydrogen expert through Upwork, LinkedIn, Udemy, Medium, and the personal site. The literal HydrogenExpert brand has sparse third-party corroboration. This depresses AI entity confidence for ChatGPT, Perplexity, Gemini, and Bing.

**Evidence:** web search found relevant Upwork, LinkedIn, Udemy, Medium, and personal-site results, but no strong Wikipedia, Wikidata, Reddit, YouTube, or Google ecosystem entity for HydrogenExpert.

### Fix Raw Markdown Heading Rendering In Blog Content

The platform analysis found at least one blog passage where a raw `## Modern variant API...` marker appears as text instead of a real heading. That weakens heading extraction for AI Overviews and answer engines.

**Evidence:** blog rendering is handled in [app/blog/[slug]/page.tsx](/Users/emremutlu/Apps/Codex/hydrogenexpert/app/blog/[slug]/page.tsx); affected live area includes `https://hydrogenexpert.co/blog/shopify-hydrogen-variant-selection-fallback`.

### Add Semantic Tables To High-Intent Decision Pages

Several commercial decision comparisons are visually structured as cards. For GEO, high-intent comparison content such as `/shopify-hydrogen-vs-liquid` should include real HTML tables where the content is naturally tabular.

**Evidence:** live `/shopify-hydrogen-vs-liquid` is crawlable and useful, but platform analysis scored this as a Google AI Overviews and Gemini improvement opportunity.

---

## Medium Priority Issues

### Scope The Global `X-Robots-Tag`

Live legal pages such as `/privacy` intend `noindex, follow` in HTML metadata, while the global response header emits `X-Robots-Tag: index, follow`. This creates conflicting signals for noindex pages.

**Evidence:** global headers are configured in [next.config.ts](/Users/emremutlu/Apps/Codex/hydrogenexpert/next.config.ts); noindex intent appears in legal page metadata.

### Improve Merchant Readability On Service And Vertical Pages

The content is specific and useful, but several service and vertical pages are dense. Add short-answer blocks, decision tables, and "use this when / avoid this when" sections without turning the site into generic SEO filler.

### Add More Approved Case-Study Outcomes

The case studies are credible, but EveShop and Bayam still need more approved measurable outcomes where available: before/after performance, launch outcomes, catalog complexity, SEO impact, or workflow improvement.

**Evidence:** case-study data lives in [data/caseStudies.ts](/Users/emremutlu/Apps/Codex/hydrogenexpert/data/caseStudies.ts).

### Add Editorial Standards Or Corrections Policy

The site already has conservative proof standards. A visible editorial/source/update policy would improve trust and E-E-A-T, especially for technical claims and cost guidance.

### Implement Bing/IndexNow Discovery Support

The site is crawlable by Bing, but no IndexNow key was found at `/.well-known/indexnow-key.txt` or `/indexnow-key.txt`, and Bing Webmaster verification was not externally visible.

### Validate Field Core Web Vitals

Lighthouse is strong, but static JS volume still creates possible INP risk. Use PageSpeed Insights or CrUX once available to validate field data.

---

## Low Priority Issues

- Tighten a few meta descriptions that are around 161-166 characters.
- Add `includeSubDomains` to HSTS only if all subdomains should be HTTPS-only.
- Improve small mobile touch targets for badge/profile links and inline CTAs.
- Reduce repeated generic proof phrasing where specific examples or numbers can replace it.
- Reconsider homepage `HowTo` schema if it does not add useful AI semantics; Google rich-result upside is now limited.

---

## Category Deep Dives

### AI Citability (87/100)

HydrogenExpert has strong citation-ready passages for niche queries. The best blocks include project cost ranges, timeline ranges, "when not to use Hydrogen" decision criteria, variant URL fallback logic, and the 5s-to-2s Hydrogen homepage performance note.

Strong citation examples:

| Passage Type | Why It Works |
|---|---|
| Hydrogen homepage performance case note | Specific numbers, cause, implementation fix, and outcome |
| `when-not-to-use-hydrogen` commercial guidance | Concrete cost, revenue, timeline, and ROI decision criteria |
| Variant fallback article | Direct implementation rule: lock clicked option first, then resolve variants |
| Cost FAQ | Short merchant-readable answer with range |
| Timeline FAQ | Concrete 6-16 week delivery framing |

Main citability gaps:

- Some form/select text extracts as concatenated option strings.
- Some proof claims need source-adjacent outbound links in the same content block.
- Repeated positioning lines are useful for brand consistency but weak as standalone citations.

### Brand Authority (52/100)

Founder-level authority is good; brand-level authority is still fair. Search results corroborate Emre Mutlu through Upwork, Udemy, LinkedIn, Medium, and the personal site. HydrogenExpert itself has limited third-party entity presence.

| Platform | Status |
|---|---|
| Upwork | Strong founder proof: Top Rated Plus, JSS, hours, Shopify Hydrogen positioning |
| LinkedIn | Strong founder profile signal and follower count |
| Udemy | Strong teaching proof for Shopify Hydrogen |
| Medium | Useful technical article syndication |
| Personal site | Useful corroborating portfolio surface |
| Reddit / Wikipedia / Wikidata / YouTube | Weak or absent for HydrogenExpert |

Recommended direction: keep Emre Mutlu as the primary entity, but make HydrogenExpert consistently appear in verified profiles, bios, external articles, and schema `sameAs` where the profile is real and controlled.

### Content E-E-A-T (80/100)

The site is credible for a solo senior service business. It shows first-hand experience, named project contexts, technical blog depth, source discipline, and restrained claims.

| Dimension | Score | Notes |
|---|---:|---|
| Experience | 19/25 | Real stores and constraints; needs more approved measurable outcomes |
| Expertise | 21/25 | Strong technical depth and operator interpretation |
| Authority | 16/25 | Good profiles; limited independent third-party editorial validation |
| Trust | 20/25 | Strong legal/contact/proof stance; editorial policy would help |

Best content signals:

- Real case-study pages for EveShop, Bayam Jewelry, and Rebel Bunny.
- Technical blog posts with SSR, variant URL, metaobject, and performance detail.
- Public proof references to Upwork, LinkedIn, and Udemy.
- Clear anti-hype stance: Hydrogen is not treated as the default answer.

### Technical GEO (91/100)

Technical foundations are excellent. The live sitemap returned 35 URLs and all 35 returned 200 during the crawl. The site is server-rendered, canonicalized, fast, and stable on mobile and desktop samples.

| Check | Result |
|---|---|
| Homepage | HTTP 200 |
| `robots.txt` | `User-Agent: *`, `Allow: /`, sitemap reference present |
| `sitemap.xml` | 35 URLs, 35/35 fetched successfully |
| `llms.txt` | HTTP 200 |
| `llms-full.txt` | HTTP 200 |
| Metadata | 35/35 pages had title, description, canonical, H1 |
| Structured data | 35/35 pages had JSON-LD |
| Image alt text | 0 missing alt attributes in crawl |
| Mobile overflow | None on sampled 390px pages |
| Desktop overflow | None on sampled 1440px pages |
| Lighthouse | Performance 96, Accessibility 96, Best Practices 100, SEO 100 |

Lighthouse metrics on 2026-05-05:

| Metric | Result |
|---|---|
| FCP | 1.1s |
| LCP | 2.6s |
| TBT | 30ms |
| CLS | 0 |
| Speed Index | 3.4s |

### Schema & Structured Data (67/100)

Schema coverage is broad and valid, but the entity graph needs stronger `@id` reuse and canonical provider links.

Observed live schema types across 35 URLs:

| Type | Count |
|---|---:|
| `ProfessionalService` | 35 |
| `Person` | 35+ |
| `BreadcrumbList` | 34 |
| `Service` | 19+ |
| `FAQPage` | 18 |
| `Article` | 8 |
| `Organization` | 8 in local parse / 1 primary homepage entity |
| `ImageObject` | 8 |
| `CreativeWork` | 3 |
| `WebSite` | 1 |
| `ProfilePage` | 1 |
| `ItemList` | 1 |
| `HowTo` | 1 |

Priority schema work:

1. Add stable `@id` values and reuse them.
2. Point `Service.provider` to the canonical provider entity.
3. Reference the canonical Person `@id` from article authors.
4. Add `sameAs` only for verified real profiles.
5. Add `speakable` selectors to article summary/key-takeaway sections if the markup supports stable selectors.

### Platform Optimization (64/100)

| Platform | Score | Status | Main Gap |
|---|---:|---|---|
| Google AI Overviews | 77/100 | Good | More semantic tables and clean heading extraction |
| ChatGPT Web Search | 70/100 | Good | Stronger entity corroboration beyond owned site |
| Perplexity AI | 66/100 | Fair | More community/third-party validation |
| Google Gemini | 47/100 | Poor | Weak Google ecosystem footprint |
| Bing Copilot | 62/100 | Fair | IndexNow/Bing Webmaster/GitHub-style proof gaps |

---

## Quick Wins

1. Convert `llms.txt` and `llms-full.txt` links to markdown link plus description format.
2. Add stable schema `@id` constants and reuse them in `Person`, `ProfessionalService`, `Organization`, `WebSite`, `Service`, and `Article`.
3. Fix `Service.provider` to reference the root provider entity.
4. Fix raw markdown heading rendering in blog content.
5. Add semantic tables to `/shopify-hydrogen-vs-liquid` and other high-intent comparison pages.
6. Scope `X-Robots-Tag` so legal noindex pages do not conflict with global headers.
7. Add IndexNow key support and document Bing Webmaster verification.
8. Add a compact "Verified profiles" section to `/about` using only real profiles.

---

## 30-Day Action Plan

### Week 1: Discovery Files And Schema Identity

- [ ] Rewrite `llms.txt` and `llms-full.txt` entries into markdown-link format with one-line descriptions.
- [ ] Add canonical schema `@id` constants.
- [ ] Fix `Service.provider` identity fragmentation.
- [ ] Reference canonical Person `@id` from blog and case-study `Article` authors.
- [ ] Remove or scope conflicting global `X-Robots-Tag`.

### Week 2: AI Answer Extraction

- [ ] Fix raw markdown heading rendering in blog posts.
- [ ] Add semantic HTML tables to `shopify-hydrogen-vs-liquid`, cost, audit, and maintenance pages where the content is naturally comparative.
- [ ] Add 40-60 word "short answer" blocks near the top of high-intent service pages.
- [ ] Add source-adjacent proof links beside Upwork, Udemy, and LinkedIn claims.

### Week 3: Authority And Trust

- [ ] Add a verified profiles section to `/about`.
- [ ] Add an editorial/source/corrections policy section or page.
- [ ] Add only real, controlled profiles to schema `sameAs`.
- [x] Update external bios where possible so HydrogenExpert appears consistently beside Emre Mutlu. Account-owner update completed on 2026-05-06; public crawl visibility may lag.

### Week 4: Platform Expansion

- [ ] Add IndexNow support and Bing Webmaster verification.
- [x] Decide whether a YouTube presence is real enough to create and maintain. Owned YouTube channel supplied on 2026-05-06 and added to schema/profile links.
- [ ] Add approved measurable case-study proof where available.
- [ ] Run a follow-up GEO compare pass and update this report.

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| https://hydrogenexpert.co | Senior-Led Shopify Hydrogen Agency Alternative / HydrogenExpert | none found in crawl |
| https://hydrogenexpert.co/about | About Emre Mutlu / Shopify Hydrogen Developer | add verified profile hub and editorial/source policy |
| https://hydrogenexpert.co/what-is-hydrogen | What Is Shopify Hydrogen for Shopify Plus Brands? | add more concise short-answer block if needed |
| https://hydrogenexpert.co/services | Shopify Hydrogen Services and Agency Alternative / HydrogenExpert | improve merchant readability and proof depth |
| https://hydrogenexpert.co/should-i-use-it | Should I Use Shopify Hydrogen? A Merchant Decision Guide | good decision-intent page; consider semantic summary table |
| https://hydrogenexpert.co/when-not-to-use-hydrogen | When Not to Use Shopify Hydrogen / Emre Mutlu | strong citability; keep proof/source adjacency tight |
| https://hydrogenexpert.co/case-studies | Shopify Hydrogen Case Studies: EveShop, Bayam, Rebel Bunny | add more measurable proof where approved |
| https://hydrogenexpert.co/hire-me | Hire a Shopify Hydrogen Developer / Emre Mutlu | long meta description edge; profile proof can be clearer |
| https://hydrogenexpert.co/contact | Request a Shopify Hydrogen Fit Review / HydrogenExpert | none found in crawl |
| https://hydrogenexpert.co/shopify-hydrogen-agency-usa | Shopify Hydrogen Agency USA Alternative / Emre Mutlu | avoid fake local-office signals; current posture is good |
| https://hydrogenexpert.co/shopify-hydrogen-fit-audit | Shopify Hydrogen Fit & Risk Audit / Emre Mutlu | long meta description; add short-answer block |
| https://hydrogenexpert.co/shopify-hydrogen-maintenance-cost | Shopify Hydrogen Maintenance Cost / Emre Mutlu | long meta description; add semantic cost/ownership table |
| https://hydrogenexpert.co/shopify-hydrogen-vs-liquid | Shopify Hydrogen vs Liquid / Emre Mutlu | convert decision grid to semantic table |
| https://hydrogenexpert.co/shopify-hydrogen-for-luxury-jewelry | Shopify Hydrogen for Luxury Jewelry / Bayam Context | add more specific real scenarios if available |
| https://hydrogenexpert.co/shopify-hydrogen-for-large-catalog-retail | Shopify Hydrogen for Large Catalog Retail / EveShop Context | add more specific real scenarios if available |
| https://hydrogenexpert.co/shopify-hydrogen-for-dtc-education-brands | Shopify Hydrogen for DTC Education Brands / Rebel Bunny Context | add more specific real scenarios if available |
| https://hydrogenexpert.co/shopify-hydrogen-for-beauty-brands | Shopify Hydrogen for Beauty Brands / EveShop Context | add more specific real scenarios if available |
| https://hydrogenexpert.co/shopify-hydrogen-agency | Shopify Hydrogen Agency Alternative / Emre Mutlu | add more source-adjacent proof links |
| https://hydrogenexpert.co/headless-shopify-agency | Headless Shopify Agency Alternative / Emre Mutlu | long meta description; semantic comparison could help |
| https://hydrogenexpert.co/shopify-hydrogen-developer | Shopify Hydrogen Developer for Shopify Plus Brands / Emre Mutlu | long meta description; author proof is strong |
| https://hydrogenexpert.co/shopify-hydrogen-audit | Shopify Hydrogen Audit for Shopify Plus Brands / Emre Mutlu | add short answer and semantic audit checklist/table |
| https://hydrogenexpert.co/liquid-to-hydrogen-migration | Liquid to Hydrogen Migration for Shopify Plus Brands / Emre Mutlu | add migration risk table if useful |
| https://hydrogenexpert.co/shopify-hydrogen-seo | Shopify Hydrogen SEO for Custom Storefronts / Emre Mutlu | long meta description; strong topical fit |
| https://hydrogenexpert.co/shopify-hydrogen-cost | Shopify Hydrogen Cost and Budget Planning / Emre Mutlu | add semantic budget table |
| https://hydrogenexpert.co/custom-shopify-hydrogen-storefront | Custom Shopify Hydrogen Storefront Development / Emre Mutlu | add source-adjacent proof examples |
| https://hydrogenexpert.co/shopify-hydrogen-performance-optimization | Shopify Hydrogen Performance Optimization / Emre Mutlu | strong fit for benchmark-style proof |
| https://hydrogenexpert.co/shopify-hydrogen-support-retainer | Shopify Hydrogen Support Retainer / Emre Mutlu | add support scope table |
| https://hydrogenexpert.co/case-studies/eveshop-shopify-hydrogen | EveShop Shopify Hydrogen Case Study / Emre Mutlu | add more approved measurable proof |
| https://hydrogenexpert.co/case-studies/bayam-jewelry-shopify-hydrogen | Bayam Jewelry Shopify Hydrogen Case Study / Emre Mutlu | add more approved measurable proof |
| https://hydrogenexpert.co/case-studies/rebel-bunny-shopify-hydrogen | Rebel Bunny Shopify Hydrogen Case Study / Emre Mutlu | add more approved measurable proof |
| https://hydrogenexpert.co/blog | Shopify Hydrogen Blog for Shopify Plus Brands / Emre Mutlu | add blog schema/entity enhancements |
| https://hydrogenexpert.co/blog/shopify-hydrogen-product-description-ssr-seo | Shopify Hydrogen Product Descriptions: SSR SEO | article entity opportunities |
| https://hydrogenexpert.co/blog/shopify-hydrogen-metaobjects-page-specific-sections | Shopify Hydrogen Metaobjects for Page-Specific Content Sections | article entity opportunities |
| https://hydrogenexpert.co/blog/shopify-hydrogen-variant-selection-fallback | Shopify Hydrogen Variant URLs and SEO Fallbacks | fix raw markdown heading if present |
| https://hydrogenexpert.co/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen | How I Cut a Hydrogen Homepage From 5s to 2s | strong citation-ready proof; add external corroboration where possible |

---

## Verification Log

- Live homepage fetched on 2026-05-05: HTTP 200, 155,599 bytes.
- Live `robots.txt`: HTTP 200, `User-Agent: *`, `Allow: /`, sitemap reference present.
- Live `sitemap.xml`: HTTP 200, 35 URLs.
- Sitemap crawl: 35/35 URLs returned HTTP 200.
- Live `llms.txt`: HTTP 200, 2,873 bytes.
- Live `llms-full.txt`: HTTP 200, 4,362 bytes.
- Metadata crawl: 35/35 pages had title, description, canonical, and H1.
- Schema crawl: 35/35 pages had JSON-LD; no parse failures in the local crawl.
- Image crawl: no missing `alt` attributes detected.
- Lighthouse homepage: Performance 96, Accessibility 96, Best Practices 100, SEO 100.
- Playwright sampled `/`, `/services`, `/blog`, `/shopify-hydrogen-seo`, `/case-studies/rebel-bunny-shopify-hydrogen`, and `/contact` at 390px and 1440px; no horizontal overflow found.
- External search found corroborating founder/entity surfaces on Upwork, Udemy, LinkedIn, Medium, and the personal site; no strong HydrogenExpert presence found on Wikipedia/Wikidata/Reddit/YouTube.
