# Cursor Editor Commands

`commands/` 存放的是 `.json` 形式的编辑器命令包装与快捷动作素材库。

它和 [`slash-commands/`](../slash-commands/README.md) 不是同一种东西：

- `slash-commands/`：原生 slash commands，可安装到全局或项目范围
- `commands/`：编辑器动作封装，更适合作为动作素材库和补充能力参考

在当前仓库策略里，这一层不是主产品，也不是未来 CLI 的首要分发对象。

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

如果你想从这里挑选 editor command，建议按下面顺序操作：

1. 先看 [catalog.md](catalog.md) 了解现有命令
2. 再看 [index.json](index.json) 获取标签、分类、前置条件等元数据
3. 最后打开具体的命令 JSON，确认内容是否符合你的工作流

## 安装说明

这部分内容当前不作为仓库主安装入口。

原因：

- 这批 `.json` 文件本质上是编辑器命令包装
- 其导入方式与 Cursor 版本、底层编辑器命令兼容性强相关
- 当前仓库还没有像 slash commands 那样稳定、已验证的统一安装语义

如果你的目标是“在别的仓库复用后立刻可用”，请优先使用 [`slash-commands/`](../slash-commands/README.md)。

如果你仍然想试用这部分内容，推荐做法是：

1. 从 [catalog.md](catalog.md) 找到目标动作
2. 打开具体 `.json` 查看底层命令名和适用条件
3. 在你当前 Cursor 版本里自行验证是否存在对应的命令管理入口
4. 在自己的环境中小范围试用，而不是直接全量导入

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
- 这些文件不是 slash commands，不能通过 `/命令名` 直接被 Cursor 发现

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

更详细的规范见 [editor commands 开发规范](../docs/command-development.md)。

## 当前方向

优先补齐这几类高价值命令：

- Git 工作流
- 重构与代码质量
- 文档生成
- 高频编辑操作

## 许可证

本目录内容遵循项目根目录的 [MIT License](../LICENSE)。
