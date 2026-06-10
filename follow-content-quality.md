---
title: Follow Content Quality
description: จัดรูปแบบและคุณภาพเนื้อหาให้ถูกต้อง อ่านง่าย สอดคล้องกัน
auto_execution_mode: 3
---

## Goal

สร้างเนื้อหาที่มีคุณภาพสูง อ่านง่าย สอดคล้องกัน และไม่ซ้ำซ้อน

## Scope

ใช้กับ content ทุกประเภท (markdown, documentation, workflow files)

## Execute

### 1. Check Format And Structure

ตรวจสอบรูปแบบและโครงสร้าง

1. ตรวจสอบ spacing, indentation, headings สม่ำเสมอ
2. ตรวจสอบ hierarchy ชัดเจน (##, ###, -)
3. ตรวจสอบความยาวและ grouping
4. ตรวจสอบการใช้ backticks

### 2. Simplify Structure

ทำให้โครงสร้างกระชับและชัดเจน

1. ลบ sections ที่ไม่จำเป็นหรือซ้ำซ้อน
2. รวม sections ที่มีเนื้อหาคล้ายกัน
3. ลบ subsections ที่ไม่มีคุณค่าเพิ่ม
4. รวม steps ที่ทำงานคล้ายกัน

### 3. Condense Text

ทำให้เนื้อหากระชับและชัดเจน

1. ลบคำที่ไม่จำเป็น
2. ใช้คำที่กระชับและมีความหมายชัด
3. ลบคำซ้ำซ้อนในประโยคเดียวกัน
4. ใช้รูปแบบกระชับ

### 4. Verify Content Quality

ตรวจสอบคุณภาพเนื้อหา

1. ตรวจสอบความชัดเจน เข้าใจง่าย ไม่กำกวม
2. ตรวจสอบคำศัพท์และความสม่ำเสมอ
3. ตรวจสอบความถูกต้องของข้อมูลและ references
4. ตรวจสอบว่ายังคงเนื้อหาสำคัญครบถ้วน

### 5. Make Content Explicit

เขียน content ให้ชัดเจน explicit มากกว่า implicit

1. เขียน documentation สำหรับ logic ที่ซับซ้อน
2. เขียน messages ที่ชัดเจนและให้ context
3. เขียน comments อธิบาย "why" ไม่ใช่ "what"
4. ใช้ descriptions และ labels ที่บอก purpose ชัดเจน

### 6. Remove Redundancy

ลบความซ้ำซ้อน

1. ลบข้อมูลที่ซ้ำซ้อนระหว่าง Execute และ Rules
2. ใช้ references แทนการเขียนซ้ำ
3. รวบรวมรายละเอียดที่เหมือนกันไว้ที่เดียว
4. ตรวจสอบว่าเป็น single source of truth

## Rules

### 1. Format And Structure

ใช้รูปแบบและโครงสร้างที่สม่ำเสมอ

- ใช้ spacing, indentation, headings สม่ำเสมอ
- หัวข้อใช้ Title Case ภาษาอังกฤษ รายการใช้ภาษาไทย
- ลบ subsections ที่ไม่จำเป็นให้เป็น bullet points
- รวม Execute steps ที่ทำงานคล้ายกัน
- Grouping และ hierarchy ชัดเจน logical

### 2. Content Clarity

เขียนเนื้อหาให้ชัดเจนและเข้าใจง่าย

- เขียนให้ชัดเจน เข้าใจง่าย ไม่กำกวม
- ใช้คำศัพท์สม่ำเสมอทั่วเอกสาร
- ใช้คำที่กระชับ มีความหมายชัด
- ข้อมูลถูกต้องตาม principle และ references มีอยู่จริง

### 3. Explicit Content

เขียน content ให้ชัดเจน explicit มากกว่า implicit

- เขียน documentation สำหรับ logic ที่ซับซ้อน
- อธิบาย "why" ไม่ใช่แค่ "what"
- เขียน error messages ชัดเจนแกะได้
- ให้ context ใน messages (สิ่งที่ผิด, ทำไม, แก้ยังไง)
- ใช้ descriptions และ labels ที่บอก purpose ชัดเจน
- หลีกเลี่ยง generic messages และ descriptions
- ใช้ consistent terminology และ tone

### 4. Non-Redundancy

หลีกเลี่ยงความซ้ำซ้อน

- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- เก็บเนื้อหาสำคัญครบถ้วน
- ความยาวเหมาะสมกับเนื้อหา
- Single source of truth ไม่ซ้ำซ้อน

## Expected Outcome

- เนื้อหาอ่านง่าย กระชับ ตรงประเด็น
- ชัดเจน เข้าใจง่าย ไม่กำกวม
- สอดคล้องกันทั้งหมด
- ถูกต้องตาม principle ที่กำหนด
- จัดระเบียบดี มี hierarchy ชัดเจน
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- เป็น single source of truth
- ยังคงเนื้อหาสำคัญครบถ้วน
- Content เขียนให้ explicit ชัดเจน ไม่กำกวม
- Documentation, messages, comments มีคุณภาพ
- ลดความสับสนจาก implicit content
- บำรุงรักษาได้ง่ายขึ้น
