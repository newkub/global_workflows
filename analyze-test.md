---
title: Analyze Test
description: วิเคราะห์ test coverage, quality, patterns, E2E gaps, mutation testing
auto_execution_mode: 3
related_workflows:
  - /improve-testing
  - /improve-test-coverage
  - /validate-test
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ test quality และ coverage เพื่อระบุ gaps และ improvement opportunities

## Scope

Test coverage, test quality, test patterns, test isolation, E2E gaps, mutation testing, test naming, assertion quality, edge case coverage, test performance

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม test metrics ผ่าน scripts (coverage analysis, test quality scan, E2E gap detection)

### 2. Check Test Coverage

1. รัน `bun run test:coverage` เพื่อดู coverage metrics
2. ระบุ modules ที่มี coverage ต่ำ (< 80%)
3. ระบุ critical paths ที่ไม่มี tests
4. ระบุ files ที่ไม่มี test files คู่กัน

### 3. Check Test Quality

1. ระบุ test smells (no assertion, multiple concerns, test interdependence)
2. ระบุ test naming ที่ไม่สื่อความหมาย
3. ระบุ assertion quality (assert แค่ truthy แทน specific value)
4. ระบุ missing edge case tests (null, undefined, empty, boundary)
5. ระบุ tests ที่ test implementation แทน behavior

### 4. Check Test Patterns

1. ระบุ missing test setup/teardown patterns
2. ระบุ missing test data factories หรือ fixtures
3. ระบุ missing mock strategies (over-mocking, mocking wrong layer)
4. ระบุ missing snapshot testing ที่ควรมี
5. ระบุ tests ที่ depend บน external services

### 5. Check Test Isolation

1. ระบุ shared state ระหว่าง tests
2. ระบุ order-dependent tests
3. ระบุ tests ที่ modify global state
4. ระบุ missing cleanup หลัง tests

### 6. Check E2E Coverage

1. ระบุ critical user flows ที่ไม่มี E2E tests
2. ระบุ missing error scenario E2E tests
3. ระบุ E2E tests ที่ flaky
4. ระบุ missing visual regression tests

### 7. Check Test Performance

1. ระบุ tests ที่ช้า (> 1s per test)
2. ระบุ missing parallel test execution
3. ระบุ tests ที่ setup ซ้ำซ้อน
4. ระบุ missing test caching opportunities

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: critical path coverage → test quality → isolation → E2E → performance

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file, test name, และ severity

### 2. Coverage Thresholds

- Critical paths: > 90% coverage
- Business logic: > 80% coverage
- Utilities: > 70% coverage
- UI components: > 60% coverage

### 3. Test Quality Indicators

- Tests ที่ไม่มี assertion หรือ assert แค่ truthy
- Test interdependence และ order dependency
- Missing edge case tests (null, undefined, empty, boundary)

## Expected Outcome

- Test coverage gaps และ quality issues ระบุชัดเจน
- พร้อมสำหรับ `/improve-testing` หรือ `/improve-test-coverage`
