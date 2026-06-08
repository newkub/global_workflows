---

title: Review API

description: Review API endpoints, contracts, documentation และ versioning

auto_execution_mode: 3

related_workflows:
  - /check-api
  - /review-security
  - /review-performance

---

## Goal

Review API layer ทั้งหมดเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม API contracts, documentation, versioning, error handling, authentication

## Execute

### 1. Analyze API Structure

1. ตรวจสอบ API endpoint files
2. Review route organization
3. Check middleware usage
4. Validate API versioning

### 2. Review API Contracts

1. Check request/response schemas
2. Validate data types
3. Review error responses
4. Check status code usage

### 3. Check Documentation

1. Review API documentation
2. Check examples completeness
3. Validate parameter descriptions
4. Review authentication docs

### 4. Review Security

1. Check authentication implementation
2. Validate authorization
3. Review rate limiting
4. Check input validation

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix critical security issues
2. Fix contract violations
3. Improve documentation
4. Add missing validation

## Rules

### 1. API Contracts

ตรวจสอบ API contracts:

- มี request/response schemas
- ใช้ status codes ถูกต้อง
- มี error responses ชัดเจน
- มี validation rules
- มี pagination support

### 2. Documentation

ตรวจสอบ documentation:

- มี docs สำหรับทุก endpoints
- มี examples ที่ใช้ได้จริง
- อธิบาย parameters ครบถ้วน
- มี authentication docs
- อัพเดท docs เมื่อเปลี่ยน API

### 3. Versioning

ตรวจสอบ versioning:

- มี API versioning strategy
- ใช้ semantic versioning
- มี deprecation policy
- มี changelog
- ไม่ break backward compatibility

### 4. Error Handling

ตรวจสอบ error handling:

- ใช้ status codes ถูกต้อง
- มี error messages ชัดเจน
- มี error codes
- ไม่ expose sensitive data
- log errors อย่างเหมาะสม

### 5. Security

ตรวจสอบ security:

- มี authentication
- มี authorization
- มี rate limiting
- มี input validation
- มี CORS configuration

## Expected Outcome

- API contracts ถูกต้องและ consistent
- Documentation ครบถ้วนและอัพเดท
- Versioning ชัดเจน
- Security ถูกรักษา
- Error handling ดี

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่มี API documentation
- ใช้ status codes ผิด
- ไม่มี input validation
- ไม่มี rate limiting
- Break backward compatibility

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ไม่มี API versioning
- ❌ Return 200 ทุก error
- ❌ Expose stack traces
- ❌ ไม่มี authentication
- ❌ ไม่ validate input
