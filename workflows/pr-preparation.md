[English](pr-preparation.en.md) · 中文

# PR 准备

提 PR 前把审查、测试计划、摘要一次做完，让 PR 从「列文件」变成「讲清为什么」。

## 什么时候用

- 功能做完，准备发 PR
- 想让 reviewer 一眼看懂改了什么、为什么、风险在哪
- 团队要求 PR 有测试计划和风险说明

## 前置准备

```bash
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install test-plan --scope global
npx cursorx-cli install pr-summary --scope global
```

## 步骤

### 1. 确认分支状态

确保所有要进 PR 的改动已提交到当前分支。`git status` 应该是干净的或只有不相关的改动。

### 2. `/staged-review` — 最后审一遍

如果还有未提交的改动，先暂存再跑 `/staged-review`。

如果所有改动都已提交，可以跳到步骤 3。这步的目的是确保没有低级问题混进 PR。

### 3. `/test-plan` — 列测试计划

输入 `/test-plan`。

把输出的测试计划留着，后面贴进 PR 的 Test Plan 部分。

重点看：

- 关键路径有没有 smoke test
- 是否有容易遗漏的回归场景
- edge case 是否需要在 PR 里说明

### 4. `/pr-summary` — 生成 PR 摘要

输入 `/pr-summary`。

它会读当前分支相对基线的差异，输出：

- **Summary**：核心价值，2-4 条 bullet
- **Risks**：影响面、依赖、未充分验证处
- **Test Plan**：已做和建议的测试

有额外想强调的点可以追加：`/pr-summary emphasize 性能影响`。

### 5. 组装 PR 描述

把 `/pr-summary` 的输出和 `/test-plan` 的结论合并，贴进 PR 描述。按需调整措辞。

## 预期结果

- PR 描述清晰：改了什么、为什么、影响什么
- 测试计划明确：reviewer 知道哪些路径已验证
- 风险显式化：不用 reviewer 自己猜

## 可搭配

- [功能收尾](./feature-completion.md) — PR 前先走一遍完整提交流程
- [风险交接](./risk-handoff.md) — 改动复杂时补充风险分析
- [发布前过一遍清单](../tips/release-hygiene.md) — 如果 PR 是发版相关

## 变体

| 场景 | 调整 |
|------|------|
| 小改动（几行 fix） | `/pr-summary` 足够，可跳过 test-plan |
| 大重构 | 在步骤 2 前先跑 `/risk-scan`，把高风险项列进 PR |
| 多 commit 的长分支 | `/pr-summary` 会看整个分支差异，不只看最后一个 commit |
