import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import type { PostSummary } from "../lib/posts";
import { buildSitemapEntries } from "../lib/sitemap-entries";

const repoRoot = process.cwd();
const siteUrl = "https://hydrogenexpert.co";
const packageUrl = `${siteUrl}/shopify-hydrogen-packages`;
const packageTitle = "Shopify Hydrogen Packages | $2K-$5K Storefront Builds";
const packageDescription =
  "Fixed-scope Shopify Hydrogen storefront packages from $2K-$5K. Starter, Standard, and Growth builds priced by project requirements, not traffic or pageviews.";

const posts: PostSummary[] = [];

function readRepoFile(path: string) {
  return readFileSync(join(repoRoot, path), "utf8");
}

describe("package SEO and discovery", () => {
  it("keeps the package page SEO title, description, canonical path, and OG metadata source", () => {
    const pageSource = readRepoFile("app/shopify-hydrogen-packages/page.tsx");
    const seoSource = readRepoFile("lib/seo.ts");

    expect(pageSource).toContain(`title: "${packageTitle}"`);
    expect(pageSource).toContain(packageDescription);
    expect(pageSource).toContain('path: "/shopify-hydrogen-packages"');
    expect(seoSource).toContain("canonical: url");
    expect(seoSource).toContain("openGraph");
    expect(seoSource).toContain("title,");
    expect(seoSource).toContain("description,");
  });

  it("includes the package page in sitemap output", () => {
    const urls = buildSitemapEntries({ siteUrl, posts }).map((entry) => entry.url);

    expect(urls).toContain(packageUrl);
  });

  it("includes the package page in llms.txt buyer context", () => {
    expect(readRepoFile("lib/llms.ts")).toContain('llmsLink("Packages", "/shopify-hydrogen-packages"');
  });
});
