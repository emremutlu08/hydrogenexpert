# GEO/SEO Audit Report: HydrogenExpert

**Audit date:** 2026-05-03  
**Production URL:** https://hydrogenexpert.co  
**Business type:** Solo specialist services / Shopify Hydrogen consulting  
**Pages analyzed:** 22 production URLs plus robots.txt, sitemap.xml, llms.txt, llms-full.txt  
**Method:** GEO audit, technical SEO, schema, crawler access, content E-E-A-T, mobile render checks, production HTTP checks, and quick external brand-signal search.

## Executive Summary

HydrogenExpert has a strong SEO and GEO foundation. The site is server-rendered, indexable, canonicalized, fast to crawl, schema-rich, and tightly positioned around a narrow Shopify Hydrogen topic cluster. The biggest remaining upside is not basic technical SEO; it is authority expansion, richer entity schema, more externally verifiable proof, and ongoing content depth.

**Overall GEO/SEO score:** 82/100

| Category | Score | Weight | Weighted Score |
| --- | ---: | ---: | ---: |
| AI citability | 84/100 | 25% | 21.0 |
| Brand authority | 70/100 | 20% | 14.0 |
| Content E-E-A-T | 82/100 | 20% | 16.4 |
| Technical SEO/GEO | 91/100 | 15% | 13.7 |
| Schema and structured data | 82/100 | 10% | 8.2 |
| Platform optimization | 86/100 | 10% | 8.6 |
| **Overall** | | | **81.9/100** |

## What Is Strong

- **Crawl/index basics are healthy.** Production `/robots.txt` allows crawling and references the XML sitemap. Production `/sitemap.xml` returns 22 URLs, including all 4 live blog posts.
- **SSR is working.** Production HTML contains real titles, meta descriptions, H1s, visible body content, canonical tags, Open Graph tags, and JSON-LD before client JavaScript is needed.
- **Canonical strategy is clean.** Canonicals are absolute production URLs. `www.hydrogenexpert.co` redirects to `hydrogenexpert.co`, and `/agency` redirects permanently to `/services`.
- **Security headers are unusually good for a small marketing site.** Production responses include HSTS, CSP, referrer policy, `X-Content-Type-Options`, `X-Frame-Options`, permissions policy, and `X-Robots-Tag: index, follow`.
- **AI-readiness is above baseline.** `/llms.txt` and `/llms-full.txt` exist. The full file includes core pages, expertise, credibility, and all blog posts.
- **Topic focus is sharp.** The site does not sprawl into generic Shopify content. It repeatedly reinforces Shopify Hydrogen fit, cost, migration, performance, SEO, and implementation.
- **Mobile render passed sampled checks.** Homepage, services, blog, SEO guide, hire-me, case studies, and a long blog post had no horizontal overflow at 390px and 1440px.

## Priority Findings

### High: Strengthen entity schema completeness

Current JSON-LD is valid and useful, but the entity graph can be more complete. The root `ProfessionalService` schema should include a logo or image object, fuller contact details where appropriate, `founder` as a linked `Person` with `sameAs`, and a stronger `knowsAbout`/`areaServed`/`brand` shape. Blog `Article` schema should include `publisher` with logo and `mainEntityOfPage`; case-study `Article` schema should include representative `image` where approved.

Why this matters: AI systems and search engines use structured data to connect the site, Emre Mutlu, HydrogenExpert, Upwork, LinkedIn, Udemy, and published content into one entity.

### High: Add stronger external proof references

The site already uses proof carefully, without fake testimonials or invented metrics. External search finds corroborating profiles and content on Udemy, Upwork, LinkedIn, Medium, and the personal domain. The next gain is to connect these more deliberately: add a compact "verified profile" section or proof block that links to the strongest external properties, and mirror the same links in schema `sameAs`.

Why this matters: brand authority is the lowest score area. AI search engines tend to trust entities that are corroborated outside their own domain.

### Medium: Add an About/credentials page or expand Hire Me into an authority page

`/hire-me` does useful conversion work, but the site would benefit from a dedicated, indexable authority surface that explains Emre's Shopify Hydrogen background, teaching credibility, public profiles, project history, and editorial standards. This could be `/about` or a stronger section inside `/hire-me`.

Why this matters: E-E-A-T is good, but author credentials and editorial transparency can be more explicit.

### Medium: Add more bottom-of-funnel service proof

Service pages are solid and all exceed basic content thresholds, but they still rely more on explanatory copy than proof artifacts. Add approved screenshots, small implementation notes, before/after snippets, anonymized audit examples, or "what I check" checklists for each service page.

Why this matters: service pages can rank and convert better when they show direct experience, not only service definitions.

### Medium: Monitor local sitemap/build drift

Production sitemap is correct with 22 URLs and all 4 blog posts. In the local `next start -p 3010` run, `/sitemap.xml` returned 19 URLs and only 1 blog post, while `/blog` and `/llms-full.txt` showed 4 posts. This did not reproduce on production, but it is worth watching because the sitemap depends on dynamic Supabase-backed post data at build/runtime boundaries.

Why this matters: if production ever ships the shorter sitemap, newly published posts may be discoverable from links but underrepresented in sitemap submission.

