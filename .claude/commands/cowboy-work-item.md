---
description: cowboy pipeline — plan or build the current work item (unattended).
---
You are running a cowboy pipeline stage on the Appropos website repo (appropos.ai — merging to `master` deploys production), unattended. cowboy
names the stage (`plan` or `build`) and the work item in the prompt, e.g.
`cowboy work item: 30` — that number is the forge item (issue) you are working on. You
have no terminal — never wait for input. If you truly need a human decision, stop
with `COWBOY_RESULT: blocked` and one question; cowboy relays it to the item and
resumes you with the answer.

First understand the work:

- Read the whole item — title, description, every comment (where `<N>` is the work
  item number from the prompt). If it references images, fetch and actually look at them.
  **How** you reach this project's forge — the exact command for reading an item,
  searching, posting a note, filing an item or editing the MR — is in the **Forge
  tooling** block at the end of your prompt. Use those commands, and follow its rules
  for targeting the project.
- Read `CLAUDE.md` and obey its rules before touching code.
- Note the **target branch**: the prompt's `Target branch: <name>` line (also
  `$COWBOY_TARGET_BRANCH`). It's the branch this item is cut from, reviewed against and
  merged into — `main`, or an integration branch a feature's items share (decision
  `0284`). Read code and history from `origin/<target>` (`git fetch origin <target>`),
  not `main`: a claim can hold on one and not the other.

## plan
Three cheap checks before you prescribe anything — each can change or end the run:

- **Is it still true?** Verify the item's central claim against current
  `origin/<target>` before spending a session on it. Items age: something may already be fixed, made moot, or
  covered by another item. If it no longer holds, don't build it — stop with
  `COWBOY_RESULT: blocked` and one question that states the evidence and asks whether
  to close it as stale (closing "not worth doing" is the human's call, not yours).
- **What else touches this?** Search the open items for 2–3 distinctive terms (see
  the Forge tooling block). Name any neighbours in the plan. If this item is one
  facet of a larger problem (several items patching symptoms of one mechanism), ask via
  `COWBOY_RESULT: blocked` whether to consolidate rather than patch a facet. Related
  items inform scope and questions, never the diff — say what you deliberately leave to
  them.
- **Enumerate before you prescribe.** List every caller of anything shared you'd touch
  (a port, an exported helper, a reducer/`switch` case, a shared component) before
  choosing an approach, and put the list in the plan. Don't generalise from the one path
  the item describes.

Ground the plan in the code and `CLAUDE.md`. Then post the plan as a note on the item (see the
Forge tooling block) in this shape, and stop with `COWBOY_RESULT: ok`:

```
## Plan — <short title>

**Approach:** 2–4 sentences.
**Files:** the paths you expect to touch.
**Config/flag:** any opt-in or default-preserving guard, or "none needed".
**Verification:** the exact checks (`npm run lint`, `npm run build`, a screenshot of the affected page).

### Decisions
One block per clarifying question you resolved, in the lettered format a Claude plan
uses: the question, each option you weighed as a choice with its one-line trade-off,
and the one you went with marked (chosen). Keep the rejected options — they are
the record of what was considered.

**Q1. <the question>**
- **A (chosen).** <option> — <trade-off>
- **B.** <option> — <trade-off>

If you asked nothing, write "No clarifications needed." and one line on *why* the item
was unambiguous.
```

**The bar for asking is low here, not high.** The work item is the approval, so if two
builds are each defensible, that is a `COWBOY_RESULT: blocked` question with one clear
choice — even though asking ends the run. Guessing an interpretation to look successful
is the exact failure this guards against; an open-ended ask ("make X *better*") almost
always hides a decision worth surfacing.

**Ask it as choices when you can.** "Two defensible builds" is by definition a
decision you can enumerate, so end the `COWBOY_QUESTION:` body with a ` ```question `
fence carrying `{"options":[{"label":"…","description":"…"}]}` — cowboy strips the
fence and renders the options as a card the human taps, and the label you get back
is your next run's context. Put the question and its reasoning in the prose above
the fence; keep writing plain prose when the ask is genuinely open-ended.

## build
You are in an isolated git worktree already checked out on your task branch (run
`git branch --show-current` — it looks like `cowboy/appropos-<item>`). Implement the
plan there. cowboy brought the branch current with
`origin/<target>` just before this run (decision `0323`); if your prompt has a
`Branch status:` line, that refresh conflicted — rebase onto `origin/<target>` and
resolve the conflicts first. Keep the change focused; leave the tree green —
**`npm run lint` and `npm run build` must pass** (run `npm ci` first if `node_modules` is missing).

**For a visible change, capture a screenshot** of the affected page: after `npm run build`, serve `out/` (`npx serve out -l 4310`), open it in a headless browser, save a PNG, and print `COWBOY_ARTIFACT: <absolute path>` (cowboy embeds it in the MR). If you cannot run a browser, say so in your summary.

Update `README.md` in the same commit when behavior a reader would care about changes.

Commit with an imperative, sentence-case subject and a `Part of #<item>` line, then
**push the branch**: `git push --force-with-lease -u origin HEAD`. Do NOT open the merge request —
cowboy opens it from your pushed branch.

When build is done, print (cowboy opens the merge request from these):

- COWBOY_BRANCH: <the output of `git branch --show-current`>
- COWBOY_MR_TITLE: <concise, imperative title>
- COWBOY_ARTIFACT lines are optional; note which docs you touched (or why none) in
  your summary so it's visible on the item.

## Result cowboy reads

Print these as the LAST lines of your output (cowboy interprets only these):

- COWBOY_RESULT: ok            — stage complete, advance the pipeline.
- COWBOY_RESULT: blocked       — you need a human; also print:
  COWBOY_QUESTION: <one clear question>
- COWBOY_RESULT: failed        — you could not proceed; also print:
  COWBOY_ERROR: <short reason>

COWBOY_QUESTION may span several lines of markdown (a lead line plus options) —
everything up to the next COWBOY_ marker is the question, and it renders
formatted in the dashboard and the forge comment, so format it to read clearly.
Keep the other markers to a single line.

Never invent the markers unless the condition is true.
