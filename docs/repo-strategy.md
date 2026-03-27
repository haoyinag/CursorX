# 仓库策略说明

这份文档用于解释 `CursorX` 为什么当前保持单仓库共存，以及未来在什么条件下适合拆成双仓库。

## 当前策略

`CursorX` 当前采用：

- 一个总仓库
- 一个主产品层
- 多个内容层目录

其中：

- 主产品层：[`slash-commands/`](../slash-commands/README.md)
- 未来产品扩展位：[`packages/cursorx-cli/`](../packages/cursorx-cli/README.md)
- 内容层：[`commands/`](../commands/README.md)、`skills/`、`tips/`、`configs/`

## 为什么现在不拆仓

当前真正具备产品形态的是：

- slash commands
- 仓库内安装器

但还没有成熟到必须拆成独立产品仓库。

现在拆仓的成本包括：

- 两套 README 和文档维护
- 安装说明和命令索引跨仓同步
- 用户理解成本增加

## 当前推荐心智

推荐把 `CursorX` 理解为：

- 总仓库
- 内容入口
- 命令产品的孵化地

推荐把 `slash-commands/` 理解为：

- 当前唯一主安装入口
- 未来 CLI 的命令源

## 未来拆仓阈值

当出现下面任一条件时，更适合考虑拆成第二个仓库：

1. `cursorx-cli` 已经成为独立 npm 包，需要单独版本号和 changelog。
2. 命令安装器的 release 节奏明显快于内容仓库更新节奏。
3. 命令安装器已经有独立 issue、bugfix、release 管理需求。
4. 大量用户只关心“安装命令”，而不关心其他资源内容。
5. 你希望把 `CursorX` 维持为内容站，而把安装器单独做成产品品牌。

## 推荐演进顺序

1. 保持单仓库，但明确产品层和内容层。
2. 继续把 `slash-commands/` 固化为唯一主安装入口。
3. 让未来 CLI 直接复用 `slash-commands/index.json`。
4. 等 CLI 真正有独立发布节奏后，再决定是否拆仓。
