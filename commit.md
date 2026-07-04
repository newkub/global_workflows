---
title: Commit
description: Commit ไฟล์ที่มีการเปลี่ยนแปลงตามมาตรฐาน conventional commits
auto_execution_mode: 3
---

## Goal

Commit ไฟล์ที่มีการเปลี่ยนแปลงตามมาตรฐาน conventional commits โดยรองรับ split commit ตามประเภทของการเปลี่ยนแปลง

## Scope

ใช้สำหรับ commit ไฟล์ที่มีการเปลี่ยนแปลง โดย:
- Split Commit: แยก commit ตามประเภทของไฟล์ (docs, config, code, etc.)
- Single Commit: commit เฉพาะไฟล์ที่ task แก้ไป
- ใช้ `git add <files>` หรือ `git add -p` เสมอ ไม่ใช้ `git add .`

## Execute

### 1. Setup Gitignore

ตรวจสอบและตั้งค่า .gitignore ให้ครอบคลุม

1. ทำตาม `/follow-gitignore`

### 2. Setup Lefthook

ตั้งค่า Lefthook สำหรับ Git hooks automation

1. ทำตาม `/follow-lefthook`

### 3. Setup Tasks

ตั้งค่า scripts ใน package.json หรือ Cargo.toml ตามมาตรฐาน

1. ทำตาม `/follow-tasks`

### 4. Setup Config

ตั้งค่า configuration ตาม dependencies ที่มีใน project

1. ทำตาม `/follow-config`

### 5. Pull Latest Changes

ดึง changes ล่าสุดจาก remote

1. รัน `git pull` เพื่อดึง changes ล่าสุดจาก remote
2. ตรวจสอบว่าไม่มี conflicts
3. ถ้ามี conflicts: แก้ไข conflicts ก่อนดำเนินการต่อ

### 6. Categorize Changes

จัดกลุ่มไฟล์ที่มีการเปลี่ยนแปลงตามประเภท

1. รัน `git status --porcelain` เพื่อดูไฟล์ที่มีการแก้ไขทั้งหมด
2. จัดกลุ่มไฟล์ตามประเภท:
   - docs: README.md, docs/, *.md
   - config: package.json, tsconfig.json, biome.jsonc, .gitignore, lefthook.yml
   - code: src/, lib/, packages/
   - test: test/, *.test.ts, *.spec.ts
   - chore: scripts/, tools/, build files
3. ระบุไฟล์ที่ task แก้ไปจาก context สำหรับ single commit mode

### 7. Stage Changes By Category

Stage ไฟล์ตามประเภทสำหรับ split commit

สำหรับ Split Commit (แนะนำ):
1. Stage ไฟล์ตามประเภททีละกลุ่ม:
   - `git add <docs-files>` → commit docs
   - `git add <config-files>` → commit config
   - `git add <code-files>` → commit code
2. ใช้ `git add -p` ถ้าไฟล์มีการเปลี่ยนแปลงหลายส่วน
3. ตรวจสอบด้วย `git diff --cached` ว่าไฟล์ที่ stage ถูกต้อง

สำหรับ Single Commit (เฉพาะไฟล์ที่ task แก้ไป):
1. ระบุไฟล์ที่ task แก้ไปจาก context
2. ใช้ `git add <files>` เพื่อ stage เฉพาะไฟล์ที่ task แก้ไป
3. ใช้ `git add -p` ถ้าไฟล์มีการเปลี่ยนแปลงหลายส่วน
4. ตรวจสอบด้วย `git diff --cached` ว่าเฉพาะส่วนที่ task แก้ไปถูก stage

### 8. Update README

อัปเดต README ก่อน commit (ถ้า commit ทั้งหมด)

1. ทำตาม `/update-readme`
2. Stage README ที่ถูกอัปเดตด้วย `git add README.md`
3. ตรวจสอบด้วย `git diff --cached` ว่า README ถูก stage ถูกต้อง

### 9. Determine Commit Type

เลือก conventional commit type ที่เหมาะสม

1. ดู Rules ส่วน Commit Types

### 10. Write Commit Message

เขียน commit message ตาม conventional commits format

1. ดู Rules ส่วน Commit Message Format และ Body

### 11. Execute Commit

ดำเนินการ commit

1. รัน `git commit -m "<message>"` หรือ `git commit`
2. ตรวจสอบผลลัพธ์จาก git commit
3. ถ้ามี error: แก้ไขแล้วลองอีกครั้ง

### 12. Verify Commits

ตรวจสอบความถูกต้องของ commits

1. รัน `git log --oneline -5` เพื่อดู commits ล่าสุด
2. ตรวจสอบว่า commit messages สอดคล้องกับ conventional commits
3. ตรวจสอบว่าไม่มีไฟล์ที่ยังไม่ commit เหลืออยู่ (สำหรับ commit ทั้งหมด)
4. รัน `git status` เพื่อยืนยันว่า working directory สะอาด (สำหรับ commit ทั้งหมด)

## Rules

### Commit Message Format

ใช้รูปแบบ conventional commits

- ใช้รูปแบบ `<type>(<scope>): <subject>`
- subject ไม่ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่หรือจบด้วยจุด
- สั้นกระชับไม่เกิน 72 ตัวอักษร
- ใช้ imperative mood (เช่น add ไม่ใช่ added)
- ใช้ภาษาอังกฤษหรือไทยให้สม่ำเสมอ

### Commit Types

เลือก type ที่เหมาะสมกับการเปลี่ยนแปลง

- feat: ฟีเจอร์ใหม่
- fix: แก้ไขบั๊ก
- docs: เปลี่ยนแปลงเอกสาร
- style: แก้ไข code style
- refactor: refactor code โดยไม่เพิ่ม feature หรือแก้บั๊ก
- perf: ปรับปรุง performance
- test: เพิ่มหรือแก้ไข tests
- chore: เปลี่ยนแปลง build process, dependencies

### Scope

ระบุส่วนของโปรเจกต์ที่ถูกแก้ไข

- ระบุส่วนของโปรเจกต์ที่ถูกแก้ไข
- เช่น: api, ui, db, config, deps, auth, test, docs, ci

### Body

อธิบายเหตุผลและ context เพิ่มเติม

- อธิบายเหตุผลและ context
- แยกจาก subject ด้วยบรรทัดว่าง
- ใช้ bullet points สำหรับหลายรายการ

### Split Commit

แยก commit ตามประเภทของไฟล์ (แนะนำ)

- Stage ไฟล์ตามประเภททีละกลุ่ม (docs, config, code, test, chore)
- Commit แต่ละกลุ่มด้วย commit message ที่เหมาะสม
- ใช้ `git add <files>` หรือ `git add -p` เสมอ ไม่ใช้ `git add .`

### Selective Staging

Stage เฉพาะไฟล์ที่ task แก้ไป (สำหรับ single commit)

- ใช้ `git add <files>` เพื่อ stage เฉพาะไฟล์ที่ task แก้ไป
- ใช้ `git add -p` เพื่อ stage เฉพาะบรรทัดที่ task แก้ไป
- ไม่ stage ไฟล์อื่นๆ ที่ไม่ได้ถูกแก้ไปโดย task

## Expected Outcome

1. Commit messages ที่สอดคล้องกับ conventional commits
2. Git history ที่อ่านง่ายและติดตามง่าย
3. Commits แยกตามประเภทของไฟล์ (docs, config, code, test, chore)
4. ไฟล์ที่มีการเปลี่ยนแปลงถูก commit ตามที่ต้องการ
5. Working directory สะอาด (สำหรับ commit ทั้งหมด)
