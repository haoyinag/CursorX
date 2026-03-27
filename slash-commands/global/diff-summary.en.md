# Summarize current changes

Language: [中文](diff-summary.md)

Goal: Turn **staged**, working-tree, or branch delta into a short, accurate note for handoff, standups, or chat.

Optional purpose, e.g.:

- `/diff-summary`
- `/diff-summary write a handoff note for the team`

`${user_input}` is tone or intent; may be empty.

## Rules

1. Scope: if staged changes exist, **prefer staged**; else summarize working tree.  
2. Read file lists and real diffs—not filenames alone.  
3. Include: what changed, why it matters, what is unfinished or unverified.  
4. If `${user_input}` is set, tune voice and granularity for that use.  
5. If there is nothing to summarize, say so clearly.  

## Steps

1. `git diff --cached --name-only`  
2. If staged non-empty: `git diff --cached`, summarize staged.  
3. If staged empty: `git status -sb`, `git diff --name-only`; stop if still empty; else `git diff`.  
4. Emit a send-ready short summary.  

## Output format

- `Summary`
- `Key changes`
- `Open items`

- Summary: 2–3 sentences overall  
- Key changes: bullets for core deltas  
- Open items: verification gaps, doc gaps, open questions  

## Scope

- Daily sync, handoff, phase reports  
- Not a substitute for full PR text—use `/pr-summary` for that  
