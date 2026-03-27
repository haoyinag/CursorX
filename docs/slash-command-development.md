[English](./slash-command-development.en.md)

# Slash Commands 开发约定

约定 `CursorX` 里 Markdown slash commands 的目录、安装约定与提交流程。

## 原则

- 一文件对应一个 `/command`  
- 通用命令优先放 `slash-commands/global/`  
- 项目模板或项目私有规则优先放 `slash-commands/project/`  
- 若依赖脚本，脚本放在 `slash-commands/scripts/`  

## 命名

- 英文 kebab-case  
- 文件名通常即命令名（如 `git-push.md` → `/git-push`）  

## 推荐正文结构

- 命令目标  
- `${user_input}` 用法  
- 必须遵守的规则  
- 执行步骤  
- 失败处理  
- 适用边界  

## 索引

新增时必须更新：

- [`slash-commands/index.json`](../slash-commands/index.json)  
- [`slash-commands/catalog.md`](../slash-commands/catalog.md)  

若依赖安装脚本，一并维护：

- `scripts/install-slash-command.mjs`  
- `scripts/install-slash-command.ps1`  

索引中需声明路径、可安装范围与配套脚本。

## 安装范围

- `global`：安装到 `~/.cursor/commands/`  
- `project`：安装到 `<repo>/.cursor/commands/`  

若依赖脚本，对应复制到：

- `~/.cursor/scripts/`  
- `<repo>/.cursor/scripts/`  

## 收录倾向

优先：可在聊天或 Agent 中通过 `/命令名` 使用；适合跨仓复用或明确为项目模板；不把某仓库的私有规则硬塞进通用命令；安装路径与脚本说明清楚。
