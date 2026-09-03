import { describe, expect, it, vi } from "vitest";

import {
  formatPublishHealthVerdict,
  verifyPublishHealth,
} from "../scripts/verify-publish-health";

const baseUrl = "http://127.0.0.1:3000";
const representativePaths = [
  "/articles",
  "/shopify-hydrogen-agency",
  "/case-studies/eveshop-shopify-hydrogen",
  "/articles/shopify-hydrogen-nextjs",
] as const;

interface ResponseFixture {
  status?: number;
  body: string;
  headers?: HeadersInit;
}

function createFetch(fixtures: Record<string, ResponseFixture>) {
  return vi.fn(async (input: string | URL, init?: RequestInit) => {
    const path = new URL(input).pathname;
    const fixture = fixtures[path];

    if (!fixture) {
      throw new Error(`Missing fixture for ${path}`);
    }

    expect(init?.credentials).toBe("omit");

    return new Response(fixture.body, {
      status: fixture.status ?? 200,
      headers: fixture.headers,
    });
  });
}

function discoveryFixtures() {
  const sitemapEntries = representativePaths
    .map((path) => `<url><loc>https://hydrogenexpert.co${path}</loc></url>`)
    .join("");
  const llmsEntries = representativePaths
    .map((path) => `- [Entry](https://hydrogenexpert.co${path}): Description`)
    .join("\n");

  return {
    "/robots.txt": {
      body: "User-agent: *\nAllow: /\nSitemap: https://hydrogenexpert.co/sitemap.xml\n",
      headers: { "Content-Type": "text/plain" },
    },
    "/sitemap.xml": {
      body: `<?xml version="1.0"?><urlset>${sitemapEntries}</urlset>`,
      headers: { "Content-Type": "application/xml" },
    },
    "/llms-full.txt": {
      body: llmsEntries,
      headers: { "Content-Type": "text/plain" },
    },
  } satisfies Record<string, ResponseFixture>;
}

describe("publish-health verifier", () => {
  it("accepts the approved blog and feed outage contracts with exact endpoint verdicts", async () => {
    const fetchMock = createFetch({
      "/blog": {
        body: [
          "<html><head>",
          '<meta name="robots" content="noindex, follow">',
          "</head><body>",
          '<section data-blog-fallback="source-unavailable">',
          "<p>The blog post index is temporarily unavailable.</p>",
          '<a href="/articles">Read Shopify Hydrogen Articles</a>',
          "</section></body></html>",
        ].join(""),
        headers: { "Content-Type": "text/html" },
      },
      "/feed.xml": {
        status: 503,
        body: "RSS feed is temporarily unavailable.",
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store, max-age=0",
        },
      },
      ...discoveryFixtures(),
    });

    const verdicts = await verifyPublishHealth(baseUrl, fetchMock);

    expect(verdicts.map(formatPublishHealthVerdict)).toEqual([
      "PASS /blog — HTTP 200 source-unavailable fallback with noindex/follow and /articles link",
      "PASS /feed.xml — approved HTTP 503 no-store degraded signature",
      "PASS /robots.txt — HTTP 200 with /sitemap.xml reference",
      "PASS /sitemap.xml — representative static/commercial/case/article entries present once",
      "PASS /llms-full.txt — representative static/commercial/case/article entries present once",
    ]);
  });

  it("accepts healthy non-empty blog and RSS responses", async () => {
    const fetchMock = createFetch({
      "/blog": {
        body: '<html><body><a href="/blog/database-post">Database post</a></body></html>',
        headers: { "Content-Type": "text/html" },
      },
      "/feed.xml": {
        body: [
          '<?xml version="1.0"?>',
          '<rss version="2.0"><channel><item>',
          "<title>Database post</title>",
          "<link>https://hydrogenexpert.co/blog/database-post</link>",
          "</item></channel></rss>",
        ].join(""),
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
      },
      ...discoveryFixtures(),
    });

    const verdicts = await verifyPublishHealth(baseUrl, fetchMock);

    expect(verdicts.every((verdict) => verdict.ok)).toBe(true);
    expect(verdicts[0].detail).toBe("HTTP 200 healthy non-empty blog index");
    expect(verdicts[1].detail).toBe("HTTP 200 healthy non-empty RSS feed");
  });

  it("rejects an unmarked outage page and an empty valid 200 RSS feed", async () => {
    const fetchMock = createFetch({
      "/blog": {
        body: "<html><body><p>Temporarily unavailable.</p></body></html>",
        headers: { "Content-Type": "text/html" },
      },
      "/feed.xml": {
        body: '<?xml version="1.0"?><rss version="2.0"><channel></channel></rss>',
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
      },
      ...discoveryFixtures(),
    });

    const verdicts = await verifyPublishHealth(baseUrl, fetchMock);

    expect(verdicts[0]).toMatchObject({
      endpoint: "/blog",
      ok: false,
      detail: "HTTP 200 response contains no published post links",
    });
    expect(verdicts[1]).toMatchObject({
      endpoint: "/feed.xml",
      ok: false,
      detail: "HTTP 200 response is not a healthy non-empty RSS feed",
    });
  });

  it("rejects nofollow fallback metadata and duplicate discovery entries", async () => {
    const duplicatePath = representativePaths[1];
    const discovery = discoveryFixtures();
    const fetchMock = createFetch({
      "/blog": {
        body: [
          "<html><head>",
          '<meta name="robots" content="noindex, nofollow">',
          "</head><body>",
          '<section data-blog-fallback="source-unavailable">',
          '<a href="/articles">Read Shopify Hydrogen Articles</a>',
          "</section></body></html>",
        ].join(""),
        headers: { "Content-Type": "text/html" },
      },
      "/feed.xml": {
        status: 503,
        body: "RSS feed is temporarily unavailable.",
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store, max-age=0",
        },
      },
      ...discovery,
      "/sitemap.xml": {
        ...discovery["/sitemap.xml"],
        body: discovery["/sitemap.xml"].body.replace(
          "</urlset>",
          `<url><loc>https://hydrogenexpert.co${duplicatePath}</loc></url></urlset>`,
        ),
      },
      "/llms-full.txt": {
        ...discovery["/llms-full.txt"],
        body: `${discovery["/llms-full.txt"].body}\n- [Duplicate](https://hydrogenexpert.co${duplicatePath}): Duplicate`,
      },
    });

    const verdicts = await verifyPublishHealth(baseUrl, fetchMock);

    expect(verdicts[0]).toMatchObject({
      endpoint: "/blog",
      ok: false,
      detail: "fallback contract missing: robots noindex/follow",
    });
    expect(verdicts[3]).toMatchObject({
      endpoint: "/sitemap.xml",
      ok: false,
      detail: `representative entry count mismatch: ${duplicatePath} (2)`,
    });
    expect(verdicts[4]).toMatchObject({
      endpoint: "/llms-full.txt",
      ok: false,
      detail: `representative entry count mismatch: ${duplicatePath} (2)`,
    });
  });
});
