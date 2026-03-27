[中文](staged-review-skill.md) · English

# Staged Review Skill

- **Name**: `Staged Review Skill`
- **Source**: `CursorX custom draft`
- **Scenario**: Before commit, a high-signal pass on the **staged diff** only
- **Capabilities**: Read staged file list and diff; spot regressions, logic gaps, missing tests; findings-first output; if clean, call out residual risks and verification ideas
- **Usage**:
  1. `git diff --cached --name-only`
  2. `git diff --cached`
  3. Review only staged scope
- **Limits**: Not for full-branch review; incomplete staging makes conclusions shaky
- **When**: Pre-commit, pre-test handoff, end of a small refactor step

## Versus generic code review

Small scope, fast feedback—fits “last look before commit” in a tight loop.

## Prompt skeleton

```text
Review only the currently staged diff.
Prioritize:
1. bugs
2. regressions
3. missing tests
4. doc/config mismatches

Return findings first. If there are no findings, say so explicitly and list residual risks.
```
