[简体中文](./release-process.md)

# Release Process

Locks in the current release cadence for `CursorX` so repo content, the CLI package, and the npm page do not drift apart.

## Scope

Two primary actions:

1. Repo content release  
2. `cursorx-cli` npm package release  

## Pre-flight checks

Before each release, answer:

1. Is there a **user-visible** change?  
2. Is it reflected in README, directory notes, and changelog?  
3. Does it still match core repo semantics, usefulness to others, and practical value?  

Fix gaps before running release steps.

## Classify the change first

Before steps, tag the change (definitions align with [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.en.md)):

- `repo-only`: content layer, navigation, or repo docs only; **no** change to what `cursorx-cli` exposes  
- `cli-coupled`: change originates in `slash-commands/` and must flow into `cursorx-cli` distribution  
- `cli-native`: work is mainly in `packages/cursorx-cli/`; worth a package release even without new slash-command content  

If `cli-native` repeats, revisit route B via [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.en.md). Log a row in [`p2-observation-template.md`](./p2-observation-template.en.md) so you keep evidence, not just “did we publish.”

## Repo content release

**Fits when**: high-value slash commands land; reusable assets in `commands/`, `skills/`, `tips/`, `configs/`; major navigation, roadmap, or directory changes.

**Suggested steps**:

1. Update relevant indexes and READMEs  
2. Update [`CHANGELOG.md`](../CHANGELOG.md)  
3. If phase status shifts materially, update [`roadmap-status.md`](./roadmap-status.en.md)  
4. Minimal validation: `node scripts/validate-commands.mjs`; if CLI data moves, sync `slash-commands/`  
5. If this cut carries `cli-coupled` or `cli-native` signals, add a P2 observation entry  
6. Commit and push  

## `cursorx-cli` release

**Fits when**: logic under `packages/cursorx-cli/` changes; `slash-commands/` data shipped inside the package changes; npm needs to match the repo.

**Suggested steps**:

1. Confirm `packages/cursorx-cli/package.json` version  
2. Update [`packages/cursorx-cli/CHANGELOG.md`](../packages/cursorx-cli/CHANGELOG.md)  
3. Update [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md) if needed  
4. In [`p2-observation-template.md`](./p2-observation-template.en.md), mark `cli-coupled` vs `cli-native`  
5. In the package directory: `npm run check`  
6. Publish: `npm publish`  
7. Verify: `npm view cursorx-cli@<version> version`  

## Version bumps

- **patch**: docs, metadata, small compatibility fixes  
- **minor**: new user-facing commands, self-check features, or materially expanded command data  
- **major**: incompatible shifts to install semantics, primary entrypoints, or the command system  

## Principles

- Align repo and npm meaning before chasing frequency  
- Pure repo content with no CLI surface change does not require an npm publish  
- If package README, version, or embedded command data lags npm, prioritize a package release  

## Related docs

- [`../CHANGELOG.md`](../CHANGELOG.md)  
- [`./roadmap-status.md`](./roadmap-status.en.md)  
- [`../packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
- [`./p2-observation-template.md`](./p2-observation-template.en.md)  
