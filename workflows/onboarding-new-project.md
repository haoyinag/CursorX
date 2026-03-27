[English](onboarding-new-project.en.md) · 中文

# 新项目接入

在一个新仓库装好 CursorX 并跑通第一条工作流。

## 什么时候用

- 第一次用 CursorX
- 在新仓库里想用上 CursorX 的命令
- 帮同事的项目配置 CursorX

## 前置条件

- Node.js >= 18
- 一个 Git 仓库（已 `git init`）
- Cursor 编辑器

## 步骤

### 1. 了解可用命令

```bash
npx cursorx-cli list
```

会列出所有可安装的 slash command，包括名称、范围和简介。

先浏览一遍，不用全装。

### 2. 跑一次健康检查

```bash
npx cursorx-cli doctor
```

它会检查环境是否正常：Cursor 配置目录是否存在、命令安装位置是否可写。

有问题按提示修。

### 3. 装第一批命令

建议从最高频的两条开始：

```bash
npx cursorx-cli install git-push --scope global
npx cursorx-cli install staged-review --scope global
```

`global` 装一次全局可用；`project` 装进当前仓库（适合团队统一）。

### 4. 验证安装

```bash
npx cursorx-cli verify git-push --scope global
npx cursorx-cli verify staged-review --scope global
```

通过后在 Cursor 里试输入 `/git-push` 和 `/staged-review`。

### 5. 跑通第一条工作流

按 [每日提交](./daily-commit.md) 工作流试一遍：

1. 做一个小改动
2. `git add` 暂存
3. Cursor 中 `/staged-review`
4. Cursor 中 `/git-push fix: test cursorx setup`

跑通即说明安装成功。

### 6. 按需扩展

根据你的场景选装更多命令。推荐顺序：

| 场景 | 推荐命令 | 工作流 |
|------|----------|--------|
| 功能开发 | `lint-fix`、`test-plan` | [功能收尾](./feature-completion.md) |
| 提 PR | `pr-summary` | [PR 准备](./pr-preparation.md) |
| 发版 | `changelog-entry`、`release-notes`、`upgrade-checklist` | [发布周期](./release-cycle.md) |
| 文档 | `readme-refresh`、`migration-note` | [文档更新](./doc-update.md) |

批量安装示例：

```bash
npx cursorx-cli install lint-fix --scope global --with-scripts
npx cursorx-cli install test-plan --scope global
npx cursorx-cli install pr-summary --scope global
```

## 预期结果

- CursorX 命令已安装并可在 Cursor 中使用
- 至少跑通一条完整工作流
- 知道去哪里找更多命令和工作流

## 其他资源

- [slash-commands 目录](../slash-commands/catalog.md) — 所有可安装命令
- [工作流目录](./catalog.md) — 所有工作流
- [使用技巧](../tips/README.md) — 单点习惯和方法
- [配置片段](../configs/README.md) — 编辑器配置推荐

## 常见问题

**Q: `global` 和 `project` 怎么选？**

自己用选 `global`，团队统一选 `project`（会装进仓库的 `.cursor/` 目录）。

**Q: 不想全局安装 `cursorx-cli`？**

用 `npx cursorx-cli ...` 就行，不需要全局装。常用的话 `npm i -g cursorx-cli` 更方便。

**Q: 装错了想卸载？**

删除 `~/.cursor/commands/` 或 `.cursor/commands/` 里对应的 `.md` 文件。
