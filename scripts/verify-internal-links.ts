const DEFAULT_BASE_URL = "http://localhost:3000";
const DEFAULT_SITE_URL = "https://hydrogenexpert.co";
const INTERNAL_HOSTS = new Set(["hydrogenexpert.co", "www.hydrogenexpert.co"]);

interface BrokenLink {
  source: string;
  href: string;
  status: number;
}

function getBaseUrl() {
  return (
    process.env.INTERNAL_LINK_BASE_URL ||
    process.env.COMMERCIAL_LAUNCH_BASE_URL ||
    process.env.SITE_URL ||
    DEFAULT_BASE_URL
  ).replace(/\/$/, "");
}

function getCanonicalSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
}

function toLocalUrl(baseUrl: string, href: string) {
  return `${baseUrl}${href.startsWith("/") ? href : `/${href}`}`;
}

function isSkippableHref(href: string) {
  return (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:")
  );
}

function extractInternalHrefs({
  html,
  pagePath,
  siteUrl,
}: {
  html: string;
  pagePath: string;
  siteUrl: string;
}) {
  const hrefs = new Set<string>();

  for (const match of html.matchAll(/href=["']([^"']+)["']/g)) {
    const rawHref = match[1];

    if (isSkippableHref(rawHref)) {
      continue;
    }

    let url: URL;

    try {
      url = new URL(rawHref, `${siteUrl}${pagePath}`);
    } catch {
      continue;
    }

    if (!INTERNAL_HOSTS.has(url.hostname) || url.pathname.startsWith("/_next/")) {
      continue;
    }

    url.hash = "";
    hrefs.add(`${url.pathname}${url.search}`);
  }

  return hrefs;
}

async function main() {
  const baseUrl = getBaseUrl();
  const siteUrl = getCanonicalSiteUrl();
  const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);

  if (!sitemapResponse.ok) {
    throw new Error(`/sitemap.xml returned HTTP ${sitemapResponse.status}`);
  }

  const sitemap = await sitemapResponse.text();
  const sitemapPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
    const pathname = new URL(match[1]).pathname;
    return pathname === "" ? "/" : pathname;
  });
  const internalHrefs = new Set(sitemapPaths);
  const broken: BrokenLink[] = [];

  for (const path of sitemapPaths) {
    const response = await fetch(toLocalUrl(baseUrl, path), { redirect: "follow" });

    if (response.status >= 400) {
      broken.push({ source: "sitemap", href: path, status: response.status });
      continue;
    }

    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.includes("text/html")) {
      continue;
    }

    const html = await response.text();

    for (const href of extractInternalHrefs({ html, pagePath: path, siteUrl })) {
      internalHrefs.add(href);
    }
  }

  for (const href of internalHrefs) {
    const response = await fetch(toLocalUrl(baseUrl, href), { redirect: "follow" });

    if (response.status >= 400) {
      broken.push({ source: "internal", href, status: response.status });
    }
  }

  if (broken.length > 0) {
    console.error("Internal link verification failed:");
    for (const link of broken) {
      console.error(`- ${link.source}: ${link.href} returned HTTP ${link.status}`);
    }
    process.exit(1);
  }

  console.log(
    `Internal link verification passed against ${baseUrl}: ${sitemapPaths.length} sitemap URL(s), ${internalHrefs.size} internal URL(s).`,
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
