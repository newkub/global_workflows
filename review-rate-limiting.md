---
title: Review Rate Limiting
description: Review rate limiting ครอบคลุม middleware config, threshold tuning, bypass protection, และ distributed
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review rate limiting quality ครอบคลุม middleware configuration, threshold tuning, bypass protection และ distributed rate limiting

## Scope

rate limiting middleware, threshold configuration, bypass protection, distributed rate limiting, rate limit headers, และ rate limit error responses

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ rate limiting setup
2. ระบุ rate limiting strategy, storage backend และ middleware configuration ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-rate-limiting.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ rate limiting middleware, threshold values, และ window configuration
3. Script ตรวจสอบ bypass protection, whitelist safety, และ authentication-based limits
4. Script ตรวจสอบ distributed rate limiting, shared state, และ race condition prevention
5. Script ตรวจสอบ rate limit headers, error response format, และ client retry guidance
6. Script คำนวณ rate limiting health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no rate limiting on critical endpoint, bypassable rate limit, race condition in distributed mode
- **High**: missing rate limit headers, incorrect threshold, no retry guidance
- **Medium**: inconsistent configuration, missing whitelist documentation, suboptimal window
- **Low**: cosmetic rate limit improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
