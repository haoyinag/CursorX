[English](doc-update.en.md) · 中文

# 文档更新

代码改完后顺手把文档刷新，避免「代码动了，文档还是旧的」。

## 什么时候用

- 改了安装方式、命令入口、配置路径、目录结构
- README 或文档里的步骤可能已过时
- 要发版前确认文档跟上

## 前置准备

```bash
npx cursorx-cli install readme-refresh --scope global
npx cursorx-cli install migration-note --scope global
npx cursorx-cli install pr-summary --scope global
```

## 步骤

### 1. `/readme-refresh` — 刷新文档

输入 `/readme-refresh`。

可以指定目标：`/readme-refresh packages/cursorx-cli/README.md`。

它会对比当前代码和文档，更新过时的：

- 安装方式和示例
- 步骤和路径
- 目录说明

如果不确定刷哪个文档，不带参数跑，它会从与当前改动最相关的文档开始。

### 2. `/migration-note` — 判断是否需要迁移说明

输入 `/migration-note`。

它会看当前 diff，判断是否有**用户可感知的变化**需要迁移说明：

- 有迁移影响：输出谁受影响、什么变了、用户要做什么
- 纯内部重构：会明确告诉你不需要迁移说明

不是每次都需要迁移说明，让命令帮你判断。

### 3. 提交文档改动

把文档更新暂存、提交。

### 4. `/pr-summary`（可选）— 如果要发 PR

文档更新通常和代码改动一起进 PR。用 `/pr-summary` 把文档变更也纳入摘要。

## 预期结果

- 文档与代码一致
- 有迁移影响的变化已有说明
- 减少「发了版用户照着旧文档跑不通」

## 可搭配

- [发布前过一遍清单](../tips/release-hygiene.md) — 发版前系统性检查文档
- [发布周期](./release-cycle.md) — 文档更新常和发版一起做
- [`markdown-release.settings.jsonc`](../configs/markdown-release.settings.jsonc) — 高频编辑 Markdown 的编辑器配置

## 变体

| 场景 | 调整 |
|------|------|
| 只改了内部实现 | `/migration-note` 会告诉你不需要迁移说明，流程到步骤 1 就够 |
| 多语言文档 | 刷完中文 README 后对英文版也跑一次 `/readme-refresh` |
| 大版本升级 | 加上 `/upgrade-checklist` 生成用户升级清单 |
