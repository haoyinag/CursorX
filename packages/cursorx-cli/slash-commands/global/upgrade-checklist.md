# 生成升级检查清单

语言：[English](upgrade-checklist.en.md)

目标：当版本带来安装方式、命令集、配置片段或工作流变化时，生成**用户可执行**的升级清单。

可补充对象，例如：

- `/upgrade-checklist`
- `/upgrade-checklist for teams using global slash commands`

`${user_input}` 为升级对象或场景，可为空。

## 必须遵守

1. 只基于真实变化生成，**不要虚构步骤**。  
2. 优先回答：谁需要关注、要执行哪些动作、如何验证完成。  
3. 对现有用户无动作要求时写「无需额外升级操作」。  
4. `${user_input}` 非空时围绕该对象组织。  
5. 步骤要可执行，不要只写空话。  

## 执行步骤

1. 读当前版本相关差异、README、命令说明。  
2. 识别：新命令安装、脚本同步、旧命令替换、文档或用法变化。  
3. 拆成 checklist。  
4. 补一段升级完成后的验证方式。  

## 输出格式

- `Who should upgrade`
- `Checklist`（可勾选步骤）
- `Verification`

## 边界

- 命令安装器升级、命令集扩充、目录或流程变化后的升级说明  
- 不替代 release notes；偏「用户接下来要做什么」  
