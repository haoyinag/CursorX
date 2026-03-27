[English](risk-handoff.en.md) · 中文

# 风险交接

要把改动交给别人、提测、或合并前，把风险梳理清楚、摘要写好、迁移说明留下。

## 什么时候用

- 改动要交给别人继续或 review
- 提测前想理清风险
- 合并窗口前最后确认
- 请假前交接当前进度

## 前置准备

```bash
npx cursorx-cli install risk-scan --scope global
npx cursorx-cli install diff-summary --scope global
npx cursorx-cli install migration-note --scope global
```

## 步骤

### 1. `/risk-scan` — 扫风险

输入 `/risk-scan`。

它会基于 staged 或工作区改动，按严重度列出：

- **High**：逻辑回归、数据不一致
- **Medium**：配置不同步、边界不足
- **Validation focus**：建议优先验证的路径

有特定担心的点可以追加：`/risk-scan focus 缓存失效和权限`。

记下高风险项，后面交接时重点说明。

### 2. `/diff-summary` — 写变更摘要

输入 `/diff-summary`。

可以指定用途：`/diff-summary write a handoff note for the team`。

它会输出：

- 改了什么
- 为何值得关注
- 未完成或待验证项

这段摘要可以直接发给接手人或贴进协作工具。

### 3. `/migration-note` — 留迁移说明（按需）

如果步骤 1 的风险扫描显示有路径、配置或入口变化，跑 `/migration-note` 生成迁移说明。

纯内部重构通常不需要。

### 4. 整理交接材料

把以上输出汇总：

1. 风险点（来自 `/risk-scan`）
2. 变更摘要（来自 `/diff-summary`）
3. 迁移说明（来自 `/migration-note`，如有）

发给接手人、贴进 issue、或留在 PR 描述里。

## 预期结果

- 风险已显式列出，不用接手人自己猜
- 变更摘要可读，不需要接手人重读全部代码
- 有迁移影响的部分有明确操作步骤

## 可搭配

- [长对话该收尾就收尾](../tips/context-handoff.md) — 交接 AI 上下文的技巧
- [PR 准备](./pr-preparation.md) — 如果交接载体是 PR

## 变体

| 场景 | 调整 |
|------|------|
| 只是日常同步 | `/diff-summary` 一步就够 |
| 交接整个项目 | 加上文档更新工作流，确保 README 最新 |
| 提测 | 重点用 `/risk-scan` 的 Validation focus |
