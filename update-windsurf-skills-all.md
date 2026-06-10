---
title: Update Windsurf Skills All
description: อัปเดทและปรับปรุง skills ทั้งหมดให้สอดคล้องกันและมีคุณภาพ
auto_execution_mode: 3
related_workflows:
  - /content-quality
  - /write-windsurf-skills
  - /check-correctness
---

## Goal

อัปเดท skills ทั้งหมดให้สอดคล้องกัน ไม่ซ้ำซ้อน และมีคุณภาพสูง

## Scope

อัปเดท skills ใน `c:\Users\Veerapong\.codeium\windsurf\skills`

## Execute

### 1. Commit Current Changes

1. ทำ `/commit` เพื่อ commit changes ที่มีอยู่ก่อนเริ่มแก้ไข
2. ตรวจสอบว่า working directory สะอาด
3. ตรวจสอบว่าไม่มี uncommitted changes เหลืออยู่

### 2. Analyze Skills Structure

1. ทำ `/windsurf-global-workflows` เพื่อเข้าใจโครงสร้าง skills
2. สำรวจ skills ทั้งหมดใน skills directory
3. จัดกลุ่ม skills ที่เกี่ยวข้องกัน
4. ระบุ skills ที่ซ้ำซ้อนหรือขัดแย้งกัน

### 3. Check Content Quality

1. ทำ `/content-quality` สำหรับแต่ละ skill
2. ตรวจสอบ format, structure, hierarchy
3. ตรวจสอบความชัดเจนและความถูกต้อง
4. ลบข้อมูลที่ซ้ำซ้อน

### 4. Add File Structure Tables

1. สำหรับ skills ที่เป็น `follow-*` ให้เพิ่ม file structure
2. สร้างตาราง 4 columns: `Path`, `Type`, `Description`, `Status`
3. ใช้ code block สำหรับ file structure
4. ตรวจสอบว่า structure ถูกต้องและอัปเดท

### 5. Verify Correctness

1. ทำ `/check-correctness` สำหรับแต่ละ skill
2. ตรวจสอบว่า skills ที่อ้างอิงมีอยู่จริง
3. ตรวจสอบความสอดคล้องระหว่าง skills
4. แก้ไขข้อผิดพลาดที่พบ

### 6. Update And Align

1. อัปเดท skills ที่ไม่สอดคล้องกับมาตรฐาน
2. รวม skills ที่ซ้ำซ้อน
3. เพิ่ม references ระหว่าง skills ที่เกี่ยวข้อง
4. ลบ skills ที่ไม่จำเป็น

## Rules

### 1. Content Quality Standards

ทำตาม `/content-quality` สำหรับทุก skills:

- ใช้ spacing, indentation, headings สม่ำเสมอ
- หัวข้อใช้ Title Case ภาษาอังกฤษ รายการใช้ภาษาไทย
- เขียนให้ชัดเจน เข้าใจง่าย ไม่กำกวม
- ใช้คำศัพท์สม่ำเสมอทั่วเอกสาร
- ข้อมูลถูกต้องตาม principle และ references มีอยู่จริง
- Grouping และ hierarchy ชัดเจน logical
- Single source of truth ไม่ซ้ำซ้อน

### 2. Skill Structure Standards

ทำตาม `/write-windsurf-skills` สำหรับทุก skills:

- Frontmatter ครบถ้วน (title, description, auto_execution_mode: 3)
- โครงสร้าง: ## Goal, ## Scope, ## Execute, ## Rules, ## Expected Outcome
- ใช้ ### N. Step Name สำหรับ Execute
- ใช้ numbered list (1., 2., 3.) ภายในแต่ละขั้นตอน
- ใช้ ### N. Rule Category สำหรับ Rules
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไฟล์ไม่เกิน 300 บรรทัด

### 3. Follow-* Skills Requirements

สำหรับ skills ที่เป็น `follow-*` ต้องมี:

- File structure ใน code block
- ตาราง 4 columns: `Path`, `Type`, `Description`, `Status`
- ตัวอย่าง code หรือ config ที่เกี่ยวข้อง
- References ไปยัง skills ที่เกี่ยวข้อง
- Expected outcome ที่ชัดเจน

### 4. Skill Alignment

ตรวจสอบความสอดคล้องระหว่าง skills:

- Skills ที่เกี่ยวข้องต้องอ้างอิงกัน
- ไม่ซ้ำซ้อนระหว่าง skills
- ใช้ terminology สม่ำเสมอ
- มี single source of truth สำหรับแต่ละหัวข้อ
- Skills ที่อ้างอิงต้องมีอยู่จริง

### 5. Correctness Verification

ทำ `/check-correctness` สำหรับทุก skills:

- ตรวจสอบว่า skills ที่อ้างอิงมีอยู่จริง
- ตรวจสอบความถูกต้องของ references
- ตรวจสอบความสอดคล้องกับ user requirements
- ตรวจสอบว่าไม่มี conflicts ระหว่าง skills

## Expected Outcome

- Skills ทั้งหมดสอดคล้องกัน
- ไม่มีการซ้ำซ้อนระหว่าง skills
- Follow-* skills มี file structure และตาราง 4 columns
- Content quality สูง อ่านง่าย เข้าใจง่าย
- Skills ที่อ้างอิงมีอยู่จริงและถูกต้อง
- Single source of truth สำหรับแต่ละหัวข้อ

