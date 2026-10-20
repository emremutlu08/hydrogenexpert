export const APP_CLEANUP_ROUTE = "/shopify-app-cleanup";
export const APP_CLEANUP_CTA_HREF = "/contact#fit-review-form";

export const APP_CLEANUP_PAGE_SEO = {
  title: "Shopify App Stack Audit & Cleanup | Fixed Price from $450 | HydrogenExpert",
  description:
    "Fixed-price Shopify app audit, cleanup and speed work. Find duplicate apps, leftover code and monthly app costs. All changes on a theme copy with preview and rollback.",
  path: APP_CLEANUP_ROUTE,
} as const;

export const APP_CLEANUP_HERO = {
  eyebrow: "Shopify App Stack Audit & Cleanup",
  title: "Too many Shopify apps? Get a clear keep-or-remove plan, then a safe cleanup.",
  subhead:
    "A fixed-price audit of every installed app: what it does, where it loads, what it costs you each month, and whether to keep it, remove it, replace it with theme code or merge it. Then, if you want, I clean it up on a copy of your theme, with a preview link and a way back.",
  primaryCta: "Start with the App Stack Audit ($450)",
  secondaryCta: "Not sure which tier? Send your store URL",
} as const;

export const APP_CLEANUP_PROBLEM = {
  lead: "Most app stacks grow one fix at a time.",
  intro:
    "A reviews app here, a popup there, a page builder for one campaign, an upsell app nobody remembers installing. Over time you end up with:",
  items: [
    "Several apps doing the same job (reviews, popups, wishlists, page builders, product options, upsells, translations).",
    "Code left behind by apps you already uninstalled: snippets, scripts and app embeds that still load.",
    "Monthly app bills that nobody has added up for the year.",
    "Home, collection, product and cart pages that feel heavier than they should.",
  ],
  closing:
    "You do not need a rebuild to fix this. You need a clear list, a decision for each app and careful hands to clean it up.",
} as const;

export interface AppCleanupTier {
  id: "b1" | "b2" | "b3";
  code: "B1" | "B2" | "B3";
  name: string;
  priceLines: readonly string[];
  timeline: string;
  includesLabel: string;
  includes: readonly string[];
  notes: readonly { strong: string; text: string }[];
}

export const APP_CLEANUP_TIERS: readonly AppCleanupTier[] = [
  {
    id: "b1",
    code: "B1",
    name: "App Stack Audit (report only)",
    priceLines: [
      "$450 for stores with up to 25 apps (non-Plus)",
      "$750 for stores with 26+ apps or Shopify Plus",
    ],
    timeline: "3-5 business days",
    includesLabel: "What you get:",
    includes: [
      "Every installed app: what it does, which templates it loads on, its monthly cost (from your store invoices), and a decision: keep, remove, replace with theme code, or merge.",
      "An overlap table for apps doing the same job (reviews, popups, wishlist, page builder, product options, upsell, translation and similar).",
      "A list of leftover code from removed apps (snippets, scripts, app embeds).",
      "A \"before\" measurement of the home, collection, product and cart pages (Shopify Web Performance report plus a lab test).",
      "12-month app cost and estimated savings.",
      "A one-page summary you can hand to a manager or owner, plus a 30-minute video walkthrough.",
    ],
    notes: [
      { strong: "Nothing changes in your store.", text: "This tier is read and report only." },
      {
        strong: "Audit fee credit:",
        text: "If you start B2, B3 or a Hydrogen project within 60 days of receiving the report, the full audit fee is deducted from that work.",
      },
    ],
  },
  {
    id: "b2",
    code: "B2",
    name: "Audit + Cleanup",
    priceLines: ["$1,250-$1,750 depending on app count and Plus status"],
    timeline: "1-2 weeks",
    includesLabel: "Everything in B1, plus:",
    includes: [
      "Safe removal of up to 5 unused or overlapping apps you approve, including their leftover code.",
      "Up to 2 simple apps replaced with native Liquid sections or blocks in your theme (for example badges, tabs or FAQ, size chart, announcement bar, sticky cart).",
      "Apps that hold data (reviews, loyalty, subscriptions, email) are not replaced in this tier.",
      "All work is done on a copy of your theme. You approve it through a preview link before it goes live, and the previous theme is kept so we can roll back.",
      "Before and after measurement and a change log.",
      "14 days of support after launch.",
    ],
    notes: [],
  },
  {
    id: "b3",
    code: "B3",
    name: "Audit + Cleanup + Speed",
    priceLines: ["$2,000-$2,800"],
    timeline: "2-4 weeks",
    includesLabel: "Everything in B2, plus:",
    includes: [
      "Up to 5 apps in total replaced with Liquid.",
      "Core Web Vitals work on the main templates (home, collection, product, cart): LCP image, script deferral, lazy loading, font loading, render-blocking CSS and JS.",
      "If needed, 1-2 pages built with a page builder (PageFly, GemPages, Shogun and similar) moved into theme sections.",
      "A check that your analytics and pixel events (GA4, Meta, Klaviyo) still fire correctly.",
      "30 days of support after launch.",
      "A closing note: is Liquid enough for you, or do you actually need Hydrogen?",
    ],
    notes: [
      {
        strong: "Moving to Hydrogen later?",
        text: "50% of the B3 fee is credited toward a Hydrogen build.",
      },
    ],
  },
] as const;

