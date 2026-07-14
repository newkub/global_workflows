---
title: Review Email
description: Review email ครอบคลุม template rendering, validation, unsubscribe, deliverability, และ SPF/DKIM/DMARC
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review email system quality ครอบคลุม email template rendering, email validation, unsubscribe handling, deliverability และ SPF/DKIM/DMARC configuration

## Scope

email template rendering, email validation, unsubscribe handling, deliverability, SPF/DKIM/DMARC, และ email queue management

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ email structure
2. ระบุ email patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-email.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ email template rendering, dynamic content, และ template versioning
3. Script ตรวจสอบ email validation, bounce handling, และ suppression list management
4. Script ตรวจสอบ unsubscribe handling, consent management, และ CAN-SPAM compliance
5. Script ตรวจสอบ deliverability: SPF, DKIM, DMARC, และ email authentication headers
6. Script คำนวณ email health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken unsubscribe, no SPF/DKIM, email injection vulnerability
- **High**: missing bounce handling, broken template, no DMARC
- **Medium**: missing suppression list, inconsistent template, minor deliverability issue
- **Low**: minor email improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
