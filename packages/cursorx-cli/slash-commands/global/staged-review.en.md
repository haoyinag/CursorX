# Review staged changes only

Language: [中文](staged-review.md)

Goal: High-signal review of **staged** diff only—behavior regressions, missing tests, edge cases, clear risks.

Optional focus, e.g.:

- `/staged-review`
- `/staged-review focus auth and cache invalidation`

`${user_input}` is extra focus; may be empty.

## Rules

1. Only staged changes; do not fold unstaged work into conclusions.  
2. Run `git diff --cached --name-only` first; if empty, stop and ask to stage.  
3. Then `git diff --cached` for full diff.  
4. Default to code-review style: bug risk, regressions, missing tests, stale docs/config.  
5. If `${user_input}` is set, weight it—but do not ignore worse issues.  
6. Output: **findings first**, then a short summary.  

## Steps

1. `git diff --cached --name-only`  
2. If empty: prompt to stage via `git add` or SCM, stop.  
3. `git diff --cached`  
4. Classify severity:  
   - `high`: wrong behavior, data issues, clear regressions  
   - `medium`: maintenance cost, weak boundaries or verification  
   - `low`: docs, naming, readability  
5. For each issue: cause, impact, suggested fix.  
6. If nothing clear: state that explicitly and add residual risks or suggested tests.  

## Output format

- Findings first  
- Reference files when possible  
- Even with no findings, suggest validation scenarios  

## Scope

- Pre-commit staged review  
- Not full-branch or full-PR review; use `/pr-summary` for branch summaries  
