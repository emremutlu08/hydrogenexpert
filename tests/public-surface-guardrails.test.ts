import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { PACKAGE_PAGE_DISCOVERY } from "../features/public-discovery/manifest";
import { buildLlmsTxt } from "../lib/llms";
import { SERVICE_PACKAGES } from "../lib/services";
import { getStaticSitemapRoutes } from "../lib/sitemap-entries";

const repoRoot = process.cwd();

const criticalRouteFiles = [
  ["/", "app/page.tsx"],
  [PACKAGE_PAGE_DISCOVERY.path, "app/shopify-hydrogen-packages/page.tsx"],
  ["/shopify-hydrogen-developer", "app/shopify-hydrogen-developer/page.tsx"],
  ["/custom-shopify-hydrogen-storefront", "app/custom-shopify-hydrogen-storefront/page.tsx"],
  ["/resources", "app/resources/page.tsx"],
  ["/contact", "app/contact/page.tsx"],
  ["/thank-you", "app/thank-you/page.tsx"],
  ["/api/lead-capture", "app/api/lead-capture/route.ts"],
  ["/sitemap.xml", "app/sitemap.ts"],
  ["/robots.txt", "app/robots.ts"],
  ["/llms.txt", "app/llms.txt/route.ts"],
  ["/llms-full.txt", "app/llms-full.txt/route.ts"],
  ["/feed.xml", "app/feed.xml/route.ts"],
] as const;

describe("public surface guardrails", () => {
  it("keeps critical public route files in place", () => {
    for (const [route, filePath] of criticalRouteFiles) {
      expect(existsSync(join(repoRoot, filePath)), `${route} should be served by ${filePath}`).toBe(
        true,
      );
    }
  });

  it("keeps service landing pages discoverable in the static sitemap route set", () => {
    const routes = getStaticSitemapRoutes();

    expect(new Set(routes).size).toBe(routes.length);
    expect(routes).toContain("/");
    expect(routes).toContain(PACKAGE_PAGE_DISCOVERY.path);
    expect(routes).toContain("/resources");

    for (const servicePackage of SERVICE_PACKAGES) {
      expect(routes).toContain(servicePackage.pagePath);
    }
  });

  it("keeps llms.txt generated from the service registry", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://hydrogenexpert.co";
    const llms = buildLlmsTxt();

    expect(llms).toContain("## Core pages");
    expect(llms).toContain(`[Packages](${PACKAGE_PAGE_DISCOVERY.canonicalUrl})`);

    for (const servicePackage of SERVICE_PACKAGES) {
      expect(llms).toContain(
        `[${servicePackage.name}](https://hydrogenexpert.co${servicePackage.pagePath})`,
      );
    }
  });
});
