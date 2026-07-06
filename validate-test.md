---
title: Validate Test
description: ตรวจสอบคุณภาพและมาตรฐานของ tests ครบวงจร รวมทั้ง coverage, mutation, security, performance
auto_execution_mode: 3
related_workflows:
  - /write-test
  - /run-test
  - /run-test-coverage
  - /improve-test-coverage
  - /review-test-case
  - /review-test-result
  - /report
  - /follow-code-quality
---

## Goal

ตรวจสอบคุณภาพและมาตรฐานของ tests ครบวงจร เพื่อให้มั่นใจว่า test suite มีความครอบคลุม ถูกต้อง และเป็นไปตาม best practices

## Scope

ใช้สำหรับตรวจสอบ test quality ทั้ง unit, integration, e2e, และ test types อื่นๆ ในทุก project

## Execute

### 1. Validate Test Structure

1. ตรวจสอบ test files อยู่ใน location ที่ถูกต้องตาม project conventions
2. ตรวจสอบ test organization (unit, integration, e2e, fixtures, utils)
3. ตรวจสอบ naming conventions สม่ำเสมอ
4. ตรวจสอบว่าแต่ละ source file มี test file ที่เกี่ยวข้อง

### 2. Validate Test Coverage

1. ทำ `/run-test-coverage` เพื่อวิเคราะห์ coverage
2. ตรวจสอบ coverage ตามเป้าหมาย (lines, branches, functions, statements)
3. ระบุส่วนที่ยังไม่มี coverage และ critical paths
4. ถ้า project ใช้ `Vitest` ให้ตรวจสอบ `vitest.config.ts` สำหรับ coverage settings

### 3. Validate Test Quality

1. ทำ `/review-test-case` เพื่อตรวจสอบคุณภาพของแต่ละ test case
2. ตรวจสอบ AAA pattern (Arrange, Act, Assert)
3. ตรวจสอบ single responsibility ต่อ test case
4. ตรวจสอบ isolation ระหว่าง tests (no shared state)
5. ตรวจสอบครอบคลุม happy path, edge cases, error cases
6. ตรวจสอบ parameterized tests สำหรับกรณีที่ซ้ำๆ

### 4. Validate Testing Strategy

1. ตรวจสอบ test pyramid (70% unit, 20% integration, 10% e2e)
2. ตรวจสอบ test types ครบถ้วนตาม project needs
3. ตรวจสอบ coverage targets สำหรับแต่ละ test type
4. ตรวจสอบ test priorities ตาม criticality
5. ตรวจสอบ test environments (local, staging, production)

### 5. Validate Advanced Testing (Conditional)

1. ถ้า project มี critical components ให้ตรวจสอบ formal verification:
   - ระบุ critical components (security-critical, safety-critical, financial, data validation)
   - ตรวจสอบ formal verification tools (type systems, property-based testing, static analysis)
   - ตรวจสอบ invariants ถูก verify ด้วย automated tools
2. ถ้า project มี mutation testing setup ให้ตรวจสอบ:
   - Mutation score > 80%
   - Killed mutants ครอบคลุม critical code
   - ถ้า project ใช้ `Stryker` หรือ `cargo-mutants` ให้ตรวจสอบ config
3. ถ้า project มี security-sensitive code ให้ตรวจสอบ:
   - Input validation tests
   - Authentication/authorization tests
   - Data sanitization tests
4. ถ้า project มี performance-critical code ให้ตรวจสอบ:
   - Unit tests < 10ms
   - Integration tests < 100ms
   - Load tests และ memory leak tests

### 6. Validate Test Documentation

1. ตรวจสอบ test setup ถูก document สำหรับ tests ที่ซับซ้อน
2. ตรวจสอบ README ใน `tests/` อธิบายวิธีรัน
3. ตรวจสอบ test docs ถูกอัพเดทเมื่อ logic เปลี่ยน
4. ถ้า project มี `SPEC.md` ให้ตรวจสอบว่าอัพเดทด้วย test cases

### 7. Review Test Results

1. ทำ `/review-test-result` เพื่อวิเคราะห์ผล test execution และหา root cause ของ failures

### 8. Generate Report

1. ทำ `/report` สรุป findings เป็นตาราง
2. จัดกลุ่มตาม category (structure, coverage, quality, strategy, advanced, documentation)
3. ระบุ issues และ recommendations ตาม priority
4. สร้าง action items สำหรับการปรับปรุง
5. ทำ `/suggest-next-action` เสนอ action ถัดไป

## Rules

### 1. Comprehensive Validation

- ตรวจสอบทุกมิติของ test quality ตาม project needs
- ไม่มีมิติที่ถูกข้าม
- ใช้ conditional execution สำหรับ advanced testing ตาม project characteristics

### 2. Critical Focus

- ตรวจสอบ critical paths มี coverage ครบถ้วน
- ตรวจสอบ formal verification สำหรับ critical components (ถ้ามี)
- ตรวจสอบ security สำหรับ sensitive code (ถ้ามี)
- ตรวจสอบ performance สำหรับ bottlenecks (ถ้ามี)

### 3. Action-Oriented

- ระบุ issues อย่างชัดเจน
- ให้ recommendations ที่ concrete และ actionable
- กำหนด priority สำหรับ action items
- ให้ context สำหรับการตัดสินใจ

### 4. Tool Awareness

- ถ้า project ใช้ `Vitest` ให้ตรวจสอบ `vitest.config.ts`
- ถ้า project ใช้ `Playwright` ให้ตรวจสอบ `playwright.config.ts`
- ถ้า project ใช้ `Stryker` หรือ `cargo-mutants` ให้ตรวจสอบ mutation config
- ใช้ project-specific tools ตาม dependencies ที่มี

### 5. Communication

- รายงาน findings ชัดเจนและกระชับ
- ระบุไฟล์และบรรทัดที่มีปัญหา
- ทำ `/report` สำหรับ output formatting
- ทำ `/report-format-table` สำหรับ structured findings

## Report

### Output Format

ใช้ `/report-format-table` สำหรับ report ผลการตรวจสอบ:

| Category | Check | Status | Issue | Priority | Action |
|----------|-------|--------|-------|----------|--------|
| Structure | File location | Pass/Fail | [description] | High/Medium/Low | [action] |
| Coverage | Line coverage | Pass/Fail | [percentage] | High/Medium/Low | [action] |
| Quality | AAA pattern | Pass/Fail | [description] | High/Medium/Low | [action] |
| Strategy | Test pyramid | Pass/Fail | [ratio] | High/Medium/Low | [action] |
| Advanced | Mutation score | Pass/Fail/N/A | [score] | High/Medium/Low | [action] |
| Documentation | README in tests/ | Pass/Fail | [description] | High/Medium/Low | [action] |

### Summary Section

- ระบุ total checks, pass count, fail count
- ระบุ overall test quality score
- ระบุ top 3 priority action items

## Expected Outcome

- Test structure ถูกต้องตาม conventions
- Test coverage ผ่านเป้าหมายทุก category
- Test quality สูงตาม best practices
- Testing strategy ครอบคลุมทุก test types ตาม project needs
- Advanced testing ผ่านสำหรับ critical components (ถ้ามี)
- Test documentation ครบถ้วน
- รายงานผลการตรวจสอบพร้อม action items ตาม priority
