[中文](risk-handoff.md) · English

# Risk handoff

Before handing off changes, submitting for QA, or merging — surface risks, write a clear summary, leave migration notes.

## When to use

- Handing off changes for someone else to continue or review
- Pre-QA risk assessment
- Merge window final check
- Pre-vacation handoff of current progress

## Prerequisites

```bash
npx cursorx-cli install risk-scan --scope global
npx cursorx-cli install diff-summary --scope global
npx cursorx-cli install migration-note --scope global
```

## Steps

### 1. `/risk-scan` — surface risks

Type `/risk-scan`.

It scans staged or working-tree changes by severity:

- **High**: logic regressions, data inconsistencies
- **Medium**: config desync, insufficient boundaries
- **Validation focus**: paths to verify first

Add specific concerns: `/risk-scan focus cache invalidation and permissions`.

Note high-risk items for the handoff.

### 2. `/diff-summary` — write a change summary

Type `/diff-summary`.

Specify the purpose: `/diff-summary write a handoff note for the team`.

It outputs:

- What changed
- Why it matters
- Incomplete or unverified items

This summary can go directly to the next person or into a collaboration tool.

### 3. `/migration-note` — leave migration guidance (if needed)

If step 1's risk scan shows path, config, or entry point changes, run `/migration-note` for migration guidance.

Pure internal refactors usually don't need this.

### 4. Assemble handoff materials

Combine the outputs:

1. Risk points (from `/risk-scan`)
2. Change summary (from `/diff-summary`)
3. Migration guidance (from `/migration-note`, if applicable)

Send to the next person, post in an issue, or include in the PR description.

## Expected outcome

- Risks are explicitly listed — no guessing for the recipient
- Change summary is readable — no need to re-read all the code
- Migration-impacting changes have clear action steps

## Pairs well with

- [Context handoff](../tips/context-handoff.en.md) — tips for handing off AI context
- [PR preparation](./pr-preparation.en.md) — if the handoff vehicle is a PR

## Variations

| Scenario | Adjustment |
|----------|------------|
| Routine sync only | `/diff-summary` alone is enough |
| Handing off an entire project | Add the doc update workflow to ensure README is current |
| QA submission | Focus on `/risk-scan`'s Validation focus section |
