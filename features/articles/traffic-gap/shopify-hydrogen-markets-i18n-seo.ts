import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
  title: "Shopify Hydrogen Markets and i18n SEO Guide",
  slug: "shopify-hydrogen-markets-i18n-seo",
  description:
    "Plan Hydrogen Markets, international URLs, locale routing, currency display, hreflang, and multi-region SEO without creating duplicate risk.",
  category: "International",
  status: "published",
  publishAt: PUBLISH_DATE,
  updatedAt: PUBLISH_DATE,
  author: OWNER.name,
  metaTitle: "Shopify Hydrogen Markets and i18n SEO Guide",
  metaDescription:
    "Plan Shopify Hydrogen Markets and i18n SEO: locale URLs, currency, hreflang, cache behavior, canonical rules, and multi-region QA.",
  h1: "Shopify Hydrogen Markets and i18n SEO guide",
  intro: [
    "International Hydrogen work needs more than a language switcher. Locale routing, market context, currency, product availability, translated content, canonical URLs, and hreflang must agree.",
    "The safest approach is to define the market architecture before pages are built, because retrofitting locale behavior after launch usually creates duplicate URLs and inconsistent product state.",
  ],
  sections: [
    {
      title: "Decide the URL model first",
      bullets: [
        "Subfolders such as /en-us or /de can keep one domain easier to manage.",
        "Country domains can make sense for established regional operations.",
        "Query-string locale switching is usually weak for SEO and internal linking.",
      ],
    },
    {
      title: "Markets affect data, not only text",
      body: [
        "A market can affect currency, pricing context, product availability, translations, and buyer expectations. Hydrogen route data should load the correct market context before rendering SEO-critical content.",
      ],
    },
    {
      title: "Hreflang and canonicals must be consistent",
      bullets: [
        "Each localized page should identify its real alternates.",
        "Canonical URLs should not collapse distinct regional pages into one page by accident.",
        "Sitemaps can include alternate language entries when the architecture supports them.",
      ],
    },
    {
      title: "Common Hydrogen i18n risks",
      bullets: [
        "Translated UI but untranslated product content.",
        "Currency switcher changes display without market-aware cart behavior.",
        "Cache keys ignore locale or country.",
        "Search and collection filters behave differently by region.",
      ],
    },
    {
      title: "Launch QA",
      ordered: [
        "Test every supported locale URL.",
        "Check product, collection, cart, and checkout context.",
        "Validate canonical and hreflang output.",
        "Confirm sitemap and robots behavior.",
        "Monitor Search Console by locale after launch.",
      ],
    },
  ],
  conclusion:
    "Hydrogen Markets work should start with URL, market, and content ownership. The translation layer is only one part of international SEO.",
  links: [
    { href: "/liquid-to-hydrogen-migration", label: "Migration planning" },
    { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO" },
    { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large catalog guide" },
    { href: "/contact", label: "Request Markets/i18n review" },
  ],
  sources: [
    {
      href: "https://shopify.dev/docs/storefronts/headless/hydrogen/markets",
      label: "Shopify: Internationalization with Shopify Markets",
      note: "Official source for Hydrogen Markets implementation grounding.",
      external: true,
    },
    {
      href: "https://developers.google.com/search/docs/specialty/international/localized-versions",
      label: "Google: Localized versions of your pages",
      note: "Official source for hreflang and localized page signals.",
      external: true,
    },
    {
      href: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap",
      label: "Next.js: Sitemap file convention",
      note: "Official source for localized sitemap output in this Next.js site.",
      external: true,
    },
  ],
} as const satisfies Article;

export const refresh = {
  summary: [
    "International Hydrogen work is a routing, pricing, content, and cache problem at the same time. Markets, locale URLs, currency, hreflang, product availability, translated content, and canonical behavior must agree across the rendered page.",
    "The failure mode is subtle: the page loads, but crawlers see mixed-language metadata, wrong currency, stale market data, duplicated canonicals, or hreflang that points to routes with different commercial state.",
  ],
  takeaways: [
    {
      label: "Core decision",
      value:
        "Choose the locale URL model before building templates, because it affects routing, canonicals, hreflang, sitemap, caching, and analytics.",
    },
    {
      label: "Commerce risk",
      value:
        "Language, market, currency, availability, and price must be tested together. SEO correctness and buyer trust depend on the same state.",
    },
    {
      label: "Launch gate",
      value:
        "Verify rendered HTML, hreflang pairs, sitemap entries, market context, and checkout handoff for each launch locale.",
    },
  ],
  sections: [
    {
      title: "Markets and i18n need one source of truth",
      body: [
        "A Hydrogen storefront can render localized routes, but the team must decide how locale, market, currency, language, and availability are resolved. If those rules live in scattered components, the storefront becomes hard to cache and harder to debug.",
        "The source of truth should be clear enough that a developer can explain what happens when a shopper lands on a country-specific URL, changes language, changes currency, or opens a product unavailable in that market.",
      ],
    },
    {
      title: "International SEO checks",
      bullets: [
        "Locale URLs are stable and match the sitemap.",
        "Canonical URLs do not collapse distinct localized pages that should be indexed separately.",
        "Hreflang references return indexable, equivalent pages.",
        "Titles, descriptions, headings, product copy, schema, and open graph content match the page language.",
        "Currency, availability, shipping, duties, and policy copy match the market context.",
      ],
    },
    {
      title: "Caching and personalization boundaries",
      body: [
        "Market and locale data often touches caches. A cache key that ignores market state can leak the wrong currency or availability. A page that over-personalizes by geolocation can make crawler behavior unpredictable.",
        "Prefer explicit route and market rules over hidden browser guesses for SEO-critical pages. Let shoppers change region, but keep indexable URLs stable and understandable.",
      ],
    },
    {
      title: "Launch sequence for a new market",
      ordered: [
        "Define locale URL structure and market resolution rules.",
        "Map translated content, product availability, pricing, currency, and policy differences.",
        "Validate canonical, hreflang, sitemap, schema, and internal links.",
        "Run browser QA and checkout handoff for each market.",
        "Monitor indexing, crawl, and conversion signals after launch.",
      ],
    },
  ],
  faq: [
    {
      question: "Should Hydrogen use subfolders, subdomains, or country domains for i18n?",
      answer:
        "There is no universal answer. The right model depends on brand, markets, operational ownership, SEO history, and technical complexity. The important rule is consistency across routing, canonicals, hreflang, sitemap, and market context.",
    },
    {
      question: "What breaks international SEO in Hydrogen?",
      answer:
        "Common issues include mixed-language metadata, wrong canonicals, incomplete hreflang, missing localized sitemap URLs, client-only locale switching, stale cache keys, and product schema that does not match local price or availability.",
    },
    {
      question: "How should Markets be tested before launch?",
      answer:
        "Test each locale and market as a full shopper path: landing page, collection, product, search, filters, cart, checkout handoff, currency, policies, structured data, sitemap, and analytics.",
    },
  ],
} satisfies ArticleQualityRefresh;
