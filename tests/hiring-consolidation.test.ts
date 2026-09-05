import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";
import { HIRING_INTENT_OWNER_PATH, HIRING_INTENT_REDIRECTS, RETIRED_COMMERCIAL_INTENT_PATHS, normalizeCommercialLinks } from "../features/search-intent";
import { getAllContentRelations } from "../features/content-relations";
import { getPublicArticles } from "../lib/articles";
import { LEGACY_PERMANENT_REDIRECTS } from "../lib/legacy-redirects";
import { buildSitemapEntries } from "../lib/sitemap-entries";
import { buildLlmsFullTxt } from "../lib/llms";

describe("hiring consolidation", () => {
  it("redirects every retired hiring URL directly and permanently to the existing owner", async () => {
    const redirects = await nextConfig.redirects?.() ?? [];
    expect(HIRING_INTENT_REDIRECTS.map(({ source }) => source)).toEqual([
      ...RETIRED_COMMERCIAL_INTENT_PATHS,
      "/shopify-storefront-api-developer",
    ]);
    for (const { source } of HIRING_INTENT_REDIRECTS) {
      expect(redirects.filter((redirect) => redirect.source === source)).toEqual([
        { source, destination: HIRING_INTENT_OWNER_PATH, permanent: true },
      ]);
      expect(LEGACY_PERMANENT_REDIRECTS.get(source)).toBe(HIRING_INTENT_OWNER_PATH);
    }
    for (const { destination } of redirects) {
      expect(redirects.some(({ source }) => source === destination)).toBe(false);
      expect(LEGACY_PERMANENT_REDIRECTS.has(destination)).toBe(false);
    }
  });

  it("excludes every retired URL from sitemap and full discovery even with no blog source", async () => {
    const sitemap = buildSitemapEntries({ siteUrl: "https://hydrogenexpert.co", posts: [], articles: await getPublicArticles() });
    const paths = sitemap.map(({ url }) => new URL(url).pathname);
    const full = await buildLlmsFullTxt({ posts: [] });
    expect(paths.filter((path) => path === HIRING_INTENT_OWNER_PATH)).toHaveLength(1);
    for (const path of RETIRED_COMMERCIAL_INTENT_PATHS) {
      expect(paths).not.toContain(path);
      expect(full).not.toContain(`https://hydrogenexpert.co${path})`);
    }
  });

  it("normalizes retired links without losing notes or unrelated targets", () => {
    const links = normalizeCommercialLinks([
      { href: "/shopify-hydrogen-developer", label: "Developer", note: "Implementation" },
      { href: "/shopify-hydrogen-agency", label: "Agency", note: "Comparison" },
      { href: "/headless-shopify-agency", label: "Architecture", note: "Broader choice" },
    ]);
    expect(links).toHaveLength(2);
    expect(links[0]).toMatchObject({ href: HIRING_INTENT_OWNER_PATH, note: "Implementation" });
    expect(links[1]).toEqual({ href: "/headless-shopify-agency", label: "Architecture", note: "Broader choice" });
    for (const relation of getAllContentRelations()) {
      for (const link of relation.related) expect(RETIRED_COMMERCIAL_INTENT_PATHS).not.toContain(link.href);
    }
  });
});
