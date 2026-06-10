---
title: Check Long Files
description: ตรวจสอบไฟล์ที่ยาวกว่า threshold ที่กำหนด
auto_execution_mode: 3
related_workflows:
  - /use-scripts
  - /refactor-long-files-to-single-responsibility
---

## Goal

ตรวจสอบและรายงานไฟล์ที่ยาวกว่า threshold ที่กำหนด

## Scope

ใช้สำหรับตรวจสอบไฟล์ที่ยาวกว่า threshold ในทุกภาษา

## Execute

### 1. Setup Gitignore

ตั้งค่า `.gitignore` ให้ `scripts/temp/` ถูก ignore อัตโนมัติ

1. ทำ `/follow-gitignore` เพื่อตั้งค่า `.gitignore` อย่างถูกต้อง
2. ตรวจสอบ `.gitignore` มี `scripts/temp/` หรือไม่
3. ถ้าไม่มี ให้เพิ่ม `scripts/temp/` เข้าไป

### 2. Create Script

สร้าง PowerShell script ใน `scripts/temp/`

1. ทำ `/use-scripts` เพื่อสร้าง script ใน `scripts/temp/find-long-files.ps1`
2. รองรับ parameters: `Threshold`, `Top`, `ExcludePatterns`, `IncludeExtensions`
3. กรองไฟล์ตามประเภท (`config`, `types`, `test`, `generated`)
4. แสดงผลแบบ color-coded ตาม file type

### 3. Run Script

รัน script เพื่อตรวจสอบไฟล์ที่ยาว

1. รัน `pwsh scripts/temp/find-long-files.ps1 -Threshold 250 -Top 25`
2. ตรวจสอบผลลัพธ์จาก script
3. บันทึกรายชื่อไฟล์ที่ต้อง split
4. ลบ script จาก `scripts/temp/` หลังใช้งาน

## Rules

### 1. Script Template

ใช้ PowerShell script ที่ reusable และ configurable

- สร้าง script ใน `scripts/temp/` ตาม `/use-scripts`
- รองรับ parameters: `Threshold`, `Top`, `ExcludePatterns`, `IncludeExtensions`
- ใช้ helper functions: `ShouldExclude`, `GetFileType`
- ลบ script หลังใช้งาน

### 2. Filtering Rules

กรองไฟล์ตามประเภทและ location

- เว้นไฟล์ประเภท `config`, `types`, `test`, `generated`
- เว้นไฟล์ใน `node_modules`, `.nuxt`, `dist`, `build`
- เว้นไฟล์ generated จาก build tools
- ใช้ pattern matching สำหรับ exclude patterns

### 3. Output Format

แสดงผลแบบ readable และ color-coded

- แสดง columns: `Lines`, `Type`, `Path`
- ใช้ colors ตาม file type (test=yellow, config=magenta, types=cyan)
- แสดง total files found
- เรียงลำดับตาม lines (ใหญ่สุดก่อน)

## Expected Outcome

- Script ที่ reusable และ configurable
- รายงานไฟล์ที่ยาวกว่า threshold
- กรองไฟล์ที่ต้องเว้นออกอัตโนมัติ
- Output ที่ readable และ color-coded
- Script ถูกลบหลังใช้งาน
