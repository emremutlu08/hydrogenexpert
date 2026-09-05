import { pathToFileURL } from "node:url";

const DEFAULT_BASE_URL = "http://127.0.0.1:3000";
const BLOG_FALLBACK_MARKER = 'data-blog-fallback="source-unavailable"';
const RSS_DEGRADED_BODY = "RSS feed is temporarily unavailable.";
const REPRESENTATIVE_PATHS = [
  "/articles",
  "/shopify-hydrogen-experts",
  "/case-studies/eveshop-shopify-hydrogen",
  "/articles/shopify-hydrogen-nextjs",
] as const;

const ENDPOINTS = [
  "/blog",
  "/feed.xml",
  "/robots.txt",
  "/sitemap.xml",
  "/llms-full.txt",
] as const;

type Endpoint = (typeof ENDPOINTS)[number];
type FetchImplementation = (
  input: string | URL,
  init?: RequestInit,
) => Promise<Response>;

export interface PublishHealthVerdict {
  endpoint: Endpoint;
  ok: boolean;
  detail: string;
}

interface EndpointResponse {
  status: number;
  headers: Headers;
  body: string;
}

function normalizeBaseUrl(rawBaseUrl: string) {
  const url = new URL(rawBaseUrl);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Publish-health base URL must use http or https.");
  }

  if (url.username || url.password) {
    throw new Error("Publish-health base URL must not contain credentials.");
  }

  if ((url.pathname && url.pathname !== "/") || url.search || url.hash) {
    throw new Error("Publish-health base URL must be an origin without a path, query, or hash.");
  }

  return url.origin;
}

function getBaseUrl(args: readonly string[], environment: NodeJS.ProcessEnv) {
  const inlineArgument = args.find((argument) => argument.startsWith("--base-url="));
  const indexedArgument = args.indexOf("--base-url");
  const argumentValue = inlineArgument?.slice("--base-url=".length) ||
    (indexedArgument >= 0 ? args[indexedArgument + 1] : undefined);
  const unknownArguments = args.filter((argument, index) => {
    if (argument.startsWith("--base-url=")) {
      return false;
    }

    if (argument === "--base-url" || args[index - 1] === "--base-url") {
      return false;
    }

    return true;
  });

  if (unknownArguments.length > 0) {
    throw new Error(`Unknown publish-health argument: ${unknownArguments[0]}`);
  }

  if (indexedArgument >= 0 && !argumentValue) {
    throw new Error("--base-url requires a value.");
  }

  return normalizeBaseUrl(
    argumentValue || environment.PUBLISH_HEALTH_BASE_URL || DEFAULT_BASE_URL,
  );
}

function responseVerdict(
  endpoint: Endpoint,
  ok: boolean,
  detail: string,
): PublishHealthVerdict {
  return { endpoint, ok, detail };
}

