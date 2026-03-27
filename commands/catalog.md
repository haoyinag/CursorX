# 命令目录清单

这个文件面向“我要挑命令来用”的使用者；如果你需要做自动化处理、过滤或校验，请优先使用 [index.json](index.json)。

## 使用建议

- 先看命令说明，确认是否匹配你的工作流
- 再看前置条件，确认当前 Cursor 版本和场景可用
- 最后导入单个命令，而不是一次性把所有内容都塞进自己的配置

## 开发流程

### `git-smart-commit`

- 文件：[`commands/development/git-smart-commit.json`](development/git-smart-commit.json)
- 标题：`Git 智能提交`
- 适用场景：已经整理完改动，希望快速生成更准确的提交信息
- 前置条件：当前工作区已打开 Git 仓库
- 主要价值：减少在 commit message 上反复修改的时间
- 标签：`git` `commit` `ai` `workflow`

### `git-open-source-control`

- 文件：[`commands/development/git-open-source-control.json`](development/git-open-source-control.json)
- 标题：`打开源代码管理`
- 适用场景：想快速查看当前仓库的改动、暂存区和提交入口
- 前置条件：当前工作区已打开 Git 仓库
- 主要价值：把高频的 SCM 视图切换动作显式化
- 标签：`git` `scm` `navigation` `workflow`

### `git-stage-all-changes`

- 文件：[`commands/development/git-stage-all-changes.json`](development/git-stage-all-changes.json)
- 标题：`Git 全量暂存`
- 适用场景：准备提交前，希望快速把当前改动统一加入暂存区
- 前置条件：当前工作区已打开 Git 仓库
- 主要价值：减少提交前重复点击暂存操作的时间
- 标签：`git` `stage` `commit` `workflow`

### `git-sync-current-branch`

- 文件：[`commands/development/git-sync-current-branch.json`](development/git-sync-current-branch.json)
- 标题：`Git 同步当前分支`
- 适用场景：完成提交后，希望快速同步本地与远端分支状态
- 前置条件：当前工作区已打开 Git 仓库
- 主要价值：让同步分支成为一个固定的工作流入口
- 标签：`git` `sync` `push` `pull`

## 效率工具

### `code-refactor-assistant`

- 文件：[`commands/productivity/code-refactor-assistant.json`](productivity/code-refactor-assistant.json)
- 标题：`代码重构助手`
- 适用场景：已经定位到一段代码，希望快速进入 AI 重构会话
- 前置条件：编辑器文本区域处于焦点，语言属于 JavaScript、TypeScript、Python 或 Java
- 主要价值：把高频的“进入重构协作”动作变成可搜索命令
- 标签：`refactor` `ai` `code-quality` `productivity`

### `reveal-active-file-in-explorer`

- 文件：[`commands/productivity/reveal-active-file-in-explorer.json`](productivity/reveal-active-file-in-explorer.json)
- 标题：`在资源管理器中定位当前文件`
- 适用场景：编辑到一半时，需要快速查看当前文件所在目录或同级文件
- 前置条件：当前内容来自本地文件
- 主要价值：减少在 Explorer 中手动翻目录的时间
- 标签：`navigation` `explorer` `file` `productivity`

### `search-in-workspace`

- 文件：[`commands/productivity/search-in-workspace.json`](productivity/search-in-workspace.json)
- 标题：`全局搜索当前工作区`
- 适用场景：需要做跨文件搜索、定位字符串、配置项或引用
- 前置条件：工作区已打开
- 主要价值：把全文检索动作固定成一个稳定入口
- 标签：`search` `workspace` `navigation` `productivity`

## AI 协作

### `open-chat-panel`

- 文件：[`commands/ai-assistant/open-chat-panel.json`](ai-assistant/open-chat-panel.json)
- 标题：`打开 AI Chat 面板`
- 适用场景：准备开始问答、解释代码或继续上下文对话
- 前置条件：工作区已打开，当前环境支持聊天面板命令
- 主要价值：把进入 AI 协作的动作固定下来
- 标签：`ai` `chat` `assistant` `workflow`

