---
title: Improve Content
description: ปรับปรุงเนื้อหาให้ถูกต้อง ครอบคลุม ชัดเจน และเป็นไปตาม best practices
auto_execution_mode: 3
related_workflows:
  - /follow-content-quality
  - /simplify-content
  - /check-correctness
  - /improve-correctness
  - /improve-completeness
  - /deep-research
  - /check-reference
  - /improve-redundancy
---

## Goal

ปรับปรุงเนื้อหาให้ถูกต้อง ครอบคลุม ชัดเจน กระชับ และเป็นไปตาม best practices

## Scope

ใช้สำหรับปรับปรุงเนื้อหาของไฟล์ใดๆ (markdown, documentation, workflow, skill, config, README)

## Execute

### 1. Identify Target Content

ระบุเนื้อหาที่ต้องปรับปรุง

1. ระบุไฟล์หรือกลุ่มไฟล์ที่ต้องปรับปรุง
2. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องแบบ recursive
3. ระบุประเภทเนื้อหา (documentation, workflow, skill, config, README)

### 2. Check Correctness

ตรวจสอบความถูกต้องของเนื้อหา

1. ทำ `/check-correctness` เพื่อตรวจสอบ structure, formatting, และ consistency
2. ทำ `/check-reference` เพื่อตรวจสอบ references ที่อ้างถึงมีอยู่จริง
3. ตรวจสอบไฟล์ไม่เกิน 250 บรรทัด
4. บันทึก issues ที่พบพร้อม priority (Critical, High, Medium, Low)

### 3. Research Best Practices

ค้นหา best practices สำหรับ topics ที่เกี่ยวข้อง

1. ทำ `/deep-research` สำหรับ tools/libraries/concepts ที่เนื้อหาเกี่ยวข้อง
2. ทำ `/follow-best-practice` สำหรับ context ของเนื้อหานั้นๆ
3. ตรวจสอบว่าข้อมูลเป็นปัจจุบันและสอดคล้องกับ official documentation
4. ระบุ patterns และ conventions ที่แนะนำ

### 4. Apply Content Quality

ปรับปรุงคุณภาพเนื้อหาตาม `/follow-content-quality`

1. ทำให้เนื้อหา explicit แทน implicit (ระบุ subject, object, ใช้ active voice)
2. ลดความซ้ำซ้อนระหว่าง sections (ใช้ references แทนการ duplicate)
3. ปรับปรุง content dimensions: readability, completeness, correctness, actionability
4. ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
5. ตรวจสอบ spacing, indentation, headings สม่ำเสมอ

### 5. Simplify And Condense

ทำให้เนื้อหากระชับและเข้าใจง่าย

1. ทำ `/simplify-content` สำหรับลดความซับซ้อน
2. ลบ sections ที่ไม่จำเป็นหรือซ้ำซ้อน
3. รวม sections ที่มีเนื้อหาคล้ายกัน
4. ลดคำที่ไม่จำเป็นและคำซ้ำซ้อน
5. ทำ `/dont-over-engineer` เพื่อหลีกเลี่ยงการเขียนเกินจำเป็น

### 6. Improve Coverage

ปรับปรุงความครอบคลุมของเนื้อหา

1. ทำ `/improve-coverage` เพื่อตรวจสอบว่าเนื้อหาครอบคลุม use cases ครบถ้วน
2. ทำ `/improve-completeness` เพื่อตรวจสอบ missing sections หรือข้อมูลที่ขาดหาย
3. เพิ่ม edge cases และ conditional execution ที่ขาดหาย
4. ตรวจสอบว่า Expected Outcome สอดคล้องกับ Goal

### 7. Verify And Report

ตรวจสอบผลการปรับปรุง

1. ทำ `/check-correctness` อีกครั้งเพื่อ verify
2. ทำ `/check-reference` เพื่อยืนยัน references ทั้งหมดถูกต้อง
3. ตรวจสอบไฟล์ไม่เกิน 250 บรรทัด
4. ทำ `/report` เพื่อสรุปการปรับปรุง
5. ท้า /suggest-next-action เพือแนะนำอก์ชันถัดไป้

## Rules

### 1. Correctness First

- แก้ไข Critical issues ก่อนเสมอ
- ตรวจสอบ structure และ formatting สม่ำเสมอ
- ทำ `/check-reference` ก่อนและหลังแก้ไข
- ใช้ consistent terminology และ tone

### 2. Research-Driven Improvements

- ทำ `/deep-research` สำหรับ topics ที่เกี่ยวข้อง
- อ้างอิง official documentation เป็น primary source
- ตรวจสอบ version compatibility และ information freshness
- ใช้ `/follow-best-practice` สำหรับ context ของเนื้อหา

### 3. Content Quality

- เนื้อหา explicit แทน implicit (ทำ `/follow-content-quality`)
- ใช้ active voice แทน passive voice
- ระบุ subject และ object ชัดเจน
- หลีกเลี่ยงคำที่กำกวม (should, could, might)
- อธิบาย "why" ไม่ใช่แค่ "what"
- ให้ตัวอย่าง concrete แทน abstract descriptions

### 4. Simplify And Non-Redundancy

- ทำ `/simplify-content` สำหรับลดความซับซ้อน
- ไม่ซ้ำซ้อนระหว่าง sections
- ใช้ references แทนการ duplicate เนื้อหา
- Single source of truth
- ทำ `/dont-over-engineer` เสมอ

### 5. Coverage Quality

- ครอบคลุม use cases ครบถ้วน (ทำ `/improve-completeness`)
- ครอบคลุม edge cases และ conditional execution
- ไม่มี missing sections (ทำ `/improve-completeness`)
- Expected Outcome สอดคล้องกับ Goal

### 6. Minimal Changes

- แก้ไขเฉพาะสิ่งที่จำเป็น
- รักษา content intent เดิม
- หลีกเลี่ยงการเขียนใหม่ทั้งไฟล์ถ้าไม่จำเป็น
- ใช้ `/edit-only` เมื่อเป็นไปได้

### 7. Verification

- ทำ `/check-correctness` อีกครั้งหลังแก้ไข
- ตรวจสอบไฟล์ไม่เกิน 250 บรรทัด
- ทำ `/check-reference` เพื่อยืนยัน references ถูกต้อง
- ทำ `/report` เพื่อสรุปการปรับปรุง

## Expected Outcome

- เนื้อหาถูกต้องตาม facts และ best practices
- ไม่มี broken references
- เนื้อหาครอบคลุม ชัดเจน กระชับ และ explicit
- ไม่ซ้ำซ้อน เป็น single source of truth
- ไฟล์ไม่เกิน 250 บรรทัด
- สอดคล้องกับ official documentation และ current best practices
- Expected Outcome สอดคล้องกับ Goal
