---
title: Verify Test
description: ตรวจสอบคุณภาพและความถูกต้องของ tests ครบวงจร
auto_execution_mode: 3
related_workflows:
  - /write-test
  - /run-test
  - /run-test-coverage
---

## Goal

ตรวจสอบคุณภาพและความถูกต้องของ tests ครบวงจร รวมถึง formal verification, mutation testing, security testing, และ performance testing

## Scope

ใช้สำหรับตรวจสอบ test quality ทั้ง unit, integration, e2e, และ test types อื่นๆ

## Execute

### 1. Verify Test Structure

ตรวจสอบโครงสร้าง test files

1. ตรวจสอบ test files อยู่ใน location ที่ถูกต้องตาม conventions
2. ตรวจสอบ test organization (unit, integration, e2e, fixtures, utils)
3. ตรวจสอบ naming conventions ถูกต้อง
4. ตรวจสอบ test files มีความสม่ำเสมอ

### 2. Verify Test Coverage

ตรวจสอบ test coverage

1. ทำ `/run-test-coverage` เพื่อวิเคราะห์ coverage
2. ตรวจสอบ coverage ถึง 100% ทุก category (lines, branches, functions, statements)
3. ระบุส่วนที่ยังไม่มี coverage
4. ตรวจสอบว่า critical paths มี coverage

### 3. Verify Test Quality

ตรวจสอบคุณภาพของ tests

1. ตรวจสอบ test naming: `should [expected behavior] when [condition]`
2. ตรวจสอบ AAA pattern (Arrange, Act, Assert)
3. ตรวจสอบ single responsibility ต่อ test case
4. ตรวจสอบ isolation ระหว่าง tests
5. ตรวจสอบ test ครอบคลุม happy path, edge cases, error cases
6. ตรวจสอบ parameterized tests สำหรับกรณีที่ซ้ำๆ

### 4. Verify Testing Strategy

ตรวจสอบ testing strategy

1. ตรวจสอบ test pyramid (70% unit, 20% integration, 10% e2e)
2. ตรวจสอบ test types ครบถ้วน (unit, integration, e2e, contract, property-based, mutation, performance, security, accessibility, visual regression)
3. ตรวจสอบ coverage targets สำหรับแต่ละ test type
4. ตรวจสอบ test priorities ตาม criticality
5. ตรวจสอบ test environments (local, staging, production)

### 5. Verify Formal Verification

ตรวจสอบ formal verification สำหรับ critical components

1. ตรวจสอบ critical components ถูกระบุ (security-critical, safety-critical, financial, data validation)
2. ตรวจสอบ formal verification tools ถูกใช้ (type systems, property-based testing, model checking, static analysis, theorem provers)
3. ตรวจสอบ formal specifications สำหรับ critical invariants
4. ตรวจสอบ invariants ถูก verify ด้วย automated tools
5. ตรวจสอบ formal verification results ถูก document

### 6. Verify Mutation Testing

ตรวจสอบ mutation testing

1. ตรวจสอบ mutation tests ถูกรัน
2. ตรวจสอบ mutation score สูง (> 80%)
3. ตรวจสอบ killed mutants ครอบคลุม critical code
4. ตรวจสอบ equivalent mutants ถูกระบุอย่างถูกต้อง

### 7. Verify Security Testing

ตรวจสอบ security testing

1. ตรวจสอบ security tests ถูกรัน
2. ตรวจสอบ vulnerability scanning ครอบคลุม
3. ตรวจสอบ input validation tests
4. ตรวจสอบ authentication/authorization tests
5. ตรวจสอบ data sanitization tests

### 8. Verify Performance Testing

ตรวจสอบ performance testing

1. ตรวจสอบ performance tests ถูกรัน
2. ตรวจสอบ unit tests < 10ms
3. ตรวจสอบ integration tests < 100ms
4. ตรวจสอบ load tests ครอบคลุม
5. ตรวจสอบ memory leak tests

### 9. Verify Test Documentation

ตรวจสอบ test documentation

1. ตรวจสอบ test setup ถูก document สำหรับ tests ที่ซับซ้อน
2. ตรวจสอบ README ใน tests/ อธิบายวิธีรัน
3. ตรวจสอบ test docs ถูกอัพเดทเมื่อ logic เปลี่ยน
4. ตรวจสอบ SPEC.md ถูกอัพเดทด้วย test cases

### 10. Generate Report

สร้างรายงานผลการตรวจสอบ

1. รวบรวมผลการตรวจสอบทั้งหมด
2. จัดกลุ่มตาม category (structure, coverage, quality, strategy, formal verification, mutation, security, performance, documentation)
3. ระบุ issues และ recommendations
4. สร้าง action items สำหรับการปรับปรุง

## Rules

### 1. Comprehensive Verification

ตรวจสอบทุกมิติของ test quality

- ตรวจสอบ structure, coverage, quality, strategy
- ตรวจสอบ formal verification, mutation, security, performance
- ตรวจสอบ documentation
- ไม่มีมิติที่ถูกข้าม

### 2. Critical Focus

ให้ความสำคัญกับ critical components

- ตรวจสอบ critical paths มี coverage
- ตรวจสอบ formal verification สำหรับ critical components
- ตรวจสอบ security สำหรับ sensitive code
- ตรวจสอบ performance สำหรับ bottlenecks

### 3. Action-Oriented

สร้าง recommendations ที่ actionable

- ระบุ issues อย่างชัดเจน
- ให้ recommendations ที่ concrete
- กำหนด priority สำหรับ action items
- ให้ context สำหรับการตัดสินใจ

### 4. Continuous Improvement

ส่งเสริมการปรับปรุงอย่างต่อเนื่อง

- ระบุ patterns ของ test quality issues
- แนะนำ best practices
- ส่งเสริม learning จาก mistakes
- ติดตาม improvements ตามเวลา

## Expected Outcome

- Test structure ถูกต้องตาม conventions
- Test coverage ถึง 100% ทุก category
- Test quality สูงตาม best practices
- Testing strategy ครอบคลุมทุก test types
- Formal verification ผ่านสำหรับ critical components
- Mutation testing ผ่านด้วยคะแนนสูง
- Security tests ผ่านทั้งหมด
- Performance tests ผ่านทั้งหมด
- Test documentation ครบถ้วน
- รายงานผลการตรวจสอบพร้อม action items
