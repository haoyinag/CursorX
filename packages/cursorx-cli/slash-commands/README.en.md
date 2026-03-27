# Cursor slash commands

Language: [中文](README.md)

`slash-commands/` is CursorX’s **only primary install path** for `/command` usage in chat and the Agent input.

Unlike `commands/*.json`, these are **native Markdown slash commands**, better for:

- Global install, personal use  
- Project install, shipped with the repo  
- Copying to other repos  
- Serving as the stable source for the future CLI  

## Layout

```text
slash-commands/
├── global/
├── project/
├── scripts/
├── index.json
├── catalog.md
└── README.md
```

## Scopes

**Global** — one user, many repos:

- Commands: `~/.cursor/commands/`
- Scripts: `~/.cursor/scripts/`

**Project** — tied to the repo, versionable:

- Commands: `<repo>/.cursor/commands/`
- Scripts: `<repo>/.cursor/scripts/`

## Installation

### 1. CLI (in-repo)

```bash
node packages/cursorx-cli/bin/cursorx.js list
node packages/cursorx-cli/bin/cursorx.js doctor
node packages/cursorx-cli/bin/cursorx.js install git-push --scope global
node packages/cursorx-cli/bin/cursorx.js verify git-push --scope global
node packages/cursorx-cli/bin/cursorx.js install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

After npm publish, use `npx cursorx-cli …`; package `cursorx-cli`, binary `cursorx`. For daily use: `npm i -g cursorx-cli`.

**Do not** add `cursorx-cli` as an app dependency—the installer targets Cursor’s command folders, not your build.

### 2. Install scripts

```bash
node scripts/install-slash-command.mjs --command git-push --scope global
node scripts/install-slash-command.mjs --command lint-fix --scope project --repo D:/work/code/my-repo --with-scripts
```

PowerShell:

```powershell
./scripts/install-slash-command.ps1 -Command git-push -Scope global
./scripts/install-slash-command.ps1 -Command lint-fix -Scope project -RepoPath D:\work\code\my-repo -WithScripts
```

`packages/cursorx-cli/` and `scripts/install-slash-command.*` both copy into Cursor’s recognized paths; `doctor` / `verify` post-check.

**Minimal check:** `cursorx install git-push --scope global` → `verify` → type `/git-push` in Chat.

### 3. Manual

1. Find the command in [catalog.md](catalog.en.md)  
2. Copy the `.md` into the target `commands/`  
3. If the command needs scripts, copy from `scripts/`  
4. Restart or reload Cursor  

## Featured commands

`/git-push`, `/lint-fix`, `/staged-review`, `/test-plan`, `/pr-summary`, `/readme-refresh`, `/risk-scan`, `/diff-summary`, `/migration-note`, `/release-notes`, `/changelog-entry`, `/upgrade-checklist`

Details: [catalog.md](catalog.en.md).

**Workflows:**

- Git wrap-up: `/lint-fix` → `/staged-review` → `/git-push`  
- Before QA: `/test-plan` → `/staged-review`  
- Before PR: `/pr-summary`  
- Docs: `/readme-refresh`  
- Risk: `/risk-scan`  
- Handoff: `/diff-summary`  
- Migration copy: `/migration-note`  
- Release copy: `/release-notes`  
- Changelog lines: `/changelog-entry`  
- Upgrade steps: `/upgrade-checklist`  

## vs `commands/`

- `slash-commands/`: native slash; clear **global / project** story  
- `commands/`: editor-command material library  

For stable reuse elsewhere, **prefer slash commands**.

## CLI relationship

See [`packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md). The CLI is planned to read [`slash-commands/index.json`](index.json)—**source of truth is `slash-commands/`**; the CLI installs and distributes, it is not a parallel command system.
