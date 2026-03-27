[中文](daily-commit.md) · English

# Daily commit

Shortest path from code change to push.

## When to use

- Done with a piece of work, ready to commit and push
- Most frequent daily workflow
- No need for full lint/test loop — just "changed, reviewed, pushed"

## Prerequisites

Install two commands:

```bash
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install git-push --scope global
```

Verify:

```bash
npx cursorx-cli verify staged-review --scope global
npx cursorx-cli verify git-push --scope global
```

## Steps

### 1. Stage changes

Use the SCM panel or `git add` in the terminal to stage files for this commit.

Only stage what belongs in this commit — don't add everything blindly.

### 2. `/staged-review` — quick review

Type `/staged-review` in Cursor.

It only looks at staged content and flags: clear bugs, behavioral regressions, missing tests, docs out of sync.

- `high` severity: fix first, go back to step 1
- `medium` / `low` only: decide if they need fixing now

### 3. `/git-push` — commit and push

After review, type `/git-push feat(xxx): your commit message`.

It runs pull → stage → exclusion confirm → commit → push in order, with confirmation at key steps.

## Expected outcome

- Code pushed to remote
- One risk review before commit, reducing low-quality pushes

## Pairs well with

- Run `/diff-summary` first when unsure what changed
- For a more thorough commit, use the [Feature completion](./feature-completion.en.md) workflow

## Variations

| Scenario | Adjustment |
|----------|------------|
| Tiny change (typo, config) | Skip `/staged-review`, go straight to `/git-push` |
| Multiple unrelated changes | Stage in batches, run review → push for each |
| Team requires pre-commit review | Paste `/staged-review` findings into commit message |
