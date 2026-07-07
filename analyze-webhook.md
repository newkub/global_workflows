---
title: Analyze Webhook
description: วิเคราะห์ webhook delivery, retry, signature verification, event ordering
auto_execution_mode: 3
related_workflows:
  - /analyze-api
  - /analyze-reliability
  - /improve-webhooks
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ webhook implementation และ event delivery patterns เพื่อระบุ reliability issues

## Scope

Webhook delivery, retry strategy, signature verification, event ordering, idempotency, webhook registration, event payload, dead letter, webhook monitoring

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม webhook metrics ผ่าน scripts (webhook handler detection, signature scan, retry pattern analysis)

### 2. Check Webhook Registration

1. ระบุ missing webhook registration flow
2. ระบุ missing webhook URL validation
3. ระบุ missing webhook secret management
4. ระบุ missing webhook deregistration
5. ระบุ missing webhook registration verification

### 3. Check Signature Verification

1. ระบุ missing webhook signature verification
2. ระบุ missing timestamp validation (replay attack prevention)
3. ระบุ missing signature algorithm (HMAC-SHA256)
4. ระบุ missing constant-time comparison
5. ระบุ missing signature header documentation

### 4. Check Delivery And Retry

1. ระบุ missing webhook retry logic
2. ระบุ missing exponential backoff
3. ระบุ missing max retry limit
4. ระบุ missing timeout สำหรับ webhook delivery
5. ระบุ missing dead letter queue สำหรับ failed webhooks

### 5. Check Event Ordering

1. ระบุ missing event ordering guarantees
2. ระบุ missing event sequence numbers
3. ระบุ missing event deduplication
4. ระบุ missing event idempotency keys
5. ระบุ missing out-of-order event handling

### 6. Check Payload Design

1. ระบุ missing event type ใน payload
2. ระบุ missing event timestamp
3. ระบุ missing event ID
4. ระบุ oversized payloads
5. ระบุ missing payload versioning

### 7. Check Webhook Monitoring

1. ระบุ missing webhook delivery logging
2. ระบุ missing webhook failure alerting
3. ระบุ missing webhook latency metrics
4. ระบุ missing webhook success rate tracking
5. ระบุ missing webhook replay mechanism

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: signature verification → delivery retry → event ordering → registration → payload → monitoring

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: missing signature verification, no retry logic, no idempotency
- **High**: missing timeout, missing event ordering, no dead letter queue
- **Medium**: missing registration validation, missing payload versioning, missing monitoring
- **Low**: missing replay mechanism, missing latency metrics

### 3. Framework Awareness

- ตรวจสอบ Stripe webhook signature verification
- ตรวจสอบ Cloudflare Queues สำหรับ webhook processing
- ระบุ framework-specific webhook solutions

### 4. Use Scripts For Webhook Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ webhook handler detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Webhook reliability gaps ระบุพร้อม location และ severity
- Signature และ delivery issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-webhooks`
