export interface TrafficLink {
  href: string;
  label: string;
  note: string;
  external?: boolean;
}

export interface ResourceCluster {
  id: string;
  title: string;
  description: string;
  links: readonly TrafficLink[];
}

export interface HydrogenExample {
  id: string;
  title: string;
  summary: string;
  whyItMatters: string;
  takeaway: string;
  source: TrafficLink;
  related: TrafficLink;
}

export interface IssueEntry {
  title: string;
  symptom: string;
  fix: string;
  post: TrafficLink;
  template: TrafficLink;
}

export interface IssueCategory {
  id: string;
  title: string;
  description: string;
  entries: readonly IssueEntry[];
}

export interface TemplateResource {
  id: string;
  title: string;
  summary: string;
  bestFor: string;
  checklist: readonly string[];
  relatedIssueHref: string;
  relatedGuideHref: string;
}

export interface CourseModule {
  id: string;
  title: string;
  outcome: string;
  guides: readonly TrafficLink[];
  productionNotes: readonly TrafficLink[];
  templates: readonly TrafficLink[];
}

export const RESOURCE_CLUSTERS = [
  {
    id: "start-here",
    title: "Start here",
    description: "Use these when the Hydrogen question is still a business decision.",
    links: [
      {
        href: "/should-i-use-it",
        label: "Should I use Hydrogen?",
        note: "A plain fit check before the rebuild idea gets expensive.",
      },
      {
        href: "/when-not-to-use-hydrogen",
        label: "When not to use Hydrogen",
        note: "The conservative counterweight for stores that still belong on Liquid.",
      },
      {
        href: "/shopify-hydrogen-vs-liquid",
        label: "Hydrogen vs Liquid",
        note: "Compare cost, maintenance, SEO, UX control, and operating reality.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Hydrogen cost",
        note: "Turn scope pressure into a practical budget range.",
      },
    ],
  },
  {
    id: "build-services",
    title: "Build and service paths",
    description: "Use these when the team is ready to scope actual work.",
    links: [
      {
        href: "/shopify-hydrogen-packages",
        label: "Hydrogen build packages",
        note: "Starter, Standard, Growth, and Custom package paths.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Hydrogen storefront",
        note: "For custom product flow, content-commerce, and premium UX work.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "Route, SEO, app, analytics, and launch-risk planning.",
      },
      {
        href: "/shopify-hydrogen-support-retainer",
        label: "Support retainer",
        note: "Ongoing senior support after a Hydrogen storefront is live.",
      },
    ],
  },
  {
    id: "production-notes",
    title: "Production notes",
    description: "Use these when a live Hydrogen issue has a concrete symptom.",
    links: [
      {
        href: "/shopify-hydrogen-issues",
        label: "Hydrogen issue library",
        note: "Symptom to fix index across SEO, performance, PDP, collections, cart, and metaobjects.",
      },
      {
        href: "/news-on-shopify-hydrogen",
        label: "News on Shopify Hydrogen",
        note: "Monthly official Hydrogen updates translated into merchant and end-user impact.",
      },
      {
        href: "/blog/shopify-hydrogen-product-description-ssr-seo",
        label: "Product descriptions and SSR",
        note: "A product content SEO note from a real storefront issue.",
      },
      {
        href: "/blog/shopify-hydrogen-collection-out-of-stock-products-hidden",
        label: "Collection out-of-stock products",
        note: "A collection filtering and pagination note for Hydrogen stores.",
      },
      {
        href: "/blog/shopify-hydrogen-variant-selection-fallback",
        label: "Variant fallback logic",
        note: "A PDP option-state note for multi-option products.",
      },
    ],
  },
  {
    id: "templates",
    title: "Templates and checklists",
    description: "Use these when the next move needs a reusable artifact.",
    links: [
      {
        href: "/shopify-hydrogen-templates",
        label: "Free Hydrogen templates",
        note: "Copyable scope, route, SEO, launch, and PDP checklists.",
      },
      {
        href: "/shopify-hydrogen-templates#seo-migration-checklist",
        label: "SEO migration checklist",
        note: "Protect routes, canonicals, sitemap, robots, analytics, and structured data.",
      },
      {
        href: "/shopify-hydrogen-templates#launch-qa-checklist",
        label: "Launch QA checklist",
        note: "Preview, production, checkout handoff, forms, analytics, and rollback checks.",
      },
      {
        href: "/shopify-hydrogen-templates#pdp-requirements",
        label: "PDP requirements",
        note: "Variant, availability, JSON-LD, content, and media rules.",
      },
    ],
  },
  {
    id: "proof",
    title: "Proof and examples",
    description: "Use these when a stakeholder needs concrete reference points.",
    links: [
      {
        href: "/shopify-hydrogen-examples",
        label: "Hydrogen examples directory",
        note: "Example patterns with source links and HydrogenExpert takeaways.",
      },
      {
        href: "/case-studies",
        label: "Case studies",
        note: "Approved production proof across Hydrogen and Liquid work.",
      },
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "EveShop case study",
        note: "Large-catalog retail Hydrogen context.",
      },
      {
        href: "/case-studies/rebel-bunny-shopify-hydrogen",
        label: "Rebel Bunny case study",
        note: "DTC, education, and partner-commerce Hydrogen context.",
      },
    ],
  },
  {
    id: "learning",
    title: "Learning and course support",
    description: "Use these when someone is moving from tutorial to production judgment.",
    links: [
      {
        href: "/udemy-shopify-hydrogen-course-resources",
        label: "Udemy course companion",
        note: "Course topics mapped to guides, production notes, and templates.",
      },
      {
        href: "/what-is-hydrogen",
        label: "What is Hydrogen?",
        note: "Plain-English Hydrogen fundamentals for merchants.",
      },
      {
        href: "/articles/how-to-hire-shopify-hydrogen-developer",
        label: "Hiring guide",
        note: "What a senior Hydrogen developer should own.",
      },
      {
        href: "/shopify-hydrogen-developer",
        label: "Developer service",
        note: "The direct path from learning to scoped work.",
      },
    ],
  },
] as const satisfies readonly ResourceCluster[];

