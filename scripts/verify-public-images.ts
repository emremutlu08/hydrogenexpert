const PUBLIC_IMAGE_DEFAULT_BASE_URL = "https://hydrogenexpert.co";
const PUBLIC_IMAGE_REQUEST_TIMEOUT_MS = 15_000;
const PUBLIC_IMAGE_SKIPPED_SCHEMES = ["data:", "blob:", "mailto:", "tel:"];

interface ImageUsage {
  imageUrl: string;
  pages: Set<string>;
}

function decodeHtmlAttribute(value: string) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'");
}

function getPublicImageBaseUrl() {
  return process.env.PUBLIC_IMAGE_BASE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? PUBLIC_IMAGE_DEFAULT_BASE_URL;
}

function normalizeUrl(value: string, pageUrl: string) {
  const decoded = decodeHtmlAttribute(value.trim());

  if (!decoded || PUBLIC_IMAGE_SKIPPED_SCHEMES.some((scheme) => decoded.startsWith(scheme))) {
    return null;
  }

  try {
    return new URL(decoded, pageUrl).toString();
  } catch {
    return null;
  }
}

function extractSitemapUrls(xml: string) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decodeHtmlAttribute(match[1]));
}

function extractImageCandidates(html: string) {
  const candidates: string[] = [];

  for (const match of html.matchAll(/<(?:img|source)\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    candidates.push(match[1]);
  }

  for (const match of html.matchAll(/<(?:img|source)\b[^>]*\bsrcset=["']([^"']+)["'][^>]*>/gi)) {
    const srcset = decodeHtmlAttribute(match[1]);
    for (const candidate of srcset.split(",")) {
      const src = candidate.trim().split(/\s+/)[0];
      if (src) {
        candidates.push(src);
      }
    }
  }

  return candidates;
}

async function fetchWithTimeout(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), PUBLIC_IMAGE_REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        "user-agent": "HydrogenExpert image verifier",
        ...init?.headers,
      },
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function readText(url: string) {
  const response = await fetchWithTimeout(url);

  if (!response.ok) {
    throw new Error(`${url} returned ${response.status}`);
  }

  return response.text();
}

async function collectImageUsages(baseUrl: string) {
  const sitemapUrl = new URL("/sitemap.xml", baseUrl).toString();
  const sitemap = await readText(sitemapUrl);
  const pageUrls = extractSitemapUrls(sitemap);
  const images = new Map<string, ImageUsage>();

  for (const pageUrl of pageUrls) {
    const response = await fetchWithTimeout(pageUrl);
    const contentType = response.headers.get("content-type") ?? "";

    if (!response.ok || !contentType.includes("text/html")) {
      continue;
    }

    const html = await response.text();
    for (const candidate of extractImageCandidates(html)) {
      const imageUrl = normalizeUrl(candidate, pageUrl);

      if (!imageUrl) {
        continue;
      }

      const usage = images.get(imageUrl) ?? { imageUrl, pages: new Set<string>() };
      usage.pages.add(pageUrl);
      images.set(imageUrl, usage);
    }
  }

  return { pageCount: pageUrls.length, images };
}

async function verifyImage(usage: ImageUsage) {
  try {
    const response = await fetchWithTimeout(usage.imageUrl);
    const contentType = response.headers.get("content-type") ?? "";

    return {
      ok: response.ok && contentType.startsWith("image/"),
      status: response.status,
      contentType,
      usage,
    };
  } catch (error) {
    return {
      ok: false,
      status: error instanceof Error ? error.message : "fetch_error",
      contentType: "",
      usage,
    };
  }
}

async function verifyPublicImages() {
  const baseUrl = getPublicImageBaseUrl();
  const { pageCount, images } = await collectImageUsages(baseUrl);
  const results = await Promise.all([...images.values()].map(verifyImage));
  const broken = results.filter((result) => !result.ok);

  for (const result of broken) {
    console.error(
      [
        `BROKEN_IMAGE ${result.usage.imageUrl}`,
        `status=${result.status}`,
        `contentType=${result.contentType || "none"}`,
        `pages=${[...result.usage.pages].slice(0, 3).join(",")}`,
      ].join(" "),
    );
  }

  console.log(
    `PUBLIC_IMAGE_SCAN base=${baseUrl} pages=${pageCount} uniqueImages=${images.size} broken=${broken.length}`,
  );

  if (broken.length > 0) {
    process.exit(1);
  }

  process.exit(0);
}

verifyPublicImages().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
