[中文](release-cycle.md) · English

# Release cycle

Write changelog, release notes, and upgrade checklist at release time — turning releases from ad-hoc patching into a repeatable process.

## When to use

- Publishing a new npm package version
- Command set has user-visible changes
- Wrapping up an iteration for release

## Prerequisites

```bash
npx cursorx-cli install changelog-entry --scope global
npx cursorx-cli install release-notes --scope global
npx cursorx-cli install upgrade-checklist --scope global
```

## Steps

### 1. `/changelog-entry` — write changelog entries

Type `/changelog-entry`.

Specify a version: `/changelog-entry for cursorx-cli 0.3.2`.

It categorizes changes from the diff and commits into Added / Changed / Fixed / Docs, outputting paste-ready changelog entries.

Key: it writes **user-perceivable changes**, not file-level listings.

Paste the output into your project's `CHANGELOG.md`.

### 2. `/release-notes` — write release notes

Type `/release-notes`.

Specify the audience: `/release-notes for npm users upgrading from 0.2.0`.

It outputs:

- **Highlights**: top 2-4 items worth knowing
- **Improvements**: detailed changes
- **Notes**: install, compatibility, upgrade reminders

Paste into GitHub Release, npm page, or announcement.

### 3. `/upgrade-checklist` — list upgrade steps

Type `/upgrade-checklist`.

Specify the audience: `/upgrade-checklist for teams using global slash commands`.

Based on actual changes, it lists:

- Who needs to pay attention
- Actions to perform (checkable)
- How to verify the upgrade is complete

If the release requires no user action, it explicitly says so.

### 4. Align version numbers

Confirm `package.json` version, CHANGELOG, and README version examples are consistent.

### 5. Publish

Execute your project's release process (`npm publish`, tag, etc.).

## Expected outcome

- CHANGELOG has structured entries
- Release notes are ready for external publication
- Upgrade path is clear — users know what to do
- Version information is consistent everywhere

## Pairs well with

- [Release hygiene](../tips/release-hygiene.en.md) — release hygiene habits
- [Doc update](./doc-update.en.md) — confirm docs are current before release
- [`markdown-release.settings.jsonc`](../configs/markdown-release.settings.jsonc) — Markdown editing config

## Variations

| Scenario | Adjustment |
|----------|------------|
| Small patch version | `/changelog-entry` is enough, skip release-notes |
| Major version with breaking changes | Run every step, make upgrade-checklist detailed |
| Internal tool (not public) | Simplify release-notes, focus on changelog |
