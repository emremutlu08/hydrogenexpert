import { describe, expect, it } from "vitest";

import {
  getServicePackageByPagePath,
  getServicePackageBySlug,
  requireServicePackageByPagePath,
  SERVICE_PACKAGES,
} from "../lib/services";

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
});
