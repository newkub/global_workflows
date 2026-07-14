---
title: Update Windsurf Global Workflows All
description: อัปเดท skills, global rules, workflows ให้สอดคล้องกัน
auto_execution_mode: 3
related:
  - /content-quality
  - /write-global-workflows
  - /write-windsurf-skills
  - /write-readme
  - /check-correctness
---

## Goal

อัปเดท skills, global rules, workflows ทั้งหมดให้สอดคล้องกัน

## Scope

อัปเดทไฟล์ใน `global_workflows`, `skills`, `global_rules.md`

## Execute

### 1. Commit Changes

1. ทำ `/commit` เพื่อ commit changes ที่มีอยู่
2. ตรวจสอบ working directory สะอาด

### 2. Analyze Structure

1. ทำ `/windsurf-global-workflows` เพื่อเข้าใจโครงสร้าง
2. สำรวจ workflows ทั้งหมดและจัดกลุ่ม
3. ระบุ workflows ที่ซ้ำซ้อนหรือขัดแย้งกัน

### 3. Rename Folders by Skill Type

1. ตรวจสอบ skill folders ใน skills/ ว่ามี prefix ตรงตาม skill types หรือไม่
2. Rename folders ตาม skill types:
   - `guide-*` → เปลี่ยน prefix เป็น skill type
   - `lib-*` → เปลี่ยน prefix เป็น skill type
   - `framework-*` → เปลี่ยน prefix เป็น skill type
   - `lang-*` → เปลี่ยน prefix เป็น skill type
3. อัปเดท references ที่อ้างถึง folders ที่ rename แล้ว

### 3. Verify References

1. ตรวจสอบ workflows ที่อ้างอิงมีอยู่จริง
2. ตรวจสอบ related_workflows มีอยู่จริง
3. ระบุ broken references และสร้างรายการแก้ไข

### 4. Check Quality

1. ทำ `/content-quality` สำหรับแต่ละ workflow
2. ตรวจสอบ format, structure, hierarchy
3. ลบข้อมูลที่ซ้ำซ้อน

### 5. Add File Structure

1. สำหรับ workflows ที่เป็น `follow-*` ให้เพิ่ม file structure
2. สร้างตาราง 4 columns: `Path`, `Type`, `Description`, `Status`
3. ใช้ code block สำหรับ file structure

### 6. Update Skills

1. อัปเดท skill files ตาม `/write-windsurf-skills`
2. ตรวจสอบ frontmatter ครบถ้วน
3. ตรวจสอบ supporting files มีอยู่จริง

### 7. Update Root Files

1. อัปเดท `SKILL.md` ที่ root ตาม `/write-windsurf-skills`
2. อัปเดท `README.md` ที่ root ตาม `/write-readme`
3. ตรวจสอบความสอดคล้องกับ skill structure ล่าสุด

### 8. Update Global Rules

1. อัปเดท `global_rules.md` ตามมาตรฐาน
2. ตรวจสอบ rules ครอบคลุมทุกส่วน
3. ตรวจสอบความสอดคล้องกับ workflows และ skills

### 9. Update Workflows

1. อัปเดท workflows ที่ไม่สอดคล้องกับมาตรฐาน
2. รวม workflows ที่ซ้ำซ้อน
3. เพิ่ม references ระหว่าง workflows ที่เกี่ยวข้อง
4. ลบ workflows ที่ไม่จำเป็น

## Rules

### 1. Content Quality

ทำตาม `/content-quality`:

- ใช้ spacing, indentation, headings สม่ำเสมอ
- หัวข้อ Title Case ภาษาอังกฤษ รายการภาษาไทย
- เขียนชัดเจน เข้าใจง่าย ไม่กำกวม
- ใช้คำศัพท์สม่ำเสมอ
- Single source of truth ไม่ซ้ำซ้อน

### 2. Workflow Structure

ทำตาม `/write-global-workflows`:

- Frontmatter: title, description, auto_execution_mode: 3
- โครงสร้าง: ## Goal, ## Scope, ## Execute, ## Rules, ## Expected Outcome
- ใช้ ### N. Step Name สำหรับ Execute
- ใช้ numbered list (1., 2., 3.) ภายในแต่ละขั้นตอน
- ใช้ ### N. Rule Category สำหรับ Rules
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไฟล์ไม่เกิน 300 บรรทัด

### 3. Skills Structure

ทำตาม `/write-windsurf-skills`:

- Frontmatter: title, description, auto_execution_mode: 3
- โครงสร้าง: ## Goal, ## Scope, ## Execute, ## Rules, ## Expected Outcome
- Supporting files ต้องมีอยู่จริงและถูกต้อง

### 4. Follow-* Requirements

สำหรับ workflows ที่เป็น `follow-*`:

- File structure ใน code block
- ตาราง 4 columns: `Path`, `Type`, `Description`, `Status`
- ตัวอย่าง code หรือ config ที่เกี่ยวข้อง

### 5. Cross-Reference Alignment

ตรวจสอบความสอดคล้องระหว่าง skills, workflows, global rules:

- Skills อ้างอิง workflows ที่ถูกต้อง
- Workflows อ้างอิงกัน
- Global rules สอดคล้องกับ workflows และ skills
- ไม่ซ้ำซ้อนระหว่าง skills, workflows, global rules
- ใช้ terminology สม่ำเสมอ
- Workflows และ skills ที่อ้างอิงต้องมีอยู่จริง

## Expected Outcome

- Skills, global rules, workflows สอดคล้องกัน
- ไม่ซ้ำซ้อนระหว่าง skills, workflows, global rules
- Follow-* workflows มี file structure และตาราง 4 columns
- Skills มี supporting files ถูกต้องและครบถ้วน
- Content quality สูง อ่านง่าย
- Workflows และ skills ที่อ้างอิงมีอยู่จริง
- Global rules สอดคล้องกับ workflows และ skills

