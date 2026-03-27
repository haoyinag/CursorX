# CursorX

**语言 / Language：** [English](README.en.md)

`CursorX` 收集了围绕 Cursor 的可安装命令、编辑器动作、使用技巧和配套说明。

如果你只是想尽快开始，用这两个入口就够了：

- 安装命令：[`slash-commands/README.md`](slash-commands/README.md)
- 安装器：[`packages/cursorx-cli/README.md`](packages/cursorx-cli/README.md)

如果你想先看目录分布，再读 [docs/content-map.md](docs/content-map.md)。

## 快速开始

可安装命令：

- [slash-commands/README.md](slash-commands/README.md)
- [slash-commands/catalog.md](slash-commands/catalog.md)

直接使用：

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

也可以先在仓库内直接跑 CLI：

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

命名：npm 包 `cursorx-cli`，命令行入口 `cursorx`。

常用的话也可以全局安装：

```bash
npm i -g cursorx-cli
cursorx list
cursorx doctor
cursorx install git-push --scope global
cursorx verify git-push --scope global
```

不要在业务项目里 `npm install cursorx-cli`：它是安装器，不是运行时依赖，会污染 `package.json` 和锁文件；用 `npx` 或全局装更合适。

装完建议先验一次：

```bash
cursorx verify git-push --scope global
```

通过后再到 Cursor 里试 `/git-push`。

旧方式仍可用：

```bash
node scripts/install-slash-command.mjs --command git-push --scope global
```

## 还有什么

- [`slash-commands/`](slash-commands/README.md)：可安装的 `/命令`
- [`packages/cursorx-cli/`](packages/cursorx-cli/README.md)：安装、验证和排查命令
- [`commands/`](commands/README.md)：`.json` 形式的编辑器动作素材
- [`skills/`](skills/README.md)：可复用的 AI 工作流说明
- [`tips/`](tips/README.md)：使用节奏和协作技巧
- [`configs/`](configs/README.md)：配置片段
- [`docs/`](docs/README.md)：开发、发布和策略文档

## 目录

```text
CursorX/
├── slash-commands/
│   ├── global/
│   ├── project/
│   ├── scripts/
│   ├── index.json
│   ├── catalog.md
│   └── README.md
├── packages/
│   └── cursorx-cli/
│       └── README.md
├── commands/
│   ├── development/
│   ├── productivity/
│   ├── ai-assistant/
│   ├── general/
│   ├── index.json
│   ├── catalog.md
│   └── README.md
├── skills/
├── tips/
├── configs/
├── docs/
├── CONTRIBUTING.md
└── README.md
```

## 常用入口

装命令：

- [slash-commands 说明](slash-commands/README.md)
- [slash-commands 目录](slash-commands/catalog.md)

按需继续看：

- [commands](commands/README.md)
- [skills](skills/README.md)
- [tips](tips/README.md)
- [configs](configs/README.md)
- [内容地图](docs/content-map.md)
- [路线图状态](docs/roadmap-status.md)

## 文档索引

- [slash-commands 说明](slash-commands/README.md)
- [内容地图](docs/content-map.md)
- [路线图状态](docs/roadmap-status.md)
- [发布流程](docs/release-process.md)
- [P2 进入前检查](docs/p2-readiness.md)
- [P2 路线选项](docs/p2-options.md)
- [P2 当前决策](docs/p2-decision.md)
- [路线 B 启动条件与最小实验](docs/p2-route-b-thresholds.md)
- [P2 观察记录模板](docs/p2-observation-template.md)
- [CLI 说明](packages/cursorx-cli/README.md)
- [CHANGELOG](CHANGELOG.md)
- [Editor Commands 规范](docs/command-development.md)
- [仓库策略](docs/repo-strategy.md)
- [快速开始](docs/getting-started.md)
- [贡献指南](CONTRIBUTING.md)
- [Skills 开发](docs/skill-development.md)

## 许可证

[MIT License](LICENSE)。