export const HYDROGEN_EXAMPLES = [
  {
    id: "shopify-demo-store",
    title: "Shopify Hydrogen demo store",
    summary: "A full-featured official Hydrogen demo store with real routes, data loading, cart, and product patterns.",
    whyItMatters:
      "It is the clearest public reference for what a production-like Hydrogen storefront skeleton can include before a merchant-specific build starts.",
    takeaway:
      "Study route ownership, loader boundaries, product page composition, and how much storefront logic moves into application code.",
    source: {
      href: "https://github.com/Shopify/hydrogen-demo-store",
      label: "Shopify hydrogen-demo-store on GitHub",
      note: "Official demo-store repository.",
      external: true,
    },
    related: {
      href: "/custom-shopify-hydrogen-storefront",
      label: "Custom Hydrogen storefront",
      note: "Use this when the demo pattern needs a merchant-specific build.",
    },
  },
  {
    id: "mock-shop-quickstart",
    title: "Mock.shop quickstart storefront",
    summary: "A quickstart Hydrogen project backed by example Mock.shop data.",
    whyItMatters:
      "It is useful for learning the default route set before real product, collection, account, and policy data complicates the project.",
    takeaway:
      "Treat quickstart success as environment proof, not as production readiness.",
    source: {
      href: "https://shopify.dev/docs/storefronts/headless/hydrogen",
      label: "Shopify Hydrogen quickstart",
      note: "Official getting-started guide.",
      external: true,
    },
    related: {
      href: "/udemy-shopify-hydrogen-course-resources",
      label: "Course companion",
      note: "Use this for the learning path after quickstart.",
    },
  },
  {
    id: "oxygen-preview-workflow",
    title: "Oxygen preview deployment workflow",
    summary: "A storefront connected to GitHub with production and preview environments.",
    whyItMatters:
      "Hydrogen launch safety depends on preview URLs, environment variables, branch mapping, and production verification.",
    takeaway:
      "Scope deployment workflow before content and SEO QA, not after the first release candidate.",
    source: {
      href: "https://shopify.dev/docs/storefronts/headless/hydrogen/deployments/github",
      label: "Hydrogen CI/CD with GitHub",
      note: "Official Oxygen deployment workflow documentation.",
      external: true,
    },
    related: {
      href: "/shopify-hydrogen-templates#launch-qa-checklist",
      label: "Launch QA checklist",
      note: "Copy the launch checklist before a production cutover.",
    },
  },
  {
    id: "variant-options",
    title: "Product options and variant state",
    summary: "A PDP pattern where selected options, fallback variants, URLs, and availability must agree.",
    whyItMatters:
      "Variant state bugs create shopper confusion and can make structured data describe the wrong visible product state.",
    takeaway:
      "Lock the shopper's selected option first, then choose fallbacks inside that constraint.",
    source: {
      href: "https://shopify.dev/docs/api/hydrogen/latest/utilities/getproductoptions",
      label: "getProductOptions documentation",
      note: "Official Hydrogen utility reference.",
      external: true,
    },
    related: {
      href: "/blog/shopify-hydrogen-variant-selection-fallback",
      label: "Variant fallback production note",
      note: "A related HydrogenExpert production note.",
    },
  },
  {
    id: "server-rendered-product-content",
    title: "Server-rendered product content",
    summary: "A product page that puts important description and buying context into initial HTML.",
    whyItMatters:
      "Client-only product copy can make shoppers, crawlers, and AI agents miss the content that explains the product.",
    takeaway:
      "Important PDP content belongs in the route data and server-rendered response.",
    source: {
      href: "https://shopify.dev/docs/api/storefront/latest/objects/Product",
      label: "Storefront API Product object",
      note: "Official product field reference.",
      external: true,
    },
    related: {
      href: "/blog/shopify-hydrogen-product-description-ssr-seo",
      label: "Product description SSR note",
      note: "A related HydrogenExpert production note.",
    },
  },
  {
    id: "collection-availability",
    title: "Collection availability and pagination",
    summary: "A collection listing where out-of-stock products, filters, and pagination state need one rule.",
    whyItMatters:
      "Collection bugs often hide products from the initial page even when Shopify data is correct.",
    takeaway:
      "Compare Storefront API data, app-local buffers, SSR cards, filter counts, and load-more behavior together.",
    source: {
      href: "https://shopify.dev/docs/api/storefront/latest/objects/Collection",
      label: "Storefront API Collection object",
      note: "Official collection connection reference.",
      external: true,
    },
    related: {
      href: "/blog/shopify-hydrogen-collection-out-of-stock-products-hidden",
      label: "Collection out-of-stock note",
      note: "A related HydrogenExpert production note.",
    },
  },
  {
    id: "metaobject-sections",
    title: "Metaobject-backed page sections",
    summary: "A page-specific content section controlled by Shopify metaobjects and rendered through Hydrogen.",
    whyItMatters:
      "This is often the middle path between hardcoded landing pages and a full external CMS.",
    takeaway:
      "Use metaobjects for structured merchant-editable content, but keep primary content server-rendered.",
    source: {
      href: "https://shopify.dev/docs/api/storefront/latest/queries/metaobjects",
      label: "Storefront API metaobjects query",
      note: "Official metaobjects query reference.",
      external: true,
    },
    related: {
      href: "/blog/shopify-hydrogen-metaobjects-page-specific-sections",
      label: "Metaobjects production note",
      note: "A related HydrogenExpert production note.",
    },
  },
  {
    id: "hydrogen-video-media",
    title: "Hydrogen video and carousel timing",
    summary: "A homepage media pattern where image timers and active video completion should not share one rule.",
    whyItMatters:
      "A polished homepage can feel broken if inactive videos or fixed timers advance the carousel at the wrong moment.",
    takeaway:
      "Only the active video should control video-slide completion.",
    source: {
      href: "https://shopify.dev/docs/api/hydrogen/2025-05/components/media/video",
      label: "Hydrogen Video component",
      note: "Official media component reference.",
      external: true,
    },
    related: {
      href: "/blog/shopify-hydrogen-hero-video-carousel-onended",
      label: "Hero video carousel note",
      note: "A related HydrogenExpert production note.",
    },
  },
  {
    id: "customer-account-partner-path",
    title: "Customer account and partner pricing path",
    summary: "A storefront path where customer recognition, partner pricing display, and checkout-safe discounts align.",
    whyItMatters:
      "Partner pricing becomes fragile when recognition, PDP display, cart math, and checkout rules live in separate hacks.",
    takeaway:
      "Model eligibility cleanly and keep the catalog canonical.",
    source: {
      href: "https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/hydrogen",
      label: "Customer Account API with Hydrogen",
      note: "Official Hydrogen customer-account guide.",
      external: true,
    },
    related: {
      href: "/blog/shopify-b2b-partner-pricing-without-separate-storefront",
      label: "Partner pricing production note",
      note: "A related HydrogenExpert production note.",
    },
  },
  {
    id: "hydrogen-seo-sitemap-robots",
    title: "Sitemap, robots, metadata, and JSON-LD",
    summary: "A Hydrogen SEO example where crawl surfaces are owned by the app, not by a Shopify theme file.",
    whyItMatters:
      "Custom storefront SEO breaks quietly when rendered HTML, canonical URLs, sitemap, robots, and schema drift apart.",
    takeaway:
      "Validate source HTML and crawl files before launch, then recheck production after deploy.",
    source: {
      href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
      label: "Hydrogen SEO documentation",
      note: "Official Shopify SEO guidance for Hydrogen.",
      external: true,
    },
    related: {
      href: "/shopify-hydrogen-seo",
      label: "Shopify Hydrogen SEO",
      note: "The HydrogenExpert SEO service page.",
    },
  },
] as const satisfies readonly HydrogenExample[];

