# SEO Commercial Intent Changelog

Date:
May 2026

## Baseline audit

Baseline checks before changes:
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed.

Route/component inventory:
- `/`: `app/page.tsx`
- `/services`: `app/services/page.tsx`
- `/shopify-hydrogen-developer`: `app/shopify-hydrogen-developer/page.tsx` plus `lib/services.ts` and `components/ServiceLandingPage.tsx`
- `/shopify-hydrogen-audit`: `app/shopify-hydrogen-audit/page.tsx` plus `lib/services.ts` and `components/ServiceLandingPage.tsx`
- `/shopify-hydrogen-cost`: `app/shopify-hydrogen-cost/page.tsx` plus `lib/services.ts` and `components/ServiceLandingPage.tsx`
- `/liquid-to-hydrogen-migration`: `app/liquid-to-hydrogen-migration/page.tsx` plus `lib/services.ts` and `components/ServiceLandingPage.tsx`
- `/shopify-hydrogen-seo`: `app/shopify-hydrogen-seo/page.tsx` plus `lib/services.ts` and `components/ServiceLandingPage.tsx`
- `/should-i-use-it`: `app/should-i-use-it/page.tsx` plus `components/quiz/*`
- `/when-not-to-use-hydrogen`: `app/when-not-to-use-hydrogen/page.tsx`
- `/case-studies`: `app/case-studies/page.tsx` plus `data/caseStudies.ts`
- `/blog`: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `lib/posts.ts`, `lib/post-content.ts`, and `lib/post-enhancements.ts`
- `/contact`: `app/contact/page.tsx`
- `/articles`: `app/articles/page.tsx`, `app/articles/[slug]/page.tsx`, and `lib/articles.ts`

Shared component inventory:
- Header/navigation: `components/Header.tsx`, `lib/navigation.ts`
- Footer: `components/Footer.tsx`
- Lead capture form: `components/LeadCaptureForm.tsx`
- Reusable CTA section: `components/CTASection.tsx`
- SEO metadata helper: `lib/seo.ts`
- `sitemap.xml` generation: `app/sitemap.ts`, `lib/sitemap-entries.ts`
- `robots.txt` generation: `app/robots.ts`
- Blog index/listing: `app/blog/page.tsx`
- Content renderer: `lib/post-content.ts` for Supabase-backed blog posts; `/articles` uses structured local article data in `lib/articles.ts`

## Content architecture decision

- `/blog` is reserved for personal production notes and first-hand implementation learnings.
- `/articles` is used for evergreen merchant guides, hiring guides, evaluation guides, SEO, cost, and migration decision content.

## Query targets

Primary GSC query target:
- hire shopify hydrogen developers

Secondary query targets:
- shopify hydrogen development experts
- experienced shopify hydrogen developers
- shopify hydrogen expert
- shopify hydrogen experts

Primary landing page:
- `/shopify-hydrogen-developer`
- `/shopify-hydrogen-expert`
- `/shopify-hydrogen-experts`

Supporting pages:
- `/`
- `/shopify-hydrogen-audit`
- `/case-studies`
- `/shopify-hydrogen-cost`
- `/should-i-use-it`
- `/when-not-to-use-hydrogen`
- `/articles`
- article detail pages

## Article publishing schedule

- 2026-05-08 10:00 Europe/Istanbul: `/articles/how-to-hire-shopify-hydrogen-developer`
- 2026-05-11 10:00 Europe/Istanbul: `/articles/shopify-hydrogen-developer-vs-agency`
- 2026-05-14 10:00 Europe/Istanbul: `/articles/experienced-shopify-hydrogen-developers`
- 2026-05-15 10:00 Europe/Istanbul: `/articles/shopify-hydrogen-experts-production-experience`
- 2026-05-20 10:00 Europe/Istanbul: `/articles/shopify-hydrogen-development-cost-developer-agency-audit`

## Changes made

