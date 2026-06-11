---
title: Improve Error Tracking
description: ปรับปรุง error tracking และ monitoring (Sentry, error boundaries)
auto_execution_mode: 3
related_workflows:
  - /improve-error-handling
  - /improve-logging
  - /improve-security
---

## Goal

ปรับปรุง error tracking และ monitoring ให้ครอบคลุมทุก errors ใน production

## Scope

ใช้สำหรับปรับปรุม error tracking (Sentry, Bugsnag, Rollbar) และ error boundaries

## Execute

### 1. Setup Error Tracking Service

ตั้งค่า error tracking service

1. เลือก error tracking service (Sentry, Bugsnag, Rollbar)
2. ติดตั้ง SDK สำหรับ platform ที่ใช้
3. ตั้งค่า environment variables สำหรับ API keys
4. ตั้งค่า environment (development, staging, production)
5. ตั้งค่า release tracking
6. ตั้งค่า user context tracking

### 2. Implement Error Boundaries

ตั้งค่า error boundaries สำหรับ frontend

1. Implement React error boundaries
2. Implement Vue error handlers
3. Implement global error handlers
4. Implement unhandled rejection handlers
5. Implement resource error handlers
6. Implement network error handlers

### 3. Capture Server Errors

จับ errors จาก server

1. Capture uncaught exceptions
2. Capture unhandled rejections
3. Capture HTTP errors
4. Capture database errors
5. Capture external service errors
6. Capture timeout errors

### 4. Add Error Context

เพิ่ม context สำหรับ errors

1. Add user context (user ID, role)
2. Add request context (URL, method, headers)
3. Add environment context (browser, OS, device)
4. Add custom context (business data)
5. Add tags สำหรับ filtering
6. Add breadcrumbs สำหรับ user journey

### 5. Implement Error Grouping

จัดกลุ่ม errors อย่างถูกต้อง

1. ตั้งค่า error fingerprinting
2. ใช้ custom grouping rules
3. จัดกลุ่มตาม error types
4. จัดกลุ่มตาม stack traces
5. จัดกลุ่มตาม context
6. จัดกลุ่มตาม severity

### 6. Setup Alerts

ตั้งค่า alerts สำหรับ errors

1. ตั้งค่า alerts สำหรับ critical errors
2. ตั้งค่า alerts สำหรับ error rate spikes
3. ตั้งค่า alerts สำหรับ new error types
4. ตั้งค่า alerts สำหรับ regression
5. ตั้งค่า notification channels (email, Slack)
6. ตั้งค่า alert routing

### 7. Integrate with CI/CD

เชื่อมต่อกับ CI/CD

1. Associate errors with releases
2. Track error rates ต่อ release
3. Track regressions ระหว่าง releases
4. Setup error budgets
5. Integrate with deployment pipeline
6. Setup rollback triggers

### 8. Monitor and Analyze

ตรวจสอบและวิเคราะห์ errors

1. Monitor error rates
2. Monitor error trends
3. Analyze error patterns
4. Identify critical errors
5. Track error resolution
6. Generate error reports

## Rules

### 1. Error Capture

จับ errors ครบถ้วน

- Capture ทุก uncaught exceptions
- Capture ทุก unhandled rejections
- Capture ทุก HTTP errors
- Capture ทุก external service errors
- ไม่ capture development errors ใน production

### 2. Error Context

ให้ context ครบถ้วน

- Add user context เสมอ
- Add request context เสมอ
- Add environment context เสมอ
- Add custom context สำคัญ
- ไม่ add sensitive data

### 3. Error Grouping

จัดกลุ่ม errors อย่างถูกต้อง

- ใช้ fingerprinting อัตโนมัติ
- ใช้ custom grouping rules
- จัดกลุ่มตาม severity
- จัดกลุ่มตาม impact
- ไม่ over-group

### 4. Alerting

ตั้งค่า alerts อย่างเหมาะสม

- Alert สำหรับ critical errors เท่านั้น
- Alert สำหรับ error rate spikes
- ไม่ alert สำหรับ expected errors
- ใช้ appropriate notification channels
- ไม่ alert fatigue

### 5. Privacy

ปกป้อง privacy

- ไม่ capture sensitive data
- ไม่ capture PII
- Sanitize request bodies
- Sanitize headers
- ใช้ data scrubbing

## Expected Outcome

- Error tracking service ที่ตั้งค่าเสร็จ
- Error boundaries ที่ implement เสร็จ
- Server errors ที่ capture เสร็จ
- Error context ที่ครบถ้วน
- Error grouping ที่ถูกต้อง
- Alerts ที่ตั้งค่าเสร็จ
- CI/CD integration ที่เสร็จ
- Error monitoring ที่ active
