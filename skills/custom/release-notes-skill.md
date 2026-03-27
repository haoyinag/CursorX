# Release Notes Skill

- 名称：`Release Notes Skill`
- 来源：`CursorX custom draft`
- 适用场景：准备发版、发 npm 包、同步更新公告或版本摘要时
- 核心能力：
  - 从提交、diff 和文档中提炼用户可感知变化
  - 区分 highlights、improvements 和 notes
  - 弱化纯内部整理，突出用户价值
- 使用方式：
  1. 先读取本次发布范围内的提交和 diff
  2. 再读取相关 README 或命令目录说明
  3. 最后按外部用户视角整理 release notes
- 已知限制：
  - 不适合替代完整 changelog
  - 如果版本范围不清楚，输出可能混入不相关改动
- 推荐阶段：发布前、同步公告前、补 release page 时

## 为什么值得保留为自定义 Skill

很多发布动作缺的不是技术实现，而是“怎么把变化讲明白”。把这件事沉淀成 Skill，能提高持续发版质量。

## 提示词骨架

```text
Generate release notes for the current release scope.
Focus on:
1. user-visible highlights
2. practical improvements
3. upgrade or compatibility notes

Do not overstate internal refactors as user value.
```
