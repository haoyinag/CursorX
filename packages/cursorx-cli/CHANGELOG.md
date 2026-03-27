# cursorx-cli Changelog

这份 changelog 只记录 `cursorx-cli` 这个 npm 包本身的版本变化。

## 0.3.2 - 2026-03-27

### Changed in 0.3.2

- 统一美化 `help`、`list`、`doctor`、`install`、`verify` 的终端输出风格
- 增加宽度感知换行、状态行高亮与无颜色环境降级
- 优化未知命令和运行异常时的错误提示与下一步建议

## 0.3.1 - 2026-03-27

### Added in 0.3.1

- 补包级 `CHANGELOG.md`

### Changed in 0.3.1

- 把发布流程文档化，明确何时需要同步 npm 包
- 将包级 changelog 纳入分发文件，减少 npm 页面与仓库说明脱节

## 0.3.0 - 2026-03-27

### Added in 0.3.0

- 包内同步更多 `slash-commands` 数据
- 覆盖从提交、review 到 release notes、upgrade checklist 的命令集

### Changed in 0.3.0

- npm 包与仓库中的主命令集重新对齐

## 0.2.0 - 2026-03-27

### Added in 0.2.0

- `doctor` 与 `verify` 自检能力
- 更多主产品层命令与同步数据

### Changed in 0.2.0

- 补充 npm 元数据，如 `homepage`、`repository`、`bugs`

## 0.1.0 - 2026-03-27

### Added in 0.1.0

- 首次发布 `cursorx-cli`
- 支持 `list`、`install`
- 支持以 `slash-commands/index.json` 为命令源
