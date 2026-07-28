import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { STATIC_PAGE_SOURCE_METADATA } from "../features/content-sources";
import { LLMS_CORE_PAGE_ENTRIES } from "../features/public-discovery/manifest";

const route = "/what-is-hydrogen";
const repoRoot = process.cwd();

function readRepoFile(path: string) {
  return readFileSync(join(repoRoot, path), "utf8");
}

describe("what-is-hydrogen definition intent", () => {
  it("keeps neutral definition metadata and the four-stage architecture flow", () => {
    const pageSource = readRepoFile("app/what-is-hydrogen/page.tsx");

    expect(pageSource).toContain('title: "What Is Shopify Hydrogen? Storefront Architecture"');
    expect(pageSource).toContain('title="What Is Shopify Hydrogen?"');
    expect(pageSource).toContain("Shopify Admin (catalog/content/operations)");
    expect(pageSource).toContain("Storefront API");
    expect(pageSource).toContain("Hydrogen storefront");
    expect(pageSource).toContain("Shopify Checkout (transaction completion)");
    expect(pageSource).not.toContain("Shopify Plus Brands");
  });

  it("routes comparison, adoption, implementation, proof, and contact intent to their owners", () => {
    const pageSource = readRepoFile("app/what-is-hydrogen/page.tsx");

    for (const href of [
      "/shopify-hydrogen-vs-liquid",
      "/should-i-use-it",
      "/shopify-hydrogen-developer",
      "/case-studies",
      "/contact",
    ]) {
      expect(pageSource).toContain(`href="${href}"`);
    }
  });

  it("does not reclaim adoption FAQs or the former qualification CTA", () => {
    const pageSource = readRepoFile("app/what-is-hydrogen/page.tsx");

    expect(pageSource).not.toContain("When is Hydrogen overkill?");
    expect(pageSource).not.toContain("Do I need a dedicated developer to run Hydrogen?");
    expect(pageSource).not.toContain("revenue band");
    expect(pageSource).not.toContain("<CTASection");
  });

  it("preserves FAQ and breadcrumb schema with official source metadata", () => {
    const pageSource = readRepoFile("app/what-is-hydrogen/page.tsx");
    const sourceMetadata = STATIC_PAGE_SOURCE_METADATA[route];

    expect(pageSource).toContain("buildFaqPageSchema(faqs)");
    expect(pageSource).toContain("buildBreadcrumbListSchema");
    expect(sourceMetadata?.claimTypes).toEqual(["official_shopify_fact"]);
    expect(sourceMetadata?.targetKeyword).toBe("what is Shopify Hydrogen");
    expect(sourceMetadata?.searchIntent).toContain("definition and architecture");
    expect(sourceMetadata?.sourceMap.map((source) => source.sourceType)).toEqual([
      "shopify_official",
      "shopify_official",
      "shopify_official",
      "shopify_official",
    ]);
  });

  it("describes the definition and data flow in public AI discovery", () => {
    const discoveryEntry = LLMS_CORE_PAGE_ENTRIES.find((entry) => entry.path === route);

    expect(discoveryEntry?.description).toContain("Definition and architecture");
    expect(discoveryEntry?.description).toContain("Shopify Checkout data flow");
    expect(discoveryEntry?.description).not.toContain("Shopify Plus");
  });
});
