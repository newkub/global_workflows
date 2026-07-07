---
title: Review Global Workflows
description: Review global workflows ตามมาตรฐาน จัดลำดับ issues ส่งต่อไป improve
auto_execution_mode: 3
related_workflows:
  - /write-global-workflows
  - /improve-all-workflows
  - /follow-content-quality
  - /check-reference
  - /list-global-workflows
  - /sorting-workflows
  - /report-format-table
  - /report-review
---

## Goal

Review global workflows ทั้งหมดตามมาตรฐาน `/write-global-workflows` ระบุ issues พร้อม severity และส่งต่อไป `/improve-all-workflows`

## Scope

Review workflows ใน `global_workflows/` directory เท่านั้น ไม่แก้ไขไฟล์ — แยก review process จาก fix process

## Execute

### 1. Inventory Workflows

รวบรวม workflows ทั้งหมด

1. ทำ `/list-global-workflows` เพื่อดู workflows ทั้งหมดใน `global_workflows/`
2. กรองเฉพาะไฟล์ `.md` ที่มี frontmatter
3. ทำ `/sorting-workflows` เพื่อจัดเรียงตาม prefix และ alphabetical
4. นับจำนวน workflows ในแต่ละ prefix group
5. ระบุ workflows ที่ไม่มี prefix หรือมี prefix ไม่ชัดเจน

### 2. Check Frontmatter

ตรวจสอบ frontmatter ของทุก workflow

1. ตรวจสอบ `title` เป็น Title Case และตรงกับ filename
2. ตรวจสอบ `description` กระชับไม่เกิน 100 ตัวอักษร
3. ตรวจสอบ `auto_execution_mode: 3`
4. ตรวจสอบ `url` (optional) ว่ายังเข้าถึงได้ ถ้ามี
5. ตรวจสอบ `related_workflows` ว่าอ้างถึง workflows ที่มีอยู่จริง
6. ระบุ workflows ที่ขาด frontmatter หรือมี frontmatter ไม่ครบ

### 3. Check Structure

ตรวจสอบ structure ของทุก workflow

1. ตรวจสอบ sections ครบ: `## Goal`, `## Scope`, `## Execute`, `## Rules`, `## Expected Outcome`
2. ตรวจสอบว่า `## Goal` สอดคล้องกับ filename
3. ตรวจสอบว่า `## Execute` สอดคล้องกับ `## Goal` และ `## Rules`
4. ตรวจสอบว่า `## Expected Outcome` สอดคล้องกับ `## Goal`
5. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัด
6. ตรวจสอบว่า `## Execute` headings เป็น English Title Case
7. ตรวจสอบว่า `## Rules` เป็น bullet points ภาษาไทย

### 4. Check Content Quality

ตรวจสอบคุณภาพเนื้อหาตาม `/follow-content-quality`

1. ตรวจสอบว่าเนื้อหา explicit ไม่ implicit
2. ตรวจสอบว่าไม่ซ้ำซ้อนระหว่าง Execute และ Rules
3. ตรวจสอบว่าใช้ references แทนการ duplicate เนื้อหา
4. ตรวจสอบว่าใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
5. ตรวจสอบว่าเขียนเป็นหลักการ how-to ไม่ใช่ step-by-step เฉพาะกรณี
6. ตรวจสอบ conditional execution สำหรับ steps ที่ไม่จำเป็นต้องทำทุก project

### 5. Check References

ตรวจสอบ reference integrity

1. ทำ `/check-reference` สำหรับ `related_workflows` ทุก workflow
2. ตรวจสอบ workflows ที่อ้างถึงมีอยู่จริงใน `global_workflows/`
3. ตรวจสอบ `/workflow-name` references ใน Execute และ Rules มีอยู่จริง
4. ระบุ broken references: อ้างถึง workflow ที่ไม่มีอยู่
5. ระบุ missing references: workflow ที่ควรอ้างถึงแต่ไม่มี
6. ตรวจสอบ bidirectional references: ถ้า A อ้างถึง B, B ควรอ้างถึง A

