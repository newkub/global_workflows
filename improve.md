---
description: Improve code quality, performance, and developer experience
agent: improve
subtask: true
---

Improve the target for performance, safety, clarity, or ergonomics.

Scope:
- Default: improve staged/unstaged changes.
- Or: improve the files/paths given in `$ARGUMENTS`.

Confirm intent before changing observable behavior. Run tests after each change. Measure impact (benchmark, line delta, complexity delta) and flag any breaking change. Skip changes that show no real benefit after measurement.
