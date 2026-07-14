---
title: Review Data Leak
description: Review data leak ครอบคลุม sensitive data exposure, PII leaks, log leaks, และ error message leaks
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /update-rules
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review data leak prevention ครอบคลุม sensitive data exposure ใน API responses, logs, error messages, client bundles และ database queries

## Scope

sensitive data exposure ใน API responses, PII leaks ใน logs และ console output, error message information disclosure, server-side secrets leaking to client, data over-fetching, และ audit trail data leaks

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ data flow และ sensitive data patterns
2. ระบุ PII fields, secret keys, และ sensitive data types ที่ใช้ใน project

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-data-leak.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ API responses ที่ expose sensitive fields เกินจำเป็น (over-fetching, missing field selection)
3. Script ตรวจสอบ log statements และ console output ที่ contain PII, secrets, หรือ sensitive data
4. Script ตรวจสอบ error messages ที่ reveal internal state, stack traces, หรือ system information ต่อ client
5. Script ตรวจสอบ server-side secrets, API keys, และ environment variables ที่ leak ไป client bundle
6. Script ตรวจสอบ database queries ที่ return sensitive columns โดยไม่จำเป็น และ missing column selection
7. Script คำนวณ data leak health score และ output เป็น structured JSON
8. ทำ `/update-rules` เพื่ออัปเดต ast-grep rules สำหรับ data leak patterns ที่พบ

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: secrets ใน client bundle, PII ใน API response โดยไม่มี authorization, hardcoded credentials ใน code
- **High**: PII ใน logs, error messages ที่ reveal internal state, missing field selection ใน API responses, sensitive data ใน console output
- **Medium**: over-fetching sensitive columns, verbose error logging, missing data masking
- **Low**: minor logging improvement, naming convention สำหรับ sensitive fields

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ระบุ data type ที่ leak และ exposure channel (API, log, error, client bundle)

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity, location, และ data type ที่ leak
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
