[English](./command-development.en.md)

# Editor Commands 开发约定

约定 `CursorX` 里以 `.json` 描述的 editor commands：目录、最小字段、索引与提交流程。若要做的是 Cursor 原生 slash commands，请看 [`slash-commands/README.md`](../slash-commands/README.md) 与 [`slash-command-development.md`](./slash-command-development.md)。

## 原则

- 一文件一命令  
- 运行时 JSON 尽量小，优先兼容与可复制  
- 仓库级元数据集中在 [`commands/index.json`](../commands/index.json)  
- 命令要有明确场景；不要提交仅个人可用的封装  

## 目录

按用途放入其一：

- [`commands/development/`](../commands/development/)  
- [`commands/productivity/`](../commands/productivity/)  
- [`commands/ai-assistant/`](../commands/ai-assistant/)  
- [`commands/general/`](../commands/general/)  

跨场景通用时优先用 `tags` 表达，而不是新开分类。

## 命名

- 英文 kebab-case  
- 文件名体现用途  
- 避免 `helper`、`tool` 等模糊名  

示例：`git-smart-commit.json`、`review-selected-code.json`。避免：`my-command.json`、`awesome-tool.json`。

## 运行时 JSON 形态

推荐骨架：

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

字段：`title`（面板展示）、`description`、`command`（Cursor 命令 id）、`args`、`when`（上下文）、`tags`（筛选与维护）。

## 索引

新增命令必须更新 [`commands/index.json`](../commands/index.json)。每条至少含：`id`、`title`、`category`、`path`、`summary`、`tags`、`platform`、`requires`。

## 目录清单

同时更新 [`commands/catalog.md`](../commands/catalog.md)，至少：文件路径、场景、前置条件、主要价值。

## 提交前

1. JSON 合法  
2. 文件名与用途一致  
3. `description` 具体  
4. `when` 符合场景  
5. `tags` 可检索  
6. `index.json` 与 `catalog.md` 已同步  

建议再跑：

```bash
node scripts/validate-commands.mjs
```

## 收录倾向

优先：减少重复、沉淀稳定工作流、对他人可复用、不依赖私有路径或上下文。
