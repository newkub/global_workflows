---
title: Review Subscription
description: Review subscription lifecycle ครอบคลุม billing cycles, renewal, cancellation และ proration
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review subscription lifecycle quality ครอบคลุม billing cycles, renewal process, cancellation handling, proration และ subscription state management

## Scope

subscription creation, billing cycle management, renewal process, cancellation handling, proration calculation, subscription upgrades/downgrades และ subscription state synchronization

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ subscription setup
2. ระบุ subscription provider, billing model และ subscription states

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-subscription.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ subscription creation: plan selection, trial period, payment method collection
3. Script ตรวจสอบ billing cycle: cycle period, billing date, timezone handling, leap year handling
4. Script ตรวจสอบ renewal process: auto-renewal, failed renewal, dunning management, retry logic
5. Script ตรวจสอบ cancellation: immediate vs end-of-period, cancellation reason, reactivation
6. Script ตรวจสอบ proration: upgrade/downgrade proration, mid-cycle change, credit calculation
7. Script ตรวจสอบ subscription state: state machine, state transitions, webhook synchronization
8. Script ตรวจสอบ subscription analytics: MRR, churn rate, LTV tracking
9. Script คำนวณ subscription health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing renewal handling, failed payment ไม่มี dunning, state desync
- **High**: incorrect proration, missing cancellation handling, no webhook sync
- **Medium**: inconsistent billing cycle, missing analytics, minor state gap
- **Low**: subscription naming convention, minor lifecycle improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
