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

- PR: [#3 Fix sitewide SEO audit issues](https://github.com/emremutlu08/hydrogenexpert/pull/3)
- Branch: `codex/fix-sitewide-seo-audit`
- Deployment: [Production deploy](https://hydrogenexpert-lfbj4c04a-emremutlu8s-projects.vercel.app) aliased to `https://hydrogenexpert.co`.
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
