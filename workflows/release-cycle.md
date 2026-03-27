[English](release-cycle.en.md) · 中文

# 发布周期

发版时写 changelog、release notes 和升级清单，把发布从「临时补洞」变成可重复流程。

## 什么时候用

- npm 包要发新版本
- 命令集有对外可见变化
- 一个迭代结束要出 release

## 前置准备

```bash
npx cursorx-cli install changelog-entry --scope global
npx cursorx-cli install release-notes --scope global
npx cursorx-cli install upgrade-checklist --scope global
```

## 步骤

### 1. `/changelog-entry` — 写 changelog 条目

输入 `/changelog-entry`。

可以指定版本：`/changelog-entry for cursorx-cli 0.3.2`。

它会基于 diff 和提交，按 Added / Changed / Fixed / Docs 归类，输出可直接粘贴进 CHANGELOG 的条目。

重点：写的是**用户可感知的变化**，不是文件级罗列。

把输出粘贴进项目的 `CHANGELOG.md`。

### 2. `/release-notes` — 写发布说明

输入 `/release-notes`。

可以指定受众：`/release-notes for npm users upgrading from 0.2.0`。

它会输出：

- **Highlights**：最值得知道的 2-4 条
- **Improvements**：细化改进
- **Notes**：安装、兼容、升级提醒

这段可以贴进 GitHub Release、npm 页面或公告。

### 3. `/upgrade-checklist` — 列升级清单

输入 `/upgrade-checklist`。

可以指定对象：`/upgrade-checklist for teams using global slash commands`。

它会基于真实变化列出：

- 谁需要关注
- 要执行哪些操作（可勾选）
- 怎么验证升级完成

如果本次版本对用户无额外操作要求，它会明确说「无需升级操作」。

### 4. 对齐版本号

确认 `package.json` 版本号、CHANGELOG、README 中的版本示例一致。

### 5. 发布

按项目发布方式执行（`npm publish`、打 tag 等）。

## 预期结果

- CHANGELOG 有结构化条目
- Release notes 可直接对外发
- 升级路径清晰，用户知道要做什么
- 版本信息在各处一致

## 可搭配

- [发布前过一遍清单](../tips/release-hygiene.md) — 发布卫生习惯
- [文档更新](./doc-update.md) — 发版前确认文档最新
- [`markdown-release.settings.jsonc`](../configs/markdown-release.settings.jsonc) — Markdown 编辑配置

## 变体

| 场景 | 调整 |
|------|------|
| 小 patch 版本 | `/changelog-entry` 足够，可跳过 release-notes |
| 大版本 breaking change | 每步都走，upgrade-checklist 要详细 |
| 内部工具不对外 | 可简化 release-notes，重点是 changelog |
