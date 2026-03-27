[English](daily-commit.en.md) · 中文

# 每日提交

改完代码到推送的最短路径。

## 什么时候用

- 写完一段逻辑，想提交推送
- 日常开发最高频的流程
- 不需要完整 lint/测试闭环，只要「改了、看了、推了」

## 前置准备

装两条命令即可：

```bash
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install git-push --scope global
```

验证：

```bash
npx cursorx-cli verify staged-review --scope global
npx cursorx-cli verify git-push --scope global
```

## 步骤

### 1. 暂存改动

在编辑器 SCM 面板或终端 `git add` 暂存本次要提交的文件。

只暂存本次要提交的，别一股脑全加。

### 2. `/staged-review` — 审一遍

在 Cursor 中输入 `/staged-review`。

它会只看 staged 的内容，帮你抓：明确 bug、行为回归、缺测、文档没跟上。

- 有 `high` 级问题：先修，回到步骤 1
- 只有 `medium` / `low`：自行判断是否要在本次修

### 3. `/git-push` — 提交推送

审完没问题，输入 `/git-push feat(xxx): 你的提交信息`。

它会按顺序执行 pull → 暂存 → 排除确认 → commit → push，关键步骤有确认。

## 预期结果

- 代码已推送到远端
- 提交前做过一次风险审查，降低低级问题概率

## 可搭配

- 提交信息不确定时，先跑 `/diff-summary` 理清改了什么
- 更严谨的提交用 [功能收尾](./feature-completion.md) 工作流

## 变体

| 场景 | 调整 |
|------|------|
| 改动很小（typo、配置） | 可跳过 `/staged-review`，直接 `/git-push` |
| 多个不相关改动 | 分次暂存，每次走一遍 review → push |
| 团队要求 commit 前必须 review | 把 `/staged-review` 的结论贴进 commit message |
