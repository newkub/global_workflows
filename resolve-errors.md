---
title: Resolve Errors
description: แก้ไข error อย่างเป็นระบบโดยระบุ root cause แก้ไขน้อยที่สุด และตรวจสอบผลลัพธ์
auto_execution_mode: 3
related_workflows:
  - /refactor
  - /read-related-workflows
  - /analyze-errors
  - /no-use-ignore
  - /use-scripts
  - /check-long-files
  - /follow-code-quality
  - /follow-debugging
  - /deep-debug
---

## Goal

แก้ไข error อย่างมีประสิทธิภาพโดยระบุ root cause แก้ไขน้อยที่สุด และตรวจสอบว่าแก้ไขถูกต้อง

## Scope

ใช้สำหรับแก้ไข error ที่เกิดจากการรัน commands, linting, type checking, หรือ testing ที่สามารถแก้ได้โดยตรง ไม่ใช่การ debug อย่างเป็นระบบ (ใช้ `/deep-debug`) และไม่ใช่การ debug หาสาเหตุอย่างเดียว (ใช้ `/debug-issue`)

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

### 1. When To Use Resolve Errors

ใช้ resolve errors เมื่อ:

- Error ชัดเจน ระบุได้ว่าเกิดจากอะไร
- เป็น isolated error ที่แก้ได้โดยตรง
- ไม่ต้องวางแผนซับซ้อน แก้ได้ใน 1-2 จุด
- เกิดจากการรัน lint, typecheck, test, หรือ build

### 2. When Not To Use Resolve Errors

ไม่ใช้ resolve errors เมื่อ:

- Error ซับซ้อน มีหลายจุด ต้องวางแผน (ใช้ `/deep-debug`)
- ต้อง debug หาสาเหตุก่อน (ใช้ `/debug-issue`)
- ต้องวิเคราะห์และจัดลำดับ errors มากมาย (ใช้ `/analyze-errors`)
- เป็น logic error ที่ต้องวิเคราะห์เชิงระบบ (ใช้ `/deep-thinking`)

### 3. Resolve Errors vs Deep Debug vs Debug Issue

- `/resolve-errors` = แก้ error โดยตรง รู้สาเหตุแล้ว แก้น้อยที่สุด
- `/deep-debug` = debug อย่างเป็นระบบ ตั้งแต่ reproduce → root cause → fix → prevent
- `/debug-issue` = หา root cause ของปัญหา ยังไม่แก้
- ใช้ `/resolve-errors` เมื่อรู้ว่าต้องแก้อะไร
- ใช้ `/deep-debug` เมื่อต้องวางแผนแก้และป้องกันซ้ำ
- ใช้ `/debug-issue` เมื่อยังไม่รู้สาเหตุ

### 4. Error Classification

| Type | Approach |
|------|----------|
| `Syntax Error` | ตรวจสอบ syntax, typos, missing brackets, quotes |
| `Runtime Error` | ตรวจสอบ null/undefined, type mismatches, out of bounds |
| `Type Error` | ตรวจสอบ type definitions, type assertions, interfaces |
| `Logic Error` | ตรวจสอบ algorithm, conditions, data transformations |
| `Network Error` | ตรวจสอบ API calls, endpoints, request/response format |
| `Build Error` | ตรวจสอบ config, dependencies, import paths |
| `Test Error` | ตรวจสอบ assertions, mock data, test setup |

### 5. No Ignore Patterns

- ทำตาม `/no-use-ignore`
- ห้ามใช้ ignore comments/attributes ทุกภาษาเพื่อ suppress errors หรือ warnings
- แก้ที่ source ไม่ใช่ซ่อน error

### 6. Fix Principles

- **Root cause over symptom** — แก้ที่สาเหตุ ไม่ใช่ที่อาการ
- **Minimal over maximal** — แก้น้อยที่สุดที่จำเป็น
- **Upstream over downstream** — แก้ต้นน้ำดีกว่าปลายน้ำ
- **Verify before assume** — ยืนยันด้วยการรัน ไม่ใช่คาดการณ์
- **No ignore** — ห้าม suppress error ด้วย ignore patterns

### 7. Time Budget

- Error เล็ก (single-line fix): ≤ 2 นาที
- Error กลาง (หลายบรรทัด 1 ไฟล์): ≤ 5 นาที
- Error ใหญ่ (หลายไฟล์): ≤ 15 นาที หรือใช้ `/deep-debug`
- ถ้าใช้เวลานานเกินไป ให้ใช้ `/deep-debug` แทน

### 8. Integration With Other Workflows

เชื่อมโยงกับ workflows อื่น:

- ทำ `/analyze-errors` ถ้า errors มีจำนวนมาก ต้องจัดลำดับ
- ทำ `/debug-issue` ถ้ายังไม่พบ root cause
- ทำ `/deep-debug` ถ้า error ซับซ้อน ต้องวางแผนแก้และป้องกันซ้ำ
- ทำ `/no-use-ignore` เพื่อตรวจสอบว่าไม่มี ignore patterns
- ทำ `/run-test` หลังแก้เพื่อยืนยันว่าไม่ทำลาย test อื่น
- ทำ `/memorize` เพื่อจดจำบทเรียนจาก error

## Expected Outcome

- Error ถูกแก้ไขอย่างถาวรจาก root cause
- ไม่มี side effects ใหม่เกิดขึ้นจากการแก้ไข
- Code quality รักษาไว้หรือดีขึ้นกว่าเดิม
- ไม่มี ignore patterns ถูกเพิ่มเข้ามา
- มี documentation หรือ comments อธิบายการแก้ไขถ้าจำเป็น
