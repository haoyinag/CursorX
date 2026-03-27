# CursorX

`CursorX` 是一个围绕 Cursor 的资源仓库，重点收录可复用的自定义命令、Skills 推荐、配置建议和使用经验。

当前仓库的第一优先级是把 `commands/` 做成一个可以直接挑选、直接复用、方便持续扩展的命令库。

## 仓库定位

- `commands/`：可复用的自定义命令库，是当前核心内容
- `skills/`：Skills 推荐、整理和使用说明
- `tips/`：工作流、提问方式和效率技巧
- `configs/`：配置示例与推荐做法
- `docs/`：项目规范、开发说明和贡献文档

## 项目结构

```text
CursorX/
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

## 从哪里开始

如果你是第一次使用这个仓库，推荐按这个顺序浏览：

1. 阅读 [快速开始](docs/getting-started.md)
2. 进入 [命令库说明](commands/README.md)
3. 查看 [命令目录清单](commands/catalog.md)
4. 需要贡献时阅读 [贡献指南](CONTRIBUTING.md)

## `commands/` 的使用方式

`commands/` 采用“一文件一命令”的组织方式，方便你按需挑选。

推荐使用流程：

1. 在 [命令目录清单](commands/catalog.md) 中找到目标命令
2. 打开对应的 `.json` 文件查看命令内容
3. 通过 Cursor 当前版本支持的命令管理方式导入或同步该命令
4. 重载 Cursor 窗口，确认命令可以被搜索和触发

说明：

- 仓库中的 `commands/index.json` 是给人和脚本读取的索引文件，不直接作为运行时命令使用
- 实际命令内容以各分类目录下的 `.json` 文件为准
- 不同 Cursor 版本对命令导入方式可能有差异，建议优先参考你当前版本中的 `/commands` 或命令管理入口

## 内容规划

### 自定义命令

当前重点会放在这些方向：

- Git 工作流
- 重构与代码质量
- 文档生成与整理
- 日常高频提效动作

### Skills

`skills/` 更适合作为“推荐与整理”目录，而不是简单堆砌文件。后续会逐步补齐：

- 使用场景
- 来源说明
- 适配版本
- 效果预期

### 配置与技巧

`configs/` 和 `tips/` 的目标不是提供大量碎片内容，而是沉淀成有复用价值的模板和最佳实践。

## 对贡献者的约定

如果你准备提交内容，建议遵循这两个原则：

- 先保证“能直接用”，再追求“看起来丰富”
- 先补说明、索引和适用场景，再扩数量

更多细节见：

- [贡献指南](CONTRIBUTING.md)
- [命令开发规范](docs/command-development.md)
- [Skills 开发说明](docs/skill-development.md)

## 许可证

本项目采用 [MIT License](LICENSE)。
