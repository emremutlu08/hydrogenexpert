import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { getCaseStudyBySlug } from "../data/caseStudies";
import {
  SOURCE_PACKS,
  STATIC_PAGE_SOURCE_METADATA,
} from "../features/content-sources";

const route = "/case-studies/eveshop-shopify-hydrogen";
const repoRoot = process.cwd();

const protectedLinks = [
  {
    href: "/shopify-hydrogen-experts",
    label: "Senior Shopify Hydrogen expertise",
  },
  {
    href: "/headless-shopify-agency",
    label: "Headless Shopify storefront support",
  },
  {
    href: "/shopify-hydrogen-seo",
    label: "Shopify Hydrogen SEO-safe implementation",
  },
] as const;

function getEveShopLinkBlock() {
  const pageSource = readFileSync(
    join(repoRoot, "app/case-studies/[slug]/page.tsx"),
    "utf8",
  );
  const match = pageSource.match(/eveshop: \[([\s\S]*?)\n    \],\n    bayam:/);

  expect(match, "EveShop link branch should remain present").not.toBeNull();
  return match?.[1] ?? "";
}

describe("EveShop case study refresh", () => {
  it("keeps per-slug source metadata tied to the approved evidence packs", () => {
    const metadata = STATIC_PAGE_SOURCE_METADATA[route];

    expect(metadata.lastVerified).toBe("2026-08-04");
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
    expect(metadata.targetKeyword).toBe("EveShop Shopify Hydrogen case study");
    expect(metadata.searchIntent).toContain("large-catalog beauty retail");
    expect(metadata.contentType).toBe("Case study");
  });

  it("locks the protected EveShop title and H1 source fields", () => {
    const study = getCaseStudyBySlug("eveshop-shopify-hydrogen");

    expect(study?.slug).toBe("eveshop-shopify-hydrogen");
    expect(study?.metaTitle).toBe("EveShop Shopify Hydrogen Case Study | Emre Mutlu");
    expect(study?.caseStudyTitle).toBe(
      "EveShop large-scale Shopify Hydrogen + mobile commerce case study",
    );
  });

  it("consolidates hiring links and preserves proof and decision destinations", () => {
    const linkBlock = getEveShopLinkBlock();
    const hrefs = [...linkBlock.matchAll(/href: "([^"]+)"/g)].map((match) => match[1]);

    expect(hrefs).toEqual([
      ...protectedLinks.map((link) => link.href),
      "/shopify-hydrogen-for-large-catalog-retail",
      "/shopify-hydrogen-for-beauty-brands",
    ]);

    for (const link of protectedLinks) {
      expect(linkBlock).toContain(`href: "${link.href}"`);
      expect(linkBlock).toContain(`label: "${link.label}"`);
    }
  });
});
