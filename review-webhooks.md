---
title: Review Webhooks
description: Review webhook handling ครอบคลุม signature verification, idempotency, retry, และ payload validation
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review webhook handling quality ครอบคลุม signature verification, idempotency, retry logic, event ordering และ payload validation

## Scope

webhook signature verification, idempotency handling, retry logic, event ordering, payload validation, webhook secret management, และ webhook error handling

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ webhook setup
2. ระบุ webhook providers, endpoint configuration และ signature verification method ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-webhooks.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ signature verification, timestamp validation, และ replay attack prevention
3. Script ตรวจสอบ idempotency handling, event deduplication, และ event ordering
4. Script ตรวจสอบ retry logic, backoff strategy, และ dead letter queue
5. Script ตรวจสอบ payload validation, schema enforcement, และ webhook secret management
6. Script คำนวณ webhook health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing signature verification, no idempotency, webhook secret exposed
- **High**: missing retry logic, no payload validation, broken event ordering
- **Medium**: inconsistent error handling, missing dead letter queue, minor retry gap
- **Low**: cosmetic webhook improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