export const HYDROGEN_ISSUE_CATEGORIES = [
  {
    id: "seo",
    title: "SEO and crawlability",
    description: "Rendered content, canonical URLs, structured data, sitemap, and robots signals.",
    entries: [
      {
        title: "Product descriptions are missing from initial HTML",
        symptom: "The PDP looks fine after JavaScript, but view source does not contain the product copy.",
        fix: "Move important product content into the route data and server-rendered response.",
        post: {
          href: "/blog/shopify-hydrogen-product-description-ssr-seo",
          label: "Product description SSR SEO",
          note: "Production note",
        },
        template: {
          href: "/shopify-hydrogen-templates#pdp-requirements",
          label: "PDP requirements",
          note: "Checklist",
        },
      },
      {
        title: "JSON-LD does not match visible product state",
        symptom: "Structured data describes a different variant, price, availability, or canonical state.",
        fix: "Generate JSON-LD from the same selected product and variant state shown to shoppers.",
        post: {
          href: "/shopify-hydrogen-seo",
          label: "Hydrogen SEO and structured data",
          note: "Canonical guide",
        },
        template: {
          href: "/shopify-hydrogen-templates#seo-migration-checklist",
          label: "SEO migration checklist",
          note: "Checklist",
        },
      },
      {
        title: "Sitemap and robots were treated as deploy afterthoughts",
        symptom: "Production crawl files do not match the storefront routes search engines should discover.",
        fix: "Own sitemap.xml, robots.txt, canonicals, and production route checks as launch QA.",
        post: {
          href: "/shopify-hydrogen-seo",
          label: "Hydrogen sitemap and robots checks",
          note: "Canonical guide",
        },
        template: {
          href: "/shopify-hydrogen-templates#launch-qa-checklist",
          label: "Launch QA checklist",
          note: "Checklist",
        },
      },
    ],
  },
  {
    id: "performance",
    title: "Performance and rendering",
    description: "SSR, loader data, caching, media, and browser-visible speed issues.",
    entries: [
      {
        title: "Primary homepage data loads after hydration",
        symptom: "The homepage shell appears, then products arrive later through a client effect.",
        fix: "Move the common-path product data into the route loader and cache it deliberately.",
        post: {
          href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
          label: "Cut homepage load time from 5s to 2s",
          note: "Production note",
        },
        template: {
          href: "/shopify-hydrogen-templates#launch-qa-checklist",
          label: "Launch QA checklist",
          note: "Checklist",
        },
      },
      {
        title: "Product content is visible only after client JavaScript",
        symptom: "Important content fails the simple no-JavaScript or view-source check.",
        fix: "Treat product content as render-critical when it helps shoppers or crawlers.",
        post: {
          href: "/shopify-hydrogen-seo",
          label: "Hydrogen product content SSR",
          note: "SEO guide",
        },
        template: {
          href: "/shopify-hydrogen-templates#pdp-requirements",
          label: "PDP requirements",
          note: "Checklist",
        },
      },
      {
        title: "Performance work starts without a checklist",
        symptom: "The team tunes isolated components without naming API, media, third-party, and SSR boundaries.",
        fix: "Audit the page by request path, route data, cache behavior, image loading, and scripts.",
        post: {
          href: "/shopify-hydrogen-performance-optimization",
          label: "Hydrogen performance optimization",
          note: "Service guide",
        },
        template: {
          href: "/shopify-hydrogen-templates#launch-qa-checklist",
          label: "Launch QA checklist",
          note: "Checklist",
        },
      },
    ],
  },
  {
    id: "cart-checkout",
    title: "Cart, checkout, and pricing",
    description: "Cart state, checkout handoff, partner pricing, accounts, and analytics boundaries.",
    entries: [
      {
        title: "Checkout handoff risk is discovered too late",
        symptom: "The storefront works until Shopify checkout, discounts, consent, or tracking need to agree.",
        fix: "Map cart state, checkout redirect, analytics, discount rules, and consent before launch.",
        post: {
          href: "/shopify-hydrogen-templates#launch-qa-checklist",
          label: "Hydrogen checkout handoff risks",
          note: "Launch QA checklist",
        },
        template: {
          href: "/shopify-hydrogen-templates#launch-qa-checklist",
          label: "Launch QA checklist",
          note: "Checklist",
        },
      },
      {
        title: "Partner pricing leaks across the storefront",
        symptom: "Eligibility, PDP display, cart math, and checkout discounts are handled by separate workarounds.",
        fix: "Draw one rule boundary for customer recognition and price application.",
        post: {
          href: "/blog/shopify-b2b-partner-pricing-without-separate-storefront",
          label: "Partner pricing without a separate storefront",
          note: "Production note",
        },
        template: {
          href: "/shopify-hydrogen-templates#scope-brief",
          label: "Scope brief",
          note: "Checklist",
        },
      },
      {
        title: "Apps assume a Liquid theme surface",
        symptom: "A Shopify app works in theme context but has no clean custom storefront equivalent.",
        fix: "Classify each app as API-backed, script-only, checkout-only, replace, or remove.",
        post: {
          href: "/shopify-hydrogen-audit",
          label: "Shopify apps in Hydrogen",
          note: "Audit guide",
        },
        template: {
          href: "/shopify-hydrogen-templates#route-map",
          label: "Route map",
          note: "Checklist",
        },
      },
    ],
  },
  {
    id: "pdp",
    title: "PDP and variant behavior",
    description: "Product page state, selected options, fallback variants, content, media, and availability.",
    entries: [
      {
        title: "Variant fallback ignores the clicked option",
        symptom: "A shopper clicks one product option, then the fallback URL or selected variant changes that option.",
        fix: "Treat the clicked option as a hard constraint before scoring fallback variants.",
        post: {
          href: "/blog/shopify-hydrogen-variant-selection-fallback",
          label: "Variant selection fallback",
          note: "Production note",
        },
        template: {
          href: "/shopify-hydrogen-templates#pdp-requirements",
          label: "PDP requirements",
          note: "Checklist",
        },
      },
      {
        title: "Variant URLs and SEO state drift",
        symptom: "Search params, selected options, canonical URLs, and visible product state disagree.",
        fix: "Create stable canonical and selected-option rules before indexing variant states.",
        post: {
          href: "/shopify-hydrogen-seo",
          label: "Hydrogen variant URLs and SEO",
          note: "SEO guide",
        },
        template: {
          href: "/shopify-hydrogen-templates#seo-migration-checklist",
          label: "SEO migration checklist",
          note: "Checklist",
        },
      },
      {
        title: "PDP content is not owned by the content model",
        symptom: "Product, support, or brand explanation copy requires code edits for normal merchandising changes.",
        fix: "Use product fields or structured metaobjects where merchant editability is a real requirement.",
        post: {
          href: "/blog/shopify-hydrogen-metaobjects-page-specific-sections",
          label: "Metaobjects page-specific sections",
          note: "Production note",
        },
        template: {
          href: "/shopify-hydrogen-templates#pdp-requirements",
          label: "PDP requirements",
          note: "Checklist",
        },
      },
    ],
  },
  {
    id: "collections",
    title: "Collections and discovery",
    description: "Collection pages, filters, sorting, product visibility, and catalog discovery.",
    entries: [
      {
        title: "Out-of-stock products disappear from the unfiltered collection",
        symptom: "Shopify returns the products, but the storefront buffer stops before rendering them.",
        fix: "Separate API pagination state from app-local availability buffering.",
        post: {
          href: "/blog/shopify-hydrogen-collection-out-of-stock-products-hidden",
          label: "Collection out-of-stock products hidden",
          note: "Production note",
        },
        template: {
          href: "/shopify-hydrogen-templates#route-map",
          label: "Route map",
          note: "Checklist",
        },
      },
      {
        title: "Collection route mapping is incomplete",
        symptom: "Legacy Liquid collection URLs, filters, or campaign paths are missing from the Hydrogen plan.",
        fix: "Map old routes, new routes, redirects, canonicals, filters, and sitemap entries together.",
        post: {
          href: "/liquid-to-hydrogen-migration",
          label: "Shopify Hydrogen route mapping",
          note: "Migration guide",
        },
        template: {
          href: "/shopify-hydrogen-templates#seo-migration-checklist",
          label: "SEO migration checklist",
          note: "Checklist",
        },
      },
      {
        title: "Migration breaks more than the template layer",
        symptom: "Collection browsing, apps, analytics, redirects, and checkout assumptions move at once.",
        fix: "Name each breakage surface before implementation starts.",
        post: {
          href: "/liquid-to-hydrogen-migration",
          label: "What breaks moving from Liquid to Hydrogen",
          note: "Migration guide",
        },
        template: {
          href: "/shopify-hydrogen-templates#launch-qa-checklist",
          label: "Launch QA checklist",
          note: "Checklist",
        },
      },
    ],
  },
  {
    id: "metaobjects",
    title: "Metaobjects and content models",
    description: "Structured content, page-specific sections, responsive copy, and merchant editability.",
    entries: [
      {
        title: "Desktop and mobile hero titles render differently",
        symptom: "A content field mismatch changes responsive DOM behavior in production.",
        fix: "Normalize field comparison and verify the active metaobject entry before blaming CSS.",
        post: {
          href: "/blog/shopify-hydrogen-hero-title-mobile-desktop-metaobject-mismatch",
          label: "Hero title metaobject mismatch",
          note: "Production note",
        },
        template: {
          href: "/shopify-hydrogen-templates#pdp-requirements",
          label: "PDP requirements",
          note: "Checklist",
        },
      },
      {
        title: "Page-specific sections are hardcoded",
        symptom: "Campaign or product storytelling content requires developer releases for normal edits.",
        fix: "Move repeatable route-specific content into structured Shopify metaobjects when it needs merchant ownership.",
        post: {
          href: "/blog/shopify-hydrogen-metaobjects-page-specific-sections",
          label: "Metaobjects page-specific sections",
          note: "Production note",
        },
        template: {
          href: "/shopify-hydrogen-templates#scope-brief",
          label: "Scope brief",
          note: "Checklist",
        },
      },
      {
        title: "Metaobjects are used as an unplanned CMS replacement",
        symptom: "Content models grow without route ownership, validation, or Storefront API cost awareness.",
        fix: "Define fields, ownership, fallback behavior, and route usage before implementation.",
        post: {
          href: "/resources",
          label: "Hydrogen resources",
          note: "Resource hub",
        },
        template: {
          href: "/shopify-hydrogen-templates#scope-brief",
          label: "Scope brief",
          note: "Checklist",
        },
      },
    ],
  },
] as const satisfies readonly IssueCategory[];

