[中文](doc-refresh-skill.md) · English

# Doc Refresh Skill

- **Name**: `Doc Refresh Skill`
- **Source**: `CursorX custom draft`
- **Scenario**: After code or layout changes, refresh README, getting started, or other docs
- **Capabilities**: Compare code, indexes, and docs to find drift; prefer incremental edits over full rewrites; fill install paths, verification steps, and boundaries; keep tone and structure
- **Usage**:
  1. Read the target doc
  2. Read related code, indexes, or diffs
  3. Update only what facts support
- **Limits**: Not for inventing large design docs from scratch; moving code may require another doc pass
- **When**: Feature wrap-up, post-refactor, pre-release doc checks

## Why a dedicated Skill

Many repos lack **sync discipline**, not prose—this makes doc updates a repeatable habit.

## Prompt skeleton

```text
Refresh the target README or doc based on the current repository state.
Read the doc, then the relevant code or diff.
Prefer minimal accurate edits.
Do not invent commands, files, or behaviors that do not exist.
```
