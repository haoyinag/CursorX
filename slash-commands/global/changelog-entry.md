# 为当前改动生成 changelog 条目

语言：[English](changelog-entry.en.md)

目标：把当前版本或一组改动整理成**可写入 changelog** 的条目，强调用户可感知变化，而非罗列文件。

可补充版本或范围，例如：

- `/changelog-entry`
- `/changelog-entry for cursorx-cli 0.2.0`

`${user_input}` 为版本号、范围或强调点，可为空。

## 必须遵守

1. 条目须建立在真实 diff、提交或版本范围上。  
2. 优先写「用户会感知到什么」。  
3. 内容扩充与安装能力变化要分开写。  
4. 不要把纯重构、重命名、目录整理都写成同级重点。  
5. 不足以独立成条时说明原因，并建议合并方式。  

## 执行步骤

1. 读取改动范围内的提交或 diff。  
2. 归类：Added / Changed / Fixed / Docs。  
3. 把文件级变化归纳为用户价值或工作流变化。  
4. 输出可直接粘贴进 changelog 的条目。  

## 输出格式

- `### <version-or-scope>`
- `Added`
- `Changed`
- `Fixed`
- `Docs`

某类无内容可省略。

## 边界

- 维护仓库或包的 changelog、版本摘要  
- 完整对外公告优先用 `/release-notes`  
