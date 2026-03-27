# Workflow catalog

Language: [中文](catalog.md)

Organized by scenario. Each entry lists **trigger, commands used, audience**.

## Daily development

### Daily commit

- File: [`workflows/daily-commit.en.md`](./daily-commit.en.md)
- Trigger: Done coding, ready to push
- Commands: `/staged-review` → `/git-push`
- Audience: Everyone; daily use
- Difficulty: Low

### Feature completion

- File: [`workflows/feature-completion.en.md`](./feature-completion.en.md)
- Trigger: Feature is done, ready to commit
- Commands: `/lint-fix` → `/test-plan` → `/staged-review` → `/git-push`
- Audience: After finishing a feature
- Difficulty: Low

### Debug and fix

- File: [`workflows/debug-and-fix.en.md`](./debug-and-fix.en.md)
- Trigger: Bug found or Problems panel has errors
- Commands: `/staged-review` → `/test-plan` → `/git-push`
- Audience: Bug fixes, lint/type error cleanup
- Difficulty: Medium

## Collaboration and delivery

### PR preparation

- File: [`workflows/pr-preparation.en.md`](./pr-preparation.en.md)
- Trigger: Feature done, ready to open a PR
- Commands: `/staged-review` → `/test-plan` → `/pr-summary`
- Audience: Final step before opening a PR
- Difficulty: Low

### Risk handoff

- File: [`workflows/risk-handoff.en.md`](./risk-handoff.en.md)
- Trigger: Handing off changes, QA, or merge window
- Commands: `/risk-scan` → `/diff-summary` → `/migration-note`
- Audience: Cross-team handoffs, QA, merge windows
- Difficulty: Medium

### Code review (as reviewer)

- File: [`workflows/code-review-as-reviewer.en.md`](./code-review-as-reviewer.en.md)
- Trigger: Received someone else's PR for review
- Commands: `/staged-review`, `/risk-scan`
- Audience: Code review scenarios
- Difficulty: Medium

## Docs and releases

### Doc update

- File: [`workflows/doc-update.en.md`](./doc-update.en.md)
- Trigger: Code changed, docs need to catch up
- Commands: `/readme-refresh` → `/migration-note` → `/pr-summary`
- Audience: After code changes that affect docs
- Difficulty: Low

### Release cycle

- File: [`workflows/release-cycle.en.md`](./release-cycle.en.md)
- Trigger: Publishing a release
- Commands: `/changelog-entry` → `/release-notes` → `/upgrade-checklist`
- Audience: npm packages, command set releases
- Difficulty: Medium

## Getting started

### New project onboarding

- File: [`workflows/onboarding-new-project.en.md`](./onboarding-new-project.en.md)
- Trigger: New repo wants to use CursorX
- Commands: `cursorx install`, `cursorx verify`
- Audience: First-time CursorX users
- Difficulty: Low

## Recommended onboarding order

1. [New project onboarding](./onboarding-new-project.en.md) — get set up
2. [Daily commit](./daily-commit.en.md) — highest frequency, run first
3. [Feature completion](./feature-completion.en.md) — learn the full loop
4. [PR preparation](./pr-preparation.en.md) — essential for collaboration
5. As needed: [Release cycle](./release-cycle.en.md), [Risk handoff](./risk-handoff.en.md)
