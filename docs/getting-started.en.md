# Getting started

**Language / 语言：** [中文](getting-started.md)

If this is your first visit, start from what you want to accomplish, then find the matching workflow.

## Suggested order

1. [`workflows/README.en.md`](../workflows/README.en.md) — find a workflow by scenario  
2. [`workflows/onboarding-new-project.en.md`](../workflows/onboarding-new-project.en.md) — if this is your first setup  
3. [`slash-commands/catalog.en.md`](../slash-commands/catalog.en.md) — browse all installable commands  
4. [`packages/cursorx-cli/README.en.md`](../packages/cursorx-cli/README.en.md) — CLI usage  
5. Run: `npx cursorx-cli list`  
6. Install commands as the workflow requires, then verify  
7. As needed: [`commands/README.en.md`](../commands/README.en.md), [`skills/README.en.md`](../skills/README.en.md), [`tips/README.en.md`](../tips/README.en.md), [`configs/README.en.md`](../configs/README.en.md)  
8. If you need the directory map, read [`content-map.en.md`](./content-map.en.md)  

Naming: npm package `cursorx-cli`, binary `cursorx`.

## Choosing commands

Start from **the problem**, then find a workflow — each workflow tells you which commands to install.

Common scenarios and their workflows:

| Scenario | Workflow |
|----------|----------|
| Push after coding | [Daily commit](../workflows/daily-commit.en.md) |
| Feature done, ready to commit | [Feature completion](../workflows/feature-completion.en.md) |
| Ready to open a PR | [PR preparation](../workflows/pr-preparation.en.md) |
| Publishing a release | [Release cycle](../workflows/release-cycle.en.md) |
| Fixing a bug | [Debug and fix](../workflows/debug-and-fix.en.md) |

If you just want a single command:

- Install globally for yourself  
- Install into the current repo for the team  
- Wrap editor actions as searchable shortcuts  

## Minimal slash path

Try these first:

- [`slash-commands/global/git-push.md`](../slash-commands/global/git-push.md)  
- [`slash-commands/global/lint-fix.md`](../slash-commands/global/lint-fix.md)  

They cover commit/push flow and lint-fix for current changes.

Second batch of workflow commands:

- [`staged-review`](../slash-commands/global/staged-review.md)  
- [`test-plan`](../slash-commands/global/test-plan.md)  
- [`pr-summary`](../slash-commands/global/pr-summary.md)  
- [`risk-scan`](../slash-commands/global/risk-scan.md)  
- [`diff-summary`](../slash-commands/global/diff-summary.md)  
- [`migration-note`](../slash-commands/global/migration-note.md)  
- [`release-notes`](../slash-commands/global/release-notes.md)  
- [`changelog-entry`](../slash-commands/global/changelog-entry.md)  
- [`upgrade-checklist`](../slash-commands/global/upgrade-checklist.md)  

## Install model

Two shapes:

- **`slash-commands/`**: explicit `global` / `project` installs  
- **`commands/`**: mostly editor-command reference material  

Suggested flow:

1. Pick from `slash-commands/`  
2. Prefer `npx cursorx-cli ...`  
3. If you use it often, `npm i -g cursorx-cli`  
4. Choose `global` vs `project`  
5. Copy `.cursor/scripts/` when the command needs scripts  
6. Run `cursorx verify <command-id> --scope ...`  
7. Type `/command` in Cursor  

Do not `npm install cursorx-cli` inside application repos (installer, not a runtime dep).

If you need structure, release, or strategy notes, see [`repo-strategy.en.md`](./repo-strategy.en.md).

## Contributing

- [Contributing](../CONTRIBUTING.en.md)  
- [Command development](./command-development.md)  
