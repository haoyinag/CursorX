[English](./p2-route-b-thresholds.en.md)

# 路线 B：启动条件与最小实验

回答两件事：**何时**值得让 `cursorx-cli` 进入更独立治理；在 **不拆仓** 前提下，路线 B **最小**应先试什么。

## 当前判断

就现有仓库状态，**没有**必须立刻切到路线 B 的结构性问题。更接近：

- `slash-commands/` 仍是唯一主产品层，语义清楚  
- `cursorx-cli` 已是分发层，但尚未完全脱离总仓主叙事  
- 压力主要来自 **发布治理**，而非「仓库边界已失效」  

因此：**默认继续路线 A**；为路线 B 写明启动阈值；先做 **最小实验**，不先拆仓。

## 何谓「值得启动路线 B」

仅当 `cursorx-cli` 出现 **明确的独立治理压力** 时，才建议从「观察」进入「启动路线 B」。建议 **4 组条件中至少满足 3 组** 再启动。

### 1. 发布节奏开始分化

以下 **任一** 成立即算本组命中：

- 连续 2 个自然月内，`cursorx-cli` 发版次数 **明显高于** 仓库级内容发布次数  
- 连续 3 次包发布中，至少 2 次主要变更在 `packages/cursorx-cli/`，而非内容层  
- 包级修复或兼容性更新开始 **独立** 出现，而不依赖 `slash-commands/` 新内容  

### 2. 包级治理需求开始独立

以下 **任一** 成立即算本组命中：

- `packages/cursorx-cli/CHANGELOG.md` **连续 3 个版本** 都需单独描述用户可感知变化  
- 包级 README、安装说明、自检说明 **频繁** 独立更新  
- `cursorx-cli` 的 bugfix、兼容性或安装问题 **单独成议题**  

### 3. 用户心智开始分化

以下 **任一** 成立即算本组命中：

- 新用户更常从 `cursorx-cli` 用法进入，而非先看内容层  
- 对外沟通需把「安装器能力」与「资源仓库内容」 **分开说**  
- 出现明确用户 **只** 关心 `install / verify / doctor`，不关心 `commands/`、`tips/`、`configs/`  

### 4. 单仓协同成本明显上升

以下 **任一** 成立即算本组命中：

- 同一轮发布经常要同时改仓库 README、包 README、仓库 changelog、包 changelog  
- 包版本、npm 页说明与仓库主导航 **反复脱节**  
- 发布检查已不只是「同步内容」，而是越来越多 **包级规则**  

## 明确不应仅因以下原因启动路线 B

- 只是多同步了几次命令内容、顺手改了 CLI 数据  
- 「已有 npm 包」≠ 已是独立产品  
- 仅因拆分后「更好看」，而无真实治理压力  
- Plugin / Marketplace 像未来入口，但 **当前证据仍不足**  

## 路线 B 的最小实验边界

目标 **不是** 拆仓，而是验证「更独立治理」是否真能 **降成本**。建议把实验收在以下 4 点：

1. 明确 **包级变化** 与 **仓库级变化** 的判定规则  
2. 固化 `cursorx-cli` 的 **独立发布检查表**  
3. 包级文档叙事更完整，但仍保留 `slash-commands/` 为 **唯一命令源**  
4. 观察一段后再决定是否要独立 issue / release 页 / 仓库  

**实验中不做**：拆仓；复制第二套命令索引；把 `cursorx-cli` 升格为第二主产品层；把 Plugin / Marketplace **提前** 当主线。

## 最小实验方案

### 目标

验证：`cursorx-cli` 是否已值得 **更清晰的独立治理叙事**，同时仍 **强依赖** `slash-commands/`。

### 周期

建议观察 **4～8 周**，或至少覆盖 **连续 3 次** `cursorx-cli` 相关变更。

### 动作

#### 1. 每次变化先归类

每次准备改动或发布，标记为：

- `repo-only`：只影响内容层或仓库导航，**不**影响 `cursorx-cli` 对外能力  
- `cli-coupled`：变更来自 `slash-commands/`，需同步进包分发  
- `cli-native`：变更主要在 `packages/cursorx-cli/`，即使不新增命令内容也值得发版  

若 `cli-native` **连续多次** 出现，路线 B 压力在增强。

#### 2. 记录最小指标

实验期持续记 4 项：`cursorx-cli` 发版次数；仓库级内容发布次数；包级 README/CHANGELOG **独立**修改次数；**仅**因 CLI 或安装体验的修复次数。不必先自动化，手工即可。可直接用 [`p2-observation-template.md`](./p2-observation-template.md)。

#### 3. 强化包级发布自检

在现有 [`release-process.md`](./release-process.md) 上，每次涉及 `cursorx-cli` 时额外确认：是否 `cli-native` 或 `cli-coupled`；是否需更新包 README/changelog；是否 **值得** 发 npm，而非只更仓库。目的是让路线 B 的压力 **可见**，而不是混在仓库级发布里。

#### 4. 命令源保持单一

实验期内仍须：`slash-commands/index.json` **唯一命令源**；`cursorx-cli` 仍为安装器与分发层；`commands/` 仍为参考层。这样才能验证「治理更独立」本身是否有价值，而不被结构大改干扰结论。

## 启动路线 B 之后的第一步

阈值触发后，**第一步仍不是拆仓**，而是：

1. 将 `cursorx-cli` 相关变化统一按 `cli-native` / `cli-coupled` / `repo-only` 归类  
2. 收紧包级 changelog 与 release notes 规则  
3. 观察包级议题是否已值得单独管理  
4. 仅当上述动作已带来 **持续的独立节奏** 时，再评估是否拆仓  

## 何时复核

默认在 **任一** 满足时正式复核：

1. 连续观察满 4～8 周  
2. 累计 3 次 `cursorx-cli` 相关变化  

复核顺序建议：

1. 回看 [`p2-observation-template.md`](./p2-observation-template.md) 中的实验期记录  
2. 对照本文 4 组启动条件，数命中组数  
3. 更新 [`p2-decision.md`](./p2-decision.md) 中的正式结论  

## 当前执行建议

1. 维持路线 A 为主线  
2. 按本文阈值继续观察  
3. 立即在单仓内启动「路线 B 最小实验」  
4. 不继续横向堆内容层，优先积累治理证据  

## 相关文档

- [`./p2-readiness.md`](./p2-readiness.md)  
- [`./p2-options.md`](./p2-options.md)  
- [`./p2-decision.md`](./p2-decision.md)  
- [`./release-process.md`](./release-process.md)  
- [`./p2-observation-template.md`](./p2-observation-template.md)  
- [`./repo-strategy.md`](./repo-strategy.md)  
- [`../packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
