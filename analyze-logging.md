---
title: Analyze Logging
description: วิเคราะห์ structured logging, log levels, PII detection, log retention
auto_execution_mode: 3
related_workflows:
  - /analyze-monitoring
  - /analyze-observability
  - /improve-logging
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ logging strategy และ log quality เพื่อระบุ gaps ใน debugging และ audit trail

## Scope

Structured logging, log levels, PII detection, log retention, log aggregation, correlation IDs, error logging, access logging, audit logging

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม logging metrics ผ่าน scripts (log pattern detection, PII scan, log level analysis)

### 2. Check Log Structure

1. ระบุ missing structured logging (JSON format vs plaintext)
2. ระบุ missing correlation IDs สำหรับ request tracing
3. ระบุ missing context fields (timestamp, request ID, user ID, service name)
4. ระบุ inconsistent log formats ระหว่าง modules
5. ระบุ missing log schemas หรือ type definitions

### 3. Check Log Levels

1. ระบุ incorrect log level usage (error vs warn vs info vs debug)
2. ระบุ missing log level configuration
3. ระบุ verbose logging ใน production (debug logs enabled)
4. ระบุ missing log level filtering
5. ระบุ silent errors (caught but not logged)

### 4. Check PII And Sensitive Data

1. ระบุ PII ใน log messages (email, phone, address, ID numbers)
2. ระบุ secrets ใน logs (API keys, tokens, passwords)
3. ระบุ missing log redaction mechanism
4. ระบุ missing data classification สำหรับ log fields
5. ระบุ missing GDPR-compliant logging

### 5. Check Log Retention

1. ระบุ missing log retention policy
2. ระบุ log retention ที่ไม่เหมาะสม (too short, too long)
3. ระบุ missing log rotation
4. ระบุ missing log archival strategy
5. ระบุ missing log cleanup automation

### 6. Check Error Logging

1. ระบุ missing error context (stack trace, input data, user context)
2. ระบุ missing error categorization
3. ระบุ duplicate error logging (same error logged multiple times)
4. ระบุ missing error aggregation
5. ระบุ missing error notification integration

### 7. Check Audit Logging

1. ระบุ missing audit trail สำหรับ sensitive operations
2. ระบุ missing audit log สำหรับ auth events (login, logout, password change)
3. ระบุ missing audit log สำหรับ data access
4. ระบุ missing audit log สำหรับ configuration changes
5. ระบุ missing immutable audit log storage

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: PII exposure → log structure → error logging → audit logging → log levels → retention

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: PII ใน logs, secrets ใน logs, missing audit trail
- **High**: missing structured logging, missing error context, silent errors
- **Medium**: incorrect log levels, missing correlation IDs, missing retention
- **Low**: inconsistent formats, missing log rotation, verbose production logs

### 3. Framework Awareness

- ตรวจสอบ server-side logging patterns
- ตรวจสอบ client-side error logging
- ระบุ framework-specific logging solutions

### 4. Use Scripts For Log Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ log pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Logging gaps ระบุพร้อม location และ severity
- PII exposure และ audit trail issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-logging`
