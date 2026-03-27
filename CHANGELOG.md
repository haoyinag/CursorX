# Changelog

这份 changelog 记录 `CursorX` 仓库级的重要里程碑，优先关注使用者可感知的变化，而不是完整内部提交明细。

## 0.3.0 - 2026-03-27

### Added in 0.3.0

- 补齐发布与变更管理工作流命令：
  - `/release-notes`
  - `/changelog-entry`
  - `/upgrade-checklist`
- 新增 [`docs/roadmap-status.md`](docs/roadmap-status.md)，把 `P0 / P1 / P2` 阶段状态和自检标准显式化
- 给 `tips/`、`configs/`、`skills/` 再补第二批围绕发布卫生、复用设计和 release notes 的内容
- `commands/` 增加一组高频稳定参考命令：
  - `open-problems-panel`
  - `toggle-terminal`
  - `open-markdown-preview`

### Changed in 0.3.0

- `slash-commands/` 现在已经覆盖从日常提交到发布说明、升级检查的完整第一版工作流
- 文档入口继续强化，把 changelog 和路线图状态纳入仓库主导航

### Notes for 0.3.0

- `cursorx-cli` 将随本次命令数据更新同步发布，保证 npm 包与仓库中的命令集保持一致

## 0.3.1 - 2026-03-27

### Added in 0.3.1

- 新增 [`docs/release-process.md`](docs/release-process.md)，固定仓库内容与 npm 包的发布流程
- 新增 [`docs/p2-readiness.md`](docs/p2-readiness.md)，作为进入下一阶段前的门槛检查
- 新增包级 [`packages/cursorx-cli/CHANGELOG.md`](packages/cursorx-cli/CHANGELOG.md)

### Changed in 0.3.1

- `P1` 路线状态正式调整为“完成”
- 文档导航增加对发布流程与 `P2` 门槛检查的入口

## 0.3.2 - 2026-03-27

### Added in 0.3.2

- 新增 [`docs/p2-options.md`](docs/p2-options.md)，系统比较 `P2` 的三条演进路线
- 新增 [`docs/p2-decision.md`](docs/p2-decision.md)，记录当前正式决策

### Changed in 0.3.2

- `P2` 状态从“未开始”调整为“评估中”
- 仓库主导航增加 `P2` 评估入口

## 0.2.0 - 2026-03-27

### Added in 0.2.0

- 发布 `cursorx-cli@0.2.0`，提供 `list`、`doctor`、`install`、`verify` 四类安装与自检能力
- `slash-commands/` 扩充到完整第一批工作流命令组，覆盖：
  - Git 提交流程
  - staged review 与测试计划
  - PR 摘要与文档刷新
  - 风险扫描、迁移说明、交接摘要
  - release notes、changelog 条目与升级检查清单
- `skills/`、`tips/`、`configs/` 补齐第一批实体内容
- 新增 [`docs/content-map.md`](docs/content-map.md) 作为仓库级内容地图

### Changed in 0.2.0

- 根 README、快速开始和各层目录说明改为更明确的分层导航
- `commands/` 补充了手动验证建议，进一步明确其“参考层”定位
- `packages/cursorx-cli/` 补充 npm 元数据与发布状态说明

### Docs in 0.2.0

- 新增仓库级 changelog，开始显式追踪版本与里程碑

## 0.1.0 - 2026-03-27

### Added in 0.1.0

- 首次发布 `cursorx-cli@0.1.0`
- 建立 `slash-commands/` 作为当前唯一主安装入口
- 提供最初的可安装命令：
  - `/git-push`
  - `/lint-fix`

### Notes for 0.1.0

- 这一阶段重点在验证安装器、索引结构和基础命令源是否成立
