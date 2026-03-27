# Git 一键提交并推送

目标：执行一套标准化流程，完成 pull/rebase、暂存、文件勾选排除、commit、push，并在关键节点做确认。

用户会在命令后直接给出提交信息，例如：

- `/git-push feat(commands): add slash command installer`

其中 `${user_input}` 是本次提交信息。

## 必须遵守

1. 所有 pull 和 push 都使用 `git branch --show-current` 获取当前分支名。
2. 先 `git add -A`，再展示 staged 文件列表，让用户勾选“不需要提交”的文件；勾选项执行 `git restore --staged <file>`，未勾选默认提交。
3. `${user_input}` 不能为空；如果明显不符合 `<type>(<scope>): <subject>`，先提醒用户确认后再继续。
4. 任一步失败都必须中止后续步骤，并说明失败原因和下一步建议。
5. 在真正执行 `git push` 之前，必须先向用户确认一次。

## 执行步骤

1. 执行 `git branch --show-current` 获取当前分支，记为 `<currentBranch>`。
2. 执行 `git status -sb` 展示当前状态。
3. 执行 `git pull --rebase --autostash --no-tags origin <currentBranch>`。
4. 执行 `git add -A`。
5. 执行 `git diff --cached --name-only` 读取 staged 文件列表。
   - 若列表为空：提示“无可提交内容”，停止。
6. 使用多选交互展示 staged 文件，让用户勾选“要排除提交”的文件。
7. 对每个勾选文件执行 `git restore --staged <file>`。
8. 再次执行 `git diff --cached --name-only` 做二次确认。
   - 若为空：提示“全部被排除，无可提交内容”，停止。
9. 执行 `git diff --cached` 展示将提交内容。
10. 执行 `git commit -m "${user_input}"`。
11. 再次展示 `git status -sb` 和即将推送的当前分支，询问用户是否继续 push。
12. 只有在用户明确确认后，才执行 `git push origin <currentBranch>`。
13. 执行 `git status -sb` 作为收尾验证，并输出结果摘要。

## 失败处理要求

- `pull --rebase` 冲突：中止并提示用户先解决冲突后重新执行 `/git-push`。
- `commit` 被 commitlint 或 hook 拒绝：保留 staged，提示用户修正后重试。
- `push` 失败：保留本地 commit，输出失败原因并建议下一步。

## 项目定制说明

如果你希望增加默认排除文件、目录拆分规则或团队专属约束，不要直接修改这个通用版。

请复制并参考：

- [`slash-commands/project/git-push.project-template.md`](../project/git-push.project-template.md)
