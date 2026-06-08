---
title: Watch Test
description: รันและ monitor tests ในโปรเจกต์อย่างต่อเนื่อง
auto_execution_mode: 3
---

## Prompt

ใช้ workflow นี้เมื่อต้องการรันและ monitor tests ในโปรเจกต์อย่างต่อเนื่อง

## Execute

1. Setup Test Environment

- ติดตั้ง test framework
- กำหนด test configuration
- Setup test database
- Configure test data

2. Configure Watch Mode

- เปิด watch mode สำหรับ tests
- กำหนด test patterns
- ตั้งค่า ignore patterns
- Configure notifications

3. Run Tests

- รัน tests อย่างสม่ำเสมอ
- Monitor test results
- Track coverage
- Identify flaky tests

4. Fix Failures

- แก้ไข failing tests
- Debug test issues
- Update test expectations
- Refactor ถ้าจำเป็น

5. Maintain Tests

- เพิ่ม tests สำหรับ new code
- Update outdated tests
- Remove obsolete tests
- Improve coverage

## Rules

1. Fast Feedback

- Tests ต้องรันเร็ว
- ใช้ parallel execution
- Optimize test setup
- Minimize wait time

2. Reliability

- ไม่ merge code ที่ break tests
- Fix flaky tests ทันที
- Maintain stable test suite
- Investigate failures

3. Coverage

- Target high coverage
- Focus บน critical paths
- Test edge cases
- Cover error scenarios

4. Continuous

- รัน tests อย่างต่อเนื่อง
- Integrate กับ CI/CD
- Monitor trends
- Report status

## Expected Outcome

- Passing test suite
- High test coverage
- Fast test execution
- Reliable testing
