[English](release-hygiene.en.md) · 中文

# 发布前过一遍清单

## 什么时候用

- 要发 npm、命令集或一批可复用内容
- 怕「代码动了，说明和升级路径没跟上」
- 想把发布从「临时补洞」变成可重复流程

## 怎么做

1. 确认这次对用户是否真有可见变化。
2. 对齐版本号、README、CHANGELOG、安装示例。
3. 看要不要补：release notes、changelog 条目、upgrade checklist。
4. 按文档做一遍最小安装/验证，确保别人照做能跑通。

## 能换来什么

- 少踩「包发了文档还是旧的」
- 适合持续发版
- 仓库对陌生人更友好

## 可搭配

- `/release-notes`
- `/changelog-entry`
- `/upgrade-checklist`
