---
title: Analyze Over Engineering
description: วิเคราะห์และระบุ code หรือ solution ที่ over-engineer
auto_execution_mode: 3
---

## Goal

วิเคราะห์ว่า code หรือ solution ที่กำลังทำอยู่ over-engineer หรือไม่ และแนะนำวิธีทำให้กระชับขึ้น

## Scope

ใช้สำหรับวิเคราะห์ code หรือ solution ที่อาจ over-engineer ทั้งใน workspace และ global workflows

## Execute

### 1. Analyze Complexity

ตรวจสอบความซับซ้อนของ solution

1. ตรวจสอบจำนวน `layers` และ `abstractions`
2. ตรวจสอบ `dependencies` ที่ไม่จำเป็น
3. ตรวจสอบจำนวน `files` และ `functions`
4. ตรวจสอบ `cyclomatic complexity`
5. ตรวจสอบจำนวน `abstractions` ที่ไม่ได้ใช้

### 2. Check Necessity

ตรวจสอบว่าแต่ละส่วนจำเป็นไหม

1. ตรวจสอบว่าทุกส่วนมี `business value` หรือไม่
2. ตรวจสอบว่าจำเป็นต้องมี `abstraction` นี้ไหม
3. ตรวจสอบว่า `feature` นี้จะใช้จริงไหม
4. ตรวจสอบว่าสามารถทำแบบ `simpler` ได้ไหม
5. ตรวจสอบว่ามี `duplicate logic` ไหม

### 3. Simplify

แนะนำวิธีทำให้กระชับ

1. ลบ `abstractions` ที่ไม่จำเป็น
2. รวม `functions` ที่ทำงานคล้ายกัน
3. ลบ `dependencies` ที่ไม่ใช้
4. ใช้ `built-in features` แทน `custom solutions`
5. ทำให้ `code` ตรงไปตรงมาขึ้น

### 4. Verify

ตรวจสอบว่ายังทำงานได้หลังจาก simplify

1. รัน `tests` ทั้งหมด
2. ตรวจสอบว่ายังคง `requirements` เดิม
3. ตรวจสอบ `performance` ไม่ลดลง
4. ตรวจสอบ `maintainability` ไม่ลดลง
5. ตรวจสอบว่า `code` อ่านง่ายขึ้น

## Rules

### 1. YAGNI Principle

ใช้หลักการ You Aren't Gonna Need It

- ไม่ต้องทำสิ่งที่ยังไม่ต้องการ
- ไม่ต้องทำสิ่งที่อาจจะต้องการในอนาคต
- ไม่ต้องทำสิ่งที่เป็น `just in case`
- ทำเฉพาะที่จำเป็นตอนนี้
- ทำเฉพาะที่มี `business value` จริง

### 2. KISS Principle

ใช้หลักการ Keep It Simple, Stupid

- ทำให้ `code` ง่ายที่สุดที่เป็นไปได้
- หลีกเลี่ยง `abstractions` ที่ไม่จำเป็น
- หลีกเลี่ยง `patterns` ที่ไม่จำเป็น
- ใช้ `solutions` ที่ตรงไปตรงมา
- ทำให้ `code` อ่านง่ายและเข้าใจง่าย

### 3. Minimal Changes

ใช้การเปลี่ยนแปลงน้อยที่สุด

- ใช้ `single-line changes` เมื่อเป็นไปได้
- ไม่ `refactor` ทั้งหมดถ้าไม่จำเป็น
- ทำเฉพาะที่จำเป็นเพื่อแก้ปัญหา
- ไม่เพิ่ม `features` ใหม่ระหว่างการแก้
- ไม่ `refactor` ถ้าไม่มีปัญหาจริง

### 4. Business Value

โฟกัสที่ business value ไม่ใช่ technical complexity

- โฟกัสที่ `solving business problems`
- ไม่โฟกัสที่ `technical perfection`
- ไม่โฟกัสที่ `code aesthetics`
- ไม่โฟกัสที่ `patterns` และ `architectures`
- โฟกัสที่ `delivering value` ให้ users

## Expected Outcome

- `Code` ที่กระชับและเข้าใจง่าย
- ลด `complexity` โดยไม่ลด `functionality`
- ลด `dependencies` ที่ไม่จำเป็น
- `Code` ที่ maintain ง่ายขึ้น
- `Code` ที่มี `business value` ชัดเจน
