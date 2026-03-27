[English](code-review-as-reviewer.en.md) · 中文

# 代码审查（作为 reviewer）

用 AI 辅助审查别人的 PR，聚焦风险、回归和测试缺口。

## 什么时候用

- 收到别人的 PR 需要 review
- 改动较多，想先用 AI 过一遍再细看
- 想系统性地抓风险而不是只看代码风格

## 前置准备

```bash
npx cursorx-cli install staged-review --scope global
npx cursorx-cli install risk-scan --scope global
```

## 步骤

### 1. 切到 PR 分支

```bash
git fetch origin
git checkout <pr-branch>
```

或者用 Cursor / GitHub 的 PR 工具直接打开。

### 2. 浏览改动范围

先快速看一遍文件列表和改动量级，心里有个数：

```bash
git diff --stat origin/main...HEAD
```

### 3. `/risk-scan` — 扫高风险

输入 `/risk-scan`。

它会基于分支差异扫描：

- 逻辑回归
- 配置/文档不同步
- 兼容性问题
- 验证缺口

有特别关注的点可以追加：`/risk-scan focus 数据库迁移和 API 兼容`。

记下 High / Medium 级风险，这是你 review 时要重点看的地方。

### 4. 针对性细读

根据步骤 3 的风险点，在编辑器里定位到具体代码。

用 [先选中再问](../tips/selection-first-prompts.md) 的方式：选中可疑代码，用 Quick Chat 提问。

常见提问方向：

- 这段逻辑在 XX 场景下会不会有问题？
- 这个改动会不会影响 XX 的调用方？
- 缺什么边界检查？

### 5. 写 review 意见

把发现整理成 review comment。结构建议：

- 必须改的（blocking）
- 建议改的（non-blocking）
- 确认/疑问（需要作者回答的）

## 预期结果

- 风险已系统性扫过，不只是凭感觉看
- review 意见有依据、有优先级
- 不遗漏高风险点

## 可搭配

- [先选中再问](../tips/selection-first-prompts.md) — 针对具体代码段提问
- [长对话该收尾就收尾](../tips/context-handoff.md) — PR 很大时分批 review
- [`focused-review.settings.jsonc`](../configs/focused-review.settings.jsonc) — diff 阅读和代码审查的编辑器配置

## 变体

| 场景 | 调整 |
|------|------|
| 小 PR（几十行） | 直接读代码，跳过 `/risk-scan` |
| PR 有测试 | review 时重点看测试是否覆盖了 `/risk-scan` 指出的风险 |
| 你不熟悉这块代码 | 先选中核心逻辑用 Quick Chat 问「这段在做什么」 |
