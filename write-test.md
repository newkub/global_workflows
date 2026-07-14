---
title: Write Test
description: เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ใช้ได้กับทุกภาษา
auto_execution_mode: 3
related:
  - /deep-review
  - /review-code-quality
  - /write-spec
  - /review-testing
  - /run-test-coverage
  - /follow-stryker-mutator
  - /follow-mutants-rs
  - /follow-code-quality
  - /follow-testing
  - /follow-vitest
  - /follow-playwright
---

## Goal

เขียน test ที่มีคุณภาพสูง ครอบคลุมทุกกรณีใช้งาน ตรงตาม location ที่กำหนด ใช้ได้กับทุก programming language

## Scope

เขียน test files ทั้งใน global workflows และ workspace โดยทุก workspace ต้องเขียนให้ `/follow-content-quality`

## Execute

### 1. Review Architecture

ทำ `/deep-review` ก่อนเขียน test เพื่อแก้ critical issues

### 2. Detect Test Framework And Define Strategy

ตรวจสอบ test framework และกำหนด testing strategy ก่อนเขียน spec

1. ตรวจสอบ `package.json` หรือ `Cargo.toml` สำหรับ test dependencies (`vitest`, `jest`, `pytest`, `go test`)
2. ตรวจสอบ config files (`vitest.config.ts`, `jest.config.js`, `pytest.ini`)
3. ตรวจสอบ coverage tools ที่ framework รองรับ (`c8`, `istanbul`, `coverage.py`, `go test -cover`)
4. กำหนด test pyramid ที่เหมาะสม (unit, integration, e2e)
5. กำหนด test types ที่จำเป็น (unit, integration, e2e, contract, property-based, mutation, performance, security, accessibility, visual regression)
6. กำหนด coverage targets สำหรับแต่ละ test type
7. กำหนด test priorities ตาม criticality
8. กำหนด test environments (local, staging, production)

### 3. Analyze Source Code

อ่านและวิเคราะห์ source code ที่จะ test ก่อนเขียน

1. อ่าน source file ทั้งหมดที่เกี่ยวข้อง (handler, service, utils, types)
2. ระบุทุก branch และ code path (`if/else`, `try/catch`, `switch`, ternary, optional chaining)
3. ระบุ external dependencies ที่ต้อง mock (database, API, auth, email, payment)
4. ระบุ input parameters และ validation rules (Zod schemas, type constraints)
5. ระบุ output shapes และ error response patterns
6. ระบุ security-critical logic (auth checks, permission checks, userId injection, sanitization)
7. สร้าง branch map: นับจำนวน branches ทั้งหมดเพื่อคำนวณ minimum test cases ที่จำเป็น

### 4. Organize Test Files

ย้าย test files ที่กระจัดกระจายมาไว้ใน location ที่ถูกต้องตาม Rule 3

### 5. Write Spec

ทำ `/write-spec` เพื่อสร้างหรืออัพเดท spec ก่อนเขียน test โดย spec ต้องครอบคลุม test cases ทั้งหมดที่ระบุจาก Step 3

### 6. Improve Naming

ทำ `/review-code-quality` เพื่อปรับปรุง naming conventions ก่อนเขียน test

### 7. Write Tests

เขียน test ตามประเภทและ conventions ของภาษาที่ใช้ ครอบคลุมทุก category ต่อไปนี้:

**Required categories (ทุก handler/function):**

1. **Happy path**: input ที่ถูกต้อง -> expected output
2. **Error path**: dependency throw -> error response ที่ถูกต้อง
3. **Edge cases**: empty input, null/undefined, boundary values (min, max, min-1, max+1)
4. **Unauthorized**: auth missing หรือ invalid -> throw หรือ error response
5. **Input validation**: invalid input ที่ผิด schema -> validation error

**Conditional categories (เมื่อมี logic ที่เกี่ยวข้อง):**

6. **Permission/RBAC**: user ไม่มี permission -> deny
7. **IDOR/Ownership**: user เข้าถึง resource ของ user อื่น -> deny
8. **Sanitization**: user input ที่มี malicious content -> sanitized output
9. **userId injection**: ตรวจสอบว่า userId มาจาก auth ไม่ใช่จาก input (security)
10. **Empty results**: query return empty array/undefined -> handle ถูกต้อง
11. **Boundary values**: ค่า min/max ของ numeric input
12. **Optional fields**: ส่งและไม่ส่ง optional fields -> ทำงานถูกต้องทั้งคู่
13. **Concurrency**: race conditions, parallel calls (เฉพาะ stateful operations)

**Use `parameterized tests` (`it.each`, `table-driven`) สำหรับ:**

- Boundary values หลายค่า (เช่น rating 1, 2, 3, 4, 5)
- Input validation หลายกรณี (เช่น missing required fields แต่ละ field)
- Permission matrix (role x action)

### 8. Run Tests

รัน tests หลังเขียนเสร็จเพื่อ verify ว่าผ่านทั้งหมด

1. รัน `bun run test` หรือคำสั่งที่เทียบเท่าสำหรับภาษาอื่น
2. แก้ไข failing tests จนผ่านทั้งหมด
3. ตรวจสอบว่าไม่มี test ที่ pass เพราะเหตุผลผิด (false positive)
4. ตรวจสอบว่า error path tests จริงๆ ทดสอบ error ไม่ใช่แค่ทดสอบว่าไม่ throw

### 9. Verify Coverage And Formal Verification

1. ทำ `/review-testing` เพื่อวิเคราะห์ coverage gaps และบรรลุ 100%
2. ทำ `/run-test-coverage` เพื่อ verify coverage ทุก category (lines, branches, functions, statements)
3. ถ้า project มี critical components ให้ทำ formal verification ตาม `/review-testing` Rule 4

