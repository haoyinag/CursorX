# 贡献指南

**语言 / Language：** [English](CONTRIBUTING.en.md)

欢迎贡献。本仓不堆量：优先 **可复用、说明齐全、结构别乱**。

## 三条原则

1. 先能直接用，再谈数量  
2. 先补说明、索引、适用场景，再堆文件  
3. 同类内容结构对齐，避免变成杂物间  

## 可以贡献什么

### 命令（优先）

先分清你改的是 **`slash-commands`** 还是 **`commands`**。

1. `slash-commands` 跟 [Slash Commands 开发规范](./docs/slash-command-development.md)  
2. `commands` 跟 [Editor Commands 开发规范](./docs/command-development.md)  
3. 更新对应目录的索引和目录清单  
4. 写清场景、前置条件、价值  

若动到仓库定位、安装入口或 CLI 方向，对照：

- [仓库策略](./docs/repo-strategy.md)
- [CLI 说明](./packages/cursorx-cli/README.md)

### Skills

`skills/` 里建议写清：来源、场景、能力、怎么用。详见 [Skills 开发说明](./docs/skill-development.md)。

### 技巧

`tips/`：有具体场景、能照着做，别只写概念。

### 配置

`configs/`：平台/版本、影响、冲突或注意点。

## 提交流程

1. Fork → 分支 → 改完  
2. 自己过一遍结构、链接、说明  
3. 开 PR  

涉及 `commands/` 可先跑：

```bash
node scripts/validate-commands.mjs
```

涉及 `slash-commands/` 建议本地试装：

```bash
node scripts/install-slash-command.mjs --list
```

## 命令类 PR 多检查这几项

1. 文件名是否一眼能懂  
2. 形态选对：slash 还是 editor command  
3. editor：`JSON` 合法  
4. slash：安装路径、配套脚本是否写清  
5. 目录清单、索引是否同步  

## Commit 消息

建议 [Conventional Commits](https://www.conventionalcommits.org/)：

```text
type(scope): description
```

常用 `type`：`feat`、`fix`、`docs`、`refactor`、`chore`。

示例：

```text
feat(slash-commands): add lint-fix installer support
feat(commands): add quick chat editor command
docs(repo): clarify slash vs editor commands
```

## 容易合并的改动

- 解决真实问题  
- 别人能复用  
- 文档和文件一起更新  
- 不依赖私有环境  

## 许可证

贡献即表示你同意以当前项目的 [MIT License](./LICENSE) 授权。
