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

## 项目模板

### `git-push.project-template`

- 文件：[`slash-commands/project/git-push.project-template.md`](project/git-push.project-template.md)
- 适用场景：你需要在项目内增加默认排除文件、目录拆分规则或其他团队约束
- 主要价值：让项目特有规则不要污染全局通用命令

## 推荐组合

### Git 提交流程

- `/git-push`

适合希望把提交和推送流程标准化的用户。

### 改动收尾流程

- `/lint-fix`
- `/git-push`

适合先修复当前改动的 lint，再完成提交和推送的用户。
