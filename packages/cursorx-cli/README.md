# cursorx-cli

`cursorx-cli` 是 `CursorX` 的最小可运行 CLI 原型，用来验证未来的统一安装入口。

当前它已经具备“可打包、可继续推进到 npm”的基本形态，并且 `cursorx-cli@0.1.0` 已成功发布到 npm。

命名策略已经固定：

- npm 包名：`cursorx-cli`
- 命令行入口：`cursorx`

## 当前用法

直接在仓库根目录执行：

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js --version
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
node packages/cursorx-cli/bin/cursorx.js verify lint-fix --scope project --repo D:/work/code/my-repo
```

未来发布到 npm 后，推荐这两种用法：

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

或者全局安装后使用：

```bash
npm i -g cursorx-cli
cursorx list
cursorx doctor
cursorx install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
cursorx verify lint-fix --scope project --repo D:/work/code/my-repo
```

不推荐在业务项目里执行：

```bash
npm install cursorx-cli
```

因为 `cursorx-cli` 是命令安装器，不是项目运行时依赖。把它装进业务项目会污染 `package.json`、锁文件和 `node_modules`，但不会给应用本身带来价值。

## 为什么它现在比之前更接近可发布包

当前这个包已经具备这些条件：

- 独立 `package.json`
- 独立 `bin/` 命令入口
- 独立 `src/` 安装逻辑
- 打包时会携带自己的 `slash-commands/` 数据
- `prepack` 会自动同步仓库根目录下的最新命令数据

## 预期职责

当前和未来都适合承担这些职责：

- 读取 [`slash-commands/index.json`](../../slash-commands/index.json)
- 提供统一安装命令，例如 `cursorx install git-push --scope global`
- 支持列出可用命令、安装到全局或项目范围、同步配套脚本
- 支持安装后自检，例如 `cursorx doctor`、`cursorx verify git-push --scope global`
- 作为仓库内安装脚本的升级版，而不是另起一套命令源

## 自检命令

当前 CLI 已内置两类自检：

- `cursorx doctor`
- `cursorx verify <command-id> --scope <global|project> [--repo <path>]`

其中：

- `doctor`：检查当前 Cursor 命令目录是否存在，并给出下一步验证建议
- `verify`：检查指定命令文件是否真的装到了目标目录，配套脚本是否齐全

推荐安装后的最小验证链路：

```bash
cursorx install git-push --scope global
cursorx verify git-push --scope global
```

如果验证通过，再去 Cursor chat 里输入：

```text
/git-push
```

如果命令没有立即出现，优先尝试重载或重启 Cursor。

## 当前与旧安装器的关系

当前仓库仍保留兼容安装器：

- [`scripts/install-slash-command.mjs`](../../scripts/install-slash-command.mjs)
- [`scripts/install-slash-command.ps1`](../../scripts/install-slash-command.ps1)

其中：

- `packages/cursorx-cli/`：新 CLI 原型
- `scripts/install-slash-command.mjs`：兼容旧调用方式的包装层

两者共用同一套命令索引和安装语义。

## 发布前还需要做什么

后续继续演进前，建议优先补这几项：

1. 补真实仓库地址、issues 地址和 homepage
2. 在更多干净环境中验证 `doctor / verify`
3. 继续增加高价值 slash commands
4. 再评估何时进入 Plugin / Marketplace 形态

当前包内也已经提供基础检查脚本：

```bash
npm run list
npm run check
```

## 何时值得从这里演进为独立包

当出现下面任一情况时，可以考虑真正初始化 npm 包：

- 需要独立版本号和 changelog
- 安装器发布频率明显高于资源内容更新频率
- 用户开始明确把“安装命令”视为独立产品
- 需要支持 `npx`、`npm install -g` 或 CI 分发流程

## 目录说明

- `package.json`：CLI 包元数据
- `bin/cursorx.js`：命令入口
- `src/cli.mjs`：参数解析与子命令路由
- `src/lib.mjs`：命令安装核心逻辑
- `slash-commands/`：随包分发的命令数据
