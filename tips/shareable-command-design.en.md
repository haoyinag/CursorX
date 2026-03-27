[中文](shareable-command-design.md) · English

# Shareable commands before project-only rules

## When

- Adding a slash command
- Unsure if it should be global or project-scoped
- Worried team-only rules land in public commands

## Steps

1. Ask whether it can reuse across projects.
2. If yes, prefer a general command first.
3. Put team- or repo-only rules in templates or project-private commands.
4. Document scenario, boundaries, what is generic, and what projects should inject.

## What you get

- Keeps CursorX useful to others
- Command layer stays reusable, not captured by one repo

## Pairs well with

- `slash-commands/project/git-push.project-template.md`
- Before adding commands, see the three checks in `docs/roadmap-status.md`
