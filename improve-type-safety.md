---
title: Improve Type Safety
description: ปรับปรุง type safety ใน codebase ที่มีอยู่แล้ว
auto_execution_mode: 3
---

## Goal

ปรับปรุง type safety ใน codebase โดยแก้ไขปัญหา type errors และเพิ่มความเข้มงวดของ TypeScript

## Execute

### 1. Analyze Type Issues

วิเคราะห์ปัญหา type safety ใน codebase

1. รัน type check เพื่อดู type errors ทั้งหมด
2. ระบุไฟล์ที่มี type errors มากที่สุด
3. ตรวจสอบการใช้ any และ unknown
4. ตรวจสอบการใช้ type assertions
5. วิเคราะห์ type coverage

### 2. Fix Type Errors

แก้ไข type errors ตามลำดับความสำคัญ

1. แก้ critical type errors ก่อน
2. แทนที่ any ด้วย types ที่เหมาะสม
3. เพิ่ม type guards สำหรับ runtime checks
4. ใช้ discriminated unions แทน type assertions
5. แก้ circular type references

### 3. Strengthen Type System

เพิ่มความเข้มงวดของ type system

1. เปิด strict mode ถ้ายังไม่เปิด
2. เปิด noImplicitAny, noImplicitThis, strictNullChecks
3. ใช้ unknown แทน any เมื่อจำเป็น
4. เพิ่ม readonly สำหรับ immutable data
5. ใช้ const assertions สำหรับ literal types

### 4. Improve Type Inference

ปรับปรุง type inference ให้ดีขึ้น

1. ใช้ type hints ทุก function
2. ใช้ satisfies operator เพื่อ validate types
3. ใช้ generic types สำหรับ reusable logic
4. สร้าง utility types สำหรับ common patterns
5. ใช้ branded types สำหรับ domain-specific types

### 5. Add Type Guards

เพิ่ม type guards สำหรับ runtime type checking

1. สร้าง type guard functions
2. ใช้ is keyword สำหรับ type narrowing
3. ใช้ discriminated unions สำหรับ complex types
4. เพิ่ม runtime validation สำหรับ external data
5. ใช้ zod หรือ similar library สำหรับ schema validation

### 6. Verify

ตรวจสอบว่า type safety ดีขึ้นแล้ว

1. รัน type check ตรวจสอบว่าไม่มี errors
2. รัน build ตรวจสอบว่าไม่มี build errors
3. ตรวจสอบ type coverage ด้วย type-coverage
4. ยืนยันว่า functionality ทั้งหมดยังทำงานได้ปกติ

## Rules

### 1. Type Safety Principles

ปฏิบัติตาม type safety best practices

- หลีกเลี่ยงการใช้ any โดยเด็ดขาด
- ใช้ unknown แทน any เมื่อจำเป็น
- ใช้ type narrowing แทน type assertions
- ใช้ discriminated unions สำหรับ complex state
- เปิด strict mode ทุกโปรเจกต์

### 2. Type Guards

ใช้ type guards สำหรับ runtime type checking

- สร้าง type guard functions สำหรับ runtime checks
- ใช้ is keyword สำหรับ type narrowing
- ใช้ typeof และ instanceof อย่างเหมาะสม
- ใช้ in operator สำหรับ property checks
- ใช้ custom type guards สำหรับ complex conditions

### 3. Type Inference

ปรับปรุง type inference ให้ดีขึ้น

- ใช้ type hints ทุก function
- ใช้ satisfies operator เพื่อ validate types
- ใช้ const assertions สำหรับ literal types
- ใช้ as const สำหรับ readonly arrays/objects
- ใช้ generic types สำหรับ reusable logic

### 4. Type Coverage

ตรวจสอบและปรับปรุง type coverage

- ตรวจสอบ type coverage อย่างสม่ำเสมอ
- เพิ่ม types สำหรับ untyped code
- ใช้ type-coverage tool เพื่อวัดผล
- ตั้งเป้าหมาย type coverage ขั้นต่ำ
- ตรวจสอบ any types อย่างสม่ำเสมอ

## Expected Outcome

- type errors ทั้งหมดถูกแก้ไข
- strict mode เปิดใช้งาน
- type coverage เพิ่มขึ้นอย่างมีนัยสำคัญ
- ไม่มี any types ใน codebase
- type guards ถูกเพิ่มสำหรับ runtime checks
- type inference ดีขึ้น
- functionality ทั้งหมดยังทำงานได้ปกติ
