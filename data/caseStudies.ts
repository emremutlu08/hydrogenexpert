import { BRAND_CLIENT_ASSETS } from "@/lib/brand-client-assets";

export interface CaseStudyMetric {
  label: string;
  value?: string;
  valueBefore?: string;
  valueAfter?: string;
}

export interface CaseStudyScreenshot {
  src?: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorPhoto?: string;
}

export interface CaseStudyEntry {
  id: "eveshop" | "bayam" | "rebel-bunny";
  clientName: string;
  tagline: string;
  role: string;
  industry: string;
  liveUrl?: string;
  logo: {
    src?: string;
    alt: string;
    label: string;
  };
  heroImage?: {
    src?: string;
    alt: string;
  };
  problem: string;
  approach: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  techStack: string[];
  screenshots: CaseStudyScreenshot[];
  pendingProof: string[];
  testimonial?: CaseStudyTestimonial | null;
}

export const CASE_STUDIES: readonly CaseStudyEntry[] = [
  {
    id: "eveshop",
    clientName: "EveShop",
    tagline: "Turkey's first production Shopify Hydrogen storefront for a nationwide cosmetics retailer.",
    role: "Lead Developer / Frontend Team Lead at Machinarium",
    industry: "Cosmetics and personal care retail",
    liveUrl: "https://www.eveshop.com.tr/",
    logo: {
      src: BRAND_CLIENT_ASSETS.eveshop.logoSrc,
      alt: BRAND_CLIENT_ASSETS.eveshop.logoAlt,
      label: "EveShop",
    },
    problem:
      "EveShop is a nationwide cosmetics and personal care retailer that opened its first store in April 2015 and launched ecommerce roughly 1.5 years later. By the time this Hydrogen work started, the business was serving a large retail footprint and a broad catalog across beauty and personal care. The storefront had to support digital-first shoppers, campaign traffic, and customers moving between physical stores and the site without making merchandising feel chaotic. In practical terms, the pressure was not just page speed. It was how to present a high-SKU catalog cleanly, keep browsing understandable, and give the team a storefront surface that could handle enterprise-like retail complexity without collapsing into theme-level compromise.",
    approach:
      "As lead developer and frontend team lead at Machinarium, I worked on the Hydrogen web storefront alongside the React Native mobile apps. The implementation leaned on Shopify Hydrogen, React, Remix, GraphQL Storefront API patterns, and GTM-backed tracking from the broader stack documented in my CV. The job was not to over-design the storefront; it was to create a stable commerce surface for a large catalog, establish reusable frontend patterns, and help the team ship consistently. That included architectural decisions, mentoring, and component-level delivery standards so campaign pages, category browsing, and commerce flows could evolve without turning the codebase into a series of one-off patches.",
    outcome:
      "The live result became a useful strategic reference point for production Hydrogen work on a national retail brand. Hydrogen can work at this level, but the long-term value depends on the organization staying committed to owning and maintaining a custom storefront after launch. That is exactly why I position Hydrogen as a business decision first. EveShop is strong proof of production experience, but it is also proof that headless only pays off when the operating model is ready for it.",
    metrics: [],
    techStack: [
      "Shopify Hydrogen",
      "React",
      "React Native",
      "Remix",
      "TypeScript",
      "GraphQL",
      "GTM",
    ],
    screenshots: [
      {
        alt: "EveShop approved project asset pending",
        caption: "Approved project asset to be added.",
      },
    ],
    pendingProof: [
      "Client testimonial, verified before/after metrics, and approved screenshots are pending approval.",
    ],
    testimonial: null,
  },
  {
    id: "bayam",
    clientName: "Bayam Jewelry",
    tagline: "A Shopify Hydrogen storefront for luxury jewelry, watches, and showroom-led trust.",
    role: "Shopify Hydrogen Developer",
    industry: "Fine jewelry and luxury watches",
    liveUrl: "https://bayamjewelry.com/",
    logo: {
      src: BRAND_CLIENT_ASSETS.bayam.logoSrc,
      alt: BRAND_CLIENT_ASSETS.bayam.logoAlt,
      label: "Bayam Jewelry",
    },
    heroImage: {
      src: BRAND_CLIENT_ASSETS.bayam.imageSrc,
      alt: BRAND_CLIENT_ASSETS.bayam.imageAlt,
    },
    problem:
      "Bayam Jewelry operates out of NYC's Diamond District and sells real gold jewelry, diamonds, and luxury watches. The storefront had to balance two different discovery behaviors in one surface: jewelry buyers often browse by style, gifting, and taste, while watch shoppers compare by brand, condition, and model-specific details. On top of that, the experience needed to feel refined enough for a luxury audience rather than like a generic catalog. The challenge was less about adding more pages and more about making premium discovery feel coherent.",
    approach:
      "I built and refined Bayam as a Shopify Hydrogen application with a strong emphasis on performance, responsiveness, and design cohesion. In the public updates I shared about the project, two changes capture the direction well: refreshing the homepage hero to strengthen the first impression, and adding collection intros plus sub-category pathways to make browsing clearer. That work mattered because Bayam is not a single-category brand. The storefront has to carry gold jewelry, diamond pieces, and luxury watches in one experience while preserving a premium tone. The implementation focused on cleaner navigation, clearer collection context, and a more intentional luxury feel instead of treating discovery like a flat theme menu.",
    outcome:
      "The result is a storefront that feels more aligned with Bayam's Diamond District positioning and easier to browse across very different product types. For me, the case study matters because it shows where Hydrogen becomes commercially useful in luxury ecommerce. The win is not 'headless' as a label. The win is giving a high-trust, style-sensitive catalog a storefront that can present jewelry and watches without forcing the shopper through a generic one-size-fits-all browsing pattern.",
    metrics: [],
    techStack: [
      "Shopify",
      "Shopify Hydrogen",
      "React",
      "JavaScript",
      "Responsive UI",
    ],
    screenshots: [
      {
        src: BRAND_CLIENT_ASSETS.bayam.imageSrc,
        alt: "Bayam Jewelry storefront preview",
        caption: "Homepage and luxury brand presentation layer.",
      },
    ],
    pendingProof: [
      "Client testimonial and verified before/after metrics are pending approval.",
    ],
    testimonial: null,
  },
  {
    id: "rebel-bunny",
    clientName: "Rebel Bunny Matcha",
    tagline: "A social-first Shopify Hydrogen storefront spanning DTC, wholesale, and education.",
    role: "Shopify Developer",
    industry: "Premium matcha, DTC, and wholesale",
    liveUrl: "https://rebelbunny.com/",
    logo: {
      src: BRAND_CLIENT_ASSETS.rebelBunny.logoSrc,
      alt: BRAND_CLIENT_ASSETS.rebelBunny.logoAlt,
      label: "Rebel Bunny Matcha",
    },
    heroImage: {
      src: BRAND_CLIENT_ASSETS.rebelBunny.imageSrc,
      alt: BRAND_CLIENT_ASSETS.rebelBunny.imageAlt,
    },
    problem:
      "Rebel Bunny is a premium matcha brand with a storefront that has to do more than sell tins of tea. The public site combines direct-to-consumer shopping, a partner flow for premium cafes and artisan brands, and Matchacation, an owned education surface built into the brand experience. That creates a very different storefront pressure from a standard DTC theme build. Mobile presentation matters because discovery is social and creator-led, but the site also has to hold product detail, brand story, education, and partner acquisition together without feeling fragmented.",
    approach:
      "My role was storefront development for a bold, conversion-oriented Shopify build with custom product templates, promotional surfaces, and cart and checkout flows optimized for mobile and desktop. The public stack details on my CV list Shopify Hydrogen, React, Remix, GraphQL, TypeScript, and JavaScript for this project, while the live site itself shows the shape of the work: a DTC shop, a partner application path, and Matchacation content all living in one branded system. Rather than splitting those experiences across disconnected tools, the implementation keeps them inside one coherent storefront. That is the kind of setup where Hydrogen earns its complexity: when brand, education, and commerce need to move together instead of being bolted on later.",
    outcome:
      "The outcome is a storefront that supports both near-term conversion and longer-term brand building. The live store carries shopping, partner interest, and Matchacation content in one branded surface instead of splitting those journeys across disconnected landing pages. As a case study, Rebel Bunny shows Hydrogen at its most useful for social-first DTC: one system handling commerce, education, and partnership growth without turning the experience into a stack of disconnected tools.",
    metrics: [],
    techStack: [
      "Shopify Hydrogen",
      "React",
      "Remix",
      "TypeScript",
      "GraphQL",
      "JavaScript",
    ],
    screenshots: [
      {
        src: BRAND_CLIENT_ASSETS.rebelBunny.imageSrc,
        alt: "Rebel Bunny storefront preview",
        caption: "DTC storefront with brand-led editorial presentation.",
      },
    ],
    pendingProof: [
      "Client testimonial and verified before/after metrics are pending approval.",
    ],
    testimonial: null,
  },
] as const;
