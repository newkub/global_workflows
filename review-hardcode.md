---
title: Review Hardcode
description: Review hardcode ครอบคลุม magic numbers, hardcoded strings, URLs, paths, secrets, และ business rules
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /update-rules
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review hardcoded values ใน codebase ครอบคลุม magic numbers, hardcoded strings, URLs, paths, secrets, business rules และ configuration ที่ควรเป็น environment variables หรือ constants

## Scope

magic numbers, hardcoded strings ที่ไม่ใช่ messages, hardcoded URLs และ API endpoints, hardcoded file paths, hardcoded secrets และ credentials, hardcoded business rules ที่ควรเป็น configurable, และ hardcoded feature flags

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ codebase structure และ identify hardcoded value patterns
2. ระบุ config files, constants files, และ environment variables ที่มีอยู่แล้ว

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-hardcode.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ magic numbers ที่ไม่มี named constant (ค่าที่ไม่ใช่ 0, 1, -1 และใช้ซ้ำใน logic)
3. Script ตรวจสอบ hardcoded strings ที่ไม่ใช่ user messages (identifiers, keys, labels ที่ควรเป็น constants)
4. Script ตรวจสอบ hardcoded URLs, API endpoints, และ base paths ที่ควรเป็น environment variables
5. Script ตรวจสอบ hardcoded file paths และ filenames ที่ควรเป็น config
6. Script ตรวจสอบ hardcoded secrets, API keys, tokens, และ credentials ที่ควรเป็น environment variables
7. Script ตรวจสอบ hardcoded business rules (thresholds, limits, timeouts, rates) ที่ควรเป็น configurable
8. Script ตรวจสอบ hardcoded feature flags และ conditional logic ที่ควรเป็น config
9. Script คำนวณ hardcode health score และ output เป็น structured JSON
10. ทำ `/update-rules` เพื่ออัปเดต ast-grep rules สำหรับ hardcode patterns ที่พบ

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: hardcoded secrets, API keys, tokens, credentials ใน source code
- **High**: hardcoded URLs และ API endpoints, hardcoded business rules ที่ต้องเปลี่ยนตาม environment, hardcoded feature flags
- **Medium**: magic numbers ที่ใช้ซ้ำในหลายที่, hardcoded strings ที่ควรเป็น constants, hardcoded file paths
- **Low**: magic numbers ที่ใช้ครั้งเดียวใน context ชัดเจน, minor naming improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ระบุ hardcoded value และ recommended replacement (constant name, env var, config key)

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- ใช้ `/no-hard-code` สำหรับการแก้ไขหลัง review เสร็จ

### 4. Exclusions

- ไม่นับค่า 0, 1, -1 เป็น magic numbers
- ไม่นับ user-facing messages และ UI labels เป็น hardcoded strings
- ไม่นับ test fixtures และ test data เป็น hardcode
- ไม่นับ type definitions และ interface defaults เป็น hardcode
- ไม่นับ constants ที่มีอยู่แล้วใน constants files

## Expected Outcome

- รายงานตาราง findings พร้อม severity, location, hardcoded value และ recommended replacement
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
