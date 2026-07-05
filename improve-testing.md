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

1. ทำ `/improve-test-coverage` เพื่อตรวจสอบ test coverage
2. ตรวจสอบ coverage targets
3. ระบุ areas ที่ขาด coverage
4. รัน `knip` สำหรับ detect dead code

### 2. Write Tests

เขียน tests ครอบคลุม

1. ทำ `/write-test` เพื่อเขียน tests ครอบคลุม
2. เขียน unit tests สำหรับ business logic
3. เขียน integration tests สำหรับ API/database
4. เขียน e2e tests สำหรับ critical flows
5. สร้าง test utilities (helpers, fixtures, factories)

### 3. Improve Test Quality

ปรับปรุงคุณภาพ tests

1. ลบ flaky tests
2. ลบ slow tests
3. ลบ duplicate tests
4. ปรับปรุย test naming
5. ปรับปรุย test organization

### 4. Set Up Coverage Enforcement

ตั้งค่า coverage enforcement

1. ตั้งค่า coverage targets
2. Integrate ใน CI/CD
3. Block PRs ที่ไม่ผ่าน coverage
4. Monitor coverage trends

### 5. Optimize Test Performance

ปรับปรุง performance ของ tests

1. Optimize test execution time
2. ใช้ parallel test execution
3. ใช้ test isolation
4. Optimize test data setup
5. ใช้ test caching

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
