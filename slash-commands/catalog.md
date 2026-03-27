# Slash 命令目录

语言：[English](catalog.en.md)

给「要把命令装进 Cursor 直接用」的人看。

## 可安装命令

### `/git-push`

- 文件：[`slash-commands/global/git-push.md`](global/git-push.md)
- 范围：`global`、`project`
- 场景：标准化 pull、暂存、排除文件、commit、push  
- 价值：高频提交流程固化  
- 脚本：无  
- 工作流：[每日提交](../workflows/daily-commit.md)、[功能收尾](../workflows/feature-completion.md)、[排查与修复](../workflows/debug-and-fix.md)  

### `/lint-fix`

- 文件：[`slash-commands/global/lint-fix.md`](global/lint-fix.md)
- 范围：`global`、`project`
- 场景：只对当前 Git 改动跑 ESLint / Stylelint 自动修复  
- 价值：不必每次整仓库 lint fix  
- 脚本：[`slash-commands/scripts/lint-fix-changed.mjs`](scripts/lint-fix-changed.mjs)
- 工作流：[功能收尾](../workflows/feature-completion.md)

### `/staged-review`

- 文件：[`slash-commands/global/staged-review.md`](global/staged-review.md)
- 范围：`global`、`project`
- 场景：提交前只审 staged  
- 价值：先发现 bug、回归、测缺  
- 脚本：无  
- 工作流：[每日提交](../workflows/daily-commit.md)、[功能收尾](../workflows/feature-completion.md)、[PR 准备](../workflows/pr-preparation.md)、[代码审查](../workflows/code-review-as-reviewer.md)、[排查与修复](../workflows/debug-and-fix.md)  

### `/test-plan`

- 文件：[`slash-commands/global/test-plan.md`](global/test-plan.md)
- 范围：`global`、`project`
- 场景：按 staged 改动列 smoke、回归、边界测法  
- 价值：测试思考前移  
- 脚本：无  
- 工作流：[功能收尾](../workflows/feature-completion.md)、[PR 准备](../workflows/pr-preparation.md)、[排查与修复](../workflows/debug-and-fix.md)  

### `/pr-summary`

- 文件：[`slash-commands/global/pr-summary.md`](global/pr-summary.md)
- 范围：`global`、`project`
- 场景：PR 前写分支摘要、风险、测试计划  
- 价值：PR 从「列文件」变成「讲清为什么、影响什么」  
- 脚本：无  
- 工作流：[PR 准备](../workflows/pr-preparation.md)、[文档更新](../workflows/doc-update.md)  

### `/readme-refresh`

- 文件：[`slash-commands/global/readme-refresh.md`](global/readme-refresh.md)
- 范围：`global`、`project`
- 场景：按代码/目录/diff 刷新 README 与说明  
- 价值：文档少掉队  
- 脚本：无  
- 工作流：[文档更新](../workflows/doc-update.md)  

### `/risk-scan`

- 文件：[`slash-commands/global/risk-scan.md`](global/risk-scan.md)
- 范围：`global`、`project`
- 场景：提交/提测/合并前扫高风险点  
- 价值：风险前移  
- 脚本：无  
- 工作流：[风险交接](../workflows/risk-handoff.md)、[代码审查](../workflows/code-review-as-reviewer.md)  

### `/diff-summary`

- 文件：[`slash-commands/global/diff-summary.md`](global/diff-summary.md)
- 范围：`global`、`project`
- 场景：staged 或工作区 diff 整理成交接/同步/日报  
- 价值：少手写变更说明  
- 脚本：无  
- 工作流：[风险交接](../workflows/risk-handoff.md)  

### `/migration-note`

- 文件：[`slash-commands/global/migration-note.md`](global/migration-note.md)
- 范围：`global`、`project`
- 场景：命令入口、安装、配置路径或目录结构变化后写迁移说明  
- 价值：升级路径可读  
- 脚本：无  
- 工作流：[文档更新](../workflows/doc-update.md)、[风险交接](../workflows/risk-handoff.md)  

### `/release-notes`

- 文件：[`slash-commands/global/release-notes.md`](global/release-notes.md)
- 范围：`global`、`project`
- 场景：包或工作流升级后写对外版本说明  
- 价值：说清楚「这版带来什么」  
- 脚本：无  
- 工作流：[发布周期](../workflows/release-cycle.md)  

### `/changelog-entry`

- 文件：[`slash-commands/global/changelog-entry.md`](global/changelog-entry.md)
- 范围：`global`、`project`
- 场景：为当前版本或一组改动写结构化 changelog 条目  
- 价值：迭代可追踪  
- 脚本：无  
- 工作流：[发布周期](../workflows/release-cycle.md)  

### `/upgrade-checklist`

- 文件：[`slash-commands/global/upgrade-checklist.md`](global/upgrade-checklist.md)
- 范围：`global`、`project`
- 场景：安装方式或配置变后列用户升级步骤  
- 价值：「用户接下来要做什么」显式化  
- 脚本：无  
- 工作流：[发布周期](../workflows/release-cycle.md)  

## 项目模板

### `git-push.project-template`

- 文件：[`slash-commands/project/git-push.project-template.md`](project/git-push.project-template.md)
- 场景：要在项目里加默认排除、目录拆分或团队规则  
- 价值：别把项目特规塞进全局通用版  

## 推荐组合

每个组合都有对应的完整工作流文档，包含步骤、技巧和变体：

- **Git 提交：** `/git-push` + `/staged-review` → [每日提交工作流](../workflows/daily-commit.md)  
- **改动收尾：** `/lint-fix` → `/test-plan` → `/staged-review` → `/git-push` → [功能收尾工作流](../workflows/feature-completion.md)  
- **PR：** `/staged-review` → `/test-plan` → `/pr-summary` → [PR 准备工作流](../workflows/pr-preparation.md)  
- **文档：** `/readme-refresh` → `/migration-note` → `/pr-summary` → [文档更新工作流](../workflows/doc-update.md)  
- **风险与交接：** `/risk-scan` → `/diff-summary` → `/migration-note` → [风险交接工作流](../workflows/risk-handoff.md)  
- **发布：** `/changelog-entry` → `/release-notes` → `/upgrade-checklist` → [发布周期工作流](../workflows/release-cycle.md)

更多工作流见 [workflows/catalog.md](../workflows/catalog.md)。  
