---
title: Use In Another Workflows
description: วิเคราะห์ว่า workflow หรือ skill ควรถูกอ้างอิงในไฟล์ไหนบ้าง
auto_execution_mode: 3
related:
  - /write-global-workflows
  - /analyze-project
  - /code-search
  - /scan-codebase
  - /edit-relative
  - /update-reference
  - /check-reference
  - /report-format-table
---

## Goal

วิเคราะห์และระบุว่า workflow หรือ skill ควรถูกอ้างอิงในไฟล์ใดบ้างของ project

## Scope

ใช้สำหรับวิเคราะห์การกระจาย references ของ workflow หรือ skill ไปยังไฟล์ต่าง ๆ ใน project

## Execute

### 1. Identify Target

1. ระบุ workflow หรือ skill ที่ต้องการวิเคราะห์
2. ระบุ scope ของการค้นหา: ทั้ง project, เฉพาะ workspace, หรือเฉพาะ directory
3. ระบุประเภทไฟล์เป้าหมาย: `.md` (docs, workflows, skills), `.ts` (code), `.json` (config)

### 2. Analyze Current Usage

1. ทำ `/code-search` เพื่อค้นหา references ปัจจุบันของ workflow หรือ skill
2. ทำ `/scan-codebase` เพื่อ scan codebase หา patterns ที่เกี่ยวข้อง
3. สรุปไฟล์ที่มี reference อยู่แล้ว

### 3. Identify Missing References

1. ทำ `/analyze-project` เพื่อวิเคราะห์โครงสร้าง project
2. วิเคราะห์ไฟล์ที่ควรมี reference แต่ยังไม่มี:
   - `AGENTS.md` ในแต่ละ workspace
   - `README.md` ของ project
   - Workflow files ที่เกี่ยวข้อง
   - Skill files ที่เกี่ยวข้อง
   - Configuration files ที่เกี่ยวข้อง
3. ตรวจสอบว่าไฟล์ที่ควรอ้างอิงมีเงื่อนไขตรงกับ workflow หรือไม่

### 4. Apply References

1. ทำ `/edit-relative` เพื่อเพิ่ม references ในไฟล์ที่ขาด
2. ทำ `/update-reference` เพื่ออัปเดท references ทั้งหมด
3. ทำ `/check-reference` เพื่อตรวจสอบว่า references มีอยู่จริง

### 5. Report

1. ทำ `/report-format-table` เพื่อสรุปผลลัพธ์เป็นตาราง
2. รายงานไฟล์ที่เพิ่ม reference, ไฟล์ที่มีอยู่แล้ว, และไฟล์ที่ไม่จำเป็นต้องมี

## Rules

### Analysis Scope

- ถ้า project เป็น monorepo ตรวจสอบทุก workspace
- ตรวจสอบ `AGENTS.md` ใน root และแต่ละ workspace
- ตรวจสอบ `README.md` ของ project
- ถ้า project มี `global_workflows` ตรวจสอบ workflow files
- ถ้า project มี skills directory ตรวจสอบ skill files

### Reference Quality

- เพิ่ม reference เฉพาะไฟล์ที่เกี่ยวข้องจริง
- ไม่เพิ่ม reference ในไฟล์ที่ไม่เกี่ยวข้อง
- ตรวจสอบว่า reference มีอยู่จริงก่อนเพิ่ม
- ใช้ `/check-reference` หลังเพิ่ม reference

## Expected Outcome

- รู้ว่า workflow หรือ skill ควรถูกอ้างอิงในไฟล์ใดบ้าง
- References ถูกเพิ่มในไฟล์ที่ขาด
- ไม่มี reference ในไฟล์ที่ไม่เกี่ยวข้อง
- ผลลัพธ์เป็นตารางสรุปชัดเจน
