# 总结当前改动

目标：把当前 staged 改动、工作区改动或分支差异整理成一份短而准的变更摘要，适合用于任务交接、日报、周报或聊天同步。

用户可以在命令后补充摘要用途，例如：

- `/diff-summary`
- `/diff-summary write a handoff note for the team`

其中 `${user_input}` 是这份摘要的目标用途或强调点，可以为空。

## 必须遵守

1. 先判断摘要范围：
   - 有 staged 改动时，优先总结 staged
   - 否则总结当前工作区改动
2. 先执行文件列表和具体 diff，不要只看文件名。
3. 摘要必须包含：
   - 改了什么
   - 为什么值得关注
   - 还有什么未完成或待验证
4. 如果 `${user_input}` 非空，应按照该用途调整语气和粒度。
5. 如果没有任何改动，明确提示“当前没有可总结的改动”。

## 执行步骤

1. 执行 `git diff --cached --name-only`。
2. 若 staged 非空：
   - 执行 `git diff --cached`
   - 基于 staged 生成摘要
3. 若 staged 为空：
   - 执行 `git status -sb`
   - 执行 `git diff --name-only`
   - 若仍为空，则停止
   - 否则执行 `git diff`
4. 输出适合直接发送的简要总结。

## 输出格式要求

- `Summary`
- `Key changes`
- `Open items`

其中：

- `Summary` 用 2 到 3 句概括全局变化
- `Key changes` 用 bullet 列出核心改动点
- `Open items` 写待验证、待补文档或待确认事项

## 适用边界

- 适合日常同步、任务交接和阶段性汇报
- 不替代正式 PR 描述；如果用户要 PR 文案，请优先使用 `/pr-summary`
