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
}: {
  name: string;
  title: string;
  url: string;
  image: string;
  sameAs: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
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
}: {
  name: string;
  url: string;
  description: string;
  founderName: string;
  sameAs: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    url,
    description,
    founder: {
      "@type": "Person",
      name: founderName,
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
