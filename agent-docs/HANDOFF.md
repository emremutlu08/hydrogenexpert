# Handoff

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: Current repo, user-approved implementation plan, agent analysis

## Purpose

This is the quick orientation file for the current HydrogenExpert architecture cleanup program.

## Current Focus

- Preserve `AGENTS.md` as the read-first router.
- Keep canonical agent guidance in `agent-docs/`.
- Maintain public no-loss guardrails before future architecture work.
- Treat service and content registry compatibility exports as migration support, not new sources of truth.
- Keep public site behavior unchanged while architecture improves.

## Active Program

The 2026-05-25 architecture cleanup program is complete:

1. Agent Router Foundation.
2. No-loss guardrails for route, sitemap, registry, metadata, docs routing, llms, forms, and image accessibility.
3. `ServiceLandingPage` risk cleanup.
4. Service registry split.
5. Content registry placement.
6. Final direct-page architecture pass.

The final pass intentionally did not add a shared page renderer. Direct-composed pages currently repeat layout rhythm over different data shapes, while shared primitives and feature registries already carry the reusable behavior.

## Start Checklist

- Read `AGENTS.md`.
- Run `git status --short --branch`.
- Read the relevant `agent-docs/` files.
- Preserve unrelated user changes.
- Inspect current code before editing.
- Validate with the smallest command set that matches the change risk.

## Current Assumption

This program is not a public redesign. URL, copy, metadata, schema, sitemap, robots, feed, llms, API response shape, form behavior, image alt/title behavior, and commercial positioning should remain stable unless Emre explicitly asks for a visible change.
