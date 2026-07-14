---
title: Review Debugging
description: Review debugging quality ครอบคลุม error messages, logging, traceability, และ debuggability
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review debugging quality ครอบคลุม error messages, logging clarity, traceability, reproducibility และ debuggability ของระบบ

## Scope

error messages, stack traces, logging context, debug tooling, error reproduction steps, breakpoint coverage, และ diagnostic data collection

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ debugging setup
2. ระบุ debug tools, logging libraries, และ error tracking services ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-debugging.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ error message clarity, context inclusion, และ actionable guidance
3. Script ตรวจสอบ stack trace quality, source map coverage, และ error correlation
4. Script ตรวจสอบ logging context, debug log levels, และ diagnostic data availability
5. Script ตรวจสอบ reproducibility: test coverage for error paths, error scenario documentation
6. Script คำนวณ debuggability score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: silent failure, no error context, unreproducible production error
- **High**: missing stack trace, unclear error message, no debug logging in critical path
- **Medium**: incomplete error context, missing diagnostic data, inconsistent log levels
- **Low**: minor message improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
