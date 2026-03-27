[English](./p2-observation-template.en.md)

# P2 观察记录模板

路线 A 仍是默认主线时，用这份模板低成本记录路线 B 是否出现可启动信号。目的不是做复杂报表，而是让每次与 `cursorx-cli` 相关的变动都有统一、最小的记录口径。

## 何时记录

建议在以下情况写一条观察：

- 准备发布仓库内容
- 准备发布 `cursorx-cli`
- 出现明显的 `cli-native` 修复或安装体验调整
- 需要重新判断路线 B 是否值得启动

## 记录规则

每次尽量短，但至少包含：

1. 本次变化日期  
2. 变化归类  
3. 是否触发 npm 发版  
4. 是否产生「仅包级说明」的独立修改需求  
5. 是否出现新的路线 B 启动信号  

归类统一为（定义与 [`release-process.md`](./release-process.md) 一致）：

- `repo-only`
- `cli-coupled`
- `cli-native`

## 观测指标

实验期内建议累计这 4 项：

| 指标 | 含义 |
| --- | --- |
| `cli_releases` | `cursorx-cli` 发版次数 |
| `repo_releases` | 仓库级内容发布次数 |
| `package_docs_only_updates` | 仅因包级 README / CHANGELOG / 安装说明而做的独立修改次数 |
| `cli_only_fixes` | 仅因 CLI 逻辑、兼容性或安装体验触发的修复次数 |

## 复核时点

默认在以下任一条件满足时做一次正式复核：

- 连续观察满 4～8 周  
- 或累计 3 次与 `cursorx-cli` 相关的变化  

复核时对照：

- [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.md)  
- [`p2-decision.md`](./p2-decision.md)  

## 推荐写法

可直接复制下方模板，在同一文档中持续追加。建议先有一段「实验期总览」，再逐条追加记录。

### 实验期总览模板

```md
## Observation Window

- Start date:
- Review trigger:
- Current default route: A
- Command source remains: `slash-commands/index.json`

### Running Metrics

- cli_releases: 0
- repo_releases: 0
- package_docs_only_updates: 0
- cli_only_fixes: 0
```

### 单条记录模板

```md
### Entry

- Date:
- Change summary:
- Classification: repo-only | cli-coupled | cli-native
- Affected areas:
- npm release needed: yes | no
- Package-only docs touched: yes | no
- CLI-only fix: yes | no
- User-visible change: yes | no
- New route B signals:
- Notes:
```

### 复核结论模板

```md
## Review

- Review date:
- Observation window:
- Total cli_releases:
- Total repo_releases:
- Total package_docs_only_updates:
- Total cli_only_fixes:
- Threshold groups hit:
- Decision: stay on route A | continue observing | start route B experiment
- Follow-up actions:
```

## 现阶段原则

优先做到：口径一致、能支撑下次复核、不为此先上复杂工具链。不必为这份模板先做自动化。

## 相关文档

- [`./release-process.md`](./release-process.md)  
- [`./p2-route-b-thresholds.md`](./p2-route-b-thresholds.md)  
- [`./p2-decision.md`](./p2-decision.md)  
- [`./roadmap-status.md`](./roadmap-status.md)  
