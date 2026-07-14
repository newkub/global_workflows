---
title: Refactor
description: Refactor codebase ครบวงจรเพื่อปรับปรุงคุณภาพโค้ดและ maintainability
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /follow-architecture
  - /restructure
  - /deep-review
  - /use-lib-effective
  - /follow-monorepo
  - /run-test
  - /resolve-errors
  - /pondering
  - /follow-functional-core-imperative-shell
  - /follow-barrel-export
  - /simplify
  - /edit-relative
  - /all-workspaces
  - /refactor-packages
  - /use-import-alias
  - /run-check
  - /review-refactor
  - /separate-of-concerns
  - /refactor-long-files
---

## Goal

Refactor codebase ครบวงจรเพื่อปรับปรุงคุณภาพโค้ดและ maintainability

## Scope

ใช้สำหรับ refactor ทั้ง monorepo และ individual workspaces

## Execute

Step dependencies: แต่ละ step ขึ้นกับ step ก่อนหน้าตามลำดับ (Step N ขึ้นกับ Step N-1)

### 1. Deep Analyze Project

วิเคราะห์โปรเจกต์แบบลึกซึ้งและวางแผน refactor

1. ทำ `/deep-analyze-with-use-scripts` เพื่อวิเคราะห์โปรเจกต์ครบทุกมิติด้วย scripts automation
2. ทำ `/follow-architecture` เพื่อตรวจสอบและเลือก architecture pattern ที่เหมาะสม
3. อ่าน `/restructure` ก่อนเริ่ม refactor
4. ทำ `/deep-review` เพื่อดูโครงสร้างไฟล์ ระบุ SRP, SoC, type safety, anti-patterns, code smells, dead code, side effects, naming conventions และ mixed concerns แบบเจาะลึก (mixed concerns, God modules, reasons to change)
5. ทำ `/review-refactor` เพื่อ review mixed concerns, code duplication, file complexity, function complexity, coupling, dead code, naming conventions และ code smells แบบเจาะจง
6. ทำ `/use-lib-effective` เพื่อวิเคราะห์ dependencies และใช้ libraries ให้ครอบคลุม
7. ถ้าเป็น monorepo: ทำ `/follow-monorepo` เพื่อตรวจสอบ monorepo structure
8. ระบุว่าเป็น monorepo หรือ single workspace
9. บันทึก findings เป็น baseline สำหรับเปรียบเทียบหลัง refactor
10. ถ้า analyze ไม่ได้ ให้ stop และ report ไม่ฝืน refactor

### 2. Baseline Tests

ยืนยันว่า tests ผ่านก่อน refactor

1. ทำ `/run-test` รัน tests ทั้งหมด
2. บันทึก baseline: test count, pass rate, coverage
3. ถ้ามี failing tests ให้ทำ `/resolve-errors` ก่อน refactor ถ้าแก้ไม่ได้ให้ stop และ report

### 3. Refactor Code Units

ทำ refactor ระดับ code units (files, functions, modules, types, utils, constants)

1. ทำ `/pondering` เพื่อทบทวนผลกระทบของการ split และ restructure ก่อนดำเนินการ
2. ระบุ mixed concerns โดยใช้ผลจาก `/deep-review` จาก step 1
3. ทำ `/separate-of-concerns` สำหรับ mixed concerns ที่ชัดเจน (ถ้ามี)
4. ทำ `/follow-functional-core-imperative-shell` เพื่อแยก pure functions จาก side effects
5. ทำ `/refactor-long-files` สำหรับไฟล์ที่ยาวกว่า 250 บรรทัด
6. Refactor type definitions ให้มี type safety สูง และ utility functions ให้มี single responsibility
7. Extract magic numbers และ strings เป็น constants และแยก concerns ตาม responsibilities
8. ทำ `/simplify` สำหรับ functions ที่ซับซ้อนเกินไป
9. ทำ `/edit-relative` หลัง split ทุกระดับ ถ้ามี broken references ให้ทำ `/resolve-errors`

### 4. Refactor Workspaces

