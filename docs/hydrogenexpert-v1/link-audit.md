# HydrogenExpert V1 Link Audit

Last updated: May 7, 2026

## Navigation Decisions

- Header hides `Articles` until at least one evergreen article is public.
- Footer primary services are: Shopify Hydrogen Audit, Liquid to Hydrogen Migration, Custom Hydrogen Storefront, Shopify Hydrogen SEO, Hydrogen Performance Optimization, Hydrogen Support Retainer, Hydrogen Cost.
- Agency alternative, headless agency, and developer pages remain reachable from `/services`, contextual links, and sitemap.
- Email brief CTAs point to `/contact#fit-review-form` or the local form anchor and emit `cta_click_email_brief`.

## Reachability

| Page group | Public link source | Sitemap | Status |
| --- | --- | --- | --- |
| Primary services | Footer + `/services` | Yes | Done |
| SEO service landing pages | `/services` + contextual links | Yes | Done |
| Case studies | Header/footer + `/case-studies` | Yes | Done |
| Vertical decision pages | Internal resource/service links | Yes | Done |
| Blog index/posts | Header/footer when posts exist | Yes | Done |
| Articles index | Footer/resources, top nav only after first public article | Yes | Done |
| Future article details | Not linked publicly | No until public | Done |
| Legal pages | Footer trust links | No, because noindex/follow | Done |

## External Link Rules

- External `Link`/`a` elements that open new tabs use `target="_blank"` and `rel="noreferrer"`.
- Public proof links point to LinkedIn, Upwork, Udemy, live client sites, or official Shopify references where used.

## Manual Crawl Checklist

1. Start local production server.
2. Crawl sitemap URLs and all same-origin anchors from sampled routes.
3. Confirm no internal 404s outside intentional future article 404s.
4. Confirm no scheduled article URL appears in `/articles`, `/sitemap.xml`, related article cards, or service related links before publish date.
5. Confirm footer service links all return 200.
6. Confirm external links either return 200/3xx or are third-party pages that block automated checks but open manually.

## Current P0 Issues

No known P0 link issue remains in source after the closure cleanup.

## Local Production Crawl Result

Production-mode local server on `http://localhost:3100`:

- Visited 40 internal HTML routes from homepage, services, case studies, blog, articles, contact, and quiz entry points.
- Internal 404s: none.
- Redirects: `/cost` returned expected `308` to `/shopify-hydrogen-cost`.
- Future article links: none found.
- Footer primary service missing links: none.
- `/sitemap.xml` did not include `/articles/how-to-hire-shopify-hydrogen-developer` before its publish date.

Production external-link checks should still be repeated after deployment because third-party profiles can rate-limit or vary automated responses.
