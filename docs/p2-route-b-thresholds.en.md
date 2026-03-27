[简体中文](./p2-route-b-thresholds.md)

# Route B: Launch Thresholds and Minimal Experiment

Two questions: **when** `cursorx-cli` deserves more independent governance, and what the **smallest** route-B experiment is **without** splitting repositories.

## Current read

Nothing in the repo today **forces** an immediate route-B switch. Closer to:

- `slash-commands/` remains the sole main product layer with clear semantics  
- `cursorx-cli` is the distribution layer but not fully decoupled from the umbrella narrative  
- Pressure is mostly **release governance**, not “repo boundaries are broken”  

So: **stay on route A by default**; define route-B thresholds; run a **minimal** experiment before any split.

## What “worth launching route B” means

Move from “watching” to “launching route B” only when `cursorx-cli` shows **clear independent governance pressure**. Require **at least three of four** threshold groups below.

### 1. Release cadence diverges

**Any one** marks this group:

- Over two consecutive calendar months, `cursorx-cli` releases **materially outnumber** repo-level content releases  
- Across three package releases, at least two are primarily in `packages/cursorx-cli/`, not the content layers  
- Package fixes or compatibility work appear **without** new `slash-commands/` content  

### 2. Package governance needs separation

**Any one** marks this group:

- `packages/cursorx-cli/CHANGELOG.md` needs user-visible notes for **three releases in a row**  
- Package README, install notes, or self-check docs update **often** on their own  
- `cursorx-cli` bugs, compatibility, or install issues become **standalone** topics  

### 3. Audience intent splits

**Any one** marks this group:

- New users enter via `cursorx-cli` usage, not content first  
- External comms must separate “installer capabilities” from “repo assets”  
- A cohort cares only about `install / verify / doctor`, not `commands/`, `tips/`, or `configs/`  

### 4. Monorepo coordination cost jumps

**Any one** marks this group:

- One release cycle repeatedly touches repo README, package README, repo changelog, and package changelog  
- Package versions, npm pages, and repo navigation **keep drifting**  
- Release checks are not just “sync content” but growing **package rules**  

## Do not launch route B for these alone

- A few command syncs that touched CLI data  
- “There is an npm package” ≠ independent product  
- Aesthetics without governance pressure  
- Plugin / Marketplace might be the future entry, but **evidence is still thin**  

## Minimal route-B experiment boundary

Goal is **not** splitting repos; it is to learn whether **more independent governance** actually **lowers** cost. Keep the experiment to four moves:

1. Clear rules for **package-level** vs **repo-level** changes  
2. A standing **package release checklist** for `cursorx-cli`  
3. Stronger package docs while `slash-commands/` stays the **only** command source  
4. Observe before adding separate issues / release pages / repositories  

**Out of scope for the experiment**: split repos; duplicate command indexes; promote `cursorx-cli` to a second main product layer; elevate Plugin / Marketplace to the main line **early**.

## Minimal experiment plan

### Objective

Validate whether `cursorx-cli` deserves a **clearer independent governance story** while staying **strongly tied** to `slash-commands/`.

### Window

Observe **4–8 weeks**, or at least **three consecutive** `cursorx-cli`-related changes.

### Actions

#### 1. Classify every change

Tag each change as:

- `repo-only`: content or navigation only; **no** change to what `cursorx-cli` exposes  
- `cli-coupled`: originates in `slash-commands/` and must flow into the package  
- `cli-native`: mostly `packages/cursorx-cli/`; worth a release even without new slash content  

Repeated `cli-native` signals rising route-B pressure.

#### 2. Track minimal metrics

Count: `cursorx-cli` releases; repo content releases; **standalone** package README/CHANGELOG edits; fixes **only** for CLI or install UX. Manual tracking is fine. Use [`p2-observation-template.md`](./p2-observation-template.en.md).

#### 3. Tighten package release self-check

On top of [`release-process.md`](./release-process.en.md), for every `cursorx-cli` touch confirm: `cli-native` or `cli-coupled`; package README/changelog updates; whether npm is **warranted** vs repo-only edits. Goal: make route-B pressure **visible**, not buried in umbrella releases.

#### 4. Keep a single command source

During the experiment: `slash-commands/index.json` remains the **only** command source; `cursorx-cli` stays installer/distributor; `commands/` stays reference-only. This isolates whether governance changes help without structural noise.

## First step after route B “starts”

Even after thresholds hit, **do not** split repos first. Instead:

1. Classify `cursorx-cli` work under `cli-native` / `cli-coupled` / `repo-only`  
2. Tighten package changelog and release-note rules  
3. Watch whether package issues deserve their own workflow  
4. Revisit splitting only after those moves sustain an independent cadence  

## When to review

Formal review when either:

1. 4–8 weeks of observation, or  
2. Three `cursorx-cli`-related changes accumulated  

Suggested order:

1. Reread experiment notes in [`p2-observation-template.md`](./p2-observation-template.en.md)  
2. Score the four threshold groups  
3. Update the formal call in [`p2-decision.md`](./p2-decision.en.md)  

## Execution guidance now

1. Keep route A as the main line  
2. Keep observing against this doc  
3. Start the **in-repo** minimal route-B experiment now  
4. Pause horizontal content expansion; accumulate governance evidence  

## Related docs

- [`./p2-readiness.md`](./p2-readiness.en.md)  
- [`./p2-options.md`](./p2-options.en.md)  
- [`./p2-decision.md`](./p2-decision.en.md)  
- [`./release-process.md`](./release-process.en.md)  
- [`./p2-observation-template.md`](./p2-observation-template.en.md)  
- [`./repo-strategy.md`](./repo-strategy.en.md)  
- [`../packages/cursorx-cli/README.md`](../packages/cursorx-cli/README.md)  
