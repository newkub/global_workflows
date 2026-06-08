---
title: Improve Test Case
description: ปรับปรุง test cases ให้มีคุณภาพและครอบคลุม
auto_execution_mode: 3
---

## Goal

ปรับปรุง test cases ให้มีคุณภาพและครอบคลุมตาม best practices

## Execute

### 1. Analyze Test Coverage

วิเคราะห์ test coverage ปัจจุบัน

1. รัน coverage tools
2. ระบุ code ที่ยังไม่มี test
3. วิเคราะหา test quality
4. ระบุ edge cases ที่ยังไม่ได้ test
5. ตรวจสอบ test flakiness

### 2. Improve Unit Tests

ปรับปรุง unit tests

1. เพิ่ม test สำหรับ functions ที่ยังไม่มี
2. ปรับปรุง test naming ให้ชัดเจน
3. เพิ่ม edge cases และ boundary conditions
4. ใช้ test doubles อย่างเหมาะสม
5. ปรับปรุง test readability

### 3. Improve Integration Tests

ปรับปรุง integration tests

1. ทดสอบ interactions ระหว่าง components
2. ทดสอบ API endpoints
3. ทดสอบ database operations
4. ใช้ test data ที่ realistic
5. ปรับปรุง test isolation

### 4. Improve E2E Tests

ปรับปรุง E2E tests

1. ทดสอบ critical user flows
2. ทดสอบ cross-browser compatibility
3. ปรับปรุง test stability
4. เพิ่ม visual regression tests
5. ปรับปรุง test performance

### 5. Add Test Utilities

เพิ่ม test utilities ที่มีประโยชน์

1. สร้าง test helpers ที่ reusable
2. สร้าง test factories สำหรับ test data
3. สร้าง custom matchers
4. สร้าง test setup/teardown
5. สร้าง mock utilities

## Rules

### Test Coverage

รักษา coverage ในระดับที่เหมาะสม

- มุ่งที่ critical paths ก่อน
- ไม่ต้อง 100% coverage แต่ควรครอบคลุมสิ่งสำคัญ
- ตรวจสอบ branch coverage สำหรับ logic ที่ซับซ้อน
- ตรวจสอบ edge cases สำคัญ

### Test Quality

เขียน test ที่มีคุณภาพ

- ใช้ descriptive test names
- ทดสอบ behavior ไม่ใช่ implementation
- เขียน test ที่ independent และ isolated
- ใช้ AAA pattern (Arrange, Act, Assert)
- หลีกเลี่ยง test logic ที่ซับซ้อน

### Test Data

ใช้ test data ที่ realistic

- ใช้ realistic test data ไม่ใช่ random
- สร้าง test factories สำหรับ complex objects
- ใช้ fixtures สำหรับ shared test data
- ทำความสะอาด test data หลังแต่ละ test
- ใช้ test data ที่ครอบคลุม edge cases

### Test Isolation

ทำให้ tests isolated

- แต่ละ test ควร independent
- ไม่ share state ระหว่าง tests
- ใช้ setup/teardown อย่างเหมาะสม
- ใช้ test doubles อย่างเหมาะสม
- ทำความสะอาด side effects

### Test Performance

รัน tests อย่างเร็ว

- ใช้ parallel test execution
- หลีกเลี่ยง unnecessary waits
- ใช้ test doubles สำหรับ slow operations
- รัน tests ใน CI อย่างเร็ว
- ใช้ incremental test execution

## Expected Outcome

- Test coverage เพิ่มขึ้นอย่างมีนัยสำคัญ
- Test quality ดีขึ้น
- Tests ครอบคลุม edge cases สำคัญ
- Test utilities ที่มีประโยชน์
- Tests รันเร็วและเสถียร
