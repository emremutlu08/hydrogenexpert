# HydrogenExpert Changes

This file tracks dated changes by approved phase.

## 2026-04-25 — Services content upgrade

### Files modified

- `app/services/page.tsx`
- `lib/services.ts`

### Before and after

- Services content:
  - Before: `/services` rendered placeholder Audit, Migration, and Retainer package cards and was intentionally excluded from nav/indexing.
  - After: `/services` is a real Hydrogen-first services page with five core services: Strategy & Fit Audit, Liquid to Hydrogen Migration, Custom Hydrogen Storefront Development, Performance/SEO/UX Optimization, and Support Retainer.
- Liquid positioning:
  - Before: Liquid was only implied as an alternative in surrounding copy.
  - After: Shopify Liquid development appears as a secondary service, framed honestly as the right move when Hydrogen is not justified.
- Navigation and sitemap:
  - Before: `Services` stayed out of the header because package content was not meaningful yet.
  - After: `hasMeaningfulServicesContent()` returns true, so `Services` is eligible for shared nav and sitemap inclusion.

### Skipped or not applicable

- No price ranges were invented. The page avoids fake pricing claims and focuses on service scope, fit, and deliverables.

### Verification

- `npm run lint` passed.
- `npm run build` passed.

## 2026-04-25 — Input-free QA cleanup

### Files modified

- `app/services/page.tsx`
- `app/sitemap.ts`
- `components/quiz/HydrogenFitQuiz.tsx`
- `lib/seo.ts`

### Files deleted

- `tmp-mobile-live-check.mjs`
- `tmp-mobile-polish-qa.mjs`

### Before and after

- Temporary QA files:
  - Before: two local Playwright QA helper scripts were left at the repo root.
  - After: both temporary files were removed.
- Services SEO handling:
  - Before: `/services` existed with visible placeholder package fields and was included in the sitemap.
  - After: `/services` remains available for `/agency` redirects, but is marked `noindex, follow` and omitted from the sitemap until real package content exists.
- Quiz form semantics:
  - Before: the quiz result form had no stable id and its opt-in checkbox had no name.
  - After: the form has `id="quiz-summary-form"` and the checkbox uses `name="wantsEmailSummary"`.

### Verification

- Live route check passed for `/`, `/what-is-hydrogen`, `/shopify-hydrogen-seo-guide`, `/should-i-use-it`, `/cost`, `/case-studies`, `/blog`, `/hire-me`, `/services`, and `/agency`.
- `/agency` returns `301` to `/services`.
- Live SEO checks found canonical URLs and JSON-LD on key pages.
- Live public-content check found no visible TBD/review-note leakage on key pages.

## 2026-04-25 — Udemy proof link cleanup

### Files modified

- `.env.local.example`
- `app/hire-me/page.tsx`
- `app/page.tsx`
- `components/Footer.tsx`
- `components/UdemyCourseCard.tsx`
- `lib/site.ts`

### Before and after

- Udemy URL:
  - Before: the site still had public fallback branches for `[Udemy URL TBD]` even though the course URL had been provided.
  - After: the shared owner config defaults to `https://www.udemy.com/shopify-hydrogen`, and Home, Hire Me, Footer, and the Udemy course card use the live URL directly.
- Structured proof:
  - Before: Home and Hire Me structured data listed LinkedIn and Upwork as external proof links.
  - After: Udemy is included in the same `sameAs` proof set.

### Skipped or not applicable

- Services package placeholders were not replaced because approved package pricing, deliverables, and best-for copy still need to be provided.

### TODO and placeholder items

- Add approved `/services` package details.
- Add `/public/emre-mutlu.webp` to replace the founder photo fallback.
- Add `/public/badges/upwork-top-rated-plus.svg` to replace the neutral Upwork badge fallback.
- Add a real EveShop screenshot asset to replace the `[Screenshot TBD]` placeholder.

## 2026-04-25 — Lead backend and SEO pillar

### Files created

- `app/shopify-hydrogen-seo-guide/page.tsx`

### Files modified

- `app/sitemap.ts`
- `components/Footer.tsx`
- `components/TurnstileField.tsx`
- `components/quiz/HydrogenFitQuiz.tsx`
- `lib/post-enhancements.ts`

### Before and after

