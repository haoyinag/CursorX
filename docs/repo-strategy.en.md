[简体中文](./repo-strategy.md)

# Repository Strategy

Why `CursorX` stays a single repo for now, and when a second repo becomes worth considering.

## Current strategy

- One umbrella repository  
- One main product layer  
- Several content directories  

Mapping:

- Main product: [`slash-commands/`](../slash-commands/README.md)  
- Future product extension point: [`packages/cursorx-cli/`](../packages/cursorx-cli/README.md)  
- Content: [`commands/`](../commands/README.md), `skills/`, `tips/`, `configs/`  

## Why we are not splitting yet

What is product-shaped today is slash commands and the in-repo installer, but not yet to the point where a **second** repository is mandatory. Splitting now costs: two README/doc surfaces, cross-repo sync for install docs and command indexes, higher user cognitive load.

## Recommended mental model

- **CursorX**: umbrella repo + content entry + incubator for command products  
- **`slash-commands/`**: the only primary install surface today; future CLI command source  

## When a second repo is more reasonable

Consider a split when **any** of these holds:

1. `cursorx-cli` is a real npm package needing its own version and changelog  
2. Installer release cadence clearly outpaces content-repo updates  
3. The installer needs its own issues, fixes, and release management  
4. Many users care only about “installing commands,” not other assets  
5. You want CursorX to remain a content site while the installer becomes its own product brand  

## Suggested evolution order

1. Stay monorepo; keep product vs content boundaries explicit  
2. Keep hardening `slash-commands/` as the sole primary install entry  
3. Have future CLI reuse `slash-commands/index.json` directly  
4. After the CLI has a genuinely independent release cadence, revisit splitting  
