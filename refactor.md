---
title: Refactor
description: Refactor codebase ครบวงจรเพื่อปรับปรุงคุณภาพโค้ดและ maintainability
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /follow-architecture
  - /follow-code-quality
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
  - /follow-import
  - /run-check
  - /review-refactor
  - /separate-of-concerns
  - /refactor-long-files
  - /dont-over-engineer
  - /check-duplication
  - /fix-circular-dependencies
  - /refactor-modules
  - /check-unused-deps
  - /check-unused-files
---

## Goal

Refactor codebase ครบวงจรเพื่อปรับปรุงคุณภาพโค้ดและ maintainability — โดยใช้ minimal changes ที่เป็นไปได้ ไม่ over-engineer

## Scope

ใช้สำหรับ refactor ทั้ง monorepo และ individual workspaces

## Execute

Step dependencies: แต่ละ step ขึ้นกับ step ก่อนหน้าตามลำดับ (Step N ขึ้นกับ Step N-1)

### 1. Deep Analyze Project

วิเคราะห์โปรเจกต์แบบลึกซึ้งและวางแผน refactor

1. ทำ `/deep-analyze-codebase` เพื่อวิเคราะห์โปรเจกต์ครบทุกมิติด้วย scripts automation
2. ทำ `/follow-architecture` เพื่อตรวจสอบและเลือก architecture pattern ที่เหมาะสม
3. อ่าน `/restructure` ก่อนเริ่ม refactor
4. ทำ `/deep-review` เพื่อดูโครงสร้างไฟล์ ระบุ SRP, SoC, type safety, anti-patterns, code smells, dead code, side effects, naming conventions และ mixed concerns แบบเจาะลึก (mixed concerns, God modules, reasons to change)
5. ทำ `/review-refactor` เพื่อ review mixed concerns, code duplication, file complexity, function complexity, coupling, dead code, naming conventions และ code smells แบบเจาะจง
6. ทำ `/check-duplication` เพื่อตรวจจับ code duplication ทั้งโปรเจกต์ บันทึกเป็น baseline
7. ทำ `/use-lib-effective` เพื่อวิเคราะห์ dependencies และใช้ libraries ให้ครอบคลุม
8. ถ้าเป็น monorepo: ทำ `/follow-monorepo` เพื่อตรวจสอบ monorepo structure
9. ระบุว่าเป็น monorepo หรือ single workspace
10. บันทึก findings เป็น baseline สำหรับเปรียบเทียบหลัง refactor
11. ถ้า analyze ไม่ได้ ให้ stop และ report ไม่ฝืน refactor

### 2. Baseline Tests

ยืนยันว่า tests ผ่านก่อน refactor

1. ทำ `/run-test` รัน tests ทั้งหมด
2. บันทึก baseline: test count, pass rate, coverage
3. ถ้ามี failing tests ให้ทำ `/resolve-errors` ก่อน refactor ถ้าแก้ไม่ได้ให้ stop และ report

### 3. Refactor Code Units

ทำ refactor ระดับ code units (files, functions, modules, types, utils, constants)

> Goal: code units มี single responsibility, type safety สูง, ไม่มี code smells

1. ทำ `/dont-over-engineer` เพื่อกำหนดขอบเขต refactor ให้ minimal ที่สุด ไม่สร้าง abstraction ที่ไม่จำเป็น
2. ทำ `/follow-code-quality` เพื่อรักษามาตรฐานคุณภาพโค้ดระหว่าง refactor
3. ทำ `/pondering` เพื่อทบทวนผลกระทบของการ split และ restructure ก่อนดำเนินการ
4. ระบุ mixed concerns โดยใช้ผลจาก `/deep-review` จาก step 1 — refactor เฉพาะที่จำเป็นจริง
5. ทำ `/separate-of-concerns` สำหรับ mixed concerns ที่ชัดเจน (ถ้ามี)
6. ทำ `/follow-functional-core-imperative-shell` เพื่อแยก pure functions จาก side effects
7. ทำ `/refactor-long-files` สำหรับไฟล์ที่ยาวกว่า 250 บรรทัด
8. ทำ `/refactor-modules` สำหรับ modules ที่มี mixed responsibilities ให้มี single responsibility ชัดเจน
9. Refactor type definitions ให้มี type safety สูง และ utility functions ให้มี single responsibility
10. Extract magic numbers และ strings เป็น constants และแยก concerns ตาม responsibilities
11. ทำ `/simplify` สำหรับ functions ที่ซับซ้อนเกินไป
12. ทำ `/fix-circular-dependencies` หลัง split/move เพื่อตรวจและแก้ circular dependencies
13. ทำ `/edit-relative` หลัง split ทุกระดับ ถ้ามี broken references ให้ทำ `/resolve-errors`

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

