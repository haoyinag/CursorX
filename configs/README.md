# 配置分享

`configs/` 用于沉淀有复用价值的 Cursor 配置示例和说明，而不是鼓励使用者直接无差别覆盖自己的环境。

## 目录中适合放什么

- `settings.json` 示例
- `keybindings.json` 示例
- 工作区级配置建议
- 某类工作流的配置组合说明

## 当前示例

- [`focused-review.settings.jsonc`](./focused-review.settings.jsonc)
  - 适合 diff 阅读、长文件浏览和代码审查
- [`navigation.keybindings.jsonc`](./navigation.keybindings.jsonc)
  - 适合把命令面板、文件跳转、搜索和 AI 入口固定为快捷键
- [`workspace-hygiene.settings.jsonc`](./workspace-hygiene.settings.jsonc)
  - 适合减少提交噪声，保持工作区和搜索结果更干净
- [`markdown-release.settings.jsonc`](./markdown-release.settings.jsonc)
  - 适合高频维护 README、CHANGELOG 和 release notes
- [`focus-layout.settings.jsonc`](./focus-layout.settings.jsonc)
  - 适合减少界面噪声，让编辑、检查和终端切换更顺滑
- [`diagnostics-focus.settings.jsonc`](./diagnostics-focus.settings.jsonc)
  - 适合集中处理 Problems、搜索结果和底部面板信息

## 使用建议

推荐做法：

1. 先阅读配置说明
2. 按需摘取片段
3. 合并到你自己的配置中
4. 重载 Cursor 验证效果

不推荐做法：

- 不看说明直接整份覆盖
- 在不知道版本差异的情况下照搬
- 不区分全局配置和工作区配置

## 维护原则

- 配置项要说明用途
- 如果存在平台差异，要明确标出
- 如果可能与常见设置冲突，要写出注意事项

## 说明

由于 Cursor 和 VS Code 生态存在版本与平台差异，本目录更强调“配置思路和可复用片段”，而不是写死单一平台路径。

## 推荐使用顺序

1. 先看文件注释，确认每个配置片段解决什么问题
2. 只摘取你真正需要的几项，而不是整份覆盖
3. 合并后手动验证：
   - 文件跳转是否更顺手
   - diff 阅读是否更清晰
   - 自动保存和排除规则是否符合你的项目节奏

## 许可证

本目录内容遵循项目根目录的 [MIT License](../LICENSE)。
