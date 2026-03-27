# Slash Commands 目录

这个目录面向“我想把命令安装到 Cursor 里直接使用”的使用者。

## 可安装命令

### `/git-push`

- 文件：[`slash-commands/global/git-push.md`](global/git-push.md)
- 适用范围：`global`、`project`
- 适用场景：标准化执行 pull、暂存、排除文件、commit、push 流程
- 主要价值：把高频 Git 提交与推送动作沉淀成稳定流程
- 依赖脚本：无

### `/lint-fix`

- 文件：[`slash-commands/global/lint-fix.md`](global/lint-fix.md)
- 适用范围：`global`、`project`
- 适用场景：只对当前 Git 改动文件执行 ESLint / Stylelint 自动修复
- 主要价值：避免每次都跑整仓库 lint fix，同时减少手写命令
- 依赖脚本：[`slash-commands/scripts/lint-fix-changed.mjs`](scripts/lint-fix-changed.mjs)

### `/staged-review`

- 文件：[`slash-commands/global/staged-review.md`](global/staged-review.md)
- 适用范围：`global`、`project`
- 适用场景：commit 前只围绕 staged 改动做风险审查
- 主要价值：把“提交前 review 一遍”沉淀成固定动作，优先发现 bug、回归和测试缺口
- 依赖脚本：无

### `/test-plan`

- 文件：[`slash-commands/global/test-plan.md`](global/test-plan.md)
- 适用范围：`global`、`project`
- 适用场景：基于 staged 改动快速整理 smoke、regression 和 edge case 测试计划
- 主要价值：把测试思考前移，减少“改完才想起怎么测”的遗漏
- 依赖脚本：无

### `/pr-summary`

- 文件：[`slash-commands/global/pr-summary.md`](global/pr-summary.md)
- 适用范围：`global`、`project`
- 适用场景：提交 Pull Request 前整理分支摘要、风险和测试计划
- 主要价值：把 PR 描述从“列文件”升级为“讲清为什么改、影响什么”
- 依赖脚本：无

### `/readme-refresh`

- 文件：[`slash-commands/global/readme-refresh.md`](global/readme-refresh.md)
- 适用范围：`global`、`project`
- 适用场景：根据最新代码、目录或 diff 刷新 README 和说明文档
- 主要价值：减少文档滞后，让使用说明和仓库现状保持同步
- 依赖脚本：无

### `/risk-scan`

- 文件：[`slash-commands/global/risk-scan.md`](global/risk-scan.md)
- 适用范围：`global`、`project`
- 适用场景：在 commit、提测或合并前快速找出当前改动的高风险点
- 主要价值：把风险识别前移，减少“改完才想起哪里可能出问题”
- 依赖脚本：无

### `/diff-summary`

- 文件：[`slash-commands/global/diff-summary.md`](global/diff-summary.md)
- 适用范围：`global`、`project`
- 适用场景：把 staged、工作区或当前差异整理成交接、同步或日报摘要
- 主要价值：降低手写变更说明成本，让同步内容更稳定
- 依赖脚本：无

### `/migration-note`

- 文件：[`slash-commands/global/migration-note.md`](global/migration-note.md)
- 适用范围：`global`、`project`
- 适用场景：命令入口、安装方式、配置路径或目录结构变化后整理迁移说明
- 主要价值：减少用户因升级路径不清而产生的理解成本
- 依赖脚本：无

### `/release-notes`

- 文件：[`slash-commands/global/release-notes.md`](global/release-notes.md)
- 适用范围：`global`、`project`
- 适用场景：npm 包、命令集或工作流升级后整理面向外部的版本说明
- 主要价值：把“本次版本带来什么”表达得更清晰，而不是只堆文件列表
- 依赖脚本：无

### `/changelog-entry`

- 文件：[`slash-commands/global/changelog-entry.md`](global/changelog-entry.md)
- 适用范围：`global`、`project`
- 适用场景：为当前版本或当前一组改动补一段结构化 changelog 条目
- 主要价值：把持续迭代沉淀成可追踪的增量记录
- 依赖脚本：无

### `/upgrade-checklist`

- 文件：[`slash-commands/global/upgrade-checklist.md`](global/upgrade-checklist.md)
- 适用范围：`global`、`project`
- 适用场景：命令集、安装方式或配置变化后整理用户升级步骤
- 主要价值：把“用户接下来要做什么”显式化，降低升级成本
- 依赖脚本：无

## 项目模板

### `git-push.project-template`

- 文件：[`slash-commands/project/git-push.project-template.md`](project/git-push.project-template.md)
- 适用场景：你需要在项目内增加默认排除文件、目录拆分规则或其他团队约束
- 主要价值：让项目特有规则不要污染全局通用命令

## 推荐组合

### Git 提交流程

- `/git-push`
- `/staged-review`

适合希望在 commit 前先 review staged，再完成提交和推送的用户。

### 改动收尾流程

- `/lint-fix`
- `/test-plan`
- `/staged-review`
- `/git-push`

适合先修复当前改动的 lint，再补测试思路与风险审查，最后完成提交和推送的用户。

### PR 整理流程

- `/staged-review`
- `/test-plan`
- `/pr-summary`

适合在分支收尾阶段，把风险、测试计划和 PR 摘要一次整理好的用户。

### 文档刷新流程

- `/readme-refresh`
- `/migration-note`
- `/pr-summary`

适合一边更新代码一边同步 README、变更说明和 PR 描述的用户。

### 风险与交接流程

- `/risk-scan`
- `/diff-summary`
- `/migration-note`

适合在发布前、交接前或做兼容性梳理时，快速整理风险、摘要和迁移信息的用户。

### 发布与变更管理流程

- `/changelog-entry`
- `/release-notes`
- `/upgrade-checklist`

适合在版本发布前后，把增量记录、对外说明和升级动作串成一个稳定流程的用户。
