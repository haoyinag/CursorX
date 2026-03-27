# 命令目录

语言：[English](catalog.en.md)

给「要挑命令用」的人看；自动化、过滤、校验请用 [index.json](index.json)。

**建议：** 先看说明是否匹配工作流 → 再看前置条件 → **一次只导入少量**，不要全量塞进配置。

## 开发流程

### `git-smart-commit`

- 文件：[`commands/development/git-smart-commit.json`](development/git-smart-commit.json)
- 标题：`Git 智能提交`
- 场景：改动已整理好，想快速得到可用的提交说明  
- 前置：工作区是 Git 仓库  
- 价值：少在 commit message 上反复改  
- 标签：`git` `commit` `ai` `workflow`

### `git-open-source-control`

- 文件：[`commands/development/git-open-source-control.json`](development/git-open-source-control.json)
- 标题：`打开源代码管理`
- 场景：快速看改动、暂存、提交入口  
- 前置：Git 仓库已打开  
- 价值：把切 SCM 这件事固定成命令  
- 标签：`git` `scm` `navigation` `workflow`

### `git-stage-all-changes`

- 文件：[`commands/development/git-stage-all-changes.json`](development/git-stage-all-changes.json)
- 标题：`Git 全量暂存`
- 场景：提交前一次性暂存当前改动  
- 前置：Git 仓库已打开  
- 价值：少点几次暂存  
- 标签：`git` `stage` `commit` `workflow`

### `git-sync-current-branch`

- 文件：[`commands/development/git-sync-current-branch.json`](development/git-sync-current-branch.json)
- 标题：`Git 同步当前分支`
- 场景：提交后拉推同步当前分支  
- 前置：Git 仓库已打开  
- 价值：同步分支有固定入口  
- 标签：`git` `sync` `push` `pull`

### `open-problems-panel`

- 文件：[`commands/development/open-problems-panel.json`](development/open-problems-panel.json)
- 标题：`打开 Problems 面板`
- 场景：修 lint、类型或其它诊断时看错误列表  
- 前置：环境支持 Problems 面板命令  
- 价值：回到错误列表有稳定入口  
- 标签：`problems` `diagnostics` `quality` `development`

## 效率工具

### `code-refactor-assistant`

- 文件：[`commands/productivity/code-refactor-assistant.json`](productivity/code-refactor-assistant.json)
- 标题：`代码重构助手`
- 场景：已定位代码，想进 AI 重构会话  
- 前置：编辑器有焦点；语言为 JS/TS/Python/Java 之一  
- 价值：「进重构协作」可搜索、可绑定快捷键  
- 标签：`refactor` `ai` `code-quality` `productivity`

### `reveal-active-file-in-explorer`

- 文件：[`commands/productivity/reveal-active-file-in-explorer.json`](productivity/reveal-active-file-in-explorer.json)
- 标题：`在资源管理器中定位当前文件`
- 场景：编辑中要看当前文件所在目录或邻文件  
- 前置：当前文档来自本地文件  
- 价值：少在 Explorer 里翻目录  
- 标签：`navigation` `explorer` `file` `productivity`

### `search-in-workspace`

- 文件：[`commands/productivity/search-in-workspace.json`](productivity/search-in-workspace.json)
- 标题：`全局搜索当前工作区`
- 场景：跨文件搜字符串、配置、引用  
- 前置：工作区已打开  
- 价值：全文检索固定入口  
- 标签：`search` `workspace` `navigation` `productivity`

### `toggle-terminal`

- 文件：[`commands/productivity/toggle-terminal.json`](productivity/toggle-terminal.json)
- 标题：`切换终端面板`
- 场景：编辑与终端输出之间来回切  
- 前置：环境支持终端切换命令  
- 价值：少找面板入口  
- 标签：`terminal` `panel` `navigation` `productivity`

### `open-markdown-preview`

- 文件：[`commands/productivity/open-markdown-preview.json`](productivity/open-markdown-preview.json)
- 标题：`打开当前 Markdown 预览`
- 场景：写 README/CHANGELOG/文档时看排版  
- 前置：当前是 Markdown；环境支持预览命令  
- 价值：编写与预览切换更顺  
- 标签：`markdown` `preview` `docs` `productivity`

### `toggle-sidebar-visibility`

- 文件：[`commands/productivity/toggle-sidebar-visibility.json`](productivity/toggle-sidebar-visibility.json)
- 标题：`切换侧边栏显示`
- 场景：目录树与纯编辑区之间快速切换  
- 前置：环境支持侧边栏切换  
- 价值：布局切换成本低  
- 标签：`sidebar` `layout` `focus` `productivity`

### `split-editor-right`

- 文件：[`commands/productivity/split-editor-right.json`](productivity/split-editor-right.json)
- 标题：`向右拆分编辑器`
- 场景：并排对照代码、文档、diff、配置  
- 前置：环境支持拆分编辑器  
- 价值：对照工作更顺  
- 标签：`editor` `split` `layout` `productivity`

### `toggle-zen-mode`

