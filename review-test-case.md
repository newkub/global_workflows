---
title: Review Test Case
description: ตรวจสอบคุณภาพ test cases ทีละ case ทั้ง naming, pattern, isolation, coverage
auto_execution_mode: 3
related_workflows:
  - /write-test
  - /validate-test
  - /run-test
  - /check-correctness
  - /report
  - /report-format-table
---

## Goal

ตรวจสอบคุณภาพของ test cases ทีละ case เพื่อให้มั่นใจว่าแต่ละ test มีความถูกต้อง ชัดเจน และมีคุณค่า

## Scope

ใช้สำหรับ review test cases ทุกประเภท: unit, integration, e2e, และ specialized tests

## Execute

### 1. Review Test Naming

1. ตรวจสอบ naming convention: `should [expected behavior] when [condition]`
2. ตรวจสอบว่า test name อธิบาย behavior ไม่ใช่ implementation
3. ตรวจสอบว่า test name สื่อถึงสิ่งที่ทดสอบชัดเจน
4. ระบุ tests ที่มีชื่อกำกวมหรือไม่สื่อความหมาย

### 2. Review Test Structure

1. ตรวจสอบ AAA pattern (Arrange, Act, Assert) ในแต่ละ test
2. ตรวจสอบ single responsibility ต่อ test case
3. ตรวจสอบว่าแต่ละ test ทดสอบ behavior เดียวเท่านั้น
4. ตรวจสอบ setup/teardown ที่เหมาะสม

### 3. Review Test Isolation

1. ตรวจสอบไม่มี shared state ระหว่าง tests
2. ตรวจสอบแต่ละ test รันได้อย่างอิสระ
3. ตรวจสอบ order independence (ไม่พึ่งพาลำดับการรัน)
4. ตรวจสอบ cleanup หลังแต่ละ test

### 4. Review Test Coverage Per Case

1. ตรวจสอบ happy path coverage ของแต่ละ case
2. ตรวจสอบ edge cases ที่เกี่ยวข้อง
3. ตรวจสอบ error paths และ exception handling
4. ตรวจสอบ parameterized tests สำหรับกรณีที่ซ้ำๆ
5. ตรวจสอบ boundary values ครบถ้วน

### 5. Review Test Quality

1. ตรวจสอบ assertions มีความเฉพาะเจาะจง (specific assertions)
2. ตรวจสอบไม่มี fragile tests (tests ที่ break ง่าย)
3. ตรวจสอบไม่มี flaky tests (tests ที่ pass/fail ไม่สม่ำเสมอ)
4. ตรวจสอบ mock/stub ใช้งานถูกต้องและเหมาะสม
5. ตรวจสอบ test data มีความหมายและสื่อถึง scenario

### 6. Review Test Documentation

1. ตรวจสอบ test description หรือ docstring สำหรับ tests ที่ซับซ้อน
2. ตรวจสอบว่า test อธิบาย business requirement ที่เกี่ยวข้อง
3. ตรวจสอบ `SPEC.md` sync กับ test cases

### 7. Report Findings

1. ทำ `/report` สรุป findings โดยใช้ `/report-format-table`
2. ระบุ: Test File, Test Name, Category, Status, Issue, Priority, Action
3. จัดลำดับ issues ตาม priority (critical, high, medium, low)
4. ทำ `/suggest-next-action` เสนอ action ถัดไป

## Rules

### 1. Per-Case Review

- ตรวจสอบทีละ test case ไม่ข้าม
- ระบุไฟล์และบรรทัดที่มีปัญหา
- ให้ feedback ที่ concrete และ actionable

### 2. Quality Criteria

- Naming convention สม่ำเสมอ
- AAA pattern ชัดเจน
- Single responsibility ต่อ case
- Isolation สมบูรณ์
- Assertions เฉพาะเจาะจง

### 3. Common Issues

- Test name ไม่สื่อความหมาย
- Test ทดสอบหลาย behavior พร้อมกัน
- Shared state ระหว่าง tests
- Assertions กว้างเกินไป (เช่น `expect(result).toBeTruthy()`)
- Mock ที่ซ่อน behavior จริง

### 4. Output

- ใช้ `/report-format-table` สำหรับ findings
- ระบุ priority สำหรับทุก issue
- แยก critical issues จาก minor suggestions

## Expected Outcome

- ทุก test case ผ่านการ review
- Issues ระบุชัดเจนพร้อม priority และ action
- Test quality สูงตาม best practices
- Naming conventions สม่ำเสมอ
- Test isolation สมบูรณ์
- รายงานสรุป findings ครบถ้วน
