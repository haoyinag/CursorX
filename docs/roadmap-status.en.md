[简体中文](./roadmap-status.md)

# Roadmap Status

Tracks where `CursorX` execution stands so ongoing work does not drift from core semantics.

## Core checks (run on every meaningful addition)

1. **Fits core repo meaning**  
   - `slash-commands/` remains the main product layer  
   - Serves Cursor workflows, not generic dumping  
2. **Useful to others**  
   - Reusable across projects; no baked-in private context; valuable to first-time visitors  
3. **Practical**  
   - Reduces repetition; clear scenario; worth installing, cherry-picking, or reusing  

## Phases

### P0

**Status**: Done  

**Delivered**: Monorepo structure and main vs content boundaries; `slash-commands/` index, layout, install semantics; shipped `cursorx-cli`; first real content in `skills/`, `tips/`, `configs/`; repo content map and quick-start paths.

### P1

**Status**: Done  

**Delivered**: Multiple slash-command workflows; real ship of `cursorx-cli@0.3.0`; release/change-management commands; multi-batch reusable patterns in content layers; `commands/` expanded into a more dependable reference layer (navigation, layout, terminal, docs, troubleshooting).

**Wrap criteria**:

- `slash-commands/` covers an end-to-end core workflow from dev through review, docs, and release  
- `commands/` is a reusable reference layer  
- `skills/`, `tips/`, `configs/` moved beyond samples to browsable content  
- `CHANGELOG`, release notes, and upgrade guidance tie into a repeatable release story  
- Bar for new content is materially higher; volume for its own sake is discouraged  

### P1 completion bar (when P1 is “mostly there”)

1. `slash-commands/` covers dev → review → docs → release as one coherent workflow  
2. `commands/` has a stable, cross-project core reference set  
3. Each of `skills/`, `tips/`, `configs/` has several high-frequency entries, not just scaffolding  
4. `CHANGELOG`, release notes, and upgrade guidance are a sustainable process  
5. New additions slow; further growth needs a higher bar, not more bulk  

### P2

**Status**: Under assessment  

**Scope**: Clearer release cadence; possible separate product repo or changelog system; Cursor Plugin / Marketplace direction.

## Current guidance

Shift from “keep adding content” to “assess whether to enter P2.” Before fully entering P2, run the readiness bar in [`p2-readiness.md`](./p2-readiness.en.md); do not flip product shape overnight.

**Converge on**:

- Pause horizontal growth of `commands/`, `skills/`, `tips/`, `configs/` for volume alone  
- Prioritize release governance, change classification, and route B observation  
- Revisit route B launch only with enough evidence  

## Related docs

- [`../README.md`](../README.md)  
- [`./content-map.md`](./content-map.md)  
- [`./repo-strategy.md`](./repo-strategy.en.md)  
- [`./p2-readiness.md`](./p2-readiness.en.md)  
- [`./p2-options.md`](./p2-options.en.md)  
- [`./p2-decision.md`](./p2-decision.en.md)  
- [`./p2-route-b-thresholds.md`](./p2-route-b-thresholds.en.md)  
- [`./p2-observation-template.md`](./p2-observation-template.en.md)  
- [`../slash-commands/README.md`](../slash-commands/README.md)  
- [`../CHANGELOG.md`](../CHANGELOG.md)  
