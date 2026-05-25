import { describe, expect, it } from "vitest";

import {
  buildCaseStudyArticleSchema,
  buildPublisherSchema,
} from "../lib/structured-data";

describe("structured data builders", () => {
  it("can attach verified sameAs profiles to publisher organizations", () => {
    const publisher = buildPublisherSchema({
      name: "HydrogenExpert",
      url: "https://hydrogenexpert.co",
      logo: "https://hydrogenexpert.co/brand/hydrogenexpert-logo-icon.png",
      id: "https://hydrogenexpert.co/#organization",
      sameAs: ["https://www.linkedin.com/in/emremutlujs/"],
    });

    expect(publisher).toMatchObject({
      "@type": "Organization",
      "@id": "https://hydrogenexpert.co/#organization",
      sameAs: ["https://www.linkedin.com/in/emremutlujs/"],
    });
  });

  it("adds sameAs and speakable signals to case-study article publishers", () => {
    const article = buildCaseStudyArticleSchema({
      headline: "Case study",
      url: "https://hydrogenexpert.co/case-studies/example",
      description: "Example case study.",
      authorName: "Emre Mutlu",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      publisherSameAs: ["https://www.linkedin.com/in/emremutlujs/"],
      speakableCssSelectors: [".section-heading", ".surface-card p"],
    });

    expect(article.publisher).toMatchObject({
      "@type": "Organization",
      sameAs: ["https://www.linkedin.com/in/emremutlujs/"],
    });
    expect(article).toMatchObject({
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".section-heading", ".surface-card p"],
      },
    });
  });
});
