interface FaqEntry {
  question: string;
  answer: string;
}

interface BreadcrumbEntry {
  name: string;
  url: string;
}

export function asSchemaArray<const T extends ReadonlyArray<Record<string, unknown> | null | undefined>>(
  ...entries: T
) {
  return entries.filter(Boolean) as Array<Exclude<T[number], null | undefined>>;
}

export function buildFaqPageSchema(faqs: readonly FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbListSchema(items: readonly BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildPersonSchema({
  name,
  title,
  url,
  image,
  sameAs,
  id,
}: {
  name: string;
  title: string;
  url: string;
  image: string;
  sameAs: readonly string[];
  id?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    ...(id ? { "@id": id } : {}),
    name,
    jobTitle: title,
    url,
    image,
    sameAs,
    knowsAbout: [
      "Shopify Hydrogen",
      "Shopify Liquid",
      "React",
      "E-commerce performance",
      "Custom Shopify storefronts",
    ],
  };
}

export function buildProfessionalServiceSchema({
  name,
  url,
  description,
  founderName,
  sameAs,
  logo,
  image,
  founderUrl,
}: {
  name: string;
  url: string;
  description: string;
  founderName: string;
  sameAs: readonly string[];
  logo?: string;
  image?: string;
  founderUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    url,
    description,
    ...(logo ? { logo } : {}),
    ...(image ? { image } : {}),
    founder: {
      "@type": "Person",
      name: founderName,
      ...(founderUrl ? { url: founderUrl } : {}),
    },
    areaServed: "Worldwide",
    sameAs,
    serviceType: [
      "Shopify Hydrogen development",
      "Shopify Hydrogen audit",
      "Liquid to Hydrogen migration",
      "Shopify storefront performance optimization",
    ],
  };
}

export function buildServiceSchema({
  name,
  url,
  description,
  providerName,
  serviceType,
  areaServed = "Worldwide",
}: {
  name: string;
  url: string;
  description: string;
  providerName: string;
  serviceType: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url,
    description,
    serviceType,
    areaServed,
    provider: {
      "@type": "ProfessionalService",
      name: providerName,
      url,
    },
  };
}

export function buildCreativeWorkSchema({
  name,
  url,
  description,
  creatorName,
  dateModified,
}: {
  name: string;
  url: string;
  description: string;
  creatorName: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    url,
    description,
    creator: {
      "@type": "Person",
      name: creatorName,
    },
    dateModified,
  };
}

export function buildCaseStudyArticleSchema({
  headline,
  url,
  description,
  authorName,
  datePublished,
  dateModified,
  image,
  publisherLogo,
}: {
  headline: string;
  url: string;
  description: string;
  authorName: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  publisherLogo?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    url,
    description,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "HydrogenExpert",
      ...(publisherLogo
        ? {
            logo: {
              "@type": "ImageObject",
              url: publisherLogo,
            },
          }
        : {}),
    },
    ...(image ? { image } : {}),
    datePublished,
    dateModified,
    mainEntityOfPage: url,
  };
}

export function buildPublisherSchema({
  name,
  url,
  logo,
}: {
  name: string;
  url: string;
  logo: string;
}) {
  return {
    "@type": "Organization",
    name,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
  };
}

export function buildProfilePageSchema({
  url,
  name,
  description,
  person,
}: {
  url: string;
  name: string;
  description: string;
  person: Record<string, unknown>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    name,
    description,
    mainEntity: person,
  };
}
