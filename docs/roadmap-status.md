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

状态：完成

已完成内容：

- `slash-commands/` 已形成多条工作流线
- `cursorx-cli@0.3.0` 已真实发布
- 发布/变更管理相关命令开始补齐
- 内容层从骨架推进到多批可复用样板
- `commands/` 已扩充到更可依赖的参考层，覆盖导航、布局、终端、文档和问题修复入口

收口判断：

- `slash-commands/` 已覆盖从开发、review、文档到发布的一条完整核心工作流
- `commands/` 已形成可复用的核心参考层
- `skills/`、`tips/`、`configs/` 都已从样板推进到可持续浏览的内容层
- `CHANGELOG`、`release notes`、`upgrade guidance` 与发布流程已开始成体系
- 继续新增内容的门槛已经明显提高，不再适合为了数量继续扩充

### P1 收口标准

当下面条件基本满足时，可认为 `P1` 接近完成：

1. `slash-commands/` 已覆盖从开发、review、文档到发布的一条完整核心工作流
2. `commands/` 已拥有一组足够稳定、跨项目可复用的核心参考命令
3. `skills/`、`tips/`、`configs/` 各自都不再只是样板，而是至少有数个高频可用条目
4. `CHANGELOG`、`release notes`、`upgrade guidance` 已形成可持续复用的流程
5. 新增内容开始明显变少，继续扩充需要更高门槛，而不是为了数量继续堆积

### P2

状态：未开始

待未来评估：

- 是否进入更明确的 release 节奏管理
- 是否拆出更独立的产品仓或 changelog 体系
- 是否进入 Cursor Plugin / Marketplace 方向

## 当前建议

当前更适合从“继续补内容”切换到“评估是否进入 P2”。

在真正进入 `P2` 之前，优先做门槛检查，而不是立即切换产品形态。

## 相关文档

- [`../README.md`](../README.md)
- [`./content-map.md`](./content-map.md)
- [`./repo-strategy.md`](./repo-strategy.md)
- [`./p2-readiness.md`](./p2-readiness.md)
- [`../slash-commands/README.md`](../slash-commands/README.md)
- [`../CHANGELOG.md`](../CHANGELOG.md)
