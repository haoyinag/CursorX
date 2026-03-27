[中文](problems-first-triage.md) · English

# Problems first, then fixes

## When

- Lint, typecheck, or diagnostics pile up
- You are unsure what to fix first
- You want to avoid losing the big picture while editing

## Steps

1. Open Problems and skim error vs warning spread.
2. Bucket into: blocking build/run, repeated rule noise, deferrable hints.
3. Clear blocking issues first, then batch the repeats.
4. After each pass, refresh Problems and confirm the main issues shrink.

## What you get

- Fewer “lots of edits, main error still there” outcomes
- Fits big-change wrap-up and post-upgrade cleanup
- Same pattern for lint, types, link checks

## Pairs well with

- `open-problems-panel`
- `save-all-files`