function extractAttribute(tag: string, attribute: string) {
  const match = tag.match(
    new RegExp(`\\b${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"),
  );

  return match?.[1] ?? match?.[2];
}

function getRobotsDirectives(html: string) {
  return Array.from(html.matchAll(/<meta\b[^>]*>/gi)).flatMap((match) => {
    const name = extractAttribute(match[0], "name");
    const content = extractAttribute(match[0], "content");

    if (name?.toLowerCase() !== "robots" || !content) {
      return [];
    }

    return content
      .split(/[\s,]+/)
      .map((directive) => directive.trim().toLowerCase())
      .filter(Boolean);
  });
}

function hasRobotsNoindex(html: string) {
  return getRobotsDirectives(html).includes("noindex");
}

function hasRobotsNoindexFollow(html: string) {
  const directives = getRobotsDirectives(html);

  return directives.includes("noindex") &&
    directives.includes("follow") &&
    !directives.includes("nofollow");
}

function extractHtmlLinkPaths(html: string, baseUrl: string) {
  const expectedOrigin = new URL(baseUrl).origin;

  return Array.from(html.matchAll(/<a\b[^>]*>/gi)).flatMap((match) => {
    const href = extractAttribute(match[0], "href");

    if (!href) {
      return [];
    }

    try {
      const url = new URL(href, baseUrl);

      return url.origin === expectedOrigin ? [url.pathname || "/"] : [];
    } catch {
      return [];
    }
  });
}

function checkBlog(response: EndpointResponse, baseUrl: string) {
  if (response.status !== 200) {
    return responseVerdict(
      "/blog",
      false,
      `HTTP ${response.status}; expected a healthy index or the 200 outage fallback`,
    );
  }

  const linkPaths = extractHtmlLinkPaths(response.body, baseUrl);
  const isFallback = response.body.includes(BLOG_FALLBACK_MARKER);

  if (isFallback) {
    const missing: string[] = [];

    if (!hasRobotsNoindexFollow(response.body)) {
      missing.push("robots noindex/follow");
    }

    if (!linkPaths.includes("/articles")) {
      missing.push("crawlable /articles link");
    }

    if (linkPaths.some((path) => path.startsWith("/blog/"))) {
      missing.push("post cards must be omitted");
    }

    if (/\bPage\s+\d+\s+of\s+\d+\b/i.test(response.body)) {
      missing.push("pagination must be omitted");
    }

    return missing.length === 0
      ? responseVerdict(
          "/blog",
          true,
          "HTTP 200 source-unavailable fallback with noindex/follow and /articles link",
        )
      : responseVerdict("/blog", false, `fallback contract missing: ${missing.join(", ")}`);
  }

  if (hasRobotsNoindex(response.body)) {
    return responseVerdict("/blog", false, "healthy index unexpectedly contains robots noindex");
  }

  if (!linkPaths.some((path) => path.startsWith("/blog/") && path !== "/blog/")) {
    return responseVerdict("/blog", false, "HTTP 200 response contains no published post links");
  }

  return responseVerdict("/blog", true, "HTTP 200 healthy non-empty blog index");
}

function checkFeed(response: EndpointResponse) {
  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  const cacheControl = response.headers.get("cache-control")?.toLowerCase() ?? "";

  if (response.status === 503) {
    const degradedContractMatches =
      response.body === RSS_DEGRADED_BODY &&
      contentType.includes("text/plain") &&
      cacheControl.split(",").some((directive) => directive.trim() === "no-store");

    return degradedContractMatches
      ? responseVerdict("/feed.xml", true, "approved HTTP 503 no-store degraded signature")
      : responseVerdict("/feed.xml", false, "HTTP 503 response does not match the degraded contract");
  }

  if (response.status !== 200) {
    return responseVerdict(
      "/feed.xml",
      false,
      `HTTP ${response.status}; expected non-empty RSS or the approved 503 response`,
    );
  }

  const hasNonEmptyItem = /<item>\s*[\s\S]*?<title>[^<]+<\/title>[\s\S]*?<link>[^<]+<\/link>[\s\S]*?<\/item>/i
    .test(response.body);
  const isHealthyRss =
    contentType.includes("application/rss+xml") &&
    /<rss\b/i.test(response.body) &&
    /<channel>/i.test(response.body) &&
    hasNonEmptyItem;

  return isHealthyRss
    ? responseVerdict("/feed.xml", true, "HTTP 200 healthy non-empty RSS feed")
    : responseVerdict("/feed.xml", false, "HTTP 200 response is not a healthy non-empty RSS feed");
}

function checkRobots(response: EndpointResponse) {
  if (response.status !== 200) {
    return responseVerdict("/robots.txt", false, `HTTP ${response.status}`);
  }

  const hasSitemapReference = /^sitemap:\s*\S+\/sitemap\.xml\s*$/im.test(response.body);

  return hasSitemapReference
    ? responseVerdict("/robots.txt", true, "HTTP 200 with /sitemap.xml reference")
    : responseVerdict("/robots.txt", false, "missing /sitemap.xml reference");
}

function extractSitemapPaths(xml: string) {
  return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/gi)).flatMap((match) => {
    try {
      return [new URL(match[1].replaceAll("&amp;", "&")).pathname || "/"];
    } catch {
      return [];
    }
  });
}

function extractLlmsLinkPaths(body: string) {
  return Array.from(body.matchAll(/\]\(([^)\s]+)\)/g)).flatMap((match) => {
    try {
      return [new URL(match[1], DEFAULT_BASE_URL).pathname || "/"];
    } catch {
      return [];
    }
  });
}

function checkRepresentativePaths(
  endpoint: "/sitemap.xml" | "/llms-full.txt",
  paths: readonly string[],
) {
  const invalid = REPRESENTATIVE_PATHS.flatMap((path) => {
    const count = paths.filter((candidate) => candidate === path).length;

    return count === 1 ? [] : [`${path} (${count})`];
  });

  return invalid.length === 0
    ? responseVerdict(endpoint, true, "representative static/commercial/case/article entries present once")
    : responseVerdict(endpoint, false, `representative entry count mismatch: ${invalid.join(", ")}`);
}

function checkSitemap(response: EndpointResponse) {
  if (response.status !== 200 || !/<urlset\b/i.test(response.body)) {
    return responseVerdict("/sitemap.xml", false, `HTTP ${response.status}; expected XML urlset`);
  }

  return checkRepresentativePaths("/sitemap.xml", extractSitemapPaths(response.body));
}

function checkLlmsFull(response: EndpointResponse) {
  if (response.status !== 200) {
    return responseVerdict("/llms-full.txt", false, `HTTP ${response.status}`);
  }

  return checkRepresentativePaths("/llms-full.txt", extractLlmsLinkPaths(response.body));
}

async function fetchEndpoint(
  baseUrl: string,
  endpoint: Endpoint,
  fetchImplementation: FetchImplementation,
): Promise<EndpointResponse> {
  const response = await fetchImplementation(new URL(endpoint, baseUrl), {
    cache: "no-store",
    credentials: "omit",
    redirect: "follow",
    signal: AbortSignal.timeout(15_000),
    headers: {
      Accept: endpoint === "/blog" ? "text/html" : "text/plain, application/xml;q=0.9, */*;q=0.8",
      "User-Agent": "HydrogenExpert publish-health verifier",
    },
  });

  return {
    status: response.status,
    headers: response.headers,
    body: await response.text(),
  };
}

export async function verifyPublishHealth(
  rawBaseUrl: string,
  fetchImplementation: FetchImplementation = fetch,
): Promise<PublishHealthVerdict[]> {
  const baseUrl = normalizeBaseUrl(rawBaseUrl);
  const responses = await Promise.all(
    ENDPOINTS.map(async (endpoint) => {
      try {
        return {
          endpoint,
          response: await fetchEndpoint(baseUrl, endpoint, fetchImplementation),
        } as const;
      } catch (error) {
        return {
          endpoint,
          error: error instanceof Error ? error.message : "request failed",
        } as const;
      }
    }),
  );

  return responses.map((result) => {
    if ("error" in result) {
      return responseVerdict(result.endpoint, false, `request failed: ${result.error}`);
    }

    switch (result.endpoint) {
      case "/blog":
        return checkBlog(result.response, baseUrl);
      case "/feed.xml":
        return checkFeed(result.response);
      case "/robots.txt":
        return checkRobots(result.response);
      case "/sitemap.xml":
        return checkSitemap(result.response);
      case "/llms-full.txt":
        return checkLlmsFull(result.response);
    }
  });
}

export function formatPublishHealthVerdict(verdict: PublishHealthVerdict) {
  return `${verdict.ok ? "PASS" : "FAIL"} ${verdict.endpoint} — ${verdict.detail}`;
}

async function main() {
  const baseUrl = getBaseUrl(process.argv.slice(2), process.env);
  const verdicts = await verifyPublishHealth(baseUrl);

  console.log(`Publish-health verification target: ${baseUrl}`);
  for (const verdict of verdicts) {
    console.log(formatPublishHealthVerdict(verdict));
  }

  if (verdicts.some((verdict) => !verdict.ok)) {
    process.exitCode = 1;
    return;
  }

  console.log("Publish-health verification passed.");
}

const isDirectExecution = Boolean(
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href,
);

if (isDirectExecution) {
  void main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
