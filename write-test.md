---
title: Write Test
description: เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ใช้ได้กับทุกภาษา
auto_execution_mode: 3
related_workflows:
  - /review-architecture
  - /improve-naming-convention
  - /write-spec
  - /improve-test-coverage
  - /run-test-coverage
  - /follow-stryker-mutator
  - /follow-mutants-rs
  - /follow-code-quality
---

## Goal

เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ตรงตาม location ที่กำหนด ใช้ได้กับทุก programming language

## Scope

เขียน test files ทั้งใน global workflows และ workspace โดยทุก workspace ต้องเขียนให้ `/follow-content-quality`

## Execute

### 1. Review Architecture

ทำ `/review-architecture` ก่อนเขียน test เพื่อแก้ critical issues

### 2. Organize Test Files

ย้าย test files ที่กระจัดกระจายมาไว้ใน `tests/` ตาม Rule 3

### 3. Write Spec

ทำ `/write-spec` เพื่อสร้างหรืออัพเดท spec ก่อนเขียน test

### 4. Improve Naming

ทำ `/improve-naming-convention` เพื่อปรับปรุง naming conventions ก่อนเขียน test

### 5. Detect Test Framework And Define Strategy

ตรวจสอบ test framework และกำหนด testing strategy

1. ตรวจสอบ `package.json` หรือ `Cargo.toml` สำหรับ test dependencies (`vitest`, `jest`, `pytest`, `go test`)
2. ตรวจสอบ config files (`vitest.config.ts`, `jest.config.js`, `pytest.ini`)
3. ตรวจสอบ coverage tools ที่ framework รองรับ (`c8`, `istanbul`, `coverage.py`, `go test -cover`)
4. กำหนด test pyramid ที่เหมาะสม (unit, integration, e2e)
5. กำหนด test types ที่จำเป็น (unit, integration, e2e, contract, property-based, mutation, performance, security, accessibility, visual regression)
6. กำหนด coverage targets สำหรับแต่ละ test type
7. กำหนด test priorities ตาม criticality
8. กำหนด test environments (local, staging, production)

### 6. Write Tests

เขียน test ตามประเภทและ conventions ของภาษาที่ใช้ ครอบคลุม happy paths, error paths, edge cases, และ boundary conditions

### 7. Verify Coverage And Formal Verification

1. ทำ `/improve-test-coverage` เพื่อวิเคราะห์ coverage gaps และบรรลุ 100%
2. ทำ `/run-test-coverage` เพื่อ verify coverage ทุก category (lines, branches, functions, statements)
3. ถ้า project มี critical components ให้ทำ formal verification ตาม `/improve-test-coverage` Rule 4

### 8. Sync and Verify

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

### 6. Performance

- Unit tests: `< 10ms` ต่อ test
- Integration tests: `< 100ms` ต่อ test
- ใช้ `parallel execution` เมื่อ tests ไม่ dependent กัน
- Coverage verification และ 100% enforcement อยู่ใน `/improve-test-coverage` และ `/run-test-coverage`

### 7. Testing Strategy

กำหนดและทำตาม testing strategy ที่ครบถ้วน

- Test pyramid: 70% unit, 20% integration, 10% e2e
- Test ทั้ง happy path, edge cases, error cases, boundary conditions
- Test ทั้ง positive และ negative cases
- Test ทั้ง functional และ non-functional requirements
- Test ทั้ง manual และ automated scenarios
- Test ทั้ง smoke, sanity, regression, acceptance
- Test ทั้ง backward และ forward compatibility
- Test ทั้ง concurrency และ race conditions
- Test ทั้ง memory leaks และ resource cleanup
- Test ทั้ง error handling และ recovery
- Test ทั้ง accessibility และ visual consistency

### 8. CI/CD and Documentation

- รัน tests ในทุก pull request และ commit
- ตั้งค่า `test coverage thresholds` ใน CI
- รัน `lint` ก่อน `test` ใน pipeline
- Document test setup ใน comments สำหรับ tests ที่ซับซ้อน
- เขียน `README` ใน `tests/` อธิบายวิธีรัน
- อัพเดท test docs เมื่อ logic เปลี่ยน
- รัน mutation tests ใน CI เพื่อตรวจสอบ test quality
- รัน security tests ใน CI เพื่อตรวจสอบ vulnerabilities
- รัน performance tests ใน CI เพื่อตรวจสอบ regressions

## Expected Outcome

- Test files อยู่ใน location ที่ถูกต้องตาม conventions
- Testing strategy ครอบคลุมทุก test types ที่จำเป็น
- Tests ครอบคลุมทุกกรณีใช้งาน (`happy path`, `edge cases`, `errors`)
- Coverage 100% ผ่าน `/improve-test-coverage` และ `/run-test-coverage`
- Formal verification สำหรับ critical components ผ่าน `/improve-test-coverage`
- Tests ไม่ `brittle` และรวดเร็ว
- โค้ดมีความถูกต้องและเสถียร
- SPEC.md ถูกอัพเดทด้วย test cases ที่เขียนแล้ว
- Test quality สูงด้วย mutation testing
- Security และ performance ถูกตรวจสอบ
