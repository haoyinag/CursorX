# 工作流目录

语言：[English](catalog.en.md)

按场景组织，每条标明**触发时机、用到的命令、适合谁**。

## 日常开发

### 每日提交

- 文件：[`workflows/daily-commit.md`](./daily-commit.md)
- 触发：改完代码要推送
- 命令：`/staged-review` → `/git-push`
- 适合：所有人；每天都会用
- 难度：低

### 功能收尾

- 文件：[`workflows/feature-completion.md`](./feature-completion.md)
- 触发：一个功能写完，准备提交
- 命令：`/lint-fix` → `/test-plan` → `/staged-review` → `/git-push`
- 适合：功能开发完成时
- 难度：低

### 排查与修复

- 文件：[`workflows/debug-and-fix.md`](./debug-and-fix.md)
- 触发：发现 bug 或 Problems 面板有错误
- 命令：`/staged-review` → `/test-plan` → `/git-push`
- 适合：修 bug、处理 lint/类型错误
- 难度：中

## 协作与交付

### PR 准备

- 文件：[`workflows/pr-preparation.md`](./pr-preparation.md)
- 触发：功能做完，准备提 PR
- 命令：`/staged-review` → `/test-plan` → `/pr-summary`
- 适合：提 PR 前的最后一步
- 难度：低

### 风险交接

- 文件：[`workflows/risk-handoff.md`](./risk-handoff.md)
- 触发：要把改动交给别人、提测、或合并前
- 命令：`/risk-scan` → `/diff-summary` → `/migration-note`
- 适合：跨人协作、提测、合并窗口
- 难度：中

### 代码审查（作为 reviewer）

- 文件：[`workflows/code-review-as-reviewer.md`](./code-review-as-reviewer.md)
- 触发：收到别人的 PR 需要 review
- 命令：`/staged-review`、`/risk-scan`
- 适合：code review 场景
- 难度：中

## 文档与发布

### 文档更新

- 文件：[`workflows/doc-update.md`](./doc-update.md)
- 触发：代码改了，文档要跟上
- 命令：`/readme-refresh` → `/migration-note` → `/pr-summary`
- 适合：改完代码顺手刷文档
- 难度：低

### 发布周期

- 文件：[`workflows/release-cycle.md`](./release-cycle.md)
- 触发：要发版本
- 命令：`/changelog-entry` → `/release-notes` → `/upgrade-checklist`
- 适合：npm 发包、命令集发布
- 难度：中

## 上手

### 新项目接入

- 文件：[`workflows/onboarding-new-project.md`](./onboarding-new-project.md)
- 触发：新仓库想用 CursorX
- 命令：`cursorx install`、`cursorx verify`
- 适合：第一次用 CursorX
- 难度：低

## 推荐入门顺序

1. [新项目接入](./onboarding-new-project.md) — 先装好
2. [每日提交](./daily-commit.md) — 最高频，先跑通
3. [功能收尾](./feature-completion.md) — 熟悉完整闭环
4. [PR 准备](./pr-preparation.md) — 协作必备
5. 按需：[发布周期](./release-cycle.md)、[风险交接](./risk-handoff.md)
