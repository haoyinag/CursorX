[中文](release-notes-skill.md) · English

# Release Notes Skill

- **Name**: `Release Notes Skill`
- **Source**: `CursorX custom draft`
- **Scenario**: Shipping releases, npm packages, or syncing announcements and version summaries
- **Capabilities**: Distill user-visible changes from commits, diffs, and docs; separate highlights, improvements, and notes; de-emphasize internal churn, emphasize user value
- **Usage**:
  1. Read commits and diffs in scope
  2. Read related README or command docs
  3. Write release notes for an external reader
- **Limits**: Not a full changelog substitute; unclear scope can mix unrelated changes
- **When**: Before release, before syncing announcements, when filling release pages

## Why a dedicated Skill

Shipping often fails on **explaining changes**, not implementation—this raises repeat release quality.

## Prompt skeleton

```text
Generate release notes for the current release scope.
Focus on:
1. user-visible highlights
2. practical improvements
3. upgrade or compatibility notes

Do not overstate internal refactors as user value.
```