- Added `/articles` section.
- Clarified `/blog` as production notes.
- Added scheduled article publishing.
- Added daily scheduled rebuild/deploy check with optional `VERCEL_DEPLOY_HOOK_URL`.
- Developer page title/meta/H1/copy cleanup.
- Homepage internal link to developer page.
- Homepage/internal links to `/articles`.
- Static quiz result content.
- Oxygen/Plus accuracy correction.
- `data-nosnippet` on form/footer boilerplate.
- Audit productization.
- Proof block on developer page.
- Internal link cluster.
- Article support cluster.

## Deployment model

- Deployment target: Vercel, based on `vercel.json`, `DEPLOY.md`, and `scripts/deploy.sh`.
- Scheduled publishing is enforced at runtime by article status and `publishAt`.
- `.github/workflows/scheduled-article-publish.yml` runs daily at 07:00 UTC and manually via `workflow_dispatch`.
- If the deployment target needs daily static regeneration, add a repository secret named `VERCEL_DEPLOY_HOOK_URL`. The workflow will call it after lint, typecheck, tests, and build pass.
- No deploy hook URL or token is hardcoded.

## Manual Search Console follow-up

- Inspect `/shopify-hydrogen-developer`.
- Inspect `/articles`.
- Inspect each new article on or after publish date.
- Request indexing after deployment.
- Submit `/sitemap.xml`.
- Check query to page mapping after 7, 14, and 28 days.
- Track impressions, average position, CTR, and clicks for target queries.
- Check country and device filters.

## 2026-05-10 Search Console review

Observed from Google Search Console Performance, last 3 months:
- Total site performance: 2 clicks, 850 impressions, 0.2% CTR, 7.8 average position.
- Top commercial query: `hire shopify hydrogen developers`, 40 impressions, 0 clicks.
- Query-to-page mapping for `hire shopify hydrogen developers`: 100% of impressions mapped to `/`, with 39.9 average position.
- High-impression pages included `/`, `/case-studies`, `/blog`, `/what-is-hydrogen`, `/should-i-use-it`, and `/custom-shopify-hydrogen-storefront`.
- The public hiring guide `/articles/how-to-hire-shopify-hydrogen-developer` went live on 2026-05-08, while the visible GSC chart only covered data through 2026-05-07.

Interpretation:
- Google already associates the homepage with hire-developer intent, but it is not yet routing that intent strongly enough to the dedicated developer landing page or public hiring guide.
- Because the article became public after the latest visible GSC data, the first response should be internal-link and snippet alignment, not a larger keyword rewrite.

2026-05-10 changes:
- Updated homepage metadata description to mention hiring a senior Shopify Hydrogen developer naturally.
- Added a homepage FAQ entry that answers whether Emre can be hired directly as a Shopify Hydrogen developer and links to `/shopify-hydrogen-developer`.
- Strengthened the commercial-path card for `/shopify-hydrogen-developer` with natural plural-query language while preserving the solo senior-operator positioning.
- Replaced the generic articles commercial-path card with the now-public hiring guide at `/articles/how-to-hire-shopify-hydrogen-developer`.
- Added the hiring guide to the technical resources cluster so crawlers and merchants can reach it from the homepage.

Next Search Console follow-up:
- Inspect `/`, `/shopify-hydrogen-developer`, and `/articles/how-to-hire-shopify-hydrogen-developer`.
- Request indexing for the hiring guide now that it is public.
- Recheck the query-to-page mapping for `hire shopify hydrogen developers` after 7, 14, and 28 days.

## Scheduled publishing smoke test

- Future articles hidden from `/articles`.
- Future articles hidden from sitemap.
- Future articles return 404 or preview-only response.
- Published articles appear in index, sitemap, related links, and Article JSON-LD.

Current automated coverage:
- `tests/articles.test.ts` verifies future article hiding, post-`publishAt` visibility, and direct future access returning no public article.
- `tests/sitemap-entries.test.ts` verifies `/articles` sitemap coverage and that only public article detail routes passed by the publishing layer appear.

## 2026-05-15 Shopify Hydrogen experts SERP response

Observed issue:
- Google showed agency, marketplace, official-doc, community, and video results for `shopify hydrogen experts`.
- HydrogenExpert had indexed pages, but the exact expert-intent article was still scheduled and returned a future-article 404/noindex response.

