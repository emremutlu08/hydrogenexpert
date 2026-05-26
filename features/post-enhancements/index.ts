export interface PostFaqItem {
  question: string;
  answer: string;
}

export type PostHeroVisual =
  | {
      type: "none";
    }
  | {
      type: "code-card" | "brand-asset";
      src: string;
      alt: string;
      title: string;
      width?: number;
      height?: number;
      caption?: string;
    }
  | {
      type: "before-after-svg";
      title: string;
      beforeValue: string;
      afterValue: string;
      beforeLabel: string;
      afterLabel: string;
      beforeCaption: string;
      afterCaption: string;
    }
  | {
      type: "flow-diagram-svg";
      caption?: string;
      steps: Array<{
        label: string;
        body: string;
      }>;
    };

export interface PostReferenceLink {
  href: string;
  label: string;
  note: string;
}

interface PostEnhancement {
  heroVisual: PostHeroVisual;
  faq?: PostFaqItem[];
  closingPitch?: string;
  ogImage?: string;
  internalLinks?: PostReferenceLink[];
  externalLinks?: PostReferenceLink[];
}

const DEFAULT_INTERNAL_LINKS: PostReferenceLink[] = [
  {
    href: "/shopify-hydrogen-seo",
    label: "Shopify Hydrogen SEO guide",
    note: "Use this when product URL, canonical, JSON-LD, and crawl consistency questions need a broader framework.",
  },
  {
    href: "/shopify-hydrogen-cost",
    label: "Shopify Hydrogen cost",
    note: "Use this when the technical conversation needs a realistic budget range and timeline framing.",
  },
  {
    href: "/case-studies/eveshop-shopify-hydrogen",
    label: "Production case studies",
    note: "See how Hydrogen decisions played out on a production retail storefront with real operating constraints.",
  },
  {
    href: "/shopify-hydrogen-audit",
    label: "Shopify Hydrogen audit",
    note: "Use this when the storefront needs a focused SEO, performance, and migration-risk review.",
  },
  {
    href: "/hire-me",
    label: "Work with Emre",
    note: "The direct route if your store needs senior Hydrogen implementation with focused ownership.",
  },
  {
    href: "/should-i-use-it",
    label: "Should you use Hydrogen?",
    note: "A practical decision filter when the business case still needs checking.",
  },
];

