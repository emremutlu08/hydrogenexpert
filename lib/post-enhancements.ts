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
    href: "/case-studies",
    label: "Production case studies",
    note: "See how Hydrogen decisions played out across real storefronts with different constraints.",
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
        href: "/case-studies",
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
