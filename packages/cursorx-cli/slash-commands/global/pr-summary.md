# 生成当前分支的 PR 摘要

目标：基于当前分支相对默认基线分支的差异，生成适合直接放进 Pull Request 的摘要、风险说明和测试计划。

用户可以在命令后补充 PR 重点，例如：

- `/pr-summary`
- `/pr-summary emphasize why install verification matters`

其中 `${user_input}` 是摘要时需要额外强调的内容，可以为空。

## 必须遵守

1. 先识别远端默认分支，再计算当前分支与默认分支的差异。
2. 至少执行以下检查：
   - `git branch --show-current`
   - `git status -sb`
   - `git log --oneline <base>..HEAD`
   - `git diff --stat <base>...HEAD`
3. 如果当前就在默认分支上，且没有可形成 PR 的分支差异，则改为总结当前工作区改动并明确说明。
4. 输出时不要只复述文件列表，要说明“为什么改”和“影响什么”。
5. 如果 `${user_input}` 非空，摘要中应优先体现该重点。

## 执行步骤

1. 执行 `git branch --show-current` 获取当前分支。
2. 尝试通过 `git symbolic-ref refs/remotes/origin/HEAD` 识别默认远端分支；若失败，再结合仓库状态合理判断基线分支。
3. 执行 `git status -sb` 查看当前工作区状态。
4. 执行 `git log --oneline <base>..HEAD` 阅读当前分支提交列表。
5. 执行 `git diff --stat <base>...HEAD` 获取变更范围。
6. 必要时执行 `git diff <base>...HEAD` 查看具体改动。
7. 输出可直接用于 PR 的内容。

## 输出格式要求

- `## Summary`
- `## Risks`
- `## Test Plan`

其中：

- `Summary` 用 2 到 4 条 bullet 说明本次改动的核心价值
- `Risks` 说明潜在影响面、依赖、未完全验证部分
- `Test Plan` 用 checklist 形式列出已做或建议做的验证

## 适用边界

- 适合提交 PR 前整理摘要
- 不适合替代正式 code review
- 如果用户只想看 staged 改动的审查结论，请优先使用 `/staged-review`
