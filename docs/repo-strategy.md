[English](./repo-strategy.en.md)

# 仓库策略

说明 `CursorX` 为何目前保持单仓，以及在什么条件下再考虑拆成第二仓库。

## 当前策略

- 一个总仓库  
- 一个主产品层  
- 多个内容层目录  

对应关系：

- 主产品层：[`slash-commands/`](../slash-commands/README.md)  
- 未来产品扩展位：[`packages/cursorx-cli/`](../packages/cursorx-cli/README.md)  
- 内容层：[`commands/`](../commands/README.md)、`skills/`、`tips/`、`configs/`  

## 为何暂不拆仓

当前具备产品形态的是 slash commands 与仓库内安装器，但尚未成熟到 **必须** 独立成第二仓库。现在拆仓的成本包括：两套 README/文档、安装说明与命令索引跨仓同步、用户理解成本上升。

## 推荐心智模型

- **CursorX**：总仓 + 内容入口 + 命令产品孵化地  
- **`slash-commands/`**：当前唯一主安装入口；未来 CLI 的命令源  

## 未来拆仓的参考条件

出现以下 **任一** 情况时，更适合认真考虑第二仓库：

1. `cursorx-cli` 已是独立 npm 包，需要独立版本号与 changelog  
2. 安装器 release 节奏明显快于内容仓更新  
3. 安装器已有独立的 issue、修复、release 管理需求  
4. 大量用户只关心「装命令」，不关心其他资源  
5. 你希望把 CursorX 维持为内容站，把安装器单独做成产品品牌  

## 演进顺序建议

1. 保持单仓，划清产品层与内容层  
2. 继续把 `slash-commands/` 固化为唯一主安装入口  
3. 让未来 CLI 直接复用 `slash-commands/index.json`  
4. 待 CLI 真有独立发布节奏后，再决定是否拆仓  
