---
title: Run Test Coverage
description: รัน test coverage analysis เพื่อวิเคราะห์และปรับปรุง code coverage
auto_execution_mode: 3
related_workflows:
  - /run-test
  - /write-test
---

## Goal

รัน test coverage analysis เพื่อวิเคราะห์ code coverage และแนะนำการปรับปรุง

## Scope

ใช้สำหรับวิเคราะห์ code coverage ปัจจุบัน ระบุ areas ที่ขาด coverage แนะนำ tests ที่ควรเพิ่ม และ monitor coverage trends

## Execute

### 1. Setup Coverage

1. ทำ `/run-install` เพื่อติดตั้ง dependencies
2. ตรวจสอบ coverage tools ถูกติดตั้ง
3. ตรวจสอบ coverage config ใน `vitest/jest` config
4. ตรวจสอบ coverage thresholds ตั้งค่าเป็น 100%
5. ตรวจสอบ coverage directory

### 2. Run Coverage

1. รัน `bun run test:coverage` หรือ script ที่กำหนด
2. รอ tests เสร็จสิ้น
3. บันทึก coverage metrics
4. สร้าง coverage report files
5. ตรวจสอบ report ถูกสร้าง
6. บันทึก report location

### 3. Analyze Coverage

1. ดู coverage percentages ทุก category
2. ระบุ files ที่มี coverage ต่ำ
3. ระบุ uncovered lines/branches
4. หา code ที่ไม่มี tests
5. หา edge cases ที่ยังไม่ถูก cover
6. หา error paths ที่ยังไม่ถูก test
7. วิเคราะห์แต่ละ coverage type แยกกัน:
   - `lines` - ตรวจสอบทุก executable lines
   - `branches` - ตรวจสอบทุก conditional branches
   - `functions` - ตรวจสอบทุก function declarations
   - `statements` - ตรวจสอบทุก statements

### 4. Report Coverage Gaps

1. รายงาน coverage percentages ทุก category
2. ระบุ files ที่มี coverage ต่ำ
3. ระบุ uncovered lines/branches/functions/statements แยกกัน
4. ระบุ code paths ที่ยังไม่มี tests
5. ระบุ edge cases ที่ยังไม่ถูก cover
6. ระบุ error paths ที่ยังไม่ถูก test
7. สร้างรายงานสรุปสำหรับการเพิ่ม tests

## Rules

### 1. Coverage Metrics

ตรวจสอบ coverage ทุก category ตามมาตรฐาน

- `lines` - % ของ lines ที่ถูก execute
- `functions` - % ของ functions ที่ถูก call
- `branches` - % ของ branches ที่ถูก test
- `statements` - % ของ statements ที่ถูก execute

### 2. Coverage Threshold

เป้าหมาย coverage ต้องถึง 100% ทุก category โดยไม่มีข้อยกเว้น

- Coverage 100% ทุก category เท่านั้นที่ผ่าน
- หาก coverage ไม่ถึง 100% ต้องเพิ่ม tests จนครบ
- ไม่มีข้อยกเว้นสำหรับ critical code
- ไม่มีข้อยกเว้นสำหรับ edge cases

### 3. Coverage Analysis

วิเคราะห์ coverage report อย่างละเอียด

- ตรวจสอบ coverage report ทุก file
- ระบุ code ที่สำคัญแต่ยังไม่มี test
- พิจารณา criticality ของส่วนที่ไม่มี coverage
- วิเคราะห์ uncovered code paths
- วิเคราะห์ edge cases ที่ยังไม่ถูก test

### 4. Test Improvement

เพิ่ม tests สำหรับส่วนที่ขาด coverage

- เขียน tests สำหรับ uncovered code paths
- เขียน tests สำหรับ edge cases
- เขียน tests สำหรับ error paths
- เขียน tests สำหรับ boundary conditions
- รัน coverage อีกครั้งหลังเพิ่ม tests

## Expected Outcome

- Coverage report ถูกสร้าง
- Coverage ถึง 100% ทุก category (lines, branches, functions, statements)
- Uncovered code ถูกระบุแยกกันตาม type
- รายงานสรุป coverage gaps ครบถ้วน
- ข้อมูลเพียงพอสำหรับการเพิ่ม tests

