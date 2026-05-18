import { describe, expect, it } from "vitest";

import { getLegacyPermanentRedirect } from "../proxy";

describe("legacy permanent redirects", () => {
  it("redirects the Google-crawled legacy Hydrogen setup guide URL", () => {
    expect(getLegacyPermanentRedirect("/blog/shopify-hydrogen-v2-setup-guide")).toBe(
      "/what-is-hydrogen",
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
