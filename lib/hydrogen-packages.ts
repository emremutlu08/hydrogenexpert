export interface HydrogenBuildPackage {
  id: "starter" | "standard" | "growth" | "custom";
  name: string;
  price: string;
  bestFor: string;
  budgetOption: {
    value: "starter_2k" | "standard_3k_35k" | "growth_45k_5k" | "custom_5k_plus";
    label: string;
    thankYouMessage?: string;
  };
  proofPath: {
    href: string;
    label: string;
    note: string;
  };
  includes: readonly string[];
  notIncluded: readonly string[];
}

export const PACKAGE_ROUTE = "/shopify-hydrogen-packages";

export const PACKAGE_PAGE_SEO = {
  title: "Shopify Hydrogen Packages | $2K-$5K Storefront Builds",
  description:
    "Fixed-scope Shopify Hydrogen storefront packages from $2K-$5K. Starter, Standard, and Growth builds priced by project requirements, not traffic or pageviews.",
  path: PACKAGE_ROUTE,
} as const;

export const HYDROGEN_BUILD_PACKAGES: readonly HydrogenBuildPackage[] = [
  {
    id: "starter",
    name: "Hydrogen Starter Storefront",
    price: "Starting at $2,000",
    bestFor: "A lean custom storefront with the core shopping flow.",
    budgetOption: {
      value: "starter_2k",
      label: "Around $2K - Starter Storefront",
      thankYouMessage:
        "Starter requests are reviewed around core ecommerce flow: home, listing, PDP, cart drawer, checkout handoff, account entry, SEO baseline, and launch readiness.",
    },
    proofPath: {
      href: "/case-studies/kirazev-shopify-liquid",
      label: "Scope discipline proof",
      note: "Liquid proof shows when a smaller theme-native path should beat a Starter build.",
    },
    includes: [
      "Home / landing page",
      "Collection / listing page",
      "Product detail page",
      "Add to cart",
      "Cart drawer",
      "Shopify checkout handoff",
      "Basic account entry",
      "Header / footer",
      "1 reusable content page template",
      "Basic SEO setup",
      "Oxygen deployment guidance",
    ],
    notIncluded: [
      "Custom checkout",
      "Advanced filtering",
      "Complex search",
      "Subscriptions",
      "B2B",
      "Multi-language",
      "Full CMS",
      "Large migration",
    ],
  },
  {
    id: "standard",
    name: "Hydrogen Standard Storefront",
    price: "$3,000-$3,500",
    bestFor: "DTC brands that need a more complete storefront than the Starter package.",
    budgetOption: {
      value: "standard_3k_35k",
      label: "$3K-$3.5K - Standard Storefront",
    },
    proofPath: {
      href: "/case-studies/rebel-bunny-shopify-hydrogen",
      label: "DTC flow proof",
      note: "Rebel Bunny maps content, cart UX, and partner interest to a focused storefront.",
    },
    includes: [
      "Everything in Starter",
      "Search results page",
      "Basic filters and sorting",
      "About / FAQ / shipping templates",
      "Blog or education template",
      "Basic review app integration",
      "Basic analytics events",
      "JSON-LD / metadata baseline",
      "Improved mobile cart UX",
    ],
    notIncluded: [
      "Advanced search systems",
      "Subscription architecture",
      "B2B or wholesale logic",
      "Multi-language setup",
      "Large catalog migration",
    ],
  },
  {
    id: "growth",
    name: "Hydrogen Growth Storefront",
    price: "$4,500-$5,000",
    bestFor: "Brands that need a lean but more flexible Hydrogen storefront.",
    budgetOption: {
      value: "growth_45k_5k",
      label: "$4.5K-$5K - Growth Storefront",
    },
    proofPath: {
      href: "/case-studies/bayam-jewelry-shopify-hydrogen",
      label: "Growth storefront proof",
      note: "Bayam maps premium catalog discovery, trust UX, and structured commerce surfaces.",
    },
    includes: [
      "Everything in Standard",
      "Metaobjects-based content blocks",
      "Marketing landing section system",
      "1-2 third-party integrations",
      "Product recommendation section",
      "Collection intro / subcategory logic",
      "Performance pass",
      "Limited route migration",
      "Basic redirect planning",
      "Launch QA checklist",
    ],
    notIncluded: [
      "Full CMS architecture",
      "Complex app replacement",
      "Advanced filters",
      "Custom product builder",
      "SEO-risky large migration",
    ],
  },
  {
    id: "custom",
    name: "Custom Hydrogen Scope",
    price: "$5K+",
    bestFor:
      "Projects with migration risk, app complexity, B2B, large catalogs, advanced search, or custom product logic.",
    budgetOption: {
      value: "custom_5k_plus",
      label: "$5K+ - Custom scope",
      thankYouMessage:
        "Custom requests are reviewed around migration risk, integrations, advanced search, B2B, subscriptions, content architecture, SEO preservation, and launch QA.",
    },
    proofPath: {
      href: "/case-studies/eveshop-shopify-hydrogen",
      label: "Scale proof",
      note: "EveShop supports custom Hydrogen judgment when scale and migration risk are higher.",
    },
    includes: ["Scoped after review."],
    notIncluded: [
      "Fixed-price package guarantee",
      "Unlimited feature requests",
      "Custom checkout inside package pricing",
    ],
  },
] as const;

