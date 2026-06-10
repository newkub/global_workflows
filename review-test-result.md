---
title: Review Test Result
description: รีวิวและวิเคราะห์ผลลัพธ์จากการทดสอบเพื่อตรวจสอบคุณภาพและความถูกต้องของ code
auto_execution_mode: 3
---

## Goal

รีวิวและวิเคราะห์ผลลัพธ์จากการทดสอบเพื่อตรวจสอบคุณภาพและความถูกต้องของ code ระบุปัญหาที่เกิดขึ้น และวางแผนการแก้ไข

## Execute

### 1. Test Execution Review

1. รัน test suite และดูผลลัพธ์ทั้งหมด
2. ตรวจสอบว่า test ทั้งหมดผ่านหรือไม่
3. รวบรวมข้อมูลเกี่ยวกับ:
   - จำนวน test ทั้งหมด
   - จำนวน test ที่ผ่าน
   - จำนวน test ที่ล้มเหลว
   - จำนวน test ที่ถูก skip
   - เวลาที่ใช้ในการรัน

### 2. Failure Analysis

สำหรับ test ที่ล้มเหลวทุกตัว:

1. อ่าน error message และ stack trace อย่างละเอียด
2. ระบุสาเหตุของการล้มเหลว:
   - Code logic error
   - Type error
   - Missing dependency
   - Configuration error
   - Environment issue
3. ตรวจสอบว่า test case เขียนถูกต้องหรือไม่
4. ตรวจสอบว่า implementation ตรงตาม spec หรือไม่

### 3. Coverage Analysis

1. ตรวจสอบ code coverage:
   - Line coverage
   - Branch coverage
   - Function coverage
   - Statement coverage
2. ระบุส่วนที่ยังไม่มี test cover
3. วิเคราะห์ว่าส่วนที่ไม่มี cover มีความสำคัญหรือไม่
4. กำหนด priority สำหรับการเพิ่ม test coverage

### 4. Performance Review

1. ตรวจสอบ performance ของ test:
   - Test ที่ช้าเกินไป
   - Test ที่ใช้ memory มากเกินไป
   - Test ที่มี side effects
2. ระบุ bottleneck ในการรัน test
3. แนะนำการปรับปรุง performance

### 5. Test Quality Assessment

1. ประเมินคุณภาพของ test cases:
   - Test มีความชัดเจนและเข้าใจง่ายหรือไม่
   - Test ทดสอบสิ่งที่ถูกต้องหรือไม่
   - Test มีความ independent หรือไม่ (ไม่ขึ้นกับ test อื่น)
   - Test มีการใช้ mock/stub อย่างเหมาะสมหรือไม่
2. ระบุ test ที่ต้อง refactor
3. แนะนำ best practices สำหรับการเขียน test

### 6. Documentation Review

1. ตรวจสอบว่า test มี documentation หรือไม่:
   - Comment อธิบายสิ่งที่ test
   - Comment อธิบาย edge cases
   - Comment อธิบาย behavior ที่คาดหวัง
2. แนะนำการปรับปรุง documentation

### 7. Report Generation

สร้างรายงานสรุปประกอบด้วย:

1. Executive Summary
   - สถานะโดยรวมของ test suite
   - Key metrics
   - ประเด็นสำคัญที่ต้องดำเนินการ

2. Detailed Findings
   - รายการ test ที่ล้มเหลวพร้อมสาเหตุ
   - รายการส่วนที่ยังไม่มี coverage
   - รายการ performance issues

3. Recommendations
   - การแก้ไข immediate issues
   - การปรับปรุง long-term
   - Priority สำหรับการดำเนินการ

4. Action Items
   - รายการงานที่ต้องทำ
   - ผู้รับผิดชอบ
   - กำหนดเวลา

## Rules

### 1. Analysis

ต้องวิเคราะห์ผลลัพธ์อย่างละเอียด

- ไม่เพียงแค่ดู pass/fail
- ระบุ root cause ของการล้มเหลว
- พิจารณาทั้ง test quality และ implementation quality

### 2. Coverage

ต้องตรวจสอบ coverage ทั้งหมด

- line, branch, function, statement
- ระบุส่วนที่สำคัญแต่ยังไม่มี test
- พิจารณา criticality ของส่วนที่ไม่มี coverage

### 3. Performance

ต้องตรวจสอบ performance ของ test

- ระบุ test ที่ช้าและแนะนำการปรับปรุง
- พิจารณา impact ต่อ CI/CD pipeline

### 4. Documentation

ต้องประเมินคุณภาพของ test documentation

- แนะนำการปรับปรุงถ้าจำเป็น
- ส่งเสริม best practices สำหรับการเขียน test

### 5. Reporting

ต้องสร้างรายงานที่ชัดเจนและ action-oriented

- ระบุ priority สำหรับการดำเนินการ
- ให้ข้อมูลเพียงพอสำหรับการตัดสินใจ

## Expected Outcome

- รายงานสรุปผลลัพธ์ test ที่ครบถ้วน
- การวิเคราะห์สาเหตุของการล้มเหลว
- คำแนะนำสำหรับการปรับปรุง test coverage
- คำแนะนำสำหรับการปรับปรุง test performance
- แผนการดำเนินการที่ชัดเจน
- เอกสารที่สามารถใช้สำหรับการติดตามและการตัดสินใจ

