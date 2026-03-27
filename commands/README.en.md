# Cursor editor commands

Language: [中文](README.md)

`commands/` holds **JSON wrappers for editor commands**. Use it as a library of action snippets and reference examples.

This is different from [`slash-commands/`](../slash-commands/README.en.md):

- `slash-commands/`: native slash commands; install to global or project scope
- `commands/`: editor command wrappers, mostly for command palette or keybinding use

## Layout

```text
commands/
├── development/
├── productivity/
├── ai-assistant/
├── general/
├── index.json
├── catalog.md
└── README.md
```

## What each file is for

- `.json` under categories: command definitions  
- `index.json`: index and metadata for automation  
- `catalog.md`: human browsing  
- per-category `README.md`: when that category fits  

## How to use

1. Skim [catalog.en.md](catalog.en.md) for available commands  
2. Read [index.json](index.json) for tags, categories, `requires`  
3. Open the JSON and confirm command IDs match your Cursor build  

## Installation

There is no single install flow for this directory. The `.json` files depend on Cursor and underlying command IDs, and those vary across versions.

For **stable reuse** across repos, use [`slash-commands/`](../slash-commands/README.en.md).

If you still try `commands/`:

1. Pick a target from [catalog.en.md](catalog.en.md)  
2. Read the JSON for command names and `when`  
3. Confirm entries exist in your Cursor  
4. **Import a few commands first**, not everything at once  

## Manual verification order

1. Satisfy `requires`  
2. Search the command palette for the underlying command  
3. Try one or two high-frequency ones first  
4. Note: time saved, focus/view dependencies, team worthiness  

## Naming

- One command per file  
- English kebab-case  
- Filename reflects purpose, e.g. `git-smart-commit.json`  

## JSON shape (runtime)

Keep it minimal:

```json
{
  "title": "Title",
  "description": "Description",
  "command": "cursor.command.execute",
  "args": { "name": "actual-command-id" },
  "when": "optional condition",
  "tags": ["tag-a", "tag-b"]
}
```

Keep repo-level prose in `index.json`, not in runtime JSON, to reduce breakage risk. These are **not** slash commands and are not discoverable as `/name`.

## Contributing

When adding a command, at minimum:

1. Add the JSON  
2. Update `commands/index.json`  
3. Update `commands/catalog.md`  
4. Document scenario, prerequisites, limits  

Then run:

```bash
node scripts/validate-commands.mjs
```

Details: [editor commands development guide](../docs/command-development.md).

## License

Contents here follow the project root [MIT License](../LICENSE).