### 6. Check Non-Redundancy

ตรวจสอบการซ้ำซ้อนระหว่าง workflows

1. ระบุ workflows ที่มี scope ซ้อนทับกัน
2. ตรวจสอบว่า workflows ที่คล้ายกันใช้ references แทนการเขียนซ้ำ
3. ระบุ workflows ที่ควรรวมเป็นไฟล์เดียว
4. ระบุ workflows ที่ควรแยกเป็นหลายไฟล์
5. ตรวจสอบว่าแต่ละ workflow มี single responsibility ชัดเจน

### 7. Check Execution Guidelines

ตรวจสอบ execution guidelines

1. ตรวจสอบลำดับการทำงาน: Foundation ก่อน, High impact ก่อน, Dependencies ก่อน
2. ตรวจสอบว่าให้ผลลัพธ์เหมือนกันทุกครั้ง
3. ตรวจสอบ conditional execution สำหรับ project types ที่แตกต่าง
4. ตรวจสอบว่า `analyze-*` workflows มี report step
5. ตรวจสอบว่า `review-*` workflows มี report step
6. ตรวจสอบว่ามี `/use-scripts` reference เมื่อจำเป็น

### 8. Generate Review Report

สร้างรายงาน review

1. ทำ `/report-format-table` สร้างตาราง findings
2. กำหนด columns: Workflow, Dimension, Finding, Severity, Recommendation
3. จัดกลุ่ม findings ตาม dimension (Frontmatter, Structure, Content, References, Redundancy, Execution)
4. จัดลำดับตาม severity (Critical, High, Medium, Low)
5. สร้าง summary: จำนวน workflows ทั้งหมด, จำนวนที่ผ่าน, จำนวนที่มี issues
6. ทำ `/report-review` สำหรับ structured review output
7. แนะนำ next step: ทำ `/improve-all-workflows` สำหรับ workflows ที่มี issues

## Rules

### 1. Review Only

- ไม่แก้ไขไฟล์ระหว่าง review
- บันทึก findings เป็น report เท่านั้น
- แยก review process จาก fix process
- ส่งต่อไป `/improve-all-workflows` สำหรับการแก้ไข

### 2. Severity Classification

- **Critical**: ขาด sections หลัก, broken references, ไฟล์เกิน 250 บรรทัด
- **High**: frontmatter ไม่ครบ, content ซ้ำซ้อน, structure ไม่ตรงมาตรฐาน
- **Medium**: language inconsistency, missing conditional execution, non-optimal ordering
- **Low**: cosmetic, naming, minor improvement

### 3. Dimension Coverage

- ตรวจสอบครบ 6 dimensions: Frontmatter, Structure, Content, References, Redundancy, Execution
- แต่ละ workflow ต้องผ่านทุก dimension
- ระบุ dimension ที่พบ issues มากที่สุด
- ระบุ workflows ที่มี issues มากที่สุด

### 4. Evidence-Based Findings

- ทุก finding ต้องมี evidence (filename, line number, ปัญหาที่พบ)
- ไม่เดา ใช้ tools สำหรับ verification
- อ้างอิงมาตรฐานจาก `/write-global-workflows`
- ระบุ false positives ที่พบ

### 5. Non-Duplication

- ใช้ `/improve-all-workflows` สำหรับการปรับปรุง
- ใช้ `/validate-review` สำหรับ validate review ก่อน merge
- ใช้ `/deep-review` สำหรับ comprehensive project review
- Workflow นี้เน้นเฉพาะการ review global workflows เท่านั้น

## Expected Outcome

- Review report ครอบคลุม workflows ทั้งหมดใน `global_workflows/`
- Findings จัดกลุ่มตาม dimension และ severity
- ระบุ workflows ที่ผ่านมาตรฐานและที่มี issues
- ระบุ broken references และ redundancy ระหว่าง workflows
- ส่งต่อไป `/improve-all-workflows` สำหรับการแก้ไข
