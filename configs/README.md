[English](README.en.md) · 中文

# 配置片段

`configs/` 放**可复用的 Cursor 配置示例与说明**，不是让人整份覆盖本地环境。

## 适合放什么

- `settings.json` 示例
- `keybindings.json` 示例
- 工作区级建议
- 某类工作流的配置组合说明

## 当前文件

- [`focused-review.settings.jsonc`](./focused-review.settings.jsonc) — diff 阅读、长文件浏览、代码审查
- [`navigation.keybindings.jsonc`](./navigation.keybindings.jsonc) — 命令面板、跳转、搜索、AI 入口快捷键
- [`workspace-hygiene.settings.jsonc`](./workspace-hygiene.settings.jsonc) — 减少提交噪声，工作区/搜索更干净
- [`markdown-release.settings.jsonc`](./markdown-release.settings.jsonc) — 高频维护 README、CHANGELOG、release notes
- [`focus-layout.settings.jsonc`](./focus-layout.settings.jsonc) — 减界面噪声，编辑/检查/终端切换更顺
- [`diagnostics-focus.settings.jsonc`](./diagnostics-focus.settings.jsonc) — 集中处理 Problems、搜索与底部面板信息

## 建议用法

1. 先读说明与注释  
2. 按需摘片段  
3. 合并进自己的配置  
4. 重载 Cursor 验证  

不建议：不看说明整份覆盖；忽略版本差异照搬；不区分全局与工作区。

## 维护原则

- 每项说明用途  
- 平台差异要标出  
- 易与常见设置冲突的写注意事项  

## 说明

Cursor 与 VS Code 生态存在版本与平台差异；本目录强调**思路与可复用片段**，不写死单一平台路径。

## 推荐阅读顺序

1. 看文件内注释，确认解决什么问题  
2. 只摘需要的项  
3. 合并后手测：跳转、diff、自动保存、排除规则是否符合你的节奏  

## 许可证

MIT（见仓库根目录 [LICENSE](../LICENSE)）。
