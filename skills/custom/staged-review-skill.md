[English](staged-review-skill.en.md) · 中文

# Staged Review Skill

- **名称**：`Staged Review Skill`
- **来源**：`CursorX custom draft`
- **场景**：提交前只想围绕 **staged diff** 做一轮高信号审查
- **能力**：读 staged 列表与 diff；找回归风险、逻辑洞、缺测试；先列 findings；没问题时补残余风险与验证建议
- **用法**：
  1. `git diff --cached --name-only`
  2. `git diff --cached`
  3. 只评 staged 范围
- **限制**：不适合整分支 review；staged 范围本身不完整时结论不稳
- **阶段**：commit 前、提测前、小步重构收尾

## 和通用 code review 的差别

范围小、反馈快，适合高频开发里的「提交前最后一眼」。

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
