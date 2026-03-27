[中文](README.md) · English

# Config snippets

`configs/` holds **reusable Cursor configuration examples and notes**—not a blanket overwrite of your environment.

## What belongs here

- `settings.json` samples
- `keybindings.json` samples
- Workspace-level guidance
- Notes on config bundles for specific workflows

## Current files

- [`focused-review.settings.jsonc`](./focused-review.settings.jsonc) — diff reading, long files, review
- [`navigation.keybindings.jsonc`](./navigation.keybindings.jsonc) — command palette, navigation, search, AI entry shortcuts
- [`workspace-hygiene.settings.jsonc`](./workspace-hygiene.settings.jsonc) — less commit noise, cleaner workspace and search
- [`markdown-release.settings.jsonc`](./markdown-release.settings.jsonc) — README, CHANGELOG, release notes
- [`focus-layout.settings.jsonc`](./focus-layout.settings.jsonc) — less UI noise, smoother editor / check / terminal flow
- [`diagnostics-focus.settings.jsonc`](./diagnostics-focus.settings.jsonc) — Problems, search, and bottom panel focus

## How to use

1. Read notes and comments  
2. Copy only the bits you need  
3. Merge into your own settings  
4. Reload Cursor and verify  

Avoid: blind full-file overwrite; copying without checking version gaps; ignoring global vs workspace scope.

## Maintenance

- Document what each knob does  
- Call out platform differences  
- Note clashes with common defaults  

## Note

Cursor and the VS Code ecosystem differ by version and platform; this folder favors **ideas and fragments**, not one fixed path.

## Suggested order

1. Read in-file comments for intent  
2. Take only what you need  
3. After merge, sanity-check navigation, diff, autosave, and exclude rules  

## License

MIT (see [LICENSE](../LICENSE) at repo root).
