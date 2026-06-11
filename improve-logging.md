---
title: Improve Logging
description: ปรับปรุง logging structure, levels, และ sensitive data handling
auto_execution_mode: 3
related_workflows:
  - /improve-error-tracking
  - /improve-security
  - /check-logging
---

## Goal

ปรับปรุม logging structure ให้มีประสิทธิภาพ และปลอดภัย

## Scope

ใช้สำหรับปรับปรุม logging ทั้ง client-side และ server-side

## Execute

### 1. Analyze Current Logging

วิเคราะห์ logging ปัจจุบัน

1. ทำ `/check-logging` เพื่อตรวจสอบ logging
2. ระบุ logging libraries ที่ใช้
3. วิเคราะห์ log levels ที่ใช้
4. ตรวจสอบ log formats
5. ตรวจสอบ log destinations
6. ตรวจสอบ sensitive data ใน logs

### 2. Define Logging Standards

กำหนดมาตรฐาน logging

1. กำหนด log levels (debug, info, warn, error, fatal)
2. กำหนด log format (JSON, structured)
3. กำหนด log fields (timestamp, level, message, context)
4. กำหนด logging conventions ต่อ module
5. กำหนด sensitive data handling
6. กำหนด log retention policy

### 3. Setup Structured Logging

ตั้งค่า structured logging

1. เลือก logging library (pino, winston, bunyan)
2. ตั้งค่า log format เป็น JSON
3. ตั้งค่า log fields มาตรฐาน
4. ตั้งค่า log correlation IDs
5. ตั้งค่า log context enrichment
6. ตั้งค่า log pretty print สำหรับ development

### 4. Implement Log Levels

ใช้ log levels อย่างถูกต้อง

1. ใช้ debug สำหรับ development details
2. ใช้ info สำหรับ normal operations
3. ใช้ warn สำหรับ potential issues
4. ใช้ error สำหรับ errors
5. ใช้ fatal สำหรับ critical failures
6. ตั้งค่า log level ต่อ environment

### 5. Add Context to Logs

เพิ่ม context ใน logs

1. Add request context (request ID, user ID)
2. Add operation context (function, module)
3. Add business context (order ID, transaction ID)
4. Add performance context (duration, memory)
5. Add error context (stack trace, error code)
6. Add custom context สำหรับ debugging

### 6. Protect Sensitive Data

ปกป้อง sensitive data ใน logs

1. Sanitize request bodies
2. Sanitize headers (Authorization, Cookie)
3. Sanitize query parameters
4. Sanitize user data (passwords, tokens)
5. Sanitize PII (email, phone, SSN)
6. ใช้ data masking สำหรับ sensitive fields

### 7. Setup Log Destinations

ตั้งค่า log destinations

1. ตั้งค่า console logging สำหรับ development
2. ตั้งค่า file logging สำหรับ production
3. ตั้งค่า log aggregation (ELK, Splunk, Datadog)
4. ตั้งค่า log rotation
5. ตั้งค่า log retention
6. ตั้งค่า log shipping

### 8. Implement Performance Logging

ตั้งค่า performance logging

1. Log request/response times
2. Log database query times
3. Log external service call times
4. Log slow operations
5. Log memory usage
6. Log CPU usage

## Rules

### 1. Log Levels

ใช้ log levels อย่างถูกต้อง

- debug: Development details เท่านั้น
- info: Normal operations
- warn: Potential issues ที่ไม่ critical
- error: Errors ที่ต้อง attention
- fatal: Critical failures ที่ต้อง immediate action

### 2. Log Format

ใช้ structured logging

- ใช้ JSON format
- ใช้ consistent field names
- ใช้ timestamps ใน ISO 8601
- ใช้ machine-readable formats
- ใช้ correlation IDs

### 3. Context

ให้ context ครบถ้วน

- Add request context เสมอ
- Add user context เสมอ
- Add operation context เสมอ
- Add error context เมื่อ error
- ไม่ add sensitive data

### 4. Sensitive Data

ปกป้อง sensitive data

- Sanitize ทุก user input
- Sanitize ทุก headers
- Sanitize ทุก query parameters
- ใช้ data masking
- ไม่ log passwords/tokens

### 5. Performance

Logging ต้องไม่ impact performance

- ใช้ async logging
- ไม่ log ใน tight loops
- ไม่ log large objects
- ใช้ sampling สำหรับ high-volume logs
- Monitor logging overhead

## Expected Outcome

- Structured logging ที่ตั้งค่าเสร็จ
- Log levels ที่ใช้ถูกต้อง
- Log context ที่ครบถ้วน
- Sensitive data ที่ protected
- Log destinations ที่ตั้งค่าเสร็จ
- Performance logging ที่ตั้งค่าเสร็จ
- Logging ที่ไม่ impact performance
