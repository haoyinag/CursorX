[中文](repo-onboarding-skill.md) · English

# Repo Onboarding Skill

- **Name**: `Repo Onboarding Skill`
- **Source**: `CursorX curated pattern`
- **Scenario**: First time in an unfamiliar repo—structure, entry points, how to run, risk zones
- **Capabilities**: Map directories; find run entry points, scripts, doc entry points; separate main product from content; output a “read this first” path
- **Usage**:
  1. Read root README, `docs`, and main product notes
  2. Summarize structure, entry points, and high-touch files
  3. Produce an onboarding path a new teammate can follow
- **Limits**: Not a substitute for real domain context; stale docs cap output quality
- **When**: Onboarding, taking over a project, rediscovering structure after a freeze

## Why keep this entry

The usual gap is not “explain the code” but **where to start**—this pattern reuses well.

## Prompt skeleton

```text
Read the repository entry docs first, then summarize:
1. main product area
2. supporting content areas
3. how to run or use the project
4. recommended reading order
5. top risks or missing docs
```
