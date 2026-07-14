---
title: Review Payment
description: Review payment ครอบคลุม checkout, subscription, refund, Stripe integration, และ payment security
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review payment processing quality ครอบคลุม checkout UX, subscription management, refund flows, Stripe integration และ payment security

## Scope

checkout flow, subscription management, refund processing, Stripe Connect integration, webhook handling, payment state tracking, PCI compliance, และ platform fee calculation

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ payment structure
2. ระบุ payment provider และ integration patterns ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-payment.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ checkout flow, payment intent creation, และ confirmation handling
3. Script ตรวจสอบ subscription lifecycle, billing cycles, และ proration logic
4. Script ตรวจสอบ refund processing, dispute handling, และ payment state transitions
5. Script ตรวจสอบ Stripe Connect integration, platform fee calculation, และ payout scheduling
6. Script ตรวจสอบ webhook signature verification, idempotency, และ payment event ordering
7. Script คำนวณ payment health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: payment data leak, broken checkout, unverified webhook, missing refund path
- **High**: missing idempotency, broken subscription renewal, incorrect fee calculation, missing payment state tracking
- **Medium**: suboptimal checkout UX, missing retry logic, incomplete dispute handling
- **Low**: minor payment UI improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
