[中文](doc-update.md) · English

# Doc update

Refresh docs after code changes to avoid "code moved, docs still old."

## When to use

- Changed install paths, command entries, config layout, or directory structure
- README or doc steps may be outdated
- Pre-release confirmation that docs are current

## Prerequisites

```bash
npx cursorx-cli install readme-refresh --scope global
npx cursorx-cli install migration-note --scope global
npx cursorx-cli install pr-summary --scope global
```

## Steps

### 1. `/readme-refresh` — refresh the docs

Type `/readme-refresh`.

Specify a target: `/readme-refresh packages/cursorx-cli/README.md`.

It compares current code with the doc and updates stale:

- Install instructions and examples
- Steps and paths
- Directory descriptions

If unsure which doc to refresh, run without arguments — it starts from the doc most related to current changes.

### 2. `/migration-note` — check if migration guidance is needed

Type `/migration-note`.

It examines the current diff to determine whether there are **user-visible changes** requiring migration guidance:

- Migration impact exists: outputs who is affected, what changed, what users must do
- Pure internal refactor: explicitly tells you no migration note is needed

Not every change needs a migration note — let the command decide.

### 3. Commit doc changes

Stage and commit the documentation updates.

### 4. `/pr-summary` (optional) — if opening a PR

Doc updates usually accompany code changes in a PR. Use `/pr-summary` to include doc changes in the summary.

## Expected outcome

- Docs match the code
- User-visible changes have migration guidance
- Fewer "released but docs are stale" incidents

## Pairs well with

- [Release hygiene](../tips/release-hygiene.en.md) — systematic pre-release doc check
- [Release cycle](./release-cycle.en.md) — doc updates often happen alongside releases
- [`markdown-release.settings.jsonc`](../configs/markdown-release.settings.jsonc) — editor config for frequent Markdown editing

## Variations

| Scenario | Adjustment |
|----------|------------|
| Internal-only change | `/migration-note` will say no migration needed; step 1 is enough |
| Bilingual docs | After refreshing the Chinese README, run `/readme-refresh` on the English version too |
| Major version upgrade | Add `/upgrade-checklist` to generate user upgrade steps |
