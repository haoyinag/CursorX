# cursorx-cli

[English](README.en.md) · 中文

`cursorx-cli` 用来把 CursorX 的 slash commands 安装到 Cursor 识别的目录里，并提供安装后的验证命令。

当前版本：**`cursorx-cli@0.3.3`**

命名：

- npm 包名：`cursorx-cli`
- 命令行：`cursorx`

## 直接使用

推荐：

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

长期使用也可以全局安装：

```bash
npm i -g cursorx-cli
cursorx list
cursorx doctor
cursorx install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
cursorx verify lint-fix --scope project --repo D:/work/code/my-repo
```

## 仓库内运行

在仓库根目录：

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js --version
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
node packages/cursorx-cli/bin/cursorx.js verify lint-fix --scope project --repo D:/work/code/my-repo
```

`help`、`list`、`doctor`、`install`、`verify` 的输出已针对终端做过整理，窄屏和无颜色环境会自动降级。

**不要在业务项目里** `npm install cursorx-cli`：这是命令安装器，不是运行时依赖，会污染 `package.json`、锁文件和 `node_modules`，对应用本身无收益。

## 常见命令

- 列出可用命令
- 安装到 `global` 或 `project`
- 同步命令依赖的配套脚本
- 安装后做自检：`cursorx doctor`、`cursorx verify <command-id> --scope <global|project> [--repo <path>]`

## 自检

- **`doctor`**：检查 Cursor 命令目录是否存在，并给下一步建议  
- **`verify`**：确认指定命令文件与配套脚本是否落在目标目录  

最小验证链：

```bash
cursorx install git-push --scope global
cursorx verify git-push --scope global
```

通过后可在 Cursor 聊天里试 `/git-push`。若未出现，先重载或重启 Cursor。

## 旧安装器

仓库仍保留兼容安装器：

- [`scripts/install-slash-command.mjs`](../../scripts/install-slash-command.mjs)
- [`scripts/install-slash-command.ps1`](../../scripts/install-slash-command.ps1)

需要发布、策略或演进背景时，再看：

- [`../../docs/repo-strategy.md`](../../docs/repo-strategy.md)
- [`../../docs/release-process.md`](../../docs/release-process.md)

## 包内检查

```bash
npm run list
npm run check
```

版本历史见 [`CHANGELOG.md`](./CHANGELOG.md)。

## 目录

- `package.json` — 包元数据  
- `bin/cursorx.js` — 入口  
- `src/cli.mjs` — 参数与子命令  
- `src/lib.mjs` — 安装核心  
- `slash-commands/` — 随包分发的命令数据（由根目录同步，勿与 `slash-commands/` 源重复手改）
