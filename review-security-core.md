---
title: Review Security Core
description: Review security ครอบคลุม auth, secrets, input validation, และ vulnerabilities
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review security ครอบคลุม authentication, authorization, secrets management, input validation และ dependency vulnerabilities

## Scope

auth patterns, RBAC, secrets exposure, input sanitization, dependency vulnerabilities, และ API security

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ security structure
2. ระบุ auth provider และ security tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-security.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ hardcoded secrets, auth patterns, RBAC enforcement
3. Script ตรวจสอบ input validation, sanitization, และ dependency vulnerabilities
4. Script คำนวณ security health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: hardcoded secrets, unauthenticated endpoint, SQL injection
- **High**: missing RBAC, missing input validation, vulnerable dependency
- **Medium**: weak auth pattern, missing rate limiting
- **Low**: documentation gap, minor improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
