# Getting started

**Language / 语言：** [中文](getting-started.md)

The goal is a reusable Cursor-focused content library, not a pile of one-offs.

Think **one repo, one main product**:

- Repo: `CursorX`
- Main product: `slash-commands/`
- Everything else: `commands/`, `skills/`, `tips/`, `configs/`

## Suggested order

1. [`slash-commands/README.md`](../slash-commands/README.md)  
2. [`slash-commands/catalog.md`](../slash-commands/catalog.md)  
3. [`content-map.en.md`](./content-map.en.md): which layer to open next  
4. [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
5. Run: `node packages/cursorx-cli/bin/cursorx.js list`  
6. Install the slash command via CLI, install script, or copy  
7. Then: `cursorx doctor` or `cursorx verify <command-id> --scope ...`  
8. As needed: [`commands/README.md`](../commands/README.md), [`skills/README.md`](../skills/README.md), [`tips/README.md`](../tips/README.md), [`configs/README.md`](../configs/README.md)  

Naming: npm package `cursorx-cli`, binary `cursorx`.

## Choosing commands

Start from **the problem**, not the file tree.

Typical drivers:

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

Longer-term CLI and entry-point notes: [`repo-strategy.md`](./repo-strategy.md).

## Contributing

- [Contributing](../CONTRIBUTING.en.md)  
- [Command development](./command-development.md)  
