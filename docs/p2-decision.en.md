[简体中文](./p2-decision.md)

# P2 — Current Decision

Formal `CursorX` stance on P2 so we do not re-litigate “should we change shape now” every week.

## Decision

Enter P2 by **starting assessment**; **do not** switch the main product shape yet; **do not** split repos yet; **do not** treat Plugin / Marketplace as the current main line.

## Default route

- Stay monorepo  
- Strengthen release governance  
- Keep watching whether the CLI develops an independent product cadence  

Aligned with [`p2-options.md`](./p2-options.en.md): **route A** is the main line, **route B** is the alternate evolution path, **route C** is exploratory.

## When to reopen the decision

Signals that may justify **moving toward route B** (any one):

1. `cursorx-cli` releases much faster than content-repo churn  
2. Package changelog, release notes, and issues are clearly separate  
3. Users clearly care only about the installer, not the content repo  
4. Cost of syncing README, indexes, and versions in one repo is clearly up  

Signals before **seriously exploring route C**:

1. Demand for one-click install and in-editor discovery rises clearly  
2. The CLI becomes the bottleneck for install UX, not the asset  
3. Plugin / Marketplace capabilities are well enough understood  

## Not doing now

- Splitting repos to “graduate”  
- Treating shipped CLI as automatically an independent product  
- Making Plugin / Marketplace the main narrative without evidence  

## Next steps (maintainers)

Favor evidence over volume:

1. Observe release cadence for a while  
2. Keep logging user-visible changes vs versions  
3. Use [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.en.md) for route B launch criteria and minimal experiment  
4. Accumulate experiment notes in [`p2-observation-template.md`](./p2-observation-template.en.md)  
5. After 4–8 weeks or three `cursorx-cli`-related changes, run a formal review  
6. When triggers are clear, make an explicit structural decision  
