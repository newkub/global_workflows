---
title: Review Business
description: Orchestrator สำหรับ review business logic ครอบคลุม payment, subscription, multi-tenancy, feature flags, realtime, email
auto_execution_mode: 3
related:
  - /review-payment
  - /review-subscription
  - /review-multi-tenancy
  - /review-feature-flags
  - /review-realtime
  - /review-email
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate business logic review ครอบคลุมทุก dimension ของ business ผ่าน sub-workflows พร้อม aggregate findings

## Scope

business orchestrator สำหรับ: payment processing, subscription lifecycle, multi-tenancy isolation, feature flag management, realtime communication, email sending

## Execute

### 1. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-payment` เพื่อ review checkout, subscription, refund, Stripe integration, payment security
2. ทำ `/review-subscription` เพื่อ review billing cycles, renewal, cancellation, proration, subscription state
3. ทำ `/review-multi-tenancy` เพื่อ review tenant isolation, data partitioning, tenant context, cross-tenant leak
4. ทำ `/review-feature-flags` เพื่อ review flag definition, rollout strategy, flag cleanup, default values
5. ทำ `/review-realtime` เพื่อ review SSE/WebSocket, reconnection, notifications, delivery
6. ทำ `/review-email` เพื่อ review template rendering, validation, unsubscribe, deliverability, SPF/DKIM/DMARC

### 2. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 3. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow
3. ทำ `/suggest-next-action`

## Rules

### 1. Skip Conditions

- ถ้า project ไม่มี payment processing ให้ข้าม `/review-payment`
- ถ้า project ไม่มี subscription model ให้ข้าม `/review-subscription`
- ถ้า project ไม่มี multi-tenancy ให้ข้าม `/review-multi-tenancy`
- ถ้า project ไม่มี feature flags ให้ข้าม `/review-feature-flags`
- ถ้า project ไม่มี realtime features ให้ข้าม `/review-realtime`
- ถ้า project ไม่มี email sending ให้ข้าม `/review-email`

### 2. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง
- ไม่ duplicate เนื้อหา sub-workflows

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก business sub-workflow
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
