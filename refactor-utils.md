---
title: Refactor Utils
description: Refactor utility functions ให้มี single responsibility และ reusable
auto_execution_mode: 3
related_workflows:
  - /refactor-functions
  - /refactor-files
  - /edit-relative
---

## Goal

Refactor utility functions ให้มี single responsibility, reusable, และ maintainability สูง

## Scope

ใช้สำหรับ refactor utility functions, helper functions, และ common utilities

## Execute

### 1. Analyze Utility Functions

วิเคราะห์ utility functions ปัจจุบัน

1. ตรวจสอบ utility functions ที่ซ้ำซ้อน
2. ตรวจสอบ functions ที่มีหลาย responsibilities
3. ตรวจสอบ functions ที่ไม่ถูกใช้
4. ระบุ functions ที่ต้อง refactor

### 2. Consolidate Duplicate Utils

รวม utility functions ที่ซ้ำซ้อน

1. ค้นหา functions ที่มี logic เหมือนกัน
2. สร้าง shared utility functions
3. ลบ functions ที่ซ้ำซ้อน
4. ทำ `/edit-relative` อัพเดท references

### 3. Extract Pure Functions

แยก pure functions ออกจาก side effects

1. ระบุ pure functions ที่ผสมกับ side effects
2. แยก logic ออกเป็น pure functions
3. สร้าง wrapper functions สำหรับ side effects
4. ทำ `/edit-relative` อัพเดท references

### 4. Organize Utils Structure

จัดระเบียบ utility functions

1. สร้าง `utils/` directory สำหรับ shared utilities
2. จัดกลุ่ม functions ตาม domain:
   - `utils/string.ts` - string operations
   - `utils/array.ts` - array operations
   - `utils/date.ts` - date operations
   - `utils/validation.ts` - validation functions
   - `utils/format.ts` - formatting functions
3. ใช้ barrel exports (`index.ts`)
4. แยก utilities จาก business logic

### 5. Improve Function Signatures

ปรับปรุง function signatures

1. ใช้ TypeScript types อย่างชัดเจน
2. ใช้ default parameters เมื่อเหมาะสม
3. ใช้ rest parameters สำหรับ variable arguments
4. ใช้ overloads สำหรับ multiple signatures

### 6. Add JSDoc Documentation

เพิ่ม documentation สำหรับ utilities

1. เพิ่ม JSDoc comments สำหรับ public APIs
2. อธิบาย parameters และ return types
3. เพิ่ม examples สำหรับ complex functions
4. อธิบาย edge cases

### 7. Remove Unused Utils

ลบ utility functions ที่ไม่ถูกใช้

1. ตรวจสอบ usage ของแต่ละ function
2. ลบ functions ที่ไม่มี references
3. ทำ `/edit-relative` หลังลบ
4. ทำ `/run-lint` เพื่อตรวจสอบ

### 8. Verify Quality

ตรวจสอบคุณภาพ

1. ทำ `/run-typecheck` เพื่อตรวจสอบ types
2. ทำ `/run-lint` เพื่อตรวจสอบ code quality
3. ทำ `/run-test` เพื่อยืนยัน functionality
4. ตรวจสอบว่าไม่มี circular dependencies

## Rules

- Utility functions ควรมี single responsibility
- Functions ควรเป็น pure เมื่อเป็นไปได้
- ใช้ descriptive function names
- จัดกลุ่ม functions ตาม domain
- ใช้ TypeScript types อย่างชัดเจน
- เพิ่ม JSDoc สำหรับ public APIs
- ทำ `/edit-relative` หลัง refactor
- ลบ functions ที่ไม่ถูกใช้

## Expected Outcome

- Utility functions ไม่ซ้ำซ้อน
- Functions มี single responsibility
- Pure functions แยกจาก side effects
- Utils จัดระเบียบดีตาม domain
- Documentation ครบถ้วน
- Code ผ่าน typecheck, lint, และ test
