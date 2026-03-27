[English](release-notes-skill.en.md) · 中文

# Release Notes Skill

- **名称**：`Release Notes Skill`
- **来源**：`CursorX custom draft`
- **场景**：发版、发 npm、同步公告或版本摘要
- **能力**：从提交、diff、文档里提炼用户可感知变化；区分 highlights、improvements、notes；少吹内部整理，多写用户价值
- **用法**：
  1. 读本次发布范围内的提交与 diff
  2. 读相关 README 或命令目录说明
  3. 按外部读者视角整理 release notes
- **限制**：不能替代完整 changelog；范围不清时容易混入无关改动
- **阶段**：发布前、同步公告前、补 release 页时

## 为什么单独成 Skill

发布常卡的不是实现，而是**变化怎么说清楚**—沉淀成 Skill 有利于持续发版质量。

## 提示词骨架

```text
Generate release notes for the current release scope.
Focus on:
1. user-visible highlights
2. practical improvements
3. upgrade or compatibility notes

Do not overstate internal refactors as user value.
```
