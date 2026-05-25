import { describe, expect, it } from "vitest";

import {
  COMMERCIAL_VERIFICATION_ROUTES,
  getPublicDiscoverySitemapRoutes,
  INTERNAL_PACKAGE_LINK_SOURCE_ROUTES,
  LLMS_CORE_PAGE_ENTRIES,
  NOINDEX_STATIC_ROUTES,
  PACKAGE_PAGE_DISCOVERY,
} from "../features/public-discovery/manifest";

function expectUnique(values: readonly string[]) {
  expect(new Set(values).size).toBe(values.length);
}

describe("public discovery manifest", () => {
  it("keeps static sitemap, noindex, llms, and commercial routes unique", () => {
    expectUnique(getPublicDiscoverySitemapRoutes());
    expectUnique(NOINDEX_STATIC_ROUTES);
    expectUnique(LLMS_CORE_PAGE_ENTRIES.map((entry) => entry.path));
    expectUnique(COMMERCIAL_VERIFICATION_ROUTES);
  });

  it("keeps the package route present across discovery surfaces", () => {
    expect(getPublicDiscoverySitemapRoutes()).toContain(PACKAGE_PAGE_DISCOVERY.path);
    expect(LLMS_CORE_PAGE_ENTRIES.some((entry) => entry.path === PACKAGE_PAGE_DISCOVERY.path)).toBe(true);
    expect(COMMERCIAL_VERIFICATION_ROUTES).toContain(PACKAGE_PAGE_DISCOVERY.path);
    expect(INTERNAL_PACKAGE_LINK_SOURCE_ROUTES).toContain("/");
  });
});
