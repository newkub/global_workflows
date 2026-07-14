---
title: Write Spec
description: เขียน spec ใน docs/development/spec/ directory ตาม test files ที่มีอยู่
auto_execution_mode: 3
related:
  - /write-test
  - /update-docs
---

## Goal

เขียน spec ใน `docs/development/spec/` directory ตาม test files ที่มีอยู่

## Scope

ใช้เมื่อต้องสร้างหรืออัพเดท spec ใน `docs/development/spec/` directory

## Execute

### 1. Analyze Test Files

อ่าน test files ทั้งหมดใน `tests/` เพื่อดู test cases ที่มีอยู่

### 2. Write Spec Files

เขียน spec files ใน `docs/development/spec/` โดย:

- ระบุ test framework และ coverage threshold ใน `docs/development/spec/overview.md`
- จัดโครงสร้างตาม test directory
- แยก spec เป็นไฟล์ย่อยๆ ตาม modules/features
- บันทึก test cases ทั้งหมดแบบกระชับ
- ใช้ ✅ สำหรับ test ที่เขียนแล้ว, ❌ สำหรับ test ที่ยังไม่เขียน

### 3. Check File Length

ตรวจสอบความยาวของแต่ละ spec file:

- ถ้าไฟล์เกิน 250 บรรทัด ให้ refactor แยกเป็นไฟล์ย่อย
- ใช้ `/refactor-file-to-single-responsibility` สำหรับการแยกไฟล์

### 4. Sync with Tests

ทำ `/write-test` เพื่อเขียน test ที่ขาดตาม spec

## Rules

- Spec ต้องอยู่ใน `docs/development/spec/` directory
- แต่ละ spec file ไม่ควรเกิน 250 บรรทัด
- Test cases ต้องกระชับ ครอบคลุม
- ใช้ status tracking (✅/❌)
- Table format: Status, Test Case, Example, Risk
- Risk emoji: 🟢 (Low), 🟡 (Medium), 🔴 (High)
- **Sort table rows by risk**: 🔴 (High) → 🟡 (Medium) → 🟢 (Low)
- Coverage ต้องตรงกับ test coverage จริง
- ใช้ overview.md สำหรับข้อมูลทั่วไป (framework, coverage, structure)

## Expected Outcome

- `docs/development/spec/` directory ที่ครอบคลุม test ทั้งหมด
- แต่ละ spec file ไม่เกิน 250 บรรทัด
- Test และ spec sync กัน
- Status tracking ถูกต้อง
- Table format สม่ำเสมอทั้งหมด