### Low: Add RSS or feed support

The blog is now real and has 4 production posts. Adding `/feed.xml` or `/rss.xml` would give crawlers, aggregators, and AI ingestion systems another simple discovery path.

### Low: Tune metadata length over time

Most titles and descriptions are acceptable. A few descriptions sit around 160+ characters. This is not a blocker, but future edits should keep titles concise and descriptions in the strongest visible-snippet range.

## Technical SEO

| Check | Result |
| --- | --- |
| Production build | Pass: `npm run build` completed successfully |
| Lint | Pass: `npm run lint` completed successfully |
| HTTPS | Pass: production HTTPS works |
| HTTP to HTTPS | Pass: `http://hydrogenexpert.co/` returns 308 to HTTPS |
| www canonicalization | Pass: `https://www.hydrogenexpert.co/` returns 308 to apex |
| `/agency` migration | Pass: local production server returns 301 to `/services` |
| robots.txt | Pass: `User-Agent: *`, `Allow: /`, sitemap reference present |
| sitemap.xml | Pass in production: 22 URLs, all core pages, 4 blog posts |
| noindex | Pass: sampled public pages are indexable |
| security headers | Pass: HSTS, CSP, frame protection, content type, referrer and permissions policies present |
| mobile overflow | Pass on sampled pages at 390px and 1440px |

## Content and E-E-A-T

The content strategy is well aligned with the target audience: non-technical or semi-technical Shopify owners deciding whether Hydrogen is worth the cost. The copy is specific, restrained, and mostly avoids inflated agency language.

Strong signals:

- Clear author identity: Emre Mutlu.
- Clear niche: Shopify Hydrogen and Shopify storefront strategy.
- Case-study pages for EveShop, Bayam Jewelry, and Rebel Bunny.
- Blog posts with first-hand framing and technical specificity.
- Internal links between guide, service, case-study, and blog pages.
- Credibility references to Upwork, LinkedIn, Udemy, and real client names.

Gaps:

- No dedicated authority/About page.
- No visible editorial policy, correction policy, or source policy.
- Case studies still have pending proof slots and limited approved measurable outcomes.
- Service pages need more direct examples or screenshots per service.

## Schema and Structured Data

Strong existing schema types detected:

- `Person`
- `ProfessionalService`
- `WebSite`
- `Organization`
- `Article`
- `FAQPage`
- `HowTo`
- `ItemList`
- `BreadcrumbList`
- `Service`
- `CreativeWork`

Recommended improvements:

- Add `logo` to `ProfessionalService`/`Organization`.
- Add `publisher.logo` to all `Article` schemas.
- Add `mainEntityOfPage` consistently to blog article schemas.
- Add `image` to case-study article schema when approved assets exist.
- Expand `sameAs` with verified external properties.
- Consider `ProfilePage` or richer `Person` schema on `/hire-me` or a future `/about`.

## AI Crawler and GEO Readiness

Current crawler posture is permissive and good for visibility. `robots.txt` allows all crawlers, which includes Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, and other AI/search crawlers unless they apply their own policies.

`/llms.txt` and `/llms-full.txt` are a real advantage. The short file summarizes owner, role, audience, links, and core pages. The full file includes expertise, credibility, all core pages, and blog posts. Keep these synced whenever new service pages, case studies, or major posts ship.

## Page Coverage Notes

Core pages are all reachable and indexable:

- `/`
- `/services`
- `/what-is-hydrogen`
- `/shopify-hydrogen-seo-guide`
- `/should-i-use-it`
- `/when-not-to-use-hydrogen`
- `/cost`
- `/case-studies`
- `/hire-me`
- `/shopify-hydrogen-audit`
- `/liquid-to-hydrogen-migration`
- `/custom-shopify-hydrogen-storefront`
- `/shopify-hydrogen-performance-optimization`
- `/shopify-hydrogen-support-retainer`
- 3 case-study detail pages
- `/blog`
- 4 blog posts

## Recommended Next Work

1. Enrich root entity schema and article publisher schema.
2. Add or expand an authority/About page with verified proof links and editorial transparency.
3. Add service-specific proof examples to each service landing page.
4. Add an RSS/feed route for blog discovery.
5. Add a small sitemap consistency test that checks published blog URLs appear in production sitemap output.
6. Keep publishing narrow, experience-led Hydrogen posts around variant URLs, SSR content, metaobjects, product schema, migration SEO, and Core Web Vitals.

## Verification Log

- `npm run build`: pass.
- `npm run lint`: pass.
- Production `/`: HTTP 200, canonical apex, indexable, HSTS and security headers present.
- Production `/robots.txt`: HTTP 200, allows all, references sitemap.
- Production `/sitemap.xml`: HTTP 200, 22 URLs, 4 blog URLs.
- Production `/llms.txt`: HTTP 200, `X-Robots-Tag: noindex, nofollow`.
- Production `www` to apex: 308 redirect.
- Production HTTP to HTTPS: 308 redirect.
- Playwright render checks: sampled pages had 1 H1, canonical tag, JSON-LD, visible body text, and no horizontal overflow at 390px and 1440px.
