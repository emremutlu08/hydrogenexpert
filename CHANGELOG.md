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
