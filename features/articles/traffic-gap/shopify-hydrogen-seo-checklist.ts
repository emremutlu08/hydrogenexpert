import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
  title: "Shopify Hydrogen SEO Checklist: SSR, JSON-LD, Sitemap, Robots",
  slug: "shopify-hydrogen-seo-checklist",
  description:
    "A Hydrogen SEO implementation checklist covering live HTML, metadata, canonical URLs, JSON-LD, sitemap, robots, internal links, and Search Console follow-up.",
  category: "SEO",
  status: "published",
  publishAt: PUBLISH_DATE,
  updatedAt: PUBLISH_DATE,
  author: OWNER.name,
  metaTitle: "Shopify Hydrogen SEO Checklist | SSR, JSON-LD, Sitemap",
  metaDescription:
    "Use this Shopify Hydrogen SEO checklist for live HTML, metadata, canonical URLs, JSON-LD, sitemap.xml, robots.txt, llms-full, and launch QA.",
  h1: "Shopify Hydrogen SEO checklist: SSR, JSON-LD, sitemap, robots",
  intro: [
    "Hydrogen SEO is implementation ownership, not a platform toggle. The useful evidence is what the production route returns: live HTML, route metadata, canonical tags, structured data, sitemap output, robots behavior, redirects, internal links, and crawl follow-up.",
    "This checklist supports the main Hydrogen SEO service page with the implementation details a technical stakeholder should verify before and after launch.",
    "Source note: Shopify's Hydrogen SEO docs, Google structured data docs, and Google sitemap docs are treated here as the official baseline. Operational recommendations are source-checked implementation judgment, not a promise of rankings or indexing.",
  ],
  sections: [
    {
      title: "Live HTML and SSR",
      body: [
        "Start with the production response, not the component tree. Confirm the route returns HTTP 200, fetch the HTML, and compare it with what shoppers see after the page hydrates.",
        "Important product titles, product descriptions, buying context, collection copy, product links, breadcrumbs, and pagination paths should not exist only inside client-only widgets when they carry search value.",
      ],
      bullets: [
        "Product descriptions and buying guidance appear in initial HTML when they matter for the route.",
        "Collection pages expose crawlable headings, copy, product links, filters that do not trap crawlers, and pagination or load-more paths with a clear fallback.",
        "Tabs, personalization, reviews, recommendations, and app widgets enhance the page without becoming the only source of primary commerce content.",
      ],
    },
    {
      title: "Metadata, canonical URLs, and route state",
      bullets: [
        "Every indexable route has a route-specific title and meta description that match the page's actual intent.",
        "Canonical URLs use the final production domain and intentional handling for variants, filters, market paths, and campaign parameters.",
        "Do not assume Hydrogen will choose the correct canonical for every custom route. Treat canonical behavior as route logic you own and inspect.",
        "Noindex and robots meta directives are present only where they are intentional, documented, and checked on production.",
      ],
    },
    {
      title: "JSON-LD",
      body: [
        "Google's structured data guidance rewards accuracy over volume. Add schema only when the visible page supports the properties you publish.",
      ],
      bullets: [
        "Product structured data matches visible title, price, availability, variant, and image state.",
        "Article and guide pages expose Article schema.",
        "Breadcrumb schema matches the visible navigation path.",
        "FAQ schema is used only for visible FAQ content.",
        "Organization and Person facts stay consistent with approved public proof.",
      ],
    },
    {
      title: "Sitemap and robots",
      body: [
        "Shopify documents Hydrogen sitemap and robots route patterns, but that does not remove implementation responsibility. Treat sitemap.xml, robots.txt, cache policy, canonical route membership, and Oxygen production behavior as outputs to inspect.",
      ],
      bullets: [
        "Sitemap includes only public canonical URLs that should be discoverable.",
        "Robots behavior is checked on the final production domain, not only in a preview environment.",
        "If the storefront runs on Oxygen, robots.txt is verified on the public production environment with the custom domain attached.",
        "Old Liquid or legacy headless routes redirect cleanly before the sitemap points crawlers at the new URLs.",
        "Google treats sitemaps as discovery support, not a guarantee that every URL will be crawled or indexed.",
      ],
    },
    {
      title: "Practical Hydrogen SEO checklist",
      ordered: [
        "Confirm each priority route returns HTTP 200 on the final production URL.",
        "Fetch production HTML and verify important product, collection, and guide content is present before client-side interaction.",
        "Inspect title, meta description, canonical URL, robots meta directives, Open Graph tags, and route-specific metadata.",
        "Validate JSON-LD against the visible page state: product, breadcrumb, article, FAQ, Organization, and Person data should not invent facts.",
        "Open sitemap.xml and confirm public canonical URLs are included while preview, filtered, duplicate, and noindex routes are excluded.",
        "Open robots.txt on production and confirm crawl policy matches the launch plan.",
        "Test redirects from old Liquid or legacy headless URLs before removing the old route map from the migration tracker.",
        "Check internal links to the Hydrogen SEO service page, the SEO migration checklist template, the product SSR note, and the contact path.",
        "Confirm llms-full lists the route as this site's AI-readable discovery support, without treating llms.txt as an official ranking factor.",
        "Monitor Search Console after launch for crawl errors, canonical selection, indexing status, sitemap processing, and affected query/page changes.",
      ],
    },
  ],
  conclusion:
    "Hydrogen SEO should be verified as a production system. Shopify and Google docs describe the surfaces that matter, but the evidence is live HTML, route metadata, structured data, sitemap, robots, redirects, internal links, and Search Console follow-up.",
  links: [
    { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO service page" },
    { href: "/shopify-hydrogen-templates#seo-migration-checklist", label: "SEO migration checklist template" },
    { href: "/blog/shopify-hydrogen-product-description-ssr-seo", label: "Product content SSR note" },
    { href: "/contact", label: "Request SEO audit" },
  ],
  sources: [
    {
      href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
      label: "Shopify: Search Engine Optimization for Hydrogen",
      note: "Official source checked for Hydrogen metadata, sitemap, robots, and Oxygen robots behavior.",
      external: true,
    },
    {
      href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      label: "Google: Structured data",
      note: "Official source for structured data guidance.",
      external: true,
    },
    {
      href: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
      label: "Google: Sitemaps overview",
      note: "Official source for sitemap discovery expectations.",
      external: true,
    },
    {
      href: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
      label: "Google: JavaScript SEO basics",
      note: "Official source for rendered HTML and JavaScript SEO verification checks.",
      external: true,
    },
  ],
} as const satisfies Article;

