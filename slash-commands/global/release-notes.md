# 为当前版本生成 release notes

目标：基于当前分支差异、最近提交和相关文档，生成一份适合发布说明、版本公告或更新日志摘要的 release notes。

用户可以在命令后补充目标受众，例如：

- `/release-notes`
- `/release-notes for npm users upgrading from 0.1.0`

其中 `${user_input}` 是本次 release notes 需要额外强调的读者或重点，可以为空。

## 必须遵守

1. 先识别本次发布对应的改动范围，不要凭空编写功能点。
2. 至少结合以下信息：
   - `git log`
   - `git diff --stat`
   - 相关 README 或使用说明
3. release notes 应优先说明：
   - 用户能得到什么新能力
   - 安装或使用方式是否有变化
   - 是否需要关注兼容性或升级提示
4. 如果 `${user_input}` 非空，应按该受众调整措辞和重点。
5. 不要把纯内部重构写成用户价值；没有用户可感知变化的部分应弱化。

## 执行步骤

1. 获取当前分支与基线分支的差异，或读取当前发布范围内的提交列表。
2. 阅读相关文档与命令索引，确认变更点是否已经对外可见。
3. 按“新增能力 / 改进 / 注意事项”整理发布信息。
4. 输出一份可直接用于 release notes 的内容。

## 输出格式要求

- `## Highlights`
- `## Improvements`
- `## Notes`

其中：

- `Highlights` 聚焦最值得用户知道的 2 到 4 条变化
- `Improvements` 补充细化改进点
- `Notes` 写安装、兼容性或升级提醒

## 适用边界

- 适合 npm 包发布、命令集升级、版本公告
- 不替代完整 changelog；如果用户要逐项增量记录，请优先使用 `/changelog-entry`
