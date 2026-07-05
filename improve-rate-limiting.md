---
title: Improve Rate Limiting
description: ปรับปรุง rate limiting, throttling, quota management และ DDoS protection
auto_execution_mode: 3
related_workflows:
  - improve-security
  - improve-api-design
  - improve-network
  - improve-observability
---

## Goal

ปรับปรุง rate limiting strategy ให้ครอบคลุมทั้ง API, authentication, และ expensive operations

## Scope

ใช้สำหรับ project ที่มี API endpoints และต้องการ rate limiting, throttling, หรือ quota management

## Execute

### 1. Analyze Current Rate Limiting

วิเคราะห์ rate limiting ปัจจุบัน

1. ตรวจสอบ existing rate limiting configuration
2. ระบุ endpoints ที่จำเป็นต้อง rate limit
3. ตรวจสอบ current limits และ thresholds
4. ตรวจสอบ rate limit response format และ headers
5. ทำ `/improve-api-design` สำหรับ API surface review

### 2. Rate Limit Strategies

เลือก rate limit strategies ที่เหมาะสม

1. ใช้ fixed window สำหรับ simple, predictable limits
2. ใช้ sliding window สำหรับ accurate, smooth limits
3. ใช้ token bucket สำหรับ burst-tolerant limits
4. ใช้ leaky bucket สำหรับ steady-rate enforcement
5. ใช้ concurrent limit สำหรับ resource-intensive operations

### 3. Rate Limit Scope

กำหนด scope ของ rate limiting

1. ใช้ IP-based rate limiting สำหรับ public endpoints
2. ใช้ user-based rate limiting สำหรับ authenticated endpoints
3. ใช้ tenant-based rate limiting สำหรับ multi-tenant APIs
4. ใช้ endpoint-based rate limiting สำหรับ expensive operations
5. ใช้ global rate limiting สำหรับ system protection

### 4. Rate Limit Headers And Responses

ตั้งค่า rate limit communication

1. ส่ง `X-RateLimit-Limit` header
2. ส่ง `X-RateLimit-Remaining` header
3. ส่ง `X-RateLimit-Reset` header
4. ส่ง `Retry-After` header เมื่อ rate limited
5. ส่ง HTTP 429 status code พร้อม error body
6. ใช้ `X-RateLimit-Scope` สำหรับระบุ limit scope

### 5. Quota Management

ตั้งค่า quota management

1. กำหนด quota ตาม subscription plan หรือ tier
2. ติดตาม quota usage แบบ real-time
3. แจ้งเตือนเมื่อใกล้ถึง quota limit
4. ตั้งค่า quota reset cycle (daily, monthly)
5. อนุญาต quota overflow ชั่วคราวสำหรับ premium users

### 6. DDoS Protection

ป้องกัน DDoS attacks

1. ตั้งค่า connection rate limiting
2. ตั้งค่า request size limits
3. ใช้ CAPTCHA สำหรับ suspicious traffic
4. ตั้งค่า auto-blocking สำหรับ abusive IPs
5. ใช้ CDN หรือ WAF สำหรับ traffic filtering
6. ทำ `/improve-security` สำหรับ security audit

### 7. Rate Limit Monitoring

ติดตาม rate limiting effectiveness

1. ติดตาม rate limit trigger rate ต่อ endpoint
2. ติดตาม top rate-limited IPs และ users
3. ตั้งค่า alerts สำหรับ abnormal rate limit patterns
4. ตรวจสอบ false positives และ legitimate users affected
5. ทำ `/improve-observability` สำหรับ metrics integration

## Rules

### 1. Right Limit For Right Endpoint

- Authentication endpoints: strict limits (brute force protection)
- Public API endpoints: moderate limits
- Expensive operations: tight limits
- Read endpoints: looser limits than write endpoints
- WebSocket: connection-level และ message-level limits

### 2. Graceful Degradation

- ส่ง clear error message พร้อม retry guidance
- ไม่ block legitimate users โดยไม่จำเป็น
- ใช้ progressive limits (warn → throttle → block)
- อนุญาต burst สำหรับ short periods

### 3. Distributed Rate Limiting

- ใช้ shared store (Redis) สำหรับ multi-instance rate limiting
- ไม่ใช้ in-memory rate limiting ใน production multi-instance
- ตั้งค่า clock synchronization สำหรับ time-based limits
- จัดการ race conditions ใน rate limit checks

## Expected Outcome

- Rate limiting ครอบคลุมทุก endpoints ที่จำเป็น
- Rate limit strategies เหมาะสมกับ endpoint type
- Rate limit headers และ responses ชัดเจน
- Quota management ทำงานตาม plan
- DDoS protection ครบถ้วน
- Rate limiting monitoring ครบถ้วน
