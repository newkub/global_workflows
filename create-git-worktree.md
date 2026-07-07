---
title: Create Git Worktree
description: สร้าง git worktree ใน worktree/ ของ project เพื่อทำงานหลาย branches พร้อมกัน
auto_execution_mode: 3
related_workflows:
  - /follow-git-worktree
---

## Goal

สร้าง git worktree ใน directory `worktree/` ของ project เพื่อทำงานหลาย branches พร้อมกันโดยไม่ต้อง clone repository หลายครั้ง

## Scope

สร้าง worktree ใน `worktree/` ของ project root สำหรับ branch ที่ต้องการทำงาน

## Execute

### 1. Prepare Worktree Directory

1. ตรวจสอบว่า `worktree/` directory มีอยู่ใน project root
2. ถ้าไม่มีให้สร้าง `worktree/` directory
3. ตรวจสอบว่า `worktree/` ไม่ได้อยู่ใน `.gitignore`

### 2. Check Current Branch

1. รัน `git branch --show-current` เพื่อดู branch ปัจจุบัน
2. รัน `git status` เพื่อตรวจสอบ working tree clean
3. ถ้ามี uncommitted changes ให้ commit หรือ stash ก่อน

### 3. Create Worktree

1. รัน `git worktree add worktree/<branch-name> <branch-name>` เพื่อสร้าง worktree
2. ถ้าต้องการสร้าง branch ใหม่ใช้ `git worktree add worktree/<new-branch> -b <new-branch>`
3. ตรวจสอบว่า worktree ถูกสร้างด้วย `git worktree list`
4. รัน `cd worktree/<branch-name>` เพื่อเข้าไปทำงานใน worktree

### 4. Verify Worktree

1. ตรวจสอบว่า worktree directory มีไฟล์ครบถ้วน
2. รัน `git status` ใน worktree เพื่อตรวจสอบ branch ถูกต้อง
3. ตรวจสอบว่าสามารถทำงานได้ปกติใน worktree

## Rules

### 1. Worktree Directory Structure

- เก็บ worktrees ใน `worktree/` directory ของ project root
- ใช้ชื่อ directory ตรงกับ branch name
- หลีกเลี่ยงชื่อที่ซับซ้อนหรือมี spaces

### 2. Branch Naming

- ใช้ branch name ที่สื่อความหมาย (feature/, bugfix/, hotfix/)
- ตรวจสอบว่า branch มีอยู่จริงบน remote ก่อนสร้าง worktree
- ถ้าสร้าง branch ใหม่ ให้ใช้ `-b` flag

### 3. Working Tree Clean

- ต้อง commit หรือ stash uncommitted changes ก่อนสร้าง worktree
- ตรวจสอบ working tree clean ก่อนสร้าง worktree
- ห้ามสร้าง worktree ขณะมี uncommitted changes

### 4. Worktree Management

- ลบ worktree หลังจากเสร็จงานด้วย `git worktree remove worktree/<branch-name>`
- รัน `git worktree prune` อย่างสม่ำเสมอเพื่อลบ worktrees ที่ไม่มี directory
- หลีกเลี่ยงการสร้าง worktree จำนวนมากโดยไม่จำเป็น

## Expected Outcome

- Worktree ถูกสร้างใน `worktree/` directory ของ project
- Worktree อยู่ใน branch ที่ต้องการและพร้อมทำงาน
- สามารถทำงานหลาย branches พร้อมกันโดยไม่ต้อง clone repository หลายครั้ง
