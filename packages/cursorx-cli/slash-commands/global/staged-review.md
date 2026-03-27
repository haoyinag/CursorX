# 审查当前 staged 改动

语言：[English](staged-review.en.md)

目标：只审**已暂存**改动，优先抓行为回归、漏测、边界与明显风险。

可追加关注点，例如：

- `/staged-review`
- `/staged-review focus auth and cache invalidation`

`${user_input}` 为额外关注点，可为空。

## 必须遵守

1. 只审 staged，不要把未暂存混进结论。  
2. 先 `git diff --cached --name-only`；为空则停止，提示先暂存。  
3. 再 `git diff --cached` 读全量 diff。  
4. 默认 review 视角，优先：明确 bug 风险、行为回归、缺测、文档/配置未跟上。  
5. `${user_input}` 非空时作为重点，但不忽略更严重问题。  
6. 输出：**先 findings，再短总结**。  

## 执行步骤

1. `git diff --cached --name-only`  
2. 为空：提示先 `git add` 或用 SCM 暂存，停止。  
3. `git diff --cached`  
4. 按严重度归类：  
   - `high`：错误、数据不一致、明显逻辑回归  
   - `medium`：维护成本、边界或验证不足  
   - `low`：文档、命名、可读性  
5. 有风险则逐条：原因、影响、建议修复。  
6. 无明显问题须写「未发现明确问题」，并补残余风险或建议测点。  

## 输出格式

- Findings first  
- 每条尽量带文件  
- 无 finding 也要写建议验证场景  

## 边界

- 适合 commit 前 staged review  
- 不适合整分支或整 PR；分支摘要用 `/pr-summary`  
