---
description: Verify code by running tests, build, and linter; report failures
agent: verify
subtask: true
---

Verify the current state of the code.

Scope:
- If there are staged or unstaged changes, verify those.
- Otherwise verify the files mentioned in `$ARGUMENTS` (or the whole project if none given).

Run lint, typecheck, tests, and build using the project's existing scripts. Report all failures with `file:line` references and one-line fix suggestions. Do not modify any files.
