[English](doc-refresh-skill.en.md) · 中文

# Doc Refresh Skill

- **名称**：`Doc Refresh Skill`
- **来源**：`CursorX custom draft`
- **场景**：代码或目录变了，要同步 README、快速开始或其它说明
- **能力**：对照代码、索引、文档找过时信息；优先增量改、少整篇重写；补安装方式、验证步骤、适用边界；保留原有语气和结构
- **用法**：
  1. 读目标文档
  2. 读相关代码、索引或 diff
  3. 只更新已被事实核对过的部分
- **限制**：不适合凭空写复杂方案；代码还在动时文档可能要再同步
- **阶段**：功能收尾、重构后、发布前文档检查

## 为什么单独成 Skill

很多仓不是没文档，而是**没同步动作**—固化后每轮改动更容易顺手修文档。

## 提示词骨架

```text
Refresh the target README or doc based on the current repository state.
Read the doc, then the relevant code or diff.
Prefer minimal accurate edits.
Do not invent commands, files, or behaviors that do not exist.
```