ทำ refactor ระดับ workspace หรือ monorepo — Goal reminder: refactor ครบทุก workspace เริ่มจาก shared packages

**Monorepo:**
1. ย้าย code ไป shared packages (ถ้าจำเป็น)
2. ทำ `/all-workspaces` สำหรับทุก workspace (เริ่มจาก shared packages)
3. ทำ `/refactor-packages` สำหรับแต่ละ workspace
4. ตรวจสอบ dependencies ระหว่าง workspaces ถ้ามี conflict ให้ทำ `/resolve-errors`

**Single Workspace:**
1. ทำ `/all-workspaces` สำหรับ workspace เดียว
2. ทำ `/refactor-packages` สำหรับ packages ถ้า fail ให้ทำ `/resolve-errors`

### 5. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำ `/edit-relative` เพื่ออัปเดท references หลัง refactor
2. ตรวจสอบว่าไม่มี broken references ถ้ามีให้ทำ `/resolve-errors`

### 6. Restructure Files

ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์

1. ทำ `/restructure` เพื่อปรับปรุง physical structure
2. ตรวจสอบ naming conventions สม่ำเสมอ
3. ตรวจสอบ file organization ตาม domain ถ้ามี broken references ให้ทำ `/resolve-errors`

### 7. Setup Import Alias

ตั้งค่าและใช้ import alias

1. ทำ `/use-import-alias` เพื่อตั้งค่า import alias
2. แทนที่ relative imports ด้วย import alias
3. ตรวจสอบว่า import alias ทำงานได้ถูกต้อง ถ้า fail ให้ทำ `/resolve-errors`

### 8. Final Restructure And Verify

ทำ `/restructure` อีกครั้งหลัง refactor เสร็จ

1. ทำ `/restructure` เพื่อตรวจสอบ physical structure อีกครั้ง
2. ยืนยันว่าทุกไฟล์และโฟลเดอร์มี single responsibility
3. ทำ `/run-test` รัน tests อีกครั้งเพื่อยืนยันไม่มี regression
4. ทำ `/run-check` เพื่อตรวจสอบ lint และ typecheck ผ่าน
5. เปรียบเทียบกับ baseline: test count, pass rate, coverage ไม่ลดลง
6. รัน build เพื่อยืนยันว่าไม่มี build errors ถ้า fail ให้ทำ `/resolve-errors`

## Rules

### 1. Execution Order

- ทำตามลำดับ: baseline tests → code units → workspaces → references → restructure → import alias → verify
- ต้องมี baseline tests ก่อน refactor เสมอ
- Coverage หลัง refactor ต้องไม่ลดลง
- ถ้า tests fail หลัง refactor ให้ rollback และทำ `/resolve-errors`

### 2. Monorepo

- สำหรับ monorepo: refactor shared packages ก่อน workspaces
- รักษา consistency ระหว่าง workspaces (ถ้าเป็น monorepo)
- Shared packages ต้อง generic และ reusable

### 3. Code Quality

- ตรวจสอบ project structure ก่อนเริ่ม refactor
- ทำ `/edit-relative` หลัง refactor
- สำหรับ barrel files refactor ให้ใช้ `/follow-barrel-export`
- Destructive refactor actions (split, move, delete) ต้องมี user confirmation ก่อน execute

## Expected Outcome

- Project structure ถูกตรวจสอบและระบุประเภท
- Files, functions, modules ถูก refactor ตามมาตรฐาน
- Monorepo ถูก refactor ตามมาตรฐาน (ถ้าเป็น monorepo)
- Workspaces ทั้งหมดถูก refactor ตามมาตรฐาน
- Consistency ระหว่าง workspaces (ถ้าเป็น monorepo)
- Shared packages ที่ generic และ reusable (ถ้าเป็น monorepo)
- Dependencies และ references ถูกอัปเดท
- File และ folder structure ถูก restructure ให้เป็นระเบียบ
- Import alias ถูกตั้งค่าและใช้งานอย่างถูกต้อง
- Naming conventions สม่ำเสมอทั้ง project
- Code ผ่าน lint, typecheck, test, และ build
