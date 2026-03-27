# 扫描当前改动的风险点

目标：围绕当前 staged 改动或当前分支差异，快速识别高风险区域、回归点、依赖影响和需要优先验证的路径。

用户可以在命令后补充关注点，例如：

- `/risk-scan`
- `/risk-scan focus cache invalidation and config compatibility`

其中 `${user_input}` 是本次额外关注的风险范围，可以为空。

## 必须遵守

1. 默认优先扫描 staged 改动；先执行 `git diff --cached --name-only`。
2. 如果 staged 为空，再回退到当前工作区改动；必须明确告诉用户扫描范围发生了切换。
3. 风险扫描不是普通总结，优先输出：
   - 逻辑回归风险
   - 配置或文档不同步风险
   - 兼容性风险
   - 验证缺口
4. 如果 `${user_input}` 非空，应把它作为重点风险面。
5. 若没有明确高风险点，也必须说明“未发现明确高风险”，并列出残余关注项。

## 执行步骤

1. 执行 `git diff --cached --name-only`。
2. 如果 staged 非空：
   - 执行 `git diff --cached`
   - 基于 staged 改动做风险扫描
3. 如果 staged 为空：
   - 执行 `git status -sb`
   - 执行 `git diff`
   - 明确说明本次基于未暂存或整体工作区改动扫描
4. 分析以下维度：
   - 是否改动了入口文件、配置、安装流程或脚本
   - 是否涉及重命名、路径变化、兼容性变化
   - 是否需要 README、迁移说明、测试计划同步更新
   - 是否存在“看起来改了，但缺少验证”的地方
5. 输出按严重程度排序的风险列表和验证建议。

## 输出格式要求

- `High risks`
- `Medium risks`
- `Validation focus`

若某一档没有内容，明确写 `None`。

## 适用边界

- 适合提交前、提测前、合并前的快速风险梳理
- 不替代完整 code review
