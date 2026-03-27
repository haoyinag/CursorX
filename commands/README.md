# Cursor 编辑器命令

语言：[English](README.en.md)

`commands/` 里放的是 **`.json` 形式的编辑器命令封装**，当作动作素材库和补充能力参考用。

和 [`slash-commands/`](../slash-commands/README.md) 不是一类东西：

| | `slash-commands/` | `commands/` |
|---|-------------------|-------------|
| 形态 | 原生 slash，可装全局或项目 | 编辑器命令封装 |
| 用途 | 聊天/Agent 里 `/命令名` | 命令面板、快捷键等 |

本仓库策略里，这一层**不是主产品**，也不是 CLI 的首要分发对象。

## 目录

```text
commands/
├── development/   # 开发流程
├── productivity/  # 提效
├── ai-assistant/  # AI 协作
├── general/       # 通用
├── index.json     # 机器可读索引
├── catalog.md     # 人工浏览
└── README.md
```

## 各文件干什么

- 分类下的 `.json`：命令定义本体  
- `index.json`：索引与元数据，给自动化用  
- `catalog.md`：给人快速挑命令  
- 各分类 `README.md`：这类命令适合什么场景  

## 怎么用

1. [catalog.md](catalog.md) 扫一眼有哪些命令  
2. [index.json](index.json) 看标签、分类、`requires`  
3. 打开具体 JSON，确认底层命令名是否和你当前 Cursor 版本一致  

## 安装

**这里不作为仓库主安装入口。** 原因是：`.json` 依赖 Cursor/底层命令 ID，版本差异大，仓库里也没有像 slash 那样统一、已跑通的安装语义。

若要在别的仓库里**稳定复用**，请用 [`slash-commands/`](../slash-commands/README.md)。

仍想试 `commands/` 时建议：

1. 从 [catalog.md](catalog.md) 选一个目标  
2. 读对应 JSON 里的命令与 `when`  
3. 在你本机 Cursor 里确认有对应入口  
4. **先少量导入试用**，不要一次全量  

## 手动验证顺序

1. `requires` 是否满足  
2. 在命令面板搜到底层命令是否存在  
3. 先试 1～2 个高频的  
4. 记下：是否省步骤、是否依赖焦点/视图、是否值得团队固化  

## 命名

- 一文件一命令  
- 英文 kebab-case  
- 文件名能说明用途，如 `git-smart-commit.json`  

## JSON 形状（运行时）

保持简单，便于复制使用：

```json
{
  "title": "命令标题",
  "description": "说明",
  "command": "cursor.command.execute",
  "args": { "name": "实际命令 id" },
  "when": "可选条件",
  "tags": ["tag-a", "tag-b"]
}
```

仓库级说明放在 `index.json`，不要塞进运行时 JSON，减少兼容风险。这些**不是** slash，不能靠 `/名字` 被发现。

## 贡献

新增命令时至少：

1. 新增 JSON  
2. 更新 `commands/index.json`  
3. 更新 `commands/catalog.md`  
4. 写清场景、前置条件、限制  

然后执行：

```bash
node scripts/validate-commands.mjs
```

细则见 [editor commands 开发规范](../docs/command-development.md)。

## 方向（优先补）

- Git 工作流  
- 重构与质量  
- 文档生成  
- 高频编辑操作  

## 许可证

本目录随项目根目录 [MIT License](../LICENSE)。
