# Diagnostics Triage Skill

- 名称：`Diagnostics Triage Skill`
- 来源：`CursorX custom draft`
- 适用场景：lint、typecheck 或 Problems 面板里出现大量问题，需要先分层再处理
- 核心能力：
  - 先按严重程度和聚类方式整理问题
  - 找出阻断问题和高频重复问题
  - 输出更适合执行的修复顺序
- 使用方式：
  1. 先读取 Problems 或报错列表
  2. 再按 error / warning / repetitive issue 做归类
  3. 最后生成优先级顺序与建议修复路径
- 已知限制：
  - 不替代真正的 lint 或 typecheck 运行
  - 如果输入的问题列表不完整，优先级会失真
- 推荐阶段：大改动收尾、升级后集中修错、批量清理问题时

## 为什么值得保留为自定义 Skill

很多修错效率低，不是因为不会修，而是因为没有先做问题分层。这个 Skill 更适合“先排序，再动手”的场景。

## 提示词骨架

```text
Triage the current diagnostics list.
Group issues by:
1. blocking errors
2. repeated issues
3. lower-priority warnings

Then suggest the most efficient fixing order.
```
