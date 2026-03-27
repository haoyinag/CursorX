# Upgrade checklist

Language: [中文](upgrade-checklist.md)

Goal: When a release changes install flow, command set, config snippets, or workflows, produce an **actionable** user checklist.

Optional target, e.g.:

- `/upgrade-checklist`
- `/upgrade-checklist for teams using global slash commands`

`${user_input}` is who or what scenario to optimize for; may be empty.

## Rules

1. Only list steps grounded in real changes—**no invented upgrades**.  
2. Answer: who must care, what to do, how to verify.  
3. If existing users need no action, say “no extra upgrade steps.”  
4. If `${user_input}` is set, center the checklist on that audience.  
5. Steps must be executable, not vague advice.  

## Steps

1. Read diffs for the release, plus README and command docs.  
2. Detect: new installs, script sync, command replacements, doc/usage drift.  
3. Turn into a checklist.  
4. Add verification after upgrade.  

## Output format

- `Who should upgrade`
- `Checklist` (checkbox-style steps)
- `Verification`

## Scope

- Installer upgrades, command bundle changes, path/process shifts  
- Complements release notes; focuses on **what users do next**  
