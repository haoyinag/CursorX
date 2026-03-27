[简体中文](./p2-readiness.md)

# Pre–P2 Readiness Check

Use this to decide whether `CursorX` should move from the current P1 wrap-up into **P2 assessment** (not “keep adding content”).

## What “P2” means here

P2 means seriously evaluating:

- Clearer release cadence  
- A more independent product repo or changelog story  
- Cursor Plugin / Marketplace direction  

It is **product governance and distribution shape**, not shipping more first-wave assets.

## Bar before entering P2

Enter P2 when most of the following read “yes”:

1. **Main product layer is stable**  
   - `slash-commands/` covers an end-to-end core workflow  
   - Install, self-check, docs, and release semantics are stable  
2. **Content layer is shaped**  
   - `commands/` reads as a reference layer, not scattered samples  
   - `skills/`, `tips/`, `configs/` are worth browsing over time  
3. **Release cadence is diverging**  
   - `cursorx-cli` releases often outpace content changes  
   - Package-level changelog or release notes need their own maintenance  
4. **Audience intent is splitting**  
   - A visible cohort cares only about the installer, not the content repo  
   - “Installer” vs “content hub” needs separate messaging  
5. **Monorepo cost is rising**  
   - README, indexes, and releases require frequent cross-layer sync  
   - Monorepo comprehension or upkeep cost is clearly up  

## Current maintainer read

- P1 is nearly done; the core workflow exists  
- `cursorx-cli` has shipped for real; distribution works  
- Not enough evidence that an **immediate** independent product split is required  

So: **start assessing P2**; do not jump to a large product-shape change yet.

## If you move toward P2, suggested order

1. Observe for a while: npm vs repo churn; install vs content focus  
2. Then decide whether you need: dedicated `cursorx-cli` changelog / release page, a two-repo strategy, Plugin / Marketplace evaluation  
3. Until then, avoid large horizontal growth of content directories  

## Not recommended now

- Splitting repos just to “level up”  
- Making Plugin / Marketplace the main story without evidence  
- Mass-expanding content while also changing product shape  

## Related docs

- [`./roadmap-status.md`](./roadmap-status.en.md)  
- [`./repo-strategy.md`](./repo-strategy.en.md)  
- [`./release-process.md`](./release-process.en.md)  
- [`../packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
