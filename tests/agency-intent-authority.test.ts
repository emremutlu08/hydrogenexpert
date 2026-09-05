import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { COMMERCIAL_VERIFICATION_ROUTES, INDEXING_RECOVERY_ROUTES, HIRING_INTENT_CONSOLIDATION_UPDATE, STATIC_ROUTE_SITEMAP_OVERRIDES } from "../features/public-discovery/manifest";
import { HIRING_INTENT_OWNER_PATH, RETIRED_COMMERCIAL_INTENT_PATHS } from "../features/search-intent";
import { SERVICE_PACKAGES, requireServicePackageByPagePath } from "../features/services/registry";

describe("consolidated hiring intent authority", () => {
  it("links homepage and footer to the hiring owner", () => {
    const homepage = readFileSync(join(process.cwd(), "app/page.tsx"), "utf8");
    const footer = readFileSync(join(process.cwd(), "components/Footer.tsx"), "utf8");
    expect(homepage).toContain(`requireServicePackageByPagePath("${HIRING_INTENT_OWNER_PATH}")`);
    expect(homepage).toContain("href: hiringService.pagePath");
    expect(footer).toContain(`href: "${HIRING_INTENT_OWNER_PATH}"`);
  });

  it("preserves direct implementation and broader agency choices without retired services or self-links", () => {
    const owner = requireServicePackageByPagePath(HIRING_INTENT_OWNER_PATH);
    expect(owner.deliverables.join(" ")).toContain("Direct implementation");
    expect(owner.deliverables.join(" ")).toContain("broader agency");
    expect(owner.relatedLinks.map((link) => link.href)).toContain("/headless-shopify-agency");
    for (const service of SERVICE_PACKAGES) {
      expect(RETIRED_COMMERCIAL_INTENT_PATHS).not.toContain(service.pagePath);
      for (const links of [service.relatedLinks, service.contextualLinks]) {
        expect(new Set(links.map((link) => link.href)).size).toBe(links.length);
        for (const link of links) {
          expect(RETIRED_COMMERCIAL_INTENT_PATHS).not.toContain(link.href);
          expect(link.href).not.toBe(service.pagePath);
        }
      }
    }
  });

  it("advertises only the final owner in recovery and verification", () => {
    expect(INDEXING_RECOVERY_ROUTES).toContain(HIRING_INTENT_OWNER_PATH);
    expect(COMMERCIAL_VERIFICATION_ROUTES).toContain(HIRING_INTENT_OWNER_PATH);
    expect(STATIC_ROUTE_SITEMAP_OVERRIDES[HIRING_INTENT_OWNER_PATH]).toEqual({ lastModified: HIRING_INTENT_CONSOLIDATION_UPDATE, changeFrequency: "weekly", priority: 0.9 });
    for (const path of RETIRED_COMMERCIAL_INTENT_PATHS) {
      expect(INDEXING_RECOVERY_ROUTES).not.toContain(path);
      expect(COMMERCIAL_VERIFICATION_ROUTES).not.toContain(path);
    }
  });
});