### 10. Sync and Verify

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

**Colocated vs Separate:**

- **Colocated** (`__tests__/` ข้าง source): เหมาะสำหรับ unit tests ที่ test specific module/handler
- **Separate** (`tests/` directory): เหมาะสำหรับ integration, e2e, และ shared test utilities
- **Follow existing pattern**: ถ้า project มี colocated tests อยู่แล้ว ให้ตาม pattern นั้น
- **Don't mix**: อย่ามีทั้ง colocated และ separate สำหรับ unit tests ในหลายระดับ

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
- Coverage verification และ 100% enforcement อยู่ใน `/review-testing` และ `/run-test-coverage`

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

### 9. Test Code Quality

- **DRY**: extract repeated test setup และ handler extraction เป็น helper functions ใน `test-utils.ts`
- **No type casting**: หลีกเลี่ยง `as unknown as` patterns ซ้ำๆ สร้าง typed helper แทน
- **Descriptive assertions**: ใช้ `expect.objectContaining` และ `expect.arrayContaining` เพื่อ assert เฉพาะ fields ที่สำคัญ
- **Test readability**: test code ต้องอ่านได้เหมือน documentation ของ behavior
- **Avoid test interdependence**: แต่ละ test ต้องรันได้อิสระ ไม่ขึ้นกับ order หรือ state จาก test อื่น
- **Shared mock factories**: ใช้ shared mock factories จาก `test-utils.ts` ไม่สร้าง mock ใหม่ในแต่ละ test file

### 10. What NOT to Test

- **Trivial getters/setters**: ถ้าไม่มี logic ไม่ต้อง test
- **Third-party libraries**: test เฉพาะ integration ของเรา ไม่ test library เอง
- **Implementation details**: test behavior ไม่ใช่ว่าเรียก function อะไรบ้าง (เว้นแต่เป็น security-critical)
- **Configuration objects**: ถ้าเป็นแค่ data ไม่มี logic
- **Type-only code**: ถ้า TypeScript types รับประกันแล้ว ไม่ต้อง test runtime
- **Framework boilerplate**: route registration, middleware chain ที่ framework รับผิดชอบ

### 11. Assertion Quality

- **Assert behavior ไม่ใช่ implementation**: ตรวจสอบ output/result ไม่ใช่ว่าเรียก function อะไร
- **Assert error shape**: ตรวจสอบ error message และ structure ไม่ใช่แค่ว่ามี error
- **Use specific matchers**: `toEqual` สำหรับ deep equality, `objectContaining` สำหรับ partial, `toHaveLength` สำหรับ arrays
- **Assert side effects**: ถ้า function มี side effect (write DB, send email) ต้อง assert ด้วย
- **Negative assertions**: ใช้ `not.toHaveBeenCalled()` เมื่อต้องยืนยันว่า function ไม่ถูกเรียก
- **Avoid fragile assertions**: ไม่ assert ค่าที่ non-deterministic (timestamps, UUIDs) ใช้ `expect.any(Date)` หรือ `expect.any(String)`

### 12. Security Test Patterns

- **Auth bypass**: ส่ง request โดยไม่มี auth -> ต้อง reject
- **IDOR**: user A เข้าถึง resource ของ user B -> ต้อง deny
- **userId injection**: ตรวจสอบว่า userId มาจาก `auth.userId` ไม่ใช่จาก `input.userId`
- **Sanitization**: ส่ง XSS/malicious input -> ต้อง sanitized ก่อนเก็บ
- **Permission matrix**: ทุก role x action ต้องมี test (ใช้ `it.each`)
- **Rate limiting**: เกิน rate limit -> ต้อง reject
- **SQL injection**: ส่ง malicious input -> ต้องไม่ทำให้ query break
- **CSRF**: ส่ง request จาก origin อื่น -> ต้อง reject

### 13. Handler/Router Test Patterns

- **Extract handler**: ดึง handler จาก router object แล้วเรียกโดยตรงใน test
- **Mock dependencies**: mock service layer, auth, database, external APIs
- **Test input -> output mapping**: ส่ง input ผ่าน handler แล้วตรวจสอบ output
- **Test auth context**: ส่ง `context.auth` ที่ถูกต้องและไม่ถูกต้อง
- **Test error fallback**: เมื่อ service throw ต้อง return fallback ที่ถูกต้องตาม pattern (`safeResult` หรือ `tryHandler`)
- **Test sanitization call**: ตรวจสอบว่า `sanitizeUserContent` ถูกเรียกเมื่อมี user input
- **Test optional fields**: ส่งและไม่ส่ง optional fields -> ทั้งคู่ต้องทำงานถูกต้อง

## Expected Outcome

- Test files อยู่ใน location ที่ถูกต้องตาม conventions
- Testing strategy ครอบคลุมทุก test types ที่จำเป็น
- Source code ถูก analyze ครบทุก branch และ code path
- Tests ครอบคลุมทุกกรณีใช้งาน (`happy path`, `edge cases`, `errors`, `security`)
- Tests รันผ่านทั้งหมด ไม่มี false positive
- Coverage 100% ผ่าน `/review-testing` และ `/run-test-coverage`
- Formal verification สำหรับ critical components ผ่าน `/review-testing`
- Tests ไม่ `brittle` และรวดเร็ว
- Test code มีคุณภาพ (DRY, readable, typed helpers)
- โค้ดมีความถูกต้องและเสถียร
- SPEC.md ถูกอัพเดทด้วย test cases ที่เขียนแล้ว
- Test quality สูงด้วย mutation testing
- Security และ performance ถูกตรวจสอบ
