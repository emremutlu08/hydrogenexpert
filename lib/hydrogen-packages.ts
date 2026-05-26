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
] as const;

export const PRICE_DRIVER_ITEMS = [
  "Number of page templates",
  "PDP complexity",
  "Collection filtering",
  "Search",
  "Cart UX",
  "Customer accounts",
  "App integrations",
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

export const LIQUID_VS_HYDROGEN_DECISION = [
  {
    title: "Choose Liquid when",
    items: [
      "You only need theme polish",
      "You need 2-3 sections",
      "The catalog is simple",
      "The team wants theme editor control",
      "Checkout is the real problem",
      "Budget must go to ads, retention, or photography",
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
    ],
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
      "No. It is cheaper because the scope is smaller, the workflow is productized, and AI-assisted development reduces repetitive implementation time. Senior review, architecture judgment, and launch QA still matter.",
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
  "I use AI-assisted workflows to move faster on repetitive implementation work: component scaffolding, content structure, QA checklists, route planning, and documentation drafts.",
  "The important decisions are still senior-owned: storefront architecture, Shopify data flow, SEO-safe rendering, cart behavior, performance, and launch readiness.",
  "AI reduces implementation drag. It does not replace commercial judgment.",
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
