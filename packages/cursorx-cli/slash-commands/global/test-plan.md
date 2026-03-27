# 为当前改动生成测试计划

目标：基于当前 staged 改动生成一份可执行的测试计划，优先覆盖主流程、回归风险、边界条件和人工验证路径。

用户可以在命令后补充目标范围，例如：

- `/test-plan`
- `/test-plan focus install and verify flows`

其中 `${user_input}` 是额外测试关注点，可以为空。

## 必须遵守

1. 默认优先分析 staged 改动；先执行 `git diff --cached --name-only`。
2. 如果 staged 为空，再询问是否改为基于未暂存改动或指定文件生成计划；不要静默切换范围。
3. 必须执行 `git diff --cached` 阅读改动内容，不要只看文件名。
4. 测试计划应区分：
   - smoke checks
   - regression checks
   - edge cases
   - manual verification
5. 如果某些场景因为缺少运行环境无法验证，要明确标出“未执行，仅建议”。

## 执行步骤

1. 执行 `git diff --cached --name-only` 读取 staged 文件列表。
2. 若 staged 为空：提示用户当前没有 staged 改动，并询问是否改看未暂存改动；若用户未确认，则停止。
3. 执行 `git diff --cached` 阅读具体变更。
4. 基于改动内容识别：
   - 受影响模块
   - 可能回归路径
   - 需要补的边界条件
   - 适合自动化验证与手工验证的部分
5. 输出按优先级排序的测试计划。

## 输出格式要求

1. 简短说明本次测试计划覆盖的对象
2. 用 checklist 形式列出：
   - 必做 smoke tests
   - 关键 regression tests
   - 易遗漏 edge cases
   - 建议的手工验证步骤
3. 若 `${user_input}` 非空，增加一段“focus area”专门覆盖该重点
4. 最后补一行“未执行测试，仅输出计划”或“已执行的测试”

## 适用边界

- 适合提交前、提测前、PR 前整理测试思路
- 不替代真实测试执行
- 如果用户要审查风险而不是设计测试，请优先使用 `/staged-review`