export const APP_CLEANUP_COMPARISON = {
  columns: ["B1 App Stack Audit", "B2 Audit + Cleanup", "B3 Audit + Cleanup + Speed"],
  rows: [
    ["Price", "$450 / $750", "$1,250-$1,750", "$2,000-$2,800"],
    ["Timeline", "3-5 business days", "1-2 weeks", "2-4 weeks"],
    ["Full app audit and report", "Yes", "Yes", "Yes"],
    ["Changes to your store", "None", "Yes, on a theme copy", "Yes, on a theme copy"],
    ["Apps removed (with leftover code)", "0", "Up to 5", "Up to 5"],
    ["Apps replaced with Liquid", "0", "Up to 2 (simple, no data)", "Up to 5 in total"],
    ["Core Web Vitals work", "No", "No", "Yes, main templates"],
    ["Page builder pages moved to theme", "No", "No", "1-2 if needed"],
    ["Analytics and pixel check", "No", "No", "Yes"],
    ["Support after launch", "30-min walkthrough", "14 days", "30 days"],
    ["Credit toward later work", "Full fee, within 60 days", "No", "50% toward Hydrogen"],
  ],
} as const;

export const APP_CLEANUP_AUDIENCE = {
  items: [
    {
      strong: "Owners who want control before spending.",
      text: "Start with B1. You get a one-page summary and a preview-first plan, and nothing changes until you approve it.",
    },
    {
      strong: "Stores with a messy app stack.",
      text: "Duplicate reviews apps, several upsell tools, a page builder left over from an old campaign. B1 shows it, B2 cleans it.",
    },
    {
      strong: "Premium and Shopify Plus brands",
      text: "that want speed work and an honest answer on whether Hydrogen is worth it. B3 ends with a written \"Liquid or Hydrogen?\" note.",
    },
    {
      strong: "Teams that rely on page builders",
      text: "for landing pages and want those pages inside the theme. B3 covers 1-2 of them.",
    },
  ],
  notFit: {
    strong: "Not a fit for a fixed price:",
    text: "40+ apps, subscription architecture, B2B or wholesale logic, checkout extensions or Shopify Functions, multiple storefronts, or migrating review data. These are priced separately after the B1 report.",
  },
} as const;

export const APP_CLEANUP_STEPS = [
  {
    strong: "Send your store URL",
    text: "and the main problem through the form. I reply within 2 business days.",
  },
  {
    strong: "Access.",
    text: "I send a collaborator access request to your Shopify admin, or you add me as a staff account if you prefer. You can remove access at any time.",
  },
  {
    strong: "Audit (B1).",
    text: "I review every app and measure the main pages. In 3-5 business days you get the report, the one-page summary and a 30-minute video walkthrough.",
  },
  {
    strong: "You decide.",
    text: "Keep the report and do the work yourself, or move to B2 or B3. You choose which apps are removed or replaced.",
  },
  {
    strong: "Cleanup on a theme copy (B2/B3).",
    text: "Nothing touches your live theme until you have approved the preview link.",
  },
  {
    strong: "Go live with a way back.",
    text: "The previous theme is kept for rollback. You get before and after numbers and a change log.",
  },
  {
    strong: "Support.",
    text: "14 days (B2) or 30 days (B3) after launch.",
  },
] as const;

export const APP_CLEANUP_TERMS_NOTE =
  "Price and payment terms are confirmed in writing before any work starts. If you prefer, we can run the engagement through Upwork.";

export const APP_CLEANUP_PROMISE =
  "I do not promise a specific PageSpeed score. Scores move with apps, content and testing conditions. I promise a clear checklist, a written report, before and after measurements and the ability to roll back.";

export const APP_CLEANUP_FAQS = [
  {
    question: "Will the audit change anything in my store?",
    answer: "No. B1 is read and report only. Nothing in your store changes.",
  },
  {
    question: "How do you decide whether an app stays?",
    answer:
      "For each app I look at what it does, which templates it loads on and what it costs each month. Then I mark it keep, remove, replace with theme code, or merge with another app that already does the same job.",
  },
  {
    question: "Which apps will you not replace with code?",
    answer:
      "Apps that hold data, such as reviews, loyalty, subscriptions and email. They stay as apps in B2. Migrating review data is outside the fixed-price tiers.",
  },
  {
    question: "What if something breaks?",
    answer:
      "All work happens on a copy of your theme. You approve it through a preview link first, and the previous theme is kept so we can roll back.",
  },
  {
    question: "Why is it $750 for Plus or 26+ apps?",
    answer: "More apps and Plus setups mean more templates, scripts and integrations to check.",
  },
  {
    question: "Can you guarantee a PageSpeed score?",
    answer:
      "No. I promise the checklist, the report, before and after measurements and rollback, not a score.",
  },
  {
    question: "I have more than 40 apps, B2B logic or subscriptions. Can I still start?",
    answer:
      "Yes, start with the B1 audit. Work like that is priced separately once the report shows the real scope.",
  },
  {
    question: "Do I need Hydrogen instead?",
    answer:
      "Often not. Many app and speed problems are solved inside a Liquid theme. If your store really does need Hydrogen, B3 ends with a written note saying so, and the Hydrogen packages start at $2,000. If you go ahead, 50% of the B3 fee is credited toward the Hydrogen build.",
  },
  {
    question: "Does the audit fee count toward later work?",
    answer:
      "Yes. If you start B2, B3 or a Hydrogen project within 60 days of receiving the B1 report, the full audit fee is deducted.",
  },
] as const;

export const APP_CLEANUP_FINAL_CTA = {
  headline: "Get a clear answer on your app stack.",
  subtext: "Fixed price, report in 3-5 business days, nothing changes until you approve it.",
  label: "Start with the App Stack Audit ($450)",
} as const;
