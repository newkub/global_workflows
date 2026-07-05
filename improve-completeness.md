---
title: Improve Completeness
description: ปรับปรุยความครบถ้วนของ features, tests, และ documentation
auto_execution_mode: 3
related_workflows:
  - /write-test
  - /write-docs
  - /improve-seo
---

## Goal

ปรับปรุยความครบถ้วนของ features, tests, และ documentation ตาม requirements

## Scope

ใช้สำหรับปรับปรุยความครบถ้วนทั้ง features, tests, และ documentation

## Execute

### 1. Improve Feature Completeness

ปรับปรุยความครบถ้วนของ features

1. ตรวจสอบว่า features ทั้งหมดถูก implement
2. ตรวจสอบว่า edge cases ถูก handle
3. ตรวจสอบว่า error cases ถูก handle
4. ตรวจสอบว่า user flows ครบถ้วน
5. เพิ่ม features ที่ขาด

### 2. Improve Test Completeness

ปรับปรุยความครบถ้วนของ tests

1. ทำ `/write-test` เพื่อเขียน tests ครอบคลุม
2. ตรวจสอบ unit tests ครบถ้วน
3. ตรวจสอบ integration tests ครบถ้วน
4. ตรวจสอบ e2e tests สำหรับ critical flows
5. ตรวจสอบ test coverage ตามเป้าหมาย

### 3. Improve Documentation Completeness

ปรับปรุยความครบถ้วนของ documentation

1. ทำ `/write-docs` เพื่ออัพเดท documentation
2. ทำ `/improve-seo` เพื่อปรับปรุง SEO สำหรับ documentation
3. ตรวจสอบ README ครบถ้วน
4. ตรวจสอบ API documentation ครบถ้วน
5. ตรวจสอบ inline documentation ครบถ้วน
6. ตรวจสอบ setup instructions ครบถ้วน

### 4. Improve Error Handling Completeness

ปรับปรุยความครบถ้วนของ error handling

1. ตรวจสอบ error messages ชัดเจน
2. ตรวจสอบ error logging ครบถ้วน
3. ตรวจสอบ error recovery mechanisms
4. ตรวจสอบ user-friendly error messages
5. เพิ่ม error handling ที่ขาด

### 5. Improve Configuration Completeness

ปรับปรุยความครบถ้วนของ configuration

1. ตรวจสอบ environment variables ครบถ้วน
2. ตรวจสอบ config files ครบถ้วน
3. ตรวจสอบ default values ครบถ้วน
4. ตรวจสอบ validation rules
5. เพิ่ม configuration ที่ขาด

## Rules

### 1. Feature Completeness

รักษาความครบถ้วนของ features

- Features ตาม requirements ทั้งหมด
- Edge cases สำคัญถูก handle
- Error cases สำคัญถูก handle
- User flows ครบถ้วน

### 2. Test Completeness

รักษาความครบถ้วนของ tests

- Unit tests: > 80% coverage
- Integration tests: critical paths ครอบคลุม
- E2E tests: critical flows ครอบคลุม
- Test quality สูง

### 3. Documentation Completeness

รักษาความครบถ้วนของ documentation

- README ครบถ้วน
- API documentation ครบถ้วน
- Inline documentation ครบถ้วน
- Setup instructions ครบถ้วน

## Expected Outcome

- Features ครบถ้วนตาม requirements
- Tests ครบถ้วนและมีคุณภาพ
- Documentation ครบถ้วน
- Error handling ครบถ้วน
- Configuration ครบถ้วน
