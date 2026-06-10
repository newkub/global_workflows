---
title: Check Logging
description: ตรวจสอบ log levels, formats, และ sensitive data
auto_execution_mode: 3
related_workflows:
  - /check-monitoring
---

## Goal

ตรวจสอบ logging strategy และ implementation ครบถ้วน

## Execute

### 1. Check Log Levels

1. ตรวจสอบ log levels ถูกต้อง (DEBUG, INFO, WARN, ERROR, FATAL)
2. ตรวจสอบ log levels ใช้งานเหมาะสม
3. ตรวจสอบ log levels สามารถ configure ได้
4. ตรวจสอบ log levels ตาม environment

### 2. Check Log Formats

1. ตรวจสอบ log formats สม่ำเสมอ
2. ตรวจสอบ log formats มี structured data
3. ตรวจสอบ log formats สามารถ parse ได้
4. ตรวจสอบ log timestamps ถูกต้อง

### 3. Check Sensitive Data

1. ตรวจสอบ sensitive data ไม่ถูก log
2. ตรวจสอบ PII ไม่ถูก log
3. ตรวจสอบ passwords ไม่ถูก log
4. ตรวจสอบ tokens ไม่ถูก log

### 4. Check Log Content

1. ตรวจสอบ log messages มีความหมาย
2. ตรวจสอบ log messages มี context
3. ตรวจสอบ log messages มี correlation IDs
4. ตรวจสอบ log messages มี user IDs

### 5. Check Log Retention

1. ตรวจสอบ log retention policy
2. ตรวจสอบ log rotation
3. ตรวจสอบ log archival
4. ตรวจสอบ log cleanup

### 6. Check Log Performance

1. ตรวจสอบ logging ไม่ impact performance
2. ตรวจสอบ async logging
3. ตรวจสอบ log batching
4. ตรวจสอบ log sampling

## Rules

### 1. Log Level Guidelines

- DEBUG: detailed diagnostics
- INFO: informational messages
- WARN: warning conditions
- ERROR: error conditions
- FATAL: critical errors

### 2. Log Format Guidelines

- ใช้ structured logging (JSON)
- ใช้ consistent field names
- ใช้ ISO 8601 timestamps
- ใช้ correlation IDs

### 3. Sensitive Data Protection

- ไม่ log passwords
- ไม่ log tokens
- ไม่ log PII
- ใช้ data masking ถ้าจำเป็น

### 4. Priority Levels

- Critical: sensitive data ถูก log
- High: log levels ใช้งานผิด
- Medium: log formats ไม่สม่ำเสมอ
- Low: เป็น logging optimizations

## Expected Outcome

- Log levels ถูกต้องและเหมาะสม
- Log formats สม่ำเสมอและ parse ได้
- Sensitive data ไม่ถูก log
- Log content มีความหมายและ context
- Log retention ถูกตั้งค่า
- Log performance ไม่ impact application

