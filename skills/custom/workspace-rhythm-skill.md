# Workspace Rhythm Skill

- 名称：`Workspace Rhythm Skill`
- 来源：`CursorX custom draft`
- 适用场景：在长任务中，需要让编辑、检查、终端和文档切换形成稳定节奏
- 核心能力：
  - 识别当前任务更适合哪种工作区布局
  - 建议何时切换侧边栏、面板、终端和预览
  - 把零散动作归纳成固定工作流节奏
- 使用方式：
  1. 先说明当前任务属于编码、修错、文档还是发版
  2. 再让 Skill 建议当前阶段最适合保留哪些面板
  3. 最后把这些动作沉淀成快捷命令或配置片段
- 已知限制：
  - 更偏工作方法，不替代真实功能命令
  - 对非常个性化的布局偏好，建议只摘取部分建议
- 推荐阶段：长任务、重构、发版前检查、文档集中整理时

## 为什么值得保留为自定义 Skill

很多效率损失不是来自缺少命令，而是来自切换节奏混乱。把“工作区节奏”显式化后，更容易稳定产出。

## 提示词骨架

```text
Given the current task, suggest a focused workspace rhythm.
Cover:
1. which panels should stay open
2. which panels should stay hidden
3. when to switch layout modes
4. which repeated actions should become commands or shortcuts
```