export const PACKAGE_BUDGET_RANGE_OPTIONS = HYDROGEN_BUILD_PACKAGES.map(
  (buildPackage) => ({
    value: buildPackage.budgetOption.value,
    label: buildPackage.budgetOption.label,
  }),
);

export const BUDGET_RANGE_OPTIONS = [
  { value: "not_set", label: "Not set yet" },
  ...PACKAGE_BUDGET_RANGE_OPTIONS,
  { value: "retainer", label: "Retainer / ongoing support" },
  { value: "not_sure", label: "Not sure yet" },
] as const;

export function getBudgetRangeReviewMessage(budget?: string) {
  return (
    HYDROGEN_BUILD_PACKAGES.find(
      (buildPackage) => buildPackage.budgetOption.value === budget,
    )?.budgetOption.thankYouMessage ?? null
  );
}

export const PACKAGE_PRICING_PRINCIPLE =
  "Pricing is based on project scope, not traffic, not pageviews, or store size.";

export const PACKAGE_SCOPE_COPY = [
  "A lean Hydrogen storefront can start around $2,000 when the scope is clear: core pages, product flow, cart drawer, Shopify checkout handoff, and basic account entry.",
  "More complex work increases the price when it adds custom filters, integrations, content models, migration risk, analytics, SEO preservation, or post-launch support.",
  "The package range is not a promise to compress a full enterprise replatform into $5K. It is a bounded first-launch scope before custom complexity, agency scope, or no-rebuild recommendations take over.",
] as const;

export const PRICE_DRIVER_ITEMS = [
  "Number of page templates",
  "PDP complexity",
  "Collection filtering",
  "Search",
  "Cart UX",
  "Customer accounts",
  "App integrations",
  "ERP / POS / WMS boundaries",
  "SEO migration",
  "Analytics events",
  "CMS / metaobjects",
  "Design complexity",
  "Launch QA",
] as const;

export const TWO_K_BUILD_IS = [
  "A focused first version of a custom Shopify Hydrogen storefront.",
  "It covers the core shopping path: landing page, listing page, product detail page, cart drawer, checkout handoff, basic account entry, and launch-ready structure.",
] as const;

export const TWO_K_BUILD_IS_NOT = [
  "Full replatforming project",
  "Full UX redesign",
  "Complex app migration",
  "Custom checkout",
  "Advanced search system",
  "B2B build",
  "Subscription architecture",
  "Large-catalog SEO migration",
] as const;

