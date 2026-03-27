[English](diagnostics-triage-skill.en.md) · 中文

# Diagnostics Triage Skill

- **名称**：`Diagnostics Triage Skill`
- **来源**：`CursorX custom draft`
- **场景**：lint、类型检查或 Problems 里问题很多，要先分层再修
- **能力**：按严重程度和聚类整理；找出阻断项与高频重复；给出更可执行的修复顺序
- **用法**：
  1. 读 Problems 或报错列表
  2. 按 error / warning / 重复问题归类
  3. 输出优先级与建议修复路径
- **限制**：不替代真实 lint/类型检查运行；输入列表不全则优先级会偏
- **阶段**：大改动收尾、升级后集中修错、批量清理

## 为什么单独成 Skill

修得慢常不是因为不会修，而是**没先排序**—适合「先分层再动手」。

## 提示词骨架

```text
Triage the current diagnostics list.
Group issues by:
1. blocking errors
2. repeated issues
3. lower-priority warnings

Then suggest the most efficient fixing order.
```
