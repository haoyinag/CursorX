# 生成迁移说明

语言：[English](migration-note.en.md)

目标：当改动涉及命令入口、配置方式、路径、脚本或用法**变化**时，写面向使用者的迁移说明。

可补充读者，例如：

- `/migration-note`
- `/migration-note for users upgrading from the old installer`

`${user_input}` 为受众或迁移背景，可为空。

## 必须遵守

1. 先确认是否真有迁移影响；**纯内部重构**不要硬写迁移说明。  
2. 说明必须基于真实 diff 与目录变化。  
3. 优先写清：旧方式、新方式、用户要做什么、不做的后果。  
4. `${user_input}` 非空时按该受众组织。  
5. 无明显迁移影响时明确写「当前改动不需要额外迁移说明」。  

## 执行步骤

1. 优先读 staged：`git diff --cached --name-only`、`git diff --cached`。  
2. staged 为空再回退工作区 diff。  
3. 识别：重命名、命令入口、安装方式、配置路径、用户操作步骤变化。  
4. 仅当确有迁移影响时输出迁移说明。  

## 输出格式

- `Who is affected`
- `What changed`
- `What to do`
- `Verification`

无需迁移时：一句结论 + 原因。

## 边界

- 安装方式变化、命令重命名、配置迁移、目录重构说明  
- 不替代完整发布日志  
