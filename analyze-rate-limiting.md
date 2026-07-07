---
title: Analyze Rate Limiting
description: วิเคราะห์ rate limiting, throttling, DDoS protection, quota management
auto_execution_mode: 3
related_workflows:
  - /analyze-security
  - /analyze-api
  - /improve-rate-limiting
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ rate limiting และ throttling patterns เพื่อระบุ protection gaps

## Scope

Rate limiting, throttling, DDoS protection, quota management, request deduplication, IP-based limiting, user-based limiting, API endpoint protection

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม rate limiting metrics ผ่าน scripts (middleware detection, endpoint protection scan)

### 2. Check Rate Limiting Coverage

1. ระบุ API endpoints ที่ไม่มี rate limiting
2. ระบุ auth endpoints ที่ไม่มี rate limiting (login, register, password reset)
3. ระบุ missing rate limiting สำหรับ expensive operations
4. ระบุ missing rate limiting สำหรับ file upload endpoints
5. ระบุ missing rate limiting สำหรับ search endpoints

### 3. Check Rate Limiting Strategy

1. ระบุ rate limiting algorithm (fixed window, sliding window, token bucket, leaky bucket)
2. ระบุ missing IP-based limiting
3. ระบุ missing user-based limiting
4. ระบุ missing per-endpoint configuration
5. ระบุ missing tiered rate limits (free vs paid)

### 4. Check DDoS Protection

1. ระบุ missing DDoS protection layer
2. ระบุ missing CDN-level rate limiting
3. ระบุ missing bot detection
4. ระบุ missing challenge mechanisms (CAPTCHA, proof-of-work)
5. ระบุ missing slow-loris protection

### 5. Check Quota Management

1. ระบุ missing API quota tracking
2. ระบุ missing quota enforcement
3. ระบุ missing quota reset mechanism
4. ระบุ missing quota usage reporting
5. ระบุ missing quota upgrade flow

### 6. Check Rate Limit Headers

1. ระบุ missing `X-RateLimit-Limit` header
2. ระบุ missing `X-RateLimit-Remaining` header
3. ระบุ missing `X-RateLimit-Reset` header
4. ระบุ missing `Retry-After` header
5. ระบุ missing rate limit response body

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: endpoint coverage → DDoS protection → strategy → quota → headers

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: no rate limiting on auth endpoints, no DDoS protection
- **High**: missing rate limiting on expensive endpoints, missing IP-based limiting
- **Medium**: missing quota management, missing rate limit headers, missing tiered limits
- **Low**: missing bot detection, missing challenge mechanisms

### 3. Framework Awareness

- ตรวจสอบ oRPC middleware rate limiting
- ตรวจสอบ Cloudflare rate limiting rules
- ระบุ framework-specific rate limiting solutions

### 4. Use Scripts For Rate Limiting Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ middleware pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Rate limiting gaps ระบุพร้อม location และ severity
- Endpoint protection coverage จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-rate-limiting`
