# Liquid and Hydrogen Competitor Workstream Completion Checklist

Status: Implemented
Last updated: 2026-06-17
Owner: Agent
Source of truth: `README.md`, `competitor-profiles.md`, `task-backlog.md`, current repo

## Purpose

Use this checklist before claiming the competitor-analysis task setup is complete.

## Required Files

- `tasks/liquid-hydrogen-competitor-analysis-2026-06/README.md`
- `tasks/liquid-hydrogen-competitor-analysis-2026-06/competitor-profiles.md`
- `tasks/liquid-hydrogen-competitor-analysis-2026-06/task-backlog.md`
- `tasks/liquid-hydrogen-competitor-analysis-2026-06/completion-checklist.md`
- `tasks/liquid-hydrogen-competitor-analysis-2026-06/off-site-authority-checklist.md`
- `tasks/liquid-hydrogen-competitor-analysis-2026-06/competitor-monitoring-cadence.md`
- `tasks/liquid-hydrogen-competitor-analysis-2026-06/implementation-log.md`

## Requirements

- The guide is easy to skim by title.
- All listed competitors are reviewed one by one.
- The analysis separates competitor public claims from HydrogenExpert claims.
- The backlog breaks improvements into small tasks.
- Each implementation task preserves the HydrogenExpert positioning rules.
- Public content tasks include validation guidance.
- No task asks for unsupported proof, fake metrics, fake testimonials, fake partner status, fake office, or fake team capacity.
- The task folder can be used before any site implementation begins.
- The implementation log maps backlog themes to changed public surfaces.

## Verification

- `find tasks/liquid-hydrogen-competitor-analysis-2026-06 -maxdepth 1 -type f | sort`
- `rg -n "^## [0-9]+\\." tasks/liquid-hydrogen-competitor-analysis-2026-06/competitor-profiles.md`
- `rg -n "^### LH-" tasks/liquid-hydrogen-competitor-analysis-2026-06/task-backlog.md`
- `git diff --check`
