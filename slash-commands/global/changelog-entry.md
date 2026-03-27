# 为当前改动生成 changelog 条目

目标：把当前版本或当前一组改动整理成适合写入 changelog 的精炼条目，强调用户可感知变化，而不是简单列文件。

用户可以在命令后补充版本或范围，例如：

- `/changelog-entry`
- `/changelog-entry for cursorx-cli 0.2.0`

其中 `${user_input}` 是版本号、目标范围或需要强调的变化点，可以为空。

## 必须遵守

1. changelog 条目必须建立在真实 diff、提交记录或版本范围上。
2. 条目应优先表达“用户会感知到什么变化”。
3. 如果改动同时包含内容扩充和安装能力变化，要分开描述。
4. 不要把纯重构、重命名、目录整理都写成同等重要条目。
5. 若本次变化不足以写独立 changelog 条目，要明确说明并给出建议合并方式。

## 执行步骤

1. 读取本次改动范围内的提交或 diff。
2. 区分以下类型：
   - Added
   - Changed
   - Fixed
   - Docs
3. 把具体文件变化归纳为用户价值或工作流变化。
4. 输出适合直接贴进 changelog 的条目。

## 输出格式要求

- `### <version-or-scope>`
- `Added`
- `Changed`
- `Fixed`
- `Docs`

若某一类没有内容，可省略。

## 适用边界

- 适合维护仓库 changelog、包 changelog、版本摘要
- 不适合写完整 release notes；如果要面向外部公告，请优先使用 `/release-notes`
