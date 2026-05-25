# Documentation Standards

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: User preference and agent analysis

## Purpose

Documentation should help the next agent or engineer make fewer guesses. Keep docs current, source-grounded, and easy to route from `AGENTS.md`.

## File Naming

- Use uppercase kebab-case for canonical agent docs: `PROJECT-BRIEF.md`, `CURRENT-STATE.md`, `DOC-STANDARDS.md`.
- Use lowercase kebab-case for feature-specific docs outside `agent-docs/`, unless an existing folder uses another convention.
- Prefer one durable canonical doc over multiple overlapping notes.

## Required Header Block

Every new durable doc should start with:

```md
# Title

Status: Draft | Active | Needs Review | Archived
Last updated: YYYY-MM-DD
Owner: Agent | Emre | Team
Source of truth: Code | package.json | Live site | Client input | Agent analysis
```

For existing docs, add this block when the update is meaningful and the file does not already have a better local convention.

## Content Rules

- State the purpose near the top.
- Separate confirmed facts from assumptions.
- Link to relevant files or docs with explicit paths.
- Prefer concise, operational notes over narrative history.
- Do not add placeholder claims, fake proof, fake logos, fake testimonials, or unverifiable metrics.
- If something is unknown, write `Unknown - needs confirmation` and name what would confirm it.
- For drift-prone facts such as versions, deploy state, live URLs, API behavior, or schedules, say what must be re-verified.

## Source of Truth Rules

- Dependency versions and scripts: `package.json`.
- Current runtime behavior: current code and live verification when relevant.
- Project workflow and routing: `AGENTS.md` plus `agent-docs/WORKFLOW.md`.
- Repo structure and placement: `agent-docs/REPO-STRUCTURE.md`.
- Planning standards: `agent-docs/PLAN-STANDARDS.md`.
- Engineering principles: `agent-docs/ENGINEERING-PRINCIPLES.md`.
- Content governance: `agent-docs/CONTENT-GOVERNANCE.md`.
- Design and accessibility: `agent-docs/DESIGN.md`.
- Deployment QA: `agent-docs/DEPLOYMENT-QA.md`.
- Durable decisions: `agent-docs/DECISIONS.md`.
- Current snapshot: `agent-docs/CURRENT-STATE.md`.
- Follow-ups and backlog: `agent-docs/TODO.md`.

## Security Rules

- Never include secrets, API keys, tokens, passwords, private customer data, or private access links.
- Environment variable names are allowed when useful; values are not.
- Do not paste private logs unless sensitive values are removed.

## Update Routing

- New durable decision: update `agent-docs/DECISIONS.md`.
- Meaningful repo-state change: update `agent-docs/CURRENT-STATE.md`.
- Workflow or release-process change: update `agent-docs/WORKFLOW.md`.
- Repo structure or placement-rule change: update `agent-docs/REPO-STRUCTURE.md`.
- Folder add/remove/rename/repurpose: update `agent-docs/REPO-STRUCTURE.md`.
- `package.json` script/dependency/devDependency/package metadata/engine change: update `agent-docs/HYDROGEN.md`.
- Planning standard change: update `agent-docs/PLAN-STANDARDS.md`.
- Engineering principle change: update `agent-docs/ENGINEERING-PRINCIPLES.md`.
- Follow-up, open question, or backlog item: update `agent-docs/TODO.md`.
- New agent-facing doc: add it to the routing table in `AGENTS.md`.
- Content governance change: update `agent-docs/CONTENT-GOVERNANCE.md`.
- Design or image accessibility rule: update `agent-docs/DESIGN.md`.
