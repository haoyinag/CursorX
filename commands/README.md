# Cursor 自定义命令库

`commands/` 是 `CursorX` 当前最核心的内容目录，目标不是简单存放若干 JSON，而是沉淀一个可以持续扩展、方便筛选、适合直接复用的命令库。

## 目录结构

```text
commands/
├── development/      # 开发流程相关
├── productivity/     # 通用提效动作
├── ai-assistant/     # AI 协作增强
├── general/          # 其他通用命令
├── index.json        # 机器可读索引
├── catalog.md        # 人工可读目录
└── README.md
```

## 目录中每类文件的职责

- 分类目录下的 `.json`：真正的命令定义文件
- `index.json`：命令索引、元数据、后续自动化的统一数据源
- `catalog.md`：给使用者快速浏览和挑选命令
- 各分类下的 `README.md`：说明这一类命令适合什么场景

## 推荐使用方式

如果你想从仓库中挑选命令，建议按下面顺序操作：

1. 先看 [catalog.md](catalog.md) 了解现有命令
2. 再看 [index.json](index.json) 获取标签、分类、前置条件等元数据
3. 最后打开具体的命令 JSON，确认内容是否符合你的工作流

## 安装说明

由于 Cursor 不同版本对自定义命令的管理入口可能不同，这个仓库不强依赖某一个固定文件路径，而采用“命令内容与命令导入流程分离”的方式维护。

推荐安装方式：

1. 在 Cursor 中打开当前版本的命令管理入口，例如 `/commands` 或其他自定义命令入口
2. 从本仓库复制你需要的命令定义内容
3. 导入或同步到你自己的 Cursor 命令配置中
4. 重载窗口后，使用 Command Palette 搜索命令标题

如果你的 Cursor 版本支持通过文件系统维护自定义命令，也建议只同步你真正需要的命令文件，而不是无脑全量复制整个目录。

## 文件命名约定

- 一个文件只放一个命令
- 文件名使用英文 kebab-case
- 文件名应能体现用途，例如 `git-smart-commit.json`

## 运行时命令格式

命令文件保持尽量简单，优先保证“复制后就能用”：

```json
{
  "title": "命令标题",
  "description": "命令说明",
  "command": "cursor.command.execute",
  "args": {
    "name": "实际执行的命令名"
  },
  "when": "条件表达式（可选）",
  "tags": ["tag-a", "tag-b"]
}
```

说明：

- 运行时命令定义尽量只保留命令执行所需字段
- 仓库级元数据统一维护在 `commands/index.json`
- 不把仓库说明字段直接混进运行时命令 JSON，可以降低兼容风险

## 贡献要求

新增命令时，至少同时更新这些内容：

1. 新增对应的命令 JSON
2. 更新 `commands/index.json`
3. 更新 `commands/catalog.md`
4. 补充使用场景、前置条件和限制说明

完成后建议运行：

```bash
node scripts/validate-commands.mjs
```

更详细的规范见 [命令开发规范](../docs/command-development.md)。

## 当前方向

优先补齐这几类高价值命令：

- Git 工作流
- 重构与代码质量
- 文档生成
- 高频编辑操作

## 许可证

本目录内容遵循项目根目录的 [MIT License](../LICENSE)。