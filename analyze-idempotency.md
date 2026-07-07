---
title: Analyze Idempotency
description: วิเคราะห์ idempotency keys, duplicate prevention, safe retries, request dedup
auto_execution_mode: 3
related_workflows:
  - /analyze-api
  - /analyze-concurrency
  - /improve-idempotency
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ idempotency patterns เพื่อระบุ duplicate operation risks และ retry safety gaps

## Scope

Idempotency keys, duplicate prevention, safe retries, request deduplication, idempotent API design, payment idempotency, webhook idempotency

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม idempotency metrics ผ่าน scripts (idempotency pattern detection, duplicate risk analysis)

### 2. Check Idempotency Keys

1. ระบุ missing idempotency keys ใน mutation endpoints
2. ระบุ missing idempotency key validation
3. ระบุ missing idempotency key storage
4. ระบุ missing idempotency key expiration
5. ระบุ missing idempotency key collision handling

### 3. Check Duplicate Prevention

1. ระบุ missing duplicate detection สำหรับ payments
2. ระบุ missing duplicate detection สำหรับ bookings
3. ระบุ missing duplicate detection สำหรับ form submissions
4. ระบุ missing unique constraints ที่ prevent duplicates
5. ระบุ missing database-level deduplication

### 4. Check Safe Retries

1. ระบุ missing retry safety ใน API calls
2. ระบุ missing retry safety ใน payment processing
3. ระบุ missing retry safety ใน webhook handlers
4. ระบุ missing retry safety ใน background jobs
5. ระบุ missing retry idempotency headers

### 5. Check Request Deduplication

1. ระบุ missing request deduplication mechanism
2. ระบุ missing request fingerprinting
3. ระบุ missing request cache สำหรับ identical requests
4. ระบุ missing dedup window configuration
5. ระบุ missing dedup cleanup

### 6. Check Payment Idempotency

1. ระบุ missing Stripe idempotency keys
2. ระบุ missing payment deduplication
3. ระบุ missing refund idempotency
4. ระบุ missing subscription idempotency
5. ระบุ missing payment retry safety

### 7. Check Webhook Idempotency

1. ระบุ missing webhook event deduplication
2. ระบุ missing webhook event ID tracking
3. ระบุ missing webhook event replay handling
4. ระบุ missing webhook idempotency storage
5. ระบุ missing webhook event ordering guarantees

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: payment idempotency → duplicate prevention → safe retries → webhook idempotency → request dedup → idempotency keys

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม endpoint และ severity

### 2. Severity Classification

- **Critical**: missing payment idempotency, missing duplicate prevention สำหรับ financial operations
- **High**: missing webhook idempotency, missing safe retries, missing idempotency keys
- **Medium**: missing request dedup, missing dedup window, missing expiration
- **Low**: missing fingerprinting, missing cleanup, missing collision handling

### 3. Framework Awareness

- ตรวจสอบ Stripe idempotency key patterns
- ตรวจสอบ oRPC handler idempotency
- ตรวจสอบ database unique constraints

### 4. Use Scripts For Idempotency Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ mutation pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Idempotency gaps ระบุพร้อม endpoint และ severity
- Payment และ duplicate prevention issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-idempotency`
