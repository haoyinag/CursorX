# Git: commit and push in one flow

Language: [中文](git-push.md)

Goal: Run a fixed sequence—pull/rebase, stage, interactive exclude, commit, push—with confirmations at the right points.

Users often pass the commit message right after the command, e.g.:

- `/git-push feat(commands): add slash command installer`

`${user_input}` is the commit message for this run.

## Rules

1. Use `git branch --show-current` for every pull/push branch name.  
2. Run `git add -A`, list staged files, let the user mark files to **exclude** from the commit; for each marked file run `git restore --staged <file>`; unmarked files stay staged.  
3. `${user_input}` must not be empty; if it clearly fails `<type>(<scope>): <subject>`, warn and confirm before continuing.  
4. On any failure, stop the sequence and explain cause and next steps.  
5. Before `git push`, ask for explicit confirmation again.  

## Steps

1. `git branch --show-current` → `<currentBranch>`  
2. `git status -sb`  
3. `git pull --rebase --autostash --no-tags origin <currentBranch>`  
4. `git add -A`  
5. `git diff --cached --name-only` — if empty: say nothing to commit, stop.  
6. Multi-select UI for staged files; user marks files to **exclude** from the commit.  
7. For each excluded file: `git restore --staged <file>`.  
8. `git diff --cached --name-only` again — if empty: everything excluded, stop.  
9. `git diff --cached` to show what will be committed.  
10. `git commit -m "${user_input}"`  
11. Show `git status -sb` and branch to push; ask whether to continue with push.  
12. Only after explicit approval: `git push origin <currentBranch>`.  
13. `git status -sb` for a short closing summary.  

## Failure handling

- `pull --rebase` conflicts: abort; resolve conflicts, then rerun `/git-push`.  
- `commit` rejected by hooks/commitlint: keep staged; ask user to fix and retry.  
- `push` fails: keep local commit; report cause and next steps.  

## Project customization

Do not edit this generic file for default excludes or team rules. Copy from:

- [`slash-commands/project/git-push.project-template.md`](../project/git-push.project-template.en.md)
