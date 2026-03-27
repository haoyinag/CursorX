# 贡献指南

`CursorX` 欢迎贡献，但这个仓库不追求“内容越多越好”，而是优先追求“内容可复用、说明完整、结构稳定”。

## 贡献前先了解这三个原则

- 先保证内容能直接用，再追求数量
- 先补说明、索引和适用场景，再补文件
- 同类内容尽量遵循统一结构，避免仓库长成资料堆

## 贡献类型

### 自定义命令

命令相关贡献是当前最优先的方向。

要求：

1. 先区分你提交的是 `slash-commands` 还是 `commands`
2. `slash-commands` 遵循 [Slash Commands 开发规范](./docs/slash-command-development.md)
3. `commands` 遵循 [Editor Commands 开发规范](./docs/command-development.md)
4. 同步更新对应目录下的索引和目录清单
5. 写清使用场景、前置条件和主要价值

如果你的改动涉及仓库定位、安装入口或未来 CLI 方向，也请同步检查：

- [仓库策略说明](./docs/repo-strategy.md)
- [CLI 预留目录说明](./packages/cursorx-cli/README.md)

### Skills 推荐

适合提交到 `skills/` 的内容应当具备这些信息：

- 来源
- 适用场景
- 核心能力
- 使用说明

参考文档：

- [Skills 开发说明](./docs/skill-development.md)

### 使用技巧

放在 `tips/` 的内容，建议满足：

- 有具体场景
- 有可操作步骤
- 不只是概念性描述

### 配置分享

放在 `configs/` 的内容，建议满足：

- 说明适用平台或版本
- 说明配置影响
- 说明潜在冲突或注意事项

## 推荐提交流程

1. Fork 本仓库
2. 创建分支
3. 完成内容修改
4. 自查结构、链接和说明
5. 提交 Pull Request

如果涉及 `commands/`，建议在提交前运行：

```bash
node scripts/validate-commands.mjs
```

如果涉及 `slash-commands/`，建议至少实际试一次安装脚本：

```bash
node scripts/install-slash-command.mjs --list
```

## 对命令贡献者的额外要求

如果你提交的是命令，请特别检查：

1. 命令文件名是否清晰
2. 是否选对了命令形态：slash command 还是 editor command
3. 对于 editor commands，JSON 是否有效
4. 对于 slash commands，安装路径和配套脚本是否说明清楚
5. 目录清单与索引是否同步更新

## Commit 消息建议

建议采用 Conventional Commits 风格：

```text
type(scope): description
```

常见类型：

- `feat`
- `fix`
- `docs`
- `refactor`
- `chore`

示例：

```text
feat(slash-commands): add lint-fix installer support
feat(commands): add quick chat editor command
docs(repo): clarify slash vs editor commands
```

## 提交被接受的常见特征

- 能解决真实问题
- 其他用户可以复用
- 文档和文件同步更新
- 不依赖私有环境

## 许可证

通过贡献代码，你同意你的贡献将采用项目当前的 [MIT License](./LICENSE)。
