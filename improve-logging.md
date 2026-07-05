---
title: Improve Logging
description: ปรับปรุง logging strategy ทั้ง log levels, structured logging, retention
auto_execution_mode: 3
related_workflows:
  - improve-observability
  - improve-monitoring
  - improve-debugging
  - improve-security
---

## Goal

ปรับปรุง logging strategy ให้ครบวงจรทั้ง log levels, structured format, retention, และ PII protection

## Scope

ใช้สำหรับ project ที่ต้องการ logging strategy เฉพาะตัว แยกจาก observability ทั่วไป

## Execute

### 1. Log Levels And Categories

ตั้งค่า log levels ที่ชัดเจน

1. กำหนด log levels: ERROR, WARN, INFO, DEBUG, TRACE
2. กำหนด usage ของแต่ละ level อย่างชัดเจน
3. ตรวจสอบ log level ใน production vs development
4. ตั้งค่า runtime log level adjustment
5. แยก categories: application, access, audit, security, performance

### 2. Structured Logging

ใช้ structured logging format

1. ใช้ JSON format สำหรับ machine-readable logs
2. รวม correlation ID สำหรับ request tracing
3. รวม context: user ID, tenant ID, request path, duration
4. ใช้ consistent field names ทั่วทั้ง application
5. หลีกเลี่ยง free-text logs สำหรับ production

### 3. PII And Sensitive Data Protection

ปกป้อง sensitive data ใน logs

1. ระบุ PII fields ที่ต้อง mask หรือ redact
2. ตั้งค่า log scrubbing สำหรับ passwords, tokens, API keys
3. ไม่ log request bodies ที่มี sensitive data
4. ตรวจสอบ log output ไม่มี secrets หรือ credentials
5. ทำ `/improve-security` สำหรับ secrets audit

### 4. Log Retention And Rotation

ตั้งค่า log lifecycle

1. กำหนด retention period ตาม compliance requirements
2. ตั้งค่า log rotation สำหรับ file-based logs
3. ตั้งค่า log archival สำหรับ long-term storage
4. กำหนด storage budget สำหรับ logs
5. ตั้งค่า automated cleanup สำหรับ expired logs

### 5. Log Aggregation

ตั้งค่า centralized logging

1. ส่ง logs ไปยัง centralized log system
2. ตั้งค่า log shipping ที่ reliable และ non-blocking
3. ใช้ log buffering สำหรับ high-throughput
4. ตั้งค่า log search และ filtering
5. ทำ `/improve-observability` สำหรับ tracing integration

### 6. Performance Impact

ลด performance impact ของ logging

1. ใช้ async logging สำหรับ high-volume logs
2. ใช้ log sampling สำหรับ DEBUG และ TRACE levels
3. หลีกเลี่ยง string concatenation ใน log messages
4. ใช้ lazy evaluation สำหรับ expensive log context
5. ตรวจสอบ logging overhead ใน hot paths

## Rules

### 1. Log With Purpose

- ทุก log ต้องมีเหตุผลและ actionable
- ไม่ log ทุกอย่าง — log เฉพาะที่จำเป็น
- ERROR สำหรับ failures ที่ต้อง investigate
- WARN สำหรับ recoverable issues
- INFO สำหรับ business events สำคัญ

### 2. Never Log Secrets

- ไม่ log passwords, tokens, API keys, หรือ PII
- ใช้ redaction ก่อน log output
- ตรวจสอบ log pipeline ไม่ leak sensitive data
- Audit logs สำหรับ compliance แยกจาก application logs

### 3. Structured Over Free-Text

- ใช้ JSON structured logs ใน production
- รวม correlation ID ทุก log entry
- Consistent field names ทั่วทั้ง application
- Machine-readable format สำหรับ log aggregation

## Expected Outcome

- Log levels ชัดเจนและ consistent
- Structured logging ใน production
- ไม่มี PII หรือ secrets ใน logs
- Log retention ตรงตาม compliance
- Centralized logging พร้อม search
- Logging overhead ต่ำ