Changes:
- Added `/shopify-hydrogen-experts` as the primary commercial landing page for expert-search intent.
- Added `/shopify-hydrogen-expert` as the singular commercial landing page for buyers looking for one senior specialist.
- Published `/articles/shopify-hydrogen-experts-production-experience` early on 2026-05-15.
- Added homepage links to `/shopify-hydrogen-expert` and `/shopify-hydrogen-experts` from commercial path and technical resource clusters.
- Added service-level internal links from agency, headless, developer, expert, and experts pages into the expert page/article cluster.

Next Search Console follow-up:
- Inspect `/shopify-hydrogen-expert`.
- Inspect `/shopify-hydrogen-experts`.
- Inspect `/articles/shopify-hydrogen-experts-production-experience`.
- Request indexing for all three URLs after production verification.
- Recheck `shopify hydrogen expert`, `shopify hydrogen experts`, `best shopify hydrogen experts`, and `shopify hydrogen experts list` after 7, 14, and 28 days.

## 2026-05-21 Google AI Mode Shopify Hydrogen Developer response

Observed issue:
- Google AI Mode for `Shopify Hydrogen Developer` showed a broad educational answer with official Shopify docs, agency/vendor pages, community/video sources, and an exact-match developer domain in the supporting links.
- HydrogenExpert already had an indexable `/shopify-hydrogen-developer` page, but the visible page was stronger as a commercial landing page than as a standalone answer source for definition, stack, hiring trigger, and Liquid-vs-Hydrogen comparison intent.

Changes:
- Strengthened `/shopify-hydrogen-developer` with a direct definition block for "What is a Shopify Hydrogen developer?"
- Added a semantic core-stack table covering React Router/server rendering, Storefront API/GraphQL, Hydrogen/deployment workflow, and SEO/analytics/commerce behavior.
- Added a direct "When should you hire a Shopify Hydrogen developer?" section and a Shopify theme developer vs Shopify Hydrogen developer comparison table.
- Expanded page FAQ schema from 3 to 5 questions for hiring-trigger and stack-intent extraction.
- Added ItemList JSON-LD for Shopify Hydrogen developer responsibilities.
- Added visible official-source grounding on the page and added Hydrogen SEO to the page source map.

Next Search Console follow-up:
- Inspect `/shopify-hydrogen-developer` after production deployment.
- Request indexing for `/shopify-hydrogen-developer`.
- Recheck `Shopify Hydrogen Developer`, `hire Shopify Hydrogen developer`, and `Shopify Hydrogen developer vs Shopify theme developer` after 7, 14, and 28 days.

## 2026-05-21 Google regular SERP Shopify Hydrogen Developer response

Observed issue:
- The regular Google results page for `Shopify Hydrogen Developer` shows official Shopify surfaces, Shopify Academy, GitHub, Weaverse, videos, and an exact-match service domain near the top.
- HydrogenExpert can appear for the query, but Google may choose the homepage result instead of routing the intent to `/shopify-hydrogen-developer`.
- The visible related searches branch into GitHub, training, templates, jobs, pricing, docs, components, and Oxygen, so the target page needs to answer those branches without creating thin modifier pages.

Changes:
- Added `/shopify-hydrogen-developer` to primary navigation and the sitewide footer services list.
- Updated `/shopify-hydrogen-developer` metadata to start with the exact query while keeping the page-specific service angle distinct.
- Added a search-intent section covering GitHub/docs, training, templates/components, pricing, Oxygen deployment, and hiring/jobs paths with official or internal next links.
- Added ItemList JSON-LD for the search-intent map alongside the existing developer-responsibility ItemList.
- Added two FAQ entries for templates and mixed research/hiring intent.
- Marked `/shopify-hydrogen-developer` as a fresh weekly sitemap route with priority `0.9`.

