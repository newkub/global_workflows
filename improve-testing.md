---
title: Improve Testing
description: ปรับปรุง testability และ test coverage ครบถ้วน (unit, integration, e2e)
auto_execution_mode: 3
---

## Goal

ปรับปรุง testability และ test coverage ให้ครอบคลุมทุกส่วนของ codebase

## Scope

ใช้สำหรับปรับปรุง testability, unit tests, integration tests, และ e2e tests

## Execute

### 1. Analyze Current State

วิเคราะห์ testability และ test coverage ปัจจุบัน

1. รัน coverage report (Istanbul, c8, vitest coverage)
2. ระบุ files/functions ที่ไม่มี tests
3. ระบุ critical paths ที่ไม่มี coverage
4. ระบุโค้ดที่ยากต่อการทดสอบ
5. ตรวจสอบ `coupling` ระหว่าง components
6. หา `side effects` ที่ซ่อนอยู่
7. ระบุ `dependencies` ที่ hard-coded
8. ตรวจสอบ `global state` usage
9. ตรวจสอบ test quality (flaky tests, slow tests)
10. ระบุ edge cases ที่ไม่ได้ test

### 2. Improve Testability

ปรับปรุง testability ด้วย systematic refactoring

1. แยก `dependencies` ออกจาก business logic
2. สร้าง `interfaces` สำหรับ external dependencies
3. ใช้ `constructor injection` หรือ `parameter injection`
4. สร้าง `mock implementations` สำหรับ testing
5. ลบ direct dependencies ไปยัง `concrete classes`
6. ทำตาม `/refactor-file-to-single-responsibility` เพื่อแยก concerns
7. ทำตาม `/functional-programming` เพื่อสร้าง pure functions
8. ใช้ `dependency inversion` สำหรับ external services
9. ลบ `tight coupling` ระหว่าง layers
10. ใช้ `events` หรือ `observers` สำหรับ loose coupling
11. ทำตาม `/improve-side-effect` เพื่อจัดการ side effects อย่างเป็นระบบ
12. ทำตาม `/functional-programming` เพื่อแยก core จาก shell
13. จัดการ `I/O operations` ใน layer แยก
14. ใช้ `repository pattern` สำหรับ data access
15. สร้าง `adapters` สำหรับ external services
16. ใช้ `dependency injection` สำหรับ side effects
17. แยก logic ที่ซับซ้อนเป็น functions เล็กๆ
18. ใช้ `composition` แทน `inheritance`
19. สร้าง clear `interfaces` ระหว่าง components
20. ลบ `conditional logic` ที่ซับซ้อน
21. ใช้ `strategy pattern` สำหรับ algorithms ที่เปลี่ยนแปลง

### 3. Detect Dead Code

ตรวจหา dead code และ unused exports

1. รัน knip สำหรับ detect unused exports
2. รัน tools สำหรับ detect dead code
3. ระบุ unused dependencies
4. ระบุ unused functions และ variables
5. ระบุ unreachable code

### 4. Remove Dead Code

ลบ dead code และ unused items

1. ลบ unused exports
2. ลบ unused dependencies
3. ลบ unused functions และ variables
4. ลบ unreachable code
5. ทำความสะอาด imports

### 5. Set Coverage Targets

กำหนด coverage targets

1. กำหนด target coverage (lines, branches, functions, statements)
2. กำหนด coverage targets ต่อ module
3. กำหนด coverage targets สำหรับ critical paths
4. กำหนด minimum coverage thresholds
5. ตั้งค่า coverage ใน CI/CD

### 6. Improve Unit Tests

ปรับปรุม unit tests

1. ทำ `/test-function` เพื่อเขียน unit tests
2. Test pure functions ทั้งหมด
3. Test utility functions ทั้งหมด
4. Test business logic ทั้งหมด
5. Test error handling paths
6. Test edge cases และ boundary conditions
7. ปรับปรุง test naming ให้ชัดเจน
8. เพิ่ม edge cases และ boundary conditions
9. ใช้ test doubles อย่างเหมาะสม
10. ปรับปรุง test readability

### 7. Improve Integration Tests

ปรับปรุม integration tests

1. Test API endpoints ทั้งหมด
2. Test database operations ทั้งหมด
3. Test external service integrations
4. Test authentication/authorization flows
5. Test data validation
6. Test error scenarios
7. ทดสอบ interactions ระหว่าง components
8. ใช้ test data ที่ realistic
9. ปรับปรุง test isolation

### 8. Improve E2E Tests

ปรับปรุม e2e tests

1. ทำ `/test-e2e` เพื่อเขียน e2e tests
2. Test critical user flows
3. Test authentication flows
4. Test form submissions
5. Test navigation flows
6. Test error scenarios
7. Test cross-browser compatibility
8. ปรับปรุง test stability
9. เพิ่ม visual regression tests
10. ปรับปรุง test performance

### 9. Add Test Utilities

เพิ่ม test utilities ที่มีประโยชน์

