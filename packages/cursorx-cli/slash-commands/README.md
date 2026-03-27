# Cursor Slash Commands

`slash-commands/` 是 `CursorX` 当前唯一主安装入口，面向 Cursor 聊天和 Agent 输入框中的 `/命令名` 使用方式。

和仓库里的 `commands/*.json` 不同，这里的命令是原生 Markdown slash commands，天然更适合：

- 全局安装，只给自己用
- 项目安装，随仓库共享
- 复制到别的仓库继续复用
- 作为未来 CLI 的稳定命令源

## 目录结构

```text
slash-commands/
├── global/          # 通用命令，支持安装为全局或项目命令
├── project/         # 项目定制模板或示例
├── scripts/         # slash commands 依赖的配套脚本
├── index.json       # 机器可读索引，供安装脚本使用
├── catalog.md       # 人工可读目录
└── README.md
```

## 安装范围

### 全局安装

适合：

- 只想自己使用
- 不想影响团队
- 希望跨多个仓库复用同一套命令

目标目录：

- 命令：`~/.cursor/commands/`
- 脚本：`~/.cursor/scripts/`

### 项目安装

适合：

- 希望当前仓库下固定使用某个命令
- 希望与仓库的工作流规则绑定
- 希望把命令纳入版本控制

目标目录：

- 命令：`<repo>/.cursor/commands/`
- 脚本：`<repo>/.cursor/scripts/`

## 安装方式

### 方式一：使用 CLI 原型

当前仓库已经提供最小可运行版本：

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

命名策略：

- npm 包名：`cursorx-cli`
- 命令行入口：`cursorx`

未来发布到 npm 后，可直接使用：

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

如果你会长期使用，也可以全局安装：

```bash
npm i -g cursorx-cli
cursorx list
cursorx doctor
cursorx install git-push --scope global
cursorx verify git-push --scope global
```

不推荐在业务项目里执行：

```bash
npm install cursorx-cli
```

原因是它的职责是把命令安装到 Cursor 的命令目录，而不是作为项目依赖参与应用构建和运行。

### 方式二：使用安装脚本

推荐优先使用仓库自带脚本：

```bash
node scripts/install-slash-command.mjs --command git-push --scope global
node scripts/install-slash-command.mjs --command lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

在 Windows PowerShell 下也可以使用：

```powershell
./scripts/install-slash-command.ps1 -Command git-push -Scope global
./scripts/install-slash-command.ps1 -Command lint-fix -Scope project -RepoPath D:\work\code\my-repo -WithScripts
```

说明：

- `packages/cursorx-cli/` 是新的 CLI 原型
- `scripts/install-slash-command.*` 是兼容旧入口的包装层
- 它们的职责都是把命令复制到 Cursor 当前实际识别的目录中
- `doctor / verify` 用于安装后的自检，不需要重新拆命令体系

推荐安装后的最小验证链路：

1. 执行 `cursorx install git-push --scope global`
2. 执行 `cursorx verify git-push --scope global`
3. 去 Cursor chat 里输入 `/git-push`

### 方式三：手动复制

1. 从 [catalog.md](catalog.md) 找到目标命令
2. 复制对应 `.md` 文件到目标 `commands/` 目录
3. 如果该命令依赖脚本，再复制 `scripts/` 下的配套文件
4. 重启或重载 Cursor

## 当前命令

当前主推：

- `/git-push`
- `/lint-fix`
- `/staged-review`
- `/test-plan`
- `/pr-summary`
- `/readme-refresh`
- `/risk-scan`
- `/diff-summary`
- `/migration-note`
- `/release-notes`
- `/changelog-entry`
- `/upgrade-checklist`

详细说明见 [catalog.md](catalog.md)。

推荐按工作流理解这些命令：

- Git 收尾：`/lint-fix` -> `/staged-review` -> `/git-push`
- 提测前整理：`/test-plan` -> `/staged-review`
- PR 提交前：`/pr-summary`
- 文档同步：`/readme-refresh`
- 风险梳理：`/risk-scan`
- 交接摘要：`/diff-summary`
- 升级说明：`/migration-note`
- 版本说明：`/release-notes`
- 增量记录：`/changelog-entry`
- 升级动作：`/upgrade-checklist`

## 与 `commands/` 的区别

- `slash-commands/`：原生 slash commands，支持明确的 `global` / `project` 安装语义
- `commands/`：编辑器命令包装库，偏动作素材和能力补充

如果你想在别的仓库里稳定复用一个命令，优先从这里挑。

## 与未来 CLI 的关系

当前仓库已经为未来 CLI 预留了位置：

- [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)

规划上，CLI 会直接读取：

- [`slash-commands/index.json`](index.json)

也就是说，`slash-commands/` 是命令源，未来 CLI 是安装器和分发层，而不是第二套命令体系。
