# HydrogenExpert V1 SEO QA

Last updated: May 7, 2026

## Source Of Truth

- Metadata helper: `lib/seo.ts`
- Sitemap entries: `lib/sitemap-entries.ts`
- Sitemap route: `app/sitemap.ts`
- Robots route: `app/robots.ts`
- Article visibility: `lib/articles.ts`
- Structured data helpers: `lib/structured-data.ts`

## Route Table

| Route | Title/description | Canonical | Robots | JSON-LD | Sitemap included | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Unique homepage metadata | Yes | index/follow | Person, ProfessionalService, WebSite-style root schemas | Yes | Premium Hydrogen positioning. |
| `/about` | Unique authority metadata | Yes | index/follow | Breadcrumb/person proof schema | Yes | Verified profile hub. |
| `/services` | Unique service hub metadata | Yes | index/follow | Breadcrumb/service-oriented schemas | Yes | Links all service pages. |
| `/shopify-hydrogen-agency` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | SEO landing page, not footer-primary. |
| `/headless-shopify-agency` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | SEO landing page, not footer-primary. |
| `/shopify-hydrogen-developer` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | Developer-intent page. |
| `/shopify-hydrogen-audit` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | Primary footer service. |
| `/liquid-to-hydrogen-migration` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | Primary footer service. |
| `/custom-shopify-hydrogen-storefront` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | Primary footer service. |
| `/shopify-hydrogen-seo` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | Primary footer service. |
| `/shopify-hydrogen-performance-optimization` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | Primary footer service. |
| `/shopify-hydrogen-support-retainer` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | Primary footer service. |
| `/shopify-hydrogen-cost` | Unique service metadata | Yes | index/follow | Service, FAQ, Breadcrumb | Yes | Primary footer service. |
| `/case-studies` | Unique case-study index metadata | Yes | index/follow | Breadcrumb/FAQ | Yes | Links all case studies. |
| Hydrogen case-study detail routes | Unique case metadata | Yes | index/follow | Breadcrumb/CaseStudy-like work schema | Yes | No unsupported testimonial or fake metric. |
| Shopify proof detail routes | Unique case metadata | Yes | index/follow | Breadcrumb/CaseStudy-like work schema | Yes | Keep each case labeled by its real implementation type. |
| `/should-i-use-it` | Unique decision-guide metadata | Yes | index/follow | Breadcrumb/Service schema | Yes | Quiz remains readable without JS. |
| `/blog` | Unique blog index metadata | Yes | index/follow | Breadcrumb | Yes if posts exist | Blog is production notes only. |
| `/blog/[slug]` | Unique post metadata | Yes | index/follow | BlogPosting/Article | Yes if published | Generated from Supabase posts. |
| `/articles` | Unique articles index metadata | Yes | index/follow | CollectionPage, Breadcrumb | Yes | Top nav hidden until public articles exist. |
| `/articles/[slug]` | Unique article metadata when public | Yes | noindex/notFound when future | Article, Breadcrumb only when public | Only public articles | Future scheduled articles remain hidden. |
| `/privacy` | Unique legal metadata | Yes | noindex/follow | Breadcrumb | No | Practical privacy notice. |
| `/cookies` | Unique legal metadata | Yes | noindex/follow | Breadcrumb | No | Practical cookie notice. |
| `/terms` | Unique legal metadata | Yes | noindex/follow | Breadcrumb | No | Site terms only. |

## Closure Checks

- `buildMetadata()` sets title, description, canonical, Open Graph, and Twitter card metadata.
- `NOINDEX_STATIC_ROUTES` excludes legal pages from sitemap.
- `app/sitemap.ts` is dynamic and receives only `getPublicArticles()`, so scheduled future articles are excluded until `publishAt`.
- `app/robots.ts` points at `${siteUrl}/sitemap.xml`.
- No speculative schema claims were added in this pass.

## Local Production Smoke Result

Production-mode local server on `http://localhost:3100`:

- Sampled routes returned expected statuses: homepage, services, all primary footer services, agency/developer service pages, case studies, contact, articles, quiz, legal pages, sitemap, and robots.
- HTML routes sampled had titles, meta descriptions, canonical URLs, and JSON-LD where appropriate.
- `/robots.txt` returned `text/plain`.
- `/sitemap.xml` returned `application/xml`.
- `/articles/how-to-hire-shopify-hydrogen-developer` returned `404` before its May 8, 2026 publish date and was absent from sitemap.
- Header did not show `Articles` while there were no public evergreen articles.
