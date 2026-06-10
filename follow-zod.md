---
title: Follow Zod
description: ตั้งค่าและใช้งาน Zod สำหรับ TypeScript-first schema validation ด้วย static type inference
auto_execution_mode: 3
---

## Goal

ตั้งค่าและใช้งาน Zod สำหรับ schema validation และ type safety ใน TypeScript projects

## Execute

### 1. Install Zod

1. ติดตั้ง Zod ด้วย Bun
2. ตรวจสอบ version ล่าสุด
3. เพิ่ม dependencies ใน package.json

### 2. Enable Strict TypeScript Mode

1. เปิด strict mode ใน tsconfig.json
2. ตั้งค่า strict: true
3. ตรวจสอบ compiler options อื่นๆ

### 3. Define Schemas

1. ใช้ factory functions จาก z namespace
2. กำหนด schemas สำหรับ primitive types (string, number, boolean)
3. กำหนด schemas สำหรับ complex structures (object, array, union)
4. ใช้ z.coerce สำหรับ type coercion
5. ใช้ z.custom สำหรับ custom validation
6. จัดโครงสร้าง schemas ให้ reusable

### 4. Validate Data

1. ใช้ .parse() สำหรับ validation ที่ต้องการ throw error
2. ใช้ .safeParse() สำหรับ validation ที่ต้องการ result object
3. ใช้ .parseAsync() หรือ .safeParseAsync() สำหรับ async validation
4. เลือก method ที่เหมาะสมกับ use case

### 5. Handle Errors

1. ใช้ try-catch กับ .parse()
2. ตรวจสอบ z.ZodError instance
3. เข้าถึง error.issues สำหรับข้อมูล error
4. custom error messages ใน schema definitions
5. ใช้ z.config() สำหรับ global error messages

### 6. TypeScript Integration

1. ใช้ z.infer<typeof schema> สำหรับ type inference
2. ใช้ z.input<typeof schema> สำหรับ input type
3. ใช้ z.output<typeof schema> สำหรับ output type
4. extend z.ZodTypeAny สำหรับ generic functions
5. รักษา type safety ทั้ง runtime และ compile-time

### 7. Schema Composition

1. ใช้ .extend() สำหรับ extending schemas
2. ใช้ .merge() สำหรับ merging schemas
3. ใช้ .pick() และ .omit() สำหรับ partial schemas
4. ใช้ .partial() สำหรับ optional fields
5. ใช้ .required() สำหรับ required fields
6. จัดระเบียบ schemas ให้ maintainable

### 8. Advanced Patterns

1. ใช้ .refine() สำหรับ custom validation logic
2. ใช้ .transform() สำหรับ data transformation
3. ใช้ .pipe() สำหรับ chaining transformations
4. ใช้ .discriminatedUnion() สำหรับ tagged unions
5. ใช้ .branded() สำหรับ branded types
6. ใช้ .readonly() สำหรับ immutable data

### 9. Testing Schemas

1. เขียน unit tests สำหรับ validation logic
2. test valid cases
3. test invalid cases
4. test edge cases
5. test error messages
6. ใช้ .safeParse() ใน tests

## Rules

- เปิด strict mode ใน tsconfig.json เสมอ
- ใช้ .safeParse() สำหรับ user input validation
- ใช้ .parse() สำหรับ critical validation ที่ต้องการ throw error
- ใช้ .parseAsync() หรือ .safeParseAsync() สำหรับ async schemas
- custom error messages ควรชัดเจนและเป็นภาษาที่ user เข้าใจ
- schemas ควร reusable และ maintainable
- ใช้ type inference แทน manual type definitions
- จัดระเบียบ schemas ตาม domain หรือ feature
- test schemas อย่างครอบคลุม
- ใช้ z.coerce เมื่อต้องการ type conversion

## Expected Outcome

- Zod ติดตั้งและตั้งค่าอย่างถูกต้อง
- Schemas ที่ well-structured และ reusable
- Validation logic ที่ type-safe
- Error handling ที่ clear และ user-friendly
- TypeScript types ที่ synchronized กับ runtime validation
- Test coverage สำหรับ validation logic
- Codebase ที่ maintainable และ scalable

