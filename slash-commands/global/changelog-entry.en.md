# Changelog entry for current changes

Language: [中文](changelog-entry.md)

Goal: Turn a version or change set into **paste-ready changelog** lines focused on user-visible impact, not file lists.

Optional scope, e.g.:

- `/changelog-entry`
- `/changelog-entry for cursorx-cli 0.2.0`

`${user_input}` is version, scope, or emphasis; may be empty.

## Rules

1. Ground entries in real diffs, commits, or version ranges.  
2. Prefer “what users notice.”  
3. Split narrative changes from install/distribution changes when both exist.  
4. Do not elevate pure refactors/renames/tidy-ups to headline items.  
5. If too thin for its own entry, say so and suggest merging.  

## Steps

1. Read commits or diff in scope.  
2. Bucket into Added / Changed / Fixed / Docs.  
3. Translate file churn into user or workflow value.  
4. Emit paste-ready changelog text.  

## Output format

- `### <version-or-scope>`
- `Added`
- `Changed`
- `Fixed`
- `Docs`

Omit empty sections.

## Scope

- Repo or package changelogs, version blurbs  
- For full external announcements, prefer `/release-notes`  
