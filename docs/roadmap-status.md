# 路线图状态

这份文档用于阶段性对齐 `CursorX` 的执行进度，避免仓库继续迭代时偏离核心语义。

## 核心判断标准

每轮新增内容都优先用这 3 条自检：

1. 是否符合仓库核心语义
   - 是否仍以 `slash-commands/` 为主产品层
   - 是否服务于 Cursor 工作流，而不是偏离为泛资料堆
2. 是否具备利他属性
   - 是否可以跨项目复用
   - 是否避免写死私有上下文
   - 是否对第一次进入仓库的人也有明确价值
3. 是否足够实用
   - 是否能减少重复动作
   - 是否有清晰使用场景
   - 是否值得被用户真的装上、摘取或复用

## 阶段状态

### P0

状态：完成

已完成内容：

- 明确单仓结构与主产品层、内容层边界
- 建立 `slash-commands/` 索引、目录和安装语义
- 发布 `cursorx-cli`
- 给 `skills/`、`tips/`、`configs/` 补第一批实体内容
- 补仓库级内容地图与快速开始路径

### P1

状态：进行中

已完成内容：

- `slash-commands/` 已形成多条工作流线
- `cursorx-cli@0.2.0` 已真实发布
- 发布/变更管理相关命令开始补齐
- 内容层从骨架推进到第一批样板

剩余重点：

- 继续把 `commands/` 做厚为更可信的参考层
- 给 `skills/`、`tips/`、`configs/` 补第二批更高频内容
- 把 changelog / release notes / upgrade guidance 固化成更稳定的发布流程
- 补更多“用户会真实装上或复用”的高价值工作流命令

### P2

状态：未开始

待未来评估：

- 是否进入更明确的 release 节奏管理
- 是否拆出更独立的产品仓或 changelog 体系
- 是否进入 Cursor Plugin / Marketplace 方向

## 当前建议

在进入 `P2` 之前，优先继续完成 `P1` 的剩余项，不要过早扩展到新的产品形态。

## 相关文档

- [`../README.md`](../README.md)
- [`./content-map.md`](./content-map.md)
- [`./repo-strategy.md`](./repo-strategy.md)
- [`../slash-commands/README.md`](../slash-commands/README.md)
- [`../CHANGELOG.md`](../CHANGELOG.md)
