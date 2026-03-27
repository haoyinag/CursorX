[简体中文](./command-development.md)

# Editor Commands — Maintainer Notes

This doc covers how JSON editor commands in `CursorX` are organized: layout, minimum fields, index updates, and submission flow. For native Cursor slash commands, see [`slash-commands/README.md`](../slash-commands/README.md) and [`slash-command-development.md`](./slash-command-development.en.md).

## Principles

- One file, one command  
- Keep runtime JSON small; favor compatibility and copy-paste use  
- Repo-wide metadata lives in [`commands/index.json`](../commands/index.json)  
- Every command needs a clear scenario; do not submit private one-off wrappers  

## Directories

Place files under one of:

- [`commands/development/`](../commands/development/)  
- [`commands/productivity/`](../commands/productivity/)  
- [`commands/ai-assistant/`](../commands/ai-assistant/)  
- [`commands/general/`](../commands/general/)  

If a command spans scenarios, prefer `tags` over inventing new categories.

## Naming

- English kebab-case  
- Filename reflects purpose  
- Avoid vague names like `helper` or `tool`  

Good: `git-smart-commit.json`, `review-selected-code.json`. Avoid: `my-command.json`, `awesome-tool.json`.

## Runtime JSON shape

Suggested skeleton:

```json
{
  "title": "Command title",
  "description": "What it does",
  "command": "cursor.command.execute",
  "args": {
    "name": "underlying command name"
  },
  "when": "optional condition expression",
  "tags": ["tag-a", "tag-b"]
}
```

Fields: `title` (palette label), `description`, `command` (Cursor command id), `args`, `when` (context), `tags` (filtering and maintenance).

## Index

When adding a command, update [`commands/index.json`](../commands/index.json). Each entry should include at least: `id`, `title`, `category`, `path`, `summary`, `tags`, `platform`, `requires`.

## Catalog

Also update [`commands/catalog.md`](../commands/catalog.md) with at least: file path, scenario, prerequisites, main value.

## Before you commit

1. Valid JSON  
2. Filename matches purpose  
3. `description` is concrete  
4. `when` matches the intended context  
5. `tags` are useful for search  
6. `index.json` and `catalog.md` are in sync  

Recommended:

```bash
node scripts/validate-commands.mjs
```

## What we prefer to merge

Commands that reduce repetition, encode stable workflows, are reusable by others, and do not depend on private paths or context.
