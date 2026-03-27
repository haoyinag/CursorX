# 生成当前分支的 PR 摘要

语言：[English](pr-summary.en.md)

目标：相对默认基线分支，生成可直接贴进 PR 的摘要、风险与测试计划。

可补充强调点，例如：

- `/pr-summary`
- `/pr-summary emphasize why install verification matters`

`${user_input}` 为额外强调内容，可为空。

## 必须遵守

1. 先识别远端默认分支，再算当前分支相对基线的差异。  
2. 至少：`git branch --show-current`、`git status -sb`、`git log --oneline <base>..HEAD`、`git diff --stat <base>...HEAD`。  
3. 若当前就在默认分支且无分支差异，则总结**工作区**改动并说明情况。  
4. 输出不要只列文件，要说明**为什么改、影响什么**。  
5. `${user_input}` 非空时摘要中优先体现。  

## 执行步骤

1. `git branch --show-current`  
2. 用 `git symbolic-ref refs/remotes/origin/HEAD` 等识别默认基线；失败则合理推断。  
3. `git status -sb`  
4. `git log --oneline <base>..HEAD`  
5. `git diff --stat <base>...HEAD`  
6. 需要时 `git diff <base>...HEAD` 看细节。  
7. 输出可直接用于 PR 的文案。  

## 输出格式

- `## Summary`
- `## Risks`
- `## Test Plan`

- Summary：2～4 条 bullet，核心价值  
- Risks：影响面、依赖、未充分验证处  
- Test Plan：checklist，已做或建议  

## 边界

- 适合 PR 前整理  
- 不替代正式 code review  
- 只看 staged 审查结论用 `/staged-review`  
