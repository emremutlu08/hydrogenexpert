# PRD: HydrogenExpert Site Trust, Measurement, and Quality Fixes

## Introduction

HydrogenExpert already has a strong narrow SEO and positioning foundation. This work closes the practical trust, measurement, discovery, and quality gaps that keep the site from feeling like a complete lead-generation system: missing legal/contact surfaces, placeholder analytics, limited authority surface area, incomplete schema details, no RSS feed, and no automated sitemap drift protection.

## Goals

- Add practical legal and contact pages for prospective clients.
- Add an indexable About page that consolidates conservative proof and editorial standards.
- Prevent fake or placeholder Google Analytics IDs from loading.
- Defer Cloudflare Turnstile until the lead form is close to use.
- Improve schema and feed discovery for search and AI crawlers.
- Add automated tests for analytics guardrails, feed output, and sitemap coverage.

## User Stories

### US-001: Legal and Contact Pages

**Description:** As a prospective client, I want to understand how my form data, analytics data, cookies, and third-party services are handled so that I can trust the site before contacting Emre.

**Acceptance Criteria:**
- [ ] `/privacy`, `/cookies`, `/terms`, and `/contact` return HTTP 200.
- [ ] Privacy page covers lead form fields, source path/kind, IP/security use, Supabase, Vercel Analytics, GA when configured, and Cloudflare Turnstile.
- [ ] Cookie page explains necessary cookies/security, analytics, and browser controls.
- [ ] Terms page is service-site oriented, not ecommerce checkout terms.
- [ ] Contact page links to LinkedIn, Upwork, and the existing email brief form.
- [ ] Legal pages are linked from the footer.
- [ ] `/privacy`, `/cookies`, and `/terms` use `noindex, follow`; `/contact` is indexable.
- [ ] Verify in browser at mobile and desktop widths.

### US-002: Authority Page

**Description:** As a Shopify merchant evaluating Emre, I want a dedicated page explaining his background, public proof, and standards so that I can decide whether he is credible.

**Acceptance Criteria:**
- [ ] `/about` is indexable and included in sitemap.
- [ ] Page uses existing proof only: Upwork Top Rated Plus, 100% JSS, 1,900+ hours, Rebel Bunny 5.0 feedback, Udemy course, EveShop/Bayam/Rebel Bunny references.
- [ ] Page includes an editorial/proof standard: no fake testimonials, unsupported metrics, invented screenshots, or invented logos.
- [ ] Page links to LinkedIn, Upwork, Udemy, case studies, and `/hire-me`.
- [ ] Page emits Person-centered `ProfilePage` JSON-LD.
- [ ] Verify in browser at mobile and desktop widths.

### US-003: Analytics Guard

**Description:** As the site owner, I want analytics to load only when properly configured so that fake placeholder tracking does not pollute the live site or hurt performance.

**Acceptance Criteria:**
- [ ] `G-XXXXXXXXXX` and placeholder-like GA values are rejected.
- [ ] Google Analytics renders only for a real `G-...` measurement ID.
- [ ] Vercel Analytics and Speed Insights remain active.
- [ ] CTA, lead submit, blog view, and blog read events still call `window.gtag` only when it exists.
- [ ] Source HTML no longer contains `G-XXXXXXXXXX`.

### US-004: Performance Cleanup

**Description:** As a mobile visitor, I want the homepage to render useful text faster so that the site feels credible and responsive.

**Acceptance Criteria:**
- [ ] Turnstile script loads only when a lead form is near viewport or interacted with.
- [ ] Removing dummy GA eliminates the unused GTM request from Lighthouse.
- [ ] Homepage Lighthouse target after changes is Performance 85+ where network variance allows, with LCP under 3.5s.
- [ ] CLS remains 0 or near 0.
- [ ] Lead forms still submit when Turnstile is configured.

### US-005: Schema and Discovery

**Description:** As a crawler or AI search system, I want richer entity and content discovery signals so that HydrogenExpert can be understood as a verified specialist site.

**Acceptance Criteria:**
- [ ] Root `ProfessionalService` and `Organization` schema include logo/image.
- [ ] Article schemas include publisher logo and `mainEntityOfPage`.
- [ ] Case study schemas include approved representative images where available.
- [ ] `sameAs` uses only verified external profiles already present in site data.
- [ ] `/feed.xml` returns valid RSS XML with published blog posts.
- [ ] Blog or root metadata exposes RSS as an alternate feed link.

### US-006: Sitemap Drift Protection

**Description:** As the site maintainer, I want automated coverage checks so that published blog posts and key routes do not disappear from discovery surfaces.

**Acceptance Criteria:**
- [ ] Tests cover sitemap route composition with mocked published posts.
- [ ] Sitemap includes `/about`, `/contact`, service pages, case studies, blog index, and blog posts.
- [ ] Sitemap excludes noindex legal pages.
- [ ] Tests cover empty-post fallback and published-post inclusion.

## Functional Requirements

- FR-1: Add public routes for `/about`, `/privacy`, `/cookies`, `/terms`, `/contact`, and `/feed.xml`.
- FR-2: Add footer links for About, Contact, Privacy, Cookies, and Terms without adding them to primary navigation.
- FR-3: Add `/about` and `/contact` to sitemap; keep legal noindex pages out of sitemap.
- FR-4: Add a GA measurement helper that rejects empty, fake, or placeholder IDs.
- FR-5: Defer Turnstile loading while preserving the hidden `turnstileToken` form field.
- FR-6: Enrich schema helpers and consumers without changing visible unsupported claims.
- FR-7: Add Vitest coverage for analytics guard, sitemap inclusion/exclusion, and feed output.
- FR-8: Update `CHANGELOG.md` after the PR number exists.

## Non-Goals

- No new testimonials, logos, screenshots, revenue claims, conversion claims, or client quotes.
- No cookie consent banner in this pass.
- No ecommerce legal terms such as refunds, shipping, or checkout policies.
- No broad redesign or generic agency positioning.
- No PR merge without explicit approval.

## Design Considerations

- Reuse existing page shell, cards, section headers, founder card, proof cards, CTA, and footer visual language.
- Keep legal pages simple, readable, and clearly scoped as practical site notices rather than formal legal advice.
- Keep `/about` proof-oriented and restrained; do not turn it into a generic agency story page.

## Technical Considerations

- Use Server Components for new pages.
- Use `buildMetadata` for canonical, robots, and social metadata.
- Add small pure helpers for GA ID validation, RSS XML generation, and sitemap entry construction so Vitest can verify behavior without booting Next routes.
- Use only existing proof constants from `lib/site.ts`, case-study data, and existing external profile URLs.

## Success Metrics

- New routes return 200 locally and after deploy.
- Homepage source no longer contains `G-XXXXXXXXXX`.
- Lighthouse no longer reports the dummy GTM script as unused JavaScript.
- Sitemap tests prevent blog post and route drift.
- RSS feed exposes published blog post URLs.
- Mobile and desktop browser checks show no horizontal overflow on sampled pages.

## Open Questions

- The real GA measurement ID remains a deployment environment task. The code must reject placeholders until a valid value is configured.
