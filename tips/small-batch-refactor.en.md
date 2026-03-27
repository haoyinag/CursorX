[中文](small-batch-refactor.md) · English

# Small-batch refactor

## When

- You are changing working legacy code
- You want AI help but fear one huge diff is hard to verify
- You care about both quality and reviewable commits

## Steps

1. Pick one minimal goal—extract a function, rename, dedupe—one at a time.
2. After each step, minimal verification: related tests, key path click-through, or at least a diff pass.
3. Split large refactors into multiple explainable commits, not one blob.
4. Optionally run staged review or test planning after each step.

## What you get

- Easier to pinpoint which step broke something
- Better fit for code review
- Less “one giant AI refactor” risk

## Pairs well with

- `/staged-review`
- `/test-plan`
- `commands/productivity/code-refactor-assistant.json`
