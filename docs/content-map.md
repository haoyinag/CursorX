# 内容地图

这份文档回答一个简单问题：进入 `CursorX` 之后，应该先去哪一层找内容。

## 如果你想直接安装后使用

优先看：

- [`slash-commands/README.md`](../slash-commands/README.md)
- [`slash-commands/catalog.md`](../slash-commands/catalog.md)
- [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)

适合场景：

- 想把命令安装到 Cursor 里直接通过 `/命令名` 使用
- 想区分 `global` 和 `project` 两种安装范围
- 想通过 `cursorx install / verify / doctor` 完成安装与自检

## 如果你想找编辑器动作素材

优先看：

- [`commands/README.md`](../commands/README.md)
- [`commands/catalog.md`](../commands/catalog.md)

适合场景：

- 想找 Quick Chat、打开命令面板、打开聊天面板之类的 editor command
- 想把常见动作包装成可搜索、可绑定的命令
- 想参考 `.json` 命令定义的组织方式

注意：

- 这一层更像“素材库”和“参考层”
- 它不是当前仓库主安装入口

## 如果你想补工作习惯和协作方法

优先看：

- [`tips/README.md`](../tips/README.md)

适合场景：

- 想改进提问方式
- 想提升上下文管理能力
- 想把 AI 协作节奏变得更稳定

## 如果你想摘取配置片段

优先看：

- [`configs/README.md`](../configs/README.md)

适合场景：

- 想改善 diff 阅读体验
- 想固定常用快捷键
- 想减少工作区噪声和提交噪声

## 如果你想评估或设计 Skills

优先看：

- [`skills/README.md`](../skills/README.md)
- [`docs/skill-development.md`](./skill-development.md)

适合场景：

- 想整理一类可重复的 AI 工作流
- 想为团队沉淀固定的提示词骨架
- 想先评估 Skill 是否值得纳入工作流

## 推荐最小路径

如果你第一次接触这个仓库，建议按这个顺序：

1. 先看 [`slash-commands/README.md`](../slash-commands/README.md)
2. 再看 [`docs/getting-started.md`](./getting-started.md)
3. 然后按需进入：
   - 想直接用命令：继续看 `cursorx-cli`
   - 想找素材：看 `commands/`
   - 想找方法：看 `tips/`
   - 想找配置：看 `configs/`
   - 想找 Skill 设计：看 `skills/`
