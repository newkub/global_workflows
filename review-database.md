---
title: Review Database
description: Review database และ data layer ครอบคลุม schema, indexes, migrations, data quality, และ query patterns
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

Review database และ data layer quality ครอบคลุม schema design, indexes, migrations, data integrity, data quality และ query patterns

## Scope

schema design, indexes, relations, migrations, data integrity, data quality, data types, query patterns, connection management, data migration strategy, และ backend data layer

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ database structure
2. ระบุ database driver และ ORM ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-database.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ schema design, index coverage, relation integrity, และ data types
3. Script ตรวจสอบ migration safety, rollback capability, connection management, และ query patterns
4. Script ตรวจสอบ data quality, data integrity constraints, และ data validation
5. Script คำนวณ database health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: data loss risk, missing migration rollback, data integrity violation
- **High**: missing index on hot query, relation integrity issue, data quality gap
- **Medium**: inconsistent naming, missing constraint
- **Low**: cosmetic, documentation gap

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