export const PACKAGE_SCOPE_BOUNDARY_COMPARISON = [
  {
    title: "Fixed-scope Hydrogen package",
    budgetSignal: "$2K-$5K",
    bestWhen:
      "The store needs a focused first custom storefront around core commerce routes and clear requirements.",
    buyerMove:
      "Choose Starter, Standard, or Growth when page templates, product flow, cart behavior, SEO baseline, and launch QA are bounded.",
    caution:
      "Do not add advanced search, complex apps, custom checkout, B2B, subscriptions, or large migration work to a fixed package.",
  },
  {
    title: "Custom Hydrogen scope",
    budgetSignal: "$5K+",
    bestWhen:
      "The project has migration risk, large catalog behavior, app replacement, advanced search, B2B, subscriptions, or custom product logic.",
    buyerMove:
      "Start with a scope review so the estimate is tied to templates, integrations, SEO risk, analytics, QA, and support.",
    caution:
      "Do not force a complex project into Starter pricing just to make the first quote look smaller.",
  },
  {
    title: "Full agency program",
    budgetSignal: "Agency scope",
    bestWhen:
      "The brand needs strategy, UX, creative, copy, CRO, PM, QA, retention, integrations, and engineering moving in parallel.",
    buyerMove:
      "Use a serious Shopify Plus or headless agency when coordination and multi-discipline delivery are the real problem.",
    caution:
      "Do not buy a full agency apparatus when the actual blocker is a narrow Hydrogen implementation decision.",
  },
  {
    title: "Liquid cleanup or no rebuild",
    budgetSignal: "Smaller scope",
    bestWhen:
      "The theme can still solve the commercial problem with better sections, performance work, app cleanup, or clearer content.",
    buyerMove:
      "Keep Liquid when a custom storefront would add application maintenance without enough business return.",
    caution:
      "Do not move to Hydrogen because competitors mention headless if the current store has a simpler path.",
  },
] as const;

export const LIQUID_VS_HYDROGEN_DECISION = [
  {
    title: "Choose Liquid when",
    items: [
      "You only need theme polish",
      "You need 2-3 merchant-editable sections",
      "The catalog is simple",
      "The team wants theme editor control",
      "Checkout is the real problem",
      "Budget must go to ads, retention, or photography",
      "The team cannot maintain a custom storefront yet",
    ],
  },
  {
    title: "Choose Hydrogen Starter when",
    items: [
      "You want a clean React storefront",
      "You need more control than a theme",
      "You can accept fixed scope",
      "You want core ecommerce pages first",
      "You are comfortable with developer-owned changes",
      "SEO and analytics risk are low or already mapped",
    ],
  },
  {
    title: "Choose Hydrogen Growth when",
    items: [
      "Product discovery matters",
      "Content and commerce need to live together",
      "Cart UX matters",
      "Metaobjects or custom components matter",
      "The storefront must support future iteration",
      "The team can fund post-launch application ownership",
    ],
  },
] as const;

export const LIQUID_CLEANUP_SCOPE = {
  includes: [
    "Focused theme sections or template improvements",
    "Homepage, collection, PDP, or landing page UX cleanup",
    "Basic performance and app-bloat review",
    "Merchant-editable content structure inside the current theme",
    "A recommendation to stay on Liquid when Hydrogen would be overkill",
  ],
  excludes: [
    "Tiny one-off CSS fixes",
    "Full brand, CRO, or creative agency work",
    "Complex app replacement",
    "Custom checkout",
    "Large migration or headless rebuild scope",
  ],
} as const;

export const SCOPE_REVIEW_INPUTS = [
  {
    label: "Current store",
    detail: "Store URL, current Shopify setup, and whether the storefront is Liquid, Hydrogen, or another headless stack.",
  },
  {
    label: "Commercial pressure",
    detail: "What feels slow, limiting, expensive, hard to edit, or risky to launch.",
  },
  {
    label: "Scope facts",
    detail: "Design status, product count, required pages, must-have features, and content readiness.",
  },
  {
    label: "Risk signals",
    detail: "Important URLs, SEO traffic, analytics events, app dependencies, account behavior, and checkout assumptions.",
  },
  {
    label: "Operating model",
    detail: "Timeline, budget range, internal owner, post-launch support needs, and whether a full agency team is required.",
  },
] as const;

