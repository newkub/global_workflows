---
title: Analyze Observability
description: วิเคราะห์ distributed tracing, spans, metrics, logs correlation
auto_execution_mode: 3
related_workflows:
  - /analyze-monitoring
  - /analyze-logging
  - /improve-observability
  - /improve-monitoring
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ observability patterns เพื่อระบุ tracing และ debugging capability gaps

## Scope

Distributed tracing, spans, metrics, logs correlation, OpenTelemetry, trace context propagation, span attributes, sampling strategy

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม observability metrics ผ่าน scripts (trace detection, span analysis, metrics scan)

### 2. Check Distributed Tracing

1. ระบุ missing distributed tracing setup
2. ระบุ missing trace context propagation (W3C Trace Context)
3. ระบุ missing span creation สำหรับ key operations
4. ระบุ missing span attributes (user, tenant, request)
5. ระบุ missing trace sampling strategy

### 3. Check Metrics Collection

1. ระบุ missing application metrics (request rate, error rate, latency)
2. ระบุ missing business metrics (bookings, revenue, active users)
3. ระบุ missing infrastructure metrics (CPU, memory, disk)
4. ระบุ missing custom metrics
5. ระบุ missing metric labels และ dimensions
6. ระบุ missing metric aggregation

### 4. Check Logs Correlation

1. ระบุ missing trace ID ใน log entries
2. ระบุ missing span ID ใน log entries
3. ระบุ missing log-to-trace linking
4. ระบุ missing structured logging สำหรับ correlation
5. ระบุ missing request ID propagation

### 5. Check OpenTelemetry Integration

1. ระบุ missing OpenTelemetry SDK setup
2. ระบุ missing auto-instrumentation
3. ระบุ missing custom instrumentation
4. ระบุ missing OTLP exporter configuration
5. ระบุ missing resource attributes (service.name, service.version)

### 6. Check Sampling Strategy

1. ระบุ missing trace sampling configuration
2. ระบุ missing head-based sampling
3. ระบุ missing tail-based sampling
4. ระบุ missing error-based sampling
5. ระบุ missing sampling rate optimization

### 7. Check Alerting And Dashboards

1. ระบุ missing observability dashboards
2. ระบุ missing SLO/SLI definitions
3. ระบุ missing error budget tracking
4. ระบุ missing alerting on trace anomalies
5. ระบุ missing latency percentile alerts

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: tracing → metrics → logs correlation → OpenTelemetry → sampling → dashboards

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: no tracing, no metrics, no log correlation
- **High**: missing trace propagation, missing SLO/SLI, missing OpenTelemetry
- **Medium**: missing custom metrics, missing dashboards, missing sampling
- **Low**: missing span attributes, missing resource attributes, missing error budgets

### 3. Framework Awareness

- ตรวจสอบ server-side observability patterns
- ตรวจสอบ Cloudflare Workers observability
- ระบุ OpenTelemetry-compatible tools

### 4. Use Scripts For Observability Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ trace/metric pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Observability gaps ระบุพร้อม location และ severity
- Tracing และ metrics issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-observability` หรือ `/improve-monitoring`
