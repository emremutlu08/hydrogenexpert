export const HIRING_INTENT_OWNER_PATH = "/shopify-hydrogen-experts" as const;

export const RETIRED_COMMERCIAL_INTENT_PATHS = [
  "/shopify-hydrogen-developer",
  "/shopify-hydrogen-expert",
  "/shopify-hydrogen-agency",
  "/shopify-hydrogen-agency-usa",
] as const;

export const HIRING_INTENT_REDIRECTS = [
  ...RETIRED_COMMERCIAL_INTENT_PATHS,
  "/shopify-storefront-api-developer",
].map((source) => ({ source, destination: HIRING_INTENT_OWNER_PATH, permanent: true as const }));

export const COMMERCIAL_INTENT_PATHS = [
  HIRING_INTENT_OWNER_PATH,
  "/headless-shopify-agency",
  "/shopify-hydrogen-cost",
  "/shopify-hydrogen-examples",
] as const;

export type CommercialIntentPath = (typeof COMMERCIAL_INTENT_PATHS)[number];

export interface CommercialIntentOwner {
  path: string;
  primaryQuery: string;
  intent: string;
  offerTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroBody: string;
  linkLabel: string;
  decisionFocus: string;
  deliverableFocus: string;
  proofFocus: string;
  cta: {
    headline: string;
    subtext: string;
    primaryLabel: string;
  };
}

