---
title: Separate Of Concerns
description: แยก concerns ตาม responsibility, enforce boundaries, แล้ว restructure
auto_execution_mode: 3
related:
  - /improve-code-structure
  - /check-long-files
  - /restructure
  - /deep-review
  - /follow-functional-core-imperative-shell
  - /follow-clean-architecture
  - /simplify
  - /edit-relative
  - /run-check
  - /run-test
  - /resolve-errors
  - /report
  - /report-format-table
  - /suggest-next-action
  - /follow-barrel-export
---

## Goal

Refactor code ให้มี separation of concerns โดยการแยก responsibilities, enforce boundaries, แล้วทำ `/restructure`

## Scope

ใช้กับโค้ดที่ `improve-code-structure` หรือ `review-refactor` พบ mixed concerns, ไฟล์ที่รวมหลาย responsibility, หรือ boundary ไม่ชัดเจน

## Execute

### 1. Review Code Structure

1. ทำ `/improve-code-structure` เพื่อระบุ mixed concerns ด้วย `sg outline`
2. ทำ `/check-long-files` เพื่อระบุไฟล์ที่ยาวกว่า 250 บรรทัด
3. บันทึก findings ที่ต้อง refactor
4. ถ้าไม่มี mixed concerns หรือไฟล์ยาว ให้ stop และ report

### 2. Separate Concerns

Goal reminder: แยก concerns ตาม responsibility ไม่ใช่ตามไฟล์

1. แบ่ง responsibilities ของ findings เป็นกลุ่มตาม domain, layer, หรือ reason to change
2. ทำ `/follow-functional-core-imperative-shell` เพื่อแยก pure functions ออกจาก side effects
3. ทำ `/follow-clean-architecture` เพื่อแยก layers ตาม dependency rule
4. แยก business logic, UI, data access, utilities, และ types ออกจากกัน
5. กำหนด public API ของแต่ละ module ให้ชัดเจน
6. ใช้ `sg outline --items exports` ยืนยันว่า split ไม่ทำลาย exported API

### 3. Enforce Boundaries

1. ทำ `/follow-barrel-export` เพื่อซ่อน internal symbols ที่ไม่ต้อง public ออกจาก barrel exports
2. ใช้ path aliases / import rules ป้องกันการ import เข้าไปข้างใน module
3. อัปเดท `ast-grep` rules หรือ `biome.jsonc` ถ้าจำเป็นเพื่อบังคับ boundary
4. ทำ `/deep-review` เพื่อตรวจสอบว่า boundaries ถูกต้อง

### 4. Refactor Code Units

Goal reminder: แต่ละ code unit ต้องมี single concern ก่อนทำ `/restructure`

1. split หรือ extract files ที่มีหลาย concerns หรือยาวกว่า 250 บรรทัด
2. แต่ละไฟล์ไม่เกิน 250 บรรทัด
3. แต่ละ function/type/class ทำหน้าที่เดียว
4. ทำ `/simplify` สำหรับ functions ที่ซับซ้อนเกินไป
5. ทำ `/edit-relative` หลังทุกการ split หรือ rename

### 5. Restructure Files

1. ทำ `/restructure` เพื่อปรับ physical file/folder structure
2. ตั้งชื่อโฟลเดอร์ตาม domain หรือ concern
3. ทำ `/edit-relative` หลังย้ายไฟล์
4. ใช้ `sg outline` ตรวจสอบ top-level symbols ต่อไฟล์อีกครั้ง

### 6. Verify

1. ทำ `/run-check` lint และ typecheck
2. ทำ `/run-test` รัน tests
3. ถ้า fail ให้ทำ `/resolve-errors`
4. ใช้ `sg outline --items exports` ตรวจสอบ public API ไม่เปลี่ยนโดยไม่ตั้งใจ

### 7. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สรุป files refactored, concerns separated, boundaries created, test/lint status
3. ทำ `/suggest-next-action`

## Rules

### 1. Concern Separation

- แต่ละ module/file/function มี concern เดียว
- แยก pure functions, side effects, UI, data access ออกจากกัน
- ไม่ mix business logic กับ presentation
- แยกตาม reason to change ไม่ใช่ตามขนาดไฟล์

### 2. Boundary Enforcement

- ซ่อน internal symbols จาก public API
- ใช้ barrel exports กำหนด public surface
- ห้าม import ลึกเข้าไปใน module ที่ไม่ใช่ public API
- แยก layers ตาม dependency rule: outer layer ไม่ import inner layer

### 3. Verification

- ต้องทำ `/run-check` หลัง refactor
- ต้องทำ `/run-test` หลัง refactor
- ใช้ `sg outline` ตรวจสอบ structure หลัง restructure

### 4. Minimal Changes

- ทำทีละ step ยืนยันก่อนทำ step ถัดไป
- ไม่ refactor ไฟล์ที่ไม่เกี่ยวข้อง
- ถ้า test หลัง refactor fail ให้ทำ `/resolve-errors` ก่อน continue

## Expected Outcome

- Code ถูก refactor ให้มี separation of concerns ชัดเจน
- Boundaries ระหว่าง modules และ layers ชัดเจน
- Physical structure ถูก restructure ด้วย `/restructure`
- Lint, typecheck, และ test ผ่าน
- รายงานสรุปผล พร้อม action ถัดไป
