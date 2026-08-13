import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { SOURCE_PACKS, STATIC_PAGE_SOURCE_METADATA } from "../features/content-sources";
import { POST_ENHANCEMENTS } from "../features/post-enhancements";
import { LLMS_CORE_PAGE_ENTRIES } from "../features/public-discovery/manifest";
import { HYDROGEN_EXAMPLES } from "../features/traffic-foundation";
import { buildLlmsFullTxt, buildLlmsTxt } from "../lib/llms";

const route = "/shopify-hydrogen-examples";
const siteUrl = "https://hydrogenexpert.co";
const verifiedAt = "2026-08-11";
const videoSourceUrl = "https://shopify.dev/docs/api/hydrogen/latest/components/media/video";
const llmsDescription =
  "Sourced Shopify Hydrogen examples and pattern directory with practical takeaways for routes, data, SEO, content models, deployment, and production behavior.";
const repoRoot = process.cwd();

function readRepoFile(path: string) {
  return readFileSync(join(repoRoot, path), "utf8");
}

describe("Shopify Hydrogen examples refresh", () => {
  it("uses the latest Video docs source and the canonical verified date in the page intro", () => {
    const videoExample = HYDROGEN_EXAMPLES.find((example) => example.id === "hydrogen-video-media");
    const videoPostSource = POST_ENHANCEMENTS[
      "shopify-hydrogen-hero-video-carousel-onended"
    ].externalLinks?.find((link) => link.label === "Shopify Hydrogen Video component");
    const pageSource = readRepoFile("app/shopify-hydrogen-examples/page.tsx");

    expect([
      videoExample?.source.href,
      SOURCE_PACKS.hydrogenVideoComponent.url,
      videoPostSource?.href,
    ]).toEqual([videoSourceUrl, videoSourceUrl, videoSourceUrl]);
    expect(STATIC_PAGE_SOURCE_METADATA[route].lastVerified).toBe(verifiedAt);
    expect(pageSource).toContain(
      'const pageSourceMetadata = STATIC_PAGE_SOURCE_METADATA["/shopify-hydrogen-examples"]',
    );
    expect(pageSource).toContain("reviewedAt={pageSourceMetadata.lastVerified}");
  });

  it("includes exactly one sourced examples entry in both llms outputs", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = siteUrl;
    const matchingEntries = LLMS_CORE_PAGE_ENTRIES.filter((entry) => entry.path === route);
    const expectedLine = `- [Shopify Hydrogen Examples](${siteUrl}${route}): ${llmsDescription}`;

    expect(matchingEntries).toEqual([
      {
        title: "Shopify Hydrogen Examples",
        path: route,
        description: llmsDescription,
      },
    ]);
    expect(buildLlmsTxt()).toContain(expectedLine);
    expect(await buildLlmsFullTxt({ posts: [] })).toContain(expectedLine);
  });
});
