# Changelog

**语言 / Language：** [English](CHANGELOG.en.md)

记录仓库级里程碑；面向使用者可感知的变化，不逐条抄 commit。

## 0.3.0 - 2026-03-27

### Added

- 发布与变更相关工作流命令：`/release-notes`、`/changelog-entry`、`/upgrade-checklist`
- [`docs/roadmap-status.md`](docs/roadmap-status.md)：显式写清 `P0 / P1 / P2` 与自检
- `tips/`、`configs/`、`skills/` 第二批：发布卫生、复用设计、release notes 等
- `commands/` 增加参考命令：`open-problems-panel`、`toggle-terminal`、`open-markdown-preview`

### Changed

- `slash-commands/` 覆盖从日常提交到发布说明、升级检查的第一版工作流
- 主导航纳入 changelog 与路线图

### Notes

- `cursorx-cli` 随本版命令数据发布，npm 与仓库命令集对齐

## 0.3.1 - 2026-03-27

### Added

- [`docs/release-process.md`](docs/release-process.md)：仓库与 npm 发布流程
- [`docs/p2-readiness.md`](docs/p2-readiness.md)：进入下一阶段前门槛
- [`packages/cursorx-cli/CHANGELOG.md`](packages/cursorx-cli/CHANGELOG.md)

### Changed

- `P1` 标为完成
- 主导航增加发布流程与 `P2` 门槛

## 0.3.2 - 2026-03-27

### Added

- [`docs/p2-options.md`](docs/p2-options.md)：`P2` 三条路线对比
- [`docs/p2-decision.md`](docs/p2-decision.md)：当前决策记录

### Changed

- `P2`：未开始 → 评估中
- 主导航增加 `P2` 评估入口

## 0.2.0 - 2026-03-27

### Added

- `cursorx-cli@0.2.0`：`list`、`doctor`、`install`、`verify`
- `slash-commands/` 第一批工作流：Git、staged review、测试计划、PR 摘要、文档刷新、风险扫描、迁移说明、交接摘要、release notes、changelog 条目、升级清单
- `skills/`、`tips/`、`configs/` 第一批实体内容
- [`docs/content-map.md`](docs/content-map.md)

### Changed

- 根 README、快速开始、各层说明：分层导航更清晰
- `commands/`：补充手动验证建议，强调「参考层」
- `packages/cursorx-cli/`：npm 元数据与发布说明

### Docs

- 仓库级 changelog 起档

## 0.1.0 - 2026-03-27

### Added

- `cursorx-cli@0.1.0` 首次发布
- `slash-commands/` 作为唯一主安装入口
- 首批可安装命令：`/git-push`、`/lint-fix`

### Notes

- 阶段目标：安装器、索引、命令源是否跑得通