- Quiz email capture:
  - Before: the quiz follow-up form saved email summary requests only in `localStorage`.
  - After: quiz summary requests submit through the existing `/api/lead-capture` endpoint with source kind `hydrogen_quiz_result`.
- Turnstile handling:
  - Before: multiple Turnstile-enabled forms on one page could overwrite the shared callback target.
  - After: the callback fills every `turnstileToken` hidden input on the page, so the shared lead form and quiz form do not fight each other.
- SEO pillar:
  - Before: the site had supporting Hydrogen SEO blog content, but no dedicated pillar resource page.
  - After: `/shopify-hydrogen-seo-guide` exists as a permanent resource covering metadata, canonical URLs, JSON-LD, variant URLs, sitemap, robots, performance, and current Hydrogen product-option flow.
- Internal linking:
  - Before: the variant fallback article had no broader Hydrogen SEO pillar target.
  - After: default blog internal links include the SEO guide, the footer Resources group links to it, and the sitemap includes the route.

### Skipped or not applicable

- No new visual assets were added in this pass.
- `/services` package content remains untouched because approved package details are still required.

### TODO and placeholder items

- Add approved `/services` package details.
- Add visual assets later: founder photo, Upwork badge, and EveShop screenshot.

### Verification

- `npm run lint` passed.
- `npm run build` passed.

## 2026-04-24 — Phase 0

### Files created

- `PLANNING.md`
- `app/services/page.tsx`
- `lib/navigation.ts`
- `lib/services.ts`

### Files modified

- `app/agency/page.tsx`
- `app/blog/page.tsx`
- `app/layout.tsx`
- `app/sitemap.ts`
- `components/CTASection.tsx`
- `components/Footer.tsx`
- `components/Header.tsx`
- `components/LeadCaptureForm.tsx`
- `lib/curated-images.ts`
- `lib/site.ts`
- `proxy.ts`

### Files deleted

- None

### Before and after

- Navigation:
  - Before: static `NAV_ITEMS` included `/agency` as `Services` on every page.
  - After: shared navigation is generated server-side; `Blog` appears only when published posts exist, and `Services` stays hidden until the services page has real package content.
- Services route:
  - Before: `/agency` rendered a full services-like page and there was no `/services`.
  - After: `/services` is the canonical commercial route with three placeholder-marked engagement packages, and `/agency` redirects to `/services` with a 301 in `proxy.ts` plus an App Router fallback redirect.
- Shared CTA:
  - Before: shared CTA blocks rendered a single primary external button plus the lead form.
  - After: shared CTA blocks render `Hire Emre on Upwork`, `Message on LinkedIn`, and `Or send an email brief`, all above the same shared lead form.
- Lead form:
  - Before: the form had no anchor id and used the shorter `Short form. No newsletter.` note.
  - After: the form is addressable via `#email-form` and includes the required privacy note: `Your details are used only to reply to this specific project inquiry. No newsletters, no list sharing.`
- Footer:
  - Before: the footer year was hard-coded to `2026`.
  - After: the footer year is dynamic via `new Date().getFullYear()`, and footer navigation now stays aligned with the shared server-side nav helper.
- Blog hygiene:
  - Before: `/blog` would render an empty-state page if there were no published posts.
  - After: `/blog` calls `notFound()` when there are zero published posts, and sitemap/nav inclusion follows the same published-post check.

### Skipped or not applicable

- The duplicated `Shared outcome` sentence from the original brief was not present in the current `/case-studies` code, so no case-study copy was removed in Phase 0.
- No orphaned `/blog/hydrogen-worth-2-million-shopify-store` card existed in the current Supabase-driven listing, so there was no broken blog card to remove locally in this phase.

### TODO and placeholder items

- `lib/services.ts` contains visible placeholders for `Audit`, `Migration`, and `Retainer` package pricing, best-for copy, and deliverables.
- `Services` remains intentionally excluded from the shared nav until those placeholders are replaced with approved package content.

### Verification

- `npm run lint` passed.
- `npm run build` passed.
- Route checks passed for `/`, `/services`, `/agency`, `/what-is-hydrogen`, `/should-i-use-it`, `/cost`, `/case-studies`, `/blog`, and `/hire-me`.

## 2026-04-24 — Phase 2.1

### Files created

