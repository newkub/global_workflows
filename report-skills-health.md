---
title: Report Skills Health
description: วิเคราะห์สุขภาพ skills ทั้ง global และ project พร้อม health score และ action items
auto_execution_mode: 3
related:
---

## Goal

วิเคราะห์สุขภาพ skills ทั้ง global และ project ระบุ issues, คำนวณ health score และจัด action items

## Scope

ใช้สำหรับไฟล์ `.md` ใน `skills/`, `SKILL.md`, `guide/`, `key-concepts/`, `principles/`, `references/`, `workflows/`, `templates/`

## Execute

### 1. Inventory Skills

1. ทำ `/list-skills` เพื่อแสดงรายการ skills ทั้งหมด
2. จำแนก global skills, project skills และ workspace skills
3. บันทึก paths และ filenames

### 2. Check Structure

1. ตรวจสอบ `SKILL.md` frontmatter ครบถ้วน: `title`, `description`, `auto_execution_mode`
2. ตรวจสอบ sections ครบ: `Goal`, `Scope`, `Execute`, `Rules`, `Expected Outcome`
3. ตรวจสอบ Execute headings เป็น English Title Case
4. ตรวจสอบ Rules เป็นภาษาไทย
5. ตรวจสอบ file names เป็น kebab-case
6. ระบุไฟล์ที่เกิน 250 บรรทัด

### 3. Check References

1. ทำ `/check-reference` เพื่อตรวจสอบ broken references
2. ระบุ links ที่ชี้ไปยังไฟล์ไม่มี
3. ระบุ external references ที่ outdated

### 4. Analyze Content Quality

1. ทำ `/review-all-skills` เพื่อ review คุณภาพ
2. ระบุ duplicate content ระหว่าง skills
3. ระบุ vague หรือ ambiguous instructions
4. ระบุ inconsistencies ใน format และ language

### 5. Calculate Health Score

1. กำหนด metrics: structure, references, content quality, consistency, file naming
2. คำแนนต่อ metric: ✅ = 1, ⚠️ = 0.5, ❌ = 0
3. คำนวณ health score รวม (0-100%)
4. กำหนด grade: A (90+), B (80+), C (70+), D (60+), F (<60)

### 6. Generate Action Items

1. จัดลำดับ issues ตาม severity: Critical, High, Medium, Low
2. แยก quick wins ออกจาก major improvements
3. ระบุ workflow ที่แนะนำสำหรับแต่ละ action item
4. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง

### 7. Report Findings

1. ทำ `/report` เพื่อรายงานผลในแชท
2. แสดง health score, grade, และ progress bar
3. แสดงตาราง issues ตาม severity

## Rules

### 1. Health Score

- คะแนนต่อ metric: ✅ = 1, ⚠️ = 0.5, ❌ = 0
- คำนวณเป็น percentage ของทุก metrics
- แสดง progress bar พร้อม grade
- เรียงลำดับ issues ที่ได้คะแนนต่ำก่อน

### 2. Evidence-Based Findings

- ทุก finding ต้องมี evidence (file path, line number)
- ไม่เดา ใช้ tools สำหรับ verification
- ระบุ false positives ที่พบ

### 3. Severity Classification

- **Critical**: `SKILL.md` ขาด frontmatter หรือ sections หลัก ทำให้ skill ใช้งานไม่ได้
- **High**: broken references หรือ structure ไม่ตรงมาตรฐาน
- **Medium**: content quality ต่ำ ซ้ำซ้อน หรือไม่ชัดเจน
- **Low**: ไฟล์เกิน 250 บรรทัด หรือ file name ไม่เป็น kebab-case

## Expected Outcome

- รายงานสุขภาพ skills พร้อม health score และ grade
- ตาราง issues จัดลำดับตาม severity
- Action items แยก quick wins จาก major improvements
- ไม่มี broken references
- Skills มี structure สม่ำเสมอ
