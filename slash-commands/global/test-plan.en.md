# Test plan from current changes

Language: [中文](test-plan.md)

Goal: From **staged** changes, produce an executable test plan—smoke, regressions, edge cases, manual paths.

Optional scope, e.g.:

- `/test-plan`
- `/test-plan focus install and verify flows`

`${user_input}` is extra focus; may be empty.

## Rules

1. Default to staged analysis: `git diff --cached --name-only`.  
2. If nothing is staged, **do not** silently switch scope—ask whether to use unstaged or specific files.  
3. Must read `git diff --cached`; filenames alone are not enough.  
4. Separate: smoke, regression, edge cases, manual verification.  
5. Mark scenarios that cannot run in this environment as “not run—suggested only.”  

## Steps

1. `git diff --cached --name-only`  
2. If empty: warn no staged changes; ask to proceed with unstaged; stop if user does not confirm.  
3. `git diff --cached`  
4. Identify affected areas, regression paths, boundaries, automation vs manual fit.  
5. Output a prioritized plan.  

## Output format

1. Short statement of what the plan covers  
2. Checklist: required smoke, key regressions, easy-to-miss edges, suggested manual steps  
3. If `${user_input}` is set, add a “focus area” section  
4. Final line: tests not run vs only planning, or what was executed  

## Scope

- Before commit, QA handoff, or PR—planning only  
- Does not replace running tests  
- For risk review instead of test design, use `/staged-review`  
