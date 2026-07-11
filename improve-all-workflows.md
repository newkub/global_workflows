---
title: Improve All Workflows
description: ปรับปรุง global workflows ทั้งหมดให้สมบูรณ์และสม่ำเสมอ
auto_execution_mode: 3
related_workflows:
  - /read-related-workflows
  - /write-global-workflows
  - /review-global-workflows
  - /follow-content-quality
  - /follow-consistency
  - /check-reference
  - /improve-readability
  - /improve-correctness
  - /improve-redundancy
---

## Goal

ปรับปรุง workflows ทั้งหมดให้สมบูรณ์ สม่ำเสมอ และตรงตามมาตรฐาน `/write-global-workflows`

## Scope

ปรับปรุง workflows ทั้งใน `global_workflows/` และ workspace (`.devin/workflows` หรือ `.windsurf/workflows`) ครอบคลุม structure, content, references, และ best practices ไม่รวมการสร้าง workflow ใหม่

## Execute

### 1. Review And Inventory

Review workflows ก่อนปรับปรุง

1. ทำ `/review-global-workflows` เพื่อ review workflows ทั้งหมดและระบุ issues พร้อม severity
2. ทำ `/read-related-workflows` เพื่ออ่านและสร้าง dependency graph
3. ถ้าอยู่ใน workspace ตรวจสอบว่ามี `.devin/workflows` หรือ `.windsurf/workflows`
4. จัดลำดับ workflows ที่ต้องปรับปรุงตาม severity จาก review report
5. ตรวจสอบไฟล์ที่เกิน 250 บรรทัด

### 2. Apply Structure Improvements

ปรับปรุง structure ตาม `/write-global-workflows` สำหรับทุก workflow

1. ตรวจสอบ frontmatter ถูกต้อง (title, description, auto_execution_mode, related_workflows)
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
5. ตรวจสอบว่า `analyze-*` workflows มี report step (เช่น `/report-format-table`)
6. ตรวจสอบว่า `review-*` workflows มี report step (เช่น `/report-review`)

### 6. Batch Update Workflows

อัพเดท workflows เป็น batch เพื่อประสิทธิภาพ

1. จัดกลุ่ม workflows ตาม category (improve, follow, use, run, test)
2. ถ้าจำนวน workflows มากกว่า 10 ไฟล์ ให้ทำ `/use-scripts` เพื่อ batch processing
3. อัพเดทตามลำดับความสำคัญจาก review report
4. ตรวจสอบว่า changes รักษาความหมายเดิม
5. ทำ `/check-reference` หลังแต่ละ batch
6. ถ้าอยู่ใน workspace ตรวจสอบว่าไม่มี conflicts กับ project-specific workflows

## Rules

### 1. Follow Write Standards

- ทำตาม `/write-global-workflows` สำหรับ structure, content, language, และ reference standards
- ไม่ duplicate Rules จาก `/write-global-workflows` — ใช้ reference แทน

### 2. Batch Processing

- อัพเดทตามลำดับความสำคัญจาก review report
- ตรวจสอบไม่มี broken references หลัง updates
- รักษา workflow intent เดิม
- ถ้าจำนวน workflows มากกว่า 10 ไฟล์ ให้ทำ `/use-scripts`

### 3. Review Before Improve

- ทำ `/review-global-workflows` ก่อนปรับปรุงเสมอ
- ปรับปรุงตาม severity จาก review report
- ไม่แก้ไข workflows ที่ผ่านมาตรฐานแล้ว

## Expected Outcome

- Workflows ทั้งหมดมี structure สม่ำเสมอ (global และ workspace)
- Content quality สูงและชัดเจน
- ไม่มี broken references
- ไฟล์ไม่เกิน 250 บรรทัด
- สอดคล้องกับ best practices
- เป็น single source of truth
- ถ้าอยู่ใน workspace: workflows สอดคล้องกับ project context
