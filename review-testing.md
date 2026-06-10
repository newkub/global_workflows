---

title: Review Testing

description: Review test coverage, test quality และ test strategy

auto_execution_mode: 3

related_workflows:
  - /check-coverage
  - /review-code-quality
  - /test-function

---

## Goal

Review testing layer ทั้งหมดเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม test coverage, test quality, test strategy, mocking, test data

## Execute

### 1. Analyze Test Coverage

1. ตรวจสอบ test coverage metrics
2. Review coverage reports
3. Identify untested code
4. Check critical path coverage

### 2. Review Test Quality

1. Check test isolation
2. Review test assertions
3. Validate test data
4. Check test reliability

### 3. Review Test Strategy

1. Review test types (unit, integration, e2e)
2. Check test organization
3. Validate test naming
4. Review test documentation

### 4. Check Mocking Strategy

1. Review mocking usage
2. Check mock implementations
3. Validate test doubles
4. Review fixture management

### 5. Prioritize And Report

1. Group issues ตาม impact
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Add missing tests
2. Improve test quality
3. Fix flaky tests
4. Improve test strategy

## Rules

### 1. Test Coverage

ตรวจสอบ test coverage:

- Coverage > 80%
- Critical paths 100%
- Edge cases covered
- Error paths tested
- Integration tested

### 2. Test Quality

ตรวจสอบ test quality:

- Tests isolated
- Assertions clear
- Test data valid
- Tests reliable
- Tests fast

### 3. Test Strategy

ตรวจสอบ test strategy:

- Unit tests สำหรับ logic
- Integration tests สำหรับ flows
- E2E tests สำหรับ critical paths
- Test pyramid ถูกต้อง
- Tests organized well

### 4. Mocking

ตรวจสอบ mocking:

- Mock อย่างเหมาะสม
- ไม่ over-mock
- Mock implementations valid
- Test doubles ถูกต้อง
- Fixtures managed well

### 5. Test Maintenance

ตรวจสอบ test maintenance:

- Tests easy to maintain
- Test naming clear
- Test documentation good
- Test data managed
- Tests updated with code

## Expected Outcome

- Test coverage สูง
- Test quality ดี
- Test strategy ถูกต้อง
- Mocking ใช้งานได้
- Tests บำรุงรักษาง่าย

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Coverage ต่ำ
- Tests ไม่ isolated
- Over-mocking
- Flaky tests
- Tests ช้า

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Coverage ต่ำ
- ❌ Tests ไม่ isolated
- ❌ Over-mock
- ❌ Flaky tests
- ❌ Tests ช้า

