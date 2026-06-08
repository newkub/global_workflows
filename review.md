---
description: Review code for quality, security, and best practices
agent: review
subtask: true
---

Review code for quality, security, performance, and maintainability.

Scope:
- Default: review staged/unstaged changes (`git diff`).
- Or: review the files given in `$ARGUMENTS`.

Group findings by severity (Critical / Important / Suggestion / Nit) and reference each one with `file_path:line_number`. Quote the offending code. Do not modify any files.
