---
title: Analyze Payment
description: วิเคราะห์ payment flow, Stripe integration, refund, subscription, checkout UX
auto_execution_mode: 3
related_workflows:
  - /analyze-security
  - /improve-payment
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ payment integration และ checkout flow เพื่อระบุ security และ UX issues

## Scope

Payment flow, Stripe integration, checkout UX, subscription management, refund flow, payment state tracking, webhook handling, multi-currency, payment errors, PCI compliance

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม payment metrics ผ่าน scripts (Stripe pattern detection, payment state scan, checkout flow analysis)

### 2. Check Payment Flow

1. ระบุ missing payment state tracking ใน database
2. ระบุ missing payment intent creation
3. ระบุ missing payment confirmation handling
4. ระบุ missing payment failure handling
5. ระบุ missing idempotency keys สำหรับ payments

### 3. Check Stripe Integration

1. ระบุ missing Stripe webhook signature verification
2. ระบุ missing Stripe error handling
3. ระบุ Stripe key exposure บน client side
4. ระบุ missing Stripe Connect สำหรับ multi-tenant
5. ระบุ missing Stripe metadata สำหรับ reconciliation

### 4. Check Checkout UX

1. ระบุ missing checkout progress indicator
2. ระบุ missing guest checkout option
3. ระบุ missing payment method selection
4. ระบุ missing order summary ใน checkout
5. ระบุ missing trust signals (security badges, SSL)
6. ระบุ missing loading state ระหว่าง payment processing

### 5. Check Subscription Management

1. ระบุ missing subscription lifecycle handling
2. ระบุ missing subscription upgrade/downgrade
3. ระบุ missing subscription cancellation flow
4. ระบุ missing proration handling
5. ระบุ missing dunning management (failed payment retry)

### 6. Check Refund Flow

1. ระบุ missing refund initiation
2. ระบุ missing refund state tracking
3. ระบุ missing partial refund support
4. ระบุ missing refund webhook handling
5. ระบุ missing refund audit trail

### 7. Check Payment Errors

1. ระบุ missing card decline handling
2. ระบุ missing insufficient funds handling
3. ระบุ missing expired card handling
4. ระบุ missing 3D Secure / SCA handling
5. ระบุ missing user-friendly error messages

### 8. Check Multi-Currency

1. ระบุ missing multi-currency support
2. ระบุ missing currency conversion
3. ระบุ missing currency display formatting
4. ระบุ missing currency selection

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: Stripe integration → payment flow → checkout UX → subscription → refund → errors → multi-currency

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: Stripe key exposure, missing webhook verification, no payment state tracking
- **High**: missing error handling, missing refund flow, missing 3D Secure
- **Medium**: missing checkout UX, missing subscription management, missing multi-currency
- **Low**: missing trust signals, missing loading states

### 3. PCI Compliance

- ตรวจสอบว่าไม่เก็บ card data ใน database
- ตรวจสอบ Stripe Elements สำหรับ PCI scope reduction
- ระบุ PCI compliance violations

### 4. Use Scripts For Payment Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ Stripe pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Payment security และ UX gaps ระบุพร้อม location และ severity
- Stripe integration issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-payment`
