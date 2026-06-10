---
title: Git Worktree
description: ใช้งาน Git worktree สำหรับการทำงานกับหลาย branches พร้อมกันโดยไม่ต้อง stash หรือ commit ก่อน
auto_execution_mode: 3
---

ใช้ workflow นี้เมื่อต้องการทำงานกับหลาย Git branches พร้อมกัน โดยไม่ต้องสลับไปมาหรือ stash changes

## Execute

1. Check Current Repository Status

- รัน `git status` ดูสถานะปัจจุบัน
- ตรวจสอบว่ามี uncommitted changes หรือไม่
- ระบุ branch ที่กำลังทำงานอยู่
- ยืนยันว่าไม่มี rebase/merge ค้างอยู่

2. List Existing Worktrees

- รัน `git worktree list`
- ดูว่ามี worktrees ใดบ้างที่มีอยู่แล้ว
- ตรวจสอบ path และ branch ของแต่ละ worktree
- ระบุ worktrees ที่ไม่จำเป็นแล้ว

3. Create New Worktree

- ใช้ `git worktree add <path> <branch>` สำหรับ existing branch
- ใช้ `git worktree add -b <new-branch> <path> <base-branch>` สำหรับสร้างใหม่
- เลือก path ที่อยู่นอก main repository
- ตั้งชื่อ folder ให้สื่อความหมาย (เช่น `../project-feature-branch`)

4. Work in New Worktree

- เปิด IDE ใน path ของ worktree ใหม่
- ทำงานตามปกติเหมือน repository หลัก
- รัน tests และ verify functionality
- Commit changes ใน worktree นั้นโดยอิสระ

5. Remove Worktree When Done

- รัน `git worktree remove <path>` เพื่อลบ worktree
- ใช้ `git worktree prune` ลบ worktrees ที่ถูกลบไปแล้วจาก disk
- ตรวจสอบว่า branch ยังคงอยู่หรือถูกลบไปด้วย
- ยืนยันว่า main repository ไม่ได้รับผลกระทบ

## Rules

1. Path Management

- วาง worktree นอก main repository เสมอ
- ใช้ชื่อ folder ที่สื่อถึง branch หรือ feature
- ไม่สร้าง worktree ซ้อนกัน (nested worktrees)
- เก็บ worktrees ในโฟลเดอร์เดียวกันเพื่อง่ายต่อการจัดการ

2. Branch Strategy

- แต่ละ worktree ควรทำงานบน branch ที่แตกต่างกัน
- ไม่ checkout เป็น detached HEAD ยกเว้นเฉพาะกรณีจำเป็น
- ใช้ worktree สำหรับ long-running branches เช่น release/hotfix
- ลบ worktree หลัง merge branch เสร็จแล้ว

3. Resource Management

- ไม่สร้าง worktree เกินความจำเป็น (จำกัดจำนวน)
- ปิด IDE/terminal ใน worktree ที่ไม่ได้ใช้งานแล้ว
- รัน `git worktree prune` เป็นระยะเพื่อลบ references เก่า
- ตรวจสอบ disk space ก่อนสร้างหลาย worktrees

4. Consistency Maintenance

- รักษา dependencies ให้ consistent ระหว่าง worktrees
- ใช้ shared package manager cache ถ้าเป็นไปได้
- ตั้งค่า environment variables ให้เหมาะสมในแต่ละ worktree
- ระวัง global configuration ที่อาจกระทบทุก worktrees

## Expected Outcome

- สามารถทำงานกับหลาย branches พร้อมกันได้
- ไม่ต้อง stash/commit เมื่อต้องสลับ context
- แต่ละ worktree เป็น isolated environment ที่อิสระจากกัน
- Repository หลักยังคงทำงานได้ปกติ
- จัดการ worktrees ได้อย่างมีประสิทธิภาพ

