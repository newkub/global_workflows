---
title: Check API
description: ตรวจสอบ API contracts, documentation, และ versioning
auto_execution_mode: 3
related_workflows:
  - /test-api
---

## Goal

ตรวจสอบ API contracts, documentation, และ versioning ครบถ้วน

## Execute

### 1. Check API Contracts

1. ตรวจสอบ API contracts มีอยู่ (OpenAPI, GraphQL schema)
2. ตรวจสอบ API contracts ถูกต้อง
3. ตรวจสอบ API contracts เป็นปัจจุบัน
4. ตรวจสอบ API contracts สอดคล้องกับ implementation

### 2. Check API Documentation

1. ตรวจสอบ API documentation ครบถ้วน
2. ตรวจสอบ API documentation ถูกต้อง
3. ตรวจสอบ API documentation มี examples
4. ตรวจสอบ API documentation มี error codes

### 3. Check API Versioning

1. ตรวจสอบ API versioning strategy
2. ตรวจสอบ API version compatibility
3. ตรวจสอบ API deprecation policy
4. ตรวจสอบ API migration guide

### 4. Check API Security

1. ตรวจสอบ API authentication
2. ตรวจสอบ API authorization
3. ตรวจสอบ API rate limiting
4. ตรวจสอบ API input validation

### 5. Check API Performance

1. ตรวจสอบ API response times
2. ตรวจสอบ API throughput
3. ตรวจสอบ API error rates
4. ตรวจสอบ API caching

### 6. Run API Validation

1. รัน API contract tests
2. รัน API documentation tests
3. รัน API security tests
4. รัน API performance tests

## Rules

### 1. API Contract Guidelines

- ใช้ OpenAPI หรือ GraphQL schema
- ให้ contract เป็น source of truth
- ใช้ contract testing
- อัพเดท contract เมื่อเปลี่ยนแปลง

### 2. API Documentation Guidelines

- Document ทุก endpoints
- Document request/response formats
- Document error responses
- ให้ examples ที่ realistic

### 3. API Versioning Guidelines

- ใช้ semantic versioning
- ให้ deprecation warnings
- ให้ migration guide
- รองรับ old versions ชั่วคราว

### 4. Priority Levels

- Critical: API contracts ไม่ตรงกับ implementation
- High: API documentation ขาด
- Medium: API versioning ไม่ชัดเจน
- Low: เป็น API optimizations

## Expected Outcome

- API contracts ครบถ้วนและถูกต้อง
- API documentation ครบถ้วนและถูกต้อง
- API versioning ชัดเจน
- API security ปลอดภัย
- API performance ดี
- API tests ผ่าน

