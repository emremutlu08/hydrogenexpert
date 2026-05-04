export interface PostFaqItem {
  question: string;
  answer: string;
}

export type PostHeroVisual =
  | {
      type: "none";
    }
  | {
      type: "code-card" | "brand-asset";
      src: string;
      alt: string;
      title: string;
      width?: number;
      height?: number;
      caption?: string;
    }
  | {
      type: "before-after-svg";
      title: string;
      beforeValue: string;
      afterValue: string;
      beforeLabel: string;
      afterLabel: string;
      beforeCaption: string;
      afterCaption: string;
    }
  | {
      type: "flow-diagram-svg";
      caption?: string;
      steps: Array<{
        label: string;
        body: string;
      }>;
    };

export interface PostReferenceLink {
  href: string;
  label: string;
  note: string;
}

interface PostEnhancement {
  heroVisual: PostHeroVisual;
  faq?: PostFaqItem[];
  closingPitch?: string;
  ogImage?: string;
  internalLinks?: PostReferenceLink[];
  externalLinks?: PostReferenceLink[];
}

const DEFAULT_INTERNAL_LINKS: PostReferenceLink[] = [
  {
    href: "/shopify-hydrogen-seo-guide",
    label: "Shopify Hydrogen SEO guide",
    note: "Use this when product URL, canonical, JSON-LD, and crawl consistency questions need a broader framework.",
  },
  {
    href: "/cost",
    label: "Shopify Hydrogen cost",
    note: "Use this when the technical conversation needs a realistic budget range and timeline framing.",
  },
  {
    href: "/case-studies/eveshop-shopify-hydrogen",
    label: "Production case studies",
    note: "See how Hydrogen decisions played out on a production retail storefront with real operating constraints.",
  },
  {
    href: "/shopify-hydrogen-audit",
    label: "Shopify Hydrogen audit",
    note: "Use this when the storefront needs a focused SEO, performance, and migration-risk review.",
  },
  {
    href: "/hire-me",
    label: "Work with Emre",
    note: "The direct route if your store needs a specialist instead of another agency layer.",
  },
  {
    href: "/should-i-use-it",
    label: "Should you use Hydrogen?",
    note: "A practical decision filter when the business case still needs checking.",
  },
];

