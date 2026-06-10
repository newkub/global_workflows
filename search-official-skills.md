---
title: Search Official Skills
description: ค้นหา official skills จาก Windsurf registry และแหล่งที่เชื่อถือได้อื่นๆ
auto_execution_mode: 3
---

## Goal

ค้นหา official skills ที่ตรงกับ dependencies ใน package manifest พร้อมแนะนำ skills อื่นๆ ที่น่าสนใจ

## Execute

### 1. Analyze Package Manifest

1. อ่าน `package.json` หรือไฟล์ manifest ที่เกี่ยวข้อง
2. ระบุ dependencies หลักทั้ง `dependencies` และ `devDependencies`
3. จัดกลุ่มตามประเภท (framework, library, tool, etc.)

### 2. Search Official Skills

1. ใช้ `/skill` command ตามด้วยชื่อ package เพื่อค้นหา official skills
2. ค้นหาใน Windsurf registry สำหรับแต่ละ dependency
3. บันทึก skills ที่พบพร้อมรายละเอียด

### 3. Search Additional Skills

1. ค้นหา skills ที่เกี่ยวข้องกับ tech stack โดยรวม
2. ค้นหา skills สำหรับ common development tasks
3. ค้นหา skills สำหรับ best practices

### 4. Summarize Results

1. สร้างตารางสรุป skills ที่พบ:
   - หมายเลขลำดับ
   - ชื่อ skill
   - ความตรงกับ dependencies
   - ระดับความสำคัญ (high/medium/low)
2. แยกประเภทเป็น:
   - Direct matches: ตรงกับ dependencies ที่มีอยู่
   - Related skills: เกี่ยวข้องกับ tech stack
   - Recommended: แนะนำสำหรับ development workflow
3. ถามผู้ใช้ว่าต้องการติดตั้ง skills ใดบ้าง

## Rules

1. **Search Strategy**
   - ค้นหาตามลำดับความสำคัญของ dependencies
   - ให้ความสำคัญกับ frameworks และ libraries หลักก่อน
   - ค้นหาทั้ง exact match และ related skills

2. **Result Format**

| Column | Description |
|--------|-------------|
| No. | ลำดับที่ |
| Skill Name | ชื่อ skill พร้อม `/` prefix |
| Match Type | Direct/Related/Recommended |
| Priority | ระดับความสำคัญ |
| Description | รายละเอียดสั้นๆ |

3. **Selection Criteria**
   - ตรงกับ dependencies ที่ใช้งานจริง
   - มี official support หรือ maintained อย่างดี
   - ช่วยเพิ่ม productivity ในการพัฒนา

## Expected Outcome

- ตารางสรุป skills ที่พบทั้งหมดพร้อมหมายเลขลำดับ
- รายการ skills ที่แนะนำให้ติดตั้ง
- คำถามถึงผู้ใช้ว่าต้องการติดตั้ง skills ใดบ้าง

