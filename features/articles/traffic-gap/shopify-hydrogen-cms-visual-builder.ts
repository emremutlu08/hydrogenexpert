import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
  title: "Shopify Hydrogen CMS and Visual Builder Decision Guide",
  slug: "shopify-hydrogen-cms-visual-builder",
  description:
    "Compare Metaobjects, Sanity, Builder, Pack, Weaverse, and custom Hydrogen components for merchant-editable content.",
  category: "CMS",
  status: "published",
  publishAt: PUBLISH_DATE,
  updatedAt: PUBLISH_DATE,
  author: OWNER.name,
  metaTitle: "Shopify Hydrogen CMS Guide | Metaobjects, Sanity, Builder, Pack",
  metaDescription:
    "Choose a Shopify Hydrogen CMS path: Metaobjects, Sanity, Builder, Pack, Weaverse, or custom components based on workflow risk.",
  h1: "Shopify Hydrogen CMS and visual builder decision guide",
  intro: [
    "Hydrogen does not remove the content workflow question. It makes that question more important because every section, landing page, product story, and campaign module needs a clear owner.",
    "The safest CMS choice depends on who edits the storefront, how often layout changes, whether content is Shopify-centric, and how much custom engineering the merchant can maintain.",
  ],
  sections: [
    {
      title: "Metaobjects are best for structured Shopify-native content",
      body: [
        "Metaobjects work well when content is strongly tied to Shopify data: product callouts, reusable sections, brand facts, collection copy, and controlled landing blocks. They are not a complete visual builder by themselves.",
      ],
    },
    {
      title: "Sanity fits complex editorial content",
      bullets: [
        "Use Sanity when content spans campaigns, guides, lookbooks, editorial workflows, approvals, and non-Shopify channels.",
        "Budget for schema design, preview wiring, content modeling, and frontend query maintenance.",
        "Do not add Sanity just because the site is headless; add it when the editorial workflow needs it.",
      ],
    },
    {
      title: "Builder, Pack, and Weaverse solve page control differently",
      bullets: [
        "Visual builders help when marketers need layout control without waiting for developers.",
        "They still need component boundaries, data rules, QA, and performance discipline.",
        "Treat them as workflow products, not magic replacements for storefront architecture.",
      ],
    },
    {
      title: "Custom components fit stable sections",
      body: [
        "If the store only needs a small set of repeatable sections, custom Hydrogen components with Shopify-managed data may be cheaper and easier to maintain than a full visual editing layer.",
      ],
    },
    {
      title: "The practical decision table",
      bullets: [
        "Mostly Shopify data and controlled fields: Metaobjects plus custom components.",
        "Heavy editorial program: Sanity or another headless CMS.",
        "Frequent landing page layout changes: Pack, Weaverse, Builder, or a similar visual builder.",
        "Small fixed-scope launch: keep the content model narrow first.",
      ],
    },
  ],
  conclusion:
    "Pick the content system around editor behavior, not around the most impressive demo. A smaller model that the merchant can actually maintain usually wins.",
  links: [
    { href: "/custom-shopify-hydrogen-storefront", label: "Custom Hydrogen storefront" },
    { href: "/shopify-hydrogen-packages", label: "Hydrogen build packages" },
    { href: "/blog/shopify-hydrogen-metaobjects-page-specific-sections", label: "Metaobjects production note" },
    { href: "/contact", label: "Request Scope Review" },
  ],
  sources: [
    {
      href: "https://www.builder.io/m/hydrogen-cms/",
      label: "Builder: Hydrogen CMS",
      note: "English visual CMS source adapted into a buyer workflow checklist.",
      external: true,
    },
    {
      href: "https://weaverse.io/comparisons/vs-sanity",
      label: "Weaverse vs Sanity",
      note: "English comparison source translated into tool-fit criteria.",
      external: true,
    },
    {
      href: "https://docs.packdigital.com/getting-started/introduction",
      label: "Pack Digital documentation",
      note: "English DXP reference used for visual builder positioning.",
      external: true,
    },
    {
      href: "https://flux.agency/partners/sanity",
      label: "Flux: Sanity CMS for Shopify Hydrogen",
      note: "English Sanity positioning source used for editorial workflow context.",
      external: true,
    },
  ],
} as const satisfies Article;

