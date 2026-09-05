import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
  title: "Shopify Apps in Hydrogen: Compatibility Checklist",
  slug: "shopify-apps-in-hydrogen-compatibility-checklist",
  description:
    "A practical app compatibility checklist for Hydrogen migrations covering reviews, subscriptions, loyalty, search, analytics, and checkout.",
  category: "Migration",
  status: "published",
  publishAt: PUBLISH_DATE,
  updatedAt: PUBLISH_DATE,
  author: OWNER.name,
  metaTitle: "Shopify Apps in Hydrogen | Compatibility Checklist",
  metaDescription:
    "Audit Shopify apps before a Hydrogen migration: reviews, subscriptions, loyalty, search, analytics, customer accounts, and checkout risk.",
  h1: "Shopify apps in Hydrogen: compatibility checklist",
  intro: [
    "The biggest Hydrogen migration surprise is often not React. It is discovering that a theme app worked because Liquid, theme app embeds, scripts, or Shopify globals were available.",
    "Before a merchant commits to Hydrogen, every revenue-critical app should be sorted into native Shopify capability, headless API integration, custom rebuild, checkout-only behavior, or replace/remove.",
  ],
  sections: [
    {
      title: "Start with revenue-critical app categories",
      bullets: [
        "Reviews and ratings.",
        "Subscriptions and purchase options.",
        "Loyalty, referrals, rewards, and store credit.",
        "Search, recommendations, and merchandising.",
        "Analytics, pixels, consent, and attribution.",
        "Customer accounts, B2B pricing, and gated experiences.",
      ],
    },
    {
      title: "What to ask each vendor",
      bullets: [
        "Is there a Hydrogen, headless, React, or Storefront API integration path?",
        "Does the app depend on Liquid snippets, theme app embeds, or storefront globals?",
        "Which events must be sent from the custom frontend?",
        "Which features only work in checkout, customer accounts, or the Shopify admin?",
      ],
    },
    {
      title: "Reviews and loyalty are not the same risk",
      body: [
        "Review display is often a frontend integration problem. Loyalty and referrals can involve customer identity, checkout redemption, points state, and post-purchase workflows. Put them in separate workstreams.",
      ],
    },
    {
      title: "Subscriptions need checkout and product-state proof",
      body: [
        "Subscription apps and Shopify purchase options need product page UI, selling plan data, cart line behavior, checkout handoff, and post-purchase account behavior to agree. Test the full path before launch week.",
      ],
    },
    {
      title: "The audit output should be a replacement map",
      ordered: [
        "Keep with vendor headless integration.",
        "Replace with Shopify-native capability.",
        "Rebuild a smaller custom version.",
        "Move behavior to checkout or account surfaces.",
        "Remove if the app does not justify headless complexity.",
      ],
    },
  ],
  conclusion:
    "Treat app compatibility as migration scope, not as a post-launch cleanup list. The right answer may be Hydrogen, Liquid, or a narrower first launch.",
  links: [
    { href: "/liquid-to-hydrogen-migration", label: "Liquid to Hydrogen migration", note: "Turn the compatibility findings into a migration scope and launch sequence." },
    { href: "/shopify-hydrogen-fit-audit", label: "Hydrogen fit audit", note: "Check whether custom storefront work is justified before replacing apps." },
    { href: "/shopify-hydrogen-issues", label: "Hydrogen issue library", note: "Investigate storefront integration problems that may affect your audit." },
    { href: "/contact", label: "Request Scope Review" },
  ],
  sources: [
    {
      href: "https://support.yotpo.com/docs/using-yotpo-reviews-with-shopify-hydrogen",
      label: "Yotpo: Reviews with Shopify Hydrogen",
      note: "Vendor instructions for displaying reviews in Hydrogen.",
      external: true,
    },
    {
      href: "https://support.yotpo.com/docs/setting-up-yotpo-loyalty-referrals-on-a-headless-platform",
      label: "Yotpo: Loyalty on a headless platform",
      note: "Vendor requirements for headless loyalty and customer identity.",
      external: true,
    },
    {
      href: "https://shopify.dev/docs/storefronts/headless/hydrogen/cookbook/subscriptions",
      label: "Shopify: Subscriptions in Hydrogen",
      note: "Official source for Hydrogen subscription implementation checks.",
      external: true,
    },
  ],
} as const satisfies Article;

