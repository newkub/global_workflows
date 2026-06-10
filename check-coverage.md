---
title: Check Coverage
description: ตรวจสอบ test coverage ตามเป้าหมาย
auto_execution_mode: 3
related_workflows:
  - /run-test
  - /improve-code-coverage
---

## Goal

ตรวจสอบ test coverage ตามเป้าหมายที่กำหนด

## Execute

### 1. Check Line Coverage

1. รัน coverage report
2. ตรวจสอบ line coverage percentage
3. ระบุ lines ที่ไม่ถูก cover
4. วิเคราะห์ lines ที่ไม่ถูก cover

### 2. Check Branch Coverage

1. ตรวจสอบ branch coverage percentage
2. ระบุ branches ที่ไม่ถูก cover
3. วิเคราะห์ branches ที่ไม่ถูก cover
4. เพิ่ม tests สำหรับ missing branches

### 3. Check Function Coverage

1. ตรวจสอบ function coverage percentage
2. ระบุ functions ที่ไม่ถูก cover
3. วิเคราะห์ functions ที่ไม่ถูก cover
4. เพิ่ม tests สำหรับ missing functions

### 4. Check Statement Coverage

1. ตรวจสอบ statement coverage percentage
2. ระบุ statements ที่ไม่ถูก cover
3. วิเคราะห์ statements ที่ไม่ถูก cover
4. เพิ่ม tests สำหรับ missing statements

### 5. Analyze Coverage Gaps

1. ระบุ critical code ที่ไม่ถูก cover
2. ระบุ edge cases ที่ไม่ถูก cover
3. ระบุ error paths ที่ไม่ถูก cover
4. สร้าง plan สำหรับเพิ่ม coverage

### 6. Generate Coverage Report

1. สร้าง coverage report
2. แชร์ results กับทีม
3. ติดตาม coverage trends
4. ตั้งค่า coverage thresholds

## Rules

### 1. Coverage Targets

- Line coverage: > 80%
- Branch coverage: > 70%
- Function coverage: > 80%
- Statement coverage: > 80%

### 2. Critical Code

- Critical paths: 100% coverage
- Security code: 100% coverage
- Error handling: 100% coverage
- Business logic: > 90% coverage

### 3. Coverage Analysis

- ไม่ใช่เพียง percentage แต่ quality
- ตรวจสอบว่า tests มีความหมาย
- ตรวจสอบว่า tests ทดสอบสิ่งที่สำคัญ
- หลีกเลี่ยง tests ที่ไม่มีค่า

### 4. Priority Levels

- Critical: critical code ไม่ถูก cover
- High: coverage ต่ำกว่าเป้าหมายมาก
- Medium: coverage ต่ำกว่าเป้าหมายเล็กน้อย
- Low: เป็น optimizations

## Expected Outcome

- Coverage ผ่านเป้าหมายทั้งหมด
- Critical code ถูก cover 100%
- Coverage report ถูกสร้าง
- Coverage trends ถูกติดตาม
- Tests มีคุณภาพสูง

