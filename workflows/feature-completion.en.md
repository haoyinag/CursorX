[中文](feature-completion.md) · English

# Feature completion

Full loop from lint fix to test thinking to review to commit after finishing a feature.

## When to use

- A feature or change set is essentially done
- Want to ensure code quality before committing
- Looking to make the "done → commit" process a repeatable habit

## Prerequisites

```bash
npx cursorx-cli install lint-fix --scope global --with-scripts
npx cursorx-cli install test-plan --scope global
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install git-push --scope global
```

`lint-fix` needs `--with-scripts` to install its companion script.

## Steps

### 1. `/lint-fix` — fix formatting and rules first

Type `/lint-fix` in Cursor.

It only runs ESLint / Stylelint auto-fix on files changed in the current Git diff — not the whole repo.

Confirm no new errors after fix. If there are typecheck issues, run project-specific checks separately.

### 2. Stage changes

Stage both lint fixes and feature code: `git add` or SCM panel.

### 3. `/test-plan` — think through what to test

Type `/test-plan`.

It lists smoke, regression, edge case, and manual verification paths based on staged changes.

**You don't have to run tests** — the goal is to shift test thinking earlier:

- Check if smoke and regression cover core paths
- Decide if discovered edge cases need fixing now

### 4. `/staged-review` — AI review pass

Type `/staged-review`.

Add focus areas if needed: `/staged-review focus auth and caching`.

- `high` findings: must fix
- `medium`: use judgment
- Review conclusions can inform your commit

### 5. `/git-push` — commit and push

Once clear, `/git-push feat(xxx): commit message`.

## Expected outcome

- Formatting issues auto-fixed
- Test thinking done (you know what to test)
- Code passed one round of risk review
- Clean commit pushed

## Pairs well with

- [Problems-first triage](../tips/problems-first-triage.en.md) — if issues remain after lint-fix
- [Selection-first prompts](../tips/selection-first-prompts.en.md) — targeted questions after review findings
- [Context handoff](../tips/context-handoff.en.md) — switch context when features are complex

## Variations

| Scenario | Adjustment |
|----------|------------|
| Project has no ESLint | Skip step 1, start from staging |
| Opening a PR instead of pushing | Replace step 5 with the [PR preparation](./pr-preparation.en.md) workflow |
| Multiple people on one branch | Pull before step 5 (`/git-push` handles this automatically) |
