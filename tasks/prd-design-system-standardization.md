# PRD: Design System Standardization

## Introduction

HydrogenExpert has a strong visual direction, but the design language has grown through page-by-page implementation. The site uses Geist everywhere, yet typography scale, spacing rhythm, card density, touch targets, and interaction feedback are not consistently governed by a documented design system.

This work creates a durable design brain for the site and then aligns the frontend to it. The `/blog` page is the reference because it best expresses the desired editorial, proof-led, technical journal feel: calm, readable, senior, restrained, and specific.

## Goals

- Create `design.md` as the canonical design system source for HydrogenExpert.
- Keep Geist as the single site-wide font family for both display and body text.
- Standardize typography through semantic classes and documented scale rules.
- Standardize page, section, card, and form spacing around the `/blog` rhythm.
- Restore subtle interaction polish while respecting reduced-motion preferences.
- Improve mobile tap targets and focus visibility without changing site copy, claims, routes, or data contracts.

## User Stories

### US-001: Document HydrogenExpert Design DNA

**Description:** As a maintainer, I want a single design brain so that future pages and components speak the same visual language.

**Acceptance Criteria:**
- [ ] Root-level `design.md` exists.
- [ ] `design.md` defines atmosphere, palette, typography, spacing, components, interaction, accessibility, and anti-patterns.
- [ ] `/blog` is named as the canonical reference page.
- [ ] Documentation explicitly rejects generic SaaS, agency-dashboard, unsupported-proof, and unrelated brand styling.

### US-002: Standardize Font Usage

**Description:** As a visitor, I want every page to feel typographically consistent so that the site feels intentional and trustworthy.

**Acceptance Criteria:**
- [ ] `--font-sans` and `--font-display` both resolve to Geist.
- [ ] No new font family is introduced.
- [ ] Core headings, body copy, labels, article text, and card titles use documented semantic classes or documented exceptions.
- [ ] Browser verification confirms computed font family includes Geist on sampled pages.

### US-003: Normalize Spacing and Component Rhythm

**Description:** As a visitor moving across pages, I want sections, cards, and editorial content to feel like one product rather than unrelated templates.

**Acceptance Criteria:**
- [ ] `page-shell` remains the page-level rhythm source.
- [ ] Common cards and sections use consistent padding, gap, radius, and shadow tiers.
- [ ] Blog index, one blog post, homepage, services, case studies, hire-me, and contact preserve responsive layouts without horizontal overflow.
- [ ] Page-specific spacing exceptions are either removed or aligned with `design.md`.

### US-004: Restore Interaction Polish

**Description:** As a keyboard, mouse, or touch user, I want controls to clearly respond to interaction.

**Acceptance Criteria:**
- [ ] Global animation/transition disabling is moved under `prefers-reduced-motion`.
- [ ] Links, buttons, cards, form controls, nav links, and accordion summaries have consistent visible focus states.
- [ ] Hover/focus transitions are subtle, fast, and consistent.
- [ ] Primary mobile controls meet practical 44px tap-target expectations.

### US-005: Preserve Brand and Scope

**Description:** As the site owner, I want consistency improvements without changing commercial claims or positioning.

**Acceptance Criteria:**
- [ ] No new testimonials, logos, screenshots, metrics, ratings, revenue claims, conversion claims, or unsupported proof are added.
- [ ] No routes, SEO schemas, APIs, Supabase contracts, or analytics event names are changed.
- [ ] The solo senior Shopify Hydrogen operator positioning remains intact.

## Functional Requirements

- FR-1: Add root-level `design.md`.
- FR-2: Keep Geist single-family setup in the root layout and CSS tokens.
- FR-3: Update global design tokens and semantic CSS classes for typography, spacing, surfaces, controls, forms, focus, and motion.
- FR-4: Align high-use components and pages to the documented token language without broad redesign.
- FR-5: Preserve all existing content, routing, metadata, schema, and data-fetching behavior.
- FR-6: Verify the implementation with lint, tests, build, and browser viewport checks.

## Non-Goals

- No new font pair.
- No OpenAI or third-party brand palette.
- No homepage rewrite, navigation IA rewrite, copy rewrite, or SEO expansion.
- No new animation framework.
- No new component library.
- No schema, route, database, or API changes.
- No PR merge without explicit approval.

## Design Considerations

- `/blog` is the visual north star: editorial cards, readable measures, structured metadata, restrained surfaces, and calm technical credibility.
- Homepage may remain more marketing-forward in its first viewport, but typography, spacing, controls, and surfaces must still use the shared design language.
- Use emerald as an accent, not a decorative wash.
- Prefer semantic CSS classes over repeating arbitrary values in page files.
- Keep the site practical and proof-led; do not make it look like a generic SaaS landing page or a large agency dashboard.

## Technical Considerations

- The app uses Next.js App Router, Tailwind CSS v4, and `next/font/google`.
- `app/globals.css` is the main design token surface.
- Shared primitives such as `PageIntroSection`, `SectionHeader`, `CTASection`, cards, footer, header, and form controls should carry most visual standardization.
- Browser checks should inspect computed styles and layout overflow, not only source code.

## Success Metrics

- `npm run lint`, `npm run test`, and `npm run build` pass.
- Browser checks pass at 375, 768, 1024, and 1440 widths for `/blog`, one blog post, `/`, `/services`, `/case-studies`, `/hire-me`, and `/contact`.
- Computed body and heading font family includes Geist on sampled pages.
- No sampled page has horizontal overflow.
- Header/contact primary mobile controls are at least 44px tall.
- Interactions have visible hover/focus feedback unless reduced motion is requested.

## Open Questions

- None. The reference page is `/blog`, the font strategy is Geist single-family, and `design.md` lives at the repo root.
