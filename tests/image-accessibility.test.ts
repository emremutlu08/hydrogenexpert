import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { describe, expect, it } from "vitest";

const repoRoot = process.cwd();
const scanRoots = ["app", "components"] as const;

function collectTsxFiles(dir: string): string[] {
  const absoluteDir = join(repoRoot, dir);
  const entries = readdirSync(absoluteDir);
  const files: string[] = [];

  for (const entry of entries) {
    const absolutePath = join(absoluteDir, entry);
    const stat = statSync(absolutePath);

    if (stat.isDirectory()) {
      files.push(...collectTsxFiles(relative(repoRoot, absolutePath)));
      continue;
    }

    if (entry.endsWith(".tsx")) {
      files.push(relative(repoRoot, absolutePath));
    }
  }

  return files;
}

function getImageTags(source: string) {
  return source.match(/<(?:Image|img)\b[\s\S]*?>/g) ?? [];
}

function hasAttribute(tag: string, attributeName: string) {
  return new RegExp(`\\b${attributeName}\\s*=`).test(tag);
}

describe("image accessibility guardrails", () => {
  it("keeps rendered images explicitly described with alt text and title metadata", () => {
    const failures: string[] = [];

    for (const root of scanRoots) {
      for (const filePath of collectTsxFiles(root)) {
        const source = readFileSync(join(repoRoot, filePath), "utf8");

        for (const tag of getImageTags(source)) {
          const tagLabel = `${filePath}: ${tag.split("\n")[0]}`;

          if (!hasAttribute(tag, "alt")) {
            failures.push(`${tagLabel} is missing alt`);
          }

          if (!hasAttribute(tag, "title") && !/alt\s*=\s*["']{2}/.test(tag)) {
            failures.push(`${tagLabel} is missing title`);
          }
        }
      }
    }

    expect(failures).toEqual([]);
  });
});
