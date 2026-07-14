---
title: Review Data Integrity
description: Review data integrity ครอบคลุม DB constraints, referential integrity, orphaned records และ cascade rules
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review data integrity quality ครอบคลุม database constraints, referential integrity, orphaned record prevention และ cascade rules

## Scope

database constraints, foreign key integrity, orphaned record prevention, cascade delete/update rules, data validation constraints และ transaction integrity

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ database schema และ constraint setup
2. ระบุ database tables, foreign key relationships และ existing constraints

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-data-integrity.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ primary key constraints: uniqueness, not-null, auto-increment strategy
3. Script ตรวจสอบ foreign key constraints: referential integrity, cascade rules, SET NULL vs RESTRICT
4. Script ตรวจสอบ unique constraints: unique columns, composite unique, partial unique indexes
5. Script ตรวจสอบ check constraints: value range validation, enum constraints, business rule constraints
6. Script ตรวจสอบ not-null constraints: required fields, optional fields, default values
7. Script ตรวจสอบ orphaned record risk: missing foreign key, soft delete without reference check
8. Script ตรวจสอบ transaction integrity: atomic operations, rollback capability, isolation level
9. Script คำนวณ data integrity health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing foreign key constraint, orphaned record risk, no transaction integrity
- **High**: missing unique constraint, missing check constraint, unsafe cascade delete
- **Medium**: inconsistent not-null, missing default value, minor constraint gap
- **Low**: constraint naming convention, minor index improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
