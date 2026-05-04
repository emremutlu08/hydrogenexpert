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

- PR: [#7 Standardize HydrogenExpert design DNA, font, and spacing](https://github.com/emremutlu08/hydrogenexpert/pull/7)
- Branch: `codex/design-dna-standardization`
- Deployment: [Production deploy](https://hydrogenexpert-nr0uzhk9y-emremutlu8s-projects.vercel.app) aliased to `https://hydrogenexpert.co`.
- Summary:
  - Added root-level `design.md` as the permanent HydrogenExpert design brain.
  - Added `tasks/prd-design-system-standardization.md` to define goals, non-goals, acceptance criteria, and verification for design standardization.
  - Kept Geist as the sitewide font standard while documenting `/blog` as the editorial rhythm reference.
  - Restored subtle interaction motion through reduced-motion-aware CSS and improved focus behavior.
  - Standardized mobile tap targets across header, footer, CTA, blog pagination, and lead-form primary controls.
  - Made the shared lead form readable as a standalone dark panel, not only inside dark CTA sections.
- Files changed:
  - `design.md`
  - `tasks/prd-design-system-standardization.md`
  - `app/globals.css`
  - `app/blog/page.tsx`
  - `components/CTASection.tsx`
  - `components/Footer.tsx`
  - `components/Header.tsx`
  - `components/LeadCaptureForm.tsx`
- Verification:
  - `npm run lint`
  - `npm run test`
  - `npm run build`
  - Local production browser sweep at 375, 768, 1024, and 1440 widths for `/`, `/blog`, `/blog/shopify-hydrogen-product-description-ssr-seo`, `/services`, `/case-studies`, and `/hire-me`: no horizontal overflow, Geist computed font family, 0.18s interaction motion, and primary mobile targets passing.
  - Live smoke check on `https://hydrogenexpert.co` for `/`, `/blog`, `/services`, `/case-studies`, and `/hire-me`: HTTP 200, Geist computed font family, and no mobile horizontal overflow.
  - `/contact` returned 404 on the current `main` base; this PR does not add routes.
- Manual follow-up:
  - Do not merge the PR unless Emre approves it.

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
