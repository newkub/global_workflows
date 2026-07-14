---
title: Review Logging
description: Review logging ครอบคลุม log levels, structured logging, sensitive data, และ retention
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review logging quality ครอบคลุม log levels, structured logging, sensitive data exposure และ log retention

## Scope

log levels, structured logging, sensitive data in logs, log retention, log format consistency, audit trail, monitoring, และ observability

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ logging structure
2. ระบุ logging library และ log management tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-logging.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ log levels, structured logging format, และ log consistency
3. Script ตรวจสอบ sensitive data exposure, PII in logs, และ secret leakage
4. Script ตรวจสอบ log retention, rotation, แลand observability integration
5. Script คำนวณ logging health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: secrets in logs, PII exposure, no logging on critical path
- **High**: missing structured logging, inconsistent log levels, no log rotation
- **Medium**: missing context in logs, inconsistent format, missing observability
- **Low**: minor format improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
