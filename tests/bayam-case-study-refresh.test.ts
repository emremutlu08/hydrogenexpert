import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { getCaseStudyBySlug } from "../data/caseStudies";
import { SOURCE_PACKS, STATIC_PAGE_SOURCE_METADATA } from "../features/content-sources";
import { BRAND_CLIENT_ASSETS } from "../lib/brand-client-assets";

const route = "/case-studies/bayam-jewelry-shopify-hydrogen";
const study = getCaseStudyBySlug("bayam-jewelry-shopify-hydrogen")!;

function getBayamLinkBlock() {
  const pageSource = readFileSync(
    join(process.cwd(), "app/case-studies/[slug]/page.tsx"),
    "utf8",
  );
  const match = pageSource.match(/bayam: \[([\s\S]*?)\n    \],\n    "rebel-bunny":/);

  expect(match, "Bayam link branch should remain present").not.toBeNull();
  return match?.[1] ?? "";
}

describe("Bayam case study refresh", () => {
  it("preserves approved identity, positioning, stack, and empty proof fields", () => {
    expect(study).toMatchObject({
      id: "bayam",
      slug: "bayam-jewelry-shopify-hydrogen",
      clientName: "Bayam Jewelry",
      metaTitle: "Bayam Jewelry Shopify Hydrogen Case Study | Emre Mutlu",
      metaDescription:
        "Bayam Jewelry Shopify Hydrogen case study for a luxury jewelry and watch storefront with premium catalog discovery, showroom trust, and storefront screenshots.",
      caseStudyTitle: "Bayam Jewelry high-AOV luxury ecommerce discovery case study",
      portfolioAngle: "High-AOV luxury ecommerce, jewelry discovery, filtering, and trust UX.",
      tagline: "A Shopify Hydrogen storefront for luxury jewelry, watches, and showroom-led trust.",
      role: "Shopify Hydrogen Developer",
      industry: "Fine jewelry and luxury watches",
      liveUrl: "https://bayamjewelry.com/",
    });
    expect(study.techStack).toEqual([
      "Shopify", "Shopify Hydrogen", "React", "JavaScript", "Responsive UI",
    ]);
    expect(study.metrics).toEqual([]);
    expect(study.testimonial).toBeNull();
  });

  it("preserves the approved imagery and screenshot context", () => {
    const assets = BRAND_CLIENT_ASSETS.bayam;
    expect(study.logo).toEqual({
      src: assets.logoSrc, alt: assets.logoAlt, label: "Bayam Jewelry",
    });
    expect(study.heroImage).toEqual({ src: assets.imageSrc, alt: assets.imageAlt });
    expect(study.screenshots).toEqual([{
      src: assets.imageSrc,
      alt: assets.imageAlt,
      caption: "Live storefront homepage screenshot captured from bayamjewelry.com.",
    }]);
  });

  it("starts with a dual-catalog operator lesson and gives practical buying guidance", () => {
    expect(study.outcome).toMatch(/^When jewelry and watch buyers/);
    expect(study.outcome).toContain("distinct discovery paths");
    const results = study.results.join(" ");
    expect(results).toMatch(/collection introductions and sub-category pathways/i);
    expect(results).toMatch(/jewelry browsing by style and gifting/i);
    expect(results).toMatch(/watch comparisons by brand, condition, and model/i);
    expect(results).toMatch(/financing, shipping, and returns/i);
    expect(results).toMatch(/premium presentation.*without hiding useful product context/i);
    expect(study.seoPerformanceRisks[0]).toMatch(/jewelry and watch collections.*separately crawlable introductions/i);
    expect([study.outcome, results, ...study.seoPerformanceRisks].join(" ")).not.toContain("\u2014");
  });

  it("narrows search intent without changing evidence or verification date", () => {
    const metadata = STATIC_PAGE_SOURCE_METADATA[route];
    expect(metadata.lastVerified).toBe("2026-09-05");
    expect(metadata.claimTypes).toEqual([
      "case_study_fact", "emre_experience", "commercial_opinion",
    ]);
    expect(metadata.sourceMap).toEqual([
      SOURCE_PACKS.caseStudyEvidence, SOURCE_PACKS.emreProductionExperience,
    ]);
    expect(metadata.targetKeyword).toBe("Bayam Jewelry Shopify Hydrogen case study");
    expect(metadata.contentType).toBe("Case study");
    expect(metadata.searchIntent).toMatch(/evaluate luxury jewelry and watch storefront delivery/i);
    expect(metadata.searchIntent).toContain("dual-catalog discovery");
  });

  it("adds exactly one vertical decision link after the existing Bayam destinations", () => {
    const block = getBayamLinkBlock();
    const hrefs = [...block.matchAll(/href: "([^"]+)"/g)].map((match) => match[1]);
    expect(hrefs).toEqual([
      "/shopify-hydrogen-experts",
      "/headless-shopify-agency",
      "/shopify-hydrogen-seo",
      "/custom-shopify-hydrogen-storefront",
      "/shopify-hydrogen-for-luxury-jewelry",
    ]);
    expect(block).toMatch(/href: "\/shopify-hydrogen-for-luxury-jewelry",\s*label: "Shopify Hydrogen for luxury jewelry and watches",\s*note: "Vertical decision guidance built on the Bayam premium-catalog context\."/);
  });
});
