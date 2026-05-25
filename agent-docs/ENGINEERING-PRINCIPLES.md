# Engineering Principles

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: User preference, current repo, agent analysis

## Purpose

This file defines the default engineering judgment agents must apply in this repository. DRY and KISS are explicit priorities for Emre.

## DRY

Do not duplicate behavior, business rules, source metadata, layout rhythm, design tokens, schema assembly, service data, navigation, proof values, API validation, analytics wiring, or content-governance rules when a shared source already exists or should exist.

Before implementing, search for:

- existing components and section primitives,
- existing CSS contracts in `app/globals.css`,
- shared helpers in `lib/`,
- current registry modules,
- tests that already lock behavior,
- canonical docs in `agent-docs/`.

Prefer one source of truth for:

- service package data,
- source metadata and claim classifications,
- sitemap/static route lists,
- proof values,
- visual surfaces and card/list/table rhythms,
- lead qualification options,
- security and API response headers,
- analytics event naming.

## KISS

Do not introduce abstractions just because code could be abstracted.

Create or extend an abstraction only when it:

- removes real duplication,
- centralizes a rule that must stay consistent,
- reduces meaningful complexity,
- matches an existing repo pattern,
- improves locality,
- makes testing or verification clearer.

Avoid generic framework-style layers for one-off behavior.

## Module Shape

- Route files should stay focused on route metadata, data lookup, and rendering.
- Component files should stay focused on the component and small render-only helpers.
- Large page-specific sections should move into focused section modules.
- Large registries should live in feature/domain folders.
- Shared adapters and small stable helpers may stay in `lib/`.
- One small local helper can stay local when it is private and clearer there.
- Multiple helpers, reused helpers, or business-rule helpers should be split out.

## DRY and KISS Together

When DRY and KISS appear to conflict:

- Do not leave duplicated business logic or design-system logic in multiple places.
- Do not create an over-general abstraction for a single one-off use case.
- Prefer a small named helper or focused section module when the same rule appears in two or more places.
- Prefer updating an existing central source over adding a new parallel source.
- If the change affects a system-level concern, centralize it even if the first patch is slightly larger.

## Anti-Patterns

- Constant-return helper functions that hide simple behavior.
- Parallel registries for the same routes, services, or source metadata.
- Page-local card/table/list markup repeated across many pages without a shared renderer.
- Compatibility modules that become permanent second sources of truth.
- Public copy changes hidden inside architecture refactors.
- Broad rewrites that change behavior before guardrails exist.

## Planning Requirement

Every implementation plan should state how the approach preserves DRY and KISS when it touches shared behavior, styling, content registries, routes, metadata, API behavior, or architecture.
