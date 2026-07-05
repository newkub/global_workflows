---
title: Improve Network
description: ปรับปรุง API client resilience, retry, timeout, offline handling
auto_execution_mode: 3
related_workflows:
  - improve-error-handling
  - improve-backend-services
  - improve-observability
  - improve-performance-tuning
  - improve-realtime-services
---

## Goal

ปรับปรุง network layer ทั้ง API client resilience, retry strategy, timeout management, และ offline handling

## Scope

ใช้สำหรับ project ที่มี network communication (API calls, WebSocket, fetch, external services)

## Execute

### 1. API Client Resilience

ปรับปรุง API client reliability

1. ตรวจสอบ retry strategy สำหรับ failed requests
2. ตั้งค่า exponential backoff และ jitter
3. ตรวจสอบ circuit breaker pattern สำหรับ failing services
4. ตั้งค่า request deduplication สำหรับ identical requests
5. ตรวจสอบ idempotency keys สำหรับ mutations

### 2. Timeout Management

ปรับปรุง timeout strategy

1. ตรวจสอบ connection timeout และ read timeout
2. ตั้งค่า per-request timeout ตาม endpoint sensitivity
3. ตรวจสอบ overall request budget
4. ตั้งค่า retry timeout ที่เหมาะสม
5. ตรวจสอบ timeout propagation ข้าม services

### 3. Error Handling

ปรับปรุง network error handling

1. ทำ `/improve-error-handling` สำหรับ network errors
2. ตรวจสอบ HTTP status code handling
3. ตรวจสอบ network error categorization (timeout, DNS, connection refused)
4. ตั้งค่า fallback responses สำหรับ critical data
5. ตรวจสอบ error retryability classification

### 4. Offline Handling

ปรับปรุง offline experience

1. ตรวจสอบ offline detection และ status display
2. ตั้งค่า request queue สำหรับ offline period
3. ตรวจสอบ sync strategy เมื่อ online อีกครั้ง
4. ตั้งค่า optimistic updates สำหรับ better UX
5. ตรวจสอบ conflict resolution สำหรับ offline edits

### 5. Request Optimization

ปรับปรุง request efficiency

1. ทำ `/improve-performance-tuning` สำหรับ request caching
2. ตรวจสอบ request batching สำหรับ multiple calls
3. ตั้งค่า request deduplication
4. ตรวจสอบ response caching strategy
5. ตรวจสอบ compression (gzip, brotli) สำหรับ requests

### 6. Network Observability

ปรับปรุง network monitoring

1. ทำ `/improve-observability` สำหรับ network tracing
2. ตรวจสอบ request/response logging พร้อม correlation IDs
3. ตั้งค่า latency tracking สำหรับ external calls
4. ตรวจสอบ error rate monitoring ตาม endpoint
5. ตรวจสอบ retry และ circuit breaker metrics

## Rules

### 1. Resilience First

- Retry สำหรับ transient failures (5xx, network errors)
- ไม่ retry สำหรับ 4xx (ยกเว้น 429)
- Exponential backoff พร้อม jitter
- Circuit breaker สำหรับ consistently failing services

### 2. Timeout Required

- ทุก network request มี timeout
- Timeout ตาม endpoint sensitivity
- Overall request budget กำหนดไว้
- Timeout propagation ข้าม service boundaries

### 3. Offline Ready

- Offline detection แสดงให้ user เห็น
- Critical requests queued ระหว่าง offline
- Sync automatic เมื่อ online อีกครั้ง
- Conflict resolution สำหรับ offline edits

### 4. Observable

- ทุก request มี correlation ID
- Latency tracking สำหรับ external calls
- Error rate monitored ตาม endpoint
- Retry และ circuit breaker metrics tracked

## Expected Outcome

- API client resilient พร้อม retry และ circuit breaker
- Timeout management ครบถ้วน ตาม endpoint sensitivity
- Network error handling ชัดเจน พร้อม categorization
- Offline handling ครบถ้วน พร้อม sync และ conflict resolution
- Request optimization ลด unnecessary calls
- Network observability ครอบคลุม latency และ error rates
