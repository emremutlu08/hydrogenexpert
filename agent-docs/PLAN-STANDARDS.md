# Plan Standards

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: User preference and agent analysis

## Purpose

Plans should be grounded in the current repo, decision-complete, and ready for another engineer or agent to implement without guessing.

## When to Use

Read this file before creating or materially updating:

- implementation plans,
- audit-to-fix plans,
- architecture cleanup plans,
- PRDs with execution steps,
- deployment plans,
- debugging plans,
- feature rollout plans.

## Planning Order

1. Read `AGENTS.md`.
2. Check `git status --short --branch`.
3. Read the task-relevant `agent-docs/` files.
4. Read `agent-docs/DOC-STANDARDS.md` if the plan will be written to a file.
5. Inspect the current repo before asking questions.
6. Separate discovered facts from product preferences.
7. Ask only questions that materially change the plan and cannot be answered from the repo.
8. Produce a decision-complete plan.

## Plan Quality Rules

- State what the plan is grounded in.
- Keep scope explicit when confusion is likely.
- Prefer repo patterns over new abstractions.
- Preserve public behavior unless the task is explicitly user-facing.
- Explain how DRY and KISS are preserved for shared behavior, styling, content registries, metadata, routes, API behavior, or architecture.
- Include validation, rollout, assumptions, and acceptance criteria.
- Name residual risks instead of implying certainty.
- Do not invent facts, proof, metrics, screenshots, or live state.

## Confidence and Loophole Check

Before finalizing architecture or implementation plans:

- Identify plausible loopholes, hidden assumptions, and failure modes.
- Fix the plan where a loophole can be resolved.
- If a risk cannot be fully removed, name the residual risk and the validation step that reduces it.

## Compact Chat Plan Format

For chat-only plans, use:

- Summary.
- Key changes.
- Validation.
- Assumptions.

Still include enough detail to remove implementation decisions.