1. สร้าง test helpers สำหรับ common operations
2. สร้าง test fixtures สำหรับ mock data
3. สร้าง test factories สำหรับ creating test data
4. สร้าง custom matchers/assertions
5. สร้าง test setup/teardown utilities
6. สร้าง mock utilities

### 10. Improve Test Quality

ปรับปรุมคุณภาพ tests

1. ลบ flaky tests
2. ลบ slow tests หรือ optimize
3. ลบ duplicate tests
4. ปรับปรุม test naming conventions
5. ปรับปรุม test organization
6. Add test documentation

### 11. Setup Coverage Enforcement

ตั้งค่า coverage enforcement

1. ตั้งค่า coverage thresholds ใน config
2. ตั้งค่า coverage ใน CI/CD pipeline
3. ตั้งค่า pre-commit hooks สำหรับ coverage
4. ตั้งค่า coverage reporting
5. ตั้งค่า coverage badges

### 12. Verify Improvements

ตรวจสอบผลลัพธ์การปรับปรุง

1. ทำตาม `/write-test` เพื่อเขียน `unit tests` สำหรับ refactored code
2. ตรวจสอบ `test coverage`
3. รัน `integration tests`
4. ตรวจสอบว่า `behavior` เดิมยังคงอยู่
5. วัดผลลัพธ์ testability improvements

## Rules

### 1. Dependency Injection

ใช้ dependency injection เพื่อแยก dependencies ออกจาก business logic

- ใช้ `interfaces` สำหรับ external dependencies
- Inject dependencies ผ่าน `constructor` หรือ `parameters`
- ห้าม hard-coded dependencies ใน business logic
- สร้าง `mock implementations` สำหรับ testing
- ใช้ `dependency injection container` ถ้าจำเป็น

### 2. Separation of Concerns

แยก concerns ตาม Single Responsibility Principle

- แต่ละ `function/class` มี responsibility เดียว
- แยก business logic จาก infrastructure
- แยก data access จาก business logic
- แยก presentation จาก logic
- ใช้ `layers` หรือ `modules` สำหรับ separation

### 3. Loose Coupling

ลด coupling ระหว่าง components เพื่อให้ทดสอบได้ง่าย

- ใช้ `interfaces` แทน `concrete implementations`
- ใช้ `dependency inversion principle`
- ลบ direct dependencies ระหว่าง components
- ใช้ `events` หรือ `message passing`
- หลีกเลี่ยง `global state`

### 4. Testability First

ออกแบบโค้ดให้ทดสอบได้ตั้งแต่แรก

- ออกแบบโค้ดให้ทดสอบได้ตั้งแต่แรก
- เขียน tests ก่อนหรือ parallel กับ implementation
- ใช้ `TDD` ถ้าเหมาะสม
- ตรวจสอบ `test coverage` อย่างสม่ำเสมอ
- Refactor เพื่อเพิ่ม testability

### 5. Test Coverage

เน้น coverage ที่มีคุณภาพ

- เน้น critical paths ก่อน
- เน้น business logic ก่อน
- เน้น error handling ก่อน
- ไม่เน้น coverage ตัวเลขเท่านั้น
- เขียน tests ที่ meaningful

### 6. Test Quality

เขียน tests ที่มีคุณภาพ

- Tests ต้อง be independent
- Tests ต้อง be fast
- Tests ต้อง be reliable
- Tests ต้อง be maintainable
- Tests ต้อง be readable

### 7. Test Organization

จัดระเบียบ tests อย่างเหมาะสม

- Group tests ตาม functionality
- ใช้ descriptive test names
- ใช้ test suites สำหรับ related tests
- ใช้ test categories (unit, integration, e2e)
- ใช้ test tags สำหรับ filtering

### 8. Mocking

ใช้ mocks อย่างเหมาะสม

- Mock external dependencies
- Mock database operations
- Mock API calls
- ไม่ mock implementation details
- ใช้ real implementations ถ้าเป็นไปได้

### 9. Coverage Targets

กำหนด coverage targets อย่าง realistic

- กำหนด targets ตาม criticality
- กำหนด targets ตาม module
- กำหนด targets ตาม risk
- ไม่ target 100% coverage
- เน้น meaningful coverage

### 10. Code Quality

ทำตาม `/refactor` เพื่อรักษาคุณภาพโค้ด

- ทำตาม `/refactor` เสมอ
- ลบ code duplication
- ใช้ meaningful names
- เขียน code ที่อ่านง่าย
- ทำตาม best practices ของภาษาที่ใช้

## Expected Outcome

- โค้ดที่ทดสอบได้ง่าย
- Test coverage สูงขึ้น
- Dependencies ที่ชัดเจนและ injectable
- Pure functions สำหรับ business logic
- Loose coupling ระหว่าง components
- Tests ที่เขียนง่ายและรักษาได้
- Test coverage ตรง target
- Dead code ถูกลบออก
- Unused dependencies ถูกลบ
- Unit tests ครอบคลุม business logic
- Integration tests ครอบคลุม API/database
- E2E tests ครอบคลุม critical flows
- Test quality สูง (ไม่ flaky, เร็ว)
- Coverage enforcement ใน CI/CD
- Bundle size ลดลงจากการลบ dead code
