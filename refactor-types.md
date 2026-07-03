---
title: Refactor Types
description: Refactor type definitions ให้มี type safety สูงและ maintainability ดี
auto_execution_mode: 3
related_workflows:
  - /refactor-files
  - /follow-typescript
  - /edit-relative
---

## Goal

Refactor type definitions ให้มี type safety สูง, ลด duplication, และ maintainability ดี

## Scope

ใช้สำหรับ refactor TypeScript types, interfaces, type aliases, และ generic types

## Execute

### 1. Analyze Type Definitions

วิเคราะห์ type definitions ปัจจุบัน

1. ตรวจสอบ type definitions ที่ซ้ำซ้อน
2. ตรวจสอบ interfaces ที่มีหลาย responsibilities
3. ตรวจสอบ usage ของ `any` และ `unknown`
4. ระบุ types ที่ต้อง refactor

### 2. Consolidate Duplicate Types

รวม type definitions ที่ซ้ำซ้อน

1. ค้นหา types ที่มี structure เหมือนกัน
2. สร้าง shared types สำหรับ reuse
3. ลบ types ที่ซ้ำซ้อน
4. ทำ `/edit-relative` อัพเดท references

### 3. Apply Utility Types

ใช้ TypeScript utility types

1. ใช้ `Pick`, `Omit`, `Partial` สำหรับ derive types
2. ใช้ `Record`, `Map` สำหรับ key-value types
3. ใช้ `Awaited`, `ReturnType` สำหรับ async types
4. ใช้ `Required`, `Readonly` สำหรับ modifiers

### 4. Improve Generic Types

ปรับปรุง generic type definitions

1. ใช้ generic constraints (`extends`)
2. ใช้ conditional types เมื่อจำเป็น
3. ใช้ default type parameters
4. ใช้ mapped types สำหรับ transformations

### 5. Remove Any Types

ลบ `any` types และใช้ types ที่ปลอดภัยกว่า

1. แทนที่ `any` ด้วย `unknown` สำหรับ dynamic values
2. ใช้ union types สำหรับ multiple possibilities
3. ใช้ type guards สำหรับ runtime checks
4. ใช้ branded types สำหรับ domain-specific values

### 6. Organize Type Files

จัดระเบียบ type definitions

1. สร้าง `types/` directory สำหรับ shared types
2. จัดกลุ่ม types ตาม domain
3. ใช้ barrel exports (`index.ts`)
4. แยก types จาก implementation logic

### 7. Verify Type Safety

ตรวจสอบ type safety

1. ทำ `/run-typecheck` เพื่อตรวจสอบ type errors
2. ตรวจสอบว่าไม่มี implicit any
3. ตรวจสอบ strict mode compliance
4. ทำ `/run-lint` เพื่อตรวจสอบ code quality

## Rules

- ใช้ `interface` สำหรับ object shapes
- ใช้ `type` สำหรับ unions, intersections, และ utilities
- หลีกเลี่ยง `any` เสมอ
- ใช้ strict mode
- ใช้ descriptive type names
- จัดกลุ่ม types ตาม domain
- ใช้ utility types แทน manual definitions
- ทำ `/edit-relative` หลัง refactor

## Expected Outcome

- Type definitions ไม่ซ้ำซ้อน
- ไม่มี `any` types
- Type safety สูง
- Types จัดระเบียบดี
- Code ผ่าน typecheck และ lint
