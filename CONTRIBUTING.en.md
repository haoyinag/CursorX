# Contributing

**Language / 语言：** [中文](CONTRIBUTING.md)

Contributions welcome. This repo does not optimize for volume: **reuse, complete docs, stable layout** matter more.

## Three rules

1. Make it usable before making it numerous.  
2. Add context, indexes, and “when to use” before adding files.  
3. Keep similar content structurally aligned so the tree stays navigable.  

## What to contribute

### Commands (highest priority)

Decide whether you are changing **`slash-commands`** or **`commands`**.

1. `slash-commands` → [Slash command development](./docs/slash-command-development.md)  
2. `commands` → [Editor command development](./docs/command-development.md)  
3. Update the local index and catalog.  
4. State scenario, prerequisites, and why it helps.  

If you touch positioning, install paths, or CLI direction, also read:

- [Repo strategy](./docs/repo-strategy.md)
- [CLI README](./packages/cursorx-cli/README.md)

### Skills

For `skills/`, cover source, scenarios, capabilities, and usage. See [Skill development](./docs/skill-development.md).

### Tips

`tips/`: concrete scenario and steps, not slogans.

### Config

`configs/`: platform/version, effect, conflicts or caveats.

## Workflow

1. Fork → branch → implement  
2. Self-check structure, links, and descriptions  
3. Open a PR  

If you touch `commands/`:

```bash
node scripts/validate-commands.mjs
```

If you touch `slash-commands/`, try the installer locally:

```bash
node scripts/install-slash-command.mjs --list
```

## Extra checks for command PRs

1. Filenames read clearly  
2. Right shape: slash vs editor command  
3. Editor: valid JSON  
4. Slash: install paths and helper scripts documented  
5. Catalog and index updated  

## Commit messages

Prefer [Conventional Commits](https://www.conventionalcommits.org/):

```text
type(scope): description
```

Common `type` values: `feat`, `fix`, `docs`, `refactor`, `chore`.

Examples:

```text
feat(slash-commands): add lint-fix installer support
feat(commands): add quick chat editor command
docs(repo): clarify slash vs editor commands
```

## What tends to merge cleanly

- Solves a real problem  
- Others can reuse it  
- Docs and files stay in sync  
- No dependency on private setup  

## License

By contributing, you agree your work is licensed under the project’s current [MIT License](./LICENSE).
