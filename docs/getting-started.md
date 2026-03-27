# 快速开始

**语言 / Language：** [English](getting-started.en.md)

目标不是堆资料，而是沉淀一套围绕 Cursor、能反复复用的内容。

可以记成：**一个总仓 + 一个主产品**。

- 总仓：`CursorX`
- 主产品：`slash-commands/`
- 其余：`commands/`、`skills/`、`tips/`、`configs/`

## 建议浏览顺序

1. [`slash-commands/README.md`](../slash-commands/README.md)  
2. [`slash-commands/catalog.md`](../slash-commands/catalog.md)  
3. [`content-map.md`](./content-map.md)：接下来进哪一层  
4. [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
5. 试跑：`node packages/cursorx-cli/bin/cursorx.js list`  
6. 用 CLI、安装脚本或手动复制，装目标 slash command  
7. 装完：`cursorx doctor` 或 `cursorx verify <command-id> --scope ...`  
8. 按需看 [`commands/README.md`](../commands/README.md)、[`skills/README.md`](../skills/README.md)、[`tips/README.md`](../tips/README.md)、[`configs/README.md`](../configs/README.md)  

命名：npm `cursorx-cli`，命令 `cursorx`。

## 怎么选命令

先想 **要解决什么问题**，再翻目录。

常见出发点：

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

CLI 与统一入口的长期打算见 [`repo-strategy.md`](./repo-strategy.md)。

## 准备贡献

- [贡献指南](../CONTRIBUTING.md)  
- [命令开发规范](./command-development.md)  
