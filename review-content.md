---
title: Review Content
description: Review content ครอบคลุม markdown, rich text, sanitization, XSS prevention, และ rendering
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review content quality ครอบคลุม markdown rendering, rich text handling, user-generated content sanitization และ XSS prevention

## Scope

markdown rendering, rich text editing, user-generated content sanitization, XSS prevention, content validation, และ content storage

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ content structure
2. ระบุ content patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-content.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ markdown rendering, parser configuration, และ plugin safety
3. Script ตรวจสอบ rich text handling, content sanitization, และ XSS prevention
4. Script ตรวจสอบ user-generated content validation, content limits, และ content filtering
5. Script ตรวจสอบ content storage, content versioning, และ content retrieval patterns
6. Script คำนวณ content health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: XSS vulnerability, no sanitization, broken content rendering
- **High**: missing content validation, inconsistent sanitization, no content limits
- **Medium**: suboptimal rendering, missing content versioning, minor validation gap
- **Low**: minor content improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
