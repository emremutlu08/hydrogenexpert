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
- Deployment: Pending production deployment.
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
- Manual follow-up:
  - Configure the real GA measurement ID in Vercel only if Google Analytics should be active.
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
