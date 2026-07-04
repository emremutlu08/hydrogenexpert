import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
  title: "Shopify Hydrogen Search, Filters, and Product Discovery Architecture",
  slug: "shopify-hydrogen-search-filters-product-discovery",
  description:
    "A product discovery guide for Hydrogen stores covering search, collection filters, Algolia, faceted navigation, merchandising, and SEO risk.",
  category: "Product Discovery",
  status: "published",
  publishAt: PUBLISH_DATE,
  updatedAt: PUBLISH_DATE,
  author: OWNER.name,
  metaTitle: "Shopify Hydrogen Search and Filters | Product Discovery Guide",
  metaDescription:
    "Plan Shopify Hydrogen search, collection filters, faceted navigation, Algolia, merchandising, and SEO-safe product discovery for large catalogs.",
  h1: "Shopify Hydrogen search, filters, and product discovery architecture",
  intro: [
    "Large-catalog Hydrogen work succeeds or fails on product discovery. Search, collection filters, sort rules, recommendations, merchandising, and SEO cannot be treated as separate widgets.",
    "The right architecture depends on catalog size, filter complexity, search tolerance, merchandiser control, and whether filtered views should be crawlable or purely shopper-facing.",
  ],
  sections: [
    {
      title: "Start with shopper intent",
      bullets: [
        "Search handles messy language, model names, product attributes, and misspellings.",
        "Filters narrow structured attributes such as size, color, vendor, material, price, or availability.",
        "Collections carry merchandising and SEO intent.",
      ],
    },
    {
      title: "Shopify-native filters still need frontend work",
      body: [
        "Shopify Search and Discovery can define filter behavior, but a Hydrogen storefront still needs route, UI, query, state, and pagination behavior implemented correctly.",
      ],
    },
    {
      title: "When Algolia or a search platform makes sense",
      bullets: [
        "The catalog needs strong typo tolerance, synonyms, ranking control, personalization, or analytics.",
        "The team wants instant search, autocomplete, and richer merchandising controls.",
        "The budget supports another service and integration surface.",
      ],
    },
    {
      title: "Faceted SEO risk",
      bullets: [
        "Not every filtered URL should be indexable.",
        "Important filtered demand may deserve real collection pages instead.",
        "Canonical, robots, and internal links must match the intent.",
        "Infinite scroll should not hide important products from crawlers or shoppers.",
      ],
    },
    {
      title: "Architecture checklist",
      ordered: [
        "List product attributes and filter sources.",
        "Choose native filtering, search platform, or hybrid approach.",
        "Define indexable vs non-indexable filtered states.",
        "Test pagination, empty states, and availability.",
        "Track search and filter behavior after launch.",
      ],
    },
  ],
  conclusion:
    "Product discovery should be scoped before the build estimate. A pretty collection grid is not enough for a large catalog.",
  links: [
    { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large catalog Hydrogen guide" },
    { href: "/blog/shopify-hydrogen-collection-out-of-stock-products-hidden", label: "Collection filtering production note" },
    { href: "/shopify-hydrogen-issues#collections", label: "Collection issue library" },
    { href: "/contact", label: "Request product discovery review" },
  ],
  sources: [
    {
      href: "https://www.algolia.com/search-solutions/shopify/hydrogen",
      label: "Algolia: Shopify Hydrogen search",
      note: "English source used for headless search and filter integration context.",
      external: true,
    },
    {
      href: "https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-filters",
      label: "Shopify Help: Search and Discovery filters",
      note: "Official source for filter behavior and limits.",
      external: true,
    },
    {
      href: "https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter",
      label: "Shopify Storefront API: ProductFilter",
      note: "Official source for Storefront API filtering constraints.",
      external: true,
    },
  ],
} as const satisfies Article;

export const refresh = {
  summary: [
    "Search and filtering in Hydrogen is a product-discovery architecture decision. Large catalogs need reliable indexing, crawlable collection routes, useful filters, merchandising rules, analytics, and performance budgets that survive real shopper behavior.",
    "Algolia or another search platform can help, but it does not decide the architecture by itself. The team still needs to decide which data is indexed, which filters are SEO-safe, which pages are crawlable, and how product discovery is measured.",
  ],
  takeaways: [
    {
      label: "Best fit",
      value:
        "Use custom discovery architecture when default collection behavior cannot support catalog size, filter complexity, merchandising, or search relevance.",
    },
    {
      label: "SEO risk",
      value:
        "Faceted URLs can create crawl waste and duplicates unless canonical, noindex, internal linking, and sitemap rules are intentional.",
    },
    {
      label: "Measurement",
      value:
        "Track search terms, zero-result queries, filter usage, sort changes, collection exits, and add-to-cart after discovery interactions.",
    },
  ],
  sections: [
    {
      title: "Design discovery around shopper decisions",
      body: [
        "Filters should reflect how buyers narrow choices, not only how product data happens to be stored. Size, fit, material, compatibility, use case, availability, price, and collection intent may matter more than a generic vendor or tag list.",
        "A Hydrogen implementation gives the team freedom to model discovery well. That freedom should be used to make product finding faster, not to expose every possible facet.",
      ],
    },
    {
      title: "Search platform responsibilities",
      bullets: [
        "Index the product fields shoppers actually search and compare.",
        "Keep inventory, price, variants, and merchandising state fresh enough for the buying path.",
        "Handle synonyms, redirects, no-result fallbacks, and promoted results intentionally.",
        "Expose analytics that help merchants improve product names, tags, content, and collections.",
      ],
    },
    {
      title: "Faceted SEO rules",
      body: [
        "Some filtered pages deserve crawlable URLs because they match real search demand. Many do not. The architecture should decide which filter combinations are indexable, which canonicalize to a parent, and which remain shopper-only interactions.",
        "This is especially important for large catalogs. Without rules, Hydrogen can generate fast pages that still create duplicate, thin, or low-value crawl surfaces.",
      ],
    },
    {
      title: "Discovery QA checklist",
      ordered: [
        "Search returns relevant products for common, long-tail, typo, and zero-result queries.",
        "Filters update results, URL state, accessibility labels, and analytics correctly.",
        "Crawlable collection pages render headings, copy, product links, and pagination in HTML.",
        "Canonical and noindex behavior matches the indexation plan.",
        "Sort, pagination, and cache behavior stay stable across desktop and mobile.",
      ],
    },
  ],
  faq: [
    {
      question: "Does Hydrogen include search and filters out of the box?",
      answer:
        "Hydrogen gives developers the storefront foundation, but product discovery still needs architecture. The team must decide data source, index strategy, filter model, URL behavior, SEO rules, UI state, and analytics.",
    },
    {
      question: "When should a store use Algolia or another search platform?",
      answer:
        "A search platform becomes useful when catalog size, typo tolerance, synonyms, merchandising, ranking, analytics, or speed requirements exceed what the current Shopify collection and search setup can support.",
    },
    {
      question: "Should filtered collection pages be indexed?",
      answer:
        "Only selected filtered pages should be indexable. Choose combinations with real search demand and unique value. Canonicalize, noindex, or keep other combinations as shopper-only states to avoid crawl waste.",
    },
  ],
} satisfies ArticleQualityRefresh;