Next Search Console follow-up:
- Inspect `/shopify-hydrogen-developer` and request indexing after production deployment.
- Check whether Google keeps showing `/` or starts showing `/shopify-hydrogen-developer` for `Shopify Hydrogen Developer`.
- Recheck `shopify hydrogen developer github`, `shopify hydrogen developer training`, `shopify hydrogen templates`, `shopify hydrogen pricing`, `shopify oxygen`, and `shopify hydrogen developer jobs` after 7, 14, and 28 days.

## 2026-05-27 GSC indexing recovery response

Observed from Google Search Console and live SERP checks:
- Last 3 months showed 2 clicks, 1.19k impressions, 0.2% CTR, and 13.1 average position.
- `/shopify-hydrogen-developer` was previously unknown to Google even though the live test said the page could be indexed.
- GSC had last read `/sitemap.xml` on 2026-05-04 with 24 discovered pages, while the live sitemap exposed 57 URLs.
- HydrogenExpert ranked for brand/expert intent, but Google still needed stronger routing toward the dedicated developer URL for developer and hire-developer searches.

Actions taken:
- Resubmitted `/sitemap.xml` in Google Search Console on 2026-05-27.
- Confirmed `/shopify-hydrogen-developer`, `/shopify-hydrogen-expert`, `/shopify-hydrogen-experts`, and `/case-studies` are indexed.
- Requested indexing for `/articles/how-to-hire-shopify-hydrogen-developer`, `/articles/shopify-hydrogen-developer-vs-agency`, `/articles/shopify-hydrogen-experts-production-experience`, and `/shopify-hydrogen-packages`.
- Added a canonical indexing recovery route list, sitemap URL-count floor, critical-route sitemap checks, and `llms.txt` core-route checks to the commercial launch verifier.
- Restored `/shopify-hydrogen-developer` to primary navigation and reduced homepage metadata/FAQ wording that could make Google prefer the homepage for direct developer intent.

Next Search Console follow-up:
- Day 7: confirm `/shopify-hydrogen-developer` remains indexed and has page-level impressions.
- Day 14: if indexed with impressions but low CTR, review title/meta/snippet copy; if indexed with no impressions, add external mentions and profile links.
- Day 28: if homepage still receives developer-query impressions, open another internal-routing PR; if `/shopify-hydrogen-developer` enters top 20, strengthen the cluster around the developer page.

## 2026-07-21 Shopify Hydrogen agency intent-owner response

Observed from Google Search Console for 2026-06-21 through 2026-07-18:
- The query `shopify hydrogen agency` produced 121 impressions, 0 clicks, and an average position of 15.1 on `/shopify-hydrogen-experts`.
- The exact intent owner `/shopify-hydrogen-agency` was absent from the bounded top rows.

Diagnosis:
- Internal-link and discovery authority was routed too weakly toward the exact agency page, allowing the plural experts comparison page to receive agency-query impressions.
- The issue was treated as link-graph and discovery misrouting, not duplicate body copy. The distinct agency, plural experts, singular expert, developer-versus-agency article, USA agency, and headless agency intents remain unchanged.

Bounded changes:
- Added the exact agency owner to the homepage commercial path cluster using its canonical service-registry fields.
- Added the exact agency owner to the sitewide footer services list.
- Added a contextual link from `/shopify-hydrogen-experts` to `/shopify-hydrogen-agency`; the singular expert page was left unchanged to avoid duplicating its existing agency-comparison path.
- Added the exact agency owner to indexing-recovery and commercial-verification coverage, with a weekly `0.9` sitemap override using the existing `LAST_SIGNIFICANT_UPDATE` value.
- Added focused regression coverage for homepage, footer, expert-comparison, discovery, verification, and sitemap authority wiring.

Next Search Console follow-up:
- Day 7: inspect `/shopify-hydrogen-agency` and `/shopify-hydrogen-experts`; confirm the exact agency owner remains indexable and begins receiving query-level impressions.
- Day 14: recheck the query-to-page mapping for `shopify hydrogen agency`; compare impressions, clicks, CTR, and average position for the agency owner and plural experts page.
- Day 28: confirm `/shopify-hydrogen-agency` is the primary page receiving the query; if misrouting persists, review external authority and snippet alignment without merging the distinct intent pages.
