[English](workspace-rhythm-skill.en.md) · 中文

# Workspace Rhythm Skill

- **名称**：`Workspace Rhythm Skill`
- **来源**：`CursorX custom draft`
- **场景**：长任务里让编辑、检查、终端、文档切换形成稳定节奏
- **能力**：判断当前任务更适合哪种布局；建议何时开关侧栏、面板、终端、预览；把零散动作收成固定工作流
- **用法**：
  1. 说明当前任务是写代码、修错、文档还是发版
  2. 让 Skill 建议本阶段适合留哪些面板
  3. 把重复动作收成快捷命令或配置片段
- **限制**：偏工作方法，不替代具体功能命令；布局偏好很个人时只采纳部分建议
- **阶段**：长任务、重构、发版前检查、集中写文档

## 为什么单独成 Skill

效率损失常来自**切换乱**，不是缺命令—把节奏说清楚更容易稳定产出。

## 提示词骨架

```text
Given the current task, suggest a focused workspace rhythm.
Cover:
1. which panels should stay open
2. which panels should stay hidden
3. when to switch layout modes
4. which repeated actions should become commands or shortcuts
```
