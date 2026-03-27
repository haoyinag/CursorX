# 快速开始

这个仓库的目标不是提供一堆零散资料，而是逐步沉淀成一套围绕 Cursor 的可复用内容库。

如果你第一次进入仓库，建议优先关注 `commands/`。

## 推荐浏览顺序

1. 阅读 [`commands/README.md`](../commands/README.md)
2. 浏览 [`commands/catalog.md`](../commands/catalog.md)
3. 打开你感兴趣的命令 JSON
4. 根据当前 Cursor 版本支持的方式导入到你的自定义命令列表

## 如何挑选命令

不要先看“这个仓库有什么”，而是先看“你想解决什么问题”。

推荐从这些问题出发：

- 想更快完成 Git 提交
- 想把 AI 重构动作变成一个固定入口
- 想把常用工作流做成稳定的可搜索命令

## 推荐的最小体验路径

如果你只想快速感受这个仓库的价值，推荐先尝试这两个命令：

- [`commands/development/git-smart-commit.json`](../commands/development/git-smart-commit.json)
- [`commands/productivity/code-refactor-assistant.json`](../commands/productivity/code-refactor-assistant.json)

这样可以分别覆盖：

- Git 提交流程
- AI 重构协作流程

## 关于安装方式

由于 Cursor 不同版本的自定义命令管理方式可能不同，本仓库不把安装步骤绑定到某一个固定文件路径。

建议你采用下面的做法：

1. 先在当前 Cursor 版本中确认自定义命令的管理入口
2. 从本仓库复制选中的命令定义
3. 导入或同步到你自己的命令配置
4. 重载窗口并通过命令面板搜索验证

## 如果你准备贡献

请继续阅读：

- [项目贡献指南](../CONTRIBUTING.md)
- [命令开发规范](./command-development.md)
