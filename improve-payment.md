---
title: Improve Payment
description: ปรับปรุง checkout UX, subscription, refund flow ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-security
  - improve-uxui
  - improve-error-handling
  - improve-observability
  - improve-backend-services
---

## Goal

ปรับปรุง payment system ทั้ง checkout UX, subscription management, refund flow, และ payment security

## Scope

ใช้สำหรับ project ที่มี payment processing (Stripe, PayPal, Razorpay, etc.)

## Execute

### 1. Checkout Flow

ปรับปรุง checkout UX

1. ทำ `/improve-uxui` สำหรับ checkout UI
2. วิเคราะห์ checkout steps และ friction points
3. ตั้งค่า guest checkout ถ้าเหมาะสม
4. ตรวจสอบ cart management และ pricing display
5. ตั้งค่า payment method selection (card, wallet, bank transfer)
6. แสดง order summary ก่อน confirm

### 2. Subscription Management

ปรับปรุง subscription lifecycle

1. ตรวจสอบ subscription create/update/cancel flows
2. ตั้งค่า proration และ plan upgrade/downgrade
3. ตรวจสอบ trial period และ conversion
4. ตั้งค่า dunning management สำหรับ failed payments
5. ตรวจสอบ subscription pause และ resume

### 3. Refund And Dispute

ปรับปรุง refund และ dispute handling

1. ตรวจสอบ refund flow และ approval process
2. ตั้งค่า partial refund support
3. ตรวจสอบ chargeback และ dispute response
4. ตั้งค่า refund timeline และ communication
5. ทำ `/improve-error-handling` สำหรับ refund errors

### 4. Payment Security

ปรับปรุง payment security

1. ทำ `/improve-security` สำหรับ payment security audit
2. ตรวจสอบ PCI compliance scope
3. ตั้งค่า webhook signature verification
4. ตรวจสอบ fraud detection rules
5. ไม่ store credit card data ในระบบ

### 5. Payment Observability

ปรับปรุง payment monitoring

1. ทำ `/improve-observability` สำหรับ payment logging
2. Log payment events (charge, refund, dispute, webhook)
3. ตรวจสอบ payment success/failure rates
4. ตั้งค่า payment anomaly detection
5. Track revenue metrics และ MRR/ARR

### 6. Multi-Tenant Payment

ปรับปรุง multi-tenant payment routing

1. ตรวจสอบ Stripe Connect หรือ equivalent
2. ตั้งค่า platform fee และ payout schedule
3. ตรวจสอบ tenant onboarding และ KYC
4. ตั้งค่า tenant-specific payment methods
5. ทำ `/improve-backend-services` สำหรับ webhook handling

## Rules

### 1. Security First

- ไม่ store credit card data ในระบบ
- Webhook signature verification เสมอ
- PCI compliance scope ชัดเจน
- Fraud detection rules ตั้งค่าไว้

### 2. Checkout Quality

- Checkout steps น้อยที่สุดเท่าที่จำเป็น
- Order summary ก่อน confirm
- Guest checkout ถ้าเหมาะสม
- Error messages ชัดเจน สำหรับ card declined, etc.

### 3. Subscription Reliability

- Proration คำนวณถูกต้อง
- Dunning management สำหรับ failed payments
- Plan changes มีผลทันทีหรืองวดถัดไปตาม config
- Cancellation ต้อง straightforward

### 4. Refund Safety

- Refund ต้องมี approval process
- Partial refund รองรับ
- Refund timeline ชัดเจน
- Communication ไปยัง customer อัตโนมัติ

## Expected Outcome

- Checkout flow ลื่นไหล มี friction น้อย
- Subscription management ครบถ้วน พร้อม dunning
- Refund flow ปลอดภัย พร้อม approval process
- Payment security ผ่าน audit
- Payment monitoring ครอบคลุมทุก events
- Multi-tenant payment routing ทำงานถูกต้อง
