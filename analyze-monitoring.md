---
title: Analyze Monitoring
description: วิเคราะห์ observability, tracing, metrics, alerting, log aggregation, error tracking
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /improve-monitoring
  - /improve-observability
  - /improve-logging
  - /use-scripts
  - /report-format-table
---

## Goal

วิเคราะห์ observability และ monitoring setup เพื่อระบุ gaps ใน visibility, alerting และ incident response

## Scope

Logging, tracing, metrics, alerting, error tracking, health checks, dashboards, incident response, log aggregation

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม monitoring metrics ผ่าน scripts (log analysis, alert coverage, health check validation)

### 2. Analyze Logging Strategy

1. ระบุ missing structured logging (plain string แทน JSON)
2. ระบุ log levels ที่ไม่เหมาะสม (info สำหรับ errors, error สำหรับ debug)
3. ระบุ PII/sensitive data ใน logs
4. ระบุ missing correlation IDs สำหรับ request tracing
5. ระบุ missing context ใน error logs (stack trace, user ID, request ID)
6. ระบุ `console.log`/`console.error` ที่ควรเป็น proper logger
7. ระบุ log retention ที่ไม่เหมาะสม

### 3. Analyze Tracing And Metrics

1. ระบุ missing distributed tracing
2. ระบุ missing request/response tracing
3. ระบุ missing performance metrics (response time, throughput, error rate)
4. ระบุ missing custom business metrics
5. ระบุ missing database query metrics
6. ระบุ missing cache hit/miss metrics

### 4. Analyze Alerting

1. ระบุ missing critical alerts (error rate spike, downtime, disk space)
2. ระบุ alert thresholds ที่ไม่เหมาะสม (too sensitive หรือ too loose)
3. ระบุ missing alert routing (wrong channel, wrong team)
4. ระบุ alert fatigue (too many non-actionable alerts)
5. ระบุ missing alert runbooks

### 5. Analyze Error Tracking

1. ระบุ missing error tracking service (Sentry, Bugsnag, etc.)
2. ระบุ missing source map upload สำหรับ error tracking
3. ระบุ missing error grouping strategy
4. ระบุ missing error assignment และ triage process
5. ระบุ missing error replay หรือ context

### 6. Analyze Health Checks

1. ระบุ missing liveness probe
2. ระบุ missing readiness probe
3. ระบุ missing dependency health checks (database, cache, external APIs)
4. ระบุ health check ที่ block main thread
5. ระบุ missing graceful degradation สำหรับ non-critical dependencies

### 7. Analyze Dashboards And Incident Response

1. ระบุ missing operational dashboards
2. ระบุ missing business metrics dashboards
3. ระบุ missing incident response process
4. ระบุ missing post-mortem templates
5. ระบุ missing on-call documentation

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: error tracking → alerting → health checks → logging → tracing → dashboards

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: missing error tracking, missing critical alerts, missing health checks
- **High**: missing structured logging, missing tracing, missing correlation IDs
- **Medium**: missing dashboards, alert fatigue, missing runbooks
- **Low**: missing business metrics, missing post-mortem templates

### 3. Use Scripts For Monitoring Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอสำหรับ monitoring analysis
- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ไฟล์มากกว่า 10 ไฟล์

### 4. Production Readiness

- ตรวจสอบว่า monitoring เพียงพอสำหรับ production
- ระบุ blind spots ที่ทำให้ debug ยาก
- ตรวจสอบ incident response readiness

## Expected Outcome

- Monitoring gaps ระบุพร้อม location และ severity
- Observability และ incident response recommendations
- พร้อมสำหรับ `/improve-monitoring` หรือ `/improve-observability`
