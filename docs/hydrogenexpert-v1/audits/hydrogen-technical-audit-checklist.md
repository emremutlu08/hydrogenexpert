# Hydrogen Technical Audit Checklist

Status values: Pass, Risk, Needs review, Not applicable

| Item | Why it matters | How to check | Status | Evidence | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Routes and canonical URLs | Route continuity protects SEO and UX. | Crawl public routes, compare canonical tags and intended URLs. |  |  |  |
| Metadata and descriptions | Search and social snippets need unique page intent. | Inspect title, description, OG, Twitter metadata. |  |  |  |
| JSON-LD | Structured data helps crawlers understand entity, service, article, and proof context. | Inspect rendered JSON-LD and validate against conservative claims. |  |  |  |
| Sitemap and robots | Discovery files must expose only indexable public URLs. | Fetch `/sitemap.xml` and `/robots.txt`. |  |  |  |
| Product state and variant URLs | Variant/state handling affects sharing, indexing, and cart accuracy. | Test PDP variant changes and URL/state persistence. |  |  |  |
| Initial HTML / SSR content | Important commerce content should not be client-only. | View source or fetch HTML for PDP/collection content. |  |  |  |
| Storefront API queries | Query shape affects speed, cacheability, and maintenance. | Review route loaders and GraphQL selections. |  |  |  |
| Data loading | Slow or duplicated loading hurts UX and reliability. | Trace route loaders, waterfalls, and client fetches. |  |  |  |
| Caching policy | Hydrogen/Oxygen caching choices affect freshness and performance. | Review cache headers, route policies, and data dependencies. |  |  |  |
| Customer/account data safety | Private customer data must not leak into cached public HTML. | Review account/customer routes and cache boundaries. |  |  |  |
| Cart and checkout handoff | Revenue depends on reliable cart state and Shopify checkout transition. | Test add-to-cart, update, remove, discount, checkout. |  |  |  |
| Analytics and consent | Measurement should survive launch without collecting unnecessary PII. | Test page views, CTA clicks, form events, consent behavior. |  |  |  |
| App integrations | Theme apps may not transfer automatically to Hydrogen. | List PDP/cart/search/reviews/subscription apps and integration paths. |  |  |  |
| Image/video performance | Media often dominates storefront performance. | Check dimensions, formats, lazy/eager loading, LCP image. |  |  |  |
| Core Web Vitals | Performance affects shoppers and SEO. | Run Lighthouse/PageSpeed and real-user monitoring where available. |  |  |  |
| Accessibility basics | Keyboard, labels, alt text, and contrast protect usability. | Run keyboard pass and automated accessibility checks. |  |  |  |
| Launch QA | Migration and release errors are expensive after go-live. | Run route smoke, forms, checkout, redirects, sitemap, robots. |  |  |  |
| Post-launch monitoring | Issues surface after real traffic and content. | Check analytics, Search Console, logs, Speed Insights, lead storage. |  |  |  |
