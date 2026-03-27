# 命令开发规范

这份文档定义 `CursorX` 中自定义命令的组织方式、最小格式要求和提交流程。

## 设计原则

- 一个文件只描述一个命令
- 运行时 JSON 保持最小化，优先保证兼容和可复制使用
- 仓库级元数据统一维护在 [`commands/index.json`](../commands/index.json)
- 命令必须有明确的适用场景，避免提交仅自己能用的私有封装

## 放置位置

按用途放入以下目录之一：

- [`commands/development/`](../commands/development/)
- [`commands/productivity/`](../commands/productivity/)
- [`commands/ai-assistant/`](../commands/ai-assistant/)
- [`commands/general/`](../commands/general/)

如果一个命令跨多个场景通用，优先通过 `tags` 表达复用性，而不是随意新增分类。

## 文件命名

- 使用英文 kebab-case
- 文件名应该体现用途
- 避免使用 `helper`、`tool` 这类含义模糊的名字

推荐：

- `git-smart-commit.json`
- `review-selected-code.json`

不推荐：

- `my-command.json`
- `awesome-tool.json`

## 运行时命令格式

推荐模板：

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

字段约定：

- `title`：用户在命令面板里看到的标题
- `description`：说明用途和使用场景
- `command`：Cursor 命令标识符
- `args`：底层命令参数
- `when`：可用上下文
- `tags`：便于筛选和维护

## 索引维护要求

新增命令时，必须同步更新 [`commands/index.json`](../commands/index.json)。

每个索引条目至少包含：

- `id`
- `title`
- `category`
- `path`
- `summary`
- `tags`
- `platform`
- `requires`

## 目录清单维护要求

新增命令时，必须同步更新 [`commands/catalog.md`](../commands/catalog.md)，至少补齐：

- 命令文件路径
- 适用场景
- 前置条件
- 主要价值

## 提交前检查

提交前请至少完成这些检查：

1. JSON 格式正确
2. 文件名与命令用途一致
3. `description` 不是空泛描述
4. `when` 表达式符合预期场景
5. `tags` 能帮助检索，而不是随意堆词
6. `index.json` 和 `catalog.md` 已同步更新

推荐再执行一次仓库自带校验脚本：

```bash
node scripts/validate-commands.mjs
```

## 审核标准

优先收录满足以下条件的命令：

- 能减少重复操作
- 能沉淀稳定工作流
- 对其他用户也有复用价值
- 不依赖私有路径、私有项目或私有上下文
