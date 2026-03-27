# Repo Onboarding Skill

- 名称：`Repo Onboarding Skill`
- 来源：`CursorX curated pattern`
- 适用场景：第一次进入一个陌生仓库，需要快速摸清结构、入口文件、运行方式和风险区
- 核心能力：
  - 快速梳理目录结构
  - 提取关键运行入口、脚本和文档入口
  - 识别主产品层与内容层
  - 输出“先看什么、后看什么”的上手路线
- 使用方式：
  1. 先让 Skill 读取根 README、docs 和主产品目录说明
  2. 再让它总结仓库结构、运行入口和高频文件
  3. 最后输出一份新成员可直接照着走的 onboarding 路线
- 已知限制：
  - 不能替代真实业务背景介绍
  - 对文档过时的仓库，输出质量会被文档质量限制
- 推荐阶段：入门、接手新项目、代码冻结后回溯仓库结构

## 为什么值得推荐

这是最容易复用的一类 Skill。很多人第一次打开仓库时并不缺“代码解释”，而是缺“从哪里开始”。

## 提示词骨架

```text
Read the repository entry docs first, then summarize:
1. main product area
2. supporting content areas
3. how to run or use the project
4. recommended reading order
5. top risks or missing docs
```
