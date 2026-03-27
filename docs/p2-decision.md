[English](./p2-decision.en.md)

# P2 当前决策

记录 `CursorX` 对 P2 的正式结论，避免反复争论「现在该不该切形态」。

## 结论

进入 P2 的方式应为：**开始评估**；**暂不**切换主产品形态；**暂不**拆仓；**暂不**把 Plugin / Marketplace 当作当前主线。

## 默认路线

- 保持单仓  
- 强化发布治理  
- 持续观察 CLI 是否形成独立产品节奏  

与 [`p2-options.md`](./p2-options.md) 对齐：**路线 A** 为当前主线，**路线 B** 为备选演进，**路线 C** 为探索项。

## 何时重新决策

**可能转向路线 B** 的信号（任一）：

1. `cursorx-cli` 发版频率显著快于内容仓  
2. 包级 changelog、release notes、issue 已明显独立  
3. 用户明确只关注安装器、不关心内容仓  
4. 单仓内同步 README、索引、版本信息的成本明显升高  

**才值得认真探索路线 C** 的信号：

1. 对一键安装与编辑器内发现的诉求明显上升  
2. CLI 成为安装体验瓶颈而非优势  
3. Plugin / Marketplace 的能力边界已足够清晰  

## 当前不做

- 为「进入新阶段」而强行拆仓  
- 因 CLI 已发布就默认它已是独立产品  
- 证据不足就把 Plugin / Marketplace 当主线  

## 下一步（维护者优先）

少做大规模扩内容，多做：

1. 观察发布节奏一段时间  
2. 持续记录用户可感知变化与版本变化  
3. 按 [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.md) 定义路线 B 的启动条件与最小实验  
4. 用 [`p2-observation-template.md`](./p2-observation-template.md) 累积实验期记录  
5. 满 4～8 周或累计 3 次 `cursorx-cli` 相关变化后做一次正式复核  
6. 触发条件明确时再做一次正式结构决策  
