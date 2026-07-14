---
title: Review Integrations
description: Review third-party integration ครอบคลุม API client, error handling, retry, และ vendor lock-in
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review third-party integration quality ครอบคลุม API client design, external service error handling, retry strategies และ vendor lock-in risk

## Scope

API client design, external service error handling, retry strategies, circuit breaker patterns, vendor lock-in risk, และ integration testability

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ integrations structure
2. ระบุ integrations patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-integrations.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ API client design, timeout configuration, และ connection pooling
3. Script ตรวจสอบ external service error handling, retry strategies, และ circuit breaker patterns
4. Script ตรวจสอบ vendor lock-in risk, abstraction layer, และ swappability
5. Script ตรวจสอบ integration testability, mock patterns, และ contract testing
6. Script คำนวณ integrations health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no timeout, no error handling, hard-coded vendor dependency
- **High**: missing retry, no circuit breaker, untestable integration
- **Medium**: suboptimal timeout, missing abstraction, minor vendor lock-in
- **Low**: minor integration improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
