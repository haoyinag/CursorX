[中文](release-hygiene.md) · English

# Release hygiene before you ship

## When

- Shipping npm packages, command sets, or reusable drops
- You worry code moved but docs and upgrade path did not
- You want releases repeatable, not last-minute patching

## Steps

1. Confirm there is user-visible change worth a release.
2. Align version, README, CHANGELOG, and install examples.
3. Decide if you need release notes, changelog entries, or an upgrade checklist.
4. Run a minimal install/verify pass so others can follow the docs.

## What you get

- Fewer “package shipped, docs still old” surprises
- Fits a steady release cadence
- The repo reads better for newcomers

## Pairs well with

- `/release-notes`
- `/changelog-entry`
- `/upgrade-checklist`
