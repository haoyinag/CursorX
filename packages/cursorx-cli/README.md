# cursorx-cli

`cursorx-cli` 是 `CursorX` 的最小可运行 CLI 原型，用来验证未来的统一安装入口。

当前它已经具备“可打包、可继续推进到 npm”的基本形态，但还没有正式发布。

## 当前用法

直接在仓库根目录执行：

```bash
node packages/cursorx-cli/bin/cursorx.mjs list
node packages/cursorx-cli/bin/cursorx.mjs --version
node packages/cursorx-cli/bin/cursorx.mjs install git-push --scope global
node packages/cursorx-cli/bin/cursorx.mjs install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

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
- 作为仓库内安装脚本的升级版，而不是另起一套命令源

## 当前与旧安装器的关系

当前仓库仍保留兼容安装器：

- [`scripts/install-slash-command.mjs`](../../scripts/install-slash-command.mjs)
- [`scripts/install-slash-command.ps1`](../../scripts/install-slash-command.ps1)

其中：

- `packages/cursorx-cli/`：新 CLI 原型
- `scripts/install-slash-command.mjs`：兼容旧调用方式的包装层

两者共用同一套命令索引和安装语义。

## 发布前还需要做什么

真正发布到 npm 前，建议至少再补这几项：

1. 确认最终包名
2. 补真实仓库地址、issues 地址和 homepage
3. 在干净环境中验证 `npm pack`
4. 决定对外推荐的调用方式，例如 `npx cursorx-cli list`

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
- `bin/cursorx.mjs`：命令入口
- `src/cli.mjs`：参数解析与子命令路由
- `src/lib.mjs`：命令安装核心逻辑
- `slash-commands/`：随包分发的命令数据
