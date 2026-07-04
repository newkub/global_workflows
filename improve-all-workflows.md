---
title: Improve All Workflows
description: ปรับปรุง global workflows ทั้งหมดให้สมบูรณ์และสม่ำเสมอ
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-global-workflows
  - /follow-content-quality
  - /follow-consistency
  - /follow-best-practice
  - /check-reference
  - /improve-readability
  - /improve-correctness
---

## Goal

ปรับปรุง workflows ทั้งหมดให้สมบูรณ์ สม่ำเสมอ และตรงตามมาตรฐาน

## Scope

ปรับปรุง workflows ทั้งใน `global_workflows/` และ workspace (`.devin/workflows` หรือ `.windsurf/workflows`) ครอบคลุม structure, content, references, และ best practices

## Execute

### 1. Analyze Current State

วิเคราะห์สถานะปัจจุบันของ workflows

1. ทำ `/check-reference` เพื่อตรวจสอบ references ที่เสียหาย
2. ถ้าอยู่ใน workspace ตรวจสอบว่ามี `.devin/workflows` หรือ `.windsurf/workflows`
3. ระบุ workflows ที่ต้องปรับปรุง (structure, content, references)
4. จัดลำดับความสำคัญตาม impact (workflows ที่ใช้บ่อยก่อน)
5. ตรวจสอบไฟล์ที่เกิน 250 บรรทัด

### 2. Apply Structure Improvements

ปรับปรุง structure ตาม `/write-windsurf-global-workflows`

1. ตรวจสอบ frontmatter ถูกต้อง (title, description, auto_execution_mode)
2. ตรวจสอบ sections ครบถ้วน (Goal, Scope, Execute, Rules, Expected Outcome)
3. ปรับ heading ใน Execute เป็น English Title Case
4. ปรับ Rules เป็นภาษาไทย
5. ลดจำนวนบรรทัดไม่เกิน 250
6. ถ้าอยู่ใน workspace ตรวจสอบว่า workflow สอดคล้องกับ project context

### 3. Apply Content Quality

ปรับปรุงคุณภาพเนื้อหาตาม `/follow-content-quality`

1. ทำให้เนื้อหา explicit แทน implicit
2. ลดความซ้ำซ้อนระหว่าง Execute และ Rules
3. ใช้ references แทนการ duplicate เนื้อหา
4. ปรับปรุง content dimensions (clarity, completeness, consistency)
5. ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`

### 4. Fix References

แก้ไข references ที่เสียหาย

1. ตรวจสอบ workflows ที่อ้างถึงมีอยู่จริง
2. ตรวจสอบ skills ที่อ้างถึงมีอยู่จริง
3. ลบ references ที่ไม่มีอยู่จริง
4. เพิ่ม references ที่ขาดหาย
5. ทำ `/check-reference` หลังแก้ไข

### 5. Align With Best Practices

ปรับให้สอดคล้องกับ best practices

1. ทำ `/follow-best-practice` สำหรับ topics ที่เกี่ยวข้อง
2. ตรวจสอบ workflow structure สอดคล้องกับ markdown best practices
3. อ้างอิง official documentation สำหรับ tools/libraries เฉพาะเจาะจง
4. ปรับให้สอดคล้องกับ execution guidelines

### 6. Batch Update Workflows

อัพเดท workflows เป็น batch เพื่อประสิทธิภาพ

1. จัดกลุ่ม workflows ตาม category (improve, follow, use, run, test)
2. อัพเดทตามลำดับความสำคัญ
3. ตรวจสอบว่า changes รักษาความหมายเดิม
4. ทำ `/check-reference` หลังแต่ละ batch
5. ถ้าอยู่ใน workspace ตรวจสอบว่าไม่มี conflicts กับ project-specific workflows

## Rules

### 1. Structure Standards

- Frontmatter ต้องมี title, description, auto_execution_mode: 3
- Title Case ตรงกับ filename
- Description ไม่เกิน 100 ตัวอักษร
- Sections ครบถ้วน (Goal, Scope, Execute, Rules, Expected Outcome)
- ไฟล์ไม่เกิน 250 บรรทัด

### 2. Language Consistency

- Execute headings: English Title Case
- Rules section: ภาษาไทย
- Bullet points: ภาษาไทย
- File names: kebab-case

### 3. Content Quality

- ใช้ references แทนการ duplicate เนื้อหา
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- เนื้อหา explicit แทน implicit
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
- Maintain single source of truth

### 4. Reference Integrity

- ตรวจสอบ references มีอยู่จริงก่อนอ้างอิง
- ลบ references ที่ไม่มีอยู่จริง
- เพิ่ม references ที่ขาดหาย
- ทำ `/check-reference` หลังแก้ไข

### 5. Batch Processing

- อัพเดทตามลำดับความสำคัญ
- ตรวจสอบไม่มี broken references หลัง updates
- รักษา workflow intent เดิม
- ทำเป็น batch เพื่อประสิทธิภาพ

### 6. Best Practices Alignment

- ตรวจสอบ structure สอดคล้องกับ markdown best practices
- อ้างอิง official documentation สำหรับ tools/libraries
- ปรับให้สอดคล้องกับ execution guidelines
- ทำตาม `/follow-best-practice` สำหรับ topics ที่เกี่ยวข้อง

## Expected Outcome

- Workflows ทั้งหมดมี structure สม่ำเสมอ (global และ workspace)
- Content quality สูงและชัดเจน
- ไม่มี broken references
- ไฟล์ไม่เกิน 250 บรรทัด
- สอดคล้องกับ best practices
- เป็น single source of truth
- Workspace workflows สอดคล้องกับ project context

## When To Use

- ใช้เมื่อต้องปรับปรุง global workflows ทั้งหมด
- ใช้เมื่อต้องปรับปรุง workspace workflows ทั้งหมด
- ใช้เมื่อต้องทำให้ workflows สมบูรณ์ครบวงจร
- ใช้เมื่อต้องแก้ไข structure และ content quality
- ใช้เมื่อต้อง fix references ที่เสียหาย
