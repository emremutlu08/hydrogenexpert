# SEO GEO Audit Checklist

Status: Active
Last updated: 2026-05-28
Owner: Agent
Source of truth: User-provided Moz technical SEO audit checklist excerpt, `agent-docs/CONTENT-PRODUCTION-PLAYBOOK.md`, `seo-content-strategist`, `geo`, Google Search Central for drift-prone current policy

## Purpose

This is the canonical HydrogenExpert checklist for SEO/GEO status questions, especially when Emre asks `SEO ne durumda`, `GEO ne durumda`, `Google'da durum ne`, or similar.

The checklist adapts the user-provided Moz "Technical SEO (and Beyond) Site Audit Checklist" into an operational status framework for HydrogenExpert. It is not a verbatim copy of the Moz guide. Use it to report the current status of each audit area with evidence, gaps, and next actions.

## Required Response Trigger

When Emre asks `SEO ne durumda` or a close variant:

1. Read `AGENTS.md`, check `git status --short --branch`, then read this file and `agent-docs/CONTENT-PRODUCTION-PLAYBOOK.md`.
2. Use the relevant SEO and GEO skills before answering:
   - `seo-content-strategist` for search intent, on-page SEO, technical SEO, content clusters, links, and measurement.
   - `geo` plus relevant GEO sub-skills for AI visibility, crawler access, `llms.txt`, schema, citability, brand mentions, platform readiness, and content quality.
