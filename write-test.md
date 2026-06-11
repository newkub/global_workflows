---
title: Write Test
description: เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ใช้ได้กับทุกภาษา
auto_execution_mode: 3
related_workflows:
  - /write-code-explicit
---

## Goal

เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ตรงตาม location ที่กำหนด ใช้ได้กับทุก programming language

## Execute

### 1. Write Spec

1. ทำ `/write-spec` เพื่อสร้างหรืออัพเดท SPEC.md ก่อนเขียน test

### 2. Analyze Requirements

1. ตรวจสอบ test framework และ conventions ที่ใช้ในโปรเจกต์
2. อ่าน `package.json`, `Cargo.toml`, หรือ package manifest ตามภาษา
3. ตรวจสอบ test frameworks และ test utils ที่มีอยู่
4. อ่านโค้ดที่ต้องการ test เพื่อเข้าใจ logic, edge cases และ dependencies
5. ระบุประเภท test ที่ต้องเขียน (`unit`, `integration`, `e2e`, `component`, `contract`)
6. กำหนด coverage goals เป็น 100% ทุก category

### 3. Write Tests

เขียน test ตามประเภทและ conventions ของภาษาที่ใช้

1. เขียน unit tests ใกล้กับ source code ใช้ `AAA` pattern
2. เขียน integration tests ใน `tests/integration/` test data flow
3. เขียน component tests ใกล้กับ components simulate user actions
4. เขียน e2e tests ใน `tests/e2e/` test critical user flows

### 4. Sync and Verify

1. อัพเดท SPEC.md ด้วย test cases ที่เขียนแล้ว
2. รัน `/update-reference` สำหรับไฟล์ที่เพิ่ม
3. รายงานสถานะ test files ที่เขียนเสร็จ

## Rules

### 1. Test Principles

หลักการทั่วไปที่ใช้ได้กับทุกภาษา:

- ตั้งชื่อ test: `should [expected behavior] when [condition]`
- Follow `AAA` pattern (`Arrange`, `Act`, `Assert`)
- Test แค่สิ่งเดียวต่อ test case (`Single Responsibility`)
- ไม่แชร์ state ระหว่าง tests (isolated)
- Test ทั้ง `happy path`, `edge cases`, `error cases`, `boundary conditions`
- ใช้ `parameterized tests` สำหรับกรณีที่ test ซ้ำๆ กันหลายค่า

### 2. Language Conventions

ใช้ conventions ตามภาษาที่ใช้:

- `TypeScript/JavaScript`: `*.test.ts`, `vitest`, `jest`, `describe/it`
- `Go`: `*_test.go`, `testing` package, `t.Run`, table-driven tests
- `Python`: `test_*.py`, `pytest`, `unittest`, fixtures
- `Rust`: `#[cfg(test)]`, `tests/` directory, `assert!`, `#[test]`
- `Java/Kotlin`: `*Test.java`, `JUnit`, `@Test`, `@BeforeEach`
- `C#`: `*Tests.cs`, `xUnit`, `NUnit`, `[Fact]`, `[Theory]`
- `Ruby`: `*_spec.rb`, `rspec`, `describe/it`
- `PHP`: `*Test.php`, `PHPUnit`, `test*`

### 3. File Organization

จัดโครงสร้าง test files ตามประเภท:

- Unit tests: อยู่ใกล้กับ source code (`.test.ts`, `.test.tsx`, `*_test.go`, `test_*.py`)
- Integration tests: ใน `tests/integration/`
- E2E tests: ใน `tests/e2e/`
- Test utilities: ใน `tests/utils/`
- Test data: ใน `tests/fixtures/`

ตัวอย่าง folder structure:

```
project/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   └── services/
│       ├── auth.ts
│       └── auth.test.ts
└── tests/
    ├── integration/
    ├── e2e/
    ├── utils/
    └── fixtures/
```

### 4. Naming and Data

ตั้งชื่อและจัดการ test data:

- Test files: ใช้ชื่อเดียวกับ source ต่อท้ายด้วย `.test`, `.spec`, หรือ `_test`
- Test cases: `should [expected behavior] when [condition]`
- ใช้ `factories`, `fixtures`, `builders` สร้าง test data
- Clean up test data หลังแต่ละ test (`afterEach`, `teardown`)
- ไม่ hardcode sensitive data (passwords, API keys, tokens)

### 5. Mocking and Security

จัดการ dependencies และความปลอดภัย:

- Mock external dependencies (`API`, `database`, `file system`) เฉพาะที่จำเป็น
- ใช้ interfaces/ports สำหรับ test doubles (`stubs`, `mocks`, `fakes`, `spies`)
- Restore/cleanup mocks หลังแต่ละ test
- ไม่ hardcode credentials ใน test files
- ใช้ environment variables สำหรับ secrets
- ใช้ `test databases` แยกจาก production

### 6. Performance and Coverage

รักษาประสิทธิภาพและ coverage:

- Unit tests: `< 10ms` ต่อ test
- Integration tests: `< 100ms` ต่อ test
- ใช้ `parallel execution` เมื่อ tests ไม่ dependent กัน
- `100% coverage` สำหรับทุก test cases ที่ระบุใน spec
- ตรวจสอบ coverage ด้วย tools (เช่น `c8`, `istanbul`, `coverage.py`)
- ตั้งค่า coverage thresholds ใน CI เป็น 100% ทุก category

### 7. CI/CD and Documentation

ผนวก tests เข้ากับ CI/CD และเขียน documentation:

- รัน tests ในทุก pull request และ commit (pre-commit hooks)
- ตั้งค่า `test coverage thresholds` ใน CI
- รัน `lint` ก่อน `test` ใน pipeline
- Document test setup ใน comments สำหรับ tests ที่ซับซ้อน
- เขียน `README` ใน `tests/` อธิบายวิธีรัน
- อัพเดท test docs เมื่อ logic เปลี่ยน

## Expected Outcome

- Test files อยู่ใน location ที่ถูกต้องตาม conventions
- Tests ครอบคลุมทุกกรณีใช้งาน (`happy path`, `edge cases`, `errors`)
- Tests ไม่ `brittle` และรวดเร็ว
- โค้ดมีความถูกต้องและเสถียร
- SPEC.md ถูกอัพเดทด้วย test cases ที่เขียนแล้ว

