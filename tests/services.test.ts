import { describe, expect, it } from "vitest";

import { SERVICE_PACKAGES } from "../lib/services";

const targetCommercialRoutes = [
  "/shopify-hydrogen-agency",
  "/headless-shopify-agency",
  "/shopify-hydrogen-developer",
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

  it("provides SEO and page content for every service landing page", () => {
    for (const servicePackage of SERVICE_PACKAGES) {
      expect(servicePackage.metaTitle).toBeTruthy();
      expect(servicePackage.metaDescription).toBeTruthy();
      expect(servicePackage.heroTitle).toBeTruthy();
      expect(servicePackage.faq.length).toBeGreaterThanOrEqual(3);
      expect(servicePackage.relatedLinks.length).toBeGreaterThanOrEqual(3);
    }
  });
});
