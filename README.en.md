# CursorX

**Language / 语言：** [中文](README.md)

`CursorX` is a resource repo centered on Cursor.

Think of it as **one main product plus content layers**:

- Main product: `slash-commands/`
- CLI prototype: `packages/cursorx-cli/`
- Content: `commands/`, `skills/`, `tips/`, `configs/`, `docs/`

If you want **install and use**, start with `slash-commands/` and `cursorx-cli`. If you want **where things live**, see [docs/content-map.en.md](docs/content-map.en.md).

## Quick start

Installable commands:

- [slash-commands/README.md](slash-commands/README.md)
- [slash-commands/catalog.md](slash-commands/catalog.md)

Run the CLI from the repo:

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

Naming: npm package `cursorx-cli`, CLI binary `cursorx`.

After publish to npm, prefer:

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

For regular use, global install is fine:

```bash
npm i -g cursorx-cli
cursorx list
cursorx doctor
cursorx install git-push --scope global
cursorx verify git-push --scope global
```

Do **not** `npm install cursorx-cli` inside app projects: it is an installer, not a runtime dependency, and it will dirty `package.json` and lockfiles. Use `npx` or a global install.

After install, verify:

```bash
cursorx verify git-push --scope global
```

Then try `/git-push` in Cursor.

Legacy installer still works:

```bash
node scripts/install-slash-command.mjs --command git-push --scope global
```

## Layers

**Main product**

- `slash-commands/`: sole supported main install entry today
- `packages/cursorx-cli/`: minimal npm CLI

**Content**

- `commands/`: editor command snippets
- `skills/`, `tips/`, `configs/`: skills, workflows, config notes
- `docs/`: conventions and maintainer docs

## Layout

```text
CursorX/
├── slash-commands/
│   ├── global/
│   ├── project/
│   ├── scripts/
│   ├── index.json
│   ├── catalog.md
│   └── README.md
├── packages/
│   └── cursorx-cli/
│       └── README.md
├── commands/
│   ├── development/
│   ├── productivity/
│   ├── ai-assistant/
│   ├── general/
│   ├── index.json
│   ├── catalog.md
│   └── README.md
├── skills/
├── tips/
├── configs/
├── docs/
├── CONTRIBUTING.md
└── README.md
```

## Two kinds of “commands”

**`slash-commands/`**

The only first-class install surface. `cursorx-cli` and install scripts treat this tree as the source of truth.

**`commands/`**

JSON-shaped editor actions (open file, Quick Chat, SCM, etc.). Mostly a reference library; install story is not unified. For something you can ship and reuse, prefer `slash-commands/`.

## Current focus

Git workflows, lint/test helpers, reusable AI entry points, refactors and quality, doc hygiene, everyday shortcuts.

## Entry points

Shippable slash commands:

- [slash-commands README](slash-commands/README.md)
- [slash-commands catalog](slash-commands/catalog.md)

Browse content layers:

- [commands](commands/README.md)
- [skills](skills/README.md)
- [tips](tips/README.md)
- [configs](configs/README.md)
- [Content map](docs/content-map.en.md)
- [Roadmap status](docs/roadmap-status.md)

## Doc index

- [slash-commands README](slash-commands/README.md)
- [Content map](docs/content-map.en.md)
- [Roadmap status](docs/roadmap-status.md)
- [Release process](docs/release-process.md)
- [P2 readiness](docs/p2-readiness.md)
- [P2 options](docs/p2-options.md)
- [P2 decision](docs/p2-decision.md)
- [Route B thresholds](docs/p2-route-b-thresholds.md)
- [P2 observation template](docs/p2-observation-template.md)
- [CLI README](packages/cursorx-cli/README.md)
- [CHANGELOG](CHANGELOG.en.md)
- [Editor commands](docs/command-development.md)
- [Repo strategy](docs/repo-strategy.md)
- [Getting started](docs/getting-started.en.md)
- [Contributing](CONTRIBUTING.en.md)
- [Skill development](docs/skill-development.md)

## License

[MIT License](LICENSE).
