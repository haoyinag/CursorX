# Command catalog

Language: [中文](catalog.md)

For humans picking commands; automation and validation should use [index.json](index.json).

**Suggested order:** match workflow → check prerequisites → **import a few commands**, not the whole set at once.

## Development

### `git-smart-commit`

- File: [`commands/development/git-smart-commit.json`](development/git-smart-commit.json)
- Title (as in index): Git 智能提交
- Scenario: Changes are ready; you want a solid commit message quickly  
- Prereq: Workspace is a Git repo  
- Value: Less back-and-forth on commit messages  
- Tags: `git` `commit` `ai` `workflow`

### `git-open-source-control`

- File: [`commands/development/git-open-source-control.json`](development/git-open-source-control.json)
- Title: 打开源代码管理
- Scenario: Jump to SCM view for diffs, staging, commit  
- Prereq: Git repo open  
- Value: One explicit action for “open SCM”  
- Tags: `git` `scm` `navigation` `workflow`

### `git-stage-all-changes`

- File: [`commands/development/git-stage-all-changes.json`](development/git-stage-all-changes.json)
- Title: Git 全量暂存
- Scenario: Stage everything before a commit  
- Prereq: Git repo open  
- Value: Fewer staging clicks  
- Tags: `git` `stage` `commit` `workflow`

### `git-sync-current-branch`

- File: [`commands/development/git-sync-current-branch.json`](development/git-sync-current-branch.json)
- Title: Git 同步当前分支
- Scenario: After commit, sync current branch with remote  
- Prereq: Git repo open  
- Value: Stable entry for pull/push flow  
- Tags: `git` `sync` `push` `pull`

### `open-problems-panel`

- File: [`commands/development/open-problems-panel.json`](development/open-problems-panel.json)
- Title: 打开 Problems 面板
- Scenario: Fixing lint, types, or other diagnostics  
- Prereq: Problems panel command available  
- Value: Reliable way back to the error list  
- Tags: `problems` `diagnostics` `quality` `development`

## Productivity

### `code-refactor-assistant`

- File: [`commands/productivity/code-refactor-assistant.json`](productivity/code-refactor-assistant.json)
- Title: 代码重构助手
- Scenario: Code located; start an AI refactor session  
- Prereq: Editor focused; language is JS/TS/Python/Java  
- Value: “Start refactor” as a searchable command  
- Tags: `refactor` `ai` `code-quality` `productivity`

### `reveal-active-file-in-explorer`

- File: [`commands/productivity/reveal-active-file-in-explorer.json`](productivity/reveal-active-file-in-explorer.json)
- Title: 在资源管理器中定位当前文件
- Scenario: See the file’s folder and neighbors while editing  
- Prereq: Document is a local file  
- Value: Less manual tree navigation  
- Tags: `navigation` `explorer` `file` `productivity`

### `search-in-workspace`

- File: [`commands/productivity/search-in-workspace.json`](productivity/search-in-workspace.json)
- Title: 全局搜索当前工作区
- Scenario: Cross-file search for strings, config, refs  
- Prereq: Workspace open  
- Value: Stable entry for workspace search  
- Tags: `search` `workspace` `navigation` `productivity`

### `toggle-terminal`

- File: [`commands/productivity/toggle-terminal.json`](productivity/toggle-terminal.json)
- Title: 切换终端面板
- Scenario: Switch between editor and terminal output often  
- Prereq: Terminal toggle command available  
- Value: Less hunting for the panel  
- Tags: `terminal` `panel` `navigation` `productivity`

### `open-markdown-preview`

- File: [`commands/productivity/open-markdown-preview.json`](productivity/open-markdown-preview.json)
- Title: 打开当前 Markdown 预览
- Scenario: README/CHANGELOG/docs—check rendering  
- Prereq: Markdown file; preview command available  
- Value: Smoother edit/preview loop  
- Tags: `markdown` `preview` `docs` `productivity`

### `toggle-sidebar-visibility`

- File: [`commands/productivity/toggle-sidebar-visibility.json`](productivity/toggle-sidebar-visibility.json)
- Title: 切换侧边栏显示
- Scenario: Tree vs. full editor width  
- Prereq: Sidebar toggle available  
- Value: Cheaper layout switches  
- Tags: `sidebar` `layout` `focus` `productivity`

### `split-editor-right`

- File: [`commands/productivity/split-editor-right.json`](productivity/split-editor-right.json)
- Title: 向右拆分编辑器
- Scenario: Side-by-side code, docs, diff, config  
- Prereq: Split editor supported  
- Value: Easier comparison workflows  
- Tags: `editor` `split` `layout` `productivity`

### `toggle-zen-mode`

