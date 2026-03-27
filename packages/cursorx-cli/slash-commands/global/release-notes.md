# 为当前版本生成 release notes

语言：[English](release-notes.en.md)

目标：基于分支差异、近期提交与相关文档，写适合发布说明、版本公告或对外摘要的 release notes。

可补充受众，例如：

- `/release-notes`
- `/release-notes for npm users upgrading from 0.1.0`

`${user_input}` 为读者或强调重点，可为空。

## 必须遵守

1. 先界定本次发布范围，**不要凭空编造功能点**。  
2. 至少结合：`git log`、`git diff --stat`、相关 README/使用说明。  
3. 优先写清：用户得到什么新能力、安装/用法是否变、兼容性与升级注意。  
4. `${user_input}` 非空时按该受众调整语气与重点。  
5. 内部重构不要写成用户价值；无感知变化弱化。  

## 执行步骤

1. 取当前分支相对基线的差异，或当前发布范围内的提交列表。  
2. 读文档与命令索引，确认对外可见变更。  
3. 按「新增能力 / 改进 / 注意事项」组织。  
4. 输出可直接粘贴的 release notes。  

## 输出格式

- `## Highlights`
- `## Improvements`
- `## Notes`

- Highlights：最值得用户知道的 2～4 条  
- Improvements：细化改进  
- Notes：安装、兼容、升级提醒  

## 边界

- 适合 npm 包、命令集、版本公告  
- 不替代完整 changelog；逐项增量用 `/changelog-entry`  
