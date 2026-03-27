[中文](save-before-verify.md) · English

# Save before you verify

## When

- Running lint, tests, build, or pre-release checks
- Unsaved buffers make results flaky
- You want a fixed “finish editing before verify” habit

## Steps

1. Save changed files before running checks.
2. Then run lint, typecheck, tests, or packaging checks.
3. If results look wrong, confirm disk matches the editor.
4. Repeat before commit, release, or task switches.

## What you get

- Fewer “I changed it but the tool disagrees” moments
- Same idea for docs, config, and command files
- Pairs with staged review and release hygiene

## Pairs well with

- `save-all-files`
- `/staged-review`
- `/upgrade-checklist`