export const POST_ENHANCEMENTS: Record<string, PostEnhancement> = {
  "shopify-hydrogen-vs-liquid": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-vs-liquid-cover.jpg",
      alt: "Technical comparison visual showing classic Shopify theme architecture beside a custom Hydrogen storefront system.",
      title: "Shopify Hydrogen vs Liquid technical comparison",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Is Shopify Hydrogen better than Liquid?",
        answer:
          "Not automatically. Hydrogen is better when custom UX, performance architecture, and feature velocity justify the operational cost. Liquid is usually better when a theme can still solve the business problem cleanly.",
      },
      {
        question: "When should a Shopify Plus brand stay on Liquid?",
        answer:
          "Stay on Liquid when the main issues are theme quality, app sprawl, content structure, or focused UX fixes that do not require a custom storefront application.",
      },
    ],
    internalLinks: [
      {
        href: "/when-not-to-use-hydrogen",
        label: "When not to use Hydrogen",
        note: "The clearest internal page for cases where Liquid is still the better move.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this before choosing between Liquid cleanup and Hydrogen migration.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "The commercial service path when the comparison points toward migration.",
      },
    ],
  },
  "shopify-hydrogen-nextjs": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-nextjs-cover.jpg",
      alt: "Technical storefront architecture visual comparing Hydrogen commerce modules with a general Next.js application structure.",
      title: "Shopify Hydrogen and Next.js architecture comparison",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Is Shopify Hydrogen the same thing as Next.js?",
        answer:
          "No. Hydrogen is Shopify's React framework for custom storefronts. Next.js is a general React framework. The right choice depends on Shopify integration needs, hosting, team preferences, and storefront architecture.",
      },
    ],
    internalLinks: [
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Shopify Hydrogen storefront",
        note: "Use this when the comparison leads to a Hydrogen build path.",
      },
      {
        href: "/shopify-hydrogen-seo-guide",
        label: "Shopify Hydrogen SEO guide",
        note: "Use this for crawl, metadata, canonical, and structured-data decisions in Hydrogen.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen",
        label: "Shopify Hydrogen documentation",
        note: "Official Shopify documentation for Hydrogen storefront development.",
      },
      {
        href: "https://nextjs.org/docs",
        label: "Next.js documentation",
        note: "Official Next.js documentation for the general React framework comparison point.",
      },
    ],
  },
  "liquid-to-hydrogen-migration-checklist": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/liquid-to-hydrogen-migration-checklist-cover.jpg",
      alt: "Ecommerce migration control visual with storefront routes, redirects, QA checkpoints, and Hydrogen module planning.",
      title: "Liquid to Hydrogen migration checklist visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "What should a Liquid to Hydrogen migration checklist include?",
        answer:
          "It should cover routes, redirects, canonical URLs, product and collection templates, analytics, app replacements, cart and checkout handoff, structured data, QA, and launch rollback planning.",
      },
    ],
    internalLinks: [
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration service",
        note: "The commercial landing page for brands ready to scope the migration.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this if the migration checklist exposes too many unresolved risks.",
      },
      {
        href: "/cost",
        label: "Shopify Hydrogen cost",
        note: "Use this to translate migration complexity into budget range.",
      },
    ],
  },
  "shopify-hydrogen-performance-checklist": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-performance-checklist-cover.jpg",
      alt: "Hydrogen performance diagnostics visual with product grids, cache layers, optimized media tiles, and request timing panels.",
      title: "Shopify Hydrogen performance checklist visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "What matters most in Shopify Hydrogen performance?",
        answer:
          "Start with server-rendered primary content, focused Storefront API queries, intentional caching, image loading, third-party script control, and mobile Core Web Vitals.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance optimization",
        note: "The service page for live storefront cleanup.",
      },
      {
        href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
        label: "Homepage performance case note",
        note: "A related production note about moving primary data back into SSR.",
      },
    ],
  },
  "shopify-hydrogen-seo-checklist": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-seo-checklist-cover.jpg",
      alt: "Hydrogen SEO architecture visual with crawl paths, canonical route cards, sitemap nodes, and structured data blocks.",
      title: "Shopify Hydrogen SEO checklist visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "What belongs in a Shopify Hydrogen SEO checklist?",
        answer:
          "Check route metadata, canonical URLs, sitemap and robots output, JSON-LD, server-rendered content, product state consistency, no-JavaScript rendering, and internal links.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo-guide",
        label: "Shopify Hydrogen SEO guide",
        note: "The main HydrogenExpert SEO pillar page.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this when checklist issues need a senior review.",
      },
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen SEO and performance optimization",
        note: "The service path for existing Hydrogen SEO fixes.",
      },
    ],
  },
  "shopify-plus-hydrogen": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/shopify-plus-hydrogen-cover.jpg",
      alt: "Enterprise ecommerce architecture visual for Shopify Plus Hydrogen with storefront modules and integration panels.",
      title: "Shopify Plus Hydrogen architecture visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Does every Shopify Plus brand need Hydrogen?",
        answer:
          "No. Shopify Plus makes Hydrogen more plausible because brands often have bigger UX, integration, and performance needs, but the business case still has to justify the custom storefront.",
      },
    ],
    internalLinks: [
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit for Plus brands",
        note: "Start here when a Plus team needs a business-first Hydrogen decision.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Shopify Hydrogen storefront",
        note: "Use this when Plus-level needs justify custom storefront development.",
      },
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "Production retail case study",
        note: "A retail-scale context for production Hydrogen work.",
      },
    ],
  },
  "shopify-hydrogen-developer-vs-agency": {
    heroVisual: {
      type: "code-card",
      src: "/generated/blog/hydrogen-developer-vs-agency-cover.jpg",
      alt: "Shopify Hydrogen delivery model visual comparing direct senior engineering ownership with layered agency handoffs.",
      title: "Shopify Hydrogen developer vs agency comparison visual",
      width: 1672,
      height: 941,
    },
    faq: [
      {
        question: "Should I hire a Shopify Hydrogen developer or an agency?",
        answer:
          "Hire a senior specialist when you need direct strategy and implementation. Hire an agency when the scope requires a larger team, broader creative services, or ongoing account management.",
      },
    ],
    internalLinks: [
      {
        href: "/hire-me",
        label: "Hire a Shopify Hydrogen developer",
        note: "The direct path for senior specialist delivery.",
      },
      {
        href: "/services",
        label: "Shopify Hydrogen services",
        note: "See audit, migration, build, optimization, and support paths.",
      },
      {
        href: "/shopify-hydrogen-support-retainer",
        label: "Hydrogen support retainer",
        note: "Use this when the team needs ongoing senior help without a full agency layer.",
      },
    ],
  },
  "shopify-hydrogen-product-description-ssr-seo": {
    heroVisual: {
      type: "flow-diagram-svg",
      caption:
        "A Shopify Hydrogen product description should come from the route data and render into the initial HTML before any accordion JavaScript runs.",
      steps: [
        {
          label: "Query",
          body: "Fetch the standard Shopify product description field in the product route loader.",
        },
        {
          label: "Render",
          body: "Render the description inside the server-rendered product page markup.",
        },
        {
          label: "Enhance",
          body: "Keep the accordion interaction as progressive enhancement, not as the only source of content.",
        },
      ],
    },
    faq: [
      {
        question: "Should Shopify Hydrogen product descriptions be server-rendered?",
        answer:
          "Yes. If product descriptions matter for shoppers, SEO, or AI crawlers, they should be part of the initial product page HTML instead of appearing only after a client-side fetch.",
      },
      {
        question: "Which Shopify field should power the product description?",
        answer:
          "Use Shopify's standard product description fields. The Storefront API exposes product description data, including descriptionHtml when formatted HTML is needed.",
      },
      {
        question: "Can the description still live inside an accordion?",
        answer:
          "Yes. The accordion can stay. The important distinction is that the accordion content should already exist in the server-rendered HTML; JavaScript should only enhance the open and close behavior.",
      },
      {
        question: "How do you verify the fix?",
        answer:
          "Open View Source and search for a unique sentence from the product description. Then disable JavaScript and confirm the same description remains visible or accessible on the product page.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in. If your Hydrogen product pages hide important catalog content behind client-side fetches, I can help move the right data back into SSR without breaking the storefront UX.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo-guide",
        label: "Shopify Hydrogen SEO guide",
        note: "Use this for the broader crawl, metadata, canonical, sitemap, and structured-data checklist.",
      },
      {
        href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
        label: "Hydrogen homepage SSR case note",
        note: "A related production note about moving primary homepage data out of client-side effects.",
      },
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance, SEO, and UX optimization",
        note: "The service path for existing Hydrogen storefronts where crawlability, speed, or UX has drifted.",
      },
      {
        href: "/hire-me",
        label: "Work with Emre",
        note: "The direct route if your storefront needs senior Hydrogen implementation without agency layers.",
      },
    ],
    externalLinks: [
      {
        href: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
        label: "Google JavaScript SEO basics",
        note: "Google explains JavaScript rendering risks and notes that server-side or pre-rendering is still useful for users and crawlers.",
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/objects/Product",
        label: "Storefront API Product object",
        note: "Official Shopify reference for product fields, including description and descriptionHtml.",
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Hydrogen SEO documentation",
        note: "Official Shopify guidance for Hydrogen metadata, canonical URLs, JSON-LD, sitemap, and robots.txt.",
      },
    ],
  },
  "shopify-hydrogen-metaobjects-page-specific-sections": {
    heroVisual: {
      type: "flow-diagram-svg",
      caption:
        "A reusable Shopify Hydrogen section can stay developer-owned in code while its page-specific copy and imagery stay merchant-editable in Shopify Admin.",
      steps: [
        {
          label: "Model",
          body: "Create one metaobject definition for the content section.",
        },
        {
          label: "Map",
          body: "Create entries for the page contexts that need different content.",
        },
        {
          label: "Render",
          body: "Resolve the right entry by route and fall back safely when no entry exists.",
        },
      ],
    },
    faq: [
      {
        question: "When should a Shopify Hydrogen section use metaobjects?",
        answer:
          "Use metaobjects when the section has a repeatable structure but page-specific content, such as a heading, description, and image that merchants need to edit without code changes.",
      },
      {
        question: "Are metaobjects better than hardcoded page content?",
        answer:
          "They are better when the content will change by page or campaign. Hardcoded content is fine for stable UI copy, but metaobjects are safer when merchandising, brand, or marketing teams need ownership.",
      },
      {
        question: "Should every product and collection page get its own metaobject entry?",
        answer:
          "Not by default. A smaller set of page-context entries is easier to maintain. Product and collection defaults can stay shared unless there is a real business reason to personalize them.",
      },
      {
        question: "Can metaobject-driven sections help SEO?",
        answer:
          "Yes, if the content is rendered server-side as part of the initial HTML. The SEO value comes from crawlable, route-specific content, not from the metaobject itself.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in. If your Hydrogen storefront needs merchant-editable sections without turning every update into a developer ticket, I can help you model the content cleanly and keep the frontend stable.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/shopify-hydrogen-seo-guide",
        label: "Shopify Hydrogen SEO guide",
        note: "Use this when page-specific content needs to stay crawlable, canonical, and structured.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Shopify Hydrogen services",
        note: "Use this when merchant-editable content is part of a broader custom storefront build.",
      },
      {
        href: "/case-studies/bayam-jewelry-shopify-hydrogen",
        label: "Bayam Jewelry case study",
        note: "The broader context for luxury catalog and showroom-led Hydrogen storefront work.",
      },
      {
        href: "/hire-me",
        label: "Work with Emre",
        note: "The direct route if your storefront needs senior Hydrogen implementation without agency layers.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/apps/build/metaobjects",
        label: "Shopify metaobjects overview",
        note: "Official Shopify documentation explaining metaobject definitions, entries, fields, and storefront access.",
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/queries/metaobjects",
        label: "Storefront API metaobjects query",
        note: "Official Storefront API reference for querying active metaobject entries by type.",
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/objects/Metaobject",
        label: "Storefront API Metaobject object",
        note: "Official object reference for metaobject fields, handles, IDs, and updated timestamps.",
      },
    ],
  },
  "shopify-hydrogen-variant-selection-fallback": {
    heroVisual: {
      type: "flow-diagram-svg",
      caption:
        "A safer Shopify Hydrogen variant resolver treats the shopper's clicked option as a rule, then searches for the nearest available variant inside that scope.",
      steps: [
        {
          label: "Click",
          body: "The shopper chooses a product option such as Width=9mm.",
        },
        {
          label: "Lock",
          body: "The resolver filters variants so every candidate keeps Width=9mm.",
        },
        {
          label: "Fallback",
          body: "Only then does it choose the nearest available Length, Metal, or other option.",
        },
      ],
    },
    faq: [
      {
        question: "How should Shopify Hydrogen choose a fallback variant?",
        answer:
          "The safest pattern is to lock the option the shopper clicked first, then score only the available variants inside that locked set. The clicked option should be a hard constraint, not one preference among many.",
      },
      {
        question: "Why do URL search params matter for Hydrogen product options?",
        answer:
          "Hydrogen product pages often store selected options in the URL, such as Width=9mm and Length=18. That makes variants shareable and crawlable, but it also means the resolver must update the URL without changing an option the shopper explicitly chose.",
      },
      {
        question: "Should an out-of-stock Shopify Hydrogen variant redirect automatically?",
        answer:
          "It can, but only carefully. If the selected variant is out of stock, redirect to the nearest available variant while preserving the primary product dimension, such as Width, so the shopper does not feel the interface ignored their intent.",
      },
      {
        question: "Is wrong variant fallback a Shopify Hydrogen bug?",
        answer:
          "Usually no. Hydrogen gives developers the flexibility to build custom product option logic. The bug normally lives in the storefront resolver when it searches all variants globally instead of scoping candidates to the clicked option.",
      },
      {
        question: "What is the most important test for multi-option Hydrogen products?",
        answer:
          "Test that the returned variant always contains the option the shopper clicked. If they click Width=9mm, every fallback candidate and final URL must still contain Width=9mm.",
      },
      {
        question: "Does this pattern still apply after VariantSelector was deprecated?",
        answer:
          "Yes. Hydrogen's modern product option flow uses getProductOptions and related adjacent variant data instead of relying on VariantSelector, but the storefront rule is the same: preserve the clicked option before choosing a fallback.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in. If your Hydrogen product pages have edge cases like variant fallback, out-of-stock navigation, or option URLs that feel fragile, I can help you fix the logic without turning the storefront into a bigger rebuild than it needs to be.",
    ogImage: "/og-post.svg",
    externalLinks: [
      {
        href: "https://hydrogen.shopify.dev/update/april-2025",
        label: "Hydrogen April 2025 update",
        note: "Official Hydrogen release notes covering the VariantSelector deprecation and getProductOptions migration path.",
      },
      {
        href: "https://shopify.dev/docs/api/hydrogen/latest/utilities/getproductoptions",
        label: "getProductOptions documentation",
        note: "Official Hydrogen utility reference for building modern product option matrices.",
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Hydrogen SEO documentation",
        note: "Official Shopify guidance for Hydrogen metadata, canonical URLs, JSON-LD, sitemap, and robots.txt.",
      },
    ],
  },
  "cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen": {
    heroVisual: {
      type: "before-after-svg",
      title: "Homepage filter tabs refactor",
      beforeValue: "4-5s",
      afterValue: "2s",
      beforeLabel: "All tabs fetched on load",
      afterLabel: "First tab SSR, rest on click",
      beforeCaption: "96 products fetched per section through a client-side effect path.",
      afterCaption: "8 products in the route loader, lazy-loaded tabs only after real interaction.",
    },
    faq: [
      {
        question: "Why was useEffect the wrong place for this homepage fetch?",
        answer:
          "Because it pushed primary page data to the client after hydration. That delayed the moment the homepage felt ready and removed product listings from the initial HTML, which is the wrong tradeoff for a category-heavy storefront.",
      },
      {
        question: "What changed after moving the first tab to the route loader?",
        answer:
          "The first tab became part of the server-rendered response. That put real product HTML in the initial response, improved the ready state, and passed the simplest SSR check, loading the page with JavaScript disabled.",
      },
      {
        question: "Should every tab be preloaded on a Hydrogen homepage?",
        answer:
          "Usually no. Most users interact with the first tab, some click the second, and very few open every tab in every section. Preloading everything is often an expensive guess that hurts the common path.",
      },
      {
        question: "Where does intentional cache tuning fit in this pattern?",
        answer:
          "It matters when collection freshness and edge caching need to match catalog behavior. The bigger point is not one exact number. It is moving the first tab into the loader and caching the query deliberately instead of relying on a client-side effect.",
      },
    ],
    closingPitch:
      "Your Shopify store works, but every new feature takes 3x longer than last year? That is when I come in. If your homepage, collection, or product pages are hitting the ceiling of what your current stack can deliver, I can help you see whether Hydrogen is the right move, and if it is, how to implement it without these traps.",
    ogImage: "/og-post.svg",
    internalLinks: [
      {
        href: "/cost",
        label: "Shopify Hydrogen cost",
        note: "Use this when you need the commercial range behind a more serious storefront discussion.",
      },
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "Production case studies",
        note: "See where Hydrogen was used on real storefronts with different catalogs, teams, and constraints.",
      },
      {
        href: "/hire-me",
        label: "Work with Emre",
        note: "The direct route if your storefront is already hitting the same delivery bottlenecks.",
      },
      {
        href: "/should-i-use-it",
        label: "Should you use Hydrogen?",
        note: "A practical decision filter if the technical fix looks real but the business case still needs checking.",
      },
    ],
    externalLinks: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/data-fetching/cache",
        label: "Hydrogen caching docs",
        note: "Official Shopify guidance on caching patterns and cache control choices in Hydrogen.",
      },
      {
        href: "https://react.dev/learn/you-might-not-need-an-effect",
        label: "React: You Might Not Need an Effect",
        note: "The React reference that matches the main architectural lesson in this refactor.",
      },
    ],
  },
};

export function getPostEnhancement(slug: string) {
  const enhancement = POST_ENHANCEMENTS[slug] ?? { heroVisual: { type: "none" as const } };

  return {
    ...enhancement,
    internalLinks: enhancement.internalLinks ?? DEFAULT_INTERNAL_LINKS,
  };
}
