[English](CHANGELOG.en.md) · 中文

# cursorx-cli 变更记录

仅记录 **npm 包 `cursorx-cli`** 本身的版本变化。

## 0.3.3 - 2026-03-27

### Changed in 0.3.3

- 随包分发的 `slash-commands/` 目录数据更新：每条命令新增工作流交叉引用，推荐组合关联完整工作流文档

## 0.3.2 - 2026-03-27

### Changed in 0.3.2

- 统一 `help`、`list`、`doctor`、`install`、`verify` 的终端输出风格
- 宽度感知换行、状态行高亮、无颜色环境降级
- 未知命令与运行异常时的错误提示与后续建议

## 0.3.1 - 2026-03-27

### Added in 0.3.1

- 包级 `CHANGELOG.md`

### Changed in 0.3.1

- 发布流程写入文档，明确何时需同步 npm 包
- 包级 changelog 纳入分发文件，减轻 npm 页与仓库说明脱节

## 0.3.0 - 2026-03-27

### Added in 0.3.0

- 包内同步更多 `slash-commands` 数据
- 覆盖提交、review、release notes、upgrade checklist 等命令集

### Changed in 0.3.0

- npm 包与仓库主命令集重新对齐

## 0.2.0 - 2026-03-27

### Added in 0.2.0

- `doctor` 与 `verify` 自检
- 更多主产品层命令与同步数据

### Changed in 0.2.0

- 补充 npm 元数据（`homepage`、`repository`、`bugs` 等）

## 0.1.0 - 2026-03-27

### Added in 0.1.0

- 首次发布 `cursorx-cli`
- 支持 `list`、`install`
- 以 `slash-commands/index.json` 为命令源
