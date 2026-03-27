# 快速开始

**语言 / Language：** [English](getting-started.en.md)

第一次来这个仓库，先想「我要做什么」，再找对应的工作流。

## 建议浏览顺序

1. [`workflows/README.md`](../workflows/README.md) — 按场景找工作流  
2. [`workflows/onboarding-new-project.md`](../workflows/onboarding-new-project.md) — 如果是第一次装  
3. [`slash-commands/catalog.md`](../slash-commands/catalog.md) — 浏览所有可安装命令  
4. [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md) — CLI 使用说明  
5. 试跑：`npx cursorx-cli list`  
6. 按工作流要求装命令，装完验证  
7. 按需看 [`commands/README.md`](../commands/README.md)、[`skills/README.md`](../skills/README.md)、[`tips/README.md`](../tips/README.md)、[`configs/README.md`](../configs/README.md)  
8. 需要看目录分布时，再读 [`content-map.md`](./content-map.md)  

命名：npm `cursorx-cli`，命令 `cursorx`。

## 怎么选命令

先想 **要解决什么问题**，再找工作流，工作流会告诉你该装哪些命令。

常见场景对应的工作流：

| 场景 | 工作流 |
|------|--------|
| 写完代码要推送 | [每日提交](../workflows/daily-commit.md) |
| 功能做完要提交 | [功能收尾](../workflows/feature-completion.md) |
| 要提 PR | [PR 准备](../workflows/pr-preparation.md) |
| 要发版 | [发布周期](../workflows/release-cycle.md) |
| 要修 bug | [排查与修复](../workflows/debug-and-fix.md) |

如果只想装单条命令：

- 全局只给自己装  
- 给当前仓库、随项目带走  
- 把编辑器动作收成可搜索的快捷方式  

## 最小体验（slash）

先试两条：

- [`slash-commands/global/git-push.md`](../slash-commands/global/git-push.md)  
- [`slash-commands/global/lint-fix.md`](../slash-commands/global/lint-fix.md)  

分别对应：提交/推送流程、当前改动的 lint 修复。

第二批工作流可继续看：

- [`staged-review`](../slash-commands/global/staged-review.md)  
- [`test-plan`](../slash-commands/global/test-plan.md)  
- [`pr-summary`](../slash-commands/global/pr-summary.md)  
- [`risk-scan`](../slash-commands/global/risk-scan.md)  
- [`diff-summary`](../slash-commands/global/diff-summary.md)  
- [`migration-note`](../slash-commands/global/migration-note.md)  
- [`release-notes`](../slash-commands/global/release-notes.md)  
- [`changelog-entry`](../slash-commands/global/changelog-entry.md)  
- [`upgrade-checklist`](../slash-commands/global/upgrade-checklist.md)  

## 安装方式

两种形态：

- **`slash-commands/`**：`global` / `project` 安装清晰  
- **`commands/`**：editor command 素材为主  

建议：

1. 命令从 `slash-commands/` 挑  
2. 优先 `npx cursorx-cli ...`  
3. 常用再 `npm i -g cursorx-cli`  
4. 定 `global` 还是 `project`  
5. 依赖脚本则同步 `.cursor/scripts/`  
6. 装完 `cursorx verify <command-id> --scope ...`  
7. 在 Cursor 里输入 `/命令名`  

不要在业务项目里 `npm install cursorx-cli`（安装器，非业务依赖）。

如果你关心仓库结构、发布节奏或后续策略，再看 [`repo-strategy.md`](./repo-strategy.md)。

## 准备贡献

- [贡献指南](../CONTRIBUTING.md)  
- [命令开发规范](./command-development.md)  
