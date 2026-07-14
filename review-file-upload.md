---
title: Review File Upload
description: Review file upload ครอบคลุม validation, size limits, type checking, storage และ virus scan
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review file upload quality ครอบคลุม input validation, size limits, type checking, storage strategy และ security scanning

## Scope

file upload validation, size limit enforcement, MIME type checking, file name sanitization, storage strategy, virus scanning และ upload error handling

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ file upload setup
2. ระบุ upload endpoints, storage provider และ validation rules

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-file-upload.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ file size validation: max size enforcement, chunked upload, size limit configuration
3. Script ตรวจสอบ file type validation: MIME type checking, extension validation, magic number verification
4. Script ตรวจสอบ file name sanitization: path traversal prevention, special character handling, unique naming
5. Script ตรวจสอบ storage strategy: storage location, access control, CDN integration, cleanup policy
6. Script ตรวจสอบ security scanning: virus scan, malware detection, content scanning
7. Script ตรวจสอบ upload error handling: partial upload recovery, timeout handling, error feedback
8. Script คำนวณ file upload health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no file type validation, path traversal vulnerability, no size limit
- **High**: missing virus scan, insecure storage, no file name sanitization
- **Medium**: inconsistent error handling, missing cleanup policy, minor validation gap
- **Low**: upload UX improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
