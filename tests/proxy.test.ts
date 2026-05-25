import { describe, expect, it } from "vitest";

import { getLegacyPermanentRedirect } from "../proxy";

describe("legacy permanent redirects", () => {
  it("redirects the Google-crawled legacy Hydrogen setup guide URL", () => {
    expect(getLegacyPermanentRedirect("/blog/shopify-hydrogen-v2-setup-guide")).toBe(
      "/what-is-hydrogen",
    );
  });

  it("redirects unpublished production-note URLs to live canonical resources", () => {
    expect(getLegacyPermanentRedirect("/blog/hydrogen-json-ld-product-state")).toBe(
      "/shopify-hydrogen-seo",
    );
    expect(getLegacyPermanentRedirect("/blog/hydrogen-sitemap-robots-oxygen")).toBe(
      "/shopify-hydrogen-seo",
    );
    expect(getLegacyPermanentRedirect("/blog/shopify-hydrogen-performance-checklist")).toBe(
      "/shopify-hydrogen-performance-optimization",
    );
    expect(getLegacyPermanentRedirect("/blog/shopify-storefront-mcp-explained")).toBe(
      "/resources",
    );
    expect(getLegacyPermanentRedirect("/blog/hydrogen-variant-urls-seo")).toBe(
      "/shopify-hydrogen-seo",
    );
    expect(getLegacyPermanentRedirect("/blog/shopify-hydrogen-route-mapping")).toBe(
      "/liquid-to-hydrogen-migration",
    );
    expect(getLegacyPermanentRedirect("/blog/shopify-apps-in-hydrogen-what-to-check")).toBe(
      "/shopify-hydrogen-audit",
    );
  });

  it("normalizes trailing slashes before matching legacy URLs", () => {
    expect(getLegacyPermanentRedirect("/blog/shopify-hydrogen-v2-setup-guide/")).toBe(
      "/what-is-hydrogen",
    );
  });

  it("does not redirect current published blog URLs", () => {
    expect(getLegacyPermanentRedirect("/blog/shopify-hydrogen-product-description-ssr-seo")).toBe(
      null,
    );
  });
});
