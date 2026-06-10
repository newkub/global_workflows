---
title: Simplify Code
description: ทำให้โค้ดกระชับ อ่านง่าย ไม่ซ้ำซ้อน
auto_execution_mode: 3
related_workflows:
  - /content-quality
  - /simplify-content
---

## Goal

ทำให้โค้ดกระชับ อ่านง่าย และไม่ซ้ำซ้อน

## Scope

ใช้กับ code ทุกภาษา (TypeScript, JavaScript, Python, Go, Rust, etc.)

## Execute

### 1. Remove Unused Code

1. ลบ variables, functions, classes ที่ไม่ได้ใช้
2. ลบ imports ที่ไม่ได้ใช้
3. ลบ dead code ที่ไม่สามารถถึงได้
4. ลบ commented-out code ที่ไม่จำเป็น

### 2. Simplify Functions

1. แยก functions ที่ยาวเกินไป
2. ลบ parameters ที่ไม่ได้ใช้
3. ลบ nested conditions ที่ซับซ้อน
4. ใช้ early returns แทน nested conditions

### 3. Remove Redundancy

1. รวม functions ที่ทำงานคล้ายกัน
2. ลบ duplicate code
3. ใช้ helper functions แทนการเขียนซ้ำ
4. ใช้ abstractions ที่เหมาะสม

### 4. Improve Naming

1. ตั้งชื่อ variables, functions ที่บอก purpose ชัดเจน
2. ใช้คำศัพท์สม่ำเสมอ
3. หลีกเลี่ยง abbreviations ที่ไม่รู้จัก
4. ใช้ naming conventions ตามภาษา

### 5. Optimize Structure

1. จัดระเบียบ imports ตามกลุ่ม
2. จัดเรียง methods ตามลำดับความสำคัญ
3. แยก concerns ที่แตกต่างกัน
4. ใช้ modules หรือ files แยกตามความรับผิดชอบ

## Rules

- ลบ code ที่ไม่ได้ใช้ทั้งหมด
- แยก functions ที่ยาวเกิน 20-30 บรรทัด
- ลบ nested conditions มากกว่า 3 ชั้น
- ใช้ early returns แทน nested conditions
- ตั้งชื่อให้บอก purpose ชัดเจน
- ใช้คำศัพท์สม่ำเสมอทั้ง codebase
- รวม duplicate code ไว้ที่เดียว
- แยก concerns ตาม single responsibility principle

## Expected Outcome

- โค้ดกระชับ อ่านง่าย
- ไม่มี dead code หรือ unused code
- Functions สั้นและทำงานเดียว
- ไม่มี nested conditions ซับซ้อน
- ตั้งชื่อชัดเจน สม่ำเสมอ
- ไม่ซ้ำซ้อน เป็น single source of truth

