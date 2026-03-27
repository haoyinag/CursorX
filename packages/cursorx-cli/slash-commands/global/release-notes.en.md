# Generate release notes

Language: [中文](release-notes.md)

Goal: From branch delta, recent commits, and docs, produce release notes suitable for announcements or external summaries.

Optional audience, e.g.:

- `/release-notes`
- `/release-notes for npm users upgrading from 0.1.0`

`${user_input}` is reader or emphasis; may be empty.

## Rules

1. Scope the release first—**do not invent features**.  
2. Combine at least: `git log`, `git diff --stat`, relevant README/usage docs.  
3. Lead with: user-visible capabilities, install/usage changes, compatibility/upgrade notes.  
4. If `${user_input}` is set, tune tone and focus for that audience.  
5. Do not sell internal refactors as user value; downplay no-impact churn.  

## Steps

1. Diff current branch vs baseline, or list commits in the release window.  
2. Read docs and command index to see what is externally visible.  
3. Organize into shipped capabilities, improvements, and notes.  
4. Emit paste-ready release notes.  

## Output format

- `## Highlights`
- `## Improvements`
- `## Notes`

- Highlights: 2–4 most important user-facing changes  
- Improvements: finer-grained improvements  
- Notes: install, compatibility, upgrade guidance  

## Scope

- npm packages, command bundles, version posts  
- Not a full changelog; line-by-line entries use `/changelog-entry`  
