[English](./roadmap-status.en.md)

# 路线图状态

阶段性对齐 `CursorX` 的执行进度，避免迭代时偏离核心语义。

## 核心自检（每条新内容都过一遍）

1. **是否符合仓库核心语义**  
   - 仍以 `slash-commands/` 为主产品层  
   - 服务于 Cursor 工作流，而非泛资料堆  
2. **是否利他**  
   - 可跨项目复用；避免写死私有上下文；对首次进入仓库的人也有价值  
3. **是否实用**  
   - 减少重复动作；场景清晰；值得被安装、摘取或复用  

## 阶段状态

### P0

**状态**：完成  

**已完成**：单仓结构与主产品层/内容层边界；`slash-commands/` 索引、目录与安装语义；发布 `cursorx-cli`；`skills/`、`tips/`、`configs/` 第一批实体；仓库级内容地图与快速开始路径。

### P1

**状态**：完成  

**已完成**：`slash-commands/` 多条工作流线；`cursorx-cli@0.3.0` 真实发布；发布/变更类命令补齐；内容层多批可复用样板；`commands/` 扩充为更可依赖的参考层（导航、布局、终端、文档与排障等）。

**收口判断**：

- `slash-commands/` 覆盖从开发、review、文档到发布的一条完整核心工作流  
- `commands/` 已形成可复用的核心参考层  
- `skills/`、`tips/`、`configs/` 从样板推进为可持续浏览的内容层  
- `CHANGELOG`、release notes、upgrade guidance 与发布流程已开始成体系  
- 继续新增内容的门槛明显提高，不宜再为数量而扩  

### P1 收口标准（何时算「接近完成」）

1. `slash-commands/` 覆盖从开发、review、文档到发布的一条完整核心工作流  
2. `commands/` 拥有一组足够稳定、跨项目可复用的核心参考命令  
3. `skills/`、`tips/`、`configs/` 各自不止样板，至少有数个高频可用条目  
4. `CHANGELOG`、release notes、upgrade guidance 已形成可持续复用流程  
5. 新增内容明显减少；再扩需要更高门槛，而非堆量  

### P2

**状态**：评估中  

**当前评估范围**：更明确的 release 节奏；是否拆出更独立的产品仓或 changelog 体系；是否进入 Cursor Plugin / Marketplace。

## 当前建议

从「继续补内容」转向「评估是否进入 P2」。真正进入 P2 之前先做门槛检查（见 [`p2-readiness.md`](./p2-readiness.md)），不要立刻切换产品形态。

**收敛方向**：

- 暂停为数量横向扩 `commands/`、`skills/`、`tips/`、`configs/`  
- 优先把增量放在发布治理、变化归类与路线 B 观测  
- 证据足够后再判断是否启动路线 B  

## 相关文档

- [`../README.md`](../README.md)  
- [`./content-map.md`](./content-map.md)  
- [`./repo-strategy.md`](./repo-strategy.md)  
- [`./p2-readiness.md`](./p2-readiness.md)  
- [`./p2-options.md`](./p2-options.md)  
- [`./p2-decision.md`](./p2-decision.md)  
- [`./p2-route-b-thresholds.md`](./p2-route-b-thresholds.md)  
- [`./p2-observation-template.md`](./p2-observation-template.md)  
- [`../slash-commands/README.md`](../slash-commands/README.md)  
- [`../CHANGELOG.md`](../CHANGELOG.md)  
