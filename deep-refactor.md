---
title: Deep Refactor
description: Refactor ละเอียด ครอบคลุม impact analysis, dependency graph, test coverage, backward compat
auto_execution_mode: 3
related:
  - /refactor
  - /deep-analyze-with-use-scripts
  - /deep-review
  - /deep-thinking
  - /run-test
  - /run-check
  - /resolve-errors
  - /edit-relative
  - /loop-until-complete
  - /report-format-table
---

## Goal

Refactor ละเอียดครบวงจร: impact analysis, dependency graph, baseline tests, code units, workspaces, references, verify

## Scope

ใช้สำหรับ refactor ที่ซับซ้อน ต้องการ comprehensive analysis และ verification ก่อนและหลัง refactor

สำหรับ refactor แบบปกติ ใช้ `/refactor`, สำหรับ restructure ไฟล์ ใช้ `/restructure`

## Execute

Step dependencies: แต่ละ step ขึ้นกับ step ก่อนหน้าตามลำดับ (Step N ขึ้นกับ Step N-1)

### 1. Deep Analyze And Baseline

วิเคราะห์โปรเจกต์แบบลึกและสร้าง baseline ก่อน refactor

- ทำ `/deep-analyze-with-use-scripts` เพื่อวิเคราะห์โปรเจกต์ครบทุกมิติ
- ทำ `/deep-review` เพื่อระบุ SRP violations, code smells, anti-patterns, dead code
- ทำ `/run-test` รัน tests ทั้งหมด บันทึก baseline: test count, pass rate, coverage
- ถ้ามี failing tests ให้ทำ `/resolve-errors` ก่อน refactor
- บันทึก findings เป็น baseline สำหรับเปรียบเทียบหลัง refactor
- ถ้า analyze ไม่ได้ ให้ stop และ report ไม่ฝืน refactor

### 2. Impact Analysis

วิเคราะห์ผลกระทบของการ refactor อย่างละเอียด

- ทำ `/deep-thinking` เพื่อทบทวนผลกระทบของการ split และ restructure
- สร้าง dependency graph ของ modules ที่จะ refactor
- ระบุ files ที่กระทบ: create, modify, delete
- ระบุ backward compatibility risks
- ระบุ breaking changes และ migration path
- จัดลำดับ refactor targets ตาม risk และ impact

### 3. Refactor Code Units

ทำ refactor ระดับ code units (files, functions, modules, types, utils, constants)

- ระบุ SRP violations โดยใช้ผลจาก `/deep-review` ใน Step 1
- แยกไฟล์ที่ยาวกว่า 250 บรรทัด
- Refactor type definitions ให้มี type safety สูง
- Extract magic numbers และ strings เป็น constants
- ทำ `/simplify` สำหรับ functions ที่ซับซ้อนเกินไป
- ทำ `/edit-relative` หลัง split ทุกระดับ
- ถ้ามี broken references ให้ทำ `/resolve-errors`

### 4. Refactor Workspaces

Goal reminder: refactor ครบทุก workspace เริ่มจาก shared packages

- ถ้าเป็น monorepo: refactor shared packages ก่อน workspaces
- ทำ `/all-workspaces` สำหรับทุก workspace
- ทำ `/refactor-packages` สำหรับแต่ละ workspace
- ตรวจสอบ dependencies ระหว่าง workspaces
- รักษา consistency ระหว่าง workspaces

### 5. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

- ทำ `/edit-relative` เพื่ออัปเดท references หลัง refactor
- ตรวจสอบว่าไม่มี broken references
- ถ้ามี broken references ให้ทำ `/resolve-errors`
- ตรวจสอบ import paths ทั้งหมดถูกต้อง

### 6. Restructure Files

ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์

- ทำ `/restructure` เพื่อปรับปรุง physical structure
- ตรวจสอบ naming conventions สม่ำเสมอ
- ตรวจสอบ file organization ตาม domain
- ทำ `/use-import-alias` เพื่อตั้งค่า import alias

### 7. Verify And Compare

ทำ `/loop-until-complete` เพื่อ verify จนกว่าจะผ่านทุกเงื่อนไข

- ทำ `/run-test` รัน tests อีกครั้งเพื่อยืนยันไม่มี regression
- ทำ `/run-check` เพื่อตรวจสอบ lint และ typecheck ผ่าน
- เปรียบเทียบกับ baseline: test count, pass rate, coverage ไม่ลดลง
- รัน build เพื่อยืนยันว่าไม่มี build errors
- ถ้า fail ให้ทำ `/resolve-errors` แล้ว retry
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report

### 8. Report

ทำ `/report-format-table` เพื่อสร้างตารางสรุปผล

- ตาราง: Refactor Target, Before, After, Status, Impact
- เปรียบเทียบ baseline vs after: test count, pass rate, coverage
- สรุป breaking changes และ migration path
- ทำ `/suggest-next-action` เพื่อแนะนำขั้นต่อไป

## Rules

### 1. Execution Order

- ทำตามลำดับ: baseline → impact analysis → code units → workspaces → references → restructure → verify
- ต้องมี baseline tests ก่อน refactor เสมอ
- Coverage หลัง refactor ต้องไม่ลดลง
- ถ้า tests fail หลัง refactor ให้ rollback และทำ `/resolve-errors`

### 2. Impact Analysis

- ต้องวิเคราะห์ผลกระทบก่อน refactor ทุกครั้ง
- ระบุ backward compatibility risks
- ระบุ breaking changes และ migration path
- Destructive refactor actions (split, move, delete) ต้องมี user confirmation

### 3. Monorepo

- สำหรับ monorepo: refactor shared packages ก่อน workspaces
- รักษา consistency ระหว่าง workspaces
- Shared packages ต้อง generic และ reusable

### 4. Verification

- ต้อง verify หลัง refactor: tests, lint, typecheck, build
- เปรียบเทียบกับ baseline ทุกครั้ง
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report
- ใช้ `/loop-until-complete` เพื่อให้แน่ใจว่าผ่านทุกเงื่อนไข

### 5. Code Quality

- ตรวจสอบ project structure ก่อนเริ่ม refactor
- ทำ `/edit-relative` หลัง refactor
- สำหรับ barrel files refactor ให้ใช้ workflow แยก

## Expected Outcome

- Impact analysis ก่อน refactor พร้อม dependency graph
- Baseline metrics บันทึกไว้สำหรับเปรียบเทียบ
- Code units ถูก refactor ตามมาตรฐาน
- Workspaces ทั้งหมดถูก refactor ครบถ้วน
- References ถูกอัปเดท ไม่มี broken references
- File structure ถูก restructure ให้เป็นระเบียบ
- Code ผ่าน lint, typecheck, test, และ build
- Coverage ไม่ลดลงจาก baseline
- ตารางสรุปผล: before vs after comparison
