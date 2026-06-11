---
title: Improve Type Safety
description: ปรับปรุง type safety ใน codebase ที่มีอยู่แล้ว
auto_execution_mode: 3
---

## Goal

ปรับปรุง type safety ใน codebase โดยแก้ไขปัญหา type errors และเพิ่มความเข้มงวดของ TypeScript

## Scope

ใช้สำหรับทุก workspace ที่ต้องการปรับปรุง type safety ใน codebase

## Execute

### 1. Analyze Type Issues

วิเคราะห์ปัญหา type safety ใน codebase

- รัน `type check` เพื่อดู type errors ทั้งหมด
- ระบุไฟล์ที่มี type errors มากที่สุด
- ตรวจสอบการใช้ `any` และ `unknown`
- ตรวจสอบการใช้ `type assertions`
- วิเคราะห์ `type coverage`

### 2. Fix Type Errors

แก้ไข type errors ตามลำดับความสำคัญ

- แก้ critical type errors ก่อน
- แทนที่ `any` ด้วย types ที่เหมาะสม
- เพิ่ม `type guards` สำหรับ runtime checks
- ใช้ `discriminated unions` แทน type assertions
- แก้ circular type references

### 3. Strengthen Type System

เพิ่มความเข้มงวดของ type system

- เปิด `strict mode` ถ้ายังไม่เปิด
- เปิด `noImplicitAny`, `noImplicitThis`, `strictNullChecks`
- ใช้ `unknown` แทน `any` เมื่อจำเป็น
- เพิ่ม `readonly` สำหรับ immutable data
- ใช้ `const assertions` สำหรับ literal types

### 4. Improve Type Inference

ปรับปรุง type inference ให้ดีขึ้น

- ใช้ `type hints` ทุก function
- ใช้ `satisfies operator` เพื่อ validate types
- ใช้ `generic types` สำหรับ reusable logic
- สร้าง `utility types` สำหรับ common patterns
- ใช้ `branded types` สำหรับ domain-specific types

### 5. Add Type Guards

เพิ่ม type guards สำหรับ runtime type checking

- สร้าง `type guard functions`
- ใช้ `is keyword` สำหรับ type narrowing
- ใช้ `discriminated unions` สำหรับ complex types
- เพิ่ม runtime validation สำหรับ external data
- ใช้ `zod` หรือ similar library สำหรับ schema validation

### 6. Verify

ตรวจสอบว่า type safety ดีขึ้นแล้ว

- รัน `type check` ตรวจสอบว่าไม่มี errors
- รัน build ตรวจสอบว่าไม่มี build errors
- ตรวจสอบ `type coverage` ด้วย `type-coverage`
- ยืนยันว่า functionality ทั้งหมดยังทำงานได้ปกติ

## Rules

### 1. Type Safety Principles

ปฏิบัติตาม type safety best practices

- หลีกเลี่ยงการใช้ `any` โดยเด็ดขาด
- ใช้ `unknown` แทน `any` เมื่อจำเป็น
- ใช้ `type narrowing` แทน type assertions
- ใช้ `discriminated unions` สำหรับ complex state
- เปิด `strict mode` ทุกโปรเจกต์

### 2. Type Guards

ใช้ type guards สำหรับ runtime type checking

- สร้าง `type guard functions` สำหรับ runtime checks
- ใช้ `is keyword` สำหรับ type narrowing
- ใช้ `typeof` และ `instanceof` อย่างเหมาะสม
- ใช้ `in operator` สำหรับ property checks
- ใช้ custom type guards สำหรับ complex conditions

### 3. Type Inference

ปรับปรุง type inference ให้ดีขึ้น

- ใช้ `type hints` ทุก function
- ใช้ `satisfies operator` เพื่อ validate types
- ใช้ `const assertions` สำหรับ literal types
- ใช้ `as const` สำหรับ readonly arrays/objects
- ใช้ `generic types` สำหรับ reusable logic

### 4. Type Coverage

ตรวจสอบและปรับปรุง type coverage

- ตรวจสอบ `type coverage` อย่างสม่ำเสมอ
- เพิ่ม types สำหรับ untyped code
- ใช้ `type-coverage` tool เพื่อวัดผล
- ตั้งเป้าหมาย type coverage ขั้นต่ำ
- ตรวจสอบ `any types` อย่างสม่ำเสมอ

## Expected Outcome

- `type errors` ทั้งหมดถูกแก้ไข
- `strict mode` เปิดใช้งาน
- `type coverage` เพิ่มขึ้นอย่างมีนัยสำคัญ
- ไม่มี `any types` ใน codebase
- `type guards` ถูกเพิ่มสำหรับ runtime checks
- `type inference` ดีขึ้น
- functionality ทั้งหมดยังทำงานได้ปกติ

