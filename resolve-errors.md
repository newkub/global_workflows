---
title: Resolve Errors
description: Systematic error resolution by identifying root cause, applying minimal changes, and verifying solutions
auto_execution_mode: 3
---

## Goal

แก้ไข error อย่างมีประสิทธิภาพโดยระบุ root cause แก้ไขที่จุดเดียว และตรวจสอบว่าแก้ไขถูกต้อง

## Scope

แก้ไข errors ที่เกิดขึ้นจากการรัน commands, linting, type checking, หรือ testing

## Execute

### 1. Analyze Error

วิเคราะห์ error message และ context อย่างละเอียด

1. อ่าน error message ทั้งหมมรวม stack trace
2. ระบุไฟล์และบรรทัดที่เกิด error
3. ดู context รอบๆ จุดที่ error เกิด
4. ระบุประเภทของ error (`syntax`, `runtime`, `type`, `logic`)

### 2. Identify Root Cause

หมายเหตุ: ถ้า errors ซับซ้อนหรือไม่ชัดเจน ให้ทำ `/analyze-errors` ก่อนเพื่อวิเคราะห์และจัดลำดับ

1. ติดตาม call stack ย้อนกลับเพื่อหาจุดเริ่มต้น
2. ระบุสาเหตุที่แท้จริง ไม่ใช่แก้เฉพาะ symptom
3. ตรวจสอบ data flow และ dependencies ที่เกี่ยวข้อง
4. ใช้ debugging tools (`debugger`, `logging`, `breakpoints`) ตามความเหมาะสม

### 3. Prioritize Files By Length

หมายเหตุ: ถ้า errors มีจำนวนมาก ให้จัดลำดับการแก้ไขตามความยาวไฟล์

1. ทำ `/use-scripts` เพื่อเช็คความยาวไฟล์ที่มี error
2. แก้ไขไฟล์ที่สั้นกว่า 250 บรรทัดก่อน
3. ถ้าไฟล์ยาวกว่า 250 บรรทัด ให้ทำ `/refactor-long-files-to-single-responsibility` ก่อนแก้ไข error
4. แก้ไข errors ในไฟล์ที่ refactor แล้ว

### 4. Apply Minimal Fix

ทำตาม Rules 2 (Minimal Change Principle)

1. แก้ไขที่จุดเดียวที่เป็นปัญหาจริง
2. ถ้า error มีจำนวนมาก ให้ทำ `/use-scripts` เพื่อ automate การแก้ไข

### 5. Review Fix

ทำตาม Rules 3 (Verification Standards)

### 6. Check for Ignore Patterns

ทำตาม Rules 5 (No Ignore Patterns)

### 7. Document and Learn

ทำตาม Rules 6 (Documentation)

## Rules

### 1. Root Cause Analysis

วิเคราะห์สาเหตุของ error อย่างละเอียดเพื่อระบุ root cause ที่แท้จริง

- อ่าน error message อย่างละเอียด อย่าข้าม stack trace
- ติดตาม call stack ย้อนกลับเพื่อหาจุดเริ่มต้น
- ระบุสาเหตุที่แท้จริง ไม่ใช่แก้เฉพาะ symptom
- ใช้ debugging tools (`debugger`, `logging`, `breakpoints`) ตามความเหมาะสม
- ตรวจสอบ data flow และ dependencies ที่เกี่ยวข้อง

### 2. Minimal Change Principle

ทำการแก้ไขน้อยที่สุดที่จำเป็นเพื่อหลีกเลี่ยงการแก้หลายจุดพร้อมกัน

- แก้ไขที่จุดเดียวที่เป็นปัญหาจริง
- ทำการเปลี่ยนแปลงน้อยที่สุดที่จำเป็น
- หลีกเลี่ยงการแก้หลายจุดพร้อมกัน
- รักษา consistency กับ code style ที่มีอยู่
- ตรวจสอบว่าไม่สร้าง side effects ใหม่

### 3. Verification Standards

ตรวจสอบว่าการแก้ไขถูกต้องและเหมาะสมเพื่อให้แน่ใจว่าไม่มี side effects ใหม่เกิดขึ้น

- ตรวจสอบว่าการแก้ไขแก้ root cause โดยตรง
- ตรวจสอบว่าการแก้ไขไม่สร้าง side effects ใหม่
- ตรวจสอบว่า code style เหมาะสมและ consistent
- ตรวจสอบว่ามี comments อธิบายสาเหตุของการแก้ไขถ้าจำเป็น

### 4. Error Classification

จัดประเภท error เพื่อเลือกวิธีแก้ไขที่เหมาะสมและเพิ่มประสิทธิภาพในการแก้ไข

| Type | Approach |
|------|----------|
| `Syntax Error` | ตรวจสอบ syntax, typos, missing brackets, quotes |
| `Runtime Error` | ตรวจสอบ null/undefined, type mismatches, out of bounds |
| `Type Error` | ตรวจสอบ type definitions, type assertions, interfaces |
| `Logic Error` | ตรวจสอบ algorithm, conditions, data transformations |
| `Network Error` | ตรวจสอบ API calls, endpoints, request/response format |

### 5. No Ignore Patterns

ห้ามใช้ ignore comments/attributes ทุกภาษาเพื่อ suppress errors หรือ warnings

- ทำตาม `/no-use-ignore`

### 6. Documentation

บันทึกประสบการณ์และสร้างเอกสารเพื่อป้องกันปัญหาซ้ำและเพิ่มประสิทธิภาพในการแก้ไข

- เขียน comment อธิบายสาเหตุของการแก้ไขถ้าจำเป็น
- เพิ่ม error handling หรือ validation ถ้าจำเป็น
- บันทึก pattern ของปัญหาเพื่อใช้อ้างอิง
- พิจารณาเพิ่ม test case เพื่อป้องกัน regression

## Expected Outcome

- error ถูกแก้ไขอย่างถาวรจาก root cause
- ไม่มี side effects ใหม่เกิดขึ้นจากการแก้ไข
- code quality รักษาไว้หรือดีขึ้นกว่าเดิม
- มี documentation หรือ comments อธิบายการแก้ไข
