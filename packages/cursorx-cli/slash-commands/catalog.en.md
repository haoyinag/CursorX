# Slash command catalog

Language: [中文](catalog.md)

For people installing commands into Cursor for daily use.

## Installable commands

### `/git-push`

- File: [`slash-commands/global/git-push.md`](global/git-push.md)
- Scopes: `global`, `project`
- Scenario: Standardized pull, stage, exclude files, commit, push  
- Value: Solidifies the common commit/push flow  
- Scripts: none  

### `/lint-fix`

- File: [`slash-commands/global/lint-fix.md`](global/lint-fix.md)
- Scopes: `global`, `project`
- Scenario: ESLint / Stylelint auto-fix **only on current Git changes**  
- Value: Avoids whole-repo lint fix every time  
- Script: [`slash-commands/scripts/lint-fix-changed.mjs`](scripts/lint-fix-changed.mjs)

### `/staged-review`

- File: [`slash-commands/global/staged-review.md`](global/staged-review.md)
- Scopes: `global`, `project`
- Scenario: Pre-commit review of **staged** diff only  
- Value: Catches bugs, regressions, test gaps early  
- Scripts: none  

### `/test-plan`

- File: [`slash-commands/global/test-plan.md`](global/test-plan.md)
- Scopes: `global`, `project`
- Scenario: From staged changes, outline smoke, regression, edge-case tests  
- Value: Moves test thinking earlier  
- Scripts: none  

### `/pr-summary`

- File: [`slash-commands/global/pr-summary.md`](global/pr-summary.md)
- Scopes: `global`, `project`
- Scenario: Before opening a PR—summary, risks, test plan  
- Value: PR text explains *why* and *impact*, not only files  
- Scripts: none  

### `/readme-refresh`

- File: [`slash-commands/global/readme-refresh.md`](global/readme-refresh.md)
- Scopes: `global`, `project`
- Scenario: Refresh README/docs from code, tree, or diff  
- Value: Docs stay closer to reality  
- Scripts: none  

### `/risk-scan`

- File: [`slash-commands/global/risk-scan.md`](global/risk-scan.md)
- Scopes: `global`, `project`
- Scenario: Before commit/QA/merge—surface high-risk spots  
- Value: Risk identification earlier  
- Scripts: none  

### `/diff-summary`

- File: [`slash-commands/global/diff-summary.md`](global/diff-summary.md)
- Scopes: `global`, `project`
- Scenario: Turn staged or working-tree diff into handoff/sync/daily notes  
- Value: Less manual change narration  
- Scripts: none  

### `/migration-note`

- File: [`slash-commands/global/migration-note.md`](global/migration-note.md)
- Scopes: `global`, `project`
- Scenario: After changing entrypoints, install paths, config layout, or structure  
- Value: Clearer upgrade path for users  
- Scripts: none  

### `/release-notes`

- File: [`slash-commands/global/release-notes.md`](global/release-notes.md)
- Scopes: `global`, `project`
- Scenario: External-facing notes after package or workflow upgrades  
- Value: States what the release delivers  
- Scripts: none  

### `/changelog-entry`

- File: [`slash-commands/global/changelog-entry.md`](global/changelog-entry.md)
- Scopes: `global`, `project`
- Scenario: Structured changelog entry for a version or change set  
- Value: Traceable increments  
- Scripts: none  

### `/upgrade-checklist`

- File: [`slash-commands/global/upgrade-checklist.md`](global/upgrade-checklist.md)
- Scopes: `global`, `project`
- Scenario: After installer or config changes—user upgrade steps  
- Value: Makes “what users do next” explicit  
- Scripts: none  

## Project template

### `git-push.project-template`

- File: [`slash-commands/project/git-push.project-template.md`](project/git-push.project-template.md)
- Scenario: Project-specific excludes, directory split rules, or team policy  
- Value: Keeps global commands clean  

## Suggested bundles

- **Git:** `/git-push` + `/staged-review`  
- **Change wrap-up:** `/lint-fix` → `/test-plan` → `/staged-review` → `/git-push`  
- **PR:** `/staged-review` → `/test-plan` → `/pr-summary`  
- **Docs:** `/readme-refresh` → `/migration-note` → `/pr-summary`  
- **Risk & handoff:** `/risk-scan` → `/diff-summary` → `/migration-note`  
- **Release:** `/changelog-entry` → `/release-notes` → `/upgrade-checklist`  