export const refresh = {
  updatedAt: "2026-09-05",
  summary: [
    "App compatibility is one of the fastest ways a Hydrogen migration gets under-scoped. Many Shopify apps are built for Liquid theme injection, app blocks, script tags, or checkout surfaces that do not move cleanly into a custom Hydrogen storefront.",
    "The right checklist starts with revenue-critical behavior: reviews, subscriptions, loyalty, search, recommendations, analytics, consent, customer accounts, bundles, and returns. Each app needs a decision: native Hydrogen support, API integration, script embed, replacement, or removal.",
  ],
  takeaways: [
    {
      label: "Main risk",
      value:
        "Theme app blocks and Liquid snippets rarely translate directly into Hydrogen. Assume every important app needs verification.",
    },
    {
      label: "Priority",
      value:
        "Check purchase-path and measurement apps first: subscriptions, reviews, loyalty, search, analytics, consent, and checkout-adjacent tools.",
    },
    {
      label: "Deliverable",
      value:
        "Create an app inventory with owner, current behavior, headless path, fallback, QA case, and launch blocker status.",
    },
  ],
  sections: [
{
    "title": "Example compatibility matrix",
    "body": [
        "Illustrative audit template, not a customer project result. Replace these examples with each installed app, its vendor-confirmed capabilities, and the person responsible."
    ],
    "comparison": {
        "caption": "App behavior and integration decisions",
        "columns": [
            "Category",
            "Current behavior to record",
            "Integration path to verify",
            "Fallback or scope decision"
        ],
        "rows": [
            {
                "label": "Reviews",
                "values": [
                    "Product ratings and review widget",
                    "Check vendor Hydrogen integration or API-backed display",
                    "Keep review data; agree a display fallback before launch"
                ]
            },
            {
                "label": "Subscriptions",
                "values": [
                    "One-time and recurring product choices",
                    "Verify selling plans, cart selection, checkout and account management",
                    "Do not migrate recurring products until the full purchase path works"
                ]
            },
            {
                "label": "Loyalty",
                "values": [
                    "Points balance and reward redemption",
                    "Confirm vendor identity, balance and redemption interfaces",
                    "Agree how existing balances remain accessible"
                ]
            },
            {
                "label": "Search",
                "values": [
                    "Collection filters and product search",
                    "Choose Shopify search or a supported vendor integration",
                    "Keep essential filters and no-result recovery in scope"
                ]
            },
            {
                "label": "Analytics and consent",
                "values": [
                    "Storefront events and consent controls",
                    "Map storefront, checkout and vendor event ownership",
                    "Block unconsented tracking and deduplicate events"
                ]
            },
            {
                "label": "Customer accounts",
                "values": [
                    "Login, order history and account tools",
                    "Verify account API and vendor account integrations",
                    "Confirm returning customers can reach required account actions"
                ]
            }
        ]
    }
},
{
    "title": "Assign ownership and launch checks",
    "body": [
        "Illustrative audit template, not a customer project result. Replace these examples with each installed app, its vendor-confirmed capabilities, and the person responsible."
    ],
    "comparison": {
        "caption": "App ownership and launch acceptance",
        "columns": [
            "Category",
            "Suggested owner",
            "QA scenario",
            "Launch blocker"
        ],
        "rows": [
            {
                "label": "Reviews",
                "values": [
                    "Storefront developer + reviews vendor",
                    "Compare ratings and review content on mobile and desktop",
                    "Block if required trust content has no working display path"
                ]
            },
            {
                "label": "Subscriptions",
                "values": [
                    "Commerce developer + subscription vendor",
                    "Select a plan, change cart quantity, complete test checkout, access management",
                    "Block on wrong plan, price or inaccessible account management"
                ]
            },
            {
                "label": "Loyalty",
                "values": [
                    "Retention owner + vendor",
                    "Sign in, compare balance, apply an eligible reward",
                    "Block on lost balances or incorrect redemption"
                ]
            },
            {
                "label": "Search",
                "values": [
                    "Merchandising owner + developer",
                    "Test important queries, combined filters and zero results",
                    "Block when core products cannot be found"
                ]
            },
            {
                "label": "Analytics and consent",
                "values": [
                    "Analytics owner + developer",
                    "Test before consent, after consent and after withdrawal",
                    "Block on unconsented or duplicate tracking"
                ]
            },
            {
                "label": "Customer accounts",
                "values": [
                    "Commerce developer + support owner",
                    "Test returning customer login and required order actions",
                    "Block when customers cannot use required account functions"
                ]
            }
        ]
    }
},
    {
      title: "Build the inventory before choosing the migration date",
      body: [
        "The inventory should list every app that touches product pages, collections, account flows, cart, checkout handoff, emails, pixels, customer data, search, or merchandising. For each app, capture where it appears today, how it loads, which data it needs, and what breaks if it disappears for a week.",
        "This turns app compatibility from a vague fear into a launch checklist. A merchant can then separate must-have behavior from legacy scripts that no longer justify the complexity.",
      ],
    },
    {
      title: "Common Hydrogen app paths",
      bullets: [
        "Native headless SDK or API integration when the vendor supports it clearly.",
        "Server-side data fetch plus custom React UI when the app exposes stable APIs.",
        "Script embed for low-risk widgets that do not control core purchase behavior.",
        "Replacement when the app depends on Liquid theme injection or unsupported checkout behavior.",
        "Removal when the feature no longer supports the commercial plan.",
      ],
    },
    {
      title: "Vendor questions that save rework",
      ordered: [
        "Do you support Shopify Hydrogen or headless Storefront API implementations?",
        "Can reviews, subscription options, loyalty state, or recommendations render server-side or hydrate safely?",
        "Which events must be sent from the storefront, checkout, or customer account surface?",
        "What happens to historical data, customer tags, subscription contracts, and loyalty balances?",
        "Can we test this on a preview domain before production launch?",
      ],
    },
    {
      title: "QA cases for compatibility signoff",
      bullets: [
        "A new shopper can discover the feature, add to cart, and reach checkout with the expected state.",
        "A returning customer sees the expected account, subscription, loyalty, or personalization behavior.",
        "Analytics and consent fire once, with no duplicate purchase or add-to-cart events.",
        "The app does not block SSR, crawlable content, or page performance on key product and collection routes.",
      ],
    },
  ],
  faq: [
    {
      question: "Do Shopify apps work automatically in Hydrogen?",
      answer:
        "No. Apps that rely on Liquid app blocks, snippets, or theme script injection need review. Some vendors offer headless APIs or SDKs, while others require custom integration, replacement, or removal.",
    },
    {
      question: "Which apps should be checked first?",
      answer:
        "Start with anything tied to revenue, trust, measurement, or customer state: subscriptions, reviews, loyalty, search, recommendations, analytics, consent, bundles, customer accounts, and returns.",
    },
    {
      question: "What is the safest output of an app audit?",
      answer:
        "A compatibility matrix with each app's current behavior, headless integration path, data owner, fallback plan, QA scenario, and launch-blocker status. That matrix should drive scope, budget, and launch timing.",
    },
  ],
} satisfies ArticleQualityRefresh;
