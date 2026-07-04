import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
  title: "Shopify Storefront MCP, UCP, and AI-Readable Hydrogen Stores",
  slug: "shopify-storefront-mcp-ucp-ai-readiness",
  description:
    "An evergreen AI commerce readiness guide for Shopify merchants focused on product data, SSR content, schema, and Storefront MCP.",
  category: "AI Commerce",
  status: "published",
  publishAt: PUBLISH_DATE,
  updatedAt: PUBLISH_DATE,
  author: OWNER.name,
  metaTitle: "Shopify Storefront MCP and UCP | Hydrogen AI Readiness",
  metaDescription:
    "Prepare a Shopify Hydrogen store for AI shopping agents with Storefront MCP, UCP, product data quality, SSR content, schema, and policies.",
  h1: "Shopify Storefront MCP, UCP, and AI-readable Hydrogen stores",
  intro: [
    "AI commerce is useful only when product data, policies, variant state, and checkout paths are clear enough for an agent to act without guessing.",
    "For Hydrogen stores, the practical readiness work is not hype. It is server-rendered product content, structured product state, clean catalog data, policy clarity, and store-scoped shopping surfaces.",
  ],
  sections: [
    {
      title: "What Storefront MCP changes",
      body: [
        "Shopify's Storefront MCP surfaces store-scoped catalog search, product detail, cart, checkout, and policy tasks for agents. That makes a merchant's product data and policy clarity more important, not less.",
      ],
    },
    {
      title: "UCP is a protocol surface, not an SEO shortcut",
      bullets: [
        "Good product titles, variants, inventory state, and policies still matter.",
        "Structured data should match visible product state.",
        "Important product copy should render in initial HTML.",
        "Checkout handoff should remain merchant-controlled and testable.",
      ],
    },
    {
      title: "Hydrogen readiness checklist",
      bullets: [
        "SSR product descriptions, variant options, price, availability, and policy cues.",
        "JSON-LD that reflects the selected product state.",
        "Consistent canonical URLs and internal links for product and collection pages.",
        "Machine-readable return, shipping, and support policies.",
        "A clean product feed and catalog taxonomy.",
      ],
    },
    {
      title: "Where merchants should avoid hype",
      body: [
        "Do not build an AI shopping agent before the store can answer basic product questions reliably. Fix product data, schema, and policy clarity first.",
      ],
    },
    {
      title: "A practical first scope",
      ordered: [
        "Audit product data quality.",
        "Audit initial HTML and structured data.",
        "Check policy visibility.",
        "Review Storefront MCP and UCP readiness.",
        "Decide whether an agent experience is actually useful for the catalog.",
      ],
    },
  ],
  conclusion:
    "The best AI commerce work starts with boring product-data discipline. Hydrogen is useful when it makes that data clear to shoppers, crawlers, and agent workflows.",
  links: [
    { href: "/news-on-shopify-hydrogen", label: "Official Hydrogen update notes" },
    { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO" },
    { href: "/shopify-hydrogen-issues#seo", label: "SEO issue library" },
    { href: "/contact", label: "Request AI readiness audit" },
  ],
  sources: [
    {
      href: "https://shopify.dev/docs/agents/catalog/storefront-catalog",
      label: "Shopify: Storefront Catalog MCP",
      note: "Official source for store-scoped catalog discovery via UCP.",
      external: true,
    },
    {
      href: "https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront",
      label: "Shopify: Storefront MCP server",
      note: "Official source for catalog, cart, checkout, and policy agent tasks.",
      external: true,
    },
    {
      href: "https://shopify.dev/docs/agents",
      label: "Shopify: Agentic commerce",
      note: "Official source for UCP and merchant-scoped agentic commerce context.",
      external: true,
    },
  ],
} as const satisfies Article;

export const refresh = {
  summary: [
    "AI commerce readiness starts with boring storefront quality: clean product data, crawlable SSR content, consistent schema, clear policies, reliable availability, and pages that answer buying questions without depending on client-only widgets.",
    "Storefront MCP and Universal Cart Protocol point toward agent-mediated shopping, but merchants should avoid hype-led rebuilds. The durable work is making the product catalog, page structure, and commerce actions understandable to search engines, LLMs, and future shopping agents.",
  ],
  takeaways: [
    {
      label: "Best work",
      value:
        "Improve product data, structured content, schema, policy clarity, and SSR before chasing agent-commerce experiments.",
    },
    {
      label: "Risk",
      value:
        "AI agents cannot compensate for weak titles, vague descriptions, missing variants, thin PDPs, or inconsistent availability data.",
    },
    {
      label: "Position",
      value:
        "Treat AI readiness as storefront quality and data governance, not as a separate novelty project.",
    },
  ],
  sections: [
    {
      title: "What AI-readable commerce actually needs",
      bullets: [
        "Product titles, variants, options, materials, sizes, availability, pricing context, and policy information are explicit.",
        "Important buying guidance appears in rendered HTML, not only behind tabs, personalization, or client-only components.",
        "JSON-LD matches visible product state and does not invent unavailable offers or stale prices.",
        "Internal links help crawlers and agents understand category, product, collection, and buying-guide relationships.",
      ],
    },
    {
      title: "Where Storefront MCP and UCP fit",
      body: [
        "Storefront MCP gives developers a way to expose storefront capabilities to AI agents in a Shopify-aligned way. UCP points at cart and checkout portability for agentic shopping. For merchants, the practical takeaway is simpler: the store needs dependable product data and safe commerce actions before agents are useful.",
        "A thin PDP with inconsistent product facts will still be thin when an AI system reads it. The first readiness pass should fix the underlying catalog and page quality before adding another interface on top.",
      ],
    },
    {
      title: "AI readiness audit items",
      ordered: [
        "Check PDP HTML for product facts, buying guidance, policy links, and crawlable content.",
        "Check schema against visible price, availability, variant, brand, image, and breadcrumb state.",
        "Check collection pages for meaningful category copy, filters, product links, and pagination.",
        "Check llms.txt, sitemap, robots, and internal links for discoverability.",
        "Check whether cart and checkout actions can be represented safely for future agent flows.",
      ],
    },
    {
      title: "A merchant-friendly scope",
      body: [
        "Package the work as product-data cleanup, SSR and schema validation, policy clarity, and route-level discoverability. That keeps the project tied to current SEO and conversion value while preparing the storefront for AI shopping surfaces that mature over time.",
      ],
    },
  ],
  faq: [
    {
      question: "Should merchants rebuild for AI shopping agents now?",
      answer:
        "Usually no. Most merchants get more value by improving product data, rendered content, structured data, policies, sitemap, llms.txt, and checkout reliability. Those improvements help today and also prepare the store for agent-mediated shopping.",
    },
    {
      question: "What makes a product page AI-readable?",
      answer:
        "A useful page has clear product facts, variant information, buying guidance, policy links, product availability, structured data that matches the page, and crawlable HTML that does not depend on client-only rendering.",
    },
    {
      question: "How does Hydrogen help AI readiness?",
      answer:
        "Hydrogen gives teams control over SSR, route structure, data loading, schema, and product-page composition. That control helps when the implementation uses it to make commerce data explicit and consistent.",
    },
  ],
} satisfies ArticleQualityRefresh;
