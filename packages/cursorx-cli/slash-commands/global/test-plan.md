# 为当前改动生成测试计划

语言：[English](test-plan.en.md)

目标：基于 **staged** 改动生成可执行的测试计划：主流程、回归、边界、人工验证路径。

可补充范围，例如：

- `/test-plan`
- `/test-plan focus install and verify flows`

`${user_input}` 为额外关注点，可为空。

## 必须遵守

1. 默认先分析 staged；`git diff --cached --name-only`。  
2. staged 为空时，**不要静默改范围**；询问是否用未暂存或指定文件。  
3. 必须 `git diff --cached` 读内容，不能只看文件名。  
4. 区分：smoke、regression、edge cases、manual verification。  
5. 缺环境无法跑的场景标「未执行，仅建议」。  

## 执行步骤

1. `git diff --cached --name-only`  
2. staged 为空：提示无 staged，询问是否看未暂存；用户未确认则停止。  
3. `git diff --cached`  
4. 识别：受影响模块、可能回归路径、边界、自动化 vs 手工。  
5. 按优先级输出测试计划。  

## 输出格式

1. 简短说明覆盖对象  
2. Checklist：必做 smoke、关键 regression、易漏 edge、建议手工步骤  
3. `${user_input}` 非空时加「focus area」  
4. 末行标明「未执行测试，仅输出计划」或已执行情况  

## 边界

- 提交前、提测前、PR 前整理思路  
- 不替代真实测试执行  
- 偏风险审查用 `/staged-review`  
