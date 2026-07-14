---
title: Review Resilience
description: Review resilience patterns ครอบคลุม circuit breakers, fallbacks, graceful degradation และ retry strategies
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review system resilience quality ครอบคลุม circuit breakers, fallback mechanisms, graceful degradation, retry strategies และ bulkhead patterns

## Scope

circuit breaker patterns, fallback mechanisms, graceful degradation, retry strategies, bulkhead isolation, timeout management และ chaos engineering readiness

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ resilience setup
2. ระบุ external service dependencies, failure modes และ existing resilience patterns

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-resilience.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ circuit breaker: threshold config, open/half-open/closed states, fallback on open
3. Script ตรวจสอบ fallback mechanisms: default responses, cached data fallback, static fallback
4. Script ตรวจสอบ graceful degradation: partial feature disable, read-only mode, queue-based degradation
5. Script ตรวจสอบ retry strategies: max retries, backoff strategy, jitter, retry budget
6. Script ตรวจสอบ bulkhead patterns: resource isolation, connection pool limits, concurrent request limits
7. Script ตรวจสอบ timeout management: request timeouts, circuit breaker timeouts, overall deadline
8. Script คำนวณ resilience health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no circuit breaker บน critical service, no timeout, cascading failure risk
- **High**: missing fallback, no retry strategy, no bulkhead isolation
- **Medium**: inconsistent timeout config, missing graceful degradation, minor retry gap
- **Low**: resilience naming convention, minor pattern improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
