# Migration note

Language: [中文](migration-note.md)

Goal: When changes affect command entrypoints, install paths, config, scripts, or usage, write a **user-facing** migration note.

Optional audience, e.g.:

- `/migration-note`
- `/migration-note for users upgrading from the old installer`

`${user_input}` is audience or migration context; may be empty.

## Rules

1. Confirm there is real migration impact—**do not** force migration text for pure internal refactors.  
2. Base notes on real diffs and tree changes.  
3. Cover: old way, new way, user actions, impact if they do nothing.  
4. If `${user_input}` is set, structure for that audience.  
5. If nothing to migrate, say clearly that no extra migration note is needed.  

## Steps

1. Prefer staged: `git diff --cached --name-only`, `git diff --cached`.  
2. If no staged changes, fall back to working tree diff.  
3. Look for: renames, command entry changes, install changes, config paths, user-facing steps.  
4. Emit migration content only when impact exists.  

## Output format

- `Who is affected`
- `What changed`
- `What to do`
- `Verification`

If no migration: one-line conclusion plus why.

## Scope

- Install changes, renames, config moves, structural refactors  
- Not a full release log  
