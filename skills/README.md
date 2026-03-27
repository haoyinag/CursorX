# Skills 推荐

`skills/` 用于整理和推荐适合 Cursor 的 Skills。它的目标不是简单收集文件，而是帮助使用者快速判断：

- 这个 Skill 解决什么问题
- 适合什么场景
- 值不值得放进自己的工作流

## 目录建议

```text
skills/
├── recommended/     # 推荐的外部 Skills
├── custom/          # 自定义或二次整理的 Skills
└── README.md
```

## 收录原则

- 优先收录已经验证过、可复用的内容
- 必须说明来源、场景和使用方式
- 不鼓励只提交文件而没有任何背景说明

## 推荐信息结构

无论是 `recommended/` 还是 `custom/`，都建议至少补齐这些信息：

- 名称
- 来源或作者
- 适用场景
- 核心能力
- 使用说明
- 已知限制

## 如何维护

如果你准备向这个目录补内容，建议同时补一份简短说明，避免后续使用者只能看到文件名却不知道为什么值得用。

更详细的约定见 [Skills 开发说明](../docs/skill-development.md)。

## 当前收录

### 推荐项

- [Repo Onboarding Skill](./recommended/repo-onboarding-skill.md)

### 自定义草案

- [Staged Review Skill](./custom/staged-review-skill.md)
- [Doc Refresh Skill](./custom/doc-refresh-skill.md)
- [Release Notes Skill](./custom/release-notes-skill.md)
- [Workspace Rhythm Skill](./custom/workspace-rhythm-skill.md)

这些条目当前以“说明文档 + 提示词骨架”为主，更适合先做评估和二次整理，再决定是否纳入你的长期工作流。

## 许可证

本目录内容遵循项目根目录的 [MIT License](../LICENSE)。