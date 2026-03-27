[中文](README.md) · English

# Workflows

`workflows/` is the **scenario entry point** for CursorX: find what you want to do, then see which commands, tips, and configs to combine.

Relationship to other directories: `slash-commands/` has individual installable commands, `commands/` has editor action snippets, `tips/` has standalone habits, `configs/` has config fragments. Workflows **connect them into complete processes**.

## Layout

```text
workflows/
├── daily-commit.md
├── feature-completion.md
├── pr-preparation.md
├── doc-update.md
├── risk-handoff.md
├── release-cycle.md
├── onboarding-new-project.md
├── code-review-as-reviewer.md
├── debug-and-fix.md
├── catalog.md
├── index.json
└── README.md
```

## By scenario

### Daily development

- [Daily commit](./daily-commit.en.md) — shortest path from code change to push
- [Feature completion](./feature-completion.en.md) — full loop from lint to test to commit
- [Debug and fix](./debug-and-fix.en.md) — from problem discovery to verified fix

### Collaboration and delivery

- [PR preparation](./pr-preparation.en.md) — review, test plan, and summary before opening a PR
- [Risk handoff](./risk-handoff.en.md) — scan risks, write summaries, leave migration notes
- [Code review (as reviewer)](./code-review-as-reviewer.en.md) — AI-assisted review of someone else's PR

### Docs and releases

- [Doc update](./doc-update.en.md) — refresh docs after code changes
- [Release cycle](./release-cycle.en.md) — changelog, release notes, upgrade checklist in one flow

### Getting started

- [New project onboarding](./onboarding-new-project.en.md) — set up CursorX in a new repo and run your first workflow

## How to use

1. Find a workflow by scenario
2. Check "Prerequisites" and install required commands
3. Follow the steps
4. Adapt using "Variations" for your rhythm

## Contributing

Workflow contributions welcome — include **scenario, steps, commands used, expected outcome**.

## License

MIT (see root [LICENSE](../LICENSE)).
