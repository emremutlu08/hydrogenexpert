import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

const repoRoot = process.cwd();

const canonicalAgentDocs = [
  "agent-docs/HANDOFF.md",
  "agent-docs/PROJECT-BRIEF.md",
  "agent-docs/CURRENT-STATE.md",
  "agent-docs/REPO-STRUCTURE.md",
  "agent-docs/DECISIONS.md",
  "agent-docs/WORKFLOW.md",
  "agent-docs/ENGINEERING-PRINCIPLES.md",
  "agent-docs/TODO.md",
  "agent-docs/PLAN-STANDARDS.md",
  "agent-docs/DOC-STANDARDS.md",
  "agent-docs/HYDROGEN.md",
  "agent-docs/CONTENT-GOVERNANCE.md",
  "agent-docs/BLOG-PUBLISHING-PLAYBOOK.md",
  "agent-docs/DESIGN.md",
  "agent-docs/DEPLOYMENT-QA.md",
] as const;

const rootCompatibilityStubs = [
  ["OPERATING_RULES.md", "agent-docs/WORKFLOW.md"],
  ["CONTENT_PROTOCOL.md", "agent-docs/CONTENT-GOVERNANCE.md"],
  ["BLOG_PUBLISHING_PLAYBOOK.md", "agent-docs/BLOG-PUBLISHING-PLAYBOOK.md"],
  ["DEPLOY.md", "agent-docs/DEPLOYMENT-QA.md"],
  ["PLANNING.md", "agent-docs/PLAN-STANDARDS.md"],
  ["design.md", "agent-docs/DESIGN.md"],
] as const;

function readRepoFile(path: string) {
  return readFileSync(join(repoRoot, path), "utf8");
}

describe("agent docs routing", () => {
  it("keeps AGENTS.md as the read-first router for every canonical agent doc", () => {
    const agents = readRepoFile("AGENTS.md");

    expect(agents).toContain("All agents working in this repository must read this file first");
    expect(agents).toContain("Check `git status --short --branch`");

    for (const docPath of canonicalAgentDocs) {
      expect(existsSync(join(repoRoot, docPath))).toBe(true);
      expect(agents).toContain(docPath);
    }
  });

  it("keeps legacy root agent docs as short compatibility stubs", () => {
    for (const [stubPath, canonicalPath] of rootCompatibilityStubs) {
      const stub = readRepoFile(stubPath);
      const meaningfulLines = stub
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      expect(stub).toContain(canonicalPath);
      expect(stub).toContain("Agents must read `AGENTS.md` first");
      expect(meaningfulLines.length).toBeLessThanOrEqual(6);
    }
  });

  it("keeps the canonical local checkout path in README and avoids the old Documents path", () => {
    const readme = readRepoFile("README.md");

    expect(readme).toContain("/Users/emremutlu/Apps/Codex/hydrogenexpert/AGENTS.md");
    expect(readme).not.toContain("/Users/emremutlu/Documents/New project/hydrogenexpert");
  });
});
