# 对当前改动做 Lint 自动修复

目标：只对当前 Git 改动的文件执行 ESLint / Stylelint 自动修复，而不是直接跑整仓库。

## 说明

- 这个命令既可以装成全局命令，也可以装到某个仓库的 `.cursor/commands/` 中。
- 它依赖配套脚本 `lint-fix-changed.mjs`，安装时建议同时复制。
- 脚本会基于当前 Git 仓库内的已修改、已暂存和未跟踪文件计算待修复列表。
- 如果用户明确要求修整个仓库，而不是只修当前改动，请改为执行项目自己的全量修复命令。

## 执行步骤

1. 先确认当前目录位于 Git 仓库内；如果不是，停止并提示用户切到项目目录。
2. 先判断脚本安装位置：

   - 如果命令安装在项目范围，优先使用 `<repo>/.cursor/scripts/lint-fix-changed.mjs`
   - 否则使用用户目录下的 `~/.cursor/scripts/lint-fix-changed.mjs`

3. 根据当前系统执行对应命令：

   - Windows PowerShell：
     `node "$env:USERPROFILE\\.cursor\\scripts\\lint-fix-changed.mjs"`

   - Windows CMD：
     `node "%USERPROFILE%\\.cursor\\scripts\\lint-fix-changed.mjs"`

   - macOS / Linux：
     `node "$HOME/.cursor/scripts/lint-fix-changed.mjs"`

4. 如果脚本零退出，简要汇总修复结果。
5. 如果脚本非零退出，先展示终端错误；对于无法自动修复的规则，提示用户手动修改。
6. 如果用户要求继续检查类型问题，建议再运行项目的 `typecheck`。

## 适用边界

- 这个命令适合“只处理当前改动”。
- 它不替代项目自带的 `lint:fix`、`lint-staged`、`typecheck`。
- 不同仓库使用的包管理器、monorepo 结构和 lint 配置可能不同，因此脚本会优先尝试探测本地可执行工具。
