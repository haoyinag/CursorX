[中文](selection-first-prompts.md) · English

# Select first, then ask

## When

- You only want the model to see a small slice of code
- You do not want whole-file context to mislead it
- You want quick explanations, refactors, or test ideas

## Steps

1. Select the **smallest useful** chunk—a function, component, or branch.
2. Ask via Quick Chat, Chat, or related commands.
3. One goal per question: what it does, risks, or what to test.
4. If the first answer misses, add business context—do not start with the whole repo.

## What you get

- Lower odds of scope confusion
- Fits explain, review, and test brainstorming
- Good prompts are easier to turn into repeatable flows

## Pairs well with

- `commands/ai-assistant/explain-selected-code.json`
- `commands/ai-assistant/generate-tests-for-selection.json`
