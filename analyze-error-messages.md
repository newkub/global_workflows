---
title: Analyze Error Messages
description: วิเคราะห์ error message quality, actionable errors, error localization
auto_execution_mode: 3
related_workflows:
  - /analyze-developer-experience
  - /analyze-error-handling
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ error message quality เพื่อระบุ non-actionable และ unclear errors

## Scope

Error message quality, actionable errors, error localization, error codes, error context

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม error message metrics ผ่าน scripts (error scan, message analysis, code detection)

### 2. Check Error Message Quality

1. ระบุ error messages ที่ไม่ actionable (ไม่บอกวิธีแก้)
2. ระบุ error messages ที่ไม่ชัดเจน (vague, generic)
3. ระบุ error messages ที่ไม่มี context (missing variable values)
4. ระบุ error messages ที่เป็น technical jargon
5. ระบุ missing error message localization

### 3. Check Error Codes

1. ระบุ missing error codes
2. ระบุ inconsistent error code format
3. ระบุ missing error code documentation
4. ระบุ missing error code mapping
5. ระบุ missing error code registry

### 4. Check Error Context

1. ระบุ missing stack trace ใน errors
2. ระบุ missing cause chain ใน errors
3. ระบุ missing error metadata (timestamp, request ID)
4. ระบุ missing error severity level
5. ระบุ missing error category

### 5. Check User-Facing Errors

1. ระบุ technical errors ที่ leak สู่ user
2. ระบุ missing user-friendly error messages
3. ระบุ missing error recovery suggestions
4. ระบุ missing error help links
5. ระบุ missing error retry guidance

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: actionable errors → error context → user-facing → error codes → localization

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: technical errors leak to user, no error handling, missing error codes
- **High**: non-actionable errors, missing context, missing stack traces
- **Medium**: vague messages, missing localization, missing recovery suggestions
- **Low**: missing help links, missing retry guidance, inconsistent code format

### 3. Use Scripts For Error Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ throw/catch pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Error message issues ระบุพร้อม file:line และ severity
- พร้อมสำหรับ `/improve-error-messages` หรือ `/improve-dx`
