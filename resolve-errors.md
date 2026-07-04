---
title: Resolve Errors
description: Systematic error resolution by identifying root cause, applying minimal changes, and verifying solutions
auto_execution_mode: 3
related_workflows:
  - /refactor
  - /analyze-errors
  - /no-use-ignore
  - /use-scripts
  - /check-long-files
---

## Goal

แก้ไข error อย่างมีประสิทธิภาพโดยระบุ root cause แก้ไขที่จุดเดียว และตรวจสอบว่าแก้ไขถูกต้อง

## Scope

แก้ไข errors ที่เกิดขึ้นจากการรัน commands, linting, type checking, หรือ testing

## Execute

### 1. Read Refactor Workflow

อ่าน `/refactor` ก่อนเริ่มแก้ไข error เพื่อเข้าใจโครงสร้างและมาตรฐานของ codebase

1. ทำ `/refactor` เพื่ออ่าน refactor workflow ก่อนแก้ไข error
2. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องแบบ recursive

### 2. Analyze Error

วิเคราะห์ error message และ context อย่างละเอียด

1. อ่าน error message ทั้งหมดรวม stack trace
2. ระบุไฟล์และบรรทัดที่เกิด error
3. ดู context รอบๆ จุดที่ error เกิด
4. ระบุประเภทของ error (`syntax`, `runtime`, `type`, `logic`)

### 3. Identify Root Cause

หมายเหตุ: ถ้า errors ซับซ้อนหรือไม่ชัดเจน ให้ทำ `/analyze-errors` ก่อนเพื่อวิเคราะห์และจัดลำดับ

1. ติดตาม call stack ย้อนกลับเพื่อหาจุดเริ่มต้น
2. ระบุสาเหตุที่แท้จริง ไม่ใช่แก้เฉพาะ symptom
3. ตรวจสอบ data flow และ dependencies ที่เกี่ยวข้อง
4. ใช้ debugging tools (`debugger`, `logging`, `breakpoints`) ตามความเหมาะสม

### 4. Prioritize Files By Length

หมายเหตุ: ถ้า errors มีจำนวนมาก ให้จัดลำดับการแก้ไขตามความยาวไฟล์

1. ทำ `/use-scripts` เพื่อเช็คความยาวไฟล์ที่มี error
2. แก้ไขไฟล์ที่สั้นกว่า 250 บรรทัดก่อน
3. ถ้าไฟล์ยาวกว่า 250 บรรทัด ให้ทำ `/refactor` ก่อนแก้ไข error
4. แก้ไข errors ในไฟล์ที่ refactor แล้ว

### 5. Apply Minimal Fix

1. แก้ไขที่จุดเดียวที่เป็นปัญหาจริง
2. ทำการเปลี่ยนแปลงน้อยที่สุดที่จำเป็น
3. ถ้า error มีจำนวนมาก ให้ทำ `/use-scripts` เพื่อ automate การแก้ไข

### 6. Review Fix

1. ตรวจสอบว่าการแก้ไขแก้ root cause โดยตรง
2. ตรวจสอบว่าการแก้ไขไม่สร้าง side effects ใหม่
3. ตรวจสอบว่า code style เหมาะสมและ consistent

### 7. Check For Ignore Patterns

ทำตาม `/no-use-ignore` ห้ามใช้ ignore comments/attributes ทุกภาษาเพื่อ suppress errors หรือ warnings

### 8. Document And Learn

1. เขียน comment อธิบายสาเหตุของการแก้ไขถ้าจำเป็น
2. เพิ่ม error handling หรือ validation ถ้าจำเป็น
3. บันทึก pattern ของปัญหาเพื่อใช้อ้างอิง
4. พิจารณาเพิ่ม test case เพื่อป้องกัน regression

## Rules

### 1. Root Cause Analysis

- อ่าน error message อย่างละเอียด อย่าข้าม stack trace
- ติดตาม call stack ย้อนกลับเพื่อหาจุดเริ่มต้น
- ระบุสาเหตุที่แท้จริง ไม่ใช่แก้เฉพาะ symptom
- ใช้ debugging tools (`debugger`, `logging`, `breakpoints`) ตามความเหมาะสม
- ตรวจสอบ data flow และ dependencies ที่เกี่ยวข้อง

### 2. Minimal Change Principle

- แก้ไขที่จุดเดียวที่เป็นปัญหาจริง
- ทำการเปลี่ยนแปลงน้อยที่สุดที่จำเป็น
- หลีกเลี่ยงการแก้หลายจุดพร้อมกัน
- รักษา consistency กับ code style ที่มีอยู่
- ตรวจสอบว่าไม่สร้าง side effects ใหม่

### 3. Verification Standards

- ตรวจสอบว่าการแก้ไขแก้ root cause โดยตรง
- ตรวจสอบว่าการแก้ไขไม่สร้าง side effects ใหม่
- ตรวจสอบว่า code style เหมาะสมและ consistent
- ตรวจสอบว่ามี comments อธิบายสาเหตุของการแก้ไขถ้าจำเป็น

### 4. Error Classification

| Type | Approach |
|------|----------|
| `Syntax Error` | ตรวจสอบ syntax, typos, missing brackets, quotes |
| `Runtime Error` | ตรวจสอบ null/undefined, type mismatches, out of bounds |
| `Type Error` | ตรวจสอบ type definitions, type assertions, interfaces |
| `Logic Error` | ตรวจสอบ algorithm, conditions, data transformations |
| `Network Error` | ตรวจสอบ API calls, endpoints, request/response format |

### 5. No Ignore Patterns

- ทำตาม `/no-use-ignore`

### 6. Documentation

- เขียน comment อธิบายสาเหตุของการแก้ไขถ้าจำเป็น
- เพิ่ม error handling หรือ validation ถ้าจำเป็น
- บันทึก pattern ของปัญหาเพื่อใช้อ้างอิง
- พิจารณาเพิ่ม test case เพื่อป้องกัน regression

## Expected Outcome

- error ถูกแก้ไขอย่างถาวรจาก root cause
- ไม่มี side effects ใหม่เกิดขึ้นจากการแก้ไข
- code quality รักษาไว้หรือดีขึ้นกว่าเดิม
- มี documentation หรือ comments อธิบายการแก้ไข
