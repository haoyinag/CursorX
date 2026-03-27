[中文](README.md) · English

# cursorx-cli

`cursorx-cli` is CursorX’s **minimal runnable CLI**—a proving ground for a future unified install entry. It is packable and npm-ready today; **`cursorx-cli@0.3.2`** matches the current install, self-check, and command-data behavior.

Naming is fixed:

- npm package: `cursorx-cli`
- CLI binary: `cursorx`

## Usage (from the repo)

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

After npm publish, prefer:

```bash
npx cursorx-cli list
npx cursorx-cli doctor
npx cursorx-cli install git-push --scope global
npx cursorx-cli verify git-push --scope global
```

Or global install:

```bash
npm i -g cursorx-cli
cursorx list
cursorx doctor
cursorx install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
cursorx verify lint-fix --scope project --repo D:/work/code/my-repo
```

**Do not** `npm install cursorx-cli` inside app projects: this is a command installer, not a runtime dependency—it pollutes `package.json`, lockfiles, and `node_modules` without helping the app.

## Why it is closer to a real package

- Standalone `package.json`, `bin/`, `src/`
- Packaged with its own `slash-commands/` data
- `prepack` syncs latest command data from the repo root (see root scripts)

## Responsibilities (now and next)

- Read [`slash-commands/index.json`](../../slash-commands/index.json)
- Unified installs, e.g. `cursorx install git-push --scope global`
- List commands, install to global or project scope, sync helper scripts
- Post-install checks: `cursorx doctor`, `cursorx verify <command-id> --scope <global|project> [--repo <path>]`
- Evolve in-repo installers—no second command source

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

`packages/cursorx-cli/` is the new CLI; `install-slash-command.mjs` wraps older call paths. Both share the same command index and install semantics.

## After publish, good next steps

1. Exercise `doctor` / `verify` in more clean environments  
2. Add high-value slash commands  
3. Clearer changelog / release notes  
4. Revisit Plugin / Marketplace shape  

Package scripts:

```bash
npm run list
npm run check
```

History: [`CHANGELOG.md`](./CHANGELOG.md).

## When a standalone npm package is justified

- You need a dedicated version line and changelog  
- The installer ships more often than content  
- Users treat “install commands” as its own product  
- You need `npx`, `npm i -g`, or CI distribution  

## Layout

- `package.json` — package metadata  
- `bin/cursorx.js` — entry  
- `src/cli.mjs` — args and subcommands  
- `src/lib.mjs` — install core  
- `slash-commands/` — bundled command data (synced from repo root; do not duplicate edits against the `slash-commands/` source tree)
