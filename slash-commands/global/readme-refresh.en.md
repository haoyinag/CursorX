# Refresh README or docs

Language: [中文](readme-refresh.md)

Goal: Update README/sections from current code, tree, or recent changes so they stay **accurate, readable, and aligned with real usage**.

Optional target, e.g.:

- `/readme-refresh`
- `/readme-refresh packages/cursorx-cli/README.md`
- `/readme-refresh refresh quick start and install verification section`

`${user_input}` may be a file path, section focus, or emphasis.

## Rules

1. Pick the target doc first; if `user_input` is vague, start from the README or `docs/` most related to current changes.  
2. Before editing, read: target doc, related code/tree, and working-tree diff if present.  
3. Content must match the repo—**do not invent** commands, scripts, or paths.  
4. Prefer incremental edits; avoid full rewrites unless structure is broken.  
5. Call out assumptions or open questions when unsure.  

## Steps

1. Decide which doc to update.  
2. Read the doc and related code, indexes, tree notes.  
3. If there are local changes, use `git diff`.  
4. Check staleness: install, steps, paths, command samples, recommended entry points.  
5. Apply the smallest necessary edits.  

## Output

- Brief note of what changed  
- If you added examples or verification steps, say for whom  
- List 1–3 remaining doc gaps if any  

## Scope

- README, quick start, tree overviews, command docs  
- Not a substitute for formal design docs  
