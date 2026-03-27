# 扫描当前改动的风险点

语言：[English](risk-scan.en.md)

目标：围绕 **staged** 改动或工作区/分支差异，快速标出高风险区、回归点、依赖影响与优先验证路径。

可补充关注点，例如：

- `/risk-scan`
- `/risk-scan focus cache invalidation and config compatibility`

`${user_input}` 为额外风险面，可为空。

## 必须遵守

1. 默认先扫 staged：`git diff --cached --name-only`。  
2. staged 为空时回退到工作区改动，并**明确告知范围已切换**。  
3. 不是普通总结，优先：逻辑回归、配置/文档不同步、兼容性、验证缺口。  
4. `${user_input}` 非空时作为重点风险面。  
5. 无明确高风险也要写「未发现明确高风险」，并列残余关注项。  

## 执行步骤

1. `git diff --cached --name-only`  
2. staged 非空：`git diff --cached`，基于 staged 扫描。  
3. staged 为空：`git status -sb`、`git diff`，说明基于未暂存或工作区。  
4. 分析：入口/配置/安装/脚本是否动到；重命名与路径；README/迁移/测试是否该同步；是否「改了但缺验证」。  
5. 按严重度列风险与验证建议。  

## 输出格式

- `High risks`
- `Medium risks`
- `Validation focus`

某一档无内容写 `None`。

## 边界

- 提交前、提测前、合并前快速梳理  
- 不替代完整 code review  