- `components/case-study/CaseStudyHero.tsx`
- `components/case-study/CaseStudyMetricGrid.tsx`
- `components/case-study/CaseStudyScreenshots.tsx`
- `components/case-study/CaseStudyTechStack.tsx`
- `components/case-study/CaseStudyTestimonial.tsx`
- `data/caseStudies.ts`

### Files modified

- `app/case-studies/page.tsx`
- `lib/site.ts`

### Files deleted

- None

### Before and after

- Case studies page:
  - Before: `/case-studies` was a strong overview page, but it still read as a shared narrative system more than a full proof page with explicit metrics, screenshots, and structured per-case sections.
  - After: `/case-studies` is a single proof page with in-page sections for EveShop, Bayam Jewelry, and Rebel Bunny Matcha, each using shared case-study components for hero, proof grid, screenshots, tech stack, and testimonial handling.
- Content sourcing:
  - Before: the page leaned on internal narrative copy only.
  - After: the rebuilt sections combine repo content with user-provided public material and verified public-source facts, while keeping unsupported items visibly incomplete instead of smoothing them over.
- Proof structure:
  - Before: there was no metric-card system or screenshot component.
  - After: each case renders 3-5 supported proof points plus screenshot support, with EveShop intentionally showing a placeholder where a screenshot asset is still missing.
- Udemy proof:
  - Before: the Udemy link depended entirely on env configuration.
  - After: the public course URL from Emre's own site/CV is now used as the fallback so the proof layer no longer shows a missing Udemy link.

### Skipped or not applicable

- No testimonials render yet because there are still no client-approved quotes with complete attribution for EveShop, Bayam Jewelry, or Rebel Bunny Matcha.
- EveShop still has no approved screenshot asset in the repo, so that case renders a visible `[Screenshot TBD]` placeholder instead of a fake or scraped visual.

### TODO and placeholder items

- Add a real EveShop screenshot asset to replace the `[Screenshot TBD]` placeholder.
- Add client-approved testimonial copy plus attribution if testimonial blocks should go live later.

### Verification

- `npm run lint` passed.
- `npm run build` passed.
- `/case-studies` returned `200` in local route checks.

## 2026-04-24 — Phase 2.3

### Files created

- `components/LogoWall.tsx`
- `data/clientLogos.ts`

### Files modified

- `app/page.tsx`

### Files deleted

- None

### Before and after

- Homepage proof strip:
  - Before: the homepage moved directly from hero/trust bar into selected case-study cards.
  - After: the homepage now includes a dedicated `LogoWall` between the hero and the case-study previews.
- Logo rendering:
  - Before: there was no reusable client-logo wall.
  - After: the wall renders real logo assets where they exist and neutral bordered text chips where logo files are still missing.
- Current-client emphasis:
  - Before: Bayam and Rebel Bunny were visible only in cards and narrative copy.
  - After: Bayam and Rebel Bunny are visually marked as current work inside the logo wall.

### Skipped or not applicable

- No fake logos were added for missing brands.

### TODO and placeholder items

- Missing logo asset path: `/logos/atolye-stone.svg`
- Missing logo asset path: `/logos/clohi.svg`
- Missing logo asset path: `/logos/kiraz-ev.svg`
- Missing logo asset path: `/logos/petkonak.svg`

### Verification

- `npm run lint` passed.
- `npm run build` passed.
- `/` returned `200` in local route checks after the logo wall was added.

## 2026-04-24 — Phase 3.1

### Files created

- `components/quiz/HydrogenFitQuiz.tsx`
- `components/quiz/QuizQuestion.tsx`
- `components/quiz/QuizResult.tsx`
- `components/quiz/QuizScoreDisplay.tsx`

### Files modified

- `app/should-i-use-it/page.tsx`

### Files deleted

- None

### Before and after

- Quiz experience:
  - Before: `/should-i-use-it` was a static five-question reading page with a generic CTA at the bottom.
  - After: the page is now an interactive client-side quiz with yes/no state, a live score display, a threshold marker, and conditional results.
- Result handling:
  - Before: there was no tailored next step after answering the questions.
  - After: the quiz shows either a Hydrogen-evaluation result with a 3-channel CTA pattern or a Liquid-first result with a softer second-opinion CTA.
- Email capture:
  - Before: there was no quiz-specific follow-up stub.
  - After: an optional local-only email summary gate was added, then later upgraded to submit through `/api/lead-capture`.

### Skipped or not applicable

