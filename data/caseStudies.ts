import { BRAND_CLIENT_ASSETS } from "../lib/brand-client-assets";

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
  sourceLabel?: string;
  sourceUrl?: string;
  date?: string;
}

export interface CaseStudyEntry {
  id: "eveshop" | "bayam" | "rebel-bunny";
  slug: "eveshop-shopify-hydrogen" | "bayam-jewelry-shopify-hydrogen" | "rebel-bunny-shopify-hydrogen";
  clientName: string;
  metaTitle: string;
  metaDescription: string;
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
  context: string;
  constraints: readonly string[];
  technicalDecisions: readonly string[];
  seoPerformanceRisks: readonly string[];
  approach: string;
  implementation: string;
  outcome: string;
  results: readonly string[];
  metrics: CaseStudyMetric[];
  techStack: string[];
  screenshots: CaseStudyScreenshot[];
  testimonial?: CaseStudyTestimonial | null;
}

export const CASE_STUDIES: readonly CaseStudyEntry[] = [
  {
    id: "eveshop",
    slug: "eveshop-shopify-hydrogen",
    clientName: "EveShop",
    metaTitle: "EveShop Shopify Hydrogen Case Study | Emre Mutlu",
    metaDescription:
      "EveShop Shopify Hydrogen case study covering a nationwide cosmetics retailer, production Hydrogen delivery, retail catalog pressure, and approved proof gaps.",
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
    context:
      "A national beauty and personal care retailer needed a storefront that could support retail-scale catalog browsing, campaign traffic, and a production ecommerce operation rather than a small experimental headless build.",
    constraints: [
      "Large retail catalog with many browsing paths and campaign moments.",
      "Need for reusable frontend patterns across ecommerce and mobile-adjacent work.",
      "Production launch expectations for a nationally visible storefront.",
      "Long-term value depended on the organization continuing to maintain a custom storefront.",
    ],
    technicalDecisions: [
      "Use Shopify Hydrogen, React, Remix, TypeScript, GraphQL, and GTM-backed tracking patterns documented in the broader project stack.",
      "Create stable frontend patterns instead of one-off campaign or category patches.",
      "Keep the storefront architecture focused on commerce readability, product discovery, and team maintainability.",
    ],
    seoPerformanceRisks: [
      "High-SKU catalog pages needed crawlable, understandable product and category content.",
      "Campaign traffic required predictable routes and stable page behavior.",
      "A custom storefront needed ongoing ownership so performance and SEO did not degrade after launch.",
    ],
    approach:
      "As lead developer and frontend team lead at Machinarium, I worked on the Hydrogen web storefront alongside the React Native mobile apps. The implementation leaned on Shopify Hydrogen, React, Remix, GraphQL Storefront API patterns, and GTM-backed tracking from the broader stack documented in my CV. The job was not to over-design the storefront; it was to create a stable commerce surface for a large catalog, establish reusable frontend patterns, and help the team ship consistently. That included architectural decisions, mentoring, and component-level delivery standards so campaign pages, category browsing, and commerce flows could evolve without turning the codebase into a series of one-off patches.",
    implementation:
      "The implementation centered on production Hydrogen storefront delivery, reusable component standards, GraphQL Storefront API usage, and coordination across the web storefront and related mobile application work.",
    outcome:
      "The live result became a useful strategic reference point for production Hydrogen work on a national retail brand. Hydrogen can work at this level, but the long-term value depends on the organization staying committed to owning and maintaining a custom storefront after launch. That is exactly why I position Hydrogen as a business decision first. EveShop is strong proof of production experience, but it is also proof that headless only pays off when the operating model is ready for it.",
    results: [
      "Production Shopify Hydrogen experience on a nationally visible retail storefront.",
      "Reusable frontend patterns for a broad cosmetics and personal care catalog.",
      "A clear proof point for the business-first framing behind Hydrogen decisions.",
    ],
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
    screenshots: [],
    testimonial: null,
  },
  {
    id: "bayam",
    slug: "bayam-jewelry-shopify-hydrogen",
    clientName: "Bayam Jewelry",
    metaTitle: "Bayam Jewelry Shopify Hydrogen Case Study | Emre Mutlu",
    metaDescription:
      "Bayam Jewelry Shopify Hydrogen case study for a luxury jewelry and watch storefront with premium catalog discovery, showroom trust, and approved visual proof.",
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
    context:
      "A luxury jewelry and watch retailer needed a Hydrogen storefront that could support premium browsing, showroom-led trust, and multiple catalog mindsets inside one brand surface.",
    constraints: [
      "Jewelry and watch shoppers compare products differently.",
      "The storefront needed to feel premium without hiding useful product context.",
      "Collection browsing needed clearer entry points than a flat category surface.",
      "The implementation had to improve presentation without inventing unsupported proof claims.",
    ],
    technicalDecisions: [
      "Use Shopify Hydrogen for a custom storefront surface instead of forcing luxury discovery into generic theme patterns.",
      "Strengthen the homepage hero and collection intros to improve first impression and browse clarity.",
      "Add sub-category pathways so jewelry, diamond, and watch browsing could stay coherent.",
    ],
    seoPerformanceRisks: [
      "Luxury collection pages needed enough context to avoid thin category surfaces.",
      "Product discovery had to support different search behaviors across jewelry and watches.",
      "Visual refinement could not come at the cost of mobile responsiveness or crawlable collection copy.",
    ],
    approach:
      "I built and refined Bayam as a Shopify Hydrogen application with a strong emphasis on performance, responsiveness, and design cohesion. In the public updates I shared about the project, two changes capture the direction well: refreshing the homepage hero to strengthen the first impression, and adding collection intros plus sub-category pathways to make browsing clearer. That work mattered because Bayam is not a single-category brand. The storefront has to carry gold jewelry, diamond pieces, and luxury watches in one experience while preserving a premium tone. The implementation focused on cleaner navigation, clearer collection context, and a more intentional luxury feel instead of treating discovery like a flat theme menu.",
    implementation:
      "The implementation focused on the Hydrogen storefront layer, responsive UI, homepage presentation, collection context, and browse paths that make the mixed luxury catalog easier to understand.",
    outcome:
      "The result is a storefront that feels more aligned with Bayam's Diamond District positioning and easier to browse across very different product types. For me, the case study matters because it shows where Hydrogen becomes commercially useful in luxury ecommerce. The win is not 'headless' as a label. The win is giving a high-trust, style-sensitive catalog a storefront that can present jewelry and watches without forcing the shopper through a generic one-size-fits-all browsing pattern.",
    results: [
      "Stronger premium storefront presentation for a Diamond District jewelry and watch brand.",
      "Clearer collection context and sub-category discovery paths.",
      "A practical example of Hydrogen supporting luxury catalog nuance.",
    ],
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
    testimonial: null,
  },
  {
    id: "rebel-bunny",
    slug: "rebel-bunny-shopify-hydrogen",
    clientName: "Rebel Bunny Matcha",
    metaTitle: "Rebel Bunny Shopify Hydrogen Case Study | Emre Mutlu",
    metaDescription:
      "Rebel Bunny Shopify Hydrogen case study for a social-first DTC matcha storefront combining commerce, partner acquisition, education, and 5.0 Upwork feedback.",
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
    context:
      "A premium matcha brand needed one branded Shopify storefront to carry DTC shopping, wholesale or partner interest, and education without splitting those journeys into disconnected surfaces.",
    constraints: [
      "Social-first discovery made mobile presentation and brand energy especially important.",
      "Commerce, education, and partner acquisition had to live together coherently.",
      "Custom product templates and promotional surfaces needed to support conversion without flattening the brand.",
      "The case study could show approved storefront context, but not invented metrics or quotes.",
      "Public Upwork feedback is available for the ongoing Shopify Hydrogen storefront contract.",
    ],
    technicalDecisions: [
      "Use Shopify Hydrogen, React, Remix, TypeScript, GraphQL, and JavaScript for a custom storefront system.",
      "Keep DTC shopping, partner application flow, and Matchacation content inside one coherent brand experience.",
      "Build custom product and promotional surfaces across mobile and desktop instead of relying on a generic theme flow.",
    ],
    seoPerformanceRisks: [
      "Educational content needed to be visible inside the storefront, not hidden in disconnected landing pages.",
      "Mobile performance and clarity mattered because social traffic often arrives on small screens.",
      "The brand, product, and partner journeys needed route-level clarity so crawlers and shoppers could understand the site.",
    ],
    approach:
      "My role was storefront development for a bold, conversion-oriented Shopify build with custom product templates, promotional surfaces, and cart and checkout flows optimized for mobile and desktop. The public stack details on my CV list Shopify Hydrogen, React, Remix, GraphQL, TypeScript, and JavaScript for this project, while the live site itself shows the shape of the work: a DTC shop, a partner application path, and Matchacation content all living in one branded system. Rather than splitting those experiences across disconnected tools, the implementation keeps them inside one coherent storefront. That is the kind of setup where Hydrogen earns its complexity: when brand, education, and commerce need to move together instead of being bolted on later.",
    implementation:
      "The implementation covered custom storefront development, mobile and desktop presentation, promotional surfaces, product templates, cart and checkout flows, and branded content paths inside one Hydrogen-powered commerce experience.",
    outcome:
      "The outcome is a storefront that supports both near-term conversion and longer-term brand building. The live store carries shopping, partner interest, and Matchacation content in one branded surface instead of splitting those journeys across disconnected landing pages. As a case study, Rebel Bunny shows Hydrogen at its most useful for social-first DTC: one system handling commerce, education, and partnership growth without turning the experience into a stack of disconnected tools.",
    results: [
      "One branded storefront surface for DTC shopping, partner interest, and education.",
      "Custom product and promotional surfaces shaped around social-first discovery.",
      "A strong example of Hydrogen supporting commerce and brand storytelling together.",
      "5.0 Upwork feedback for the ongoing custom Hydrogen storefront work.",
    ],
    metrics: [
      {
        label: "Upwork feedback",
        value: "5.0",
      },
    ],
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
    testimonial: {
      quote: "Emre is a fantastic developer and an even better human.",
      authorName: "Rebel Bunny client",
      authorRole: "Shopify Hydrogen storefront client",
      authorCompany: "Rebel Bunny Matcha",
      sourceLabel: "Upwork feedback",
      sourceUrl: "https://www.upwork.com/freelancers/emremutlu",
      date: "May 3, 2026",
    },
  },
] as const;

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug) ?? null;
}

export function getAllCaseStudySlugs() {
  return CASE_STUDIES.map((study) => study.slug);
}
