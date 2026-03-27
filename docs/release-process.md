# 发布流程

这份文档用于固定 `CursorX` 当前的发布节奏，避免仓库内容、CLI 包和 npm 页面再次发生明显脱节。

## 适用范围

当前主要覆盖两类发布动作：

1. 仓库内容发布
2. `cursorx-cli` npm 包发布

## 发布前自检

每次准备发布前，先回答这 3 个问题：

1. 这次是否真的有用户可感知变化
2. 变化是否已经同步到 README、目录说明和 changelog
3. 变化是否仍然符合仓库核心语义、利他属性和实用性

如果这 3 条里有明显未满足项，优先补齐，再进入发布动作。

## 先做变化归类

进入具体发布步骤前，建议先把本次变化归到下面三类之一：

- `repo-only`：只影响内容层、导航或仓库说明，不影响 `cursorx-cli` 对外能力
- `cli-coupled`：变化来自 `slash-commands/`，需要同步进入 `cursorx-cli` 分发内容
- `cli-native`：变化主要发生在 `packages/cursorx-cli/`，即使不新增命令内容也值得独立评估是否发包

如果连续多次出现 `cli-native`，建议结合 [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.md) 重新评估路线 B 是否值得启动。

## 仓库内容发布流程

适合场景：

- `slash-commands/` 新增高价值命令
- `commands/`、`skills/`、`tips/`、`configs/` 新增可复用资产
- 导航文档、路线图状态或目录结构有显著变化

推荐步骤：

1. 更新相关目录索引与 README
2. 更新 [`CHANGELOG.md`](../CHANGELOG.md)
3. 若阶段状态变化明显，再更新 [`roadmap-status.md`](./roadmap-status.md)
4. 执行最小校验：
   - `node scripts/validate-commands.mjs`
   - 如涉及 CLI 数据，同步 `slash-commands/`
5. 完成 git commit 和 push

## `cursorx-cli` 发布流程

适合场景：

- `packages/cursorx-cli/` 自身逻辑发生变化
- `slash-commands/` 作为包内命令数据发生变化
- npm 页面展示内容需要与仓库保持一致

推荐步骤：

1. 确认 `packages/cursorx-cli/package.json` 版本号
1. 更新 [`packages/cursorx-cli/CHANGELOG.md`](../packages/cursorx-cli/CHANGELOG.md)
1. 必要时更新 [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)
1. 在包目录执行：

```bash
npm run check
```

1. 发布：

```bash
npm publish
```

1. 发布后验证：

```bash
npm view cursorx-cli@<version> version
```

## 版本建议

当前推荐这样判断：

- `patch`：文档修正、元数据修正、小范围兼容修复
- `minor`：新增用户可直接使用的命令、自检能力或明显扩展的命令数据
- `major`：安装语义、主入口或命令体系发生不兼容变化

## 当前原则

- 先保证仓库内容和 npm 包语义一致，再追求更快发布
- 若只是仓库内容变动但不影响 CLI 包对外内容，可不必强行发 npm
- 若包内 README、版本或命令数据已经与 npm 页面脱节，优先补一次包发布

## 相关文档

- [`../CHANGELOG.md`](../CHANGELOG.md)
- [`./roadmap-status.md`](./roadmap-status.md)
- [`../packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)
