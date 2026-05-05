import { CASE_STUDIES } from "../data/caseStudies";
import {
  BLOG_SOURCE_METADATA,
  STATIC_PAGE_SOURCE_METADATA,
  getBlogSourceMetadata,
  getStaticPageSourceMetadata,
} from "../lib/content-sources";
import { SERVICE_PACKAGES } from "../lib/services";

const SHOPIFY_CLAIM_TERMS = [
  "Shopify",
  "Hydrogen",
  "Oxygen",
  "Storefront API",
  "Customer Account API",
  "GraphQL",
  "Remix",
  "React Router",
  "Liquid",
  "headless",
  "custom storefront",
  "Shopify Plus",
  "MCP",
  "Storefront MCP",
  "UCP",
  "AI agent commerce",
  "sitemap",
  "robots.txt",
  "canonical",
  "JSON-LD",
  "checkout",
  "analytics",
  "consent",
] as const;

interface ClaimRecord {
  pagePath: string;
  content: string;
  hasSourceMetadata: boolean;
  hasLastVerified: boolean;
}

function flatten(value: unknown): string {
  if (Array.isArray(value)) {
    return value.map(flatten).join(" ");
  }

  if (value && typeof value === "object") {
    return Object.values(value).map(flatten).join(" ");
  }

  return typeof value === "string" ? value : "";
}

function matchedTerms(content: string) {
  const lowerContent = content.toLowerCase();

  return SHOPIFY_CLAIM_TERMS.filter((term) => lowerContent.includes(term.toLowerCase()));
}

function formatCsvCell(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

const records: ClaimRecord[] = [
  ...Object.entries(STATIC_PAGE_SOURCE_METADATA).map(([pagePath, metadata]) => ({
    pagePath,
    content: pagePath,
    hasSourceMetadata: metadata.sourceMap.length > 0,
    hasLastVerified: Boolean(metadata.lastVerified),
  })),
  ...SERVICE_PACKAGES.map((servicePackage) => ({
    pagePath: servicePackage.pagePath,
    content: flatten(servicePackage),
    hasSourceMetadata: servicePackage.sourceMap.length > 0,
    hasLastVerified: Boolean(servicePackage.lastVerified),
  })),
  ...CASE_STUDIES.map((caseStudy) => {
    const inheritedMetadata = getStaticPageSourceMetadata("/case-studies");

    return {
      pagePath: `/case-studies/${caseStudy.slug}`,
      content: flatten(caseStudy),
      hasSourceMetadata: Boolean(inheritedMetadata?.sourceMap.length),
      hasLastVerified: Boolean(inheritedMetadata?.lastVerified),
    };
  }),
  ...Object.keys(BLOG_SOURCE_METADATA).map((slug) => {
    const metadata = getBlogSourceMetadata(slug);

    return {
      pagePath: `/blog/${slug}`,
      content: slug.replaceAll("-", " "),
      hasSourceMetadata: Boolean(metadata?.sourceMap.length),
      hasLastVerified: Boolean(metadata?.lastVerified),
    };
  }),
];

const rows = records
  .map((record) => {
    const terms = matchedTerms(record.content);
    const needsReview = terms.length > 0 && (!record.hasSourceMetadata || !record.hasLastVerified);

    return {
      pagePath: record.pagePath,
      matchedTerms: terms,
      hasSourceMetadata: record.hasSourceMetadata,
      hasLastVerified: record.hasLastVerified,
      needsReview,
    };
  })
  .filter((row) => row.matchedTerms.length > 0 || row.needsReview)
  .sort((a, b) => a.pagePath.localeCompare(b.pagePath));

console.log(
  [
    "Page path",
    "Matched terms",
    "Has source metadata?",
    "Has lastVerified?",
    "Needs review?",
  ]
    .map(formatCsvCell)
    .join(","),
);

for (const row of rows) {
  console.log(
    [
      row.pagePath,
      row.matchedTerms.join("; "),
      row.hasSourceMetadata ? "yes" : "no",
      row.hasLastVerified ? "yes" : "no",
      row.needsReview ? "yes" : "no",
    ]
      .map(formatCsvCell)
      .join(","),
  );
}

const reviewCount = rows.filter((row) => row.needsReview).length;

if (reviewCount > 0) {
  console.error(`Shopify claim audit found ${reviewCount} page(s) that need source review.`);
  process.exitCode = 1;
}
