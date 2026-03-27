# 审查当前 staged 改动

目标：只围绕当前已暂存的改动做一次高信号审查，优先发现行为回归、遗漏测试、边界条件和明显风险。

用户可以在命令后补充审查重点，例如：

- `/staged-review`
- `/staged-review focus auth and cache invalidation`

其中 `${user_input}` 是本次额外关注点，可以为空。

## 必须遵守

1. 只审查当前 staged 改动，不要把未暂存改动混进结论。
2. 先执行 `git diff --cached --name-only`；如果为空，停止并提示用户先暂存改动。
3. 再执行 `git diff --cached` 阅读完整改动内容。
4. 审查时默认使用 code review 视角，优先输出：
   - 明确 bug 风险
   - 行为回归
   - 缺失测试
   - 不完整的文档或配置更新
5. 如果 `${user_input}` 非空，把它当作重点审查范围，但不要忽略更严重的问题。
6. 输出结果时必须先给 findings，再给简短总结。

## 执行步骤

1. 执行 `git diff --cached --name-only` 读取 staged 文件列表。
2. 若为空：提示“当前没有 staged 改动，请先执行 git add 或使用 Source Control 暂存文件”，并停止。
3. 执行 `git diff --cached` 查看完整 staged diff。
4. 按严重程度审查 staged 改动：
   - `high`：可能导致错误、数据不一致、明显逻辑回归
   - `medium`：容易引入维护成本、遗漏边界或验证不足
   - `low`：文档、命名、提示信息、可读性问题
5. 如发现风险，逐条指出原因、影响面和建议修复方式。
6. 如未发现明确问题，必须明确写“未发现明确问题”，同时补充残余风险或建议测试点。

## 输出格式要求

- Findings first
- 每条 finding 尽量指出对应文件
- 如果没有 finding，也要写出建议验证的测试场景

## 适用边界

- 适合 commit 前的 staged review
- 不适合完整分支 review 或 PR review；如果用户要总结分支内容，请改用 `/pr-summary`
