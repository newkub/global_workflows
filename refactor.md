---
description: Refactor code to improve structure while preserving behavior
agent: refactor
subtask: true
---

Refactor the target to improve structure, readability, and maintainability.

Scope:
- Default: refactor staged/unstaged changes.
- Or: refactor the files/paths given in `$ARGUMENTS`.

Preserve exact observable behavior. Apply one focused transformation at a time, run tests after each, and revert on regression. Do not add features or fix unrelated bugs.
