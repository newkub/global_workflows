---
title: Improve Testing
description: ปรับปรุงการทดสอบให้ครอบคลุมและมีคุณภาพสูง
auto_execution_mode: 3
related_workflows:
  - /improve-test-coverage
  - /write-test
---

## Goal

ปรับปรุงการทดสอบให้ครอบคลุมและมีคุณภาพสูง

## Scope

ใช้สำหรับปรับปรุงการทดสอบทั้ง unit, integration, และ e2e tests

## Execute

### 1. Check Test Coverage

ตรวจสอบ test coverage ปัจจุบัน

- ทำ `/improve-test-coverage` เพื่อตรวจสอบ test coverage
- ตรวจสอบ coverage targets
- ระบุ areas ที่ขาด coverage
- รัน `knip` สำหรับ detect dead code

### 2. Write Tests

เขียน tests ครอบคลุม

- ทำ `/write-test` เพื่อเขียน tests ครอบคลุม
- เขียน unit tests สำหรับ business logic
- เขียน integration tests สำหรับ API/database
- เขียน e2e tests สำหรับ critical flows
- สร้าง test utilities (helpers, fixtures, factories)

### 3. Improve Test Quality

ปรับปรุงคุณภาพ tests

- ลบ flaky tests
- ลบ slow tests
- ลบ duplicate tests
- ปรับปรุย test naming
- ปรับปรุย test organization

### 4. Set Up Coverage Enforcement

ตั้งค่า coverage enforcement

- ตั้งค่า coverage targets
- Integrate ใน CI/CD
- Block PRs ที่ไม่ผ่าน coverage
- Monitor coverage trends

### 5. Optimize Test Performance

ปรับปรุง performance ของ tests

- Optimize test execution time
- ใช้ parallel test execution
- ใช้ test isolation
- Optimize test data setup
- ใช้ test caching

## Rules

### 1. Coverage Targets

ทำตามเป้าหมาย coverage

- Unit tests: > 80% coverage
- Integration tests: > 60% coverage
- E2E tests: critical paths ครอบคลุม
- Overall: > 70% coverage

### 2. Test Quality

รักษาคุณภาพ tests

- Tests ต้อง deterministic
- Tests ต้อง independent
- Tests ต้อง fast
- Tests ต้อง readable
- Tests ต้อง maintainable

### 3. Test Organization

จัดระเบียบ tests อย่างเหมาะสม

- Group tests โดย feature
- Use descriptive test names
- Separate unit, integration, แล e2e tests
- Use test utilities สำหรับ common operations

### 4. Continuous Testing

ทดสอบอย่างต่อเนื่อง

- รัน tests ใน CI/CD
- รัน tests บน every commit
- รัน tests บน every PR
- Monitor test failures

## Expected Outcome

- Test coverage สูงขึ้นและตรง target
- Dead code และ unused dependencies ถูกลบ
- Unit tests ครอบคลุม business logic
- Integration tests ครอบคลุม API/database
- E2E tests ครอบคลุม critical flows
- Test quality สูง (ไม่ flaky, เร็ว)
- Coverage enforcement ใน CI/CD
