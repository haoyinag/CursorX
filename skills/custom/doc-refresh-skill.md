# Doc Refresh Skill

- 名称：`Doc Refresh Skill`
- 来源：`CursorX custom draft`
- 适用场景：代码或目录结构变化后，需要同步刷新 README、快速开始或说明文档
- 核心能力：
  - 对照代码、索引和文档找出过时信息
  - 优先做增量更新，而不是整篇重写
  - 补齐安装方式、验证步骤、适用边界
  - 保持现有文档语气和结构
- 使用方式：
  1. 先读目标文档
  2. 再读相关代码、索引或 diff
  3. 最后只更新已经被事实验证的部分
- 已知限制：
  - 不适合凭空产出复杂方案文档
  - 如果代码本身还在变化，文档可能需要再次同步
- 推荐阶段：功能收尾、重构完成后、发布前文档检查

## 为什么值得保留为自定义 Skill

很多仓库不是缺文档，而是缺“文档同步动作”。把它沉淀为 Skill 后，更容易在每轮改动后固定触发。

## 提示词骨架

```text
Refresh the target README or doc based on the current repository state.
Read the doc, then the relevant code or diff.
Prefer minimal accurate edits.
Do not invent commands, files, or behaviors that do not exist.
```
