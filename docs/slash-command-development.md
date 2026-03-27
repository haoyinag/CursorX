# Slash Commands 开发规范

这份文档定义 `CursorX` 中 Markdown slash commands 的组织方式、安装约定和提交流程。

## 设计原则

- 一个命令文件对应一个 `/命令名`
- 通用命令优先放在 `slash-commands/global/`
- 项目模板或项目私有规则优先放在 `slash-commands/project/`
- 如果命令依赖脚本，脚本放在 `slash-commands/scripts/`

## 文件命名

- 使用英文 kebab-case
- 文件名通常直接对应命令名
- 例如 `git-push.md` 会对应 `/git-push`

## 推荐结构

推荐包含以下信息：

- 命令目标
- `${user_input}` 的使用方式
- 必须遵守的规则
- 执行步骤
- 失败处理
- 适用边界

## 索引维护要求

新增 slash command 时，必须同步更新：

- [`slash-commands/index.json`](../slash-commands/index.json)
- [`slash-commands/catalog.md`](../slash-commands/catalog.md)

如果依赖脚本，也要同步补齐：

- `scripts/install-slash-command.mjs`
- `scripts/install-slash-command.ps1`

至少保证索引里正确声明命令路径、可安装范围和配套脚本。

## 安装约定

支持两个范围：

- `global`：安装到 `~/.cursor/commands/`
- `project`：安装到 `<repo>/.cursor/commands/`

如果依赖脚本，对应复制到：

- `~/.cursor/scripts/`
- `<repo>/.cursor/scripts/`

## 审核标准

优先收录满足这些条件的 slash commands：

- 可以直接在聊天或 Agent 中通过 `/命令名` 使用
- 适合跨仓库复用，或明确是项目模板
- 不把某个仓库的私有规则硬塞进通用命令
- 安装路径和依赖脚本说明清楚
