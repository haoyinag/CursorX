[中文](diagnostics-triage-skill.md) · English

# Diagnostics Triage Skill

- **Name**: `Diagnostics Triage Skill`
- **Source**: `CursorX custom draft`
- **Scenario**: Many lint, typecheck, or Problems issues—layer before fixing
- **Capabilities**: Group by severity and pattern; find blockers and high-frequency repeats; suggest an efficient fix order
- **Usage**:
  1. Read Problems or error lists
  2. Bucket error vs warning vs repeated issues
  3. Output priority and suggested fix path
- **Limits**: Does not replace running lint/typecheck; incomplete input skews priority
- **When**: Big-change wrap-up, post-upgrade cleanup, bulk cleanup

## Why a dedicated Skill

Slow fixes are often from **no triage**, not skill gaps—this fits “sort first, then edit.”

## Prompt skeleton

```text
Triage the current diagnostics list.
Group issues by:
1. blocking errors
2. repeated issues
3. lower-priority warnings

Then suggest the most efficient fixing order.
```
