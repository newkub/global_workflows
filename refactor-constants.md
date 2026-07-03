---
title: Refactor Constants
description: Extract magic numbers และ strings เป็น constants
auto_execution_mode: 3
related_workflows:
  - /refactor-files
  - /edit-relative
---

## Goal

Extract magic numbers และ strings เป็น constants เพื่อปรับปรุง maintainability

## Scope

ใช้สำหรับ extract magic numbers, string literals, และ hardcoded values เป็น constants

## Execute

### 1. Find Magic Numbers

ค้นหา magic numbers ใน codebase

1. ค้นหา numeric literals ที่ไม่มีความหมายชัดเจน
2. ระบุ numbers ที่ซ้ำซ้อนในหลายที่
3. ระบุ numbers ที่มีความสำคัญต่อ business logic
4. กรอง numbers ที่เป็น loop counters หรือ indices

### 2. Find String Literals

ค้นหา string literals ที่ควรเป็น constants

1. ค้นหา string literals ที่ซ้ำซ้อน
2. ระบุ error messages ที่ควรเป็น constants
3. ระบุ URLs และ paths ที่ควรเป็น constants
4. ระบุ configuration values ที่ hardcoded

### 3. Create Constants Files

สร้าง constants files ตาม domain

1. สร้าง `constants/` directory ถ้ายังไม่มี
2. จัดกลุ่ม constants ตาม domain:
   - `constants/config.ts` - configuration values
   - `constants/messages.ts` - error messages
   - `constants/api.ts` - API endpoints
   - `constants/validation.ts` - validation rules
3. ใช้ barrel exports (`index.ts`) สำหรับ constants

### 4. Extract Magic Numbers

แปลง magic numbers เป็น named constants

1. สร้าง named constants สำหรับ magic numbers
2. ใช้ descriptive names (UPPER_SNAKE_CASE)
3. แทนที่ magic numbers ด้วย constants
4. เพิ่ม JSDoc comments สำหรับความหมาย

### 5. Extract String Literals

แปลง string literals เป็น named constants

1. สร้าง named constants สำหรับ string literals
2. ใช้ descriptive names (UPPER_SNAKE_CASE)
3. แทนที่ string literals ด้วย constants
4. เพิ่ม JSDoc comments สำหรับความหมาย

### 6. Use Enums For Related Constants

ใช้ enums สำหรับ constants ที่เกี่ยวข้องกัน

1. ระบุ constants ที่เกี่ยวข้องกัน
2. สร้าง enums สำหรับ grouping
3. ใช้ enum values แทน individual constants
4. เพิ่ม JSDoc comments สำหรับแต่ละ enum value

### 7. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `/edit-relative`
2. อัปเดท import statements
3. ตรวจสอบว่าไม่มี broken references

### 8. Verify Quality

ตรวจสอบคุณภาพหลัง refactor

1. ทำ `/run-lint` และ `/run-typecheck`
2. ทำ `/run-test` เพื่อยืนยัน functionality
3. ตรวจสอบว่า constants ถูกใช้งานอย่างถูกต้อง

## Rules

- ใช้ UPPER_SNAKE_CASE สำหรับ constant names
- จัดกลุ่ม constants ตาม domain
- ใช้ descriptive names ที่สื่อความหมาย
- เพิ่ม JSDoc comments สำหรับความหมาย
- ใช้ enums สำหรับ related constants
- ทำ `/edit-relative` หลัง refactor
- ไม่ extract loop counters หรือ indices
- ไม่ extract trivial values (0, 1, -1)

## Expected Outcome

- Magic numbers ถูก extract เป็น named constants
- String literals ถูก extract เป็น named constants
- Constants จัดระเบียบตาม domain
- Enums ใช้สำหรับ related constants
- Code ผ่าน lint, typecheck, และ test
- Maintainability ดีขึ้น
