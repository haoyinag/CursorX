# cursorx-cli

[中文](README.md) · English

`cursorx-cli` installs CursorX slash commands into the directories Cursor already reads, and provides verification commands after install.

Current version: **`cursorx-cli@0.3.3`**

Naming:

- npm package: `cursorx-cli`
- CLI binary: `cursorx`

## Use it directly

Recommended:

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

For regular use, a global install is also fine:

```bash
npm i -g cursorx-cli
cursorx list
cursorx doctor
cursorx install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
cursorx verify lint-fix --scope project --repo D:/work/code/my-repo
```

## Run from the repo

At the repository root:

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js --version
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
node packages/cursorx-cli/bin/cursorx.js verify lint-fix --scope project --repo D:/work/code/my-repo
```

`help`, `list`, `doctor`, `install`, and `verify` output is tuned for terminals and degrades on narrow or colorless environments.

**Do not** `npm install cursorx-cli` inside app projects: this is a command installer, not a runtime dependency—it pollutes `package.json`, lockfiles, and `node_modules` without helping the app.

## Common commands

- List available commands
- Install into `global` or `project`
- Sync helper scripts when a command needs them
- Run post-install checks: `cursorx doctor`, `cursorx verify <command-id> --scope <global|project> [--repo <path>]`

## Self-checks

- **`doctor`**: Cursor command directories exist; suggests next checks  
- **`verify`**: Confirms command files and helper scripts landed in the target scope  

Minimal verification:

```bash
cursorx install git-push --scope global
cursorx verify git-push --scope global
```

Then try `/git-push` in Cursor chat. If it does not appear, reload or restart Cursor.

## Legacy installers

Compatibility scripts remain:

- [`scripts/install-slash-command.mjs`](../../scripts/install-slash-command.mjs)
- [`scripts/install-slash-command.ps1`](../../scripts/install-slash-command.ps1)

If you need release or strategy details, see:

- [`../../docs/repo-strategy.en.md`](../../docs/repo-strategy.en.md)
- [`../../docs/release-process.en.md`](../../docs/release-process.en.md)

## Package scripts

```bash
npm run list
npm run check
```

History: [`CHANGELOG.en.md`](./CHANGELOG.en.md).

## Layout

- `package.json` — package metadata  
- `bin/cursorx.js` — entry  
- `src/cli.mjs` — args and subcommands  
- `src/lib.mjs` — install core  
- `slash-commands/` — bundled command data (synced from repo root; do not duplicate edits against the `slash-commands/` source tree)
