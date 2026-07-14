---
title: Review Audit Log
description: Review audit trail ครอบคลุม who did what when, compliance logging, และ immutable logs
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review audit trail quality ครอบคลุม action logging, user attribution, timestamp integrity, immutability และ compliance requirements

## Scope

audit log creation, user action tracking, immutable log storage, compliance audit trail, sensitive action logging และ audit log retention

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ audit logging setup
2. ระบุ audit log storage, logged actions และ compliance requirements ที่ต้อง follow

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-audit-log.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ audit log coverage: ทุก sensitive action มี audit log หรือไม่
3. Script ตรวจสอบ user attribution: user_id, session_id, IP address, user agent ใน audit entries
4. Script ตรวจสอบ timestamp integrity: UTC timestamps, monotonic ordering, clock skew handling
5. Script ตรวจสอบ immutability: append-only storage, tamper detection, hash chain
6. Script ตรวจสอบ audit log retention: retention policy, archival, deletion schedule
7. Script ตรวจสอบ compliance coverage: GDPR, SOC2, PCI-DSS audit requirements
8. Script คำนวณ audit log health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing audit log สำหรับ sensitive action, mutable audit log, missing user attribution
- **High**: incomplete audit coverage, missing timestamp integrity, no retention policy
- **Medium**: inconsistent log format, missing compliance field, minor coverage gap
- **Low**: audit log naming convention, minor format improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
