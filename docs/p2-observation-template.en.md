[简体中文](./p2-observation-template.md)

# P2 Observation Log Template

While route A remains the default main line, use this template to cheaply record whether route B is showing real launch signals. The goal is not fancy reporting—it is to give every `cursorx-cli`-related change a consistent, minimal record.

## When to log

Log an observation when you:

- Are about to ship repo content  
- Are about to ship `cursorx-cli`  
- See clear `cli-native` fixes or install-experience changes  
- Need to re-decide whether route B is worth starting  

## Recording rules

Keep each entry short, but at least include:

1. Date of the change  
2. Classification  
3. Whether an npm release was needed  
4. Whether standalone package-only doc updates were required  
5. Whether new route B launch signals appeared  

Use these classifications (definitions stay aligned with [`release-process.md`](./release-process.en.md)):

- `repo-only`
- `cli-coupled`
- `cli-native`

## Metrics

Over the observation window, track these four:

| Metric | Meaning |
| --- | --- |
| `cli_releases` | `cursorx-cli` releases |
| `repo_releases` | Repo-level content releases |
| `package_docs_only_updates` | Standalone edits driven only by package README / CHANGELOG / install docs |
| `cli_only_fixes` | Fixes triggered only by CLI logic, compatibility, or install experience |

## Review timing

Do a formal review when either:

- You have observed continuously for 4–8 weeks, or  
- There have been 3 `cursorx-cli`-related changes  

During review, cross-check:

- [`p2-route-b-thresholds.md`](./p2-route-b-thresholds.en.md)
- [`p2-decision.md`](./p2-decision.en.md)

## How to write

Copy the templates below and append in the same document. Prefer a short “observation window” overview first, then entries.

### Observation window overview template

```md
## Observation Window

- Start date:
- Review trigger:
- Current default route: A
- Command source remains: `slash-commands/index.json`

### Running Metrics

- cli_releases: 0
- repo_releases: 0
- package_docs_only_updates: 0
- cli_only_fixes: 0
```

### Single-entry template

```md
### Entry

- Date:
- Change summary:
- Classification: repo-only | cli-coupled | cli-native
- Affected areas:
- npm release needed: yes | no
- Package-only docs touched: yes | no
- CLI-only fix: yes | no
- User-visible change: yes | no
- New route B signals:
- Notes:
```

### Review conclusion template

```md
## Review

- Review date:
- Observation window:
- Total cli_releases:
- Total repo_releases:
- Total package_docs_only_updates:
- Total cli_only_fixes:
- Threshold groups hit:
- Decision: stay on route A | continue observing | start route B experiment
- Follow-up actions:
```

## Principles for now

Prioritize consistent wording, evidence for the next review, and no heavy tooling yet. No need to automate this template first.

## Related docs

- [`./release-process.md`](./release-process.en.md)  
- [`./p2-route-b-thresholds.md`](./p2-route-b-thresholds.en.md)  
- [`./p2-decision.md`](./p2-decision.en.md)  
- [`./roadmap-status.md`](./roadmap-status.en.md)  