- File: [`commands/productivity/toggle-zen-mode.json`](productivity/toggle-zen-mode.json)
- Title: 切换禅模式
- Scenario: Long reads/refactors/docs—reduce chrome  
- Prereq: Zen mode toggle available  
- Value: Quick focus mode  
- Tags: `zen` `focus` `layout` `productivity`

## AI assistant

### `open-chat-panel`

- File: [`commands/ai-assistant/open-chat-panel.json`](ai-assistant/open-chat-panel.json)
- Title: 打开 AI Chat 面板
- Scenario: Q&A, explain code, continue thread  
- Prereq: Workspace open; chat panel command available  
- Value: Fixed “open AI chat” motion  
- Tags: `ai` `chat` `assistant` `workflow`

### `focus-chat-and-new-context`

- File: [`commands/ai-assistant/focus-chat-and-new-context.json`](ai-assistant/focus-chat-and-new-context.json)
- Title: 聚焦 AI 会话
- Scenario: Bounce between code and chat; refocus chat fast  
- Prereq: Workspace or editor active; chat available  
- Value: Lower context-switch cost  
- Tags: `ai` `chat` `focus` `productivity`

### `quick-chat`

- File: [`commands/ai-assistant/quick-chat.json`](ai-assistant/quick-chat.json)
- Title: 打开 Quick Chat
- Scenario: One quick question without leaving the editor  
- Prereq: Quick Chat available  
- Value: Lightweight questions without full panel  
- Tags: `ai` `chat` `quick-chat` `productivity`

### `explain-selected-code`

- File: [`commands/ai-assistant/explain-selected-code.json`](ai-assistant/explain-selected-code.json)
- Title: 解释当前选中代码
- Scenario: Unfamiliar code—explain from selection  
- Prereq: Selection exists; chat with `query` supported  
- Value: Select-then-ask, less boilerplate prompts  
- Tags: `ai` `explain` `selection` `code-review`

### `generate-tests-for-selection`

- File: [`commands/ai-assistant/generate-tests-for-selection.json`](ai-assistant/generate-tests-for-selection.json)
- Title: 为选中代码生成测试思路
- Scenario: Test ideas and edge cases from a snippet  
- Prereq: Selection; chat with `query` supported  
- Value: Test-design prompts as a fixed entry  
- Tags: `ai` `test` `selection` `quality`

## General

### `open-command-palette`

- File: [`commands/general/open-command-palette.json`](general/open-command-palette.json)
- Title: 打开命令面板
- Scenario: Search commands, features, extensions  
- Prereq: Command palette available  
- Value: Keep the “everything” entry explicit  
- Tags: `commands` `navigation` `general` `productivity`

### `go-to-file`

- File: [`commands/general/go-to-file.json`](general/go-to-file.json)
- Title: 快速打开文件
- Scenario: Jump to files in large repos  
- Prereq: Workspace open  
- Value: Stable quick-open entry  
- Tags: `navigation` `file` `search` `general`

### `save-all-files`

- File: [`commands/general/save-all-files.json`](general/save-all-files.json)
- Title: 保存全部文件
- Scenario: Before checks, task switch, or commit—save all  
- Prereq: Save-all command available  
- Value: Fewer “forgot to save” check mismatches  
- Tags: `save` `files` `general` `productivity`

### `toggle-panel`

- File: [`commands/general/toggle-panel.json`](general/toggle-panel.json)
- Title: 切换底部面板
- Scenario: Terminal, output, problems vs. bare editor  
- Prereq: Bottom panel toggle available  
- Value: Layout switching as a habit  
- Tags: `panel` `layout` `general` `productivity`

### `close-other-editors`

- File: [`commands/general/close-other-editors.json`](general/close-other-editors.json)
- Title: 关闭其他编辑器
- Scenario: Too many tabs—narrow focus  
- Prereq: Close-others command available  
- Value: Noise reduction before review/refactor/docs  
- Tags: `editors` `cleanup` `focus` `general`

## Suggested bundles

**Git starter:** `git-smart-commit`, `git-open-source-control`, `git-stage-all-changes`, `git-sync-current-branch`, `open-problems-panel`

**Refactor/productivity:** `code-refactor-assistant`, `reveal-active-file-in-explorer`, `search-in-workspace`, `toggle-terminal`, `open-markdown-preview`, `toggle-sidebar-visibility`, `split-editor-right`, `toggle-zen-mode`

**AI starter:** `open-chat-panel`, `focus-chat-and-new-context`, `quick-chat`

**Reading code:** `quick-chat`, `explain-selected-code`

**Test thinking:** `quick-chat`, `generate-tests-for-selection`

**Navigation:** `open-command-palette`, `go-to-file`, `save-all-files`, `toggle-panel`, `close-other-editors`
