---
title: Improve Backend Services
description: ปรับปรุง backend services ครบวงจร webhooks, queue, health-check, file-upload
auto_execution_mode: 3
related_workflows:
  - /improve-observability
  - /improve-queue
  - /improve-health-check
---

## Goal

ปรับปรุง backend services ทั้ง webhooks, background queue, health checks, และ file upload ให้ reliable และ scalable

## Scope

ใช้สำหรับ project ที่มี backend services เช่น webhook handling, job queues, health endpoints, และ file upload processing

## Execute

### 1. Webhook Handling

ปรับปรุง webhook reliability และ security

1. ตรวจสอบ webhook signature verification
2. Implement idempotency สำหรับ webhook handlers
3. เพิ่ม retry logic สำหรับ failed webhook deliveries
4. ตั้งค่า webhook timeout และ dead letter queue
5. Log webhook events สำหรับ audit trail
6. ทำ `/improve-error-handling` สำหรับ webhook error scenarios

### 2. Background Queue

ปรับปรุง background job processing

1. ทำ `/improve-queue` เพื่อปรับปรุง queue system ครบวงจร
2. ตรวจสอบ job retry และ dead letter handling
3. ตั้งค่า queue monitoring และ alerting
4. ทำ `/improve-observability` สำหรับ queue metrics

### 3. Health Check

ปรับปรุง health checks และ readiness probes

1. ทำ `/improve-health-check` เพื่อปรับปรุง health check system ครบวงจร
2. ตรวจสอบ dependency health (database, cache, external APIs)
3. ตั้งค่า graceful shutdown handling

### 4. File Upload

ปรับปรุง file upload handling และ validation

1. ตรวจสอบ file type validation และ size limits
2. Implement virus scanning ถ้าจำเป็น
3. ใช้ streaming upload สำหรับไฟล์ใหญ่
4. ตั้งค่า storage strategy (local, S3, R2)
5. ตรวจสอบ file cleanup และ retention policies
6. ทำ `/improve-security` สำหรับ upload security

## Rules

### 1. Reliability First

- Webhooks ต้องมี signature verification เสมอ
- Queue jobs ต้อง idempotent
- Health checks ต้องตรวจสอจริง ไม่ใช่ return 200 เสมอ
- File uploads ต้อง validate ทั้ง type และ size

### 2. Error Handling

- ทำ `/improve-error-handling` สำหรับ error scenarios ทั้งหมด
- Log errors พร้อม context สำหรับ debugging
- Implement retry พร้อม exponential backoff
- มี dead letter queue สำหรับ failed jobs

### 3. Monitoring

- ทำ `/improve-observability` สำหรับ logging และ tracing
- Monitor queue depth และ processing time
- Alert เมื่อ webhook failure rate สูง
- Track file upload success/failure rates

## Expected Outcome

- Webhook handling reliable พร้อม signature verification และ idempotency
- Background queue มี retry, dead letter, และ monitoring
- Health checks ครอบคลุมทุก dependencies
- File upload secure พร้อม validation และ streaming
- ทุก services มี error handling และ logging ครบถ้วน
