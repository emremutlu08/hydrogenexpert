export interface DecisionPageData {
  path: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  body: string;
  sections: readonly {
    eyebrow: string;
    title: string;
    body: readonly string[];
  }[];
  decisionRows: readonly {
    signal: string;
    move: string;
    caution: string;
  }[];
  links: readonly {
    href: string;
    label: string;
    note: string;
  }[];
  faqs?: readonly {
    question: string;
    answer: string;
  }[];
  cta: {
    headline: string;
    subtext: string;
    sourceKind: string;
  };
  comparisonRows?: readonly {
    dimension: string;
    liquid: string;
    hydrogen: string;
    decisionRule: string;
  }[];
  reviewedAt?: string;
}

export const DECISION_PAGES = {
  "/shopify-hydrogen-agency-usa": {
    path: "/shopify-hydrogen-agency-usa",
    navLabel: "US-Friendly Hydrogen Builds",
    metaTitle: "US-Friendly Shopify Hydrogen Builds | Emre Mutlu",
    metaDescription:
      "US-friendly remote Shopify Hydrogen storefront builds with clear USD pricing, async communication, and fixed-scope packages from $2K-$5K.",
    eyebrow: "US-friendly remote collaboration",
    title: "US-friendly Shopify Hydrogen storefront builds without agency overhead",
    description:
      "I am not based in the United States and I do not pretend to have a local US office. I work remotely with English-speaking Shopify brands that want senior Hydrogen implementation, clear USD pricing, async-friendly communication, and fixed-scope storefront builds.",
    body:
      "US buyers are welcome, but the claim stays honest: no fake office, no local-agency costume, no account-manager layer. The offer is direct senior Shopify Hydrogen delivery with fixed-scope packages priced by project requirements.",
    sections: [
      {
        eyebrow: "Collaboration model",
        title: "Why US brands still hire remote Hydrogen specialists.",
        body: [
          "US Shopify teams often need specialized Hydrogen judgment more than they need another broad vendor list. A focused remote model works when the team can share storefront context, meet asynchronously, and make decisions around a clear commercial pressure.",
          "The practical reasons are clear USD pricing, direct senior developer access, no account manager layer, async-friendly updates, Upwork-friendly collaboration if needed, faster fixed-scope delivery, and lower overhead than a traditional agency.",
        ],
      },
      {
        eyebrow: "Buyer fit",
        title: "What a US buyer should expect before the first call.",
        body: [
          "The first useful step is not a sales deck. It is the store URL, current storefront stack, what feels expensive or slow to change, and which commercial decision needs support.",
          "Strong fits usually need a Starter, Standard, Growth, or Custom Hydrogen build, Liquid to Hydrogen migration review, performance or SEO cleanup, Oxygen/deployment confidence, or ongoing support for an existing Hydrogen storefront.",
          "The same model works for UK and other English-speaking buyers when async scoping, written decisions, clear USD pricing, and direct senior delivery matter more than a local-office claim.",
        ],
      },
      {
        eyebrow: "What this is not",
        title: "No local-office claim, no full-service agency claim.",
        body: [
          "This page does not claim a US office. It does not offer paid media, brand strategy, or low-cost theme support. It exists for US buyers comparing agency options who may be better served by direct Hydrogen expertise and fixed-scope package pricing.",
          "Bayam Jewelry gives this page real US relevance because the work sits in a New York luxury commerce context, but the page stays conservative and does not invent local presence.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "You need Hydrogen-specific judgment, not a full agency stack.",
        move: "Use a fixed-scope package or senior custom scope.",
        caution: "Choose a traditional agency if you need creative, ads, content, and engineering all bundled.",
      },
      {
        signal: "Stakeholders need USD budget sanity before rebuild approval.",
        move: "Start with $2K-$5K package review.",
        caution: "Avoid wide rebuild ranges with undefined SEO, app, and analytics risk.",
      },
      {
        signal: "The buyer is comparing US or UK agencies with specialist support.",
        move: "Compare agency scope against direct senior Hydrogen ownership.",
        caution: "Do not infer local office, partner status, or team capacity that is not claimed.",
      },
      {
        signal: "The project needs daily local office presence.",
        move: "Hire local or internal support.",
        caution: "This is a remote senior specialist model.",
      },
    ],
    links: [
      {
        href: "/case-studies/bayam-jewelry-shopify-hydrogen",
        label: "Bayam Jewelry case study",
        note: "New York luxury storefront relevance without fake location claims.",
      },
      {
        href: "/shopify-hydrogen-packages",
        label: "View $2K-$5K Hydrogen build packages",
        note: "Starter, Standard, Growth, and Custom scope in USD.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Hydrogen cost planning",
        note: "Scope-based price drivers and package boundaries.",
      },
    ],
    cta: {
      headline: "Send the store URL and the US buyer pressure.",
      subtext:
        "I will tell you whether the next move is Starter, Standard, Growth, Custom, optimization pass, retainer, or staying on Liquid.",
      sourceKind: "agency_usa_cta",
    },
  },
  "/shopify-hydrogen-fit-audit": {
    path: "/shopify-hydrogen-fit-audit",
    navLabel: "Hydrogen Scope Review",
    metaTitle: "Shopify Hydrogen Scope Review | Emre Mutlu",
    metaDescription:
      "Free first-pass Shopify Hydrogen scope review with optional paid risk review for SEO, apps, migration, analytics, and unclear requirements.",
    eyebrow: "Scope review offer",
    title: "Shopify Hydrogen scope review",
    description:
      "A free first-pass review before a brand spends build money.",
    body:
      "Most small builds do not need a full audit first. Start with a scope review, then use a paid Scope & Risk Review only when SEO, apps, migration, analytics, or unclear requirements could affect the estimate.",
    sections: [
      {
        eyebrow: "Deliverables",
        title: "What you receive.",
        body: [
          "Free first-pass recommendation on Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild based on store URL, desired pages, current setup, and required features.",
          "Optional paid Scope & Risk Review at $300-$750 when SEO, app dependencies, analytics, migration, integrations, or unclear requirements could change the build estimate.",
          "The best first message includes current stack, product count, design status, required integrations, important URLs, timeline, and whether the team can maintain a custom storefront after launch.",
        ],
      },
      {
        eyebrow: "Outcomes",
        title: "The review can recommend no rebuild.",
        body: [
          "A useful review is allowed to say stay on Liquid, refactor Liquid, run focused optimization, use a Starter package, move to Growth, or delay the rebuild. That is the entire point: the recommendation should protect the business, not sell Hydrogen by default.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "The team has clear desired pages and features.",
        move: "Start with free first-pass scope review.",
        caution: "Do not ask implementation vendors to price unknown risk as if it were clear scope.",
      },
      {
        signal: "Organic traffic, analytics, and apps are business-critical.",
        move: "Use paid Scope & Risk Review before final estimate.",
        caution: "These risks are harder to repair after launch.",
      },
      {
        signal: "The store only needs small theme improvements.",
        move: "Keep the scope in Liquid or optimization.",
        caution: "The audit should not manufacture a rebuild case.",
      },
    ],
    links: [
      {
        href: "/shopify-hydrogen-audit",
        label: "Scope review service",
        note: "The broader service page for scope review and audit search intent.",
      },
      {
        href: "/shopify-hydrogen-packages",
        label: "Build packages",
        note: "Starter, Standard, Growth, and Custom package details.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Migration page",
        note: "Use when the audit points toward migration.",
      },
    ],
    cta: {
      headline: "Send your store URL for a Hydrogen budget sanity check.",
      subtext:
        "I will review the commercial pressure and tell you whether the audit is the right first move, or whether Liquid is still the safer path.",
      sourceKind: "fit_audit_cta",
    },
  },
  "/shopify-hydrogen-maintenance-cost": {
    path: "/shopify-hydrogen-maintenance-cost",
    navLabel: "Hydrogen Maintenance Cost",
    metaTitle: "Shopify Hydrogen Maintenance Cost | Emre Mutlu",
    metaDescription:
      "Plain-English Shopify Hydrogen maintenance cost guide covering app ownership, dependencies, integrations, SEO, analytics, support, and when Liquid is cheaper.",
    eyebrow: "Ongoing cost",
    title: "Shopify Hydrogen maintenance cost is application ownership",
    description:
      "Hydrogen is not just a theme. The store needs someone to own code, dependencies, integrations, SEO, analytics, and release safety after launch.",
    body:
      "This page helps merchants understand the recurring cost side before they approve a custom storefront.",
    sections: [
      {
        eyebrow: "Operating model",
        title: "Hydrogen needs a real owner after launch.",
        body: [
          "Liquid themes can often be maintained through theme settings, app configuration, and smaller developer tasks. Hydrogen shifts more of the storefront into an application layer. That gives more control, but it also creates ongoing responsibility for code quality, data loading, route behavior, dependencies, and deployment.",
          "Maintenance cost depends on the pace of changes, app integrations, content model, product complexity, SEO monitoring, analytics needs, release QA, and how much internal capability the brand already has.",
          "The buyer should separate first-build cost from ownership cost. A cheap custom storefront can become expensive if nobody owns dependencies, releases, content editing, analytics, and app behavior after launch.",
        ],
      },
      {
        eyebrow: "Liquid can be better",
        title: "Cheaper and better is still a valid answer.",
        body: [
          "If the store has standard commerce needs, a manageable catalog, and no meaningful custom UX constraint, Liquid can be cheaper, safer, and easier to operate. Hydrogen earns its maintenance cost when it solves a real storefront constraint that the business can keep funding.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "The brand needs monthly feature work and technical review.",
        move: "Plan support retainer or internal ownership.",
        caution: "Do not launch Hydrogen with no post-launch owner.",
      },
      {
        signal: "App integrations and tracking change often.",
        move: "Budget ongoing development and QA.",
        caution: "Theme app assumptions may not carry into a custom storefront.",
      },
      {
        signal: "The roadmap is mostly content and simple merchandising.",
        move: "Prefer Liquid.",
        caution: "Application ownership may cost more than the upside.",
      },
    ],
    links: [
      {
        href: "/shopify-hydrogen-support-retainer",
        label: "Support retainer",
        note: "Ongoing senior Hydrogen support after launch.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Project cost",
        note: "Initial build ranges and price drivers.",
      },
      {
        href: "/when-not-to-use-hydrogen",
        label: "When not to use Hydrogen",
        note: "A sanity check before taking on maintenance cost.",
      },
    ],
    cta: {
      headline: "Need a maintenance reality check?",
      subtext:
        "Send the current storefront, roadmap pressure, and team model. I will tell you whether Hydrogen support is sensible or Liquid is still the better move.",
      sourceKind: "maintenance_cost_cta",
    },
  },
  "/shopify-hydrogen-vs-liquid": {
    path: "/shopify-hydrogen-vs-liquid",
    navLabel: "Hydrogen vs Liquid",
    metaTitle: "Shopify Hydrogen vs Liquid: When Headless Is Worth It",
    metaDescription:
      "Shopify Hydrogen vs Liquid comparison with a practical decision framework, Headless Readiness Scorecard, and guidance on when to stay on Liquid.",
    eyebrow: "Decision comparison",
    title: "Shopify Hydrogen vs Liquid: which should you actually build on?",
    description:
      "Liquid is the correct default for most merchants. Hydrogen earns its cost only when a specific storefront constraint is expensive enough to justify custom application ownership.",
    body:
      "This is not a Hydrogen-good, Liquid-bad comparison. The useful question is whether the current Shopify theme is actually blocking the buying journey, content model, product discovery, SEO control, or feature velocity in a way a cleaner Liquid path cannot solve.",
    reviewedAt: "2026-07-05",
    sections: [
      {
        eyebrow: "30-second answer",
        title: "Stay on Liquid unless Hydrogen has a job to do.",
        body: [
          "Liquid keeps the storefront close to Shopify's theme model and theme editor. For standard ecommerce needs, that usually means lower operating overhead, faster iteration, and fewer engineering dependencies.",
          "Hydrogen is Shopify's React Router-based headless stack for custom storefronts. It can give a team more control over routing, data loading, presentation, and application structure, but that control moves more responsibility into a codebase that needs an owner.",
          "The practical decision is not theme versus modern architecture. It is Liquid cleanup, no rebuild, fixed-scope Hydrogen, or custom Hydrogen based on the constraint the business can prove.",
        ],
      },
      {
        eyebrow: "Headless Readiness Scorecard",
        title: "Score the constraint before you budget the rebuild.",
        body: [
          "Give Hydrogen a point only when the current theme is blocking a real commercial requirement: custom product discovery, complex content-commerce journeys, app replacement, SEO-safe migration control, application-like storefront behavior, or a team that can maintain a React storefront after launch.",
          "Subtract points when the need is mostly visual polish, a few merchant-editable sections, app cleanup, a faster short-term launch, or a team that would need a developer for every routine marketing change.",
          "If the score is unclear, the safer first step is a Hydrogen fit audit or scope review. The answer can still be Liquid cleanup or no rebuild.",
        ],
      },
      {
        eyebrow: "Migration path",
        title: "The move does not have to be all-or-nothing.",
        body: [
          "A serious comparison can produce a smaller path: repair the Liquid theme, rebuild only the constrained journeys, prototype Hydrogen around a narrow product flow, or delay headless until content, analytics, apps, and maintenance ownership are ready.",
          "That staged approach is usually safer than using Hydrogen as a status purchase. It also keeps SEO, analytics, app behavior, and editor workflow in the scope before production traffic depends on the new storefront.",
        ],
      },
    ],
    comparisonRows: [
      {
        dimension: "Merchant editing",
        liquid: "Theme editor sections and blocks usually keep everyday changes close to the Shopify admin.",
        hydrogen:
          "Editable content is possible, but the model needs to be designed through metaobjects, a visual builder, CMS tooling, or custom components.",
        decisionRule:
          "Stay on Liquid when marketing needs frequent section-level control and the current theme can support it.",
      },
      {
        dimension: "Development skillset",
        liquid: "A Shopify theme developer can usually own Liquid templates, sections, app embeds, and theme settings.",
        hydrogen:
          "The storefront behaves more like a React application with routes, loaders, data queries, releases, and dependencies.",
        decisionRule:
          "Choose Hydrogen only when the team can fund senior React/Shopify ownership after launch.",
      },
      {
        dimension: "SEO responsibility",
        liquid: "Shopify themes start closer to Shopify's normal storefront assumptions.",
        hydrogen:
          "Hydrogen can support strong SEO, but metadata, canonicals, sitemap, robots, rendered content, JSON-LD, and redirects need deliberate implementation.",
        decisionRule:
          "Do not migrate without a route, crawlability, structured data, and analytics checklist.",
      },
      {
        dimension: "Custom UX",
        liquid: "Best when the buying journey fits theme-native product, collection, content, and cart patterns.",
        hydrogen:
          "Useful when product discovery, content-led commerce, account-aware flows, or application-like interactions outgrow theme patterns.",
        decisionRule:
          "Hydrogen earns cost when the custom journey affects revenue, conversion quality, or operating speed.",
      },
      {
        dimension: "Performance claims",
        liquid: "A clean Liquid theme can be enough; app bloat and poor implementation can hurt either stack.",
        hydrogen:
          "Hydrogen gives more implementation control, but speed is build-dependent and should not be promised by stack choice alone.",
        decisionRule:
          "Treat performance as a scoped implementation and measurement problem, not a guaranteed platform outcome.",
      },
      {
        dimension: "Total ownership cost",
        liquid: "Usually lower when the store has standard commerce needs and a lean operating team.",
        hydrogen:
          "Higher ownership can be justified when custom control solves a constraint that Liquid cannot handle cleanly.",
        decisionRule:
          "Approve Hydrogen only when the business case survives build cost, maintenance cost, launch QA, and future change ownership.",
      },
    ],
    decisionRows: [
      {
        signal: "The store needs normal product pages, collections, content pages, and editable marketing sections.",
        move: "Stay on Liquid or refactor the theme.",
        caution: "Do not turn a theme cleanup into an application rebuild.",
      },
      {
        signal: "The buying journey needs custom product discovery, content-commerce paths, or application-like behavior.",
        move: "Evaluate fixed-scope or custom Hydrogen.",
        caution: "Scope SEO, analytics, app compatibility, and post-launch ownership before build.",
      },
      {
        signal: "The team already has React ownership and a clear storefront roadmap.",
        move: "Hydrogen becomes easier to justify.",
        caution: "The first launch still needs bounded scope, route QA, and merchant editing decisions.",
      },
      {
        signal: "The project exists because headless sounds modern or competitors mention it.",
        move: "Delay and run the readiness scorecard first.",
        caution: "Architecture fashion is not a business case.",
      },
    ],
    links: [
      {
        href: "/should-i-use-it",
        label: "Should I use Hydrogen?",
        note: "A guided fit check before rebuild budget moves.",
      },
      {
        href: "/shopify-hydrogen-fit-audit",
        label: "Hydrogen fit audit",
        note: "Use this as the Headless Readiness Scorecard path.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Cost planning",
        note: "Compare decision with budget reality.",
      },
    ],
    faqs: [
      {
        question: "Is Shopify Liquid usually cheaper than Hydrogen?",
        answer:
          "Usually, yes. Liquid stays closer to Shopify's theme model and often needs less ongoing engineering ownership. Hydrogen is worth considering when the buying journey, content model, product discovery, or custom storefront logic has outgrown theme constraints.",
      },
      {
        question: "Does Hydrogen automatically improve SEO?",
        answer:
          "No. Hydrogen can support strong SEO when metadata, canonicals, sitemap, robots, JSON-LD, server-rendered content, and redirects are handled deliberately. A weak Hydrogen build can be worse for SEO than a clean Liquid theme.",
      },
      {
        question: "What is the safest first step before choosing Hydrogen?",
        answer:
          "Start with a scope review: current theme limits, product flow, app dependencies, analytics, SEO risk, design readiness, and maintenance ownership. If Liquid still solves the problem, do not rebuild.",
      },
      {
        question: "What should be on a Headless Readiness Scorecard?",
        answer:
          "Score the actual constraint, team ownership, app compatibility, SEO migration risk, content editing model, analytics requirements, budget, and launch QA. Hydrogen should win only when the custom storefront value is stronger than the added ownership cost.",
      },
    ],
    cta: {
      headline: "Use the Headless Readiness Scorecard before you rebuild.",
      subtext:
        "Send your current theme, store URL, and what feels limiting. I will tell you whether the safer next step is Liquid cleanup, no rebuild, a fit audit, or a Hydrogen storefront scope.",
      sourceKind: "hydrogen_vs_liquid_cta",
    },
  },
  "/shopify-hydrogen-for-luxury-jewelry": {
    path: "/shopify-hydrogen-for-luxury-jewelry",
    navLabel: "Hydrogen for Luxury Jewelry",
    metaTitle: "Shopify Hydrogen for Luxury Jewelry | Bayam Context",
    metaDescription:
      "Proof-backed Shopify Hydrogen page for luxury jewelry and watch brands, based on Bayam Jewelry context and conservative storefront decision guidance.",
    eyebrow: "Vertical proof",
    title: "Shopify Hydrogen for luxury jewelry and watch discovery",
    description:
      "A vertical page tied to Bayam Jewelry, not a generic industry clone.",
    body:
      "Luxury jewelry storefronts need trust, visual refinement, and product discovery that respects different buying mindsets. Hydrogen can help when a theme flattens that experience.",
    sections: [
      {
        eyebrow: "Bayam context",
        title: "Jewelry and watches ask different questions.",
        body: [
          "Bayam Jewelry had to support fine jewelry, diamonds, and watches in one premium storefront surface. Jewelry shoppers often browse by style and occasion. Watch shoppers often compare brand, model, condition, and detail. A custom storefront can make those paths feel intentional instead of forcing them into one flat menu.",
          "Premium catalog Hydrogen is strongest when discovery, showroom trust, mobile detail pages, and collection context need a designed system. It is weak when the request is only surface-level visual polish.",
        ],
      },
      {
        eyebrow: "When not necessary",
        title: "Hydrogen is not required for every luxury brand.",
        body: [
          "If the catalog is small, the theme already presents products well, and the team does not need custom discovery or content patterns, Liquid may remain the better investment.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "Premium product discovery feels generic.",
        move: "Explore custom Hydrogen UX.",
        caution: "Do not hide product facts behind visual polish.",
      },
      {
        signal: "The catalog has distinct buyer mindsets.",
        move: "Design separate discovery pathways.",
        caution: "Avoid one-size-fits-all collection logic.",
      },
      {
        signal: "Showroom trust, product detail, and premium browsing need one system.",
        move: "Scope Growth or Custom Hydrogen surfaces.",
        caution: "Do not invent luxury proof beyond the Bayam context.",
      },
      {
        signal: "The brand only needs visual refinement.",
        move: "Improve Liquid first.",
        caution: "Custom storefront maintenance may not be justified.",
      },
    ],
    links: [
      {
        href: "/case-studies/bayam-jewelry-shopify-hydrogen",
        label: "Bayam Jewelry case",
        note: "The proof context behind this page.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom storefront service",
        note: "When the UX earns custom implementation.",
      },
    ],
    cta: {
      headline: "Need a luxury storefront fit check?",
      subtext:
        "Send the catalog, current store URL, and the discovery problem. I will tell you whether Hydrogen is worth scoping.",
      sourceKind: "vertical_luxury_jewelry_cta",
    },
  },
  "/shopify-hydrogen-for-large-catalog-retail": {
    path: "/shopify-hydrogen-for-large-catalog-retail",
    navLabel: "Hydrogen for Retail Catalogs",
    metaTitle: "Shopify Hydrogen for Large Catalog Retail | EveShop Context",
    metaDescription:
      "Proof-backed Shopify Hydrogen page for large catalog retail, based on EveShop context and conservative guidance for high-SKU custom storefronts.",
    eyebrow: "Vertical proof",
    title: "Shopify Hydrogen for large-catalog retail complexity",
    description:
      "A retail proof page based on EveShop's high-SKU, nationwide storefront context.",
    body:
      "Large-catalog retail needs product discovery, campaign readiness, and reusable storefront patterns. Hydrogen can help when the catalog and merchandising pressure exceed theme guardrails.",
    sections: [
      {
        eyebrow: "EveShop context",
        title: "High-SKU catalog work is about clarity.",
        body: [
          "The EveShop context matters because the pressure was not just page speed. It was browsing, campaigns, category clarity, mobile product flow, and reusable patterns for a national beauty and personal care retailer.",
          "Large-catalog Hydrogen should be scoped around product discovery, crawlable collection content, route structure, internal links, SSR product information, and launch QA. SKU count alone is not enough.",
        ],
      },
      {
        eyebrow: "When not necessary",
        title: "A big catalog alone does not force Hydrogen.",
        body: [
          "If the current theme supports browsing, SEO, merchandising, and campaign operations cleanly, a Hydrogen rebuild may be premature. The trigger is the constraint, not SKU count by itself.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "Category and campaign paths are becoming one-off patches.",
        move: "Scope reusable Hydrogen patterns.",
        caution: "Keep SEO and route mapping central.",
      },
      {
        signal: "Catalog navigation is the main conversion friction.",
        move: "Evaluate custom discovery UX.",
        caution: "Do not rebuild before mapping product and collection behavior.",
      },
      {
        signal: "Filtered or campaign paths may affect organic discovery.",
        move: "Map crawlable routes, canonicals, and internal links before build.",
        caution: "Avoid making every filter state an accidental landing page.",
      },
      {
        signal: "The theme handles catalog operations well.",
        move: "Stay on Liquid.",
        caution: "Hydrogen should not be a status purchase.",
      },
    ],
    links: [
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "EveShop case",
        note: "Large-catalog retail proof context.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Migration service",
        note: "When existing routes and catalog behavior must be preserved.",
      },
    ],
    cta: {
      headline: "Need a retail catalog Hydrogen sanity check?",
      subtext:
        "Send the store URL, catalog pressure, and campaign requirements. I will tell you whether Hydrogen is worth the operating cost.",
      sourceKind: "vertical_large_catalog_cta",
    },
  },
  "/shopify-hydrogen-for-dtc-education-brands": {
    path: "/shopify-hydrogen-for-dtc-education-brands",
    navLabel: "Hydrogen for DTC Education",
    metaTitle: "Shopify Hydrogen for DTC Education Brands | Rebel Bunny Context",
    metaDescription:
      "Proof-backed Shopify Hydrogen page for DTC brands that combine commerce, education, and partner acquisition, based on Rebel Bunny context.",
    eyebrow: "Vertical proof",
    title: "Shopify Hydrogen for DTC brands with education built into commerce",
    description:
      "A vertical proof page tied to Rebel Bunny's DTC, partner, and education storefront context.",
    body:
      "Some DTC brands need more than a product grid. Hydrogen can help when education, brand story, partner paths, and shopping need to live inside one coherent storefront.",
    sections: [
      {
        eyebrow: "Rebel Bunny context",
        title: "Commerce, education, and partner acquisition in one surface.",
        body: [
          "Rebel Bunny's storefront pressure was not only selling matcha. The site needed DTC shopping, partner interest, and Matchacation education content to work together instead of feeling like disconnected landing pages.",
          "Hydrogen becomes easier to justify when education changes product understanding, partner paths support the commercial model, and the same storefront has to keep product, story, cart, and lead paths coherent.",
        ],
      },
      {
        eyebrow: "When not necessary",
        title: "Content alone does not require Hydrogen.",
        body: [
          "If education content can be handled cleanly in theme templates, blog content, or a lightweight content model, Liquid may be the better first move.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "Education is part of conversion, not a separate blog afterthought.",
        move: "Evaluate custom Hydrogen content-commerce paths.",
        caution: "Keep product and checkout clarity intact.",
      },
      {
        signal: "Partner acquisition and DTC shopping share the same brand journey.",
        move: "Design one coherent storefront system.",
        caution: "Avoid disconnected tools that fragment maintenance.",
      },
      {
        signal: "Education content affects product choice before checkout.",
        move: "Scope content-commerce routes and reusable education sections.",
        caution: "Do not claim performance impact without approved evidence.",
      },
      {
        signal: "The brand only needs a few content pages.",
        move: "Use Liquid or simpler content tooling.",
        caution: "Hydrogen may overcomplicate basic publishing.",
      },
    ],
    links: [
      {
        href: "/case-studies/rebel-bunny-shopify-hydrogen",
        label: "Rebel Bunny case",
        note: "DTC, education, and partner proof context.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom storefront service",
        note: "When content and commerce need a shared system.",
      },
    ],
    cta: {
      headline: "Need commerce and education to move together?",
      subtext:
        "Send the store URL and the journeys that feel disconnected. I will tell you whether Hydrogen is the right system or too much machinery.",
      sourceKind: "vertical_dtc_education_cta",
    },
  },
  "/shopify-hydrogen-for-beauty-brands": {
    path: "/shopify-hydrogen-for-beauty-brands",
    navLabel: "Hydrogen for Beauty",
    metaTitle: "Shopify Hydrogen for Beauty Brands | EveShop Context",
    metaDescription:
      "Conservative Shopify Hydrogen guidance for beauty brands, tied to EveShop cosmetics retail context without invented performance or revenue claims.",
    eyebrow: "Vertical proof",
    title: "Shopify Hydrogen for beauty brands with real catalog pressure",
    description:
      "A conservative beauty vertical page based on cosmetics retail context, not generic industry copy.",
    body:
      "Beauty brands often balance campaigns, product education, routines, variants, and mobile discovery. Hydrogen can help when those journeys outgrow theme-level patterns.",
    sections: [
      {
        eyebrow: "Beauty context",
        title: "Campaign and catalog clarity matter more than the headless label.",
        body: [
          "The EveShop context supports a cautious beauty angle: high-SKU cosmetics and personal care retail creates browsing, campaign, and merchandising pressure. Hydrogen can be useful when the storefront needs reusable custom patterns for that pressure.",
        ],
      },
      {
        eyebrow: "When not necessary",
        title: "Many beauty stores should stay on Liquid.",
        body: [
          "If the catalog is manageable, the theme supports routine-based merchandising, and content updates are simple, Hydrogen may be unnecessary. Start with the constraint, not the category.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "Campaign pages and product discovery are becoming difficult to maintain.",
        move: "Evaluate Hydrogen patterns.",
        caution: "Protect SEO and mobile performance.",
      },
      {
        signal: "Routine, shade, or product education needs custom UX.",
        move: "Scope focused custom storefront surfaces.",
        caution: "Do not overbuild if theme patterns already work.",
      },
      {
        signal: "The main need is seasonal visual updates.",
        move: "Stay with Liquid.",
        caution: "Custom application cost may outweigh the benefit.",
      },
    ],
    links: [
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "EveShop case",
        note: "Cosmetics and personal care retail proof context.",
      },
      {
        href: "/shopify-hydrogen-seo",
        label: "Hydrogen SEO",
        note: "Beauty catalog pages need crawlable product and collection state.",
      },
    ],
    cta: {
      headline: "Need a beauty storefront architecture check?",
      subtext:
        "Send the catalog, campaign pressure, and current UX constraint. I will tell you whether Hydrogen is worth discussing.",
      sourceKind: "vertical_beauty_cta",
    },
  },
} as const satisfies Record<string, DecisionPageData>;

export function requireDecisionPage(path: keyof typeof DECISION_PAGES) {
  return DECISION_PAGES[path];
}
