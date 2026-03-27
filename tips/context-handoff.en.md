[中文](context-handoff.md) · English

# Hand off context after long chats

## When

- One thread has run long
- The model repeats, drifts, or drops earlier points
- You are switching tasks

## Steps

1. In the current thread, ask for a short wrap: done, left to do, key files or risks.
2. Start a fresh context.
3. Paste those three buckets and add the new goal.
4. Do not paste full history—prefer conclusions, constraints, and paths.

## What you get

- Less noise stacking in long threads
- Fits phase shifts: implement then review, code then docs
- Especially in large repos

## Pairs well with

- A fixed “handoff summary” template if you switch often
- For a genuinely new problem, a new thread often beats forcing the old one
