---
title: Review Migrations
description: Review database migrations ครอบคลุม safety, rollback, data preservation, และ ordering
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review database migration quality ครอบคลุม migration safety, rollback capability, data preservation และ migration ordering

## Scope

migration files, up/down scripts, data preservation, migration ordering, schema changes, index migrations, และ migration execution safety

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ migration setup
2. ระบุ migration tool, migration directory และ migration format ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-migrations.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ migration safety: destructive operations, locking, และ data loss risk
3. Script ตรวจสอบ rollback capability: down scripts completeness และ reversibility
4. Script ตรวจสอบ data preservation: default values, nullable columns, และ data backfill
5. Script ตรวจสอบ migration ordering, dependency chain, และ migration conflicts
6. Script คำนวณ migration safety score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: data loss risk, missing rollback, destructive operation without safeguard
- **High**: missing down script, non-reversible migration, unsafe locking
- **Medium**: missing default value, incomplete backfill, migration ordering issue
- **Low**: cosmetic migration improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
