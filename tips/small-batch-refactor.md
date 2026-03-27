[English](small-batch-refactor.en.md) · 中文

# 小步重构，别一次改太大

## 什么时候用

- 要动一块已在跑的老代码
- 想用 AI 辅助但怕一次改太多难验证
- 要兼顾重构质量和提交可审性

## 怎么做

1. 拆最小目标：抽函数、改名、收敛重复，任选其一。
2. 每步做完做一次最小验证：相关测试、关键路径手点、或至少过一遍 diff。
3. 大重构拆成多个可解释的 commit，别堆在一个提交里。
4. 必要时每步后让 AI 做 staged review 或整理测试计划。

## 能换来什么

- 出问题好定位是哪一步
- 更贴 code review
- 降低「一次大改失控」的风险

## 可搭配

- `/staged-review`
- `/test-plan`
- `commands/productivity/code-refactor-assistant.json`
