---
title: Improve Webhooks
description: ปรับปรุง webhook delivery, retry, signature verification และ event ordering
auto_execution_mode: 3
related_workflows:
  - improve-integrations
  - improve-backend-services
  - improve-security
  - improve-reliability
  - improve-observability
---

## Goal

ปรับปรุง webhook system ทั้ง delivery reliability, retry strategy, signature verification, และ event ordering

## Scope

ใช้สำหรับ project ที่ส่งหรือรับ webhooks ต้องการปรับปรุง reliability และ security

## Execute

### 1. Analyze Current Webhook System

วิเคราะห์ webhook system ปัจจุบัน

1. ตรวจสอบ webhook endpoints (outgoing, incoming)
2. ตรวจสอบ webhook event types
3. ตรวจสอบ delivery mechanism
4. ตรวจสอบ retry และ error handling
5. ตรวจสอบ signature verification

### 2. Webhook Delivery

ปรับปรุง webhook delivery

1. ใช้ async queue สำหรับ webhook delivery
2. ตั้งค่า delivery timeout
3. ตั้งค่า concurrent delivery limits
4. ตั้งค่า delivery prioritization
5. ใช้ idempotency keys สำหรับ prevent duplicates
6. ทำ `/improve-backend-services` สำหรับ queue management

### 3. Retry Strategy

ปรับปรุง retry strategy

1. ใช้ exponential backoff สำหรับ retries
2. ตั้งค่า max retry attempts
3. ตั้งค่า retry delay ที่เหมาะสม
4. Retry เฉพาะ 5xx และ timeout errors
5. ไม่ retry สำหรับ 4xx errors
6. ใช้ jitter สำหรับ avoid thundering herd

### 4. Signature Verification

ปรับปรุง webhook security

1. ใช้ HMAC signature สำหรับทุก webhook
2. ใช้ timestamp สำหรับ prevent replay attacks
3. ตรวจสอบ signature ก่อน process payload
4. ใช้ constant-time comparison สำหรับ signature
5. ตั้งค่า signature key rotation
6. ทำ `/improve-security` สำหรับ security audit

### 5. Event Ordering And Delivery Guarantees

ปรับปรุง event delivery

1. ตั้งค่า at-least-once delivery guarantee
2. จัดการ out-of-order events
3. ใช้ event versioning สำหรับ backward compatibility
4. ตั้งค่า dead letter queue สำหรับ failed deliveries
5. อนุญาต webhook replay สำหรับ debugging
6. ตั้งค่า event deduplication

### 6. Webhook Management

ปรับปรุง webhook management

1. สร้าง webhook registration UI
2. อนุญาต per-event subscription
3. ตั้งค่า webhook endpoint validation
4. อนุญาต webhook pause และ resume
5. แสดง webhook delivery history
6. อนุญาต webhook URL update

### 7. Webhook Monitoring

ติดตาม webhook system

1. ติดตาม delivery success rate
2. ติดตาม delivery latency
3. ติดตาม retry count และ failure rate
4. ตั้งค่า alerts สำหรับ delivery failures
5. สร้าง webhook debug logs
6. ทำ `/improve-observability` สำหรับ monitoring integration

## Rules

### 1. Reliable Delivery

- At-least-once delivery guarantee
- Retry สำหรับ transient failures
- Dead letter queue สำหรับ permanent failures
- ไม่ lose webhooks ระหว่าง process

### 2. Secure By Default

- Signature verification ทุก webhook
- Timestamp validation สำหรับ prevent replay
- ไม่ process unsigned webhooks
- Rotate signature keys อย่างสม่ำเสมอ

### 3. Observable

- ทุก delivery มี log
- Delivery status trackable
- Failure alerts ตั้งค่าไว้
- Webhook replay สำหรับ debugging

## Expected Outcome

- Webhook delivery reliable พร้อม retry
- Signature verification ปลอดภัย
- Event ordering จัดการได้
- Webhook management ใช้งานง่าย
- Webhook monitoring ครบถ้วน
- Dead letter queue สำหรับ failed deliveries
