# Cursor Slash Commands

语言：[English](README.en.md)

`slash-commands/` 是 CursorX **当前唯一主安装入口**：聊天 / Agent 输入框里用 `/命令名`。

和仓库里的 `commands/*.json` 不同，这里是 **Markdown 原生 slash**，更适合：

- 全局安装，自用  
- 项目安装，跟仓库走  
- 复制到别的仓库继续用  
- 作为未来 CLI 的稳定命令源  

## 目录

```text
slash-commands/
├── global/      # 通用；可装全局或项目
├── project/     # 项目定制模板或示例
├── scripts/     # 部分命令依赖的脚本
├── index.json   # 给安装脚本用（勿手改流程外语义）
├── catalog.md
└── README.md
```

## 安装范围

**全局** — 只影响当前用户、跨仓库复用：

- 命令：`~/.cursor/commands/`
- 脚本：`~/.cursor/scripts/`

**项目** — 跟仓库、可进版本控制：

- 命令：`<repo>/.cursor/commands/`
- 脚本：`<repo>/.cursor/scripts/`

## 怎么装

### 1. CLI（仓库内）

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

发布后可用 `npx cursorx-cli …`；包名 `cursorx-cli`，入口名 `cursorx`。长期使用可 `npm i -g cursorx-cli`。

**不要在业务项目里** `npm install cursorx-cli` 当依赖——它的职责是把命令装进 Cursor 目录，不参与应用构建。

### 2. 安装脚本

```bash
node scripts/install-slash-command.mjs --command git-push --scope global
node scripts/install-slash-command.mjs --command lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

PowerShell：

```powershell
./scripts/install-slash-command.ps1 -Command git-push -Scope global
./scripts/install-slash-command.ps1 -Command lint-fix -Scope project -RepoPath D:\work\code\my-repo -WithScripts
```

`packages/cursorx-cli/` 与 `scripts/install-slash-command.*` 都是把文件拷到 Cursor 实际识别的目录；`doctor` / `verify` 做装后自检。

**最小验证：** `cursorx install git-push --scope global` → `verify` → 在 Chat 里输入 `/git-push`。

### 3. 手动

1. [catalog.md](catalog.md) 找命令  
2. 把对应 `.md` 拷到目标 `commands/`  
3. 若依赖脚本，同步 `scripts/`  
4. 重启或重载 Cursor  

## 当前主推命令

`/git-push`、`/lint-fix`、`/staged-review`、`/test-plan`、`/pr-summary`、`/readme-refresh`、`/risk-scan`、`/diff-summary`、`/migration-note`、`/release-notes`、`/changelog-entry`、`/upgrade-checklist`

详情 [catalog.md](catalog.md)。

**按流程序列理解：**

- Git 收尾：`/lint-fix` → `/staged-review` → `/git-push`  
- 提测前：`/test-plan` → `/staged-review`  
- PR 前：`/pr-summary`  
- 文档：`/readme-refresh`  
- 风险：`/risk-scan`  
- 交接：`/diff-summary`  
- 迁移说明：`/migration-note`  
- 版本说明：`/release-notes`  
- 增量记录：`/changelog-entry`  
- 升级步骤：`/upgrade-checklist`  

## 和 `commands/` 的区别

- `slash-commands/`：原生 slash，**global / project** 语义清楚  
- `commands/`：编辑器命令素材库  

要稳定复用到别的仓库，**优先 slash**。

## 与 CLI

CLI 说明见 [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)。规划上 CLI 读 [`slash-commands/index.json`](index.json) —— **命令源在 `slash-commands/`，CLI 是安装与分发层**，不是第二套命令体系。
