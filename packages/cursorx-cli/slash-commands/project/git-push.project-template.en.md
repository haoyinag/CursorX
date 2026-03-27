# Git commit and push (project template)

Language: [中文](git-push.project-template.md)

For **project-scoped** commands—not published as the generic global default.

Extend with:

- Default excluded paths  
- Directories that must commit separately  
- Repo-specific pre-commit checks  
- Stricter commit message rules  

## Customization examples

### Default excludes

Before the interactive exclude step, unstage (if already staged):

- `<replace-with-project-specific-path-a>`
- `<replace-with-project-specific-path-b>`

Only run `git restore --staged <file>` for files that are staged; if missing or unchanged, skip—do not fail.

### Directory split rules

If certain trees must never mix in one commit (e.g. `android/`, `ios/`, `libs/`), after staging is final: if mixed with other areas, stop and ask for a split.

## Recommended workflow

1. Start from the generic [`../global/git-push.md`](../global/git-push.en.md)  
2. Layer project rules on top  
3. Ship the result under this repo’s `.cursor/commands/`  

Keeps shared commands reusable while tightening policy per project.
