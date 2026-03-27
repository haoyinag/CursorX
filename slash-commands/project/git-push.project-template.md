# Git 一键提交并推送（项目模板）

语言：[English](git-push.project-template.en.md)

给**项目级**命令用，不要当全局通用版直接发。

可在此之上加：

- 默认排除文件  
- 必须单独提交的目录规则  
- 仓库专属提交前检查  
- 更严的 commit message 约束  

## 可定制示例

### 默认排除

每次进勾选前，先从暂存区拿掉（若已在 staged）：

- `<replace-with-project-specific-path-a>`
- `<replace-with-project-specific-path-b>`

说明：仅对已 staged 的文件执行 `git restore --staged <file>`；不存在或未改动则跳过，不中断。

### 目录拆分强校验

若存在必须独立提交的目录，例如 `android/`、`ios/`、`libs/`：在最终 staged 确定后，若与其它目录混提则停止并提示拆分。

## 推荐做法

1. 以通用版 [`../global/git-push.md`](../global/git-push.md) 为底  
2. 把项目规则叠加上去  
3. 成品放在本仓库 `.cursor/commands/`  

公共命令保持可复用，项目里再收紧流程。
