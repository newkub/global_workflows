---
title: Review Privacy
description: Review privacy ครอบคลุม GDPR, PII handling, consent, data deletion, และ retention
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review privacy compliance quality ครอบคลุม GDPR compliance, PII handling, consent management, data deletion rights และ data retention policies

## Scope

GDPR compliance, PII handling, consent management, data deletion rights, data retention, และ privacy policy enforcement

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ privacy structure
2. ระบุ privacy patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-privacy.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ PII handling, data classification, และ PII storage patterns
3. Script ตรวจสอบ consent management, consent tracking, และ consent withdrawal
4. Script ตรวจสอบ data deletion rights, right-to-be-forgotten, และ data export
5. Script ตรวจสอบ data retention policies, retention enforcement, และ automated deletion
6. Script คำนวณ privacy health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: unencrypted PII, no consent management, no data deletion path
- **High**: missing GDPR compliance, no retention policy, inconsistent PII handling
- **Medium**: missing consent tracking, suboptimal retention, minor privacy gap
- **Low**: minor privacy improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
