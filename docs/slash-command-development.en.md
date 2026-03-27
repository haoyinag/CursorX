[简体中文](./slash-command-development.md)

# Slash Commands — Maintainer Notes

How Markdown slash commands in `CursorX` are organized: layout, install conventions, and submission flow.

## Principles

- One file maps to one `/command`  
- Prefer `slash-commands/global/` for general commands  
- Prefer `slash-commands/project/` for templates or project-private rules  
- If a command depends on scripts, place scripts under `slash-commands/scripts/`  

## Naming

- English kebab-case  
- Filename usually equals the command name (e.g. `git-push.md` → `/git-push`)  

## Suggested body structure

- Command goal  
- How `${user_input}` is used  
- Rules that must be followed  
- Execution steps  
- Failure handling  
- Scope and limits  

## Index

On every addition, update:

- [`slash-commands/index.json`](../slash-commands/index.json)  
- [`slash-commands/catalog.md`](../slash-commands/catalog.md)  

If install scripts are involved, also keep in sync:

- `scripts/install-slash-command.mjs`  
- `scripts/install-slash-command.ps1`  

The index must declare paths, install scope, and companion scripts.

## Install scopes

- `global`: installs to `~/.cursor/commands/`  
- `project`: installs to `<repo>/.cursor/commands/`  

If scripts are copied, target:

- `~/.cursor/scripts/`  
- `<repo>/.cursor/scripts/`  

## What we prefer to merge

Commands usable in chat or Agent via `/name`; reusable across repos or clearly a project template; no private repo rules smuggled into global commands; install paths and script dependencies documented.
