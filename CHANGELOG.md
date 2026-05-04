# HydrogenExpert Changelog

This changelog tracks meaningful site changes by pull request so future debugging has a clear paper trail.

## Format

- Date:
- PR:
- Branch:
- Deployment:
- Summary:
- Files changed:
- Verification:
- Manual follow-up:

## 2026-05-04

- PR: [#6 Add site trust and measurement fixes](https://github.com/emremutlu08/hydrogenexpert/pull/6)
- Branch: `codex/site-trust-measurement-fixes`
- Deployment: [Production deploy](https://hydrogenexpert-ngdavrn7i-emremutlu8s-projects.vercel.app) aliased to `https://hydrogenexpert.co`.
- Summary:
  - Added PRD coverage for the trust, measurement, discovery, legal, and performance cleanup pass.
  - Added `/about`, `/contact`, `/privacy`, `/cookies`, `/terms`, and `/feed.xml`.
  - Added footer trust links without changing primary navigation.
  - Guarded Google Analytics so placeholder measurement IDs do not load.
  - Deferred Cloudflare Turnstile script loading until lead forms are near use.
  - Enriched root, article, profile, and case-study schema with logo, publisher, and entity details.
  - Made sitemap generation dynamic and added automated coverage for sitemap, RSS, and GA guard behavior.
- Files changed:
  - `tasks/prd-site-trust-measurement-fixes.md`
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
  - `app/privacy/page.tsx`
  - `app/cookies/page.tsx`
  - `app/terms/page.tsx`
  - `app/feed.xml/route.ts`
  - `app/sitemap.ts`
  - `app/layout.tsx`
  - `components/Footer.tsx`
  - `components/TurnstileField.tsx`
  - `lib/analytics-config.ts`
  - `lib/rss.ts`
  - `lib/sitemap-entries.ts`
  - `lib/structured-data.ts`
  - `tests/analytics-config.test.ts`
  - `tests/rss.test.ts`
  - `tests/sitemap-entries.test.ts`
- Verification:
  - `npm run test`
  - `npm run lint`
  - `npm run build`
  - Local route checks: `/`, `/about`, `/contact`, `/privacy`, `/cookies`, `/terms`, `/feed.xml`, `/sitemap.xml` returned 200.
  - Local sitemap check: 24 URLs including `/about`, `/contact`, and all 4 blog posts; no noindex legal routes.
  - Local homepage source check: no `G-XXXXXXXXXX`, no `googletagmanager`, no Turnstile script before form proximity.
  - Playwright desktop/mobile checks for `/`, `/about`, `/contact`, `/privacy`, and `/hire-me`: one H1, canonical present, no horizontal overflow.
  - Lighthouse local homepage: Performance 97, Accessibility 96, Best Practices 96, SEO 100; LCP 2.6s, CLS 0.
  - Live route checks: `/about`, `/contact`, `/privacy`, `/cookies`, `/terms`, `/feed.xml`, and `/sitemap.xml` returned 200.
  - Live sitemap check: 24 URLs including `/about`, `/contact`, and all 4 blog posts; no noindex legal routes.
  - Live homepage source check: no `G-XXXXXXXXXX`, no `googletagmanager`, no Turnstile script before form proximity.
- Manual follow-up:
  - Configure the real GA measurement ID in Vercel only if Google Analytics should be active.
  - Do not merge the PR unless Emre approves it.

## 2026-05-04

- PR: [#5 Update blog sitemap frequency](https://github.com/emremutlu08/hydrogenexpert/pull/5)
- Branch: `codex/update-blog-sitemap-frequency`
- Deployment: [Production deploy](https://hydrogenexpert-56mmtxz1t-emremutlu8s-projects.vercel.app) aliased to `https://hydrogenexpert.co`.
- Summary:
  - Updated the sitemap entry for `/blog` to use `daily` change frequency because new posts are added multiple times per week.
  - Raised the `/blog` sitemap priority to `0.9` while leaving individual blog post URLs at `monthly`.
- Files changed:
  - `app/sitemap.ts`
- Verification:
  - `npm run lint`
  - `npm run build`
  - Confirmed generated `.next/server/app/sitemap.xml.body` contains `/blog` with `<changefreq>daily</changefreq>` and `<priority>0.9</priority>`.
  - Verified live `https://hydrogenexpert.co/sitemap.xml` contains `/blog` with `<changefreq>daily</changefreq>` and `<priority>0.9</priority>`.
  - Verified live PR #4 asset preservation: `https://hydrogenexpert.co/emre-city-16x9.png` and `https://hydrogenexpert.co/generated/blog/shopify-plus-hydrogen-cover.jpg` return `200`.
- Manual follow-up:
  - Do not merge the PR unless Emre approves it.

## 2026-05-04

- PR: [#4 Update founder image and generated blog covers](https://github.com/emremutlu08/hydrogenexpert/pull/4)
- Branch: `codex/update-emre-city-image`
- Deployment: [Production deploy](https://hydrogenexpert-qx2q2ycis-emremutlu8s-projects.vercel.app) aliased to `https://hydrogenexpert.co`.
- Summary:
  - Added the new 16:9 founder portrait at `public/emre-city-16x9.png`.
  - Updated visible founder-card image usage on Home and Hire Me through the shared founder asset path.
  - Updated Person schema image URLs to use the new founder image.
  - Removed the old `public/emre-mutlu.webp` asset so the site does not keep a stale founder image.
  - Generated seven technical blog cover images for previously image-less Hydrogen article enhancements.
  - Wired generated blog covers with explicit `alt`, `title`, `width`, `height`, and lazy loading support.
  - Replaced the old SVG blog diagrams on all four currently published blog posts with generated raster cover images so the new assets are visible on `/blog` and every live blog detail page.
  - Removed visible proof-slot placeholder sections from case studies and removed text fallback logo tiles where no approved logo asset exists.
  - Removed stale missing-logo source paths and the placeholder Upwork badge path instead of inventing fake logos or fake proof assets.
- Files changed:
  - `app/page.tsx`
  - `app/hire-me/page.tsx`
  - `app/layout.tsx`
  - `components/FounderCard.tsx`
  - `components/PostVisual.tsx`
  - `components/UpworkTopRatedBadge.tsx`
  - `data/clientLogos.ts`
  - `data/caseStudies.ts`
  - `app/case-studies/[slug]/page.tsx`
  - `app/case-studies/page.tsx`
  - `lib/post-enhancements.ts`
  - `lib/public-assets.ts`
  - `public/emre-city-16x9.png`
  - `public/generated/blog/*.jpg`
  - `public/emre-mutlu.webp`
- Verification:
  - `npm run lint`
  - `npm run build`
  - Local HTML image SEO check for `/` and `/hire-me`: `HTML SEO ISSUES none`
  - Local production crawl over known public routes: `LOCAL SEO ISSUES none`
  - Local generated image URL check: all seven `/generated/blog/*.jpg` assets returned `200`
  - Local visible generated image check: 8 generated image instances rendered across `/blog` and the 4 published blog detail pages
  - Local placeholder sweep over blog and case-study routes: `VISIBLE IMAGE AND PLACEHOLDER ISSUES none`
  - Live production crawl over known public routes: `LIVE SEO HTML ISSUES none`
  - Live generated image URL check: all seven `/generated/blog/*.jpg` assets returned `200`
  - Live visible generated image check: 8 generated image instances rendered across `/blog` and the 4 published blog detail pages
  - Live placeholder sweep over blog and case-study routes: `LIVE VISIBLE IMAGE AND PLACEHOLDER ISSUES none`
  - Playwright desktop/mobile checks for `/` and `/hire-me`: `VISUAL ISSUES none`
- Manual follow-up:
  - Do not merge the PR unless Emre approves it.

## 2026-05-04

- PR: [#3 Fix sitewide SEO audit issues](https://github.com/emremutlu08/hydrogenexpert/pull/3)
- Branch: `codex/fix-sitewide-seo-audit`
- Deployment: [Production deploy](https://hydrogenexpert-78u9rh2u3-emremutlu8s-projects.vercel.app) aliased to `https://hydrogenexpert.co`.
- Summary:
  - Fixed missing image `title`, `loading`, `width`, and `height` attributes across shared image components and affected content pages.
  - Shortened over-limit SEO titles and descriptions across public routes and generated blog metadata.
  - Added a sitewide crawl verification pass covering known public routes, canonical tags, H1 count, and image attributes.
- Files changed:
  - `app/blog/[slug]/page.tsx`
  - `app/case-studies/page.tsx`
  - `app/cost/page.tsx`
  - `app/page.tsx`
  - `app/services/page.tsx`
  - `app/what-is-hydrogen/page.tsx`
  - `app/when-not-to-use-hydrogen/page.tsx`
  - `components/Header.tsx`
  - `components/Footer.tsx`
  - `components/TechnicalFigure.tsx`
  - `components/PostVisual.tsx`
  - `components/IllustrationCard.tsx`
  - `components/UdemyCourseCard.tsx`
  - `components/case-study/CaseStudyHero.tsx`
  - `components/case-study/CaseStudyScreenshots.tsx`
  - `lib/curated-images.ts`
- Verification:
  - `npm run lint`
  - `npm run build`
  - Local production crawl over all known public routes: `ISSUES none`
  - Playwright desktop/mobile checks on key pages: `VISUAL ISSUES none`
- Manual follow-up:
  - Do not merge the PR unless Emre approves it.

## 2026-05-03

- PR: [#2 Add operating rules and changelog workflow](https://github.com/emremutlu08/hydrogenexpert/pull/2)
- Branch: `codex/add-operating-rules`
- Deployment: [Production deploy](https://hydrogenexpert-b8krgcqj8-emremutlu8s-projects.vercel.app) aliased to `https://hydrogenexpert.co`.
- Summary:
  - Added `OPERATING_RULES.md` to define how Codex should work in this repository.
  - Added PR-first branch workflow, automatic validation/deploy expectation, and changelog requirements.
  - Added the canonical local project path: `/Users/emremutlu/Apps/Codex/hydrogenexpert`.
  - Added this dedicated `CHANGELOG.md` for PR-linked change history.
- Files changed:
  - `OPERATING_RULES.md`
  - `CHANGELOG.md`
- Verification:
  - `npm run lint`
  - `npm run build`
- Manual follow-up:
  - Do not merge the PR unless Emre approves it.
