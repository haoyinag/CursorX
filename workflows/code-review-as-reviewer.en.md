[中文](code-review-as-reviewer.md) · English

# Code review (as reviewer)

AI-assisted review of someone else's PR, focusing on risks, regressions, and test gaps.

## When to use

- Received a PR to review
- Large change set — want AI to do a first pass before you dig in
- Want to systematically catch risks rather than just checking code style

## Prerequisites

```bash
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install risk-scan --scope global
```

## Steps

### 1. Check out the PR branch

```bash
git fetch origin
git checkout <pr-branch>
```

Or use Cursor / GitHub PR tools to open the branch directly.

### 2. Get an overview of the changes

Quick scan of file list and change volume:

```bash
git diff --stat origin/main...HEAD
```

### 3. `/risk-scan` — surface high-risk areas

Type `/risk-scan`.

It scans the branch diff for:

- Logic regressions
- Config/doc desync
- Compatibility issues
- Verification gaps

Add specific concerns: `/risk-scan focus database migrations and API compatibility`.

Note High / Medium risks — these are where your review should focus.

### 4. Targeted deep reading

Based on step 3's risk points, navigate to specific code in the editor.

Use the [selection-first prompts](../tips/selection-first-prompts.en.md) approach: select suspicious code, ask via Quick Chat.

Common question angles:

- Could this logic break under XX scenario?
- Does this change affect callers of XX?
- What boundary checks are missing?

### 5. Write review comments

Organize findings into review comments:

- Must fix (blocking)
- Suggested improvements (non-blocking)
- Confirmations / questions (need author response)

## Expected outcome

- Risks scanned systematically, not just by intuition
- Review comments have evidence and priorities
- High-risk areas not missed

## Pairs well with

- [Selection-first prompts](../tips/selection-first-prompts.en.md) — targeted questions on specific code
- [Context handoff](../tips/context-handoff.en.md) — batch review for large PRs
- [`focused-review.settings.jsonc`](../configs/focused-review.settings.jsonc) — editor config for diff reading and code review

## Variations

| Scenario | Adjustment |
|----------|------------|
| Small PR (a few dozen lines) | Read code directly, skip `/risk-scan` |
| PR includes tests | Check if tests cover risks flagged by `/risk-scan` |
| Unfamiliar codebase | Select core logic first and ask Quick Chat "what does this do?" |
