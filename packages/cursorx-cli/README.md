[English](README.en.md) · 中文

# cursorx-cli

`cursorx-cli` 是 CursorX 的**最小可运行 CLI**，用来验证以后统一的安装入口。当前已具备可打包、可往 npm 推的形态；**`cursorx-cli@0.3.2`** 对应本批安装、自检与命令数据能力。

命名已固定：

- npm 包名：`cursorx-cli`
- 命令行：`cursorx`

## 用法（仓库内）

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

`help`、`list`、`doctor`、`install`、`verify` 等输出已做终端友好处理，窄屏或无颜色环境会自动降级。

发布到 npm 后推荐：

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

或全局安装：

```bash
npm i -g cursorx-cli
cursorx list
cursorx doctor
cursorx install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
cursorx verify lint-fix --scope project --repo D:/work/code/my-repo
```

**不要在业务项目里** `npm install cursorx-cli`：这是命令安装器，不是运行时依赖，会污染 `package.json`、锁文件和 `node_modules`，对应用本身无收益。

## 为何更接近可发包形态

- 独立 `package.json`、`bin/`、`src/`
- 打包携带自有 `slash-commands/` 数据
- `prepack` 会同步仓库根目录最新命令数据（见根目录脚本）

## 职责（当前与后续）

- 读 [`slash-commands/index.json`](../../slash-commands/index.json)
- 提供统一安装，如 `cursorx install git-push --scope global`
- 列出命令、装到 global/project、同步配套脚本
- 安装后自检：`cursorx doctor`、`cursorx verify <command-id> --scope <global|project> [--repo <path>]`
- 作为仓库内安装脚本的演进，不另起命令源

## 自检

- **`doctor`**：检查 Cursor 命令目录是否存在，并给下一步建议  
- **`verify`**：确认指定命令文件与配套脚本是否落在目标目录  

最小验证链：

```bash
cursorx install git-push --scope global
cursorx verify git-push --scope global
```

通过后可在 Cursor 聊天里试 `/git-push`。若未出现，先重载或重启 Cursor。

## 与旧安装器的关系

仓库仍保留兼容安装器：

- [`scripts/install-slash-command.mjs`](../../scripts/install-slash-command.mjs)
- [`scripts/install-slash-command.ps1`](../../scripts/install-slash-command.ps1)

`packages/cursorx-cli/` 为新 CLI；`install-slash-command.mjs` 为兼容包装。二者共用同一套命令索引与安装语义。

## 发布后可继续补的方向

1. 在更多干净环境跑通 `doctor` / `verify`  
2. 继续补高价值 slash commands  
3. changelog / release notes 更清晰  
4. 再评估 Plugin / Marketplace  

包内检查：

```bash
npm run list
npm run check
```

版本历史见 [`CHANGELOG.md`](./CHANGELOG.md)。

## 何时值得独立成 npm 包

- 需要独立版本号与 changelog  
- 安装器发布频率明显高于内容更新  
- 用户把「装命令」当独立产品  
- 需要 `npx`、`npm i -g` 或 CI 分发  

## 目录

- `package.json` — 包元数据  
- `bin/cursorx.js` — 入口  
- `src/cli.mjs` — 参数与子命令  
- `src/lib.mjs` — 安装核心  
- `slash-commands/` — 随包分发的命令数据（由根目录同步，勿与 `slash-commands/` 源重复手改）