export const POST_ENHANCEMENTS: Record<string, PostEnhancement> = {
  "shopify-hydrogen-vs-liquid": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-vs-liquid-cover.jpg",
      alt: "Technical comparison visual showing classic Shopify theme architecture beside a custom Hydrogen storefront system.",
      title: "Shopify Hydrogen vs Liquid technical comparison",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Is Shopify Hydrogen better than Liquid?",
        answer:
          "Not automatically. Hydrogen is better when custom UX, performance architecture, and feature velocity justify the operational cost. Liquid is usually better when a theme can still solve the business problem cleanly.",
      },
      {
        question: "When should a Shopify Plus brand stay on Liquid?",
        answer:
          "Stay on Liquid when the main issues are theme quality, app sprawl, content structure, or focused UX fixes that do not require a custom storefront application.",
      },
    ],
    internalLinks: [
      {
        href: "/when-not-to-use-hydrogen",
        label: "When not to use Hydrogen",
        note: "The clearest internal page for cases where Liquid is still the better move.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this before choosing between Liquid cleanup and Hydrogen migration.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "The commercial service path when the comparison points toward migration.",
      },
    ],
  },
  "shopify-hydrogen-nextjs": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-nextjs-cover.jpg",
      alt: "Technical storefront architecture visual comparing Hydrogen commerce modules with a general Next.js application structure.",
      title: "Shopify Hydrogen and Next.js architecture comparison",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Is Shopify Hydrogen the same thing as Next.js?",
        answer:
          "No. Hydrogen is Shopify's React framework for custom storefronts. Next.js is a general React framework. The right choice depends on Shopify integration needs, hosting, team preferences, and storefront architecture.",
      },
    ],
    internalLinks: [
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Shopify Hydrogen storefront",
        note: "Use this when the comparison leads to a Hydrogen build path.",
      },
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO guide",
        note: "Use this for crawl, metadata, canonical, and structured-data decisions in Hydrogen.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen",
        label: "Shopify Hydrogen documentation",
        note: "Official Shopify documentation for Hydrogen storefront development.",
      },
      {
        href: "https://nextjs.org/docs",
        label: "Next.js documentation",
        note: "Official Next.js documentation for the general React framework comparison point.",
      },
    ],
  },
  "liquid-to-hydrogen-migration-checklist": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/liquid-to-hydrogen-migration-checklist-cover.jpg",
      alt: "Ecommerce migration control visual with storefront routes, redirects, QA checkpoints, and Hydrogen module planning.",
      title: "Liquid to Hydrogen migration checklist visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "What should a Liquid to Hydrogen migration checklist include?",
        answer:
          "It should cover routes, redirects, canonical URLs, product and collection templates, analytics, app replacements, cart and checkout handoff, structured data, QA, and launch rollback planning.",
      },
    ],
    internalLinks: [
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration service",
        note: "The commercial landing page for brands ready to scope the migration.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this if the migration checklist exposes too many unresolved risks.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Shopify Hydrogen cost",
        note: "Use this to translate migration complexity into budget range.",
      },
    ],
  },
  "shopify-hydrogen-performance-checklist": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-performance-checklist-cover.jpg",
      alt: "Hydrogen performance diagnostics visual with product grids, cache layers, optimized media tiles, and request timing panels.",
      title: "Shopify Hydrogen performance checklist visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "What matters most in Shopify Hydrogen performance?",
        answer:
          "Start with server-rendered primary content, focused Storefront API queries, intentional caching, image loading, third-party script control, and mobile Core Web Vitals.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance optimization",
        note: "The service page for live storefront cleanup.",
      },
      {
        href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
        label: "Homepage performance case note",
        note: "A related production note about moving primary data back into SSR.",
      },
    ],
  },
  "shopify-hydrogen-hero-video-carousel-onended": {
    heroVisual: {
      type: "none",
    },
    faq: [
      {
        question: "Should a video carousel use the same timer as image slides?",
        answer:
          "Usually no. Image slides can use a fixed interval, but active video slides should advance from the video ended event so the full clip is visible before the carousel moves on.",
      },
      {
        question: "Why should inactive videos be ignored?",
        answer:
          "Inactive videos can still emit events during a carousel state change. The handler should verify that the event came from the active slide before it advances the carousel.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance optimization",
        note: "Use this when homepage media, scripts, and interaction timing need production cleanup.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Shopify Hydrogen storefront",
        note: "The service path for custom storefront UI patterns that need careful behavior and maintainability.",
      },
      {
        href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
        label: "Hydrogen homepage performance note",
        note: "A related production note about homepage behavior, initial rendering, and practical frontend tradeoffs.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/api/hydrogen/2025-05/components/media/video",
        label: "Shopify Hydrogen Video component",
        note: "Official Shopify reference for rendering Shopify video media in Hydrogen storefronts.",
      },
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event",
        label: "MDN HTMLMediaElement ended event",
        note: "Reference for the native media event that fires when playback reaches the end.",
      },
    ],
    closingPitch:
      "If your Hydrogen storefront has small media bugs like this, the useful work is not only patching one carousel. It is checking whether the component ownership, timers, and browser events still match the buying experience you intended.",
  },
  "shopify-hydrogen-hero-title-mobile-desktop-metaobject-mismatch": {
    heroVisual: {
      type: "flow-diagram-svg",
      caption: "A responsive title bug can come from the boundary between Shopify content data and component render strategy.",
      steps: [
        {
          label: "Metaobject fields",
          body: "Desktop and mobile title fields are read from the storefront content model.",
        },
        {
          label: "Component comparison",
          body: "The title component decides whether mobile text is distinct from desktop text.",
        },
        {
          label: "DOM shape changes",
          body: "Different values move the breakpoint behavior from heading elements to inline spans.",
        },
      ],
    },
    faq: [
      {
        question: "Why did the Hydrogen hero title change after a refactor?",
        answer:
          "The refactor changed the rendering strategy. The old component hid whole desktop and mobile heading elements. The new component kept the heading and switched inner spans when mobile and desktop text differed.",
      },
      {
        question: "Where should a merchant check this in Shopify Admin?",
        answer:
          "Check the metaobject entry that powers the hero copy, especially the desktop and mobile title fields. If the storefront query reads the first entry for a type, confirm the active entry order and market-specific translations too.",
      },
      {
        question: "Is whitespace enough to trigger this kind of mismatch?",
        answer:
          "Yes, if the component compares raw strings. A leading space, trailing space, non-breaking space, line break, or translated field variant can make two visually similar values behave as distinct.",
      },
    ],
    internalLinks: [
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Shopify Hydrogen storefront",
        note: "The service path for storefront components that need merchant-editable content without fragile UI behavior.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this when a live Hydrogen store needs a focused check across code, content models, and deployment risk.",
      },
      {
        href: "/blog/shopify-hydrogen-hero-video-carousel-onended",
        label: "Hero carousel production note",
        note: "A related homepage production note about small component behavior changes with visible storefront impact.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/api/storefront/latest/queries/metaobjects",
        label: "Storefront API metaobjects query",
        note: "Official Shopify reference for retrieving metaobject entries by type from the Storefront API.",
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/deployments/github",
        label: "Hydrogen CI/CD with GitHub",
        note: "Official Shopify reference for Hydrogen GitHub deployments and Oxygen preview behavior.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in. If a Hydrogen bug sits between storefront code, Shopify Admin content, and deployment workflow, I can help trace the real boundary before the fix turns into guesswork.",
  },
  "shopify-b2b-partner-pricing-without-separate-storefront": {
    heroVisual: {
      type: "flow-diagram-svg",
      caption: "Partner pricing works best when recognition, display, cart math, and migration planning use the same rule boundary.",
      steps: [
        {
          label: "Recognize partner",
          body: "Customer accounts identify the shopper and map them to an eligible segment or tag.",
        },
        {
          label: "Show the promise",
          body: "Product cards, PDPs, and cart rows show partner pricing before checkout.",
        },
        {
          label: "Apply once",
          body: "A checkout-safe discount layer applies the eligible price without coupon codes or duplicate products.",
        },
      ],
    },
    faq: [
      {
        question: "Can partner pricing work on Shopify without a separate wholesale storefront?",
        answer:
          "Yes, if the catalog, inventory, and merchandising stay unified while customer recognition and discount logic decide which prices apply to eligible partners.",
      },
      {
        question: "Should partner pricing use discount codes?",
        answer:
          "Not for a clean partner portal experience. The pricing should apply automatically from the buyer context so partners do not need to remember or share a manual code.",
      },
      {
        question: "How should a non-Plus build prepare for native Shopify B2B later?",
        answer:
          "Keep products and variants canonical, avoid hard-coded one-off partner states, and model eligibility around segments or tags that can later map to companies, company locations, and catalogs.",
      },
    ],
    internalLinks: [
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Shopify Hydrogen storefront",
        note: "The service path when partner UX needs to live inside the real storefront instead of a separate portal.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this when customer recognition, pricing display, and checkout behavior need a focused production review.",
      },
      {
        href: "/shopify-hydrogen-fit-audit",
        label: "Hydrogen Scope Review",
        note: "Use this before turning partner pricing requirements into a larger storefront rebuild.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/hydrogen",
        label: "Customer Account API with Hydrogen",
        note: "Official Shopify guide for authenticating customers in a Hydrogen storefront.",
      },
      {
        href: "https://shopify.dev/docs/apps/build/discounts",
        label: "Shopify discounts and Functions",
        note: "Official Shopify guide covering automatic discounts, discount apps, and Functions-based discount logic.",
      },
      {
        href: "https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments",
        label: "DiscountCustomerSegments",
        note: "Official Admin GraphQL reference for targeting discounts to customer segments.",
      },
      {
        href: "https://shopify.dev/docs/apps/build/b2b",
        label: "Apps and B2B",
        note: "Official Shopify B2B reference for companies, company locations, catalogs, and negotiated pricing.",
      },
    ],
    closingPitch:
      "If your partner pricing logic is starting to leak across product data, theme code, and checkout exceptions, the useful work is drawing the boundary before another workaround becomes permanent.",
  },
  "shopify-hydrogen-seo-checklist": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-seo-checklist-cover.jpg",
      alt: "Hydrogen SEO architecture visual with crawl paths, canonical route cards, sitemap nodes, and structured data blocks.",
      title: "Shopify Hydrogen SEO checklist visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "What belongs in a Shopify Hydrogen SEO checklist?",
        answer:
          "Check route metadata, canonical URLs, sitemap and robots output, JSON-LD, server-rendered content, product state consistency, no-JavaScript rendering, and internal links.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO guide",
        note: "The main HydrogenExpert SEO pillar page.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this when checklist issues need a senior review.",
      },
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen SEO and performance optimization",
        note: "The service path for existing Hydrogen SEO fixes.",
      },
    ],
  },
  "hydrogen-sitemap-robots-oxygen": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-seo-checklist-cover.jpg",
      alt: "Hydrogen sitemap and robots launch QA visual with Oxygen production and preview checks.",
      title: "Hydrogen sitemap and robots on Oxygen",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Should sitemap and robots be checked before a Hydrogen launch?",
        answer:
          "Yes. Treat sitemap.xml, robots.txt, canonical URLs, and production versus preview behavior as launch QA, not as an afterthought.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO",
        note: "The main service page for sitemap, robots, metadata, and crawl consistency.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "Migration routes and sitemap behavior should be planned together.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Shopify Hydrogen SEO docs",
        note: "Official Shopify guidance for sitemap, robots, metadata, canonical URLs, and JSON-LD.",
      },
    ],
  },
  "hydrogen-json-ld-product-state": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-seo-checklist-cover.jpg",
      alt: "Hydrogen JSON-LD product state visual showing visible PDP state and structured data alignment.",
      title: "Hydrogen JSON-LD and product state",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Should Hydrogen JSON-LD match the visible product state?",
        answer:
          "Yes. Structured data should describe the product, variant, price, availability, and visible page state accurately.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO",
        note: "Use this when JSON-LD, metadata, and visible product state need to line up.",
      },
      {
        href: "/blog/shopify-hydrogen-product-description-ssr-seo",
        label: "Product description SSR note",
        note: "Related page-state consistency issue for product content.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Shopify Hydrogen SEO docs",
        note: "Official Shopify guidance for JSON-LD in Hydrogen.",
      },
    ],
  },
  "hydrogen-variant-urls-seo": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-nextjs-cover.jpg",
      alt: "Hydrogen variant URL state visual with selected options, canonical rules, and fallback paths.",
      title: "Hydrogen variant URLs and SEO",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Are variant URLs an SEO risk in Hydrogen?",
        answer:
          "They can be if search params, selected options, canonical URLs, and visible variant state drift apart. Stable rules matter more than exposing every possible state.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO",
        note: "The service page for variant URL, canonical, and structured-data decisions.",
      },
      {
        href: "/blog/shopify-hydrogen-variant-selection-fallback",
        label: "Variant fallback note",
        note: "Related production note about preserving shopper-selected options.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Shopify Hydrogen SEO docs",
        note: "Official Shopify grounding for canonical and route metadata behavior.",
      },
    ],
  },
  "hydrogen-product-content-ssr": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-seo-checklist-cover.jpg",
      alt: "Hydrogen server-rendered product content visual with initial HTML and crawler-visible copy.",
      title: "Hydrogen product content SSR",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Should important product content be in initial HTML?",
        answer:
          "Yes. If the content helps shoppers decide or crawlers understand the page, it should not depend only on a client-side fetch.",
      },
    ],
    internalLinks: [
      {
        href: "/blog/shopify-hydrogen-product-description-ssr-seo",
        label: "Product description SSR note",
        note: "A concrete production note on this exact issue.",
      },
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Performance optimization",
        note: "SSR, product content, and perceived speed often overlap.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Shopify Hydrogen SEO docs",
        note: "Official Shopify SEO grounding for Hydrogen pages.",
      },
    ],
  },
  "what-breaks-when-moving-from-liquid-to-hydrogen": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/liquid-to-hydrogen-migration-checklist-cover.jpg",
      alt: "Liquid to Hydrogen migration risk visual with routes, apps, analytics, and checkout handoff.",
      title: "What breaks moving from Liquid to Hydrogen",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "What usually breaks when moving from Liquid to Hydrogen?",
        answer:
          "Routes, canonicals, app assumptions, analytics, consent behavior, product state, and checkout handoff are the common risk surfaces.",
      },
    ],
    internalLinks: [
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "The service page for migration planning and launch QA.",
      },
      {
        href: "/shopify-hydrogen-fit-audit",
        label: "Scope Review",
        note: "Use this before migration scope is approved.",
      },
    ],
  },
  "shopify-storefront-mcp-explained": {
    heroVisual: {
      type: "flow-diagram-svg",
      caption: "Storefront MCP is store-scoped agentic commerce, not developer documentation grounding.",
      steps: [
        {
          label: "Shopper asks",
          body: "The agent receives a product, policy, cart, or checkout question.",
        },
        {
          label: "Storefront MCP calls",
          body: "The agent queries a selected store's catalog, cart, and policies.",
        },
        {
          label: "Commerce handoff",
          body: "The shopper reviews products and completes checkout through the trusted flow.",
        },
      ],
    },
    faq: [
      {
        question: "Is Storefront MCP the same as Shopify Dev MCP?",
        answer:
          "No. Shopify Dev MCP grounds developer documentation and API work. Storefront MCP connects an agent to a specific store's catalog, cart, and policies.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Hydrogen SEO",
        note: "AI-readable product pages still need crawlable, consistent storefront state.",
      },
      {
        href: "/shopify-hydrogen-fit-audit",
        label: "Hydrogen Scope Review",
        note: "Use this before turning agentic commerce into a rebuild reason.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront",
        label: "Storefront MCP server",
        note: "Official Shopify Storefront MCP server reference.",
      },
      {
        href: "https://shopify.dev/docs/agents/catalog/mcp",
        label: "Catalog MCP server",
        note: "Official Shopify UCP catalog discovery reference.",
      },
    ],
  },
  "storefront-mcp-vs-shopify-dev-mcp": {
    heroVisual: {
      type: "flow-diagram-svg",
      caption: "Dev MCP supports developer grounding. Storefront MCP supports store-specific shopping agents.",
      steps: [
        {
          label: "Shopify Dev MCP",
          body: "Use for docs, API schemas, implementation grounding, and code validation.",
        },
        {
          label: "Storefront MCP",
          body: "Use for selected-store catalog, cart, checkout, and policy agent tasks.",
        },
        {
          label: "UCP tools",
          body: "Use catalog and checkout capabilities for broader agentic commerce flows.",
        },
      ],
    },
    faq: [
      {
        question: "Which MCP should content production use first?",
        answer:
          "Use Shopify Dev MCP first for Hydrogen, Oxygen, API, SEO, analytics, and platform claims. Use Storefront MCP only for store/catalog/cart/policy agentic commerce topics.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Hydrogen SEO",
        note: "Where AI-readable commerce overlaps with technical storefront SEO.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Hydrogen audit",
        note: "The commercial entry point before building agent-facing commerce work.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/apps/build/ai-toolkit",
        label: "Shopify AI Toolkit",
        note: "Official Shopify AI Toolkit documentation for developer tooling context.",
      },
      {
        href: "https://shopify.dev/docs/apps/build/storefront-mcp",
        label: "About Storefront MCP",
        note: "Official Shopify overview for store-scoped shopping agents.",
      },
    ],
  },
  "shopify-plus-hydrogen": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/shopify-plus-hydrogen-cover.jpg",
      alt: "Enterprise ecommerce architecture visual for Shopify Plus Hydrogen with storefront modules and integration panels.",
      title: "Shopify Plus Hydrogen architecture visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Does every Shopify Plus brand need Hydrogen?",
        answer:
          "No. Shopify Plus makes Hydrogen more plausible because brands often have bigger UX, integration, and performance needs, but the business case still has to justify the custom storefront.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit for Plus brands",
        note: "Start here when a Plus team needs a business-first Hydrogen decision.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Shopify Hydrogen storefront",
        note: "Use this when Plus-level needs justify custom storefront development.",
      },
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "Production retail case study",
        note: "A retail-scale context for production Hydrogen work.",
      },
    ],
  },
  "shopify-hydrogen-developer-vs-agency": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-developer-vs-agency-cover.jpg",
      alt: "Shopify Hydrogen delivery model visual comparing direct senior engineering ownership with layered agency handoffs.",
      title: "Shopify Hydrogen developer vs agency comparison visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Should I hire a Shopify Hydrogen developer or an agency?",
        answer:
          "Hire a senior specialist when you need direct strategy and implementation. Hire an agency when the scope requires a larger team, broader creative services, or ongoing account management.",
      },
    ],
    internalLinks: [
      {
        href: "/hire-me",
        label: "Hire a Shopify Hydrogen developer",
        note: "The direct path for senior specialist delivery.",
      },
      {
        href: "/services",
        label: "Shopify Hydrogen services",
        note: "See audit, migration, build, optimization, and support paths.",
      },
      {
        href: "/shopify-hydrogen-support-retainer",
        label: "Hydrogen support retainer",
        note: "Use this when the team needs ongoing senior help without a full agency layer.",
      },
    ],
  },
  "how-to-find-shopify-hydrogen-expert": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-developer-vs-agency-cover.jpg",
      alt: "Shopify Hydrogen hiring evaluation visual comparing senior specialist ownership, agency layers, and storefront risk areas.",
      title: "How to find a Shopify Hydrogen expert",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Where should I look for Shopify experts today?",
        answer:
          "Use Shopify's Partner Directory for broad partner discovery, but do not stop there. For Hydrogen work, also check production storefront proof, technical writing, case studies, and whether the person can explain Storefront API, SEO, cart, and checkout boundaries.",
      },
      {
        question: "What makes a Shopify Hydrogen expert different from a general Shopify expert?",
        answer:
          "A general Shopify expert may be enough for theme edits, app setup, or store operations. A Hydrogen expert should be able to own a custom storefront application: routing, server-rendered content, Storefront API data, cart behavior, analytics, deployment, and launch QA.",
      },
      {
        question: "Should I hire a freelancer, agency, or senior specialist?",
        answer:
          "Hire the model that matches the risk. Freelancers can be good for contained tasks, agencies for broad cross-functional scope, and senior specialists for direct technical ownership when the storefront architecture is the main problem.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in. If you are not sure whether you need theme cleanup, a Hydrogen migration, or a smaller audit first, start with a focused scope review before buying a rebuild.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/shopify-hydrogen-developer",
        label: "Hire a Shopify Hydrogen developer",
        note: "The direct hiring path when the store needs senior Hydrogen implementation ownership.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this before committing to a rebuild when the risks, budget, or fit are still unclear.",
      },
      {
        href: "/shopify-hydrogen-packages",
        label: "Fixed-scope Hydrogen packages",
        note: "A clearer buying path when the work can be framed as Starter, Standard, Growth, or Custom scope.",
      },
      {
        href: "/articles/shopify-hydrogen-experts-production-experience",
        label: "Evaluate production experience",
        note: "A related evergreen article focused on proof signals and production ownership.",
      },
      {
        href: "/case-studies",
        label: "Production proof",
        note: "Use this when you want the hiring conversation grounded in shipped storefront work.",
      },
    ],
    externalLinks: [
      {
        href: "https://help.shopify.com/en/manual/partner-directory",
        label: "Shopify Partner Directory",
        note: "Official Shopify guidance for finding and contacting Partners.",
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals",
        label: "Hydrogen and Oxygen fundamentals",
        note: "Official Shopify context for Hydrogen, React Router, Oxygen, and custom storefront architecture.",
      },
      {
        href: "https://shopify.dev/docs/apps/build/checkout",
        label: "Apps in checkout",
        note: "Official Shopify checkout extension and customization surface overview.",
      },
      {
        href: "https://shopify.dev/docs/api/functions/latest",
        label: "Shopify Functions",
        note: "Official Shopify Function API reference for backend commerce logic.",
      },
    ],
  },
  "shopify-hydrogen-product-description-ssr-seo": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-seo-checklist-cover.jpg",
      alt: "Hydrogen SEO architecture visual showing crawlable product content, structured data blocks, and route-level metadata panels.",
      title: "Shopify Hydrogen product description SSR SEO visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Should Shopify Hydrogen product descriptions be server-rendered?",
        answer:
          "Yes. If product descriptions matter for shoppers, SEO, or AI crawlers, they should be part of the initial product page HTML instead of appearing only after a client-side fetch.",
      },
      {
        question: "Which Shopify field should power the product description?",
        answer:
          "Use Shopify's standard product description fields. The Storefront API exposes product description data, including descriptionHtml when formatted HTML is needed.",
      },
      {
        question: "Can the description still live inside an accordion?",
        answer:
          "Yes. The accordion can stay. The important distinction is that the accordion content should already exist in the server-rendered HTML; JavaScript should only enhance the open and close behavior.",
      },
      {
        question: "How do you verify the fix?",
        answer:
          "Open View Source and search for a unique sentence from the product description. Then disable JavaScript and confirm the same description remains visible or accessible on the product page.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in. If your Hydrogen product pages hide important catalog content behind client-side fetches, I can help move the right data back into SSR without breaking the storefront UX.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO guide",
        note: "Use this for the broader crawl, metadata, canonical, sitemap, and structured-data checklist.",
      },
      {
        href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
        label: "Hydrogen homepage SSR case note",
        note: "A related production note about moving primary homepage data out of client-side effects.",
      },
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance, SEO, and UX optimization",
        note: "The service path for existing Hydrogen storefronts where crawlability, speed, or UX has drifted.",
      },
      {
        href: "/hire-me",
        label: "Work with Emre",
        note: "The direct route if your storefront needs senior Hydrogen implementation with focused ownership.",
      },
    ],
    externalLinks: [
      {
        href: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
        label: "Google JavaScript SEO basics",
        note: "Google explains JavaScript rendering risks and notes that server-side or pre-rendering is still useful for users and crawlers.",
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/objects/Product",
        label: "Storefront API Product object",
        note: "Official Shopify reference for product fields, including description and descriptionHtml.",
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Hydrogen SEO documentation",
        note: "Official Shopify guidance for Hydrogen metadata, canonical URLs, JSON-LD, sitemap, and robots.txt.",
      },
    ],
  },
  "shopify-hydrogen-metaobjects-page-specific-sections": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/shopify-plus-hydrogen-cover.jpg",
      alt: "Hydrogen content architecture visual with storefront sections, merchant-editable content modules, and integration panels.",
      title: "Shopify Hydrogen metaobjects page-specific sections visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "When should a Shopify Hydrogen section use metaobjects?",
        answer:
          "Use metaobjects when the section has a repeatable structure but page-specific content, such as a heading, description, and image that merchants need to edit without code changes.",
      },
      {
        question: "Are metaobjects better than hardcoded page content?",
        answer:
          "They are better when the content will change by page or campaign. Hardcoded content is fine for stable UI copy, but metaobjects are safer when merchandising, brand, or marketing teams need ownership.",
      },
      {
        question: "Should every product and collection page get its own metaobject entry?",
        answer:
          "Not by default. A smaller set of page-context entries is easier to maintain. Product and collection defaults can stay shared unless there is a real business reason to personalize them.",
      },
      {
        question: "Can metaobject-driven sections help SEO?",
        answer:
          "Yes, if the content is rendered server-side as part of the initial HTML. The SEO value comes from crawlable, route-specific content, not from the metaobject itself.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in. If your Hydrogen storefront needs merchant-editable sections without turning every update into a developer ticket, I can help you model the content cleanly and keep the frontend stable.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO guide",
        note: "Use this when page-specific content needs to stay crawlable, canonical, and structured.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Shopify Hydrogen services",
        note: "Use this when merchant-editable content is part of a broader custom storefront build.",
      },
      {
        href: "/case-studies/bayam-jewelry-shopify-hydrogen",
        label: "Bayam Jewelry case study",
        note: "The broader context for luxury catalog and showroom-led Hydrogen storefront work.",
      },
      {
        href: "/hire-me",
        label: "Work with Emre",
        note: "The direct route if your storefront needs senior Hydrogen implementation with focused ownership.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/apps/build/metaobjects",
        label: "Shopify metaobjects overview",
        note: "Official Shopify documentation explaining metaobject definitions, entries, fields, and storefront access.",
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/queries/metaobjects",
        label: "Storefront API metaobjects query",
        note: "Official Storefront API reference for querying active metaobject entries by type.",
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/objects/Metaobject",
        label: "Storefront API Metaobject object",
        note: "Official object reference for metaobject fields, handles, IDs, and updated timestamps.",
      },
    ],
  },
  "shopify-hydrogen-variant-selection-fallback": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-nextjs-cover.jpg",
      alt: "Hydrogen storefront logic visual with product option modules, route state, and variant selection architecture panels.",
      title: "Shopify Hydrogen variant selection fallback visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "How should Shopify Hydrogen choose a fallback variant?",
        answer:
          "The safest pattern is to lock the option the shopper clicked first, then score only the available variants inside that locked set. The clicked option should be a hard constraint, not one preference among many.",
      },
      {
        question: "Why do URL search params matter for Hydrogen product options?",
        answer:
          "Hydrogen product pages often store selected options in the URL, such as Width=9mm and Length=18. That makes variants shareable and crawlable, but it also means the resolver must update the URL without changing an option the shopper explicitly chose.",
      },
      {
        question: "Should an out-of-stock Shopify Hydrogen variant redirect automatically?",
        answer:
          "It can, but only carefully. If the selected variant is out of stock, redirect to the nearest available variant while preserving the primary product dimension, such as Width, so the shopper does not feel the interface ignored their intent.",
      },
      {
        question: "Is wrong variant fallback a Shopify Hydrogen bug?",
        answer:
          "Usually no. Hydrogen gives developers the flexibility to build custom product option logic. The bug normally lives in the storefront resolver when it searches all variants globally instead of scoping candidates to the clicked option.",
      },
      {
        question: "What is the most important test for multi-option Hydrogen products?",
        answer:
          "Test that the returned variant always contains the option the shopper clicked. If they click Width=9mm, every fallback candidate and final URL must still contain Width=9mm.",
      },
      {
        question: "Does this pattern still apply after VariantSelector was deprecated?",
        answer:
          "Yes. Hydrogen's modern product option flow uses getProductOptions and related adjacent variant data instead of relying on VariantSelector, but the storefront rule is the same: preserve the clicked option before choosing a fallback.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in. If your Hydrogen product pages have edge cases like variant fallback, out-of-stock navigation, or option URLs that feel fragile, I can help you fix the logic without turning the storefront into a bigger rebuild than it needs to be.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO",
        note: "Use this when variant URLs, canonicals, structured data, and rendered product state need to agree.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Hydrogen storefront development",
        note: "Use this when product option behavior is part of a broader custom buying journey.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Hydrogen storefront audit",
        note: "Use this when variant behavior needs to be reviewed before more feature work ships.",
      },
    ],
    externalLinks: [
      {
        href: "https://hydrogen.shopify.dev/update/april-2025",
        label: "Hydrogen April 2025 update",
        note: "Official Hydrogen release notes covering the VariantSelector deprecation and getProductOptions migration path.",
      },
      {
        href: "https://shopify.dev/docs/api/hydrogen/latest/utilities/getproductoptions",
        label: "getProductOptions documentation",
        note: "Official Hydrogen utility reference for building modern product option matrices.",
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Hydrogen SEO documentation",
        note: "Official Shopify guidance for Hydrogen metadata, canonical URLs, JSON-LD, sitemap, and robots.txt.",
      },
    ],
  },
  "cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-performance-checklist-cover.jpg",
      alt: "Hydrogen performance diagnostics visual with server-rendered product grids, cache layers, optimized media tiles, and timing panels.",
      title: "Shopify Hydrogen homepage performance optimization visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Why was useEffect the wrong place for this homepage fetch?",
        answer:
          "Because it pushed primary page data to the client after hydration. That delayed the moment the homepage felt ready and removed product listings from the initial HTML, which is the wrong tradeoff for a category-heavy storefront.",
      },
      {
        question: "What changed after moving the first tab to the route loader?",
        answer:
          "The first tab became part of the server-rendered response. That put real product HTML in the initial response, improved the ready state, and passed the simplest SSR check, loading the page with JavaScript disabled.",
      },
      {
        question: "Should every tab be preloaded on a Hydrogen homepage?",
        answer:
          "Usually no. Most users interact with the first tab, some click the second, and very few open every tab in every section. Preloading everything is often an expensive guess that hurts the common path.",
      },
      {
        question: "Where does intentional cache tuning fit in this pattern?",
        answer:
          "It matters when collection freshness and edge caching need to match catalog behavior. The bigger point is not one exact number. It is moving the first tab into the loader and caching the query deliberately instead of relying on a client-side effect.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That is when I come in. If your homepage, collection, or product pages are hitting the ceiling of what your current stack can deliver, I can help you see whether Hydrogen is the right move, and if it is, how to implement it without these traps.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance optimization",
        note: "Use this when a live Hydrogen storefront needs SSR, data-loading, media, or API-query cleanup.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Shopify Hydrogen cost",
        note: "Use this when you need the commercial range behind a more serious storefront discussion.",
      },
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "Production case studies",
        note: "See where Hydrogen was used on real storefronts with different catalogs, teams, and constraints.",
      },
      {
        href: "/hire-me",
        label: "Work with Emre",
        note: "The direct route if your storefront is already hitting the same delivery bottlenecks.",
      },
      {
        href: "/should-i-use-it",
        label: "Should you use Hydrogen?",
        note: "A practical decision filter if the technical fix looks real but the business case still needs checking.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/data-fetching/cache",
        label: "Hydrogen caching docs",
        note: "Official Shopify guidance on caching patterns and cache control choices in Hydrogen.",
      },
      {
        href: "https://react.dev/learn/you-might-not-need-an-effect",
        label: "React: You Might Not Need an Effect",
        note: "The React reference that matches the main architectural lesson in this refactor.",
      },
    ],
  },
  "shopify-hydrogen-collection-out-of-stock-products-hidden": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-seo-checklist-cover.jpg",
      alt: "Hydrogen collection diagnostics visual showing availability filters, SSR product cards, and pagination state.",
      title: "Shopify Hydrogen collection availability diagnostics",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Should Shopify Hydrogen collection pages show out-of-stock products by default?",
        answer:
          "It depends on the merchandising rule. If the default collection is meant to represent the full catalog, the SSR product list should not silently drop out-of-stock products. If the store intentionally hides them, the filter counts, copy, and canonical behavior should make that clear.",
      },
      {
        question: "Is this usually a Shopify Storefront API bug?",
        answer:
          "Usually no. The first check is whether the Storefront API and initial HTML contain the missing products. In this production case, the data existed; the app-side availability buffer and pagination state stopped before rendering it.",
      },
      {
        question: "Why can hasNextPage be misleading in this bug?",
        answer:
          "hasNextPage describes whether the Shopify connection has another remote page. It does not know about products the Hydrogen app already moved into a local unavailable-product buffer.",
      },
      {
        question: "How do you verify the fix?",
        answer:
          "Compare unfiltered collection cards, availability-filter counts, source HTML, out-of-stock labels, and load-more behavior. The important proof is that the unfiltered SSR response contains the expected product cards without asking shoppers to toggle the filter first.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but edge cases keep surfacing after launch? That is when I come in. If your Hydrogen collections, filters, or product state are drifting from what shoppers and crawlers should see, I can help trace the real data path and fix the storefront without turning it into a broad rebuild.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO",
        note: "Use this when collection, product, and filter state need to stay crawlable and consistent.",
      },
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance optimization",
        note: "Collection loader bugs often overlap with SSR, caching, and load-more behavior.",
      },
      {
        href: "/blog/shopify-hydrogen-product-description-ssr-seo",
        label: "Product content SSR note",
        note: "A related production note about checking initial HTML before blaming the platform.",
      },
      {
        href: "/hire-me",
        label: "Work with Emre",
        note: "The direct route for focused Hydrogen troubleshooting and implementation.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter",
        label: "Storefront API ProductFilter",
        note: "Official Shopify reference for collection product filters, including availability.",
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/objects/Collection",
        label: "Storefront API Collection object",
        note: "Official Shopify reference for collection product connections, filters, sorting, and pagination.",
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/objects/PageInfo",
        label: "Storefront API PageInfo object",
        note: "Official Shopify reference for hasNextPage and cursor pagination semantics.",
      },
    ],
  },
};

export function getPostEnhancement(slug: string) {
  const enhancement = POST_ENHANCEMENTS[slug] ?? { heroVisual: { type: "none" as const } };

  return {
    ...enhancement,
    internalLinks: enhancement.internalLinks ?? DEFAULT_INTERNAL_LINKS,
  };
}
