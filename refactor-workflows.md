---
title: Refactor Workflows
description: Refactor workflow files ให้เป็นระเบียบ สม่ำเสมอ และครอบคลุม
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-global-workflows
  - /follow-content-quality
  - /follow-best-practice
  - /read-related-workflows
  - /check-reference
  - /edit-relative
  - /update-reference
  - /use-scripts
  - /report-format-table
---

## Goal

Refactor workflow files ให้เป็นระเบียบ สม่ำเสมอ และครอบคลุมตามมาตรฐาน `/write-windsurf-global-workflows`

## Scope

ใช้สำหรับ refactor workflow files ทั้งใน `global_workflows` และ workspace

## Execute

### 1. Analyze Workflows

1. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้อง
2. ทำ `/write-windsurf-global-workflows` เพื่อเข้าใจมาตรฐาน
3. ระบุ workflows ที่ต้อง refactor:
   - ไฟล์เกิน 250 บรรทัด
   - ไฟล์มีหลาย concerns ที่ไม่เกี่ยวข้องกัน
   - ไฟล์ที่ไม่ตรงมาตรฐาน `/write-windsurf-global-workflows`
4. จัดลำดับการ refactor ตาม impact และ effort

### 2. Identify Split Opportunities

1. วิเคราะห์ sections ที่เป็น disparate concerns
2. ระบุ sections ที่สามารถแยกเป็น workflow ใหม่ได้
3. ตรวจสอบขนาดของแต่ละ section (items, บรรทัด)
4. เสนอการ split พร้อมเหตุผลก่อนดำเนินการ

### 3. Create New Workflows

1. สร้าง workflow ใหม่ตามมาตรฐาน `/write-windsurf-global-workflows`
2. เขียน frontmatter ให้ถูกต้อง (`title`, `description`, `auto_execution_mode: 3`)
3. เขียน `## Goal`, `## Scope`, `## Execute`, `## Rules`, `## Expected Outcome`
4. ใช้ numbered list ใน `## Execute` และ bullet points ใน `## Rules`
5. ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`

### 4. Update Original Workflows

1. ลบ sections ที่ย้ายไป workflow ใหม่
2. เพิ่ม reference ไปยัง workflow ใหม่ใน `related_workflows`
3. อัปเดท `## Goal`, `## Scope`, `## Expected Outcome` ให้สอดคล้อง
4. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัด

### 5. Update Orchestrators

1. อัปเดท orchestrator workflows ที่อ้างถึง workflows ที่ถูก refactor
2. เพิ่ม workflow ใหม่ใน `related_workflows` ของ orchestrator
3. อัปเดท `## Execute` ของ orchestrator ให้ครอบคลุม workflow ใหม่
4. อัปเดท execution order และ `## Expected Outcome`

### 6. Update References

1. ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมด
2. ทำ `/update-reference` เพื่อ sync references
3. ทำ `/check-reference` เพื่อตรวจสอบว่า references มีอยู่จริง
4. อัปเดท `AGENTS.md` ใน root และแต่ละ workspace

### 7. Verify And Report

1. ตรวจสอบทุกไฟล์ที่เกี่ยวข้องว่าตรงมาตรฐาน
2. รัน script ตรวจสอบ: `title`, `description`, `auto_execution_mode`, sections, บรรทัด
3. ทำ `/report-format-table` เพื่อสรุปการ refactor

## Rules

### 1. Split Guidelines

- ไฟล์เกิน 250 บรรทัดต้อง split
- Sections ที่เป็น disparate concerns ต้องแยก
- แต่ละ workflow มีหนึ่ง clear responsibility
- ถ้า workflow เป็นแท้ ๆ ของ domain นั้น ไม่ต้อง split แม้จะยาว
- เสนอการ split ก่อนดำเนินการ

### 2. Naming Conventions

- ใช้ชื่อที่สื่อความหมายชัดเจน
- ไม่ใช้ prefix ที่ไม่จำเป็น (เช่น `codebase-`)
- `title` เป็น Title Case ตรงกับ filename
- ใช้ `-` เป็น separator ใน filename

### 3. Standard Compliance

- ทำตาม `/write-windsurf-global-workflows` เสมอ
- ทำตาม `/follow-content-quality` สำหรับคุณภาพเนื้อหา
- ทำตาม `/follow-best-practice` สำหรับ best practices
- ใช้ `/use-scripts` เมื่อต้องจัดการไฟล์มากกว่า 10 ไฟล์

### 4. Reference Integrity

- ตรวจสอบ references ทุกครั้งหลัง refactor
- อัปเดท `AGENTS.md` ใน root และทุก workspace
- อัปเดท orchestrator workflows
- ทำ `/check-reference` เพื่อยืนยัน

## Expected Outcome

- Workflow files เป็นระเบียบ สม่ำเสมอ และครอบคลุม
- ไม่มีไฟล์เกิน 250 บรรทัด
- แต่ละ workflow มีหนึ่ง clear responsibility
- References ครบถ้วนและถูกต้อง
- Orchestrators อัปเดทครบถ้วน
- ผลลัพธ์เป็นตารางสรุปชัดเจน
