import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { ServiceLandingPage } from "../components/ServiceLandingPage";
import { requireServicePackageByPagePath } from "../features/services/registry";

vi.mock("next/navigation", () => ({ usePathname: () => "/shopify-hydrogen-experts", useSearchParams: () => new URLSearchParams(), useRouter: () => ({}) }));

describe("consolidated hiring content", () => {
  it("renders the former developer sections, proof and structured data on the surviving owner", () => {
    const html = renderToStaticMarkup(createElement(ServiceLandingPage, { service: requireServicePackageByPagePath("/shopify-hydrogen-experts") }));
    for (const heading of [
      "Choose the vendor shape around the real risk.",
      "What is a Shopify Hydrogen developer?",
      "What the Hydrogen developer stack needs to cover.",
      "When to hire Shopify Hydrogen developers instead of a general Shopify developer",
      "Shopify Hydrogen work connected to real storefronts",
      "Hiring and production-experience guides.",
    ]) expect(html).toContain(heading);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    const all = schemas.flat();
    expect(all).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: "Shopify Hydrogen developer responsibilities", "@type": "ItemList" }),
      expect.objectContaining({ name: "Shopify Hydrogen developer search intent map", "@type": "ItemList" }),
    ]));
    expect(html).toContain("/case-studies/eveshop-shopify-hydrogen");
    expect(html).toContain("/case-studies/bayam-jewelry-shopify-hydrogen");
    expect(html).toContain("/case-studies/rebel-bunny-shopify-hydrogen");
    expect(html.match(/Hiring and production-experience guides\./g)).toHaveLength(1);
    expect(html).not.toContain("Evaluation guides for expert-search intent.");
  });
});
