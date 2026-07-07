---
title: Analyze Type Safety
description: วิเคราะห์ TS strictness, type coverage, any usage, type inference
auto_execution_mode: 3
related_workflows:
  - /analyze-foundation
  - /improve-type-safety
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ TypeScript type safety เพื่อระบุ type gaps และ unsafe patterns

## Scope

TS strictness, type coverage, `any` usage, type inference, type narrowing, generic constraints, branded types, exhaustive checks

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม type safety metrics ผ่าน scripts (any detection, type assertion scan, strict mode check)

### 2. Check TS Configuration

1. ระบุ missing `strict: true` ใน tsconfig
2. ระบุ disabled strict flags (`noImplicitAny`, `strictNullChecks`, etc.)
3. ระบุ missing `noUncheckedIndexedAccess`
4. ระบุ missing `exactOptionalPropertyTypes`
5. ระบุ missing `noImplicitOverride`
6. ระบุ missing `forceConsistentCasingInFileNames`

### 3. Check Any Usage

1. ระบุ explicit `any` usage
2. ระบุ implicit `any` จาก missing type annotations
3. ระบุ `any` ใน function parameters
4. ระบุ `any` ใน return types
5. ระบุ `any` จาก third-party packages ที่ไม่มี types
6. ระบุ `as any` type assertions

### 4. Check Type Assertions

1. ระบุ unsafe type assertions (`as`)
2. ระบุ missing type guards แทน assertions
3. ระบุ double assertions (`as unknown as`)
4. ระบุ missing runtime validation (Zod) ที่ type boundaries
5. ระบุ `@ts-ignore` และ `@ts-nocheck` usage

### 5. Check Type Inference

1. ระบุ missing explicit return types สำหรับ public APIs
2. ระบุ over-reliance บน inference สำหรับ complex types
3. ระบุ missing generic constraints
4. ระบุ missing branded types สำหรับ domain concepts
5. ระบุ missing template literal types

### 6. Check Null Safety

1. ระบุ missing null checks
2. ระบุ unsafe optional chaining
3. ระบุ missing undefined handling
4. ระบุ non-null assertions (`!`) ที่ unsafe
5. ระบุ missing nullish coalescing

### 7. Check Exhaustive Checks

1. ระบุ missing exhaustive switch checks
2. ระบุ missing `never` type utilization
3. ระบุ missing discriminated unions
4. ระบุ missing assertion functions
5. ระบุ missing const assertions

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: any usage → type assertions → TS config → null safety → exhaustive checks → type inference

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: `any` ใน API boundaries, `@ts-ignore`, disabled strict mode
- **High**: unsafe assertions, missing null checks, missing runtime validation
- **Medium**: missing return types, non-null assertions, missing generic constraints
- **Low**: missing branded types, missing const assertions, missing exhaustive checks

### 3. Framework Awareness

- ตรวจสอบ Zod schema inference patterns
- ตรวจสอบ Drizzle type inference
- ตรวจสอบ TanStack Router type-safe params

### 4. Use Scripts For Type Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ `any` และ assertion detection
- ใช้ `tsgo` สำหรับ type checking

## Expected Outcome

- Type safety gaps ระบุพร้อม file:line และ severity
- `any` usage แล unsafe assertions จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-type-safety`
