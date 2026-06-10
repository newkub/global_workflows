---
title: Improve Code Coverage
description: ปรับปรุง code coverage และลบ dead code
auto_execution_mode: 3
---

## Goal

ปรับปรุง code coverage ให้ครอบคลุมและลบ dead code ที่ไม่ได้ใช้

## Execute

### 1. Analyze Coverage

วิเคราะห์ coverage ปัจจุบัน

1. รัน coverage tools
2. ตรวจสอบ coverage percentage
3. ระบุ files ที่มี coverage ต่ำ
4. วิเคราะห์ uncovered branches
5. ระบุ critical paths ที่ยังไม่ครอบคลุม

### 2. Detect Dead Code

ตรวจหา dead code และ unused exports

1. รัน knip สำหรับ detect unused exports
2. รัน tools สำหรับ detect dead code
3. ระบุ unused dependencies
4. ระบุ unused functions และ variables
5. ระบุ unreachable code

### 3. Remove Dead Code

ลบ dead code และ unused items

1. ลบ unused exports
2. ลบ unused dependencies
3. ลบ unused functions และ variables
4. ลบ unreachable code
5. ทำความสะอาด imports

### 4. Improve Coverage

ปรับปรุง coverage สำหรับ critical paths

1. เพิ่ม tests สำหรับ uncovered branches
2. เพิ่ม tests สำหรับ edge cases
3. เพิ่ม tests สำหรับ error handling
4. เพิ่ม tests สำหรับ boundary conditions
5. เพิ่ม integration tests สำคัญ

### 5. Set Coverage Thresholds

ตั้งค่า coverage thresholds

1. ตั้งค่า minimum coverage percentage
2. ตั้งค่า branch coverage threshold
3. ตั้งค่า function coverage threshold
4. ตั้งค่า line coverage threshold
5. บังคับ thresholds ใน CI

## Rules

### Coverage Targets

ตั้งเป้าหมาย coverage ที่เหมาะสม

- มุ่งที่ critical paths ก่อน
- ไม่ต้อง 100% coverage แต่ควรครอบคลุมสิ่งสำคัญ
- branch coverage สำคัญกว่า line coverage
- ตรวจสอบ edge cases สำคัญ
- ปรับเป้าหมายตาม project type

### Dead Code Removal

ลบ dead code อย่างระมัดระวัง

- ตรวจสอบว่าไม่ถูกใช้จริงๆ ก่อนลบ
- ใช้ tools อย่าง knip สำหรับ detection
- ลบทีละไฟล์และ test
- ตรวจสอบ dependencies ก่อนลบ
- commit แยกสำหรับ dead code removal

### Test Quality

เขียน tests ที่มีคุณภาพ

- ทดสอบ behavior ไม่ใช่ implementation
- ใช้ descriptive test names
- ทำให้ tests isolated
- ใช้ test data ที่ realistic
- หลีกเลี่ยง test logic ที่ซับซ้อน

### Coverage Tools

ใช้ tools ที่เหมาะสม

- ใช้ knip สำหรับ detect unused exports
- ใช้ coverage tools ตาม language
- ใช้ IDE integration สำหรับ real-time feedback
- ใช้ CI integration สำหรับ enforcement
- ตรวจสอบ reports อย่างสม่ำเสมอ

### Incremental Improvement

ปรับปรุงแบบ incremental

- เริ่มจาก critical paths
- ตั้งเป้าหมายที่ realistic
- ปรับปรุงทีละน้อย
- ตรวจสอบผลลัพธ์อย่างสม่ำเสมอ
- เฉลย regressions ทันที

## Expected Outcome

- Code coverage เพิ่มขึ้นอย่างมีนัยสำคัญ
- Dead code ถูกลบออก
- Unused dependencies ถูกลบ
- Coverage thresholds ถูกบังคับ
- Critical paths ครอบคลุมด้วย tests
- Bundle size ลดลงจากการลบ dead code