export const refresh = {
  summary: [
    "The CMS decision is really an ownership decision. Metaobjects keep content close to Shopify, Sanity and Storyblok give structured editorial systems, Builder, Pack, and Weaverse can improve visual editing, and custom components can be the simplest answer when content variation is controlled.",
    "The mistake is choosing a builder because editors want flexibility before defining which pages should be flexible. Hydrogen projects age better when merchants can edit the right surfaces without turning every component into an open-ended layout system.",
  ],
  takeaways: [
    {
      label: "Editor need",
      value:
        "Define who edits product storytelling, campaign pages, landing pages, navigation copy, and localized content before choosing tooling.",
    },
    {
      label: "Build risk",
      value:
        "Visual freedom can create SEO, performance, brand, and QA risk if the component model is not constrained.",
    },
    {
      label: "Safe start",
      value:
        "Ship a small editable system first: page sections, product content, preview, approval, and production QA.",
    },
  ],
  sections: [
    {
      title: "A practical CMS decision matrix",
      bullets: [
        "Metaobjects fit structured Shopify-native content such as product specs, badges, buying guides, and reusable merchandising data.",
        "Sanity or Storyblok fit teams that need stronger editorial modeling, roles, workflows, references, and content APIs outside Shopify.",
        "Builder, Pack, and Weaverse fit teams that need visual composition, but only when component boundaries and preview rules are clear.",
        "Custom React components fit high-control storefronts where the team values predictable performance and fewer moving parts.",
      ],
    },
    {
      title: "Do not confuse page building with content governance",
      body: [
        "A visual builder can make campaign work faster, but it does not automatically create good content governance. Merchants still need rules for which fields are required, which components can appear on SEO-sensitive routes, how previews are reviewed, and who can publish changes that affect conversion paths.",
        "The best Hydrogen CMS setup usually gives editors meaningful control over content while keeping product data, navigation, pricing, structured data, and core purchase flows under stricter engineering ownership.",
      ],
    },
    {
      title: "Questions for vendors and implementation teams",
      ordered: [
        "Can the CMS preview a Hydrogen route with production-like data?",
        "Can required fields protect SEO titles, summaries, images, and product references?",
        "Can editors localize content without breaking route shape or hreflang?",
        "Can the implementation cache content safely without stale campaign pages?",
        "Can the team roll back a bad content publish without a code deploy?",
      ],
    },
    {
      title: "A sane first scope",
      body: [
        "Start with the pages that change most often and have commercial impact: campaign landers, collection storytelling, product education, and reusable proof blocks. Leave global layout, checkout-adjacent flows, canonical behavior, and app integration logic in code until the editing model has proven itself.",
      ],
    },
  ],
  faq: [
    {
      question: "Can Shopify Metaobjects replace a headless CMS?",
      answer:
        "Sometimes. Metaobjects are useful for structured Shopify-native content, but they are not a full editorial system for every team. If editors need complex workflows, previews, localization, or cross-channel content modeling, a dedicated CMS may be worth the extra integration.",
    },
    {
      question: "Are visual builders safe for Hydrogen SEO?",
      answer:
        "They can be, but only when important content renders in HTML, metadata is controlled, image fields are required, and editors cannot publish layouts that hide headings, product links, or structured content from crawlers.",
    },
    {
      question: "What should be editable first?",
      answer:
        "Prioritize high-change, high-value content: campaign pages, collection copy, product education, banners, FAQs, and proof blocks. Keep cart logic, checkout handoff, canonical rules, and core product data under stricter control.",
    },
  ],
} satisfies ArticleQualityRefresh;
