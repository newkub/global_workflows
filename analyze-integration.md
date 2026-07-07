---
title: Analyze Integration
description: วิเคราะห์ third-party integration quality, API client patterns, vendor lock-in
auto_execution_mode: 3
related_workflows:
  - /analyze-dependencies
  - /analyze-api
  - /improve-integrations
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ third-party integration quality เพื่อระบุ coupling และ vendor lock-in risks

## Scope

Third-party integration quality, API client patterns, vendor lock-in, integration error handling, integration testing, webhook integration, SDK usage

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม integration metrics ผ่าน scripts (integration detection, API client scan, coupling analysis)

### 2. Check Integration Architecture

1. ระบุ missing integration abstraction layer
2. ระบุ tight coupling กับ vendor SDKs
3. ระบุ missing adapter pattern สำหรับ third-party APIs
4. ระบุ missing interface segregation
5. ระบุ missing provider swap capability
6. ระบุ missing feature flag สำหรับ integrations

### 3. Check API Client Patterns

1. ระบุ missing API client abstraction
2. ระบุ missing retry mechanism สำหรับ API calls
3. ระบุ missing timeout configuration
4. ระบุ missing circuit breaker pattern
5. ระบุ missing request/response logging
6. ระบุ missing API client rate limiting

### 4. Check Error Handling

1. ระบุ missing integration error handling
2. ระบุ missing fallback strategy
3. ระบุ missing error categorization (network, API, auth)
4. ระบุ missing error notification
5. ระบุ missing graceful degradation
6. ระบุ missing error recovery mechanism

### 5. Check Vendor Lock-In

1. ระบุ vendor-specific code ใน business logic
2. ระบุ missing vendor abstraction
3. ระบุ missing data portability
4. ระบุ missing vendor migration path
5. ระบุ missing multi-vendor support
6. ระบุ vendor-specific data formats

### 6. Check Integration Testing

1. ระบุ missing integration tests
2. ระบุ missing mock/stub สำหรับ third-party APIs
3. ระบุ missing contract testing
4. ระบุ missing sandbox/testing environment
5. ระบุ missing integration test fixtures
6. ระบุ missing integration test CI

### 7. Check Configuration Management

1. ระบุ missing integration configuration abstraction
2. ระบุ missing environment-specific configuration
3. ระบุ missing secret management สำหรับ API keys
4. ระบุ missing configuration validation
5. ระบุ missing configuration rotation
6. ระบุ missing configuration documentation

### 8. Check Integration Monitoring

1. ระบุ missing integration health monitoring
2. ระบุ missing integration latency tracking
3. ระบุ missing integration error rate tracking
4. ระบุ missing integration quota monitoring
5. ระบุ missing integration cost tracking
6. ระบุ missing integration alerting

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: integration architecture → error handling → vendor lock-in → API client → testing → monitoring → configuration

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม integration name และ severity

### 2. Severity Classification

- **Critical**: vendor lock-in ใน core logic, no error handling, no abstraction
- **High**: missing retry, missing circuit breaker, missing integration tests
- **Medium**: missing monitoring, missing fallback, missing configuration validation
- **Low**: missing contract testing, missing cost tracking, missing documentation

### 3. Framework Awareness

- ตรวจสอบ Supabase integration patterns
- ตรวจสอบ Stripe integration patterns
- ตรวจสอบ Cloudflare service integration

### 4. Use Scripts For Integration Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ API client detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Integration gaps ระบุพร้อม integration name และ severity
- Architecture และ vendor lock-in issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-integrations`
