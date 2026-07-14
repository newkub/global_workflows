---
title: Review Naming
description: Review naming conventions ครอบคลุม code, API, database, files, และ consistency
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

Review naming convention quality ครอบคลุม variable, function, class, file, API endpoint, database table/column และ consistency ทั่วทั้ง codebase

## Scope

variable naming, function naming, class naming, file naming, directory naming, API endpoint naming, database table/column naming, และ convention consistency

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ naming patterns
2. ระบุ naming conventions ที่ใช้: camelCase, PascalCase, snake_case, kebab-case

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-naming.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ variable, function, class naming consistency ตาม language conventions
3. Script ตรวจสอบ file naming patterns ครอบคลุม:
   - File naming convention ตาม file type: component files (PascalCase), utility/hook files (camelCase หรือ kebab-case), route files (ตาม framework convention), test files (`.test.ts` / `.spec.ts`), config files
   - File name สะท้อน content และ purpose ของ file อย่างชัดเจน
   - File naming consistency ภายใน category เดียวกัน (เช่น components ใช้ PascalCase ทุกไฟล์)
   - File extension ถูกต้องตาม file type (`.tsx` สำหรับ SolidJS/React components, `.ts` สำหรับ pure logic)
   - Prefix/suffix conventions (เช่น `use-*` สำหรับ composables/hooks, `*.server.ts` สำหรับ server-only)
4. Script ตรวจสอบ directory naming patterns ตาม project conventions
5. Script ตรวจสอบ API endpoint naming, database table/column naming, และ cross-layer consistency
6. Script คำนวณ naming consistency score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: inconsistent naming ที่ก่อให้เกิด bug, misleading name
- **High**: inconsistent convention across layer, non-standard naming pattern
- **Medium**: minor inconsistency, missing naming convention documentation
- **Low**: cosmetic naming improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
