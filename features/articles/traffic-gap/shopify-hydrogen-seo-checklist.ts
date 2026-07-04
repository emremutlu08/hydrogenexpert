import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
  title: "Shopify Hydrogen SEO Checklist: JSON-LD, Sitemap, Robots, and Oxygen",
  slug: "shopify-hydrogen-seo-checklist",
  description:
    "A Hydrogen SEO implementation checklist covering rendered content, metadata, canonical URLs, JSON-LD, sitemap, robots, and Oxygen launch QA.",
  category: "SEO",
  status: "published",
  publishAt: PUBLISH_DATE,
  updatedAt: PUBLISH_DATE,
  author: OWNER.name,
  metaTitle: "Shopify Hydrogen SEO Checklist | JSON-LD, Sitemap, Robots",
  metaDescription:
    "Use this Shopify Hydrogen SEO checklist for SSR content, metadata, canonical URLs, JSON-LD, sitemap.xml, robots.txt, Oxygen, and launch QA.",
  h1: "Shopify Hydrogen SEO checklist: JSON-LD, sitemap, robots, and Oxygen",
  intro: [
    "Hydrogen SEO is not one tag. It is the agreement between rendered content, metadata, route shape, structured data, sitemap, robots behavior, internal links, and launch QA.",
    "This checklist supports the main Hydrogen SEO service page with the implementation details a technical stakeholder should verify before and after launch.",
  ],
  sections: [
    {
      title: "Rendered content",
      bullets: [
        "Product descriptions and buying context appear in initial HTML when they matter.",
        "Collection pages include crawlable headings, copy, product links, and pagination paths.",
        "Client-only widgets do not hide the core shopping or SEO content.",
      ],
    },
    {
      title: "Metadata and canonical URLs",
      bullets: [
        "Every indexable route has a unique title and meta description.",
        "Canonical URLs use the final production domain.",
        "Variant, filter, and campaign URLs have intentional canonical rules.",
        "Noindex is used only where it is actually intended.",
      ],
    },
    {
      title: "JSON-LD",
      bullets: [
        "Product structured data matches visible title, price, availability, variant, and image state.",
        "Article and guide pages expose Article schema.",
        "Breadcrumb schema matches the visible navigation path.",
        "Organization and Person facts stay consistent with approved proof.",
      ],
    },
    {
      title: "Sitemap and robots",
      bullets: [
        "Sitemap includes only public canonical URLs.",
        "Robots behavior is checked on production, not only preview.",
        "Old Liquid or legacy headless routes redirect cleanly.",
        "Important new pages appear in internal links and llms-full context.",
      ],
    },
    {
      title: "Post-launch checks",
      ordered: [
        "Fetch production HTML.",
        "Open the page in a browser.",
        "Check sitemap and robots.",
        "Validate structured data.",
        "Monitor Search Console for crawl, canonical, and indexing signals.",
      ],
    },
  ],
  conclusion:
    "Hydrogen SEO should be verified as a production system. The code can look correct while live HTML, sitemap, robots, or structured data still drift.",
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
      note: "Official source for Hydrogen metadata, sitemap, robots, and JSON-LD claims.",
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
  ],
} as const satisfies Article;

export const refresh = {
  summary: [
    "Hydrogen SEO is production QA. The page must render useful HTML, expose accurate metadata and schema, use intentional canonical and sitemap rules, preserve internal links, and behave correctly on the live domain after deployment.",
    "The checklist should be used before launch, during migration, and after production cutover. Source inspection is not enough; fetch the live HTML, open the route in a browser, validate structured data, and monitor Search Console signals after the release.",
  ],
  takeaways: [
    {
      label: "Priority",
      value:
        "Protect rendered product and collection content, canonicals, redirects, structured data, sitemap, robots, and internal links before polishing secondary SEO details.",
    },
    {
      label: "Common miss",
      value:
        "A Hydrogen page can look correct in the browser while HTML, schema, canonical, or sitemap output is wrong for crawlers.",
    },
    {
      label: "Audit output",
      value:
        "Use route-level findings with evidence, severity, owner, expected fix, and whether the issue blocks launch.",
    },
  ],
  sections: [
    {
      title: "Rendered HTML is the first checkpoint",
      body: [
        "Product titles, product descriptions, buying guidance, collection copy, breadcrumbs, product links, and pagination should be present in the HTML when they carry search value. Client-only enhancements are fine, but they should not be the only place important commerce content exists.",
        "This is where many Hydrogen SEO issues become visible. A beautiful PDP can still be weak if crawlers receive thin HTML and most useful content appears only after hydration.",
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
      title: "Migration-specific SEO checks",
      ordered: [
        "Map old URLs to new URLs and test redirects on production.",
        "Confirm canonical URLs use the final production domain.",
        "Verify sitemap includes only public canonical URLs.",
        "Check robots.txt after launch, not only preview.",
        "Compare Search Console coverage, canonical selection, crawl errors, and indexed URLs after cutover.",
      ],
    },
    {
      title: "AI and LLM discoverability",
      body: [
        "Hydrogen SEO now overlaps with AI discoverability. Clear headings, self-contained answer blocks, source-backed claims, schema, sitemap, and llms.txt help crawlers and answer engines understand what the page can be cited for.",
        "That does not mean writing for bots first. It means making the page precise enough that a human buyer, a search engine, and an AI answer system all understand the same facts.",
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
      question: "What is the first thing to check on a Hydrogen SEO audit?",
      answer:
        "Fetch the rendered HTML and compare it with what users see in the browser. If important product, collection, or guide content is missing from HTML, fix that before deeper optimization.",
    },
    {
      question: "How should SEO be validated after launch?",
      answer:
        "Check live HTML, browser behavior, structured data, sitemap, robots.txt, redirects, canonical URLs, internal links, analytics, and Search Console signals. Keep a post-launch window for crawl and indexing follow-up.",
    },
  ],
} satisfies ArticleQualityRefresh;
