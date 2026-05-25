import {
  INTERNAL_PACKAGE_LINK_SOURCE_ROUTES,
  PACKAGE_PAGE_DISCOVERY,
} from "../features/public-discovery/manifest";
import {
  COMMERCIAL_COPY_RULES,
  checkCommercialCopy,
  normalizeHtmlForCommercialChecks,
} from "../lib/commercial-launch-guard";

interface LaunchViolation {
  route: string;
  phrase: string;
  reason: string;
}

function buildUrl(baseUrl: string, route: string) {
  return new URL(route, baseUrl).toString();
}

async function fetchText(baseUrl: string, route: string) {
  const url = buildUrl(baseUrl, route);
  const response = await fetch(url, {
    headers: {
      "User-Agent": "HydrogenExpert commercial launch verifier",
    },
  });

  if (!response.ok) {
    throw new Error(`${route} returned HTTP ${response.status}`);
  }

  return response.text();
}

function hasHtml(html: string, expected: string) {
  return normalizeHtmlForCommercialChecks(html).includes(expected);
}

function verifyPackageSeo(html: string) {
  const violations: LaunchViolation[] = [];

  if (!hasHtml(html, `<title>${PACKAGE_PAGE_DISCOVERY.title}</title>`)) {
    violations.push({
      route: PACKAGE_PAGE_DISCOVERY.path,
      phrase: PACKAGE_PAGE_DISCOVERY.title,
      reason: "SEO title is missing or changed",
    });
  }

  if (!hasHtml(html, `name="description" content="${PACKAGE_PAGE_DISCOVERY.description}"`)) {
    violations.push({
      route: PACKAGE_PAGE_DISCOVERY.path,
      phrase: PACKAGE_PAGE_DISCOVERY.description,
      reason: "meta description is missing or changed",
    });
  }

  if (!hasHtml(html, `rel="canonical" href="${PACKAGE_PAGE_DISCOVERY.canonicalUrl}"`)) {
    violations.push({
      route: PACKAGE_PAGE_DISCOVERY.path,
      phrase: PACKAGE_PAGE_DISCOVERY.canonicalUrl,
      reason: "canonical is missing or not absolute",
    });
  }

  if (!hasHtml(html, `property="og:title" content="${PACKAGE_PAGE_DISCOVERY.title}"`)) {
    violations.push({
      route: PACKAGE_PAGE_DISCOVERY.path,
      phrase: PACKAGE_PAGE_DISCOVERY.title,
      reason: "Open Graph title is missing or changed",
    });
  }

  if (!hasHtml(html, `property="og:description" content="${PACKAGE_PAGE_DISCOVERY.description}"`)) {
    violations.push({
      route: PACKAGE_PAGE_DISCOVERY.path,
      phrase: PACKAGE_PAGE_DISCOVERY.description,
      reason: "Open Graph description is missing or changed",
    });
  }

  if (/name="robots" content="[^"]*noindex/i.test(html)) {
    violations.push({
      route: PACKAGE_PAGE_DISCOVERY.path,
      phrase: "robots noindex",
      reason: "package page must stay indexable",
    });
  }

  return violations;
}

function verifyInternalPackageLink(route: string, html: string) {
  if (
    !html.includes(`href="${PACKAGE_PAGE_DISCOVERY.path}"`) &&
    !html.includes(`href="${PACKAGE_PAGE_DISCOVERY.canonicalUrl}"`)
  ) {
    return [
      {
        route,
        phrase: PACKAGE_PAGE_DISCOVERY.path,
        reason: "internal link to package page is missing",
      },
    ];
  }

  return [];
}

async function main() {
  const baseUrl =
    process.env.COMMERCIAL_LAUNCH_BASE_URL ||
    process.env.SITE_URL ||
    "http://127.0.0.1:3000";
  const violations: LaunchViolation[] = [];

  for (const rule of COMMERCIAL_COPY_RULES) {
    const html = await fetchText(baseUrl, rule.route);

    violations.push(...checkCommercialCopy(rule.route, html));

    if (rule.route === PACKAGE_PAGE_DISCOVERY.path) {
      violations.push(...verifyPackageSeo(html));
    }

    if ((INTERNAL_PACKAGE_LINK_SOURCE_ROUTES as readonly string[]).includes(rule.route)) {
      violations.push(...verifyInternalPackageLink(rule.route, html));
    }
  }

  const sitemap = await fetchText(baseUrl, "/sitemap.xml");
  if (!sitemap.includes(PACKAGE_PAGE_DISCOVERY.canonicalUrl)) {
    violations.push({
      route: "/sitemap.xml",
      phrase: PACKAGE_PAGE_DISCOVERY.canonicalUrl,
      reason: "package page is missing from sitemap",
    });
  }

  const llms = await fetchText(baseUrl, "/llms.txt");
  if (!llms.includes(PACKAGE_PAGE_DISCOVERY.canonicalUrl)) {
    violations.push({
      route: "/llms.txt",
      phrase: PACKAGE_PAGE_DISCOVERY.canonicalUrl,
      reason: "package page is missing from llms.txt",
    });
  }

  if (violations.length > 0) {
    console.error("Commercial launch verification failed:");
    for (const violation of violations) {
      console.error(`- ${violation.route}: ${violation.reason} -> ${violation.phrase}`);
    }
    process.exit(1);
  }

  console.log(`Commercial launch verification passed against ${baseUrl}.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
