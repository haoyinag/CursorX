# Git 一键提交并推送

语言：[English](git-push.en.md)

目标：按固定顺序完成 pull/rebase、暂存、勾选排除、commit、push，并在关键步骤确认。

用户常在命令后直接给提交说明，例如：

- `/git-push feat(commands): add slash command installer`

`${user_input}` 为本次提交信息。

## 必须遵守

1. 所有 pull/push 用 `git branch --show-current` 取当前分支名。  
2. 先 `git add -A`，列出 staged，让用户勾选「不提交」的文件；勾选项执行 `git restore --staged <file>`，未勾选则默认提交。  
3. `${user_input}` 不得为空；若明显不符合 `<type>(<scope>): <subject>`，先提醒确认再继续。  
4. 任一步失败即中止后续，说明原因与建议。  
5. 真正执行 `git push` 前必须再向用户确认一次。  

## 执行步骤

1. `git branch --show-current` → `<currentBranch>`  
2. `git status -sb`  
3. `git pull --rebase --autostash --no-tags origin <currentBranch>`  
4. `git add -A`  
5. `git diff --cached --name-only` → 若为空：提示无可提交，停止。  
6. 多选展示 staged，让用户勾选「要排除提交」的文件。  
7. 对每个勾选文件 `git restore --staged <file>`。  
8. 再 `git diff --cached --name-only`；若为空：提示全部被排除，停止。  
9. `git diff --cached` 展示将提交内容。  
10. `git commit -m "${user_input}"`  
11. 再展示 `git status -sb` 与将推送分支，询问是否继续 push。  
12. 仅当用户明确确认后执行 `git push origin <currentBranch>`。  
13. `git status -sb` 收尾并给摘要。  

## 失败处理

- `pull --rebase` 冲突：中止，提示解决冲突后重跑 `/git-push`。  
- `commit` 被 hook/commitlint 拒绝：保留 staged，提示修正后重试。  
- `push` 失败：保留本地 commit，说明原因与下一步。  

## 项目定制

不要直接改本通用版来满足默认排除或团队规则。请复制并参考：

- [`slash-commands/project/git-push.project-template.md`](../project/git-push.project-template.md)
