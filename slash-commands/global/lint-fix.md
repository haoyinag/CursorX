# 对当前改动做 Lint 自动修复

语言：[English](lint-fix.en.md)

目标：只对**当前 Git 改动**里的文件跑 ESLint / Stylelint 自动修复，不默认整仓库。

## 说明

- 可装全局或项目 `.cursor/commands/`。  
- 依赖 `lint-fix-changed.mjs`，安装时建议 `--with-scripts` 一并复制。  
- 脚本按已修改、已暂存、未跟踪文件算待修复列表。  
- 用户明确要求整仓库修复时，改跑项目自己的全量命令。  

## 执行步骤

1. 确认当前目录在 Git 仓库内；否则停止并提示进入项目目录。  
2. 脚本路径：项目安装优先 `<repo>/.cursor/scripts/lint-fix-changed.mjs`，否则 `~/.cursor/scripts/lint-fix-changed.mjs`。  
3. 按系统执行：  
   - PowerShell：`node "$env:USERPROFILE\\.cursor\\scripts\\lint-fix-changed.mjs"`  
   - CMD：`node "%USERPROFILE%\\.cursor\\scripts\\lint-fix-changed.mjs"`  
   - macOS/Linux：`node "$HOME/.cursor/scripts/lint-fix-changed.mjs"`  
4. 退出码 0：简要汇总。  
5. 非 0：展示终端输出；无法自动修的规则提示手改。  
6. 若用户要继续查类型，建议跑项目 `typecheck`。  

## 边界

- 适合「只处理当前改动」。  
- 不替代项目 `lint:fix`、`lint-staged`、`typecheck`。  
- 各仓库工具链不同，脚本会尽量探测本地可执行工具。  
