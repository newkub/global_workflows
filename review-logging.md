---

title: Review Logging

description: Review logging strategy, log levels และ sensitive data

auto_execution_mode: 3

related_workflows:
  - /check-logging
  - /review-security
  - /review-monitoring

---

## Goal

Review logging layer ทั้งหมดเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม logging strategy, log levels, structured logging, sensitive data

## Execute

### 1. Analyze Logging Strategy

1. ตรวจสอบ logging framework
2. Review log levels usage
3. Check log aggregation
4. Validate log retention

### 2. Review Log Levels

1. Check log level usage
2. Review log messages
3. Validate log context
4. Check log consistency

### 3. Check Structured Logging

1. Review log format
2. Check log metadata
3. Validate log parsing
4. Review log correlation

### 4. Check Sensitive Data

1. Scan for sensitive data in logs
2. Review PII logging
3. Check credential logging
4. Validate data masking

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix logging strategy
2. Adjust log levels
3. Implement structured logging
4. Mask sensitive data

## Rules

### 1. Logging Strategy

ตรวจสอบ logging strategy:

- มี logging framework
- Log levels ถูกต้อง
- Log aggregation ดี
- Log retention ถูกต้อง
- Log rotation มี

### 2. Log Levels

ตรวจสอบ log levels:

- ใช้ log levels ถูกต้อง
- Log messages ชัดเจน
- Log context ครบถ้วน
- Log consistency ดี
- ไม่ log มากเกินไป

### 3. Structured Logging

ตรวจสอบ structured logging:

- Log format consistent
- Log metadata ครบถ้วน
- Log parsing ง่าย
- Log correlation ดี
- JSON format ถ้าเป็นไปได้

### 4. Sensitive Data

ตรวจสอบ sensitive data:

- ไม่ log PII
- ไม่ log credentials
- ไม่ log secrets
- Data masking ดี
- ไม่ log sensitive data

### 5. Performance

ตรวจสอบ performance:

- Logging ไม่ช้า
- Async logging
- ไม่ block main thread
- Log batching ถ้าจำเป็น
- ไม่ log ใน hot loops

## Expected Outcome

- Logging strategy ดี
- Log levels ถูกต้อง
- Structured logging ใช้งานได้
- Sensitive data ปลอดภัย
- Performance ดี

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Log sensitive data
- Log levels ผิด
- ไม่มี context
- Logging ช้า
- ไม่มี aggregation

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Log sensitive data
- ❌ Log levels ผิด
- ❌ ไม่มี context
- ❌ Logging ช้า
- ❌ ไม่มี aggregation

