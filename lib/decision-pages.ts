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
  cta: {
    headline: string;
    subtext: string;
    sourceKind: string;
  };
}

export const DECISION_PAGES = {
  "/shopify-hydrogen-agency-usa": {
    path: "/shopify-hydrogen-agency-usa",
    navLabel: "Hydrogen Agency USA",
    metaTitle: "Shopify Hydrogen Agency USA Alternative | Emre Mutlu",
    metaDescription:
      "Remote Shopify Hydrogen agency alternative for US Shopify Plus and growth-stage brands needing senior audit, migration, SEO, build, and support help.",
    eyebrow: "US Hydrogen agency alternative",
    title: "Remote senior-led Shopify Hydrogen services for US brands",
    description:
      "A differentiated US-intent page for Shopify Plus and growth-stage brands that want senior Hydrogen judgment, clear USD planning, and remote collaboration without creating a separate local-agency fiction.",
    body:
      "HydrogenExpert is not a local US office or a full-service ad agency. It is a senior-led Hydrogen services path for US teams that need audit, migration, custom build, SEO, optimization, or support decisions with clear USD expectations and remote collaboration.",
    sections: [
      {
        eyebrow: "Collaboration model",
        title: "Why US brands hire remote senior Hydrogen support.",
        body: [
          "US Shopify teams often need specialized Hydrogen judgment more than they need another broad vendor list. A focused remote model works when the team can share storefront context, meet asynchronously, and make decisions around a clear commercial pressure.",
          "The trust path is practical: review the store, define the constraint, use Upwork or direct professional channels where useful, and keep the work tied to budget, timeline, launch risk, and async-friendly decision records.",
        ],
      },
      {
        eyebrow: "Buyer fit",
        title: "What a US buyer should expect before the first call.",
        body: [
          "The first useful step is not a sales deck. It is the store URL, current storefront stack, what feels expensive or slow to change, and which commercial decision needs support.",
          "Strong fits usually have one of six needs: Hydrogen fit audit, Liquid to Hydrogen migration, custom Hydrogen build, performance or SEO cleanup, Oxygen/deployment confidence, or ongoing support for an existing Hydrogen storefront.",
        ],
      },
      {
        eyebrow: "What this is not",
        title: "No local-office claim, no full-service agency claim.",
        body: [
          "This page does not claim a US office. It does not offer paid media, brand strategy, or low-cost theme support. It exists for US buyers comparing agency options who may be better served by direct Hydrogen expertise.",
          "Bayam Jewelry gives this page real US relevance because the work sits in a New York luxury commerce context, but the page stays conservative and does not invent local presence.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "You need Hydrogen-specific judgment, not a full agency stack.",
        move: "Use a senior operator audit or build scope.",
        caution: "Choose a traditional agency if you need creative, ads, content, and engineering all bundled.",
      },
      {
        signal: "Stakeholders need USD budget sanity before rebuild approval.",
        move: "Start with cost planning or Fit & Risk Audit.",
        caution: "Avoid wide rebuild ranges with undefined SEO, app, and analytics risk.",
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
        href: "/shopify-hydrogen-cost",
        label: "Hydrogen cost planning",
        note: "USD budget ranges and price drivers.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Hydrogen audit",
        note: "Start with risk before scope.",
      },
    ],
    cta: {
      headline: "Send the store URL and the US buyer pressure.",
      subtext:
        "I will tell you whether the next move is an audit, migration, custom build, optimization pass, retainer, or staying on Liquid.",
      sourceKind: "agency_usa_cta",
    },
  },
  "/shopify-hydrogen-fit-audit": {
    path: "/shopify-hydrogen-fit-audit",
    navLabel: "Hydrogen Fit Audit",
    metaTitle: "Shopify Hydrogen Fit & Risk Audit | Emre Mutlu",
    metaDescription:
      "Fixed-scope Shopify Hydrogen Fit & Risk Audit covering Liquid vs Hydrogen fit, SEO, routes, apps, analytics, consent, budget range, and recommended next step.",
    eyebrow: "Paid audit offer",
    title: "Shopify Hydrogen Fit & Risk Audit",
    description:
      "A fixed-scope diagnostic before a brand spends rebuild money.",
    body:
      "The audit checks whether Hydrogen is commercially justified and where the migration, SEO, analytics, app, and maintenance risks sit before implementation starts.",
    sections: [
      {
        eyebrow: "Deliverables",
        title: "What you receive.",
        body: [
          "Storefront constraint review, Liquid vs Hydrogen fit decision, SEO and crawlability risk review, route and canonical risk review, performance and Core Web Vitals notes, app and integration dependency review, analytics and consent risk notes, migration complexity estimate, budget range, and recommended next step.",
          "The deliverable is a written memo plus Loom walkthrough. The usual starting range is $1.5K-$5K, with a 5-10 business day timeline depending on storefront complexity.",
        ],
      },
      {
        eyebrow: "Outcomes",
        title: "The audit can recommend no rebuild.",
        body: [
          "A useful audit is allowed to say stay on Liquid, refactor Liquid, run focused optimization, migrate to Hydrogen, or delay the rebuild. That is the entire point: the recommendation should protect the business, not sell Hydrogen by default.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "The team is debating Hydrogen but lacks a technical risk map.",
        move: "Run the Fit & Risk Audit.",
        caution: "Do not ask implementation vendors to price unknown risk as if it were clear scope.",
      },
      {
        signal: "Organic traffic, analytics, and apps are business-critical.",
        move: "Audit routes, canonicals, tracking, consent, and app replacement early.",
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
        label: "Audit service",
        note: "The broader service page for audit search intent.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Cost page",
        note: "Budget ranges tied to scope drivers.",
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
      "Plain-English Shopify Hydrogen maintenance cost guide covering application ownership, dependencies, integrations, SEO, analytics, support, and when Liquid is cheaper.",
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
          "Maintenance cost depends on the pace of changes, app integrations, content model, product complexity, SEO monitoring, analytics needs, and how much internal capability the brand already has.",
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
    metaTitle: "Shopify Hydrogen vs Liquid | Emre Mutlu",
    metaDescription:
      "Shopify Hydrogen vs Liquid comparison for merchants covering cost, maintenance, SEO, UX flexibility, apps, migration risk, and when to stay on Liquid.",
    eyebrow: "Decision comparison",
    title: "Shopify Hydrogen vs Liquid",
    description:
      "A merchant-friendly comparison for teams deciding whether a custom storefront earns its cost.",
    body:
      "Liquid is usually cheaper and easier to operate. Hydrogen gives more control when the storefront has outgrown theme constraints. The decision should come from the commercial constraint, not the architecture label.",
    sections: [
      {
        eyebrow: "Plain English",
        title: "Liquid is theme-first. Hydrogen is application-first.",
        body: [
          "Liquid keeps the storefront close to Shopify's theme model. It is often the fastest path for standard commerce needs and a better fit when the team needs low operational overhead.",
          "Hydrogen is a custom storefront approach built around a React application connected to Shopify. It can support more ambitious UX, data loading, routing, and presentation patterns, but it asks the brand to own more software.",
        ],
      },
      {
        eyebrow: "Practical opinion",
        title: "Stay on Liquid until Hydrogen earns the cost.",
        body: [
          "My default recommendation is conservative: use Liquid if it solves the problem. Consider Hydrogen when the current storefront blocks growth-stage UX, performance, merchandising, content, or feature velocity in ways a theme cannot solve cleanly.",
        ],
      },
    ],
    decisionRows: [
      {
        signal: "Budget and maintenance capacity are limited.",
        move: "Stay on Liquid or refactor the theme.",
        caution: "Hydrogen can create a more expensive operating model.",
      },
      {
        signal: "The buying journey needs custom product discovery or content-led commerce.",
        move: "Evaluate Hydrogen.",
        caution: "Scope SEO, analytics, and app replacement before build.",
      },
      {
        signal: "The project exists only because headless sounds modern.",
        move: "Delay and audit first.",
        caution: "Architecture fashion is not a business case.",
      },
    ],
    links: [
      {
        href: "/should-i-use-it",
        label: "Should I use Hydrogen?",
        note: "A guided fit check.",
      },
      {
        href: "/shopify-hydrogen-fit-audit",
        label: "Fit & Risk Audit",
        note: "Use this before committing rebuild money.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Cost planning",
        note: "Compare decision with budget reality.",
      },
    ],
    cta: {
      headline: "Want the honest Hydrogen vs Liquid answer for your store?",
      subtext:
        "Send your current theme, store URL, and what feels limiting. I will tell you whether Hydrogen is justified or Liquid is still smarter.",
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
          "The EveShop context matters because the pressure was not just page speed. It was browsing, campaigns, category clarity, and reusable patterns for a national beauty and personal care retailer.",
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
