[English](feature-completion.en.md) · 中文

# 功能收尾

一个功能写完后，从 lint 修复到测试思考到审查到提交的完整闭环。

## 什么时候用

- 一个功能或一组改动基本写完
- 要确保代码质量再提交
- 想把「写完 → 提交」之间的步骤固化成习惯

## 前置准备

```bash
npx cursorx-cli install lint-fix --scope global --with-scripts
npx cursorx-cli install test-plan --scope global
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install git-push --scope global
```

`lint-fix` 需要 `--with-scripts` 安装配套脚本。

## 步骤

### 1. `/lint-fix` — 先修格式和规范

在 Cursor 中输入 `/lint-fix`。

它只对当前 Git 改动的文件跑 ESLint / Stylelint 自动修复，不动整仓库。

修完确认没有新错误。如果有 typecheck 问题，按项目自己的方式跑一遍。

### 2. 暂存改动

把 lint 修复和功能代码一起暂存：`git add` 或 SCM 面板操作。

### 3. `/test-plan` — 想清楚该测什么

输入 `/test-plan`。

它会基于 staged 改动列出 smoke、regression、edge case 和手工验证路径。

**不用真跑测试**，目的是把测试思考前移：

- 看 smoke 和 regression 是否覆盖了核心路径
- 发现的 edge case 决定是否在本次修

### 4. `/staged-review` — 让 AI 审一遍

输入 `/staged-review`。

有额外关注点可以追加，比如 `/staged-review focus 权限和缓存`。

- `high` 级问题必须修
- `medium` 按判断决定
- review 结论可以留作提交参考

### 5. `/git-push` — 提交推送

确认没有遗留问题后，`/git-push feat(xxx): 提交信息`。

## 预期结果

- 格式问题已自动修复
- 测试思路已梳理（知道该测什么）
- 代码经过一轮风险审查
- 干净的提交已推送

## 可搭配

- [先看 Problems 再动手修](../tips/problems-first-triage.md) — lint-fix 后如果还有问题
- [先选中再问](../tips/selection-first-prompts.md) — review 发现问题后针对性提问
- [长对话该收尾就收尾](../tips/context-handoff.md) — 功能复杂时切上下文

## 变体

| 场景 | 调整 |
|------|------|
| 项目没有 ESLint | 跳过步骤 1，从暂存开始 |
| 要提 PR 而不是直接 push | 步骤 5 换成 [PR 准备](./pr-preparation.md) 工作流 |
| 多人协作同一分支 | 步骤 5 前先 `git pull --rebase`（`/git-push` 会自动做） |
