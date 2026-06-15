---
title: Improve Completeness
description: ปรับปรุยความครบถ้วนของ features, tests, และ documentation
auto_execution_mode: 3
related_workflows:
  - /write-test
  - /write-docs
---

## Goal

ปรับปรุยความครบถ้วนของ features, tests, และ documentation ตาม requirements

## Scope

ใช้สำหรับปรับปรุยความครบถ้วนทั้ง features, tests, และ documentation

## Execute

### 1. Improve Feature Completeness

ปรับปรุยความครบถ้วนของ features

- ตรวจสอบว่า features ทั้งหมดถูก implement
- ตรวจสอบว่า edge cases ถูก handle
- ตรวจสอบว่า error cases ถูก handle
- ตรวจสอบว่า user flows ครบถ้วน
- เพิ่ม features ที่ขาด

### 2. Improve Test Completeness

ปรับปรุยความครบถ้วนของ tests

- ทำ `/write-test` เพื่อเขียน tests ครอบคลุม
- ตรวจสอบ unit tests ครบถ้วน
- ตรวจสอบ integration tests ครบถ้วน
- ตรวจสอบ e2e tests สำหรับ critical flows
- ตรวจสอบ test coverage ตามเป้าหมาย

### 3. Improve Documentation Completeness

ปรับปรุยความครบถ้วนของ documentation

- ทำ `/write-docs` เพื่ออัพเดท documentation
- ตรวจสอบ README ครบถ้วน
- ตรวจสอบ API documentation ครบถ้วน
- ตรวจสอบ inline documentation ครบถ้วน
- ตรวจสอบ setup instructions ครบถ้วน

### 4. Improve Error Handling Completeness

ปรับปรุยความครบถ้วนของ error handling

- ตรวจสอบ error messages ชัดเจน
- ตรวจสอบ error logging ครบถ้วน
- ตรวจสอบ error recovery mechanisms
- ตรวจสอบ user-friendly error messages
- เพิ่ม error handling ที่ขาด

### 5. Improve Configuration Completeness

ปรับปรุยความครบถ้วนของ configuration

- ตรวจสอบ environment variables ครบถ้วน
- ตรวจสอบ config files ครบถ้วน
- ตรวจสอบ default values ครบถ้วน
- ตรวจสอบ validation rules
- เพิ่ม configuration ที่ขาด

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
