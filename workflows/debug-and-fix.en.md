[中文](debug-and-fix.md) · English

# Debug and fix

Complete flow from problem discovery to locating, fixing, and verifying.

## When to use

- Problems panel shows errors or warnings
- Tests are failing
- Bug needs fixing
- Batch lint / typecheck errors to clear

## Prerequisites

```bash
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install test-plan --scope global
npx cursorx-cli install git-push --scope global
```

## Steps

### 1. Locate the problem

**If the Problems panel has errors:**

Follow the [problems-first triage](../tips/problems-first-triage.en.md) approach:

1. Open the Problems panel (`Ctrl+Shift+M`)
2. Sort into three buckets: blocks build, batch repeats, can defer
3. Clear the first bucket first

**If it's a runtime bug:**

1. Reproduce the issue, note the error message and stack trace
2. Navigate to the relevant code in the editor
3. Select the suspicious code and ask via Quick Chat

### 2. Fix

Use the [selection-first prompts](../tips/selection-first-prompts.en.md) approach to collaborate with AI:

- Select the error code, ask for fix suggestions
- Change one thing at a time
- Save after each fix, confirm Problems count is decreasing

Follow the [small-batch refactor](../tips/small-batch-refactor.en.md) rhythm — verify state after each round.

### 3. Stage the fix

Once the problem is resolved, stage the changes.

### 4. `/staged-review` — verify the fix

Type `/staged-review`.

Let AI check whether the fix introduces new issues:

- Is the fix complete (not just suppressing symptoms)?
- Does it introduce new regressions?
- Are related code paths affected?

### 5. `/test-plan` — fill in test thinking

Type `/test-plan`.

Check if the bug fix has corresponding verification paths. If the test suggestions point to uncovered scenarios, consider addressing them.

### 6. `/git-push` — commit the fix

`/git-push fix(xxx): fix description`.

## Expected outcome

- Problem is fixed and AI-reviewed
- Fix doesn't introduce new regressions
- Clear test thinking established
- Clean commit pushed

## Pairs well with

- [Problems-first triage](../tips/problems-first-triage.en.md) — systematic approach for the locating phase
- [Selection-first prompts](../tips/selection-first-prompts.en.md) — AI collaboration technique for fixes
- [Small-batch refactor](../tips/small-batch-refactor.en.md) — pacing the fix process
- [`diagnostics-focus.settings.jsonc`](../configs/diagnostics-focus.settings.jsonc) — editor config for focused Problems handling

## Variations

| Scenario | Adjustment |
|----------|------------|
| Urgent hotfix | Skip `/test-plan`, review then push directly |
| Batch lint errors | Run `/lint-fix` first (see [Feature completion](./feature-completion.en.md)), then handle the rest |
| Root cause unclear | Multiple rounds of "select → ask" to narrow down; don't rush to fix |
