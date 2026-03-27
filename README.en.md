# CursorX

**Language / 语言：** [中文](README.md)

`CursorX` collects installable Cursor commands, editor action snippets, workflow notes, and supporting docs.

If you just want to get started, use these two entry points:

- Installable commands: [slash-commands README](slash-commands/README.en.md)
- Installer: [cursorx-cli README](packages/cursorx-cli/README.en.md)

If you want the directory map first, see [docs/content-map.en.md](docs/content-map.en.md).

## Quick start

Use it directly:

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

Or browse installable commands:

- [slash-commands README](slash-commands/README.en.md)
- [slash-commands catalog](slash-commands/catalog.en.md)

You can also run the CLI from the repo:

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

Naming: npm package `cursorx-cli`, CLI binary `cursorx`.

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

## What else is here

- [slash-commands](slash-commands/README.en.md): installable `/commands`
- [packages/cursorx-cli](packages/cursorx-cli/README.en.md): install, verify, and troubleshooting commands
- [commands](commands/README.en.md): JSON editor-action snippets
- [skills](skills/README.en.md): reusable AI workflow notes
- [tips](tips/README.en.md): workflow and collaboration tips
- [configs](configs/README.en.md): config snippets
- [docs](docs/README.en.md): development, release, and strategy docs

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

## Entry points

Install commands:

- [slash-commands README](slash-commands/README.en.md)
- [slash-commands catalog](slash-commands/catalog.en.md)

Browse more:

- [commands](commands/README.en.md)
- [skills](skills/README.en.md)
- [tips](tips/README.en.md)
- [configs](configs/README.en.md)
- [Content map](docs/content-map.en.md)
- [Roadmap status](docs/roadmap-status.en.md)

## Doc index

- [slash-commands README](slash-commands/README.en.md)
- [Content map](docs/content-map.en.md)
- [Roadmap status](docs/roadmap-status.en.md)
- [Release process](docs/release-process.en.md)
- [P2 readiness](docs/p2-readiness.en.md)
- [P2 options](docs/p2-options.en.md)
- [P2 decision](docs/p2-decision.en.md)
- [Route B thresholds](docs/p2-route-b-thresholds.en.md)
- [P2 observation template](docs/p2-observation-template.en.md)
- [CLI README](packages/cursorx-cli/README.en.md)
- [CHANGELOG](CHANGELOG.en.md)
- [Editor commands](docs/command-development.en.md)
- [Repo strategy](docs/repo-strategy.en.md)
- [Getting started](docs/getting-started.en.md)
- [Contributing](CONTRIBUTING.en.md)
- [Skill development](docs/skill-development.en.md)

## License

[MIT License](LICENSE).
