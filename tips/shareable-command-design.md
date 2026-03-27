[English](shareable-command-design.en.md) · 中文

# 先写能复用的命令，再写项目私货

## 什么时候用

- 要新增一条 slash command
- 不确定该做通用还是仅本项目
- 怕把团队私约束写进公共命令

## 怎么做

1. 自问：这条能否跨项目复用。
2. 能则优先写成通用命令。
3. 仅属单团队/单仓的规则放到项目模板或项目私有命令。
4. 在说明里写清：场景、边界、哪些是通用、哪些该由项目注入。

## 能换来什么

- 保持 CursorX 的利他取向
- 命令层更像可复用产品，少被单项目绑死

## 可搭配

- `slash-commands/project/git-push.project-template.md`
- 新增命令前可看 `docs/roadmap-status.md` 里的三条自检