const COMMERCIAL_INTENT_DEFINITIONS = {
  "/shopify-hydrogen-developer": {
    path: "/shopify-hydrogen-developer",
    primaryQuery: "shopify hydrogen developer",
    intent: "Hire a senior developer for direct Hydrogen implementation and launch work.",
    offerTitle: "Direct senior Hydrogen implementation for a defined storefront scope",
    metaTitle: "Hire a Shopify Hydrogen Developer | Senior Implementation",
    metaDescription:
      "Hire a senior Shopify Hydrogen developer for Storefront API work, custom routes, SEO-safe implementation, cart behavior, launch QA, and ongoing fixes.",
    heroTitle: "Hire a senior Shopify Hydrogen developer for direct implementation",
    heroDescription:
      "Use this path when Hydrogen is already likely and the immediate need is one senior developer to implement, stabilize, or launch the storefront.",
    heroBody:
      "The decision here is implementation fit: what must be built, which dependencies and acceptance checks define the scope, and who owns the code through launch.",
    linkLabel: "Hire a Shopify Hydrogen developer",
    decisionFocus: "Defined technical scope and direct implementation ownership.",
    deliverableFocus: "Routes, Storefront API data, product flow, cart, SEO, analytics, QA, and launch fixes.",
    proofFocus: "Approved production storefront contexts and implementation-specific evidence.",
    cta: {
      headline: "Need a senior Shopify Hydrogen developer?",
      subtext:
        "Send your current store URL, the work that must be implemented, and the launch pressure. I will tell you whether direct development, a scope review, Liquid cleanup, or no rebuild is the safer next step.",
      primaryLabel: "Request Implementation Review",
    },
  },
  "/shopify-hydrogen-expert": {
    path: "/shopify-hydrogen-expert",
    primaryQuery: "shopify hydrogen expert",
    intent: "Choose one senior specialist to own the hard storefront decisions.",
    offerTitle: "One accountable senior specialist across architecture and implementation",
    metaTitle: "Shopify Hydrogen Expert | Direct Senior Ownership",
    metaDescription:
      "Work with one senior Shopify Hydrogen expert for architecture, Storefront API decisions, SEO-safe migration, implementation, and launch-risk ownership.",
    heroTitle: "One senior Shopify Hydrogen expert for direct technical ownership",
    heroDescription:
      "Use this path when the main question is whether one accountable specialist can carry architecture, risk, and implementation without a vendor layer.",
    heroBody:
      "The decision here is specialist fit: who owns the difficult tradeoffs, stays close to the code, and can still recommend Liquid cleanup or no rebuild when that is safer.",
    linkLabel: "Work with one Shopify Hydrogen expert",
    decisionFocus: "Singular senior accountability across storefront tradeoffs.",
    deliverableFocus: "Architecture review, implementation direction, risk checks, and a clear technical path.",
    proofFocus: "Public senior profile evidence plus approved production storefront contexts.",
    cta: {
      headline: "Need one senior Shopify Hydrogen expert?",
      subtext:
        "Send your current store URL, the decision that needs ownership, and what feels risky. I will tell you whether direct expert support, a scope review, Liquid cleanup, or no rebuild is safer.",
      primaryLabel: "Request Expert Review",
    },
  },
  "/shopify-hydrogen-experts": {
    path: "/shopify-hydrogen-experts",
    primaryQuery: "shopify hydrogen experts",
    intent:
      "Compare or hire senior Hydrogen expertise for implementation, technical ownership, and agency-alternative delivery.",
    offerTitle: "One proof-led path for hiring senior Hydrogen expertise",
    metaTitle: "Shopify Hydrogen Experts | Senior-Led Hiring Guide",
    metaDescription:
      "Compare Shopify Hydrogen experts, direct developer support, and agency delivery by production proof, technical ownership, SEO risk, and scope fit.",
    heroTitle: "Shopify Hydrogen experts for direct senior ownership",
    heroDescription:
      "Use this page to compare proof, hire direct implementation support, or decide whether a senior specialist, broader agency, audit, or no-rebuild path fits.",
    heroBody:
      "The decision combines comparison quality with delivery fit: what production evidence exists, who owns the code and hard tradeoffs, and whether the work needs direct senior implementation or a larger agency layer.",
    linkLabel: "Hire or compare Shopify Hydrogen experts",
    decisionFocus:
      "Expert proof, direct implementation ownership, and senior-led delivery versus a larger agency.",
    deliverableFocus:
      "A proof review, implementation and risk scope, delivery-model recommendation, and next safe buying step.",
    proofFocus: "Verifiable public evidence and approved case-study context, never directory-style claims.",
    cta: {
      headline: "Need to hire or compare Shopify Hydrogen experts?",
      subtext:
        "Send your current store URL, the work that needs ownership, the options you are comparing, and the rebuild risk. I will help separate direct implementation, senior expert support, broader agency scope, audit, Liquid cleanup, and no rebuild.",
      primaryLabel: "Request Hiring Review",
    },
  },
  "/shopify-hydrogen-agency": {
    path: "/shopify-hydrogen-agency",
    primaryQuery: "shopify hydrogen agency",
    intent: "Compare a large agency with a senior-led Hydrogen delivery alternative.",
    offerTitle: "Senior-led Hydrogen delivery without a large agency layer",
    metaTitle: "Shopify Hydrogen Agency Alternative | Senior-Led Delivery",
    metaDescription:
      "Compare a Shopify Hydrogen agency with a senior-led alternative for strategy, migrations, custom builds, SEO, launch support, and direct technical ownership.",
    heroTitle: "A senior-led Shopify Hydrogen agency alternative",
    heroDescription:
      "Use this path when the buyer is searching for a Hydrogen agency but wants to compare broad agency delivery with direct senior ownership.",
    heroBody:
      "The decision here is delivery model fit: whether the work needs multiple coordinated disciplines or a senior operator who can keep strategy and implementation close together.",
    linkLabel: "Compare the Shopify Hydrogen agency alternative",
    decisionFocus: "Large-agency coordination versus senior-led direct delivery.",
    deliverableFocus: "Fit review, scope direction, architecture, implementation planning, and launch-risk ownership.",
    proofFocus: "Senior-led positioning and approved work contexts without team-size or agency claims.",
    cta: {
      headline: "Comparing Shopify Hydrogen agency options?",
      subtext:
        "Send the current store, the disciplines the project needs, and the ownership model you are comparing. I will tell you whether senior-led delivery, a broader agency, an audit, or no rebuild fits better.",
      primaryLabel: "Compare Delivery Models",
    },
  },
  "/headless-shopify-agency": {
    path: "/headless-shopify-agency",
    primaryQuery: "headless shopify agency",
    intent: "Evaluate general headless architecture and agency options before selecting Hydrogen.",
    offerTitle: "A headless Shopify architecture decision before agency scope expands",
    metaTitle: "Headless Shopify Agency Alternative | Architecture Review",
    metaDescription:
      "Evaluate headless Shopify architecture, agency scope, Hydrogen, Liquid tradeoffs, SEO risk, integrations, and maintenance before committing to a custom build.",
    heroTitle: "Evaluate a headless Shopify agency path before choosing the stack",
    heroDescription:
      "Use this path when the search is broader than Hydrogen and the first decision is whether headless architecture is justified at all.",
    heroBody:
      "The decision here is architecture fit: which buyer or operating constraint requires headless, what the maintenance model looks like, and whether Hydrogen or Liquid is safer.",
    linkLabel: "Evaluate a headless Shopify agency path",
    decisionFocus: "Headless architecture and agency evaluation before framework selection.",
    deliverableFocus: "Architecture recommendation, integration and SEO risks, migration path, and budget-aware next step.",
    proofFocus: "Relevant storefront constraints and approved cases, not copied competitor architecture.",
    cta: {
      headline: "Evaluating a headless Shopify agency?",
      subtext:
        "Send the current store, the constraint that is driving headless, and the options being compared. I will help decide between Hydrogen, Liquid, a broader agency, or no rebuild.",
      primaryLabel: "Request Architecture Review",
    },
  },
  "/shopify-hydrogen-cost": {
    path: "/shopify-hydrogen-cost",
    primaryQuery: "shopify hydrogen pricing",
    intent: "Estimate HydrogenExpert first-build pricing and scope-driven cost.",
    offerTitle: "Estimate a first-launch Hydrogen budget by scope",
    metaTitle: "Shopify Hydrogen Pricing Guide: $2K-$5K by Scope",
    metaDescription:
      "Estimate your Shopify Hydrogen storefront budget ($2K-$5K) by scope, not traffic or pageviews — see what drives cost before requesting a scope review.",
    heroTitle: "Shopify Hydrogen pricing: $2K-$5K by project scope",
    heroDescription:
      "Use this page to qualify HydrogenExpert's own first-build service range, based on project requirements, and understand what moves a project toward custom scope.",
    heroBody:
      "The decision here is budget fit: routes, templates, features, integrations, migration risk, analytics, SEO, and launch QA—not traffic or pageviews.",
    linkLabel: "Review Shopify Hydrogen cost",
    decisionFocus: "First-build budget qualification and cost drivers.",
    deliverableFocus: "Budget range, scope drivers, exclusions, risk notes, and recommended package path.",
    proofFocus: "Explicit HydrogenExpert pricing boundaries without presenting them as Shopify platform pricing.",
    cta: {
      headline: "Need to qualify a $2K-$5K first-build budget?",
      subtext:
        "Send the current store URL, budget range, design status, required pages, and must-have features. I will tell you whether the project fits fixed scope, custom scope, Liquid cleanup, or no rebuild.",
      primaryLabel: "Request Budget Review",
    },
  },
  "/shopify-hydrogen-examples": {
    path: "/shopify-hydrogen-examples",
    primaryQuery: "shopify hydrogen examples",
    intent: "Study sourced examples and patterns as implementation evidence.",
    offerTitle: "Sourced storefront patterns with an implementation takeaway",
    metaTitle: "Shopify Hydrogen Examples: 10 Sourced Storefront Patterns",
    metaDescription:
      "Study 10 sourced Shopify Hydrogen examples covering routes, Storefront API data, SEO, product state, content models, deployment, and production takeaways.",
    heroTitle: "Shopify Hydrogen examples: 10 sourced patterns worth studying",
    heroDescription:
      "Use this directory to compare implementation patterns, source evidence, and the production lesson behind each example.",
    heroBody:
      "The decision here is pattern fit: what the example proves, which storefront constraint it addresses, and what still needs to be scoped before production use.",
    linkLabel: "Study Shopify Hydrogen examples",
    decisionFocus: "Pattern evaluation before implementation scope.",
    deliverableFocus: "A source, practical takeaway, related production risk, and next internal path for each example.",
    proofFocus: "Official sources and approved production notes rather than an unsourced inspiration gallery.",
    cta: {
      headline: "Need to turn a Hydrogen pattern into production scope?",
      subtext:
        "Send the current store URL and the example or storefront behavior you want to evaluate. I will help separate a bounded build, an audit, Liquid improvement, and no rebuild.",
      primaryLabel: "Request Pattern Review",
    },
  },
} as const satisfies Record<string, CommercialIntentOwner>;