export const HYDROGEN_TEMPLATES = [
  {
    id: "scope-brief",
    title: "Hydrogen scope brief",
    summary: "Clarify whether the project is a package build, audit, migration, cleanup, support retainer, or no rebuild.",
    bestFor: "Early buyer conversations and stakeholder alignment.",
    relatedIssueHref: "/shopify-hydrogen-issues#cart-checkout",
    relatedGuideHref: "/shopify-hydrogen-packages",
    checklist: [
      "Current storefront URL and platform state",
      "Primary commercial pressure behind the work",
      "Required page types and route count",
      "Product, collection, cart, account, and content features",
      "Apps that must continue working",
      "SEO, analytics, and launch-risk constraints",
      "Internal owner after launch",
    ],
  },
  {
    id: "route-map",
    title: "Route map",
    summary: "Map old Liquid routes, new Hydrogen routes, redirects, canonicals, and sitemap behavior.",
    bestFor: "Migration and SEO-safe launch planning.",
    relatedIssueHref: "/shopify-hydrogen-issues#collections",
    relatedGuideHref: "/liquid-to-hydrogen-migration",
    checklist: [
      "Home, PDP, collection, content, account, search, cart, and policy routes",
      "Legacy URLs that need 301 redirects",
      "Canonical target for each route family",
      "Indexable versus noindex pages",
      "Sitemap inclusion and last-modified source",
      "Preview URL and production URL verification",
    ],
  },
  {
    id: "seo-migration-checklist",
    title: "SEO migration checklist",
    summary: "Protect crawlability when moving from Liquid to a custom Hydrogen app.",
    bestFor: "Pre-launch SEO QA and Search Console risk reduction.",
    relatedIssueHref: "/shopify-hydrogen-issues#seo",
    relatedGuideHref: "/shopify-hydrogen-seo",
    checklist: [
      "Rendered H1, title, description, and primary content",
      "Canonical URL and alternate behavior",
      "Article, Product, BreadcrumbList, Person, and Organization JSON-LD where relevant",
      "Sitemap.xml and robots.txt production checks",
      "Redirect list for legacy paths",
      "No-JavaScript content check for important content",
      "Search Console annotation slot after launch",
    ],
  },
  {
    id: "launch-qa-checklist",
    title: "Launch QA checklist",
    summary: "Check preview and production before a Hydrogen release is treated as done.",
    bestFor: "Release closeout and stakeholder handoff.",
    relatedIssueHref: "/shopify-hydrogen-issues#performance",
    relatedGuideHref: "/shopify-hydrogen-support-retainer",
    checklist: [
      "Build, lint, typecheck, test, content validation",
      "Desktop and mobile first-viewport scan",
      "Core routes return 200 on preview and production",
      "Cart and checkout handoff",
      "Lead forms and tracked CTAs",
      "Analytics events without PII",
      "Sitemap, robots, and source HTML checks",
      "Rollback owner and branch cleanup",
    ],
  },
  {
    id: "pdp-requirements",
    title: "PDP requirements",
    summary: "Keep product page content, options, media, availability, and schema in one reliable state.",
    bestFor: "Custom product-page builds and bug triage.",
    relatedIssueHref: "/shopify-hydrogen-issues#pdp",
    relatedGuideHref: "/custom-shopify-hydrogen-storefront",
    checklist: [
      "Product title, description, vendor, media, price, and availability",
      "Selected options and URL state",
      "Fallback variant rule",
      "Product JSON-LD matches visible state",
      "Server-rendered primary content",
      "Cross-sell, size, warranty, or product education data source",
      "No-JavaScript sanity check",
    ],
  },
  {
    id: "analytics-events",
    title: "Analytics event map",
    summary: "Name the events that matter without collecting personal data.",
    bestFor: "GA4, Vercel Analytics, internal click, and outbound click reporting.",
    relatedIssueHref: "/shopify-hydrogen-issues#cart-checkout",
    relatedGuideHref: "/shopify-hydrogen-seo",
    checklist: [
      "Internal content card clicks",
      "Outbound profile, source, and Udemy clicks",
      "CTA clicks by source route",
      "Checklist copy events by template id",
      "Lead funnel start and submit status",
      "Package CTA clicks",
      "No email, phone, name, or free-text message in event params",
    ],
  },
  {
    id: "content-model-brief",
    title: "Content model brief",
    summary: "Decide which content belongs in product fields, metaobjects, static code, or an external CMS.",
    bestFor: "Metaobject and merchant-editability planning.",
    relatedIssueHref: "/shopify-hydrogen-issues#metaobjects",
    relatedGuideHref: "/blog/shopify-hydrogen-metaobjects-page-specific-sections",
    checklist: [
      "Field owner and update frequency",
      "Route or component that consumes the field",
      "Fallback copy when data is missing",
      "Server-rendering requirement",
      "Translation or market variance",
      "Storefront API query cost awareness",
      "Preview workflow for content changes",
    ],
  },
  {
    id: "retainer-handoff",
    title: "Post-launch retainer handoff",
    summary: "Turn a launch into a maintainable application instead of an abandoned custom storefront.",
    bestFor: "Ongoing support, monitoring, and next-sprint planning.",
    relatedIssueHref: "/shopify-hydrogen-issues#performance",
    relatedGuideHref: "/shopify-hydrogen-support-retainer",
    checklist: [
      "Known issues and deferred scope",
      "Deployment owner and environment rules",
      "Dependency update cadence",
      "SEO and analytics monitoring owner",
      "Merchandising and content update process",
      "Bug triage severity definitions",
      "Monthly improvement backlog",
    ],
  },
] as const satisfies readonly TemplateResource[];