export const PACKAGE_READINESS_FACTORS = [
  {
    factor: "Design status",
    starter: "Existing design or light direction is enough.",
    custom: "New UX system, brand work, or unclear design ownership.",
  },
  {
    factor: "Product and catalog shape",
    starter: "Simple catalog and predictable product templates.",
    custom: "Large catalog, complex variants, search, filters, or merchandising rules.",
  },
  {
    factor: "Integrations",
    starter: "None or 1-2 simple frontend integrations.",
    custom: "ERP, POS, WMS, subscriptions, B2B, loyalty, advanced reviews, or custom app behavior.",
  },
  {
    factor: "SEO and analytics risk",
    starter: "Low-risk new build or approved route map.",
    custom: "Existing organic traffic, redirects, schema, analytics, consent, or migration pressure.",
  },
  {
    factor: "Post-launch ownership",
    starter: "Clear owner and limited first-release backlog.",
    custom: "No support model, frequent campaigns, or multiple teams changing storefront behavior.",
  },
] as const;

export const MIGRATION_SEO_RISK_CHECKLIST = [
  "Route and redirect map for important Liquid URLs",
  "Canonical rules for products, collections, variants, filters, and search parameters",
  "Metadata and Open Graph output for commercial pages",
  "JSON-LD that matches rendered product and article content",
  "Server-rendered product, collection, and policy content before JavaScript finishes",
  "Sitemap and robots output on the final production domain",
  "Internal links from case studies, services, articles, and core navigation",
  "Analytics, consent, cart, checkout handoff, and launch-monitoring QA",
] as const;

export const SENIOR_SPECIALIST_AGENCY_COMPARISON = [
  {
    path: "Direct senior specialist",
    bestWhen:
      "The main risk is Hydrogen judgment, route/API implementation, SEO-safe launch, performance cleanup, or a bounded fixed-scope build.",
    caution:
      "Not the right container for brand strategy, paid media, large creative production, or many delivery pods in parallel.",
  },
  {
    path: "Full Shopify agency",
    bestWhen:
      "The brand needs strategy, UX, creative, copy, CRO, PM, QA, retention, integrations, and engineering moving together.",
    caution:
      "Can add overhead if the actual blocker is a narrow technical storefront decision.",
  },
  {
    path: "Liquid cleanup or no rebuild",
    bestWhen:
      "The theme can solve the commercial problem with smaller sections, app cleanup, performance work, or clearer content.",
    caution:
      "Should not be framed as a downgrade when it protects budget and maintenance capacity.",
  },
] as const;

export const HYDROGEN_OWNERSHIP_COST_FACTORS = [
  {
    area: "Code ownership",
    detail:
      "Hydrogen behaves like an application: routes, components, data loading, dependencies, and releases need an owner.",
  },
  {
    area: "Content editing",
    detail:
      "Merchant editing needs a deliberate model: Liquid sections, Shopify metaobjects, a visual Hydrogen builder, or custom components.",
  },
  {
    area: "Commerce integrations",
    detail:
      "Reviews, subscriptions, loyalty, search, analytics, consent, and account behavior need headless-compatible paths.",
  },
  {
    area: "Launch safety",
    detail:
      "SEO, sitemap, robots, analytics, checkout handoff, and rollback checks belong in the scope before launch week.",
  },
] as const;

export const INTEGRATION_COMPLEXITY_BOUNDARIES = [
  {
    signal: "Reviews, email popup, or simple analytics only",
    scopeMove: "Usually Standard or Growth if the app has a clear frontend path.",
  },
  {
    signal: "Subscriptions, loyalty, search, B2B, wholesale, or customer-account logic",
    scopeMove: "Treat as custom scope until product state, account state, cart behavior, and checkout handoff are proven.",
  },
  {
    signal: "ERP, POS, WMS, PIM, custom middleware, or multi-system inventory",
    scopeMove: "Plan a larger integration review or bring in a specialist partner instead of squeezing it into a package.",
  },
] as const;

