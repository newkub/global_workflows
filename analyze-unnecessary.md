---
title: Analyze Unnecessary

description: วิเคราะห์และระบุสิ่งที่ไม่จำเป็นใน codebase เพื่อลดความซับซ้อนและขนาด

auto_execution_mode: 3

related_workflows:
  - /check-unused-deps
  - /check-unsued-files
  - /refactor-to-functional
  - /simplify-code

---

## Goal

วิเคราะห์และระบุสิ่งที่ไม่จำเป็นใน codebase เพื่อลดความซับซ้อนและขนาดของโปรเจกต์

## Scope

ครอบคลุม unused code, dead code, unnecessary dependencies, duplicate code, over-engineering, unused imports, dead variables, redundant logic

## Execute

### 1. Analyze Unused Dependencies

1. ทำ `/check-unused-deps` เพื่อตรวจสอบ dependencies ที่ไม่ได้ใช้
2. ตรวจสอบ dev dependencies ที่ไม่จำเป็น
3. ตรวจสอบ peer dependencies ที่ไม่ถูกต้อง
4. ตรวจสอบ version conflicts ระหว่าง dependencies

### 2. Analyze Unused Files

1. ทำ `/check-unsued-files` เพื่อตรวจสอบไฟล์ที่ไม่ได้ใช้
2. ตรวจสอบ components ที่ไม่ถูก import
3. ตรวจสอบ utilities ที่ไม่ถูกเรียกใช้
4. ตรวจสอบ types ที่ไม่ถูก reference

### 3. Analyze Dead Code

1. ค้นหา functions ที่ไม่ถูกเรียกใช้ด้วย `Grep`
2. ค้นหา variables ที่ไม่ถูกใช้
3. ค้นหา branches ที่ไม่เคย execute
4. ค้นหา comments ที่เป็น placeholder (TODO, FIXME, HACK)

### 4. Analyze Duplicate Code

1. ทำ `/check-duplication` เพื่อตรวจสอบ code duplication
2. ระบุ patterns ที่ซ้ำซ้อน
3. ระบุ logic ที่สามารถ extract เป็น functions
4. ระบุ components ที่สามารถ reuse ได้

### 5. Analyze Over-Engineering

1. ทำ `/analyze-over-engineering` เพื่อตรวจสอบ over-engineering
2. ระบุ abstractions ที่ไม่จำเป็น
3. ระบุ patterns ที่ซับซ้อนเกินไป
4. ระบุ layers ที่ไม่จำเป็น

### 6. Analyze Redundant Logic

1. ค้นหา conditional checks ที่ซ้ำซ้อน
2. ค้นหา validations ที่ duplicate
3. ค้นหา transformations ที่ไม่จำเป็น
4. ค้นหา nested conditions ที่สามารถ simplify ได้

### 7. Generate Report

1. รวบรวม findings ทั้งหมด
2. จัดลำดับตาม impact และ priority
3. สร้าง action items พร้อม recommendations
4. คำนวณ potential savings (bundle size, maintenance cost)

## Rules

### 1. Code Analysis Tools

ใช้ tools ที่เหมาะสมสำหรับตรวจสอบ

- `knip` สำหรับ unused files, dependencies, exports
- `depcheck` สำหรับ unused dependencies
- `jscpd` สำหรับ code duplication
- `eslint` สำหรับ unused variables
- `Grep` สำหรับ pattern matching และ code search
- `ast-grep` สำหรับ structural code analysis

### 2. Impact Assessment

ประเมิน impact ของแต่ละ issue

- High impact: unused dependencies, large duplicated blocks, over-engineered abstractions
- Medium impact: unused files, small duplications, redundant logic
- Low impact: unused variables, dead branches, placeholder comments
- พิจารณา maintenance cost และ bundle size impact

### 3. Removal Safety

ตรวจสอบความปลอดภัยก่อนลบ

- ตรวจสอบ references ทั้งหมดก่อนลบ
- รัน tests หลังจากลบ
- ตรวจสอบ runtime behavior
- ตรวจสอบ build process
- ตรวจสอบ documentation ที่อ้างอิง

### 4. Refactoring Principles

ทำตาม best practices เมื่อ refactor

- ทำ `/follow-clean-architecture` สำหรับ structure
- ทำ `/follow-functional-programming` สำหรับ logic
- ทำ `/simplify-code` สำหรับ complexity
- ทำ `/refactor-to-functional` สำหรับ transformation
- ทำ `/separate-of-concern` สำหรับ responsibilities

### 5. Documentation Updates

อัพเดท documentation หลังจากลบ

- อัพเดท `README` หากลบ features
- อัพเดท `CHANGELOG` หากลบ public APIs
- อัพเดท comments หากลบ functions
- อัพเดท examples หากลบ components

## Expected Outcome

- รายงานสิ่งที่ไม่จำเป็นทั้งหมดใน codebase
- Action items พร้อม priority และ recommendations
- Reduction ใน bundle size และ maintenance cost
- Codebase ที่สะอาดและ maintain ง่ายขึ้น
- ไม่มี dead code หรือ unused dependencies
- ไม่มี code duplication ที่สำคัญ
- ไม่มี over-engineering ที่ไม่จำเป็น
