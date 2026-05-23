import {
  COMMERCIAL_COPY_RULES,
  checkCommercialCopy,
  normalizeHtmlForCommercialChecks,
} from "../lib/commercial-launch-guard";

const PACKAGE_ROUTE = "/shopify-hydrogen-packages";
const EXPECTED_PACKAGE_TITLE = "Shopify Hydrogen Packages | $2K-$5K Storefront Builds";
const EXPECTED_PACKAGE_DESCRIPTION =
  "Fixed-scope Shopify Hydrogen storefront packages from $2K-$5K. Starter, Standard, and Growth builds priced by project requirements, not traffic or pageviews.";
const EXPECTED_PACKAGE_CANONICAL = "https://hydrogenexpert.co/shopify-hydrogen-packages";
const INTERNAL_LINK_SOURCE_ROUTES = [
  "/",
  "/shopify-hydrogen-cost",
  "/contact",
  "/when-not-to-use-hydrogen",
] as const;

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

  if (!hasHtml(html, `<title>${EXPECTED_PACKAGE_TITLE}</title>`)) {
    violations.push({
      route: PACKAGE_ROUTE,
      phrase: EXPECTED_PACKAGE_TITLE,
      reason: "SEO title is missing or changed",
    });
  }

  if (!hasHtml(html, `name="description" content="${EXPECTED_PACKAGE_DESCRIPTION}"`)) {
    violations.push({
      route: PACKAGE_ROUTE,
      phrase: EXPECTED_PACKAGE_DESCRIPTION,
      reason: "meta description is missing or changed",
    });
  }

  if (!hasHtml(html, `rel="canonical" href="${EXPECTED_PACKAGE_CANONICAL}"`)) {
    violations.push({
      route: PACKAGE_ROUTE,
      phrase: EXPECTED_PACKAGE_CANONICAL,
      reason: "canonical is missing or not absolute",
    });
  }

  if (!hasHtml(html, `property="og:title" content="${EXPECTED_PACKAGE_TITLE}"`)) {
    violations.push({
      route: PACKAGE_ROUTE,
      phrase: EXPECTED_PACKAGE_TITLE,
      reason: "Open Graph title is missing or changed",
    });
  }

  if (!hasHtml(html, `property="og:description" content="${EXPECTED_PACKAGE_DESCRIPTION}"`)) {
    violations.push({
      route: PACKAGE_ROUTE,
      phrase: EXPECTED_PACKAGE_DESCRIPTION,
      reason: "Open Graph description is missing or changed",
    });
  }

  if (/name="robots" content="[^"]*noindex/i.test(html)) {
    violations.push({
      route: PACKAGE_ROUTE,
      phrase: "robots noindex",
      reason: "package page must stay indexable",
    });
  }

  return violations;
}

function verifyInternalPackageLink(route: string, html: string) {
  if (
    !html.includes('href="/shopify-hydrogen-packages"') &&
    !html.includes('href="https://hydrogenexpert.co/shopify-hydrogen-packages"')
  ) {
    return [
      {
        route,
        phrase: "/shopify-hydrogen-packages",
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

    if (rule.route === PACKAGE_ROUTE) {
      violations.push(...verifyPackageSeo(html));
    }

    if ((INTERNAL_LINK_SOURCE_ROUTES as readonly string[]).includes(rule.route)) {
      violations.push(...verifyInternalPackageLink(rule.route, html));
    }
  }

  const sitemap = await fetchText(baseUrl, "/sitemap.xml");
  if (!sitemap.includes(EXPECTED_PACKAGE_CANONICAL)) {
    violations.push({
      route: "/sitemap.xml",
      phrase: EXPECTED_PACKAGE_CANONICAL,
      reason: "package page is missing from sitemap",
    });
  }

  const llms = await fetchText(baseUrl, "/llms.txt");
  if (!llms.includes(EXPECTED_PACKAGE_CANONICAL)) {
    violations.push({
      route: "/llms.txt",
      phrase: EXPECTED_PACKAGE_CANONICAL,
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
