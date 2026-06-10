---
title: Sync Spec Test
description: Sync test กับ spec ให้ตรงกันตามเนื้อหา
auto_execution_mode: 3
related_workflows:
  - write-spec
  - write-test
---

## Goal

Sync test กับ spec ให้ตรงกัน โดย test ทั้งหมมเป็นไปตาม spec และ spec ทั้งหมมเป็นไปตาม test

## Scope

ใช้ workflow นี้เมื่อต้อง sync ระหว่าง test files และ SPEC.md หรือ spec/ folder

## Execute

### 1. Analyze Current State

ทำ `/analyze-project` เพื่อดูภาพรวม test files และ spec files

### 2. Sync Tests to Spec

ทำ `/write-spec` เพื่ออัพเดท spec ให้ครอบคลุม test ทั้งหมมที่มีอยู่

### 3. Sync Spec to Tests

ทำ `/write-test` เพื่อเขียน test ที่ขาดตาม spec หรืออัพเดท test ที่มีอยู่ให้ตรงกับ spec

### 4. Validate Consistency

ตรวจสอบว่า test และ spec sync กันโดย:

1. ตรวจสอบว่าทุก test case ใน spec มี test ที่เขียนแล้ว
2. ตรวจสอบว่าทุก test ที่มีอยู่ถูกบันทึกใน spec
3. ตรวจสอบว่า expected output ใน spec ตรงกับ test assertions
4. ตรวจสอบว่า coverage ใน spec ตรงกับ test coverage จริง

### 5. Update Documentation

ทำ `/update-reference` สำหรับไฟล์ที่แก้ไข

## Rules

### 1. Bidirectional Sync

Spec และ test ต้อง sync กันทั้งสองทิศทาง

- Test ที่มีอยู่ต้องถูกบันทึกใน spec
- Test case ใน spec ต้องมี test ที่เขียนแล้ว
- Expected output ใน spec ต้องตรงกับ test assertions
- Coverage ใน spec ต้องตรงกับ test coverage จริง

### 2. Status Tracking

ติดตาม status ของ test cases อย่างชัดเจน

- ใช้ ✅ สำหรับ test cases ที่เขียนแล้ว
- ใช้ ❌ สำหรับ test cases ที่ยังไม่เขียน
- อัพเดท status เมื่อมีการเปลี่ยนแปลง

### 3. Coverage Alignment

Coverage ใน spec ต้องตรงกับความเป็นจริง

- ระบุ coverage % ตาม test coverage จริง
- ใช้ N/A ถ้าไม่สามารถวัดได้
- อัพเดท coverage เมื่อ test เปลี่ยนแปลง

### 4. Structure Consistency

โครงสร้างของ spec และ test ต้องสอดคล้องกัน

- Test suites ใน spec ต้องตรงกับ test directory structure
- Functions ใน spec ต้องตรงกับ functions ที่ถูก test
- Test cases ใน spec ต้องตรงกับ test functions

## Expected Outcome

- Test ทั้งหมมเป็นไปตาม spec
- Spec ทั้งหมมเป็นไปตาม test
- Status ของ test cases ถูกต้องและอัพเดทล่าสุด
- Coverage ใน spec ตรงกับ test coverage จริง