- 文件：[`commands/productivity/toggle-zen-mode.json`](productivity/toggle-zen-mode.json)
- 标题：`切换禅模式`
- 场景：长时间阅读/重构/写文档，想减界面干扰  
- 前置：环境支持禅模式  
- 价值：快速进入专注状态  
- 标签：`zen` `focus` `layout` `productivity`

## AI 协作

### `open-chat-panel`

- 文件：[`commands/ai-assistant/open-chat-panel.json`](ai-assistant/open-chat-panel.json)
- 标题：`打开 AI Chat 面板`
- 场景：问答、解释代码、延续对话  
- 前置：工作区已打开；环境支持聊天面板  
- 价值：进 AI 协作有固定动作  
- 标签：`ai` `chat` `assistant` `workflow`

### `focus-chat-and-new-context`

- 文件：[`commands/ai-assistant/focus-chat-and-new-context.json`](ai-assistant/focus-chat-and-new-context.json)
- 标题：`聚焦 AI 会话`
- 场景：代码与对话之间切换，想快速回到对话  
- 前置：工作区或编辑器活动；环境支持聊天面板  
- 价值：降低切上下文成本  
- 标签：`ai` `chat` `focus` `productivity`

### `quick-chat`

- 文件：[`commands/ai-assistant/quick-chat.json`](ai-assistant/quick-chat.json)
- 标题：`打开 Quick Chat`
- 场景：临时问一句，不想离开当前编辑视图  
- 前置：工作区或编辑器活动；环境支持 Quick Chat  
- 价值：轻量问答，不必每次开全屏面板  
- 标签：`ai` `chat` `quick-chat` `productivity`

### `explain-selected-code`

- 文件：[`commands/ai-assistant/explain-selected-code.json`](ai-assistant/explain-selected-code.json)
- 标题：`解释当前选中代码`
- 场景：陌生代码，想从选区解释实现思路  
- 前置：有选区；环境支持带 `query` 的聊天命令  
- 价值：框选即问，少写重复提示  
- 标签：`ai` `explain` `selection` `code-review`

### `generate-tests-for-selection`

- 文件：[`commands/ai-assistant/generate-tests-for-selection.json`](ai-assistant/generate-tests-for-selection.json)
- 标题：`为选中代码生成测试思路`
- 场景：围绕片段想测试点与边界  
- 前置：有选区；环境支持带 `query` 的聊天命令  
- 价值：测试设计提示有固定入口  
- 标签：`ai` `test` `selection` `quality`

## 通用命令

### `open-command-palette`

- 文件：[`commands/general/open-command-palette.json`](general/open-command-palette.json)
- 标题：`打开命令面板`
- 场景：继续搜命令、功能、扩展动作  
- 前置：环境支持命令面板  
- 价值：总入口显式保留  
- 标签：`commands` `navigation` `general` `productivity`

### `go-to-file`

- 文件：[`commands/general/go-to-file.json`](general/go-to-file.json)
- 标题：`快速打开文件`
- 场景：大项目里跳文件  
- 前置：工作区已打开  
- 价值：文件跳转稳定入口  
- 标签：`navigation` `file` `search` `general`

### `save-all-files`

- 文件：[`commands/general/save-all-files.json`](general/save-all-files.json)
- 标题：`保存全部文件`
- 场景：跑检查、切任务、提交前一次性保存  
- 前置：环境支持「保存全部」  
- 价值：减少未保存导致的检查偏差  
- 标签：`save` `files` `general` `productivity`

### `toggle-panel`

- 文件：[`commands/general/toggle-panel.json`](general/toggle-panel.json)
- 标题：`切换底部面板`
- 场景：终端、输出、问题面板与纯编辑视图之间切换  
- 前置：环境支持底部面板切换  
- 价值：布局切换固定下来  
- 标签：`panel` `layout` `general` `productivity`

### `close-other-editors`

- 文件：[`commands/general/close-other-editors.json`](general/close-other-editors.json)
- 标题：`关闭其他编辑器`
- 场景：标签太多，想收拢上下文  
- 前置：环境支持「关闭其他编辑器」  
- 价值：降噪，适合 review/重构/写文档前  
- 标签：`editors` `cleanup` `focus` `general`

## 推荐组合

**Git 起步：** `git-smart-commit`、`git-open-source-control`、`git-stage-all-changes`、`git-sync-current-branch`、`open-problems-panel` — 适合刚搭 Cursor 开发流、把看改动→暂存→提交→同步→修问题串起来。

**重构提效：** `code-refactor-assistant`、`reveal-active-file-in-explorer`、`search-in-workspace`、`toggle-terminal`、`open-markdown-preview`、`toggle-sidebar-visibility`、`split-editor-right`、`toggle-zen-mode` — 适合经常用 AI 做结构调整、命名、小范围重构和文档。

**AI 协作起步：** `open-chat-panel`、`focus-chat-and-new-context`、`quick-chat` — 适合编辑与问答高频切换。

**读代码：** `quick-chat`、`explain-selected-code` — 适合快速理解选中片段。

**测思路：** `quick-chat`、`generate-tests-for-selection` — 适合从片段出发想测试。

**通用导航：** `open-command-palette`、`go-to-file`、`save-all-files`、`toggle-panel`、`close-other-editors` — 适合先固化基础导航与布局。
