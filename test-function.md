---
title: Test Function
description: ทดสอบ functions แบบ unit test ด้วย Vitest เพื่อความถูกต้องและ coverage
auto_execution_mode: 3
---

## Goal

ทดสอบ individual functions ให้ครบถ้วน รวม unit tests สำหรับ pure functions, edge cases, boundary conditions, error handling และ test coverage

## Execute

### 1. Identify Functions to Test

1. อ่าน source code
2. วิเคราะห์ public functions
3. รวบรวม utility functions
4. กำหนด critical functions และ test priorities

### 2. Create Test Utilities

1. Build mock helpers
2. Create spy utilities
3. Add fixture helpers
4. Setup test hooks

### 3. Write Happy Path Tests

1. Test normal inputs
2. Verify expected outputs
3. Check return types
4. Test typical usage

### 4. Write Edge Case Tests

1. Test boundary values
2. Test empty inputs
3. Test null/undefined
4. Test large values

### 5. Write Error Tests

1. Test invalid inputs
2. Test exceptions
3. Test error messages
4. Test recovery

### 6. Write Async Tests

1. Test promises
2. Test async/await
3. Test timeouts
4. Test rejections

### 7. Run and Verify Tests

1. Execute all tests
2. Generate coverage report
3. Verify line/branch/function coverage
4. Check for flakiness

## Rules

1. Tests ต้อง independent, deterministic, fast, readable และ complete
2. ใช้ Arrange-Act-Assert pattern และ descriptive test names
3. Use beforeEach/afterEach สำหรับ setup/cleanup
4. Maintain test coverage >80% สำหรับ critical paths
5. รีวิว tests ควบคู่กับ code review

## Expected Outcome

1. High test coverage (>80%)
2. Comprehensive edge case testing
3. Fast test execution
4. Clear test documentation
5. CI integration ready
6. Easy to maintain

