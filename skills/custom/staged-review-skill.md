# Staged Review Skill

- 名称：`Staged Review Skill`
- 来源：`CursorX custom draft`
- 适用场景：准备 commit 前，想只围绕 staged diff 做一次高信号审查
- 核心能力：
  - 读取 staged 文件列表和 staged diff
  - 识别回归风险、逻辑漏洞和遗漏测试
  - 用 findings-first 方式输出问题
  - 在没有明确问题时补残余风险和验证建议
- 使用方式：
  1. 先 `git diff --cached --name-only`
  2. 再 `git diff --cached`
  3. 只围绕 staged 范围输出 review 结果
- 已知限制：
  - 不适合完整分支 review
  - 如果 staged 范围本身不完整，结论可能不稳定
- 推荐阶段：commit 前、提测前、整理小批次重构时

## 为什么值得保留为自定义 Skill

它和通用 code review 最大区别在于范围很小、反馈很快，特别适合高频开发流中的“提交前最后一眼”。

## 提示词骨架

```text
Review only the currently staged diff.
Prioritize:
1. bugs
2. regressions
3. missing tests
4. doc/config mismatches

Return findings first. If there are no findings, say so explicitly and list residual risks.
```
