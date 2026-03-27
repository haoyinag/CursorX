# Changelog

**Language / 语言：** [中文](CHANGELOG.md)

Repository-level milestones. User-visible changes, not a full commit dump.

## 0.3.0 - 2026-03-27

### Added

- Release and change-management workflow commands: `/release-notes`, `/changelog-entry`, `/upgrade-checklist`
- [`docs/roadmap-status.md`](docs/roadmap-status.md): explicit `P0 / P1 / P2` states and checks
- Second batch in `tips/`, `configs/`, `skills/` around release hygiene, reuse, and release notes
- Reference commands in `commands/`: `open-problems-panel`, `toggle-terminal`, `open-markdown-preview`

### Changed

- `slash-commands/` covers a first full workflow from daily commits through release notes and upgrade checks
- Root navigation adds changelog and roadmap status

### Notes

- `cursorx-cli` ships with this command-data update so npm matches the repo

## 0.3.1 - 2026-03-27

### Added

- [`docs/release-process.md`](docs/release-process.md): repo and npm release flow
- [`docs/p2-readiness.md`](docs/p2-readiness.md): gate before the next phase
- [`packages/cursorx-cli/CHANGELOG.md`](packages/cursorx-cli/CHANGELOG.md)

### Changed

- `P1` marked complete
- Root navigation adds release process and `P2` readiness

## 0.3.2 - 2026-03-27

### Added

- [`docs/p2-options.md`](docs/p2-options.md): compares three `P2` paths
- [`docs/p2-decision.md`](docs/p2-decision.md): current decision record

### Changed

- `P2`: not started → under evaluation
- Root navigation adds `P2` evaluation entry points

## 0.2.0 - 2026-03-27

### Added

- `cursorx-cli@0.2.0`: `list`, `doctor`, `install`, `verify`
- First `slash-commands/` workflow batch: Git, staged review, test plan, PR summary, doc refresh, risk scan, migration note, handoff summary, release notes, changelog entry, upgrade checklist
- First substantive content in `skills/`, `tips/`, `configs/`
- [`docs/content-map.md`](docs/content-map.md)

### Changed

- Root README, getting started, per-layer READMEs: clearer layer map
- `commands/`: manual verification notes, “reference layer” called out
- `packages/cursorx-cli/`: npm metadata and release notes

### Docs

- Repository changelog starts here

## 0.1.0 - 2026-03-27

### Added

- First `cursorx-cli@0.1.0` release
- `slash-commands/` as the only first-class install entry
- First installable commands: `/git-push`, `/lint-fix`

### Notes

- Focus: validate installer, index layout, and command sources
