[English](README.en.md) · 中文

# 工作流

`workflows/` 是 CursorX 的**场景入口**：先找你要做什么，再看该组合哪些命令、技巧和配置。

和其他目录的关系：`slash-commands/` 是单个可安装命令，`commands/` 是编辑器动作素材，`tips/` 是单点习惯，`configs/` 是配置片段。工作流把它们串成**完整流程**。

## 目录

```text
workflows/
├── daily-commit.md
├── feature-completion.md
├── pr-preparation.md
├── doc-update.md
├── risk-handoff.md
├── release-cycle.md
├── onboarding-new-project.md
├── code-review-as-reviewer.md
├── debug-and-fix.md
├── catalog.md
├── index.json
└── README.md
```

## 按场景找

### 日常开发

- [每日提交](./daily-commit.md) — 改完代码到推送的最短路径
- [功能收尾](./feature-completion.md) — 从 lint 到测试到提交的完整闭环
- [排查与修复](./debug-and-fix.md) — 从发现问题到验证修复

### 协作与交付

- [PR 准备](./pr-preparation.md) — 提 PR 前把审查、测试、摘要一次做完
- [风险交接](./risk-handoff.md) — 扫风险、写摘要、留迁移说明
- [代码审查（作为 reviewer）](./code-review-as-reviewer.md) — 用 AI 辅助审别人的 PR

### 文档与发布

- [文档更新](./doc-update.md) — 改完代码顺手把文档刷新
- [发布周期](./release-cycle.md) — changelog、release notes、升级清单一条线

### 上手

- [新项目接入](./onboarding-new-project.md) — 在新仓库装好 CursorX 并跑通第一条工作流

## 怎么用

1. 按场景找到工作流
2. 看「前置准备」装好需要的命令
3. 按步骤走一遍
4. 根据「变体」调整适合自己的节奏

## 贡献

欢迎补你认为值得固化的工作流；写清**场景、步骤、用到的命令、预期结果**。

## 许可证

MIT（见仓库根目录 [LICENSE](../LICENSE)）。
