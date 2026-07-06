---
title: With File Pattern
description: ประมวลผลและจัดการไฟล์ด้วย file patterns (glob, regex) สำหรับการค้นหาและกรอง
auto_execution_mode: 3
---


## Goal

ใช้ file patterns เพื่อ operate ไฟล์เป็นชุดใหญ่แทนการระบุทีละไฟล์ รองรับทั้ง glob patterns และ regex สำหรับ use cases ต่างๆ ตั้งแต่การค้นหา กรอง จัดกลุ่ม ไปจนถึง bulk operations

## Execute

### 1. Define Pattern Requirements

1. ระบุว่าใช้ pattern ประเภทใด: glob หรือ regex
2. กำหนด scope ของการค้นหา (root directory, recursive, specific depth)
3. ระบุ file types หรือ extensions ที่ต้องการ
4. พิจารณา exclusions (ไฟล์/โฟลเดอร์ที่ต้องข้าม)

### 2. Choose Pattern Syntax

1. Glob Patterns (แนะนำสำหรับทั่วไป)
   - `*.ext` - match ทุกไฟล์ที่มี extension นั้น
   - `**/*.ext` - match ทุกไฟล์ recursive ทุกระดับ
   - `folder/*` - match ทุกไฟล์ใน folder นั้น (ไม่ recursive)
   - `folder/**/*` - match ทุกไฟล์ใน folder และ subfolders
   - `{a,b,c}` - match หลาย patterns (brace expansion)
   - `!pattern` - negate (exclude) pattern

2. Regex Patterns (สำหรับ complex matching)
   - ใช้สำหรับ match ตามเงื่อนไขที่ซับซ้อน
   - รองรับ lookaheads, lookbehinds, complex groups
   - ต้อง escape special characters ให้ถูกต้อง

### 3. Apply Pattern Operations

1. ใช้ `find_by_name` หรือ tools ที่รองรับ glob patterns
2. ตั้งค่า `Pattern`, `Extensions`, `Excludes` ให้ครบถ้วน
3. กำหนด `MaxDepth` เมื่อต้องการจำกัดระดับการค้นหา
4. ใช้ `FullPath: true` เมื่อต้องการ match กับ full path

### 4. Validate Pattern Results

1. ตรวจสอบจำนวนไฟล์ที่ match กับ pattern
2. ยืนยันไม่มีไฟล์สำคัญถูก exclude โดยไม่ตั้งใจ
3. ตรวจสอบว่าไม่มีไฟล์ที่ไม่ต้องการถูกรวมเข้ามา
4. ทดสอบกับ subset ก่อน bulk operation

### 5. Execute Bulk Operations

1. อ่านไฟล์ทั้งหมดที่ match pattern พร้อมกัน (parallel read)
2. ประมวลผลตามลำดับ หรือ parallel ตามความเหมาะสม
3. รวมผลลัพธ์หรือ aggregate data ตามต้องการ
4. บันทึกผลลัพธ์หรือ output ไปยังไฟล์/location ที่กำหนด

## Rules

1. Pattern Selection Rules

- ใช้ glob patterns สำหรับส่วนใหญ่ use cases (ง่ายกว่า อ่านง่าย)
- ใช้ regex เฉพาะเมื่อต้องการ complex matching ที่ glob ทำไม่ได้
- หลีกเลี่ยง patterns ที่ overly broad (เช่น `**/*` โดยไม่มี exclusions)
- ใช้ brace expansion `{a,b,c}` แทนการรวมหลาย patterns

2. Performance Rules

- กำหนด `MaxDepth` เมื่อไม่ต้องการ recursive ลึก
- ใช้ `Extensions` filter แทนการ match ทุกไฟล์แล้วกรองเอง
- ยกเว้น `node_modules`, `.git`, build outputs โดย default
- ใช้ `Type: file` หรือ `Type: directory` เฉพาะเมื่อต้องการชนิดใดชนิดหนึ่ง

3. Safety Rules

- ทดสอบ pattern ด้วย dry run ก่อน destructive operations
- แสดง list ของไฟล์ที่จะถูก affect ให้ user ยืนยัน
- ใช้ exclusions อย่างระมัดระวังเพื่อไม่ให้ miss ไฟล์สำคัญ
- เก็บ backup ก่อน bulk modifications

4. Cross-Platform Rules

- ใช้ forward slashes `/` ใน patterns (แม้บน Windows)
- หลีกเลี่ยง platform-specific path assumptions
- ใช้ case-insensitive matching เมื่อต้องการรองรับทุก platform
- ทดสอบ patterns บนทั้ง Windows และ Unix-like systems

5. Pattern Documentation

- อธิบายว่า pattern ทำงานอย่างไรใน comment หรือ documentation
- ให้ตัวอย่างไฟล์ที่ match และไม่ match
- ระบุเหตุผลของ exclusions แต่ละรายการ
- อัพเดท patterns เมื่อ project structure เปลี่ยนแปลง

## Expected Outcome

- File patterns ที่เหมาะสมสำหรับ use case
- ไฟล์ที่ match pattern ทั้งหมดถูกประมวลผลอย่างถูกต้อง
- ไม่มีไฟล์สำคัญถูก exclude หรือไฟล์ที่ไม่ต้องการถูกรวม
- Documentation ครบถ้วนสำหรับ patterns ที่ใช้
- Bulk operations ทำงานได้อย่างมีประสิทธิภาพและปลอดภัย

