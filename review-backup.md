---
title: Review Backup
description: Review backup ครอบคลุม strategy, restore testing, recovery procedures, และ RPO/RTO
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review backup และ recovery quality ครอบคลุม backup strategy, restore testing, data recovery procedures และ RPO/RTO compliance

## Scope

backup strategy, backup frequency, restore testing, data recovery procedures, RPO/RTO compliance, และ backup verification

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ backup structure
2. ระบุ backup patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-backup.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ backup strategy, backup types, และ backup frequency
3. Script ตรวจสอบ restore testing, restore procedures, และ restore verification
4. Script ตรวจสอบ RPO/RTO compliance, recovery time objectives, และ data loss tolerance
5. Script ตรวจสอบ backup verification, backup integrity, และ backup retention policy
6. Script คำนวณ backup health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no backup, untested restore, RPO/RTO non-compliance
- **High**: missing restore test, inconsistent backup, no retention policy
- **Medium**: suboptimal frequency, missing verification, minor recovery gap
- **Low**: minor backup improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
