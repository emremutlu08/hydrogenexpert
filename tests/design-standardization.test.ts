import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

interface PageFile {
  route: string;
  path: string;
  source: string;
}

const PUBLIC_PAGE_EXEMPTIONS = new Set(["/", "/agency", "/cost", "/shopify-hydrogen-seo-guide"]);
const APPROVED_SHARED_TEMPLATE = "<ServiceLandingPage";

function collectPageFiles(dir = "app"): PageFile[] {
  const pages: PageFile[] = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      pages.push(...collectPageFiles(filePath));
      continue;
    }

    if (entry.name !== "page.tsx") {
      continue;
    }

    const routePath = path.dirname(filePath).replace(/^app/, "");
    const route = routePath === "" ? "/" : routePath;
    pages.push({
      route,
      path: filePath,
      source: readFileSync(filePath, "utf8"),
    });
  }

  return pages.sort((a, b) => a.route.localeCompare(b.route));
}

function usesApprovedSharedTemplate(source: string) {
  return source.includes(APPROVED_SHARED_TEMPLATE);
}

describe("public page design standards", () => {
  const publicPages = collectPageFiles().filter(
    (page) => !PUBLIC_PAGE_EXEMPTIONS.has(page.route),
  );

  it("requires every non-home public page to expose a visual breadcrumb", () => {
    const missing = publicPages
      .filter(
        (page) =>
          !page.source.includes("<Breadcrumbs") &&
          !usesApprovedSharedTemplate(page.source),
      )
      .map((page) => `${page.route} (${page.path})`);

    expect(missing).toEqual([]);
  });

  it("requires every non-home public page to emit BreadcrumbList schema", () => {
    const missing = publicPages
      .filter(
        (page) =>
          !page.source.includes("buildBreadcrumbListSchema") &&
          !usesApprovedSharedTemplate(page.source),
      )
      .map((page) => `${page.route} (${page.path})`);

    expect(missing).toEqual([]);
  });

  it("keeps breadcrumbs before PageIntroSection on directly composed pages", () => {
    const outOfOrder = publicPages
      .filter((page) => !usesApprovedSharedTemplate(page.source))
      .filter((page) => page.source.includes("<PageIntroSection"))
      .filter(
        (page) =>
          page.source.indexOf("<Breadcrumbs") >
          page.source.indexOf("<PageIntroSection"),
      )
      .map((page) => `${page.route} (${page.path})`);

    expect(outOfOrder).toEqual([]);
  });
});
