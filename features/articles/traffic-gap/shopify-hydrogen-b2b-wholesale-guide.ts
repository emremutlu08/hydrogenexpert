import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
  title: "Shopify Hydrogen B2B and Wholesale Guide",
  slug: "shopify-hydrogen-b2b-wholesale-guide",
  description:
    "A Shopify Hydrogen B2B guide for headless storefronts, customer accounts, company locations, negotiated pricing, and wholesale QA.",
  category: "B2B",
  status: "published",
  publishAt: PUBLISH_DATE,
  updatedAt: PUBLISH_DATE,
  author: OWNER.name,
  metaTitle: "Shopify Hydrogen B2B Guide | Wholesale, Accounts, Pricing",
  metaDescription:
    "Plan Shopify Hydrogen B2B and wholesale storefronts around company locations, customer accounts, catalogs, pricing, and launch QA.",
  h1: "Shopify Hydrogen B2B and wholesale guide",
  intro: [
    "B2B Hydrogen work changes more than the product page. It changes identity, pricing, catalog visibility, checkout expectations, account state, and operational support.",
    "The safest B2B scope starts by confirming which Shopify-native B2B features are available, which customer account flows must be respected, and where custom storefront behavior begins.",
  ],
  sections: [
    {
      title: "Start with company and location logic",
      body: [
        "Shopify B2B uses companies and company locations to represent business buyers and their purchasing context. A Hydrogen storefront must know how buyer identity changes catalog, pricing, payment terms, and checkout behavior.",
      ],
    },
    {
      title: "Customer Account API affects the storefront plan",
      bullets: [
        "Login and customer recognition are not optional UI details.",
        "Account state can affect pricing, product visibility, and checkout handoff.",
        "Custom account experiences need careful API and security review.",
      ],
    },
    {
      title: "B2B launch risks",
      bullets: [
        "Wrong company location selected.",
        "Wholesale price leaks to retail shoppers.",
        "Catalog rules differ between collection, search, and product pages.",
        "Discounts, payment terms, and checkout rules are not tested together.",
      ],
    },
    {
      title: "When Hydrogen makes sense for B2B",
      bullets: [
        "The buyer journey needs custom product discovery or account-aware UX.",
        "The catalog is complex enough that Liquid becomes hard to control.",
        "The team can maintain application-level logic after launch.",
        "B2B rules are known before implementation starts.",
      ],
    },
    {
      title: "When to stay conservative",
      body: [
        "If the B2B process is still changing, keep the first scope narrow. A Liquid or Shopify-native path can be safer until pricing, customer approval, and account operations stabilize.",
      ],
    },
  ],
  conclusion:
    "Hydrogen can support serious B2B storefront work, but only when buyer identity, catalog rules, pricing, and checkout behavior are treated as one system.",
  links: [
    { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large catalog Hydrogen guide" },
    { href: "/blog/shopify-b2b-partner-pricing-without-separate-storefront", label: "Partner pricing production note" },
    { href: "/shopify-hydrogen-fit-audit", label: "Hydrogen fit audit" },
    { href: "/contact", label: "Request B2B scope review" },
  ],
  sources: [
    {
      href: "https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/b2b",
      label: "Shopify: Headless with B2B",
      note: "Official source for B2B custom storefront grounding.",
      external: true,
    },
    {
      href: "https://help.shopify.com/en/manual/b2b/companies-and-customers/creating-companies",
      label: "Shopify Help: Companies and company locations",
      note: "Official source translated into B2B identity checks.",
      external: true,
    },
    {
      href: "https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/hydrogen",
      label: "Shopify: Customer Account API with Hydrogen",
      note: "Official source for customer account implementation context.",
      external: true,
    },
  ],
} as const satisfies Article;

export const refresh = {
  summary: [
    "Hydrogen can work well for Shopify B2B when the storefront needs custom buyer UX, company-aware pricing, market-specific catalogs, account flows, and content that Liquid cannot express cleanly. The risk is underestimating customer identity, price visibility, and account-state QA.",
    "A B2B Hydrogen scope should begin with buyer rules: who can sign in, which company location they belong to, which catalog and price list they see, how quick order or reorder works, and what happens when unauthenticated users land on sensitive product pages.",
  ],
  takeaways: [
    {
      label: "Decision point",
      value:
        "Choose Hydrogen for B2B when custom account, pricing, catalog, and merchandising workflows justify application-level storefront work.",
    },
    {
      label: "Core risk",
      value:
        "Company location, buyer identity, price visibility, and catalog access must be tested as security and revenue logic, not only UI states.",
    },
    {
      label: "Scope shape",
      value:
        "Design the buyer journey before the component library: login, approval, catalog access, price display, cart, checkout, reorder, and support.",
    },
  ],
  sections: [
    {
      title: "Start with buyer identity and access",
      body: [
        "B2B storefront work should not begin with page design. It should begin with who the buyer is, how they authenticate, which company and location they belong to, and which commercial rules apply after sign-in.",
        "That access model affects product visibility, pricing, quantity rules, payment terms, shipping expectations, and what the storefront can safely show before login.",
      ],
    },
    {
      title: "B2B Hydrogen requirements to map early",
      bullets: [
        "Company, company location, and buyer role behavior.",
        "Catalog, price list, market, and currency rules.",
        "Guest visibility, gated pricing, and restricted products.",
        "Quick order, reorder, saved lists, drafts, and account support flows.",
        "Checkout handoff, payment terms, and operational ownership after launch.",
      ],
    },
    {
      title: "Customer Account API and storefront UX",
      body: [
        "Customer account decisions shape the whole storefront. The team needs to decide which account features live in Hydrogen, which stay close to Shopify account surfaces, and how buyer identity is carried into pricing, cart, and checkout behavior.",
        "Treat account state as a system boundary. A stale buyer context, wrong company location, or cached price can create a commercial problem, not only a bad interface.",
      ],
    },
    {
      title: "B2B QA cases that should block launch",
      ordered: [
        "Guest sees only the intended public product and price information.",
        "Approved buyer sees the correct company, location, catalog, price, currency, and payment terms.",
        "Buyer switching, sign-out, and cache behavior do not leak restricted prices or products.",
        "Cart and checkout preserve the intended B2B state.",
        "Search, filters, recommendations, and internal links respect catalog access rules.",
      ],
    },
  ],
  faq: [
    {
      question: "Is Hydrogen required for Shopify B2B?",
      answer:
        "No. Many B2B stores can stay on Shopify theme architecture. Hydrogen makes sense when the buyer experience, catalog rules, account flows, or integration needs justify a custom storefront application.",
    },
    {
      question: "What is the biggest B2B migration risk?",
      answer:
        "The biggest risk is incorrect buyer context: wrong company location, wrong catalog, wrong price, leaked restricted products, or checkout state that does not match the buyer's commercial terms.",
    },
    {
      question: "What should a B2B Hydrogen audit cover?",
      answer:
        "It should cover buyer authentication, company/location rules, catalog access, price visibility, customer account behavior, cart and checkout handoff, search/filter behavior, analytics, and launch QA.",
    },
  ],
} satisfies ArticleQualityRefresh;
