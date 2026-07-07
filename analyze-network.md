---
title: Analyze Network
description: วิเคราะห์ API client resilience, retry, timeout, offline handling, request optimization
auto_execution_mode: 3
related_workflows:
  - /improve-network
  - /improve-api-design
  - /analyze-performance
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ network communication patterns และ API client resilience เพื่อระบุ reliability issues

## Scope

API client design, retry strategy, timeout handling, offline support, request deduplication, circuit breakers, rate limiting awareness, error propagation, connection management, request optimization

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม network metrics ผ่าน scripts (fetch/axios usage analysis, timeout detection, retry pattern scan)

### 2. Analyze API Client Design

1. ระบุ missing API client abstraction (raw fetch/axios ใน components)
2. ระบุ inconsistent API client patterns ข้าม modules
3. ระบุ missing base URL configuration
4. ระบุ missing auth header injection
5. ระบุ missing request/response interceptors
6. ระบุ missing typed responses

### 3. Check Retry Strategy

1. ระบุ missing retry logic สำหรับ transient failures
2. ระบุ retry ที่ไม่มี exponential backoff
3. ระบุ missing jitter ใน retry delay
4. ระบุ missing max retry limit
5. ระบุ retry ที่ไม่ distinguish retryable vs non-retryable errors
6. ระบุ missing retry-on conditions (429, 503, network error)

### 4. Check Timeout Handling

1. ระบุ missing request timeouts
2. ระบุ timeout values ที่ไม่เหมาะสม (too short, too long)
3. ระบุ missing timeout error handling
4. ระบุ missing timeout cancellation (AbortController)
5. ระบุ missing streaming timeout

### 5. Check Offline Support

1. ระบุ missing offline detection
2. ระบุ missing request queuing สำหรับ offline
3. ระบุ missing optimistic updates สำหรับ offline mutations
4. ระบุ missing sync-on-reconnect mechanism
5. ระบุ missing offline error messaging
6. ระบุ missing cache-while-offline strategy

### 6. Check Request Deduplication

1. ระบุ duplicate concurrent requests ที่ไม่ deduplicate
2. ระบุ missing request caching สำหรับ idempotent requests
3. ระบุ missing TanStack Query usage ที่ควรมี
4. ระบุ missing stale-while-revalidate patterns
5. ระบุ missing request cancellation สำหรับ stale requests

### 7. Check Circuit Breakers

1. ระบุ missing circuit breaker pattern สำหรับ external services
2. ระบุ missing fallback responses
3. ระบุ missing health check ก่อน retry
4. ระบุ missing half-open state management
5. ระบุ cascading failure potential

### 8. Check Error Propagation

1. ระบุ network errors ที่ไม่ propagate อย่างเหมาะสม
2. ระบุ missing error normalization (different error shapes จาก different APIs)
3. ระบุ missing user-friendly error messages สำหรับ network failures
4. ระบุ missing error context (URL, status, response body)
5. ระบุ error swallowing ใน network layers

### 9. Check Connection Management

1. ระบุ missing connection pooling
2. ระบุ missing keep-alive usage
3. ระบุ missing HTTP/2 multiplexing awareness
4. ระบุ missing WebSocket connection management
5. ระบุ missing connection cleanup บน unmount

### 10. Check Request Optimization

1. ระบุ waterfall request patterns ที่ควรเป็น parallel
2. ระบุ missing request batching
3. ระบุ missing prefetch สำหรับ predictable navigation
4. ระบุ oversized payloads ที่ควรเป็น partial
5. ระบุ missing compression headers (Accept-Encoding)
6. ระบุ missing request prioritization

### 11. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: timeout → retry → circuit breaker → error propagation → offline → deduplication → client design → connection → optimization

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: missing timeouts, no error handling, cascading failure potential
- **High**: missing retry, missing circuit breaker, no offline support
- **Medium**: missing deduplication, missing request optimization, inconsistent client
- **Low**: missing prefetch, missing compression, minor connection issues

### 3. Framework Awareness

- ตรวจสอบ TanStack Query usage สำหรับ data fetching
- ตรวจสอบ oRPC client patterns
- ระบุ framework-specific network patterns

### 4. Use Scripts For Network Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ fetch/axios pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Network resilience issues ระบุพร้อม location และ severity
- Retry, timeout, และ offline gaps ระบุชัดเจน
- พร้อมสำหรับ `/improve-network`
