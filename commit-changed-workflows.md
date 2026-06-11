---
title: Commit Changed Workflows
description: Commit เฉพาะไฟล์ที่แก้ไขใน global workflows ตามมาตรฐาน conventional commits
auto_execution_mode: 3
---

## Goal

Commit เฉพาะไฟล์ที่แก้ไขใน global workflows directory ตามมาตรฐาน conventional commits

## Scope

ใช้สำหรับ commit เฉพาะไฟล์ที่แก้ไขใน `C:\Users\Veerapong\.codeium\windsurf\global_workflows` เท่านั้น

## Execute

### 1. Navigate To Global Workflows

เปลี่ยน directory ไปยัง global workflows

1. เปลี่ยน directory ไปยัง `C:\Users\Veerapong\.codeium\windsurf\global_workflows`
2. ตรวจสอบว่าอยู่ใน directory ที่ถูกต้องด้วย `pwd`

### 2. Check Git Status

ตรวจสอบสถานะของ repository

1. รัน `git status --porcelain` เพื่อดูไฟล์ที่มีการแก้ไขทั้งหมด
2. ตรวจสอบว่าอยู่ใน repository ที่ถูกต้อง

### 3. Stage Changed Files

Stage เฉพาะไฟล์ที่แก้ไข

1. รัน `git add -u` เพื่อ stage เฉพาะไฟล์ที่แก้ไข (tracked files)
2. หรือ stage เฉพาะไฟล์ที่ต้องการด้วย `git add <filename>`
3. ตรวจสอบด้วย `git diff --cached` ว่าไฟล์ที่ stage ถูกต้อง

### 4. Determine Commit Type

เลือก conventional commit type ที่เหมาะสม

1. ดู Rules ส่วน Commit Types
2. เลือก type ตามการเปลี่ยนแปลง:
   - feat: เพิ่ม workflow ใหม่
   - fix: แก้ไข workflow
   - docs: แก้ไขเอกสารหรือคำอธิบาย
   - refactor: refactor workflow
   - chore: ปรับปรุง configuration หรือ structure

### 5. Write Commit Message

เขียน commit message ตาม conventional commits format

1. ดู Rules ส่วน Commit Message Format และ Body
2. ใช้รูปแบบ `<type>: <subject>`
3. subject สั้นกระชับไม่เกิน 72 ตัวอักษร
4. ใช้ imperative mood (เช่น add ไม่ใช่ added)
5. ใช้ภาษาอังกฤษหรือไทยให้สม่ำเสมอ

### 6. Execute Commit

ดำเนินการ commit

1. รัน `git commit -m "<message>"` หรือ `git commit`
2. ตรวจสอบผลลัพธ์จาก git commit
3. ถ้ามี error: แก้ไขแล้วลองอีกครั้ง

### 7. Verify Commits

ตรวจสอบความถูกต้องของ commits

1. รัน `git log --oneline -5` เพื่อดู commits ล่าสุด
2. ตรวจสอบว่า commit messages สอดคล้องกับ conventional commits
3. ตรวจสอบว่าไฟล์ที่ต้องการถูก commit แล้ว
4. รัน `git status` เพื่อยืนยันสถานะ working directory

## Rules

### Commit Message Format

ใช้รูปแบบ conventional commits

- ใช้รูปแบบ `<type>: <subject>`
- subject ไม่ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่หรือจบด้วยจุด
- สั้นกระชับไม่เกิน 72 ตัวอักษร
- ใช้ imperative mood (เช่น add ไม่ใช่ added)
- ใช้ภาษาอังกฤษหรือไทยให้สม่ำเสมอ

### Commit Types

เลือก type ที่เหมาะสมกับการเปลี่ยนแปลง

- feat: เพิ่ม workflow ใหม่
- fix: แก้ไข workflow
- docs: แก้ไขเอกสารหรือคำอธิบาย
- refactor: refactor workflow
- chore: ปรับปรุง configuration หรือ structure

### Body

อธิบายเหตุผลและ context เพิ่มเติม

- อธิบายเหตุผลและ context
- แยกจาก subject ด้วยบรรทัดว่าง
- ใช้ bullet points สำหรับหลายรายการ

### Staging Strategy

Stage เฉพาะไฟล์ที่ต้องการ

- ใช้ `git add -u` สำหรับ stage เฉพาะ tracked files ที่แก้ไข
- ใช้ `git add <filename>` สำหรับ stage เฉพาะไฟล์ที่ระบุ
- หลีกเลี่ยง `git add .` ถ้าต้องการ commit เฉพาะบางไฟล์
- ตรวจสอบด้วย `git diff --cached` ก่อน commit

## Expected Outcome

- Commit messages ที่สอดคล้องกับ conventional commits
- Git history ที่อ่านง่ายและติดตามง่าย
- เฉพาะไฟล์ที่แก้ไขถูก commit ไม่รวมไฟล์ใหม่ที่ไม่ได้ stage
- Working directory สะอาดสำหรับไฟล์ที่ commit แล้ว
