# Risk scan for current changes

Language: [中文](risk-scan.md)

Goal: From **staged** changes or working-tree/branch delta, surface high-risk areas, regressions, dependency impact, and what to verify first.

Optional focus, e.g.:

- `/risk-scan`
- `/risk-scan focus cache invalidation and config compatibility`

`${user_input}` is extra risk surface; may be empty.

## Rules

1. Default to staged: `git diff --cached --name-only`.  
2. If nothing is staged, fall back to working tree and **state the scope change** explicitly.  
3. Not a generic summary—prioritize: logic regressions, config/doc drift, compatibility, verification gaps.  
4. If `${user_input}` is set, treat it as a primary risk lens.  
5. If no clear high risks, still say so and list residual watch items.  

## Steps

1. `git diff --cached --name-only`  
2. If staged non-empty: `git diff --cached`, scan staged.  
3. If staged empty: `git status -sb`, `git diff`, state that scan is unstaged or full working tree.  
4. Check: entrypoints, config, install flow, scripts; renames/paths/compatibility; README/migration/tests alignment; changes without verification.  
5. Output severity-ordered risks and validation suggestions.  

## Output format

- `High risks`
- `Medium risks`
- `Validation focus`

Use `None` when a bucket is empty.

## Scope

- Quick pass before commit, QA, or merge  
- Not a substitute for full code review  
