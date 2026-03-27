[English](./release-process.en.md)

# 发布流程

固定 `CursorX` 当前的发布节奏，避免仓库内容、CLI 包与 npm 页面脱节。

## 范围

主要两类动作：

1. 仓库内容发布  
2. `cursorx-cli` npm 包发布  

## 发布前自检

每次发布前先回答：

1. 是否有 **用户可感知** 的变化  
2. 变化是否已同步到 README、目录说明、changelog  
3. 是否仍符合仓库核心语义、利他属性与实用性  

有明显缺口时先补齐，再执行发布步骤。

## 先做变化归类

发布前把本次变更归到一类（定义见下文与 [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.md)）：

- `repo-only`：只影响内容层、导航或仓库说明，**不**改变 `cursorx-cli` 对外能力  
- `cli-coupled`：变更来自 `slash-commands/`，需同步进 `cursorx-cli` 的分发内容  
- `cli-native`：变更主要在 `packages/cursorx-cli/`，即使不新增命令内容也值得单独评估是否发包  

若连续多次出现 `cli-native`，结合 [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.md) 评估是否启动路线 B。建议在 [`p2-observation-template.md`](./p2-observation-template.md) 记一条观察，避免只剩「发没发包」而没有证据。

## 仓库内容发布

**适合**：`slash-commands/` 新增高价值命令；`commands/`、`skills/`、`tips/`、`configs/` 新增可复用资产；导航、路线图或目录结构显著变化。

**建议步骤**：

1. 更新相关目录索引与 README  
2. 更新 [`CHANGELOG.md`](../CHANGELOG.md)  
3. 若阶段状态变化明显，更新 [`roadmap-status.md`](./roadmap-status.md)  
4. 最小校验：`node scripts/validate-commands.mjs`；若涉及 CLI 数据，同步 `slash-commands/`  
5. 若本次含 `cli-coupled` 或 `cli-native` 信号，补一条 P2 观察记录  
6. git commit 与 push  

## `cursorx-cli` 发布

**适合**：`packages/cursorx-cli/` 自身逻辑变化；`slash-commands/` 作为包内命令数据变化；npm 页需与仓库一致。

**建议步骤**：

1. 确认 `packages/cursorx-cli/package.json` 版本号  
2. 更新 [`packages/cursorx-cli/CHANGELOG.md`](../packages/cursorx-cli/CHANGELOG.md)  
3. 必要时更新 [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
4. 在 [`p2-observation-template.md`](./p2-observation-template.md) 标注本次为 `cli-coupled` 或 `cli-native`  
5. 在包目录执行：`npm run check`  
6. 发布：`npm publish`  
7. 发布后验证：`npm view cursorx-cli@<version> version`  

## 版本号建议

- **patch**：文档、元数据、小范围兼容修复  
- **minor**：新增用户可直接使用的命令、自检能力，或命令数据明显扩展  
- **major**：安装语义、主入口或命令体系发生不兼容变化  

## 原则

- 先保证仓库内容与 npm 语义一致，再追求发得更勤  
- 仅仓库内容变动且不影响 CLI 对外物时，不必强行发 npm  
- 若包 README、版本或命令数据已与 npm 页脱节，优先补一次包发布  

## 相关文档

- [`../CHANGELOG.md`](../CHANGELOG.md)  
- [`./roadmap-status.md`](./roadmap-status.md)  
- [`../packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
- [`./p2-observation-template.md`](./p2-observation-template.md)  
