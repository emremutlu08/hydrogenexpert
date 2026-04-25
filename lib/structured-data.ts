interface FaqEntry {
  question: string;
  answer: string;
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
