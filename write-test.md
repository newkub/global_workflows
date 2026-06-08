---
title: Write Test
description: เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ใช้ได้กับทุกภาษา
auto_execution_mode: 3
---

## Goal

เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ตรงตาม location ที่กำหนด ใช้ได้กับทุก programming language

## Execute

### 1. Write Spec

1. ทำ `/write-spec` เพื่อสร้างหรืออัพเดท SPEC.md ก่อนเขียน test

### 2. Analyze Test Requirements

1. ตรวจสอบ test framework และ conventions ที่ใช้ในโปรเจกต์
2. อ่านโค้ดที่ต้องการ test เพื่อเข้าใจ logic, edge cases และ dependencies
3. ระบุประเภท test ที่ต้องเขียน (`unit`, `integration`, `e2e`, `component`, `contract`)
4. กำหนด coverage goals สำหรับส่วนที่จะ test (เช่น 80% business logic)

### 3. Write Tests by Type

เขียน test ตามประเภทและ conventions ของภาษาที่ใช้

1. **Unit Tests**
   - Location: ใกล้กับ source code (เช่น `*_test.go`, `*.test.ts`, `test_*.py`)
   - Focus: test functions, methods, classes แยกส่วน
   - Pattern: `AAA` (`Arrange`, `Act`, `Assert`)

2. **Integration Tests**
   - Location: `tests/integration/` หรือตาม conventions ของภาษา
   - Focus: test การทำงานร่วมกันของ modules, services, database
   - Pattern: test data flow ตั้งแต่ input จนถึง output

3. **Component/UI Tests**
   - Location: ใกล้กับ components (เช่น `__tests__/`, `*.spec.*`)
   - Focus: test rendering, interactions, state changes
   - Pattern: simulate user actions, assert output

4. **E2E Tests**
   - Location: `tests/e2e/` หรือ `e2e/`
   - Focus: test critical user flows จาก start ถึง end
   - Pattern: simulate real user journeys

### 4. Sync with Spec

1. อัพเดท SPEC.md ด้วย test cases ที่เขียนแล้ว
2. ตรวจสอบว่า test cases ใน SPEC.md ตรงกับ tests ที่เขียนจริง
3. อัพเดท status เป็น ✅ สำหรับ test cases ที่เขียนแล้ว
4. อัพเดท coverage ตามผลลัพธ์จริงจาก test run

### 5. Verify and Validate

1. รัน tests ทั้งหมดเพื่อตรวจสอบว่าผ่านทุก test
2. ตรวจสอบ test coverage ให้บรรลุ goals ที่ตั้งไว้
3. ตรวจสอบว่า tests ไม่ `brittle` (ไม่พังง่ายเมื่อ refactor)
4. รัน tests ใน CI environment เพื่อตรวจสอบความเสถียร
5. รัน `/update-reference` สำหรับไฟล์ที่เพิ่ม

## Rules

### 1. Universal Test Principles

หลักการทั่วไปที่ใช้ได้กับทุกภาษา

- ตั้งชื่อ test ชัดเจน: `should [expected behavior] when [condition]`
- Follow `AAA` pattern (`Arrange`, `Act`, `Assert`)
- Test แค่สิ่งเดียวต่อ test case (`Single Responsibility`)
- ไม่แชร์ state ระหว่าง tests (isolated)
- Test ทั้ง `happy path`, `edge cases`, `error cases`, `boundary conditions`
- ใช้ `parameterized tests` สำหรับกรณีที่ test ซ้ำๆ กันหลายค่า

### 2. Language-Specific Conventions

ใช้ conventions ตามภาษาที่ใช้

- `TypeScript/JavaScript`: `*.test.ts`, `vitest`, `jest`, `describe/it`
- `Go`: `*_test.go`, `testing` package, `t.Run`, table-driven tests
- `Python`: `test_*.py`, `pytest`, `unittest`, fixtures
- `Rust`: `#[cfg(test)]`, `tests/` directory, `assert!`, `#[test]`
- `Java/Kotlin`: `*Test.java`, `JUnit`, `@Test`, `@BeforeEach`
- `C#`: `*Tests.cs`, `xUnit`, `NUnit`, `[Fact]`, `[Theory]`
- `Ruby`: `*_spec.rb`, `rspec`, `describe/it`
- `PHP`: `*Test.php`, `PHPUnit`, `test*`

### 3. File Organization

จัดโครงสร้าง test files ตามประเภท

- **Unit tests**: ใกล้กับ source code (เดียวกันหรือ `__tests__/`)
- **Integration tests**: ใน `tests/integration/` หรือ `tests/`
- **E2E tests**: ใน `tests/e2e/` หรือ `e2e/`
- **Test utilities**: ใน `tests/utils/`, `testhelpers/`, หรือ fixtures
- **Test data**: ใช้ factories, fixtures, builders สร้าง data

### 4. Mocking and Dependencies

จัดการ dependencies อย่างเหมาะสม

- Mock external dependencies (`API`, `database`, `file system`) เฉพาะที่จำเป็น
- ใช้ interfaces/ports สำหรับ test doubles (`stubs`, `mocks`, `fakes`, `spies`)
- Restore/cleanup mocks หลังแต่ละ test
- ไม่ mock สิ่งที่เป็นส่วนหลักของ logic ที่จะ test
- ไม่ hardcode sensitive data ใน tests

### 5. Coverage and Quality

รักษาคุณภาพ test suite

- `100% coverage` สำหรับทุก test cases ที่ระบุใน spec
- เขียน test case ให้ครบถ้วนตาม spec ไม่ขาดเคสใด
- Tests ต้องรวดเร็ว (`< 10ms` ต่อ unit test)
- Tests ต้อง reliable (ไม่ flaky)
- ใช้ async/await หรือ equivalents สำหรับ async operations

## Expected Outcome

- Test files อยู่ใน location ที่ถูกต้องตาม conventions
- Tests ครอบคลุมทุกกรณีใช้งาน (`happy path`, `edge cases`, `errors`)
- Tests ไม่ `brittle` และรวดเร็ว
- โค้ดมีความถูกต้องและเสถียร
