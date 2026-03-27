[English](problems-first-triage.en.md) · 中文

# 先看 Problems 再动手修

## 什么时候用

- lint、类型检查或诊断一大堆
- 不确定先动哪一类
- 怕边改边丢全局

## 怎么做

1. 打开 Problems，扫一眼错误和警告的分布。
2. 粗分三类：会挡构建/运行的、同一规则批量重复的、可后处理的提示。
3. 先清第一类，再批量处理第二类。
4. 每轮改完刷新 Problems，确认主问题真的在少。

## 能换来什么

- 少遇「改了一堆主错误还在」
- 大改动收尾、升级后集中修错都适用
- lint、类型、链接检查同理

## 可搭配

- `open-problems-panel`
- `save-all-files`
