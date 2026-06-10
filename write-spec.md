---
title: Write Spec
description: เขียน SPEC.md สำหรับโปรเจกต์ด้วยตาราง test cases ครอบคล้วทุก test suites
auto_execution_mode: 3
related_workflows:
  - /write-content-explicit
---

## Goal

เขียน SPEC.md สำหรับโปรเจกต์ด้วยตาราง test cases ครอบคล้วทุก test suites

## Execute

### 1. Verify Workspace

1. รัน `/run-verify` สำหรับ workspace ที่จะนำมาเขียน spec ให้เสร็จก่อน
2. ตรวจสอบว่า workspace ทำงานได้ถูกต้อง

### 2. Analyze Tests

1. รัน `/analyze-project` เพื่อดูภาพรวม
2. อ่าน test files ทั้งหมดใน `test/` directory
3. ระบุ test suites จาก test directory structure และ tags
4. ระบุ test cases จากแต่ละ test file โดยอ่าน test assertions
5. ระบุ functions ที่ถูก test จากแต่ละ test file
6. ดึง expected output จาก test assertions (return values, errors, mock calls)

### 3. Create Structure

1. ตรวจสอบความยาวของ SPEC.md ที่อาจจะเกิดขึ้น (ประมาณจากจำนวน test suites และ test cases)
2. ถ้าคาดว่าจะยาวเกิน 500 บรรทัด:
   - สร้างโฟลเดอร์ `spec/` ใน root directory
   - สร้างไฟล์ `spec/index.md` เป็นหน้ารวมที่มี link ไปยังแต่ละ spec file
   - สำหรับแต่ละ test suite สร้างไฟล์ย่อยใน `spec/` ตั้งชื่อเป็น `<suite-name>.spec.md`
3. ถ้าไม่ยาวเกิน 500 บรรทัด:
   - สร้างหรืออัพเดท `SPEC.md` ใน root directory
   - สร้าง Test Suites section
   - เพิ่ม frontmatter ถ้าจำเป็น (title, description)

### 4. Write Test Suites

1. แบ่ง test suites ตาม tags (เช่น unit, domain, shell, git)
2. ถ้าใช้โฟลเดอร์ `spec/`:
   - สำหรับแต่ละ test suite สร้างไฟล์ `<suite-name>.spec.md` ใน `spec/`
   - ในแต่ละไฟล์ ใช้ heading level 1 (#) สำหรับชื่อ test suite
   - จัดกลุ่ม test cases ตาม function ด้วย heading level 2 (##)
   - สำหรับแต่ละ function สร้างตาราง 4 column:
     - Status | Description | Expected Output | Expected examples
     - ✅/❌ | test_case_name | Description of test case | Example usage or test code
   - เติม test cases จาก test files โดยอ่าน test assertions เพื่อดู expected output
   - ระบุ status ด้วย emoji: ✅ (เขียนแล้ว), ❌ (ยังไม่เขียน)
3. ถ้าใช้ `SPEC.md` ไฟล์เดียว:
   - สำหรับแต่ละ test suite:
     - เขียนชื่อ test suite เป็น heading level 2 (##) ตาม tags (เช่น ## unit, domain)
     - จัดกลุ่ม test cases ตาม function ด้วย heading level 3 (###)
     - สำหรับแต่ละ function สร้างตาราง 4 column:
       - Status | Description | Expected Output | Expected examples
       - ✅/❌ | test_case_name | Description of test case | Example usage or test code
     - เติม test cases จาก test files โดยอ่าน test assertions เพื่อดู expected output
     - ระบุ status ด้วย emoji: ✅ (เขียนแล้ว), ❌ (ยังไม่เขียน)

### 5. Validate

1. ตรวจสอบว่าครอบคล้วทุก test files
2. ตรวจสอบว่าตาราง format ถูกต้องและสมบูรณ์
3. รัน tests อีกครั้งเพื่ออัพเดท status ล่าสุด

### 6. Update Documentation

1. ทำตาม `/update-reference` สำหรับไฟล์ที่เพิ่ม
2. เพิ่ม link ไปยัง SPEC.md ใน README.md ถ้าจำเป็น

## Rules

### 1. Spec Sources

จำนวน spec ทั้งหมดมาจาก:

- Test directory structure - โครงสร้างของ test files ใน `test/` directory
- Test files - แต่ละ test file จะมี test cases
- Test suites - จัดกลุ่มตาม tags (เช่น unit, domain, shell, git)
- Test assertions - อ่านจาก test assertions ในแต่ละ test file เพื่อดู expected output
- Functions - จัดกลุ่ม test cases ตาม function ที่ถูก test

ไม่ได้มาจาก fn โดยตรง แต่มาจาก test assertions ในแต่ละ test file และ test directory structure

### 2. Structure

- ถ้า SPEC.md ยาวเกิน 500 บรรทัด ต้องใช้โฟลเดอร์ `spec/` และแยกเป็นไฟล์ย่อย
- ถ้าไม่ยาวเกิน 500 บรรทัด ใช้ `SPEC.md` ไฟล์เดียว
- แต่ละ test suite ต้องมีตาราง format เป็นรูปแบบมาตรฐาน
- ใช้ frontmatter ถ้าจำเป็น (title, description)

### 3. Table Format

- จัดกลุ่ม test cases ตาม function ด้วย heading level 3 (###)
- ใช้ตาราง 4 column สำหรับแต่ละ function:
  - Status | Description | Expected Output | Expected examples
  - ✅/❌ | test_case_name | Description of test case | Example usage or test code
- ไม่ใช้ emoji ใน heading
- Status ใช้ emoji: ✅ (เขียนแล้ว), ❌ (ยังไม่เขียน)
- Expected Output ใส่ค่าที่คาดหวังจาก test assertions (เช่น return value, throw error, mock calls) เป็นข้อความ ไม่ใช่ code

### 4. Organization

- จัดเรียง test suites ตาม tags (เช่น unit, domain, shell, git, application)
- ใช้ heading level 2 (##) สำหรับแต่ละ test suite
- ใช้ tags เป็นชื่อ heading (เช่น ## unit, domain)

### 5. Content

- ครอบคล้วทุก test cases จาก test files
- ตรวจสอบ status ให้ถูกต้อง
- อัพเดท status เมื่อมีการเปลี่ยนแปลง

### 6. Documentation

- อธิบาย test suites ชัดเจน

## Expected Outcome

มี SPEC.md หรือ spec/ folder ครอบคล้วทุก test cases
List format ถูกต้องและอัพเดท status ล่าสุด
ผู้ใช้สามารถดู test examples และ status ได้ทันที

