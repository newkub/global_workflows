---

title: Review Error Handling

description: Review error handling, exception management และ error recovery

auto_execution_mode: 3

related_workflows:
  - /review-security
  - /review-logging
  - /review-api

---

## Goal

Review error handling layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม error handling, exception management, error messages, error recovery

## Execute

### 1. Analyze Error Handling

1. ตรวจสอบ try-catch blocks
2. Review error propagation
3. Check error boundaries
4. Validate error types

### 2. Review Error Messages

1. Check error message clarity
2. Review error message consistency
3. Validate error codes
4. Check user-friendly messages

### 3. Review Error Recovery

1. Check retry logic
2. Review fallback mechanisms
3. Validate error recovery
4. Check graceful degradation

### 4. Review Error Logging

1. Check error logging
2. Review error context
3. Validate error tracking
4. Check error aggregation

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Improve error handling
2. Fix error messages
3. Add error recovery
4. Improve error logging

## Rules

### 1. Error Handling

ตรวจสอบ error handling:

- Try-catch blocks ถูกต้อง
- Error propagation ดี
- Error boundaries มี
- Error types ถูกต้อง
- ไม่ swallow errors

### 2. Error Messages

ตรวจสอบ error messages:

- Error messages clear
- Error messages consistent
- Error codes มี
- User-friendly messages
- Actionable messages

### 3. Error Recovery

ตรวจสอบ error recovery:

- Retry logic ดี
- Fallback mechanisms มี
- Error recovery ดี
- Graceful degradation
- ไม่ crash

### 4. Error Logging

ตรวจสอบ error logging:

- Error logging มี
- Error context ครบถ้วน
- Error tracking ดี
- Error aggregation มี
- ไม่ log sensitive data

### 5. User Experience

ตรวจสอบ user experience:

- Error messages user-friendly
- Error recovery transparent
- User รู้วิธีแก้
- Error UI ดี
- ไม่ expose technical details

## Expected Outcome

- Error handling ดี
- Error messages ชัดเจน
- Error recovery มีประสิทธิภาพ
- Error logging ครบถ้วน
- User experience ดี

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Swallow errors
- Error messages ไม่ชัดเจน
- ไม่มี recovery
- ไม่ log errors
- Expose stack traces

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Swallow errors
- ❌ Error messages ไม่ชัดเจน
- ❌ ไม่มี recovery
- ❌ ไม่ log errors
- ❌ Expose stack traces
