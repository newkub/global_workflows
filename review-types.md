---
title: Review Types
description: Review type design ครอบคลุม generics, inference, discriminated unions, branded types, และ narrowing
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review TypeScript type design quality ครอบคลุม generic types, type inference, discriminated unions, branded types และ type narrowing patterns

## Scope

generic types, type inference, discriminated unions, branded types, type narrowing, type predicates, และ type safety patterns

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ types structure
2. ระบุ types patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-types.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ generic type usage, type parameter constraints, และ type inference quality
3. Script ตรวจสอบ discriminated unions, type narrowing, และ type predicate patterns
4. Script ตรวจสอบ branded types, opaque types, และ nominal typing patterns
5. Script ตรวจสอบ type safety gaps, `any` usage, และ unnecessary type assertions
6. Script คำนวณ types health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: `any` in critical path, type safety bypass, unsafe assertion
- **High**: missing type constraint, poor generic design, missing discriminated union
- **Medium**: unnecessary assertion, missing branded type, suboptimal inference
- **Low**: minor type improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
