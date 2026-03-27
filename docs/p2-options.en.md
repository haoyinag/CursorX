[简体中文](./p2-options.md)

# P2 Route Options

Lay out plausible paths in P2 so direction changes are not intuition-only.

## Premises (what we know)

- `slash-commands/` is the main product layer  
- `cursorx-cli` has shipped on npm with real iterations  
- Content layers are worth browsing over time  
- Not enough evidence that an **immediate** product-shape switch is mandatory  

## Route A: Stay monorepo; harden release governance

**Fits when**: npm and content stay tightly coupled; users think “CursorX repo” first; pain is cadence and versioning, not repo boundaries.

**Moves**: Keep one repo; strengthen `CHANGELOG`, release process, version sync; `cursorx-cli` keeps consuming `slash-commands/index.json` directly.

**Upside**: Lowest maintenance and comprehension cost; no new cross-repo sync.

**Risk**: If CLI releases accelerate, the monorepo feels heavy; package vs repo changes can still block each other.

## Route B: Gradually clarify `cursorx-cli` as its own product boundary

**Fits when**: npm churn clearly outpaces content; a cohort cares only about install/distribution; package changelog, release notes, and issue handling need separation.

**Moves**: Do not split repos yet; finish package governance; strengthen independent versioning narrative for `cursorx-cli`; after thresholds, reassess a second repository.

**Upside**: Validates whether “independent product boundary” is real; safer than a sudden split; still tied to content.

**Risk**: Possible long “semi-independent” phase; need a sharper split between repo changelog and package changelog.

## Route C: Explore Plugin / Marketplace

**Fits when**: users prioritize one-click install and in-editor discovery; CLI is no longer the only viable channel; you want CursorX to graduate from a command bundle to an entry product.

**Moves**: Research Cursor Plugin / Marketplace limits; decide what belongs in a plugin vs the repo; explore without rushing to replace CLI or repo layout.

**Upside**: Potentially smoother install UX; closer to “product surface” thinking.

**Risk**: Thinnest evidence today; easy to distract; risks another big rewrite of an unstable command layer.

## Default path now

1. Take route A first  
2. Keep route B observation ready  
3. Treat route C as exploration only—not the main line  

To move route B from “alternate” to “executable,” read [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.en.md).

## Why not jump straight to B or C

- Package versioning exists, but “independent product pressure” is still weak  
- The main issue reads as governance tightening, not structural failure  
- Switching shape while content still iterates stacks complexity  
