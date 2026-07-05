---
title: Improve Idempotency
description: ปรับปรุง idempotency keys, duplicate prevention, safe retries และ request deduplication
auto_execution_mode: 3
related_workflows:
  - improve-backend
  - improve-api-design
  - improve-reliability
  - improve-payment
  - improve-queue
---

## Goal

ปรับปรุง idempotency system ให้ครอบคลุมทั้ง idempotency key management, duplicate prevention, และ safe retries

## Scope

ใช้สำหรับ project ที่มี API endpoints ต้องการ duplicate prevention โดยเฉพาะ payment และ mutation operations

## Execute

### 1. Analyze Current Idempotency

วิเคราะห์ idempotency setup ปัจจุบัน

1. ตรวจสอบ existing idempotency key handling
2. ตรวจสอบ duplicate prevention strategy
3. ตรวจสอบ retry safety สำหรับ mutation endpoints
4. ตรวจสอบ idempotency key storage และ expiry
5. ทำ `/improve-api-design` สำหรับ API surface review

### 2. Idempotency Key Management

ตั้งค่า idempotency key system

1. รับ idempotency key จาก request header (Idempotency-Key)
2. สร้าง idempotency key อัตโนมัติสำหรับ client-side retries
3. ใช้ UUID หรือ UUIDv7 สำหรับ key generation
4. ตั้งค่า key expiry (24 hours สำหรับ most operations)
5. ตั้งค่า key scope (per-user, per-tenant, global)

### 3. Duplicate Prevention

ป้องกัน duplicate processing

1. ตรวจสอบ idempotency key ก่อน process request
2. ถ้า key มีอยู่ คืน cached response
3. ถ้า key ไม่มี process request และ cache response
4. ใช้ atomic insert สำหรับ key registration
5. จัดการ race conditions สำหรับ concurrent requests
6. ใช้ database unique constraint สำหรับ key storage

### 4. Safe Retries

ปรับปรุง retry safety

1. ทำให้ mutation endpoints idempotent
2. ใช้ idempotency key สำหรับ POST, PUT, PATCH, DELETE
3. ไม่ใช้ idempotency key สำหรับ GET (inherently idempotent)
4. คืน same response สำหรับ same key
5. รักษา response status code และ body
6. ทำ `/improve-reliability` สำหรับ retry patterns

### 5. Payment Idempotency

ปรับปรุง payment idempotency

1. ใช้ idempotency key สำหรับทุก payment operation
2. ตั้งค่า longer expiry สำหรับ payment keys (30 days)
3. ตรวจสอบ with payment provider ก่อน process
4. จัดการ partial failures ใน payment flow
5. ทำ `/improve-payment` สำหรับ payment security

### 6. Idempotency Storage

ตั้งค่า idempotency key storage

1. ใช้ database table สำหรับ key storage
2. เก็บ key, request hash, response, status, created_at, expires_at
3. ใช้ TTL index สำหรับ automatic cleanup
4. ใช้ partitioning สำหรับ large-scale systems
5. ตั้งค่า storage cleanup job

### 7. Idempotency Monitoring

ติดตาม idempotency system

1. ติดตาม duplicate request rate
2. ติดตาม cache hit rate สำหรับ idempotency keys
3. ติดตาม idempotency key storage usage
4. ตั้งค่า alerts สำหรับ idempotency failures
5. ติดตาม race condition occurrences

## Rules

### 1. Idempotent By Default

- ทุก mutation endpoint ต้องรองรับ idempotency key
- ไม่ process duplicate requests
- คืน same response สำหรับ same key
- ไม่มี side effects สำหรับ duplicate requests

### 2. Key Lifecycle

- Key มี expiry ที่ชัดเจน
- Key scope จำกัดตาม user หรือ tenant
- Key storage มี cleanup mechanism
- ไม่ reuse key สำหรับ different requests

### 3. Race Condition Safe

- ใช้ atomic operations สำหรับ key registration
- จัดการ concurrent requests สำหรับ same key
- ใช้ database locks หรือ unique constraints
- ไม่มี partial processing สำหรับ duplicate requests

## Expected Outcome

- Idempotency key system ครบถ้วน
- Duplicate prevention ทำงานเสมอ
- Safe retries สำหรับ mutation endpoints
- Payment idempotency ปลอดภัย
- Idempotency storage มีประสิทธิภาพ
- Idempotency monitoring ครบถ้วน
