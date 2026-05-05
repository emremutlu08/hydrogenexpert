import { readFileSync } from "node:fs";
import { join } from "node:path";

import { CASE_STUDIES } from "../data/caseStudies";
import {
  BLOG_SOURCE_METADATA,
  STATIC_PAGE_SOURCE_METADATA,
} from "../lib/content-sources";
import { SERVICE_PACKAGES } from "../lib/services";
import { getStaticSitemapRoutes } from "../lib/sitemap-entries";

const repoRoot = process.cwd();
const failures: string[] = [];
const warnings: string[] = [];

function fail(message: string) {
  failures.push(message);
}

function warn(message: string) {
  warnings.push(message);
}

function assertUnique(values: readonly string[], label: string) {
  const seen = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      fail(`Duplicate ${label}: ${value}`);
    }

    seen.add(value);
  }
}

function assertNoPlaceholderText(relativePath: string) {
  const content = readFileSync(join(repoRoot, relativePath), "utf8");
  const forbiddenPatterns = [/\bTODO\b/i, /lorem ipsum/i, /placeholder source/i];

  for (const pattern of forbiddenPatterns) {
    if (pattern.test(content)) {
      fail(`${relativePath} contains placeholder text matching ${pattern}.`);
    }
  }
}

const knownRoutes = new Set([
  "/blog",
  ...getStaticSitemapRoutes(),
  ...CASE_STUDIES.map((caseStudy) => `/case-studies/${caseStudy.slug}`),
  ...Object.keys(BLOG_SOURCE_METADATA).map((slug) => `/blog/${slug}`),
]);

assertUnique(
  SERVICE_PACKAGES.map((servicePackage) => servicePackage.pagePath),
  "service page path",
);
assertUnique(
  SERVICE_PACKAGES.map((servicePackage) => servicePackage.metaTitle),
  "service meta title",
);
assertUnique(
  SERVICE_PACKAGES.map((servicePackage) => servicePackage.metaDescription),
  "service meta description",
);
assertUnique(
  CASE_STUDIES.map((caseStudy) => caseStudy.slug),
  "case study slug",
);

for (const servicePackage of SERVICE_PACKAGES) {
  if (!servicePackage.metaTitle.trim()) {
    fail(`${servicePackage.pagePath} is missing metaTitle.`);
  }

  if (!servicePackage.metaDescription.trim()) {
    fail(`${servicePackage.pagePath} is missing metaDescription.`);
  }

  if (!servicePackage.lastVerified) {
    fail(`${servicePackage.pagePath} is missing lastVerified.`);
  }

  const serviceSourceCount: number = servicePackage.sourceMap.length;

  if (serviceSourceCount === 0) {
    fail(`${servicePackage.pagePath} is missing sourceMap.`);
  }

  for (const faq of servicePackage.faq) {
    if (!faq.question.trim() || !faq.answer.trim()) {
      fail(`${servicePackage.pagePath} has an empty FAQ question or answer.`);
    }
  }

  for (const link of servicePackage.relatedLinks) {
    if (
      !knownRoutes.has(link.href) &&
      !link.href.startsWith("/blog/") &&
      !link.href.startsWith("http")
    ) {
      fail(`${servicePackage.pagePath} links to unknown route ${link.href}.`);
    }
  }
}

for (const [path, metadata] of Object.entries(STATIC_PAGE_SOURCE_METADATA)) {
  if (!knownRoutes.has(path)) {
    warn(`${path} has source metadata but is not in static sitemap routes.`);
  }

  if (!metadata.lastVerified) {
    fail(`${path} source metadata is missing lastVerified.`);
  }

  const staticSourceCount: number = metadata.sourceMap.length;

  if (staticSourceCount === 0) {
    fail(`${path} source metadata is missing sourceMap.`);
  }
}

for (const [slug, metadata] of Object.entries(BLOG_SOURCE_METADATA)) {
  if (!metadata.lastVerified) {
    fail(`/blog/${slug} source metadata is missing lastVerified.`);
  }

  const blogSourceCount: number = metadata.sourceMap.length;

  if (blogSourceCount === 0) {
    fail(`/blog/${slug} source metadata is missing sourceMap.`);
  }
}

[
  "CONTENT_PROTOCOL.md",
  "BLOG_PUBLISHING_PLAYBOOK.md",
  "OPERATING_RULES.md",
  "lib/content-sources.ts",
  "lib/services.ts",
  "data/caseStudies.ts",
].forEach(assertNoPlaceholderText);

for (const warning of warnings) {
  console.warn(`Warning: ${warning}`);
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`Error: ${failure}`);
  }

  process.exit(1);
}

console.log("Content validation passed.");
