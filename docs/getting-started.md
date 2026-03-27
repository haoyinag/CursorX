# 快速开始

这个仓库的目标不是提供一堆零散资料，而是逐步沉淀成一套围绕 Cursor 的可复用内容库。

如果你第一次进入仓库，建议把它理解为“一个总仓库 + 一个主产品”：

- 总仓库：`CursorX`
- 主产品：`slash-commands/`
- 补充内容：`commands/`、`skills/`、`tips/`、`configs/`

## 推荐浏览顺序

1. 阅读 [`slash-commands/README.md`](../slash-commands/README.md)
2. 浏览 [`slash-commands/catalog.md`](../slash-commands/catalog.md)
3. 阅读 [`content-map.md`](./content-map.md) 判断接下来该进入哪一层
4. 了解 CLI 原型：[`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)
5. 优先尝试 `node packages/cursorx-cli/bin/cursorx.js list`
6. 通过 CLI、安装脚本或手动复制安装目标 slash command
7. 安装后执行 `cursorx doctor` 或 `cursorx verify <command-id> --scope ...`
8. 再按需查看 [`commands/README.md`](../commands/README.md)、[`skills/README.md`](../skills/README.md)、[`tips/README.md`](../tips/README.md)、[`configs/README.md`](../configs/README.md)

当前命名策略：

- npm 包名：`cursorx-cli`
- 命令行入口：`cursorx`

## 如何挑选命令

不要先看“这个仓库有什么”，而是先看“你想解决什么问题”。

推荐从这些问题出发：

- 想把某个命令安装到全局，只给自己用
- 想把某个命令安装到当前仓库，随项目复用
- 想把某个编辑器动作包装成可搜索的快捷入口

## 推荐的最小体验路径

如果你只想快速感受这个仓库的价值，推荐先尝试这两个 slash commands：

- [`slash-commands/global/git-push.md`](../slash-commands/global/git-push.md)
- [`slash-commands/global/lint-fix.md`](../slash-commands/global/lint-fix.md)

这样可以分别覆盖：

- Git 提交与推送流程
- 当前改动的 lint 修复流程

如果你希望继续体验第二批工作流内容，可以再看：

- [`slash-commands/global/staged-review.md`](../slash-commands/global/staged-review.md)
- [`slash-commands/global/test-plan.md`](../slash-commands/global/test-plan.md)
- [`slash-commands/global/pr-summary.md`](../slash-commands/global/pr-summary.md)
- [`slash-commands/global/risk-scan.md`](../slash-commands/global/risk-scan.md)
- [`slash-commands/global/diff-summary.md`](../slash-commands/global/diff-summary.md)
- [`slash-commands/global/migration-note.md`](../slash-commands/global/migration-note.md)

## 关于安装方式

本仓库现在区分两种命令形态：

- `slash-commands/`：支持明确的 `global` / `project` 安装
- `commands/`：主要作为 editor commands 素材库维护

推荐你采用下面的做法：

1. 优先从 `slash-commands/` 里挑选命令
2. 优先使用 `npx cursorx-cli ...`
3. 如果会长期使用，再考虑 `npm i -g cursorx-cli`
4. 决定安装为 `global` 还是 `project`
5. 如果命令依赖脚本，再同步复制 `.cursor/scripts/`
6. 安装后执行 `cursorx verify <command-id> --scope ...`
7. 最后去 Cursor chat 里输入对应 `/命令名`

不推荐在业务项目里执行 `npm install cursorx-cli`，因为它是安装器而不是业务依赖。

如果你关心未来是否会有统一 CLI 安装入口，继续阅读：

- [`docs/repo-strategy.md`](./repo-strategy.md)

## 如果你准备贡献

请继续阅读：

- [项目贡献指南](../CONTRIBUTING.md)
- [命令开发规范](./command-development.md)
