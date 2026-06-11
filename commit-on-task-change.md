---
title: Commit On Task Change
description: Commit เฉพาะไฟล์ที่แก้ไปจาก task ปัจจุบัน
auto_execution_mode: 3
---

## Goal

Commit เฉพาะไฟล์ที่แก้ไปจาก task ปัจจุบัน ไม่ commit ไฟล์อื่นๆ

## Scope

ใช้สำหรับ commit เฉพาะไฟล์ที่ task ปัจจุบันแก้ไป โดยไม่ commit ไฟล์อื่นๆ ที่อาจมีการเปลี่ยนแปลง

## Execute

### 1. Identify Changed Files

ระบุไฟล์ที่ task ปัจจุบันแก้ไป

1. ระบุไฟล์และบรรทัดที่ task แก้ไปจาก context
2. รัน `git status --porcelain` เพื่อดูไฟล์ที่มีการแก้ไขทั้งหมด
3. เปรียบเทียบกับ context เพื่อระบุไฟล์ที่ task แก้ไป

### 2. Stage Task Changes

Stage เฉพาะไฟล์ที่ task แก้ไป

1. ใช้ `git add <files>` เพื่อ stage เฉพาะไฟล์ที่ task แก้ไป
2. ถ้าไฟล์มีการเปลี่ยนแปลงหลายส่วน: ใช้ `git add -p` เพื่อ stage เฉพาะส่วนที่ task แก้ไป
3. ตรวจสอบด้วย `git diff --cached` ว่าเฉพาะส่วนที่ task แก้ไปถูก stage

### 3. Determine Commit Type

เลือก conventional commit type ที่เหมาะสม

1. ดู Rules ส่วน Commit Types

### 4. Write Commit Message

เขียน commit message ตาม conventional commits format

1. ดู Rules ส่วน Commit Message Format และ Body

### 5. Execute Commit

ดำเนินการ commit

1. รัน `git commit -m "<message>"` หรือ `git commit`
2. ตรวจสอบผลลัพธ์จาก git commit
3. ถ้ามี error: แก้ไขแล้วลองอีกครั้ง

### 6. Verify Commit

ตรวจสอบความถูกต้องของ commit

1. รัน `git log --oneline -1` เพื่อดู commit ล่าสุด
2. ตรวจสอบว่า commit message สอดคล้องกับ conventional commits
3. ตรวจสอบด้วย `git status` ว่าไฟล์อื่นๆ ยังไม่ถูก commit

### 7. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `@[/edit-relative]`

## Rules

### Commit Message Format

ใช้รูปแบบ conventional commits

- ใช้รูปแบบ `<type>(<scope>): <subject>`
- subject ไม่ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่หรือจบด้วยจุด
- สั้นกระชับไม่เกิน 72 ตัวอักษร
- ใช้ imperative mood (เช่น add ไม่ใช่ added)
- ใช้ภาษาอังกฤษหรือไทยให้สม่ำเสมอ

### Commit Types

เลือก type ที่เหมาะสมกับการเปลี่ยนแปลง

- feat: ฟีเจอร์ใหม่
- fix: แก้ไขบั๊ก
- docs: เปลี่ยนแปลงเอกสาร
- style: แก้ไข code style
- refactor: refactor code โดยไม่เพิ่ม feature หรือแก้บั๊ก
- perf: ปรับปรุง performance
- test: เพิ่มหรือแก้ไข tests
- chore: เปลี่ยนแปลง build process, dependencies

### Scope

ระบุส่วนของโปรเจกต์ที่ถูกแก้ไข

- ระบุส่วนของโปรเจกต์ที่ถูกแก้ไข
- เช่น: api, ui, db, config, deps, auth, test, docs, ci

### Body

อธิบายเหตุผลและ context เพิ่มเติม

- อธิบายเหตุผลและ context
- แยกจาก subject ด้วยบรรทัดว่าง
- ใช้ bullet points สำหรับหลายรายการ

### Selective Staging

Stage เฉพาะไฟล์ที่ task แก้ไป

- ใช้ `git add <files>` เพื่อ stage เฉพาะไฟล์ที่ task แก้ไป
- ใช้ `git add -p` เพื่อ stage เฉพาะบรรทัดที่ task แก้ไป
- ไม่ stage ไฟล์อื่นๆ ที่ไม่ได้ถูกแก้ไปโดย task

## Expected Outcome

1. Commit message ที่สอดคล้องกับ conventional commits
2. เฉพาะไฟล์ที่ task แก้ไปถูก commit
3. ไฟล์อื่นๆ ยังไม่ถูก commit
4. Git history สะอาดและติดตามง่าย
