# CursorX

`CursorX` 是一个围绕 Cursor 的资源总仓库。

它当前有一个主产品和一组内容层目录：

- 主产品：`slash-commands/`
- CLI 原型：`packages/cursorx-cli/`
- 内容层：`commands/`、`skills/`、`tips/`、`configs/`、`docs/`

如果你的目标是“安装后直接使用命令”，请优先从 `slash-commands/` 和 `cursorx-cli` 进入。

如果你的目标是“快速判断某类内容该去哪个目录找”，请先看：

- [docs/content-map.md](docs/content-map.md)

## Quick Start

先看可安装命令：

- [slash-commands/README.md](slash-commands/README.md)
- [slash-commands/catalog.md](slash-commands/catalog.md)

当前可直接运行的 CLI 原型：

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

未来发布到 npm 后，推荐使用：

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

因为 `cursorx-cli` 是安装器，不是项目运行时依赖。更推荐 `npx` 或全局安装，以避免污染项目的 `package.json` 和锁文件。

安装后推荐立刻做一次自检：

```bash
cursorx verify git-push --scope global
```

如果验证通过，再去 Cursor chat 里输入 `/git-push` 做最终确认。

兼容旧安装方式：

```bash
node scripts/install-slash-command.mjs --command git-push --scope global
```

## 仓库分层

### 主产品层

- `slash-commands/`：当前唯一主安装入口
- `packages/cursorx-cli/`：未来 npm CLI 的最小可运行版本

### 内容层

- `commands/`：editor commands 与动作素材库
- `skills/`：Skills 推荐和说明
- `tips/`：使用技巧与工作流
- `configs/`：配置建议
- `docs/`：规范、策略和开发文档

## 项目结构

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

## 命令类型

### `slash-commands/`

这是当前仓库唯一主安装入口。

说明：

- 只要你想“让别人安装后直接用”，就应该先考虑这里
- `cursorx-cli` 和安装脚本都会以这里的索引和目录结构为命令源

### `commands/`

这是编辑器命令包装库，主要存放 `.json` 形式的编辑器动作封装，例如快速打开文件、打开 Quick Chat、切换 SCM 视图等。

说明：

- `slash-commands/` 可以明确区分全局安装与项目安装
- `commands/` 当前仍以资料库和动作封装为主，不承诺统一的原生安装方式
- 如果你的目标是“在别的仓库也自然复用”，优先使用 `slash-commands/`

## 当前方向

- Git 工作流
- Lint / 测试辅助
- 可复用的 AI 提示词入口
- 重构与代码质量
- 文档生成与整理
- 日常高频提效动作

## 当前推荐入口

如果你希望从“直接可用”开始：

- [slash commands 说明](slash-commands/README.md)
- [slash commands 目录](slash-commands/catalog.md)

如果你希望从“内容层”开始：

- [editor commands 素材库](commands/README.md)
- [Skills 推荐](skills/README.md)
- [使用技巧](tips/README.md)
- [配置分享](configs/README.md)
- [内容地图](docs/content-map.md)

## 文档入口

- [slash commands 说明](slash-commands/README.md)
- [内容地图](docs/content-map.md)
- [路线图状态](docs/roadmap-status.md)
- [CLI 规划](packages/cursorx-cli/README.md)
- [仓库 Changelog](CHANGELOG.md)
- [editor commands 规范](docs/command-development.md)
- [仓库策略说明](docs/repo-strategy.md)
- [快速开始](docs/getting-started.md)
- [贡献指南](CONTRIBUTING.md)
- [Skills 开发说明](docs/skill-development.md)

## 许可证

本项目采用 [MIT License](LICENSE)。