3. Verify live production surfaces before making current-state claims:
   - `https://hydrogenexpert.co`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/llms.txt`
   - `/llms-full.txt`
   - high-intent service/article/case-study URLs from the current sitemap.
4. Use Search Console, Bing Webmaster Tools, Analytics, backlink tools, and third-party crawlers only when accessible. If not accessible, mark those rows `Unknown - needs confirmation` or `Blocked - access needed`.
5. Report the status of every section in this checklist. Do not answer with generic SEO theory.

## Status Values

Use these values consistently:

| Status | Meaning |
| --- | --- |
| `Pass` | Verified in the current run with evidence. |
| `Fail` | Verified problem that should be fixed. |
| `Needs Review` | Partial evidence, risk, or non-critical mismatch. |
| `N/A` | Not applicable to the current HydrogenExpert surface. |
| `Unknown` | Cannot be verified from available data. Name what would confirm it. |
| `Blocked` | Verification requires access, authentication, paid tooling, or a third-party account. |

## Evidence Standard

For each claim, prefer the strongest available evidence:

1. Live production response, rendered HTML, headers, sitemap, robots, `llms`, browser behavior, or Search Console data.
2. Current repo code and validation scripts.
3. Official Google Search documentation for SEO policy and current tooling behavior.
4. Third-party SEO/GEO tools for crawl, backlink, social preview, and ranking data.
5. Manual observation, clearly labeled as manual.

Do not invent rankings, impressions, clicks, backlinks, traffic, conversions, rich-result eligibility, AI mentions, or Search Console status. If a metric is unavailable, say so.

Current Core Web Vitals note: the Moz excerpt named FID, but current Google Search guidance says INP replaced FID as a Core Web Vital on 2024-03-12. Report LCP, INP, and CLS for current audits, and treat FID as a legacy metric if it appears in older tools.

## Output Contract

For `SEO ne durumda` answers, use this order:

1. Net verdict in Turkish: healthy / risky / blocked / priority issue.
2. Evidence snapshot: live URLs, tools, date, and any access blockers.
3. Section scorecard: each section below with `Pass`, `Fail`, `Needs Review`, `N/A`, `Unknown`, or `Blocked`.
4. Top issues and top opportunities, prioritized by crawl/indexing risk, revenue intent, GEO visibility, then polish.
5. Manual follow-ups such as Search Console URL inspection, sitemap resubmission, backlink export, disavow review, or third-party profile edits.

## Audit Setup

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Analytics installed | Analytics exists and can show traffic/technical data. | GA4/Vercel Analytics or repo config; if no access, mark blocked. |
| Search engine properties set up | Google Search Console and Bing Webmaster Tools properties exist. | Property access, sitemap status, coverage/indexing reports. |
| Site crawl run | A crawler or repo-owned script inspected more than one URL. | Screaming Frog/Sitebulb/Moz crawl, custom crawl, `verify:internal-links`, sitemap crawl. |
| Audit spreadsheet/status log | Each point has status, notes, and action items. | This checklist output or a dedicated report file when requested. |

## Crawling And Indexing

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| URL is indexed | Important URLs appear in Google or Search Console URL Inspection. | GSC URL Inspection preferred; `site:` search is a rough fallback. |
| Important content indexed | Google can see the actual primary content, not just shell HTML. | GSC rendered HTML/screenshot, live rendered source, cache alternatives when available. |
| Returns `200` status | Canonical indexable URLs return `200`; old URLs intentionally redirect. | `curl -I`, httpstatus-style redirect trace, browser network. |
| Indexable by robots meta tag and `X-Robots-Tag` | Intended public pages are not `noindex`; private pages are intentionally excluded. | HTML robots meta, response headers, GSC indexability. |
| Not blocked by `robots.txt` | Important URLs and render-critical assets are crawlable. | `/robots.txt`, Google robots tester equivalent, crawler report. |
| URL listed in XML sitemap | Indexable URLs appear in sitemap or sitemap index. | `/sitemap.xml`, current sitemap script output. |
| Sitemap location defined in `robots.txt` | Robots file points crawlers to the sitemap. | `/robots.txt` contains canonical sitemap URL. |
| Sitemap submitted to search engines | Search engines know about the sitemap. | GSC/Bing sitemap reports; blocked if no account access. |
| Discoverable via internal links/navigation | Priority pages are reachable from navigation or internal links and are not orphaned. | Crawl depth, internal link report, route inspection. |
| Single canonical URL | HTTP/HTTPS, `www`/apex, trailing variants, and parameters resolve to one canonical. | Redirect trace, canonical tag, sitemap canonical. |
| Self-referencing canonical on canonical pages | Public canonical pages point to themselves. | Rendered HTML. |
| Parameter canonicals stable | Non-content-changing parameters do not create duplicate canonicals. | Test URL with harmless parameter. |
| Google-selected canonical matches user-selected canonical | Google respects the intended canonical. | GSC URL Inspection; blocked if no access. |
| No canonical/indexation mixed signals | Canonical and robots directives do not contradict each other. | HTML/head/header inspection. |
| Friendly URL structure | URLs are short, readable, stable, and keyword-relevant without unnecessary parameters. | Sitemap and route review. |
| Basic JavaScript rendering works | Primary content renders for Google with basic JS. | GSC rendered page, browser/no-JS checks, server-rendered HTML. |
| Critical CSS/JS/images not blocked | Resources needed to render content are crawlable. | Robots file, network/resource report, GSC blocked resources. |

## Meta And Structured Data

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Page contains one title element | Every important URL has a useful, single title tag. | Rendered HTML/head inspection. |
| Title front-loads important intent | Important keywords and buyer intent appear early enough to be visible in SERP snippets. | Title text and SERP preview. |
| Title tag is unique | Titles are not duplicated across important pages. | Crawl/title export or repo metadata scan. |
| Unique meta description | Descriptions are unique and useful, even if Google rewrites them. | Rendered metadata and crawl export. |
| Favicon defined | Browser/search favicon exists and is clear. | HTML link tags, public asset response. |
| Open Graph/social metadata | OG/Twitter/LinkedIn preview data is complete and route-appropriate. | HTML metadata, social preview/debugger when needed. |
| Structured markup exists | Relevant JSON-LD is present and matches visible content. | Rendered source, Rich Results Test, schema validator. |
| Structured markup is eligible and valid | Schema has required fields and no unsupported claims. | Rich Results Test or structured data validator. |
| `max-image-preview:large` enabled | Discover/image preview robots directive allows large previews where appropriate. | Robots meta tag/header. |

## Content

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Content is not substantially duplicate | Pages do not repeat the same intent, copy, or near-duplicate sections. | Crawl similarity, exact-match searches, repo content review. |
| Headings are hierarchical | One clear H1 and logical H2/H3 structure support users and accessibility. | Rendered DOM, accessibility/heading outline. |
| Content is keyword-targeted | URL, title, description, H1, subheads, body, and image alt support the intended query naturally. | Page review mapped to target keyword/search intent. |
| No keyword stuffing | Copy stays readable and merchant-useful. | Manual review. |
| Complies with Google quality/spam guidelines | No cloaking, sneaky redirects, doorway pages, autogenerated spam, or manipulative content. | Live behavior, repo review, official policy check. |
| Avoids intrusive interstitials | Mobile users can reach main content without obstructive overlays. | Mobile browser check. |
| Avoids heavy ads above the fold | Ads or promotional blocks do not bury the main content. | Mobile/desktop viewport review. |
| Main content is not loaded in an iframe | Important content lives in the page itself unless an iframe is necessary and crawlable. | DOM review. |
| No Flash dependency | No important content relies on Flash or incompatible plugins. | DOM/assets review. |
| Lazy-loaded content visible in viewport | Lazy-loaded images/content appear when scrolled and are discoverable. | Browser scroll, rendered HTML, GSC screenshot. |
| Infinite scroll has paginated loading | If infinite scroll exists, URL/state changes expose crawlable segments. | Route/browser behavior; usually `N/A` for HydrogenExpert. |
| Current publication and updated dates | Public content uses truthful visible dates and schema `datePublished`/`dateModified` where relevant. | Visible page and JSON-LD. |
| Clear author and publisher | Author/publisher signals are visible or marked up where relevant. | Page content, schema, About/Contact/profile links. |
| SafeSearch risk checked | Site does not appear filtered for unintended explicit/sensitive content. | Manual SafeSearch comparison if risk exists. |

## Links And Navigation

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Links are crawlable | Links use crawlable anchors with `href`. | DOM/crawler link extraction. |
| No broken outgoing/internal links | Important pages do not link to `404` or broken destinations. | Internal-link checker, crawl report. |
| Descriptive anchor text | Anchors describe destination intent instead of only generic text. | Link export/manual review. |
| Qualified links where appropriate | Sponsored, UGC, or untrusted links use `nofollow`, `ugc`, or `sponsored` as appropriate. | Rendered link attributes. |
| Faceted navigation avoids duplicates | Filters/facets do not create crawl traps or near-duplicate indexable URLs. | Usually `N/A`; route/crawl review if filters exist. |
| Paginated pages clearly linked | Paginated content is linked and canonicalized correctly. | Usually `N/A`; route review if pagination exists. |
| Link count is reasonable | Pages do not bury priority links among excessive boilerplate links. | Crawl link counts and template review. |
| No redirect chains in links | Internal links point to final canonical URLs, not chains. | Redirect crawl, `verify:internal-links`. |

## Images

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Descriptive alt attributes | Meaningful images have useful alt text; decorative images are handled intentionally. | DOM/image audit. |
| Width and height are defined | Images avoid layout shift by reserving dimensions or stable aspect ratios. | DOM/CSS review, Lighthouse/CLS signals. |
| Titles, captions, filenames, and surrounding text are descriptive | Image context helps users and search engines understand content. | Asset/file/content review. |
| Important text is not image-only | Text that matters for SEO or accessibility appears in HTML, not only inside images. | Visual/DOM comparison. |
| Images are discoverable in sitemaps when useful | Important indexable images are included in normal or image sitemap data when appropriate. | Sitemap route and image URL review. |

## Video

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Video appears on public indexable page | Any video meant to rank is embedded on an indexable URL. | Page/indexability review; usually `N/A` if no video. |
| Video uses appropriate HTML tag | Embeds use `video`, `embed`, `iframe`, or `object` in a crawlable way. | DOM review. |
| Video sitemap coverage | Video URLs have sitemap metadata when video SEO matters. | Sitemap review; often `N/A`. |
| Video schema markup | Required video schema fields exist when video is a ranking target. | JSON-LD/Rich Results Test; often `N/A`. |

## Mobile

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Mobile-friendly rendering | Content fits viewport, touch targets work, and no horizontal overflow blocks use. | Mobile browser, Lighthouse/PageSpeed, Search Console mobile data if available. |
| Responsive web design preferred | Same URL serves desktop and mobile with responsive layout. | Browser viewport checks and route behavior. |
| Mobile content and links match desktop | Mobile does not hide important content, links, metadata, structured data, or robots directives. | Desktop/mobile DOM comparison. |
| Separate mobile URL rules | If separate mobile URLs ever exist, canonical, alternate, and hreflang must be correct. | Usually `N/A`; inspect redirects and link tags if present. |

## Speed

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Content loads in reasonable time | Main content is usable quickly; investigate pages above roughly 4-5 seconds. | Browser timing, Lighthouse, PageSpeed, analytics. |
| Core Web Vitals healthy | LCP, INP, and CLS are good or improving. | PageSpeed Insights, CrUX/GSC CWV, Lighthouse lab data. |
| Images optimized | Images are compressed, responsive, correctly sized, and modern-format where practical. | Lighthouse/PageSpeed opportunities, asset review. |
| Text compression enabled | HTML/CSS/JS responses are compressed. | Response headers. |
| CSS and JS optimized | No severe render-blocking, unused CSS, excessive JS execution, or avoidable bundles. | Lighthouse/PageSpeed, bundle/build output. |
| Server response time healthy | TTFB is not a bottleneck for important pages. | Response timing, hosting analytics, PageSpeed. |
| Browser caching leveraged | Cache headers are appropriate for static assets. | Response headers. |
| CDN used appropriately | Static assets and pages benefit from Vercel/CDN caching where relevant. | Headers, deployment platform behavior. |

## Security

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| HTTPS works correctly | HTTP redirects to HTTPS and canonical pages are secure. | Redirect trace, browser security state. |
| HSTS considered/supported | Strict-Transport-Security header is present or intentionally absent. | Response headers and deployment policy. |
| No hacked content, malware, or warnings | Search Console, Safe Browsing, and browser checks show no security warnings. | GSC/Safe Browsing/browser check; mark blocked if no GSC access. |

## International And Multilingual

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Location targeting signals are intentional | Domain/path/content does not accidentally imply unsupported local presence. | URL/content/schema review. |
| Valid hreflang annotation | If multilingual pages exist, hreflang is valid and reciprocal. | Usually `N/A`; hreflang tester or rendered tags if present. |
| Page language is obvious | Page language is consistent and not confused by boilerplate. | Browser translation prompt/manual content review. |
| No automatic geo/language redirection hiding content | Users and crawlers can access all intended language/location pages. | Redirect/browser/crawler behavior. |

## Backlinks And Off-Page

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| Relevant backlinks exist | Important pages have trusted external references where expected. | Moz/Ahrefs/Semrush/GSC/link exports; often blocked without tools. |
| Backlinks do not violate Google guidelines | No known manipulative link schemes or manual actions. | GSC manual actions, backlink audit, Emre confirmation. |
| Disavow file does not block important links | Existing disavow file, if any, does not remove valuable links. | Google Disavow Tool; blocked if no access. |

## GEO And AI Search Overlay

These items are HydrogenExpert-specific additions to the Moz-derived checklist. Always include them in `SEO ne durumda` answers because Emre asked for SEO and GEO skills together.

| Item | Verify | Evidence to collect |
| --- | --- | --- |
| AI crawler access | `robots.txt` does not unintentionally block useful AI/search crawlers. | Robots analysis with `geo-crawlers` logic. |
| `llms.txt` and `llms-full.txt` quality | AI-readable files return plain useful content, cover core routes, and match public truth. | Live `/llms.txt`, `/llms-full.txt`, route/source review. |
| AI citability | Pages include self-contained answer blocks, definitions, tables, FAQs, and source-backed claims. | `geo-citability` review and rendered content. |
| Entity and brand clarity | HydrogenExpert, Emre Mutlu, services, proof, and contact/about signals are consistent. | Homepage/About/Contact/schema/public profiles. |
| Schema supports AI understanding | Organization/Person/ProfessionalService/Article/FAQ/Breadcrumb/ItemList schema matches rendered content. | `geo-schema`, Rich Results Test, rendered JSON-LD. |
| Platform readiness | Content is useful for Google AI Overviews, ChatGPT, Perplexity-style answer extraction. | `geo-platform-optimizer` review. |
| External authority signals | Editable public profiles and third-party mentions support the same canonical URL and positioning. | LinkedIn/GitHub/DEV/Medium/Upwork/Udemy/public profiles; mark blocked when access is missing. |

## Suggested HydrogenExpert Sampling Set

Start from the live sitemap, then include at least:

- `/`
- `/shopify-hydrogen-developer`
- `/shopify-hydrogen-agency`
- `/shopify-hydrogen-packages`
- `/case-studies`
- one current high-intent `/articles/` route
- one current blog route if Supabase access/content is available
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/llms-full.txt`

Update this sample from the current sitemap instead of assuming route availability.

## Source Checklist Notes

The user-provided Moz excerpt also emphasized:

- Keep a working audit log with importance, status, notes, action items, and references.
- A single URL can be audited manually, but sitewide status needs crawling.
- Search Console URL Inspection is preferred for exact indexability and canonical checks when access exists.
- `site:` searches are useful but imperfect.
- Crawlability, indexability, canonicals, internal links, schema, mobile parity, speed, security, internationalization, and backlinks all interact; do not isolate SEO status to only title tags or content.
- Google may rewrite titles and descriptions, ignore some directives, choose a different canonical, or lack enough field data for Core Web Vitals. Report what is verified and what remains uncertain.
