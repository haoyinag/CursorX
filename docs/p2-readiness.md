[English](./p2-readiness.en.md)

# 进入 P2 前的检查

用于判断 `CursorX` 是否应从当前 P1 收口状态进入 **P2 评估**（不是「继续堆内容」）。

## P2 在这里指什么

此处的 P2 指认真评估：

- 是否进入更明确的 release 节奏  
- 是否拆出更独立的产品仓或 changelog 体系  
- 是否走向 Cursor Plugin / Marketplace  

即偏 **产品治理与分发形态**，而非继续补第一批资产。

## 进入 P2 前建议满足的门槛

下面问题多数为「是」时，再建议进入 P2：

1. **主产品层是否稳定**  
   - `slash-commands/` 是否覆盖一条完整核心工作流  
   - 安装、自检、文档与发布语义是否稳定  
2. **内容层是否成型**  
   - `commands/` 是否已是参考层而非零散样板  
   - `skills/`、`tips/`、`configs/` 是否值得持续浏览  
3. **发布节奏是否开始独立**  
   - `cursorx-cli` 发版是否经常独立于内容层  
   - 是否已需要单独维护包级 changelog 或 release notes  
4. **用户心智是否分化**  
   - 是否有一批用户只关心安装器、不关心内容仓  
   - 是否需要把「安装工具」与「内容总仓」分开说  
5. **单仓是否开始成为负担**  
   - README、索引、发布是否频繁跨层同步  
   - 单仓的理解或维护成本是否明显上升  

## 当前判断（维护者共识）

- P1 已接近完成，核心工作流已成型  
- `cursorx-cli` 已多次真实发布，分发链路成立  
- 尚无足够证据表明 **必须立刻** 拆成独立产品形态  

因此：**可以开始评估 P2**，不建议立刻大规模切换形态。

## 若准备进入 P2，建议顺序

1. 先观察一段时间：npm 与仓库内容更新频率、用户更关注安装还是内容  
2. 再决定是否需要：单独维护 `cursorx-cli` 的 changelog / release page、明确双仓策略、评估 Plugin / Marketplace  
3. 在做上述动作前，尽量不要再大规模横向扩内容层目录  

## 现阶段不建议

- 为「进入下一阶段」而强行拆仓  
- 证据不足就过早把 Plugin / Marketplace 当主线  
- 一边大规模扩内容、一边同时改产品形态  

## 相关文档

- [`./roadmap-status.md`](./roadmap-status.md)  
- [`./repo-strategy.md`](./repo-strategy.md)  
- [`./release-process.md`](./release-process.md)  
- [`../packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
