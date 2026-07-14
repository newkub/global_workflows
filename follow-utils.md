---
description: แนวทางการเขียนและจัดโครงสร้าง utils functions
trigger: always_on
instruction:
  - ใช้ Pure Functional Programming principles
  - จัดโครงสร้าง folder และ imports อย่างเป็นระบบ
title: Follow Utils
auto_execution_mode: 3
---

## 1. Folder Rules (ใช้เสมอ)

1.1. `Pure FP` : เขียน utils functions -> ปฏิบัติตามหลักต่อไปนี้
    - No Side Effects
    - No State Mutation
    - Deterministic
    - Stateless
    - Small & Focused

1.2. `การจัดโครงสร้าง folder` : มี utils functions หลายประเภท -> แบ่งเป็น subfolders ตามหมวดหมู่
    - /utils/format - สำหรับ formatting functions
    - /utils/validation - สำหรับ validation functions
    - /utils/conversion - สำหรับ conversion functions
    - /utils/math - สำหรับ mathematical functions
    - /utils/string - สำหรับ string manipulation functions
    - /utils/array - สำหรับ array manipulation functions
    - /utils/date - สำหรับ date/time functions

1.3. `การตั้งชื่อ folder` : สร้าง folder ใหม่ -> ใช้ชื่อที่สื่อความหมายชัดเจนและเป็นภาษาอังกฤษ

---

## 2. Import Rules (ใช้เสมอ)

2.1. `ลำดับ imports` : import dependencies -> เรียงตามลำดับต่อไปนี้
    - External libraries (เช่น import { z } from 'zod')
    - Internal modules (เช่น import { type Config } from '@/types')
    - Relative imports (เช่น import { helper } from './helper')

2.2. `การจัดกลุ่ม imports` : imports หลายประเภท -> แบ่งเป็น groups และเว้นบรรทัดว่างระหว่าง groups

2.3. `การใช้ type imports` : import types เท่านั้น -> ใช้ `import type` เพื่อป้องกัน runtime overhead

2.4. `การตั้งชื่อ imports` : import จาก module เดียวกัน -> ใช้ destructuring และตั้งชื่อให้ชัดเจน

---

## 3. Function Rules (ใช้เสมอ)

3.1. `Pure Functions` : เขียน function -> ต้องเป็น pure function
    - รับ input และ return output เท่านั้น
    - ไม่แก้ไข input ที่รับมา
    - ไม่มี side effects
    - ใช้ immutable operations

3.2. `การตั้งชื่อ function` : ตั้งชื่อ function -> ใช้ verb หรือ verb+noun ที่สื่อความหมายชัดเจน
    - formatDate
    - validateEmail
    - convertToCamelCase

3.3. `การเขียน JSDoc` : function มีความซับซ้อน -> เขียน JSDoc อธิบาย
    - @param - อธิบาย parameters
    - @returns - อธิบาย return value
    - @example - ให้ตัวอย่างการใช้งาน
    - @throws - อธิบาย errors ที่อาจเกิดขึ้น

3.4. `การจัดการ error` : function อาจเกิด error -> return result object หรือ throw error อย่างชัดเจน
    - ใช้ Result pattern หรือ Either pattern
    - ใช้ custom error types
    - ระบุ error messages ที่ชัดเจน

3.5. `การเขียน tests` : function สำคัญ -> เขียน unit tests ครอบคลุม
    - Test happy paths
    - Test edge cases
    - Test error cases
    - ใช้ descriptive test names

3.6. `Type Safety` : function มี parameters หรือ return values -> ใช้ TypeScript types อย่างเหมาะสม
    - ใช้ type inference เมื่อเป็นไปได้
    - ใช้ generics สำหรับ reusable functions
    - ใช้ type guards สำหรับ runtime validation
    - ระบุ return types อย่างชัดเจน

3.7. `Parameter Validation` : function รับ parameters -> validate inputs ก่อนประมวลผล
    - ตรวจสอบ null/undefined
    - ตรวจสอบ types
    - ตรวจสอบ value ranges
    - ใช้ validation libraries เช่น zod สำหรับ complex validations

3.8. `Function Size` : function มีความยาว -> จัดการให้เหมาะสม
    - Single responsibility
    - ไม่เกิน 20-30 lines
    - Extract helper functions ถ้าจำเป็น

---

## 4. Export Rules (ใช้เสมอ)

4.1. `การ export` : export functions -> ใช้ named exports เป็นหลัก

4.2. `การสร้าง index file` : folder มีหลาย files -> สร้าง index.ts เพื่อรวบรวม exports

4.3. `การ re-export` : re-export จาก subfolders -> ใช้ `export * from` เพื่อความสะดวก

---

## 5. Performance Rules (ใช้เมื่อจำเป็น)

5.1. `Memoization` : function มีการคำนวณซ้ำๆ -> ใช้ memoization

5.2. `Lazy Evaluation` : ประมวลผลข้อมูลจำนวนมาก -> ใช้ lazy evaluation

5.3. `Caching` : function มี cost สูง -> implement caching mechanism

