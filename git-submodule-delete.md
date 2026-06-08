---
trigger: manual
---

- ลบออกจาก `.gitmodules`
- ลบ submodules นั้นๆ
- `cd .git/modules` แล้ว `Remove-Item <folder> -Recurse -Force`
- `git gc`
