---
title: Improve Type Safety
description: ปรับปรุง type safety ด้วย TypeScript strict mode และ proper typing
auto_execution_mode: 3
related_workflows:
  - /follow-typescript
  - /follow-ts
  - /follow-code-quality
---

## Goal

ปรับปรุง type safety ด้วย TypeScript strict mode และ proper typing

## Scope

ใช้สำหรับปรับปรุง type safety ทั้ง TypeScript projects และ type definitions

## Execute

### 1. Enable Strict Mode

เปิดใช้งาน TypeScript strict mode

1. ตั้ง `strict: true` ใน `tsconfig.json`
2. เปิดใช้งาน strict options ทั้งหมด
3. รัน typecheck เพื่อดู errors ที่เกิดขึ้น
4. แก้ไข errors ที่เกิดขึ้น

### 2. Improve Type Annotations

ปรับปรุง type annotations

1. เพิ่ม type annotations สำหรับ functions และ variables
2. ใช้ interfaces สำหรับ object shapes
3. ใช้ type aliases สำหรับ complex types
4. ใช้ generics สำหรับ reusable types
5. หลีกเลี่ยง `any` type

### 3. Fix Type Errors

แก้ไข TypeScript errors

1. รัน typecheck เพื่อหา errors
2. แก้ไข type errors ทั้งหมด
3. ใช้ type guards สำหรับ runtime checks
4. ใช้ type assertions อย่างระมัดระวัง
5. รัน typecheck อีกครั้งเพื่อ verify

### 4. Improve Type Definitions

ปรับปรุง type definitions

1. สร้าง type definitions สำหรับ external libraries
2. ใช้ declaration files (.d.ts) สำหรับ types
3. ใช้ module augmentation สำหรับ extending types
4. อัปเดต type definitions ให้ทันสมัย
5. ตรวจสอบ type definitions กับ @types packages

### 5. Validate Type Safety

ตรวจสอบ type safety

1. รัน typecheck ด้วย strict mode
2. ตรวจสอบว่าไม่มี `any` types
3. ตรวจสอบว่า type coverage สูง
4. ตรวจสอบว่า type inference ทำงานได้
5. รัน lint สำหรับ type-related rules

## Rules

### 1. Strict Mode

ใช้ TypeScript strict mode เสมอ

- ตั้ง `strict: true` ใน `tsconfig.json`
- เปิดใช้งาน strictNullChecks
- เปิดใช้งาน noImplicitAny
- เปิดใช้งาน strictFunctionTypes
- เปิดใช้งาน strictBindCallApply

### 2. Type Annotations

ใช้ type annotations อย่างชัดเจน

- เพิ่ม type annotations สำหรับ function parameters
- เพิ่ม return types สำหรับ functions
- ใช้ interfaces สำหรับ object shapes
- ใช้ type aliases สำหรับ union types
- ใช้ enums สำหรับ constants

### 3. Avoid Any Types

หลีกเลี่ยง `any` type

- ใช้ `unknown` แทน `any` เมื่อจำเป็น
- ใช้ type guards สำหรับ runtime checks
- ใช้ type assertions อย่างระมัดระวัง
- ใช้ proper types แทน `any`
- ตรวจสอบด้วย lint rules

### 4. Type Inference

ใช้ type inference อย่างมีประสิทธิภาพ

- ให้ TypeScript infer types เมื่อชัดเจน
- เพิ่ม type annotations เมื่อจำเป็น
- ใช้ const assertions สำหรับ literals
- ใช้ generic types สำหรับ reusable code
- ตรวจสอบ inferred types ด้วย IDE

### 5. Type Definitions

จัดการ type definitions อย่างเป็นระบบ

- ใช้ @types packages สำหรับ popular libraries
- สร้าง custom type definitions เมื่อจำเป็น
- ใช้ declaration merging สำหรับ extending types
- อัปเดต type definitions อย่างสม่ำเสมอ
- ตรวจสอบ type definitions กับ documentation

## Expected Outcome

- TypeScript strict mode เปิดใช้งาน
- Type errors แก้ไขครบถ้วน
- Type annotations ชัดเจนและครบถ้วน
- `any` types ลดลงหรือหายไป
- Type definitions จัดการอย่างเป็นระบบ
- Type safety สูงขึ้น
- Type inference ทำงานได้อย่างมีประสิทธิภาพ
