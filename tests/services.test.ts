import { describe, expect, it } from "vitest";

import {
  getServicePackageByPagePath,
  getServicePackageBySlug,
  requireServicePackageByPagePath,
  SERVICE_PACKAGES,
} from "../features/services/registry";

const targetCommercialRoutes = [
  "/shopify-hydrogen-agency",
  "/headless-shopify-agency",
  "/shopify-hydrogen-developer",
  "/custom-shopify-hydrogen-storefront",
  "/shopify-hydrogen-expert",
  "/shopify-hydrogen-experts",
  "/liquid-to-hydrogen-migration",
  "/shopify-hydrogen-seo",
  "/shopify-hydrogen-audit",
  "/shopify-hydrogen-cost",
] as const;

describe("SERVICE_PACKAGES", () => {
  it("contains the canonical commercial landing routes", () => {
    const pagePaths = SERVICE_PACKAGES.map((servicePackage) => servicePackage.pagePath);

    for (const route of targetCommercialRoutes) {
      expect(pagePaths).toContain(route);
    }
  });

  it("keeps service page paths unique", () => {
    const pagePaths = SERVICE_PACKAGES.map((servicePackage) => servicePackage.pagePath);

    expect(new Set(pagePaths).size).toBe(pagePaths.length);
  });

  it("keeps slugs unique", () => {
    const slugs = SERVICE_PACKAGES.map((servicePackage) => servicePackage.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("provides SEO and page content for every service landing page", () => {
    for (const servicePackage of SERVICE_PACKAGES) {
      expect(servicePackage.metaTitle).toBeTruthy();
      expect(servicePackage.metaDescription).toBeTruthy();
      expect(servicePackage.heroTitle).toBeTruthy();
      expect(servicePackage.faq.length).toBeGreaterThanOrEqual(3);
      expect(servicePackage.relatedLinks.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("keeps lookup helpers aligned with the registry", () => {
    for (const servicePackage of SERVICE_PACKAGES) {
      expect(getServicePackageByPagePath(servicePackage.pagePath)?.slug).toBe(servicePackage.slug);
      expect(requireServicePackageByPagePath(servicePackage.pagePath).slug).toBe(servicePackage.slug);
      expect(getServicePackageBySlug(servicePackage.slug)?.pagePath).toBe(servicePackage.pagePath);
    }

    expect(getServicePackageByPagePath("/missing-service")).toBeNull();
    expect(() => requireServicePackageByPagePath("/missing-service")).toThrow(
      "Missing service package for /missing-service.",
    );
  });

  it("preserves source metadata and offer snapshots for every service page", () => {
    for (const servicePackage of SERVICE_PACKAGES) {
      expect(servicePackage.lastVerified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(servicePackage.claimTypes.length).toBeGreaterThan(0);
      expect(servicePackage.sourceMap.length).toBeGreaterThan(0);
      expect(servicePackage.offerSnapshot.entryPoint).toBeTruthy();
      expect(servicePackage.offerSnapshot.typicalTimeline).toBeTruthy();
      expect(servicePackage.offerSnapshot.expectedOutput).toBeTruthy();
      expect(servicePackage.offerSnapshot.qualification).toBeTruthy();

      for (const source of servicePackage.sourceMap) {
        expect(source.label).toBeTruthy();
        expect(source.usedFor).toBeTruthy();
        expect(source.topic).toBeTruthy();
        expect(source.sourceType).toBeTruthy();
      }
    }
  });

  it("keeps the cost guide focused on HydrogenExpert pricing and adjacent intent boundaries", () => {
    const costGuide = requireServicePackageByPagePath("/shopify-hydrogen-cost");

    expect(costGuide.metaTitle).toBe("Shopify Hydrogen Pricing Guide: $2K-$5K by Scope");
    expect(costGuide.metaTitle.length).toBeLessThanOrEqual(60);
    expect(costGuide.metaDescription).toBe(
      "Estimate your Shopify Hydrogen storefront budget ($2K-$5K) by scope, not traffic or pageviews — see what drives cost before requesting a scope review.",
    );
    expect(costGuide.metaDescription.length).toBeLessThanOrEqual(155);
    expect(costGuide.heroTitle).toContain("Shopify Hydrogen pricing");
    expect(costGuide.summary).toContain("HydrogenExpert's own fixed-scope");
    expect(costGuide.commercialIntent).toContain(
      "not official Shopify or Oxygen platform pricing",
    );
    expect(costGuide.relatedLinks.map((link) => link.href)).toEqual(
      expect.arrayContaining([
        "/shopify-hydrogen-packages",
        "/shopify-hydrogen-maintenance-cost",
      ]),
    );
    expect(costGuide.faq.some((item) => item.question.includes("official Shopify or Oxygen"))).toBe(
      true,
    );
    expect(costGuide.faq.some((item) => item.question.includes("Liquid or no rebuild"))).toBe(true);
    expect(costGuide.targetKeyword).toBe("shopify hydrogen pricing");
    expect(costGuide.searchIntent).toContain("first-build service budget");
  });
});
