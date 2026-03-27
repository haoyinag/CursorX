# PR summary for the current branch

Language: [中文](pr-summary.md)

Goal: Against the default base branch, produce PR-ready summary, risks, and test plan.

Optional emphasis, e.g.:

- `/pr-summary`
- `/pr-summary emphasize why install verification matters`

`${user_input}` is extra emphasis; may be empty.

## Rules

1. Identify the remote default branch, then diff the current branch against the base.  
2. At minimum: `git branch --show-current`, `git status -sb`, `git log --oneline <base>..HEAD`, `git diff --stat <base>...HEAD`.  
3. If you are already on the default branch with no branch delta, summarize **working tree** changes and state that clearly.  
4. Do not only list files—explain **why** and **impact**.  
5. If `${user_input}` is set, prioritize it in the summary.  

## Steps

1. `git branch --show-current`  
2. Resolve default base via `git symbolic-ref refs/remotes/origin/HEAD` or reasonable fallback.  
3. `git status -sb`  
4. `git log --oneline <base>..HEAD`  
5. `git diff --stat <base>...HEAD`  
6. Use `git diff <base>...HEAD` when detail is needed.  
7. Emit copy-paste PR text.  

## Output format

- `## Summary`
- `## Risks`
- `## Test Plan`

- Summary: 2–4 bullets on core value  
- Risks: blast radius, dependencies, weakly verified areas  
- Test Plan: checklist—done or recommended  

## Scope

- Before opening/updating a PR  
- Not a substitute for full review  
- For staged-only review conclusions, use `/staged-review`  