export const COMMERCIAL_INTENT_OWNERS = {
  [HIRING_INTENT_OWNER_PATH]: COMMERCIAL_INTENT_DEFINITIONS[HIRING_INTENT_OWNER_PATH],
  "/headless-shopify-agency": COMMERCIAL_INTENT_DEFINITIONS["/headless-shopify-agency"],
  "/shopify-hydrogen-cost": COMMERCIAL_INTENT_DEFINITIONS["/shopify-hydrogen-cost"],
  "/shopify-hydrogen-examples": COMMERCIAL_INTENT_DEFINITIONS["/shopify-hydrogen-examples"],
} as const satisfies Record<CommercialIntentPath, CommercialIntentOwner>;

export const RETIRED_COMMERCIAL_INTENT_OWNERS = {
  "/shopify-hydrogen-developer":
    COMMERCIAL_INTENT_DEFINITIONS["/shopify-hydrogen-developer"],
  "/shopify-hydrogen-expert": COMMERCIAL_INTENT_DEFINITIONS["/shopify-hydrogen-expert"],
  "/shopify-hydrogen-agency": COMMERCIAL_INTENT_DEFINITIONS["/shopify-hydrogen-agency"],
} as const;

export function getCommercialIntentOwner(path: CommercialIntentPath) {
  return COMMERCIAL_INTENT_OWNERS[path];
}

export function isCommercialIntentPath(path: string): path is CommercialIntentPath {
  return COMMERCIAL_INTENT_PATHS.includes(path as CommercialIntentPath);
}

export function isRetiredCommercialIntentPath(path: string) {
  return RETIRED_COMMERCIAL_INTENT_PATHS.includes(
    path as (typeof RETIRED_COMMERCIAL_INTENT_PATHS)[number],
  );
}

export function resolveCommercialIntentPath(path: string) {
  return isRetiredCommercialIntentPath(path) ? HIRING_INTENT_OWNER_PATH : path;
}

export function normalizeCommercialLinks<T extends { href: string; label: string }>(
  links: readonly T[],
): T[] {
  const seen = new Set<string>();
  return links.flatMap((link) => {
    const href = resolveCommercialIntentPath(link.href);
    if (seen.has(href)) return [];
    seen.add(href);
    return [{
      ...link,
      href,
      label: href === HIRING_INTENT_OWNER_PATH && href !== link.href
        ? COMMERCIAL_INTENT_OWNERS[HIRING_INTENT_OWNER_PATH].linkLabel
        : link.label,
    }];
  });
}
