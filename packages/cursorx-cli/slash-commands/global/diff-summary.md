# 总结当前改动

语言：[English](diff-summary.en.md)

目标：把 **staged**、工作区或分支差异整理成短而准的摘要，用于交接、日报、周报或聊天同步。

可补充用途，例如：

- `/diff-summary`
- `/diff-summary write a handoff note for the team`

`${user_input}` 为摘要用途或语气，可为空。

## 必须遵守

1. 范围：有 staged 时**优先 staged**；否则总结工作区改动。  
2. 须看文件列表与具体 diff，不能只看文件名。  
3. 摘要须包含：改了什么、为何值得关注、未完成或待验证项。  
4. `${user_input}` 非空时按该用途调语气与粒度。  
5. 无任何改动时明确提示无可总结内容。  

## 执行步骤

1. `git diff --cached --name-only`  
2. staged 非空：`git diff --cached`，基于 staged 生成摘要。  
3. staged 为空：`git status -sb`、`git diff --name-only`；仍为空则停止；否则 `git diff`。  
4. 输出可直接发送的短总结。  

## 输出格式

- `Summary`
- `Key changes`
- `Open items`

- Summary：2～3 句概括  
- Key changes：bullet 核心点  
- Open items：待验证、待补文档、待确认  

## 边界

- 日常同步、交接、阶段汇报  
- 不替代正式 PR 描述；PR 文案用 `/pr-summary`  
