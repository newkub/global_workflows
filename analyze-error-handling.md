---
title: Analyze Error Handling
description: วิเคราะห์ error boundaries, try/catch patterns, error propagation, error codes
auto_execution_mode: 3
related_workflows:
  - /analyze-runtime
  - /analyze-errors
  - /improve-error-handling
  - /improve-error-messages
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ error handling patterns และ error propagation เพื่อระบุ unhandled errors และ poor error UX

## Scope

Error boundaries, try/catch patterns, error propagation, error codes, error messages, error recovery, fallback UI, error reporting

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม error handling metrics ผ่าน scripts (try/catch detection, error boundary scan, unhandled rejection analysis)

### 2. Check Error Boundaries

1. ระบุ missing error boundaries สำหรับ route segments
2. ระบุ missing error boundaries สำหรับ component trees
3. ระบุ missing fallback UI สำหรับ error states
4. ระบุ missing error recovery mechanisms
5. ระบุ error boundaries ที่ catch แคบเกินไป

### 3. Check Try/Catch Patterns

1. ระบุ empty catch blocks (swallowed errors)
2. ระบุ catch blocks ที่ log อย่างเดียวไม่ recover
3. ระบุ missing try/catch ใน async operations
4. ระบุ catch blocks ที่ catch กว้างเกินไป (catch all)
5. ระบุ missing error type differentiation
6. ระบุ re-throw patterns ที่สูญเสีย stack trace

### 4. Check Error Propagation

1. ระบุ errors ที่ไม่ propagate ไปยัง caller
2. ระบุ error wrapping ที่สูญเสีย original error
3. ระบุ missing error context (input, state, user info)
4. ระบุ error propagation ที่ไม่ consistent
5. ระบุ missing error cause chain (Error.cause)

### 5. Check Error Codes And Messages

1. ระบุ missing error code system
2. ระบุ error messages ที่ไม่ user-friendly
3. ระบุ error messages ที่เปิดเผย internal details
4. ระบุ missing error message localization
5. ระบุ inconsistent error message formats
6. ระบุ missing error documentation

### 6. Check Error Recovery

1. ระบุ missing retry mechanisms
2. ระบุ missing fallback strategies
3. ระบุ missing graceful degradation
4. ระบุ missing circuit breaker patterns
5. ระบุ missing error state reset

### 7. Check Error Reporting

1. ระบุ missing error tracking integration (Sentry, etc.)
2. ระบุ missing error context ใน reports
3. ระบุ missing user feedback mechanism
4. ระบุ missing error rate monitoring
5. ระบุ missing error alerting

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: swallowed errors → error boundaries → propagation → messages → recovery → reporting

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: swallowed errors, missing error boundaries, unhandled rejections
- **High**: missing error propagation, missing error reporting, missing recovery
- **Medium**: poor error messages, missing error codes, missing localization
- **Low**: inconsistent formats, missing error documentation

### 3. Framework Awareness

- ตรวจสอบ SolidJS ErrorBoundary patterns
- ตรวจสอบ TanStack Query error handling
- ตรวจสอบ oRPC error propagation

### 4. Use Scripts For Error Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ try/catch pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Error handling gaps ระบุพร้อม location และ severity
- Swallowed errors และ missing boundaries จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-error-handling` หรือ `/improve-error-messages`
