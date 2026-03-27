# CursorX

**语言 / Language：** [English](README.en.md)

`CursorX` 是围绕 Cursor 的资源总仓。

当前结构可以记成：**主产品 + 内容层**。

- 主产品：`slash-commands/`
- CLI 原型：`packages/cursorx-cli/`
- 内容层：`commands/`、`skills/`、`tips/`、`configs/`、`docs/`

想「装完就用」，从 `slash-commands/` 和 `cursorx-cli` 进；想「先搞清楚东西在哪」，看 [docs/content-map.md](docs/content-map.md)。

## 快速开始

可安装命令：

- [slash-commands/README.md](slash-commands/README.md)
- [slash-commands/catalog.md](slash-commands/catalog.md)

本地直接跑 CLI（仓库内）：

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

命名：npm 包 `cursorx-cli`，命令行入口 `cursorx`。

发布到 npm 之后推荐：

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

常用可全局安装：

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

## 分层

### 主产品

- `slash-commands/`：当前唯一主安装入口
- `packages/cursorx-cli/`：npm CLI 的最小可运行版

### 内容

- `commands/`：Editor Command 素材
- `skills/`、`tips/`、`configs/`：技能、技巧、配置
- `docs/`：规范与说明

## 目录示意

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

## 两种「命令」

**`slash-commands/`**

仓库里唯一承诺的主安装源；`cursorx-cli` 和安装脚本都认这里的索引和目录。

**`commands/`**

放 `.json` 形式的编辑器动作封装（如开文件、Quick Chat、SCM 等）。偏资料库，安装方式不统一；要可移植、可安装给别人用，优先走 `slash-commands/`。

## 方向（当前）

Git 工作流、Lint/测试、可复用 AI 入口、重构与质量、文档整理、日常高频动作。

## 常用入口

直接用：

- [slash-commands 说明](slash-commands/README.md)
- [slash-commands 目录](slash-commands/catalog.md)

从内容层逛：

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
