---
title: Improve Coverage
description: ปรับปรุง test coverage ให้ครอบคลุมและตรงเป้าหมาย
auto_execution_mode: 3
related_workflows:
  - /write-test
  - /write-test-coverage
---

## Goal

ปรับปรุง test coverage ให้ครอบคลุมและตรงเป้าหมาย

## Scope

ใช้สำหรับปรับปรุง test coverage ทั้ง unit, integration, และ e2e tests

## Execute

### 1. Check Current Coverage

ตรวจสอบ test coverage ปัจจุบัน

- รัน coverage report
- ตรวจสอบ line coverage percentage
- ตรวจสอบ branch coverage percentage
- ตรวจสอบ function coverage percentage
- ตรวจสอบ statement coverage percentage

### 2. Analyze Coverage Gaps

วิเคราะห์ coverage gaps

- ระบุ critical code ที่ไม่ถูก cover
- ระบุ edge cases ที่ไม่ถูก cover
- ระบุ error paths ที่ไม่ถูก cover
- รัน `knip` สำหรับ detect dead code
- สร้าง plan สำหรับเพิ่ม coverage

### 3. Write Tests

เขียน tests ครอบคลุม

- ทำ `/write-test` เพื่อเขียน tests ครอบคลุม
- เขียน tests สำหรับ critical code
- เขียน tests สำหรับ edge cases
- เขียน tests สำหรับ error paths
- ทำ `/write-test-coverage` เพื่อบรรลุง 100% coverage

### 4. Set Up Coverage Enforcement

ตั้งค่า coverage enforcement

- ตั้งค่า coverage targets
- Integrate ใน CI/CD
- Block PRs ที่ไม่ผ่าน coverage
- Monitor coverage trends

## Rules

### 1. Coverage Targets

ทำตามเป้าหมาย coverage

- Line coverage: > 80%
- Branch coverage: > 70%
- Function coverage: > 80%
- Statement coverage: > 80%

### 2. Critical Code

รักษา critical code coverage

- Critical paths: 100% coverage
- Security code: 100% coverage
- Error handling: 100% coverage
- Business logic: > 90% coverage

### 3. Coverage Quality

รักษาคุณภาพ coverage

- ไม่ใช่เพียง percentage แต่ quality
- ตรวจสอบว่า tests มีความหมาย
- ตรวจสอบว่า tests ทดสอบสิ่งที่สำคัญ
- หลีกเลี่ยง tests ที่ไม่มีค่า

## Expected Outcome

- Coverage ผ่านเป้าหมายทั้งหมด
- Critical code ถูก cover 100%
- Coverage report ถูกสร้าง
- Coverage trends ถูกติดตาม
- Tests มีคุณภาพสูง