### `focus-chat-and-new-context`

- 文件：[`commands/ai-assistant/focus-chat-and-new-context.json`](ai-assistant/focus-chat-and-new-context.json)
- 标题：`聚焦 AI 会话`
- 适用场景：在写代码和问 AI 之间来回切换，希望快速把注意力拉回对话入口
- 前置条件：工作区或编辑器处于活动状态，当前环境支持聊天面板命令
- 主要价值：降低频繁切换上下文时的操作成本
- 标签：`ai` `chat` `focus` `productivity`

### `quick-chat`

- 文件：[`commands/ai-assistant/quick-chat.json`](ai-assistant/quick-chat.json)
- 标题：`打开 Quick Chat`
- 适用场景：只想快速提一个问题，不希望离开当前编辑视图
- 前置条件：工作区或编辑器处于活动状态，当前环境支持 Quick Chat 命令
- 主要价值：把临时问答变成轻量动作，而不是每次都切换完整面板
- 标签：`ai` `chat` `quick-chat` `productivity`

### `explain-selected-code`

- 文件：[`commands/ai-assistant/explain-selected-code.json`](ai-assistant/explain-selected-code.json)
- 标题：`解释当前选中代码`
- 适用场景：读到一段陌生代码时，希望直接让 AI 从选区出发解释实现思路
- 前置条件：编辑器中存在选区，当前环境支持带 `query` 参数的聊天命令
- 主要价值：把“先框选再提问”的动作标准化，减少重复写提示词
- 标签：`ai` `explain` `selection` `code-review`

### `generate-tests-for-selection`

- 文件：[`commands/ai-assistant/generate-tests-for-selection.json`](ai-assistant/generate-tests-for-selection.json)
- 标题：`为选中代码生成测试思路`
- 适用场景：想围绕当前代码片段快速产出测试点和边界条件
- 前置条件：编辑器中存在选区，当前环境支持带 `query` 参数的聊天命令
- 主要价值：把测试设计提示词沉淀成固定入口
- 标签：`ai` `test` `selection` `quality`

## 通用命令

### `open-command-palette`

- 文件：[`commands/general/open-command-palette.json`](general/open-command-palette.json)
- 标题：`打开命令面板`
- 适用场景：想继续搜索命令、功能入口或扩展动作
- 前置条件：当前环境支持命令面板
- 主要价值：把所有工作流的总入口显式保留为一个命令
- 标签：`commands` `navigation` `general` `productivity`

### `go-to-file`

- 文件：[`commands/general/go-to-file.json`](general/go-to-file.json)
- 标题：`快速打开文件`
- 适用场景：在大型项目中快速跳转目标文件
- 前置条件：工作区已打开
- 主要价值：让文件跳转成为稳定的高频动作入口
- 标签：`navigation` `file` `search` `general`

## 推荐组合

### Git 起步组合

- `git-smart-commit`
- `git-open-source-control`
- `git-stage-all-changes`
- `git-sync-current-branch`

适合刚开始搭建 Cursor Git 工作流、希望把查看改动、暂存、提交和同步串起来的用户。

### 重构提效组合

- `code-refactor-assistant`
- `reveal-active-file-in-explorer`
- `search-in-workspace`

适合经常用 AI 做结构调整、命名优化和小范围重构的用户。

### AI 协作起步组合

- `open-chat-panel`
- `focus-chat-and-new-context`
- `quick-chat`

适合高频在编辑和问答之间切换、希望把 AI 入口显式保留下来的用户。

### 代码理解组合

- `quick-chat`
- `explain-selected-code`

适合阅读陌生代码、需要快速理解选中片段含义和风险的用户。

### 测试辅助组合

- `quick-chat`
- `generate-tests-for-selection`

适合希望把“从代码片段出发生成测试思路”固定成工作流的用户。

### 通用导航组合

- `open-command-palette`
- `go-to-file`

适合希望先把最基础的导航和命令发现动作固定下来的用户。
