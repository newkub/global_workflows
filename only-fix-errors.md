---
title: Only Fix Errors
description: แก้ไข errors เท่านั้น ไม่เพิ่ม features หรือ refactor
auto_execution_mode: 3
related_workflows:
  - /resolve-errors
  - /analyze-errors
---

## Goal

แก้ไข errors ที่เกิดขึ้นเท่านั้น โดยไม่เพิ่ม features, refactor, หรือ improve code

## Scope

ใช้เมื่อต้องการแก้ไข errors โดยไม่เปลี่ยนแปลง behavior หรือเพิ่มฟีเจอร์ใหม่

## Execute

### 1. Fix Error Directly

1. อ่าน error messages ที่ผู้ใช้ส่งมา
2. ระบุบรรทัดที่ทำให้เกิด error
3. แก้ไขเฉพาะบรรทัดที่ error
4. ไม่รัน workflows อื่นๆ
5. ไม่รัน commands อื่นๆ

## Rules

### 1. No Workflow Execution

ห้ามรัน workflows ใดๆ:

- ไม่รัน `/analyze-errors`
- ไม่รัน `/resolve-errors`
- ไม่รัน workflows อื่นๆ ทั้งหมด
- แก้ไข error โดยตรงเท่านั้น

### 2. Minimal Changes

แก้ไขเฉพาะส่วนที่จำเป็น:

- เปลี่ยนเฉพาะบรรทัดที่ทำให้เกิด error
- ไม่ refactor code ส่วนอื่น
- ไม่เพิ่ม abstractions หรือ helper functions
- ไม่ปรับปรุง code quality

### 3. No Feature Additions

ห้ามเพิ่มฟีเจอร์ใหม่:

- ไม่เพิ่ม functionality ใหม่
- ไม่เพิ่ม configurations ใหม่
- ไม่เพิ่ม dependencies ใหม่
- ไม่เพิ่ม test cases ใหม่

### 4. No Refactoring

ห้าม refactor code:

- ไม่เปลี่ยนโครงสร้าง code
- ไม่เปลี่ยน naming conventions
- ไม่เปลี่ยน design patterns
- ไม่ปรับปรุง performance

### 5. Single Responsibility

แก้ไข error เดียวเท่านั้น:

- แก้ไข error ที่ระบุไว้เท่านั้น
- ไม่แก้ errors อื่นที่ไม่เกี่ยวข้อง
- ไม่แก้ warnings หรือ notices
- ไม่แก้ anti-patterns

### 6. Deterministic Fix

การแก้ไขต้องชัดเจน:

- รู้ว่าทำไม error ถึงเกิด
- รู้ว่าการแก้ไขจะแก้ปัญหาอย่างไร
- ไม่ใช้ workarounds หรือ hacks
- ไม่แก้โดย trial and error

## Expected Outcome

- Errors ที่ระบุหายไป
- Code ทำงานเหมือนเดิม
- ไม่มี side effects ใหม่
- ไม่มี features ใหม่
