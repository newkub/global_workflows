---
title: Test Integration
description: ทดสอบ integration ระหว่าง components, services และ external dependencies
auto_execution_mode: 3
---

## Goal

ทดสอบ integration ระหว่าง components, services และ external dependencies ให้เชื่อถือได้

## Execute

### 1. Identify Integration Points

1. ระบุ API endpoints และ consumers
2. ตรวจหา database connections และ queries
3. วิเคราะห์ external service integrations
4. ประเมิน message queues หรือ event systems

### 2. Setup Test Environment

1. สร้าง isolated test environment
2. ใช้ test containers สำหรับ dependencies
3. Setup mock servers สำหรับ external APIs
4. เตรียม test data ที่ realistic

### 3. Design Integration Tests

1. กำหนด test scenarios สำหรับ happy paths
2. ออกแบบ error scenario tests
3. สร้าง edge case tests
4. ระบุ data flow tests

### 4. Implement Tests

1. เขียน integration tests ด้วย framework ที่เหมาะสม
2. ใช้ proper setup และ teardown
3. Implement retry mechanisms สำหรับ flaky tests
4. Add proper assertions สำหรับ data validation

### 5. Execute Tests

1. รัน tests ใน CI/CD pipeline
2. ตรวจสอบ test stability และ reliability
3. วัด test execution time
4. Document test results

### 6. Analyze Results

1. วิเคราะห์ test failures และ root causes
2. ระบุ flaky tests ที่ต้องแก้ไข
3. ประเมิน test coverage ของ integrations
4. สร้าง report ของ findings

## Rules

1. Tests ต้อง isolated จาก production data และใช้ separate test database หรือ schema
2. Mock external dependencies ที่ไม่สามารถควบคุมได้ และ cleanup test data หลังแต่ละ test
3. ใช้ test data ที่ realistic ไม่ใช่ dummy data และ cover edge cases และ boundary conditions
4. Tests ต้อง reliable และ deterministic หลีกเลี่ยง race conditions และใช้ proper waiting strategies
5. Tests ต้องรันเร็ว (target < 30 seconds) ใช้ parallel execution เมื่อเป็นไปได้

## Expected Outcome

1. Integration test suite ที่ครอบคลุม
2. Test coverage report
3. CI/CD pipeline integration
4. Documentation ของ test scenarios
5. Flaky test remediation plan

