---
title: Check Completeness
description: ตรวจสอบว่า features, tests, และ documentation ครบถ้วน
auto_execution_mode: 3
related_workflows:
  - /validate
---

## Goal

ตรวจสอบว่า features, tests, และ documentation ครบถ้วนตาม requirements

## Execute

### 1. Check Feature Completeness

1. ตรวจสอบว่า features ทั้งหมดถูก implement
2. ตรวจสอบว่า edge cases ถูก handle
3. ตรวจสอบว่า error cases ถูก handle
4. ตรวจสอบว่า user flows ครบถ้วน

### 2. Check Test Completeness

1. ตรวจสอบ unit tests ครบถ้วน
2. ตรวจสอบ integration tests ครบถ้วน
3. ตรวจสอบ e2e tests สำหรับ critical flows
4. ตรวจสอบ test coverage ตามเป้าหมาย

### 3. Check Documentation Completeness

1. ตรวจสอบ README ครบถ้วน
2. ตรวจสอบ API documentation ครบถ้วน
3. ตรวจสอบ inline documentation ครบถ้วน
4. ตรวจสอบ setup instructions ครบถ้วน

### 4. Check Error Handling Completeness

1. ตรวจสอบ error messages ชัดเจน
2. ตรวจสอบ error logging ครบถ้วน
3. ตรวจสอบ error recovery mechanisms
4. ตรวจสอบ user-friendly error messages

### 5. Check Configuration Completeness

1. ตรวจสอบ environment variables ครบถ้วน
2. ตรวจสอบ config files ครบถ้วน
3. ตรวจสอบ default values ครบถ้วน
4. ตรวจสอบ validation rules

### 6. Run Completeness Check

1. สร้าง checklist สำหรับ completeness
2. ตรวจสอบทีละ item
3. บันทึก missing items
4. สร้าง action plan สำหรับเติมเต็ม

## Rules

### 1. Feature Completeness

- Features ตาม requirements ทั้งหมด
- Edge cases สำคัญถูก handle
- Error cases สำคัญถูก handle
- User flows ครบถ้วน

### 2. Test Completeness

- Unit tests: > 80% coverage
- Integration tests: critical flows
- E2E tests: happy paths และ critical paths
- Test documentation: ชัดเจน

### 3. Documentation Completeness

- README: installation, usage, contributing
- API docs: all public APIs
- Inline docs: complex logic
- Examples: realistic และ up-to-date

### 4. Priority Levels

- Critical: ขาด features สำคัญ
- High: ขาด tests สำคัญ
- Medium: ขาด documentation สำคัญ
- Low: เป็น nice-to-haves

## Expected Outcome

- Features ครบถ้วนตาม requirements
- Tests ครบถ้วนตามเป้าหมาย
- Documentation ครบถ้วน
- Error handling ครบถ้วน
- Configuration ครบถ้วน

