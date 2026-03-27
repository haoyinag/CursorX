# 刷新 README 或文档说明

语言：[English](readme-refresh.en.md)

目标：按当前代码、目录或近期改动，更新 README/文档段落，使其**准、可读、和真实用法一致**。

可指定目标，例如：

- `/readme-refresh`
- `/readme-refresh packages/cursorx-cli/README.md`
- `/readme-refresh refresh quick start and install verification section`

`${user_input}` 可为文件路径、章节或要强化的重点。

## 必须遵守

1. 先定目标文档；`user_input` 不明确时，从与当前改动最相关的 README 或 `docs/` 入手。  
2. 更新前同时读：目标文档、相关代码/目录、若有则工作区 diff。  
3. 内容须与仓库真实状态一致，**禁止编造**不存在的命令、脚本或路径。  
4. 优先增量改；除非结构已明显失效，不要整份重写。  
5. 不确定处先标假设或待确认点。  

## 执行步骤

1. 确定本次要更新的文档。  
2. 读目标文档与相关代码、索引、目录说明。  
3. 有工作区改动时结合 `git diff`。  
4. 重点查是否过时：安装方式、步骤、路径、命令示例、推荐入口。  
5. 用最小必要修改完成刷新。  

## 输出要求

- 简述本次更新了哪些信息  
- 若补了示例或验证步骤，说明适用对象  
- 文档缺口列 1～3 条建议  

## 边界

- 适合 README、快速开始、目录说明、命令说明  
- 不替代正式技术方案文档  