export const refresh = {
  updatedAt: "2026-07-09T10:00:00+03:00",
  summary: [
    "Hydrogen SEO is production QA. The page must render useful HTML, expose accurate metadata and schema, use intentional canonical and sitemap rules, preserve internal links, and behave correctly on the live domain after deployment.",
    "The checklist should be used before launch, during migration, and after production cutover. Source inspection is not enough; fetch the live HTML, open the route in a browser, validate structured data, inspect sitemap and robots output, and monitor Search Console signals after the release.",
  ],
  takeaways: [
    {
      label: "Source boundary",
      value:
        "Use Shopify and Google docs for platform and search-policy claims; use implementation evidence for what this specific storefront actually outputs.",
    },
    {
      label: "Common miss",
      value:
        "A Hydrogen page can look correct in the browser while HTML, schema, canonical, robots, or sitemap output is wrong for crawlers.",
    },
    {
      label: "Audit output",
      value:
        "Use route-level findings with evidence, severity, owner, expected fix, and whether the issue blocks launch.",
    },
  ],
  sections: [
    {
      title: "Source verification and claim safety",
      body: [
        "Keep official facts separate from operator judgment. It is fair to say Shopify documents Hydrogen SEO setup surfaces for metadata, sitemap.xml, and robots.txt. It is not fair to claim Hydrogen automatically solves canonical strategy, route migrations, product schema accuracy, or indexing.",
        "Use the official docs as the source boundary, then verify the actual storefront output. A claim is safer when it points to observable route behavior: a fetched HTML response, a canonical tag, a JSON-LD block, a sitemap entry, a robots rule, a redirect status, or a Search Console signal.",
      ],
    },
    {
      title: "Structured data must match the visible page",
      bullets: [
        "Product schema should match visible title, image, price, currency, availability, variant, and brand state.",
        "Breadcrumb schema should match the visible route hierarchy.",
        "Article, FAQ, Organization, and Person schema should be used only where the visible content supports it.",
        "Generated schema should not invent reviews, ratings, prices, offers, or business facts.",
      ],
    },
    {
      title: "Rendered HTML is the first checkpoint",
      body: [
        "Product titles, product descriptions, buying guidance, collection copy, breadcrumbs, product links, and pagination should be present in the HTML when they carry search value. Client-only enhancements are fine, but they should not be the only place important commerce content exists.",
        "This is where many Hydrogen SEO issues become visible. A polished PDP can still be weak if crawlers receive thin HTML and most useful content appears only after hydration.",
      ],
    },
    {
      title: "Migration-specific SEO checks",
      ordered: [
        "Map old URLs to new URLs and test redirects on production.",
        "Confirm canonical URLs use the final production domain.",
        "Verify sitemap includes only public canonical URLs.",
        "Check robots.txt after launch, not only preview.",
        "Confirm internal links point at the new canonical routes.",
        "Compare Search Console coverage, canonical selection, crawl errors, and indexed URLs after cutover.",
      ],
    },
    {
      title: "AI-readable discovery without ranking promises",
      body: [
        "This site uses llms.txt and llms-full.txt as AI-readable discovery files so systems that choose to read them can understand the site's public pages and scope. Treat that as a site convention, not an official Shopify or Google standard and not a guaranteed ranking factor.",
        "The useful overlap with AI discoverability is still practical SEO quality: clear headings, self-contained answer blocks, source-backed claims, accurate schema, working sitemaps, and internal links that describe the real relationship between pages.",
      ],
    },
    {
      title: "What to hand off after an audit",
      bullets: [
        "Route URL, status code, canonical URL, indexability, and sitemap membership.",
        "HTML evidence for missing or present product, collection, guide, breadcrumb, and pagination content.",
        "Structured-data findings with the visible field that supports or contradicts each property.",
        "Redirect findings for old Liquid, app, campaign, and legacy headless URLs.",
        "Search Console follow-up owner, timing, and the specific signals to watch after launch.",
      ],
    },
  ],
  faq: [
    {
      question: "Is Hydrogen bad for SEO?",
      answer:
        "No. Hydrogen can be strong for SEO when rendered content, metadata, canonicals, redirects, structured data, sitemap, robots, internal links, and performance are implemented and verified on production.",
    },
    {
      question: "Does Hydrogen automatically handle sitemap, robots, and canonicals?",
      answer:
        "No. Shopify documents Hydrogen sitemap and robots route patterns, and the base template may include them, but each storefront still needs route implementation, cache policy, canonical logic, robots behavior, and production verification.",
    },
    {
      question: "What is the first thing to check on a Hydrogen SEO audit?",
      answer:
        "Fetch the rendered HTML and compare it with what users see in the browser. If important product, collection, or guide content is missing from HTML, fix that before deeper optimization.",
    },
    {
      question: "Is llms.txt a ranking factor for Hydrogen SEO?",
      answer:
        "No. For this site, llms.txt and llms-full.txt are AI-readable discovery conventions. They can make public page coverage easier to understand for systems that read them, but they are not an official Google or Shopify SEO standard and they do not guarantee rankings.",
    },
    {
      question: "How should SEO be validated after launch?",
      answer:
        "Check live HTML, browser behavior, structured data, sitemap, robots.txt, redirects, canonical URLs, internal links, analytics, and Search Console signals. Keep a post-launch window for crawl, canonical, sitemap, and indexing follow-up.",
    },
  ],
} satisfies ArticleQualityRefresh;
