[中文](onboarding-new-project.md) · English

# New project onboarding

Set up CursorX in a new repo and run your first workflow.

## When to use

- First time using CursorX
- Setting up CursorX commands in a new repository
- Helping a colleague configure CursorX for their project

## Requirements

- Node.js >= 18
- A Git repository (already `git init`)
- Cursor editor

## Steps

### 1. Browse available commands

```bash
npx cursorx-cli list
```

Lists all installable slash commands with names, scopes, and descriptions.

Browse first — you don't need to install everything.

### 2. Run a health check

```bash
npx cursorx-cli doctor
```

Checks whether the environment is ready: Cursor config directory exists, command install locations are writable.

Fix any issues following the output guidance.

### 3. Install your first commands

Start with the two highest-frequency commands:

```bash
npx cursorx-cli install git-push --scope global
npx cursorx-cli install staged-review --scope global
```

`global` installs once for all repos; `project` installs into the current repo (good for team consistency).

### 4. Verify installation

```bash
npx cursorx-cli verify git-push --scope global
npx cursorx-cli verify staged-review --scope global
```

Once verified, try typing `/git-push` and `/staged-review` in Cursor.

### 5. Run your first workflow

Follow the [Daily commit](./daily-commit.en.md) workflow:

1. Make a small change
2. `git add` to stage
3. Type `/staged-review` in Cursor
4. Type `/git-push fix: test cursorx setup` in Cursor

If it works end-to-end, setup is complete.

### 6. Expand as needed

Install more commands based on your scenarios:

| Scenario | Commands | Workflow |
|----------|----------|----------|
| Feature development | `lint-fix`, `test-plan` | [Feature completion](./feature-completion.en.md) |
| Opening PRs | `pr-summary` | [PR preparation](./pr-preparation.en.md) |
| Releases | `changelog-entry`, `release-notes`, `upgrade-checklist` | [Release cycle](./release-cycle.en.md) |
| Documentation | `readme-refresh`, `migration-note` | [Doc update](./doc-update.en.md) |

Batch install example:

```bash
npx cursorx-cli install lint-fix --scope global --with-scripts
npx cursorx-cli install test-plan --scope global
npx cursorx-cli install pr-summary --scope global
```

## Expected outcome

- CursorX commands installed and working in Cursor
- At least one full workflow completed successfully
- Know where to find more commands and workflows

## Other resources

- [Slash commands catalog](../slash-commands/catalog.en.md) — all installable commands
- [Workflow catalog](./catalog.en.md) — all workflows
- [Tips](../tips/README.en.md) — standalone habits and methods
- [Config snippets](../configs/README.en.md) — editor config recommendations

## FAQ

**Q: `global` vs `project` — which to choose?**

Personal use: `global`. Team consistency: `project` (installs into the repo's `.cursor/` directory).

**Q: Don't want to install `cursorx-cli` globally?**

Use `npx cursorx-cli ...` — no global install needed. For frequent use, `npm i -g cursorx-cli` is more convenient.

**Q: Installed wrong, want to uninstall?**

Delete the corresponding `.md` file from `~/.cursor/commands/` or `.cursor/commands/`.
