import { describe, expect, it } from "vitest";

import nextConfig from "../next.config";

const requestedPermanentRedirects = [
  {
    source: "/case-studies/bayam-jewelry",
    destination: "/case-studies/bayam-jewelry-shopify-hydrogen",
    permanent: true,
  },
  {
    source: "/case-studies/rebel-bunny",
    destination: "/case-studies/rebel-bunny-shopify-hydrogen",
    permanent: true,
  },
  {
    source: "/blog/shopify-hydrogen-seo",
    destination: "/shopify-hydrogen-seo",
    permanent: true,
  },
  {
    source: "/shopify-headless-commerce",
    destination: "/headless-shopify-agency",
    permanent: true,
  },
  {
    source: "/shopify-storefront-api-developer",
    destination: "/shopify-hydrogen-developer",
    permanent: true,
  },
] as const;

describe("next.config redirects", () => {
  it("keeps the requested SEO recovery redirects permanent", async () => {
    const redirects = await nextConfig.redirects?.();

    expect(redirects).toEqual(expect.arrayContaining([...requestedPermanentRedirects]));
  });
});
