---
title: Review API
description: Review API layer ครอบคลุม oRPC handlers, Zod validation, และ middleware
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review API layer quality ครอบคลุม handlers, validation, middleware, error handling และ type safety

## Scope

API handlers, input/output schemas, middleware, error handling, rate limiting, API documentation, API design, idempotency, network resilience, webhooks, SDK quality, และ integration points

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ API structure
2. ระบุ API framework และ validation library ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-api.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ handler patterns, Zod schema coverage, middleware usage
3. Script ตรวจสอบ error handling, rate limiting, และ input validation gaps
4. Script คำนวณ API health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: unauthenticated endpoint, missing input validation
- **High**: missing error handling, inconsistent response format
- **Medium**: missing schema, minor middleware gap
- **Low**: naming convention, documentation gap

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
