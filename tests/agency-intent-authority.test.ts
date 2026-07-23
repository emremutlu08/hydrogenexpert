import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  COMMERCIAL_VERIFICATION_ROUTES,
  INDEXING_RECOVERY_ROUTES,
  LAST_SIGNIFICANT_UPDATE,
  STATIC_ROUTE_SITEMAP_OVERRIDES,
} from "../features/public-discovery/manifest";
import { requireServicePackageByPagePath } from "../features/services/registry";

const agencyRoute = "/shopify-hydrogen-agency";
const repoRoot = process.cwd();

describe("Shopify Hydrogen agency intent authority", () => {
  it("keeps homepage and footer inbound links to the agency owner", () => {
    const homepageSource = readFileSync(join(repoRoot, "app/page.tsx"), "utf8");
    const footerSource = readFileSync(join(repoRoot, "components/Footer.tsx"), "utf8");

    expect(homepageSource).toContain(
      `requireServicePackageByPagePath("${agencyRoute}")`,
    );
    expect(homepageSource).toContain("href: agencyService.pagePath");
    expect(footerSource).toContain(`href: "${agencyRoute}"`);
  });

  it("routes plural expert comparison intent to the agency owner without merging intents", () => {
    const agency = requireServicePackageByPagePath(agencyRoute);
    const experts = requireServicePackageByPagePath("/shopify-hydrogen-experts");
    const expert = requireServicePackageByPagePath("/shopify-hydrogen-expert");

    expect(experts.relatedLinks.map((link) => link.href)).toContain(agencyRoute);
    expect(expert.relatedLinks.map((link) => link.href)).not.toContain(agencyRoute);
    expect(new Set([agency.pagePath, experts.pagePath, expert.pagePath]).size).toBe(3);
  });

  it("keeps the agency owner in recovery, verification, and high-intent sitemap coverage", () => {
    expect(INDEXING_RECOVERY_ROUTES).toContain(agencyRoute);
    expect(COMMERCIAL_VERIFICATION_ROUTES).toContain(agencyRoute);
    expect(STATIC_ROUTE_SITEMAP_OVERRIDES[agencyRoute]).toEqual({
      lastModified: LAST_SIGNIFICANT_UPDATE,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });
});
