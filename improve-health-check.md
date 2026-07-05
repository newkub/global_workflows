---
title: Improve Health Check
description: ปรับปรุง health endpoints, readiness/liveness probes และ dependency checks
auto_execution_mode: 3
related_workflows:
  - improve-operations
  - improve-monitoring
  - improve-observability
  - improve-deployment-strategy
---

## Goal

ปรับปรุง health check system ให้ครอบคลุมทั้ง liveness, readiness, dependency health, และ graceful degradation

## Scope

ใช้สำหรับ project ที่ต้องการ health check endpoints สำหรับ orchestration และ monitoring

## Execute

### 1. Analyze Current Health Checks

วิเคราะห์ health check ปัจจุบัน

1. ตรวจสอบ existing health check endpoints
2. ตรวจสอบ liveness probe configuration
3. ตรวจสอบ readiness probe configuration
4. ตรวจสอบ dependency health checks
5. ตรวจสอบ health check response format

### 2. Liveness Probes

ตั้งค่า liveness probes

1. สร้าง `/health/live` endpoint สำหรับ liveness
2. ตรวจสอบ process ที่ running
3. ตรวจสอบ event loop ไม่ blocked
4. ไม่ตรวจสอบ dependencies ใน liveness
5. ตอบ quickly (< 50ms)
6. คืน HTTP 200 เมื่อ alive, 503 เมื่อ not alive

### 3. Readiness Probes

ตั้งค่า readiness probes

1. สร้าง `/health/ready` endpoint สำหรับ readiness
2. ตรวจสอบ database connectivity
3. ตรวจสอบ external service connectivity
4. ตรวจสอบ cache connectivity
5. ตรวจสอบ queue connectivity
6. คืน HTTP 200 เมื่อ ready, 503 เมื่อ not ready

### 4. Dependency Health

ตั้งค่า dependency health checks

1. สร้าง `/health/dependencies` endpoint สำหรับ detailed status
2. ตรวจสอบแต่ละ dependency แยกกัน
3. รวม dependency name, status, latency, และ last checked
4. ใช้ timeout สำหรับแต่ละ dependency check
5. ใช้ circuit breaker สำหรับ dependency checks
6. อนุญาต partial degradation reporting

### 5. Health Check Response Format

มาตรฐาน response format

1. ใช้ consistent JSON response format
2. รวม status, timestamp, version, uptime
3. รวม dependency details ใน detailed endpoint
4. ใช้ HTTP status codes ที่ถูกต้อง
5. ไม่ expose sensitive information ใน health response

### 6. Health Check Integration

เชื่อมต่อกับ orchestration

1. ตั้งค่า Kubernetes liveness/readiness probes
2. ตั้งค่า load balancer health checks
3. ตั้งค่า CDN origin health checks
4. ตั้งค่า monitoring alerts จาก health checks
5. ทำ `/improve-deployment-strategy` สำหรับ zero-downtime integration

### 7. Health Check Performance

ลด health check overhead

1. ใช้ cached health status สำหรับ frequent checks
2. ใช้ async dependency checks แบบ parallel
3. ตั้งค่า check interval ที่เหมาะสม
4. ไม่ block main thread ระหว่าง health check
5. ใช้ connection pooling สำหรับ dependency checks

## Rules

### 1. Liveness vs Readiness

- Liveness: process ยัง running หรือไม่ (ไม่ตรวจสอบ dependencies)
- Readiness: พร้อมรับ traffic หรือไม่ (ตรวจสอบ dependencies)
- ไม่ mix liveness และ readiness logic
- Liveness ตอบ quickly, readiness อาจช้ากว่า

### 2. Don't Fail Cascade

- Dependency failure ไม่ crash application
- ใช้ graceful degradation สำหรับ non-critical dependencies
- รายงาน partial health status
- ไม่ propagate failure ไปยัง critical path

### 3. Fast And Non-Blocking

- Health check ตอบ < 100ms
- ไม่ block main thread
- ใช้ cached results สำหรับ frequent checks
- Timeout สำหรับ dependency checks

## Expected Outcome

- Liveness และ readiness probes แยกชัดเจน
- Dependency health checks ครบถ้วน
- Health check response format มาตรฐาน
- Health check integration กับ orchestration
- Health check overhead ต่ำ
- Graceful degradation สำหรับ partial failures