export const HYDROGEN_TOOLING_DECISIONS = [
  {
    title: "Stay theme-native",
    trigger:
      "The team wants merchant editing, simple sections, and low maintenance more than custom storefront control.",
    strongerMove:
      "Use Liquid cleanup, theme sections, or a smaller performance and UX pass before funding Hydrogen.",
  },
  {
    title: "Use a visual Hydrogen builder",
    trigger:
      "Marketing needs editable Hydrogen pages and reusable sections, but the storefront should still stay close to code.",
    strongerMove:
      "Evaluate visual Hydrogen builder paths such as Pack, Weaverse, or a similar DXP before building a custom CMS layer.",
  },
  {
    title: "Use Shopify content primitives",
    trigger:
      "The store needs structured product, collection, or landing content without adding a separate editorial system.",
    strongerMove:
      "Start with Shopify metaobjects, metafields, and a small component system before adding external complexity.",
  },
  {
    title: "Build custom Hydrogen components",
    trigger:
      "Product discovery, cart UX, content-commerce layout, or integration behavior cannot be handled safely by a theme or builder.",
    strongerMove:
      "Scope custom routes and components as Starter, Standard, Growth, or Custom based on actual requirements.",
  },
] as const;

export const PRICING_FAQS = [
  {
    question: "How can a Hydrogen build start at $2,000?",
    answer:
      "Because the scope is limited. A Starter build focuses on the core ecommerce flow and avoids complex migration, advanced filters, app-heavy logic, custom checkout, and full CMS architecture.",
  },
  {
    question: "Is this cheaper because the quality is lower?",
    answer:
      "No. It is cheaper because the first launch is smaller and the scope is fixed before implementation starts. Senior review, architecture judgment, and launch QA still matter.",
  },
  {
    question: "Do you price by traffic or monthly visitors?",
    answer:
      "No. Pricing is based on project requirements: page templates, features, integrations, design complexity, migration risk, analytics, and launch support.",
  },
  {
    question: "Can I add more features later?",
    answer:
      "Yes. The first build should stay lean. Additional filters, search, content sections, integrations, and support can be added later as a Growth scope or retainer.",
  },
  {
    question: "When should I hire a full agency instead of using a fixed-scope package?",
    answer:
      "Use a full agency when the project needs brand strategy, UX design, copy, CRO, project management, QA, retention, integrations, and multiple delivery teams in parallel. Use a fixed-scope package when the main need is a bounded Hydrogen storefront path with direct senior implementation.",
  },
  {
    question: "Do I need Shopify Plus?",
    answer:
      "No. Hydrogen can be useful outside Shopify Plus, but the business case matters. If Liquid is enough, I will say so.",
  },
  {
    question: "Will checkout be custom?",
    answer:
      "No. The storefront hands off to Shopify checkout. Custom checkout work is not included in Starter, Standard, or Growth builds.",
  },
] as const;

export const AI_WORKFLOW_COPY = [
  "The package price is tied to a bounded first launch: agreed routes, agreed components, known integrations, and clear launch checks.",
  "The important decisions stay senior-owned: storefront architecture, Shopify data flow, SEO-safe rendering, cart behavior, performance, and launch readiness.",
  "If the scope starts to look like a migration, app-heavy rebuild, or broad agency project, it should move out of the fixed package instead of being hidden inside it.",
] as const;

export const AUDIT_REVIEW_OPTIONS = [
  {
    name: "Free first-pass scope review",
    price: "$0",
    bestFor:
      "Send the store URL, desired pages, current Shopify setup, and required features. I will tell you whether the project looks like Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild.",
  },
  {
    name: "Paid Scope & Risk Review",
    price: "$300-$750",
    bestFor:
      "Best before a build when SEO, apps, migration, analytics, or unclear requirements could affect the estimate. This can be credited toward the build if we work together.",
  },
  {
    name: "Full Hydrogen Fit & Risk Audit",
    price: "$1K-$2K+",
    bestFor:
      "For larger stores, migration-heavy projects, or teams comparing Hydrogen against Liquid, agency scope, or internal development.",
  },
] as const;

export const CASE_STUDY_PACKAGE_RELEVANCE = {
  eveshop: "Custom / Enterprise Hydrogen proof",
  bayam: "Growth Storefront proof - premium catalog, discovery, trust UX",
  "rebel-bunny": "Growth Storefront proof - DTC, education, partner flow, cart UX",
  kirazev: "Liquid proof - when a fast theme-native build is the better answer",
  clohi: "Liquid proof - smaller Shopify storefront execution",
} as const;
