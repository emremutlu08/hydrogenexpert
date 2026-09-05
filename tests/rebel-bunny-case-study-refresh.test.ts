import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { getCaseStudyBySlug } from "../data/caseStudies";
import {
  SOURCE_PACKS,
  STATIC_PAGE_SOURCE_METADATA,
} from "../features/content-sources";

const route = "/case-studies/rebel-bunny-shopify-hydrogen";
const repoRoot = process.cwd();

const protectedHrefs = [
  "/shopify-hydrogen-experts",
  "/headless-shopify-agency",
  "/shopify-hydrogen-seo",
  "/custom-shopify-hydrogen-storefront",
] as const;

function getRebelBunnyLinkBlock() {
  const pageSource = readFileSync(
    join(repoRoot, "app/case-studies/[slug]/page.tsx"),
    "utf8",
  );
  const match = pageSource.match(/"rebel-bunny": \[([\s\S]*?)\n    \],\n    kirazev:/);

  expect(match, "Rebel Bunny link branch should remain present").not.toBeNull();
  return match?.[1] ?? "";
}

describe("Rebel Bunny case study refresh", () => {
  it("keeps per-route source metadata tied to the approved May evidence", () => {
    const metadata = STATIC_PAGE_SOURCE_METADATA[route];

    expect(metadata.lastVerified).toBe("2026-05-03");
    expect(metadata.claimTypes).toEqual([
      "case_study_fact",
      "emre_experience",
      "commercial_opinion",
    ]);
    expect(metadata.sourceMap).toEqual([
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ]);
    expect(metadata.targetKeyword).toBe("Rebel Bunny Shopify Hydrogen case study");
    expect(metadata.searchIntent).toBe(
      "Evaluate production Shopify Hydrogen experience for social-first DTC, education, and partner acquisition",
    );
    expect(metadata.contentType).toBe("Case study");
  });

  it("preserves the approved testimonial, rating, source, and date", () => {
    const study = getCaseStudyBySlug("rebel-bunny-shopify-hydrogen");
    const rating = study?.metrics.find((metric) => metric.label === "Upwork feedback");

    expect(study?.testimonial?.quote).toBe(
      "Emre is a fantastic developer and an even better human.",
    );
    expect(rating?.value).toBe("5.0");
    expect(study?.testimonial?.sourceUrl).toBe(
      "https://www.upwork.com/freelancers/emremutlu",
    );
    expect(study?.testimonial?.date).toBe("May 3, 2026");
  });

  it("uses time-neutral proof wording and starts with the operator lesson", () => {
    const study = getCaseStudyBySlug("rebel-bunny-shopify-hydrogen");
    const proofCopy = [...(study?.constraints ?? []), ...(study?.results ?? [])].join(" ");

    expect(proofCopy.toLowerCase()).not.toContain("ongoing");
    expect(study?.outcome).toMatch(
      /^When commerce, education, and partner acquisition must work as one system, keep those journeys in a coherent Hydrogen storefront rather than disconnected tools\./,
    );
  });

  it("consolidates hiring links and preserves the other destinations", () => {
    const hrefs = [...getRebelBunnyLinkBlock().matchAll(/href: "([^"]+)"/g)].map(
      (match) => match[1],
    );

    expect(hrefs).toEqual(protectedHrefs);
  });
});
