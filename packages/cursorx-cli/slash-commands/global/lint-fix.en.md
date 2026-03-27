# Lint auto-fix for current changes

Language: [中文](lint-fix.md)

Goal: Run ESLint / Stylelint auto-fix **only on files touched by the current Git working set**, not the whole repo by default.

## Notes

- Can be installed globally or under `.cursor/commands/` for a project.  
- Depends on `lint-fix-changed.mjs`; install with `--with-scripts` when needed.  
- The script builds the file list from modified, staged, and untracked paths.  
- If the user insists on repo-wide fix, run the project’s own full fix command instead.  

## Steps

1. Ensure cwd is inside a Git repo; otherwise stop and ask to `cd` into the project.  
2. Resolve script path: project install prefers `<repo>/.cursor/scripts/lint-fix-changed.mjs`, else `~/.cursor/scripts/lint-fix-changed.mjs`.  
3. Run by OS:  
   - PowerShell: `node "$env:USERPROFILE\\.cursor\\scripts\\lint-fix-changed.mjs"`  
   - CMD: `node "%USERPROFILE%\\.cursor\\scripts\\lint-fix-changed.mjs"`  
   - macOS/Linux: `node "$HOME/.cursor/scripts/lint-fix-changed.mjs"`  
4. Exit 0: short summary.  
5. Non-zero: show terminal output; flag rules that need manual fixes.  
6. If the user wants type checks next, suggest the project `typecheck`.  

## Scope

- Fits “current changes only.”  
- Does not replace `lint:fix`, `lint-staged`, or `typecheck`.  
- Toolchains differ; the script probes local executables when possible.  
