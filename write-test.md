---
title: Write Test
description: เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ใช้ได้กับทุกภาษา
auto_execution_mode: 3
related_workflows:
  - /review-architecture
  - /improve-naming
  - /write-spec
  - /follow-stryker-mutator
  - /follow-mutants-rs
---

## Goal

เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ตรงตาม location ที่กำหนด ใช้ได้กับทุก programming language

## Scope

เขียน test files ทั้งใน global workflows และ workspace โดยทุก workspace ต้องเขียนให้ `/follow-content-quality`

## Execute

### 0. Review Architecture

ทำ `/review-architecture` ก่อนเขียน test เพื่อแก้ critical issues

### 1. Organize Test Files

ย้าย test files ที่กระจัดกระจายมาไว้ใน `tests/` ตาม Rule 3

### 2. Write Spec

ทำ `/write-spec` เพื่อสร้างหรืออัพเดท spec ก่อนเขียน test

### 3. Improve Naming

ทำ `/improve-naming` เพื่อปรับปรุง naming conventions ก่อนเขียน test

### 4. Write Tests

เขียน test ตามประเภทและ conventions ของภาษาที่ใช้

### 5. Sync and Verify

อัพเดท SPEC.md ด้วย test cases ที่เขียนแล้ว และรัน `/update-references`

## Rules

### 1. Test Principles

- ตั้งชื่อ test: `should [expected behavior] when [condition]`
- Follow `AAA` pattern (`Arrange`, `Act`, `Assert`)
- Test แค่สิ่งเดียวต่อ test case (`Single Responsibility`)
- ไม่แชร์ state ระหว่าง tests (`isolated`)
- Test ทั้ง `happy path`, `edge cases`, `error cases`, `boundary conditions`
- ใช้ `parameterized tests` สำหรับกรณีที่ test ซ้ำๆ กันหลายค่า

### 2. Language Conventions

ทำตาม conventions ของภาษาที่ใช้:

| Language | File Pattern | Framework | Conventions |
|----------|-------------|-----------|-------------|
| TypeScript/JavaScript | `*.test.ts` | vitest, jest | `describe/it` |
| Go | `*_test.go` | testing | `t.Run`, table-driven |
| Python | `test_*.py` | pytest, unittest | fixtures |
| Rust | `#[cfg(test)]` | - | `assert!`, `#[test]` |
| Java/Kotlin | `*Test.java` | JUnit | `@Test`, `@BeforeEach` |
| C# | `*Tests.cs` | xUnit, NUnit | `[Fact]`, `[Theory]` |
| Ruby | `*_spec.rb` | rspec | `describe/it` |
| PHP | `*Test.php` | PHPUnit | `test*` |

### 3. File Organization

จัดโครงสร้าง test files ตามประเภท:

- Unit tests: ใน `tests/unit/` แยกจาก source code
- Integration tests: ใน `tests/integration/`
- E2E tests: ใน `tests/e2e/`
- Test utilities: ใน `tests/utils/`
- Test data: ใน `tests/fixtures/`

ตัวอย่าง folder structure:

```
tests/
├── unit/
│   ├── components/
│   │   └── Button.test.tsx
│   └── services/
│       └── auth.test.ts
├── component/          # (optional) Component-specific tests
├── integration/
│   ├── adapters/      # (optional) Database, API fixtures
│   ├── db/            # (optional) Database test fixtures
│   └── api/           # (optional) API endpoint tests
├── e2e/
│   ├── flows/
│   └── pages/
├── utils/
│   ├── helpers/        # (optional) Test helper functions
│   ├── mocks/          # (optional) Mock implementations
│   ├── setup/          # (optional) Test setup files
│   └── assertions/     # (optional) Custom assertions
├── fixtures/
│   ├── data/           # (optional) Static test data files
│   ├── factories/      # (optional) Test data factories
│   ├── mocks/          # (optional) Mock data and stubs
│   └── snapshots/      # (optional) Snapshot testing
└── seed/              # (optional) Database seeding
```

### 4. Naming and Data

- Test files: ใช้ชื่อเดียวกับ source ต่อท้ายด้วย `.test`, `.spec`, หรือ `_test`
- Test cases: `should [expected behavior] when [condition]`
- ใช้ `factories`, `fixtures`, `builders` สร้าง test data
- Clean up test data หลังแต่ละ test (`afterEach`, `teardown`)
- ไม่ hardcode sensitive data (passwords, API keys, tokens)

### 5. Mocking and Security

- Mock external dependencies เฉพาะที่จำเป็น
- ใช้ interfaces/ports สำหรับ test doubles
- Restore/cleanup mocks หลังแต่ละ test
- ไม่ hardcode credentials ใน test files
- ใช้ environment variables สำหรับ secrets
- ใช้ `test databases` แยกจาก production

### 6. Performance and Coverage

- Unit tests: `< 10ms` ต่อ test
- Integration tests: `< 100ms` ต่อ test
- ใช้ `parallel execution` เมื่อ tests ไม่ dependent กัน
- `100% coverage` สำหรับทุก test cases ที่ระบุใน spec
- ตรวจสอบ coverage ด้วย tools
- ตั้งค่า coverage thresholds ใน CI เป็น 100%

### 7. CI/CD and Documentation

- รัน tests ในทุก pull request และ commit
- ตั้งค่า `test coverage thresholds` ใน CI
- รัน `lint` ก่อน `test` ใน pipeline
- Document test setup ใน comments สำหรับ tests ที่ซับซ้อน
- เขียน `README` ใน `tests/` อธิบายวิธีรัน
- อัพเดท test docs เมื่อ logic เปลี่ยนี่ยน

## Expected Outcome

- Test files อยู่ใน location ที่ถูกต้องตาม conventions
- Tests ครอบคลุมทุกกรณีใช้งาน (`happy path`, `edge cases`, `errors`)
- Tests ไม่ `brittle` และรวดเร็ว
- โค้ดมีความถูกต้องและเสถียร
- SPEC.md ถูกอัพเดทด้วย test cases ที่เขียนแล้ว
