---
title: Improve Observability
description: ปรับปรุง logging, tracing, และ debugging capabilities
auto_execution_mode: 3
related_workflows:
  - improve-monitoring
  - improve-error-handling
  - improve-debugging
  - improve-backend-services
---

## Goal

ปรับปรุง observability ผ่าน structured logging, distributed tracing, และ debugging capabilities

## Scope

ใช้สำหรับทุก project ที่ต้องการ logging, tracing, และ debugging ที่มีประสิทธิภาพ แยกจาก `/improve-monitoring` ที่เน้น metrics และ alerts

## Execute

### 1. Structured Logging

ปรับปรุง logging strategy

1. วิเคราะห์ logging format (JSON, structured) และ levels
2. ตั้งค่า log levels ที่เหมาะสม (debug, info, warn, error)
3. ใช้ correlation IDs สำหรับ request tracing
4. ตรวจสอบ sensitive data ไม่อยู่ใน logs
5. ตั้งค่า log rotation และ retention
6. ทำ `/improve-error-handling` สำหรับ error logging

### 2. Distributed Tracing

ปรับปรุง request tracing

1. Implement trace IDs สำหรับทุก requests
2. ตั้งค่า span tracking สำหรับ database queries และ API calls
3. ตรวจสอบ trace propagation ข้าม services
4. วิเคราะห์ critical path และ bottlenecks
5. ใช้ OpenTelemetry ถ้าจำเป็น

### 3. Debugging Capabilities

ปรับปรุง debugging experience

1. ทำ `/improve-debugging` สำหรับ error messages และ context
2. ตรวจสอบ error stack traces มีข้อมูลเพียงพอ
3. ตั้งค่า source maps สำหรับ production debugging
4. ใช้ debug mode สำหรับ development
5. ตรวจสอบ log context มี request, user, และ action

## Rules

### 1. Log Quality

- ใช้ structured logging (JSON) ใน production
- ทุก log entry มี timestamp, level, และ context
- ไม่ log sensitive data (passwords, tokens, PII)
- ใช้ appropriate log levels ไม่ใช่ทุกอย่าง info

### 2. Trace Completeness

- ทุก request มี trace ID
- Trace propagation ข้าม service boundaries
- Database queries และ external calls มี spans
- Critical path วิเคราะห์ได้จาก traces

### 3. Debugging First

- Error messages ต้อง actionable
- Stack traces ต้องมี source maps
- Log context ต้องเพียงพอสำหรับ reproduce
- Debug mode ต้องไม่กระทบ production

## Expected Outcome

- Structured logging ครบถ้วน พร้อม correlation IDs
- Distributed tracing ครอบคลุมทุก requests และ services
- Debugging ง่าย พร้อม actionable error messages
- Log retention และ rotation ตั้งค่าถูกต้อง
- ไม่มี sensitive data ใน logs