export const COURSE_MODULES = [
  {
    id: "fundamentals",
    title: "Hydrogen fundamentals",
    outcome: "Understand what Hydrogen changes compared with a Shopify theme.",
    guides: [
      { href: "/what-is-hydrogen", label: "What is Hydrogen?", note: "Plain-English fundamentals." },
      { href: "/shopify-hydrogen-vs-liquid", label: "Hydrogen vs Liquid", note: "Decision comparison." },
      { href: "/when-not-to-use-hydrogen", label: "When not to use Hydrogen", note: "Commercial sanity check." },
    ],
    productionNotes: [
      { href: "/shopify-hydrogen-vs-liquid", label: "Hydrogen vs Liquid production framing", note: "Decision comparison." },
    ],
    templates: [
      { href: "/shopify-hydrogen-templates#scope-brief", label: "Scope brief", note: "Copyable checklist." },
    ],
  },
  {
    id: "routes-and-data",
    title: "Routes, data loading, and Storefront API",
    outcome: "Move from tutorial routes to production route and data ownership.",
    guides: [
      { href: "/shopify-hydrogen-examples", label: "Hydrogen examples", note: "Pattern directory." },
      { href: "/liquid-to-hydrogen-migration", label: "Migration service", note: "Route and data planning." },
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO", note: "Rendered content and crawl signals." },
    ],
    productionNotes: [
      { href: "/blog/shopify-hydrogen-product-description-ssr-seo", label: "Product description SSR", note: "PDP data example." },
      { href: "/blog/shopify-hydrogen-collection-out-of-stock-products-hidden", label: "Collection pagination", note: "Collection data example." },
    ],
    templates: [
      { href: "/shopify-hydrogen-templates#route-map", label: "Route map", note: "Copyable checklist." },
      { href: "/shopify-hydrogen-templates#pdp-requirements", label: "PDP requirements", note: "Copyable checklist." },
    ],
  },
  {
    id: "seo-and-launch",
    title: "SEO and launch QA",
    outcome: "Verify routes, metadata, schema, sitemap, robots, analytics, and production behavior.",
    guides: [
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO", note: "Main SEO guide." },
      { href: "/shopify-hydrogen-issues", label: "Issue library", note: "Symptom to fix index." },
      { href: "/shopify-hydrogen-support-retainer", label: "Support retainer", note: "Post-launch ownership." },
    ],
    productionNotes: [
      { href: "/shopify-hydrogen-seo", label: "Sitemap and robots", note: "Launch crawl guide." },
      { href: "/shopify-hydrogen-seo", label: "JSON-LD product state", note: "Schema state guide." },
    ],
    templates: [
      { href: "/shopify-hydrogen-templates#seo-migration-checklist", label: "SEO migration checklist", note: "Copyable checklist." },
      { href: "/shopify-hydrogen-templates#launch-qa-checklist", label: "Launch QA checklist", note: "Copyable checklist." },
    ],
  },
  {
    id: "production-judgment",
    title: "Production judgment",
    outcome: "Decide when to ship, when to audit, and when Liquid remains the better answer.",
    guides: [
      { href: "/shopify-hydrogen-cost", label: "Hydrogen cost", note: "Budget ranges and scope drivers." },
      { href: "/shopify-hydrogen-audit", label: "Scope review", note: "Audit path when risk is unclear." },
      { href: "/case-studies", label: "Case studies", note: "Production proof." },
    ],
    productionNotes: [
      { href: "/blog/shopify-b2b-partner-pricing-without-separate-storefront", label: "Partner pricing", note: "Pricing boundary note." },
      { href: "/blog/shopify-hydrogen-hero-title-mobile-desktop-metaobject-mismatch", label: "Metaobject title mismatch", note: "Content boundary note." },
    ],
    templates: [
      { href: "/shopify-hydrogen-templates#content-model-brief", label: "Content model brief", note: "Copyable checklist." },
      { href: "/shopify-hydrogen-templates#retainer-handoff", label: "Retainer handoff", note: "Copyable checklist." },
    ],
  },
] as const satisfies readonly CourseModule[];