- Email API integration was deferred in this phase, then completed in the 2026-04-25 lead backend pass.

### TODO and placeholder items

- None for the quiz email path.

### Verification

- `npm run lint` passed.
- `npm run build` passed.
- `/should-i-use-it` returned `200` in local route checks.

## 2026-04-24 — Phase 3.2

### Files created

- `app/when-not-to-use-hydrogen/page.tsx`

### Files modified

- `app/page.tsx`
- `app/should-i-use-it/page.tsx`
- `app/sitemap.ts`
- `components/FaqSection.tsx`

### Files deleted

- None

### Before and after

- New SEO page:
  - Before: the "wrong move" framing did not exist as its own page.
  - After: `/when-not-to-use-hydrogen` now exists with the full six-scenario framework and a closing CTA back to the quiz.
- Internal linking:
  - Before: the quiz page and homepage FAQ did not route readers into the anti-sales framework.
  - After: the quiz intro links to `/when-not-to-use-hydrogen`, and the homepage FAQ now includes a direct link to that page.
- Sitemap:
  - Before: the new long-form page had no sitemap entry.
  - After: `/when-not-to-use-hydrogen` is included in the sitemap without being added to main nav.

### Skipped or not applicable

- The new page was intentionally kept out of the shared header navigation.

### TODO and placeholder items

- None

### Verification

- `npm run lint` passed.
- `npm run build` passed.
- `/when-not-to-use-hydrogen` returned `200` in local route checks.

## 2026-04-24 — Phase 1

### Files created

- `components/FounderCard.tsx`
- `components/UdemyCourseCard.tsx`
- `components/UpworkTopRatedBadge.tsx`
- `lib/founder.ts`
- `lib/public-assets.ts`

### Files modified

- `.env.local.example`
- `app/hire-me/page.tsx`
- `app/page.tsx`
- `components/Footer.tsx`
- `components/ProofCard.tsx`
- `components/ProofCardGrid.tsx`
- `components/StatCard.tsx`
- `components/StatCardGrid.tsx`
- `components/TrustBar.tsx`
- `lib/site.ts`

### Files deleted

- None

### Before and after

- Founder proof:
  - Before: the homepage About section had no founder photo treatment, and `/hire-me` used a generic technical illustration in the hero.
  - After: both pages use the shared `FounderCard` component with the approved three-paragraph founder story, credential chips, and a safe visual fallback when the founder photo is missing.
- Teaching proof:
  - Before: the Udemy credential existed only as text proof and was not surfaced as a reusable teaching block.
  - After: the shared `UdemyCourseCard` appears on the homepage and `/hire-me` with a live external CTA.
- Upwork proof:
  - Before: `Top Rated Plus` and related proof points rendered as plain text only.
  - After: a reusable `UpworkTopRatedBadge` component adds a real SVG badge when available, or a neutral text fallback when the SVG asset is missing.
- Clickable trust signals:
  - Before: LinkedIn, Upwork, and Udemy proof mentions were not consistently clickable across trust strips, stat cards, and proof cards.
  - After: `32K+ LinkedIn followers`, `1,666+ hours on Upwork`, `100% JSS`, `Top Rated Plus`, and the Udemy proof block now link out when a verified destination exists.
- Footer proof links:
  - Before: the footer social row used the previous icon mix and did not surface Udemy verification cleanly.
  - After: the footer now renders explicit LinkedIn, Upwork, and Udemy proof links.

### Skipped or not applicable

- No real founder photo asset was added in this phase, so `FounderCard` currently renders its neutral silhouette fallback instead of a live portrait.
- No real Upwork badge SVG was added in this phase, so the shared badge component currently renders its neutral bordered text fallback.
- The Udemy course URL has since been added as the default owner config value.

### TODO and placeholder items

- Add `/public/emre-mutlu.webp` to replace the founder photo fallback.
- Add `/public/badges/upwork-top-rated-plus.svg` to replace the neutral Upwork badge fallback.
- Optional: override `NEXT_PUBLIC_UDEMY_COURSE_URL` only if the course URL changes later.

### Verification

- `npm run lint` passed.
- `npm run build` passed.
- Route checks passed for `/`, `/services`, `/agency`, `/what-is-hydrogen`, `/should-i-use-it`, `/cost`, `/case-studies`, `/blog`, and `/hire-me`.
