---
title: Review Error Handling
description: Review error handling ครอบคลุม error boundaries, messages, codes, และ graceful degradation
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review error handling quality ครอบคลุม error boundaries, error messages, error codes และ graceful degradation

## Scope

error boundaries, error messages, error codes, try-catch patterns, graceful degradation, error recovery, error message quality, และ user-friendly error communication

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ error handling structure
2. ระบุ error handling patterns และ error reporting tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-error-handling.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ error boundaries, try-catch coverage, และ unhandled rejections
3. Script ตรวจสอบ error messages: user-friendly, actionable, และ localized
4. Script ตรวจสอบ error codes, graceful degradation, และ error recovery patterns
5. Script คำนวณ error handling health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: unhandled error on critical path, silent failure, data loss from error
- **High**: missing error boundary, confusing error message, no error recovery
- **Medium**: inconsistent error format, missing error code, minor gap
- **Low**: cosmetic message improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
