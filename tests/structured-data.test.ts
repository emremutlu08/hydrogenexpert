import { describe, expect, it } from "vitest";

import { buildPublisherSchema } from "../lib/structured-data";

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
});
