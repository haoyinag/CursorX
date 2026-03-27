[中文](pr-preparation.md) · English

# PR preparation

Complete review, test plan, and summary before opening a PR — turning PRs from file lists into clear narratives.

## When to use

- Feature is done, ready to open a PR
- Want reviewers to immediately understand what changed, why, and the risks
- Team requires test plans and risk notes in PRs

## Prerequisites

```bash
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install test-plan --scope global
npx cursorx-cli install pr-summary --scope global
```

## Steps

### 1. Confirm branch state

Ensure all PR-bound changes are committed. `git status` should be clean or show only unrelated changes.

### 2. `/staged-review` — final review pass

If you still have uncommitted changes, stage them and run `/staged-review`.

If everything is already committed, skip to step 3. The goal is to ensure no low-quality issues slip into the PR.

### 3. `/test-plan` — outline the test plan

Type `/test-plan`.

Keep the output for the PR's Test Plan section. Focus on:

- Do smoke tests cover critical paths?
- Are there easy-to-miss regression scenarios?
- Do edge cases need mention in the PR?

### 4. `/pr-summary` — generate PR summary

Type `/pr-summary`.

It reads the current branch diff against the base and outputs:

- **Summary**: core value, 2-4 bullets
- **Risks**: blast radius, dependencies, under-verified areas
- **Test Plan**: done and suggested tests

Add emphasis as needed: `/pr-summary emphasize performance impact`.

### 5. Assemble the PR description

Merge `/pr-summary` output with `/test-plan` conclusions into the PR description. Adjust wording as needed.

## Expected outcome

- PR description is clear: what changed, why, what it affects
- Test plan is explicit: reviewers know which paths were verified
- Risks are visible: reviewers don't have to guess

## Pairs well with

- [Feature completion](./feature-completion.en.md) — run the full commit loop before PR
- [Risk handoff](./risk-handoff.en.md) — supplement with risk analysis for complex changes
- [Release hygiene](../tips/release-hygiene.en.md) — if the PR is release-related

## Variations

| Scenario | Adjustment |
|----------|------------|
| Small fix (a few lines) | `/pr-summary` alone is enough, skip test-plan |
| Large refactor | Run `/risk-scan` before step 2, include high-risk items in PR |
| Long branch with many commits | `/pr-summary` reads the full branch diff, not just the last commit |
