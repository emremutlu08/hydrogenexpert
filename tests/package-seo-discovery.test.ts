import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { PACKAGE_PAGE_DISCOVERY } from "../features/public-discovery/manifest";
import type { PostSummary } from "../lib/posts";
import { buildSitemapEntries } from "../lib/sitemap-entries";

const repoRoot = process.cwd();
const siteUrl = "https://hydrogenexpert.co";

const posts: PostSummary[] = [];

function readRepoFile(path: string) {
  return readFileSync(join(repoRoot, path), "utf8");
}

describe("package SEO and discovery", () => {
  it("keeps the package page SEO title, description, canonical path, and OG metadata source", () => {
    const pageSource = readRepoFile("app/shopify-hydrogen-packages/page.tsx");
    const seoSource = readRepoFile("lib/seo.ts");

    expect(pageSource).toContain("PACKAGE_PAGE_SEO");
    expect(PACKAGE_PAGE_DISCOVERY.title).toBe("Shopify Hydrogen Packages | $2K-$5K Storefront Builds");
    expect(PACKAGE_PAGE_DISCOVERY.description).toBe(
      "Fixed-scope Shopify Hydrogen storefront packages from $2K-$5K. Starter, Standard, and Growth builds priced by project requirements, not traffic or pageviews.",
    );
    expect(PACKAGE_PAGE_DISCOVERY.path).toBe("/shopify-hydrogen-packages");
    expect(seoSource).toContain("canonical: url");
    expect(seoSource).toContain("openGraph");
    expect(seoSource).toContain("title,");
    expect(seoSource).toContain("description,");
  });

  it("includes the package page in sitemap output", () => {
    const urls = buildSitemapEntries({ siteUrl, posts }).map((entry) => entry.url);

    expect(urls).toContain(PACKAGE_PAGE_DISCOVERY.canonicalUrl);
  });

  it("includes the package page in llms.txt buyer context", () => {
    expect(readRepoFile("features/public-discovery/manifest.ts")).toContain(
      `path: PACKAGE_ROUTE`,
    );
  });
});