1. ทำ `/follow-import` เพื่อตั้งค่า import strategy
2. แทนที่ relative imports ด้วย import alias
3. ตรวจสอบว่า import alias ทำงานได้ถูกต้อง ถ้า fail ให้ทำ `/resolve-errors`

### 8. Final Restructure And Verify

ทำ `/restructure` อีกครั้งหลัง refactor เสร็จ

1. ทำ `/restructure` เพื่อตรวจสอบ physical structure อีกครั้ง
2. ยืนยันว่าทุกไฟล์และโฟลเดอร์มี single responsibility
3. ทำ `/run-test` รัน tests อีกครั้งเพื่อยืนยันไม่มี regression
4. ทำ `/run-check` เพื่อตรวจสอบ lint และ typecheck ผ่าน
5. ทำ `/check-duplication` เพื่อยืนยันว่า duplication ลดลงจาก baseline
6. ทำ `/check-unused-deps` เพื่อตรวจสอบ unused dependencies หลัง refactor
7. ทำ `/check-unused-files` เพื่อตรวจสอบ unused files หลัง refactor
8. เปรียบเทียบกับ baseline: test count, pass rate, coverage ไม่ลดลง
9. รัน build เพื่อยืนยันว่าไม่มี build errors ถ้า fail ให้ทำ `/resolve-errors`

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

- ทำ `/follow-code-quality` เพื่อรักษามาตรฐานคุณภาพโค้ดทุก workspace
- ตรวจสอบ project structure ก่อนเริ่ม refactor
- ทำ `/edit-relative` หลัง refactor
- สำหรับ barrel files refactor ให้ใช้ `/follow-barrel-export`
- Destructive refactor actions (split, move, delete) ต้องมี user confirmation ก่อน execute

### 4. Minimal Changes

- ใช้ `/dont-over-engineer` เป็นหลักในทุกขั้นตอน refactor
- ใช้ `single-line change` เมื่อเป็นไปได้
- ไม่ refactor ส่วนที่ไม่จำเป็นเพื่อ "ทำให้สมบูรณ์"
- ไม่สร้าง abstraction ที่ไม่จำเป็น — ใช้ `YAGNI` principle
- ไม่เพิ่ม dependency ที่ไม่จำเป็นจากการ refactor
- ไม่สร้าง generic solution สำหรับปัญหาเฉพาะ
- วัดผลกระทบ (performance, complexity) หลัง refactor

### 5. Incremental Commits

- Commit ระหว่างแต่ละ step ที่สำคัญ (หลัง step 3, 4, 5, 6)
- ใช้ conventional commits: `refactor: <scope> <description>`
- แต่ละ commit ต้องผ่าน `bun run check` ก่อน commit
- ถ้า step ไหน fail ให้ rollback ได้ง่ายโดยไม่กระทบ step อื่น
- ไม่รอจนจบทุก step แล้ว commit ทีเดียว

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
- Refactor ใช้ minimal changes โดยไม่ over-engineer
- Code duplication ลดลงจาก baseline
- ไม่มี circular dependencies หลัง refactor
- ไม่มี unused dependencies และ unused files หลัง refactor
- แต่ละ step มี incremental commit เพื่อ rollback ได้ง่าย
