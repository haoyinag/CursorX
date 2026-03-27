[English](debug-and-fix.en.md) · 中文

# 排查与修复

从发现问题到定位、修复、验证的完整流程。

## 什么时候用

- Problems 面板有错误或警告
- 跑测试失败
- 发现 bug 需要修复
- lint / typecheck 报错要集中处理

## 前置准备

```bash
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install test-plan --scope global
npx cursorx-cli install git-push --scope global
```

## 步骤

### 1. 定位问题

**如果是 Problems 面板报错：**

按 [先看 Problems 再动手修](../tips/problems-first-triage.md) 的方式：

1. 打开 Problems 面板（`Ctrl+Shift+M`）
2. 粗分三类：阻塞构建的、批量重复的、可后处理的
3. 先清第一类

**如果是运行时 bug：**

1. 复现问题，记下错误信息和堆栈
2. 在编辑器里定位到相关代码
3. 选中可疑代码段，用 Quick Chat 提问

### 2. 修复

用 [先选中再问](../tips/selection-first-prompts.md) 的方式和 AI 协作：

- 选中报错代码，问修复建议
- 一次只改一个问题
- 改完保存，确认 Problems 数量在减少

按 [小步重构，别一次改太大](../tips/small-batch-refactor.md) 的节奏，每修一轮确认状态。

### 3. 暂存修复

确认问题已修复后，暂存改动。

### 4. `/staged-review` — 验证修复

输入 `/staged-review`。

让 AI 审一遍修复是否引入了新问题。重点关注：

- 修复是否完整（不只是压制了症状）
- 有没有引入新的回归
- 相关代码路径是否受影响

### 5. `/test-plan` — 补测试思路

输入 `/test-plan`。

看 bug 修复是否有对应的验证路径。如果测试建议里指出了没覆盖的场景，考虑是否要补。

### 6. `/git-push` — 提交修复

`/git-push fix(xxx): 修复描述`。

## 预期结果

- 问题已修复并经过 AI 审查
- 修复没有引入新回归
- 有明确的测试思路
- 干净的提交已推送

## 可搭配

- [先看 Problems 再动手修](../tips/problems-first-triage.md) — 定位阶段的系统方法
- [先选中再问](../tips/selection-first-prompts.md) — 和 AI 协作修复的技巧
- [小步重构，别一次改太大](../tips/small-batch-refactor.md) — 控制修复节奏
- [`diagnostics-focus.settings.jsonc`](../configs/diagnostics-focus.settings.jsonc) — 集中处理 Problems 的编辑器配置

## 变体

| 场景 | 调整 |
|------|------|
| 紧急 hotfix | 跳过 `/test-plan`，修完 review 后直接 push |
| 批量 lint 错误 | 先跑 `/lint-fix`（见 [功能收尾](./feature-completion.md)），再处理剩余 |
| 不确定根因 | 多轮「选中 → 提问」缩小范围，别急着改 |
