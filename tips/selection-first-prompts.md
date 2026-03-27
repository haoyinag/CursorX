[English](selection-first-prompts.en.md) · 中文

# 先选中再问

## 什么时候用

- 只想让模型看一小段代码
- 不想它误读整文件上下文
- 需要快速解释、重构建议或测点

## 怎么做

1. 在编辑器里选中**最小必要**片段：一个函数、组件或分支。
2. 再用 Quick Chat、Chat 或相关命令提问。
3. 一次只问一个目标，例如：这段在做什么、风险在哪、该补哪些测试。
4. 第一轮不准再补业务背景，别一上来就整仓描述。

## 能换来什么

- 降低误读范围的概率
- 适合讲代码、审代码、出测试思路
- 好提示更容易沉淀成固定流程

## 可搭配

- `commands/ai-assistant/explain-selected-code.json`
- `commands/ai-assistant/generate-tests-for-selection.json`
