import { describe, expect, it } from "vitest";

import nextConfig from "../next.config";
import { findRedirectChains, LEGACY_PERMANENT_REDIRECTS } from "../lib/legacy-redirects";

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
    destination: "/shopify-hydrogen-expert",
    permanent: true,
  },
  {
    source: "/shopify-hydrogen-experts",
    destination: "/shopify-hydrogen-expert",
    permanent: true,
  },
  {
    source: "/shopify-hydrogen-developer",
    destination: "/shopify-hydrogen-expert",
    permanent: true,
  },
  {
    source: "/blog/how-to-find-shopify-hydrogen-expert",
    destination: "/shopify-hydrogen-expert",
    permanent: true,
  },
] as const;

describe("next.config redirects", () => {
  it("keeps the requested SEO recovery redirects permanent", async () => {
    const redirects = await nextConfig.redirects?.();

    expect(redirects).toEqual(expect.arrayContaining([...requestedPermanentRedirects]));
  });

  it("never chains one permanent redirect into another", () => {
    expect(findRedirectChains()).toEqual([]);
  });

  it("mirrors every proxy-level redirect in next.config", async () => {
    const redirects = (await nextConfig.redirects?.()) ?? [];
    const configured = new Map(redirects.map((entry) => [entry.source, entry.destination]));

    for (const [source, destination] of LEGACY_PERMANENT_REDIRECTS) {
      if (!configured.has(source)) continue;
      expect(configured.get(source)).toBe(destination);
    }
  });
});
