---
title: Write Test Coverage
description: เขียน test ครอบคลุมทุก code paths จนบรรลุ 100% coverage
auto_execution_mode: 3
related_workflows:
  - /write-test
  - /run-test-coverage
---

## Goal

ทำ `/write-test-coverage` เพื่อเขียน test ครอบคลุมทุก code paths จนบรรลุ 100% coverage ทุกประเภท

## Scope

ใช้สำหรับเขียน test เพื่อให้ครอบคลุม codebase ทั้งหมด ตาม test framework ที่ project ใช้

## Execute

### 1. Detect Test Framework

ตรวจสอบ test framework ที่ project ใช้

1. ตรวจสอบ `package.json` สำหรับ test dependencies (`vitest`, `jest`, `mocha`, `pytest`, `go test`)
2. ตรวจสอบ config files (`vitest.config.ts`, `jest.config.js`, `pytest.ini`, `go.mod`)
3. ตรวจสอบ test files patterns (`*.test.ts`, `*_test.go`, `test_*.py`)
4. ตรวจสอบ coverage tools ที่ framework รองรับ (`c8`, `istanbul`, `coverage.py`, `go test -cover`)
5. บันทึก test framework และ coverage tools ที่ใช้

### 2. Analyze Uncovered Code

วิเคราะห์ codebase เพื่อหาส่วนที่ยังไม่มี test

1. รัน coverage analysis ตาม framework ที่ใช้
2. ระบุ files ที่มี coverage ต่ำกว่า 100%
3. ระบุ functions/lines/branches ที่ยังไม่ถูก test
4. จัดลำดับ priority ตามความสำคัญของ code
5. สร้าง list ของ test cases ที่ต้องเขียน

### 3. Write Tests For Uncovered Code

เขียน test สำหรับ code ที่ยังไม่ครอบคลุม

1. ทำตาม `/write-test` สำหรับแต่ละ uncovered code
2. เขียน test สำหรับ happy paths
3. เขียน test สำหรับ error paths
4. เขียน test สำหรับ edge cases
5. เขียน test สำหรับ boundary conditions

### 4. Verify Coverage

ตรวจสอบว่า coverage ถึง 100% ทุกประเภท

1. รัน coverage analysis อีกครั้ง
2. ตรวจสอบ `lines` coverage ถึง 100%
3. ตรวจสอบ `branches` coverage ถึง 100%
4. ตรวจสอบ `functions` coverage ถึง 100%
5. ตรวจสอบ `statements` coverage ถึง 100%
6. หากไม่ถึง 100% ทำขั้นตอนที่ 2-3 อีกครั้ง

## Rules

### 1. Framework Detection

ตรวจสอบ test framework ที่ project ใช้

- ตรวจสอบ `package.json` สำหรับ test dependencies
- ตรวจสอบ config files ของ framework
- ตรวจสอบ test files patterns
- ตรวจสอบ coverage tools ที่ framework รองรับ
- ใช้ coverage command ที่ถูกต้องตาม framework

### 2. Coverage Analysis

วิเคราะห์ coverage อย่างละเอียด

- รัน coverage analysis ก่อนเขียน test
- ระบุ uncovered code ทั้งหมด
- จัดลำดับ priority ตามความสำคัญ
- สร้าง test cases ที่ครอบคลุมทุก paths
- ตรวจสอบ coverage หลังเขียน test ทุกครั้ง

### 3. Test Coverage

เขียน test ครอบคลุมทุก code paths

- Happy paths ต้องถูก test
- Error paths ต้องถูก test
- Edge cases ต้องถูก test
- Boundary conditions ต้องถูก test
- ทุก branches ต้องถูก test

### 4. Coverage Threshold

เป้าหมาย coverage ต้องถึง 100% ทุก category โดยไม่มีข้อยกเว้น

- Coverage 100% ทุก category เท่านั้นที่ผ่าน
- หาก coverage ไม่ถึง 100% ต้องเขียน test เพิ่ม
- ไม่มีข้อยกเว้นสำหรับ critical code
- ไม่มีข้อยกเว้นสำหรับ edge cases
- ไม่มีข้อยกเว้นสำหรับ error paths

## Expected Outcome

- Test framework ถูกระบุอย่างถูกต้อง
- Uncovered code ถูกระบุทั้งหมด
- Test ถูกเขียนครอบคลุมทุก code paths
- Coverage ถึง 100% ทุก category (lines, branches, functions, statements)
- Codebase มี test quality สูงและ maintainable
