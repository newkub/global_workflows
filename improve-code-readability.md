---
title: Improve Code Readability
description: ปรับปรุงความอ่านง่ายของโค้ดให้เข้าใจง่าย ลดความซับซ้อน และเพิ่ม maintainability
auto_execution_mode: 3
related_workflows:
  - /improve
  - /improve-naming
  - /simplify-code
  - /separate-of-concern
---

## Goal

ปรับปรุงความอ่านง่ายของโค้ดให้เข้าใจง่าย ลดความซับซ้อน และเพิ่ม maintainability

## Scope

ใช้สำหรับทุก workspace เพื่อปรับปรุงความอ่านง่ายของโค้ด

## Execute

### 1. Analyze And Prioritize

วิเคราะห์และจัดลำดับความสำคัญของปัญหาความอ่านง่าย

1. ทำ `/search-code` เพื่อค้นหา `functions` ที่ยาวกว่า 30 บรรทัด
2. ทำ `/search-code` เพื่อค้นหา `nesting` ที่ลึกกว่า 3 levels
3. ทำ `/search-code` เพื่อค้นหา `complex conditions`
4. ทำ `/search-code` เพื่อค้นหา `magic numbers` และ `magic strings`
5. ทำ `/search-code` เพื่อค้นหา `unclear variable names`
6. สรุปผลการ analyze และจัดลำดับ priority

### 2. Reduce Complexity

ลดความซับซ้อนของโค้ด

1. Extract complex logic ไปยัง helper functions
2. ทำ `/simplify-code` เพื่อทำให้โค้ดกระชับ
3. แยก large functions ออกเป็น smaller functions

### 3. Improve Code Structure

ปรับปรุงโครงสร้างโค้ด

1. จัดเรียง imports ตาม groups (external, internal, types)
2. ทำ `/separate-of-concern` เพื่อแยก responsibilities

### 4. Enhance Clarity

เพิ่มความชัดเจนของโค้ด

1. ทำ `/improve-naming` เพื่อปรับปรุงการตั้งชื่อ
2. ลบ magic numbers และ magic strings ใช้ constants แทน
3. เพิ่ม comments สำหรับ business logic ที่ซับซ้อน

### 5. Improve Control Flow

ปรับปรุง control flow ให้อ่านง่าย

1. ใช้ array methods แทน loops (map, filter, reduce)
2. ใช้ switch statements สำหรับ multiple conditions

### 6. Add Documentation

เพิ่ม documentation ที่เหมาะสม

1. ทำ `/follow-code-quality` เพื่อเขียน documentation ครบถ้วน

### 7. Validate And Verify

ตรวจสอบและ validate improvements

1. ทำ `/run-check` เพื่อตรวจสอบ lint, typecheck
2. ทำ `/run-build` เพื่อตรวจสอบ build
3. ทำ `/update-reference` เพื่ออัพเดท references หากมี file operations

## Rules

### 1. Complexity Management

จัดการความซับซ้อนของโค้ด

- Functions ไม่เกิน 30 บรรทัด
- Nesting ไม่เกิน 3 levels
- Cyclomatic complexity ต่ำ
- Extract complex logic ไป helper functions
- ใช้ composition แทน inheritance
- ใช้ single responsibility principle

### 2. Naming And Clarity

ใช้การตั้งชื่อที่ชัดเจน

- ชื่อบอก purpose ชัดเจน
- ใช้ domain language ที่ถูกต้อง
- หลีกเลี่ยง abbreviations ยกเว้นที่รู้จักกันดี
- ชื่อสั้นแต่ชัดเจน
- ใช้คำเชิงบวก (is_valid) ไม่ใช่เชิงลบ
- ทำ `/improve-naming` เพื่อปรับปรุงการตั้งชื่อ

### 3. Code Structure

จัดโครงสร้างโค้ดอย่างเป็นระบบ

- จัดเรียง imports ตาม groups
- จัดเรียง methods ตาม logical order
- ใช้ blank lines สำหรับ grouping
- จัดกลุ่ม related code ไว้ด้วยกัน
- ใช้ barrel exports สำหรับ clean imports
- ทำ `/separate-of-concern` เพื่อแยก responsibilities

### 4. Control Flow

จัดการ control flow ให้อ่านง่าย

- ใช้ early returns แทน deep nesting
- ใช้ guard clauses สำหรับ validation
- ใช้ ternary operators สำหรับ simple conditions
- หลีกเลี่ยง nested ternary operators
- ใช้ array methods แทน loops
- ใช้ switch statements สำหรับ multiple conditions

### 5. Documentation

เขียน documentation ที่เหมาะสม

- JSDoc comments สำหรับ public functions
- อธิบาย parameters และ return types
- ระบุ side effects ที่ชัดเจน
- เพิ่ม examples สำหรับ functions ที่ซับซ้อน
- หลีกเลี่ยง comments สำหรับ self-documenting code
- ทำ `/follow-code-quality` เพื่อเขียน documentation ครบถ้วน

### 6. Constants And Magic Values

จัดการ constants และ magic values

- ลบ magic numbers และ magic strings ใช้ constants แทน
- ใช้ constants สำหรับ values ที่มีความหมาย
- จัดกลุ่ม constants ตาม domain
- แยก constants ไปไฟล์ `constants/` ถ้ามีมาก
- ใช้ enums สำหรับ related constants
- ตั้งชื่อ constants ที่บอกความหมายชัดเจน

## Expected Outcome

- Functions มีความยาวไม่เกิน 30 บรรทัด
- Nesting ไม่เกิน 3 levels
- ชื่อ variables และ functions ชัดเจน
- Control flow อ่านง่าย
- Code structure เป็นระเบียบ
- Documentation ครบถ้วน
- ไม่มี magic numbers หรือ strings
- Code อ่านง่ายและ maintainable
