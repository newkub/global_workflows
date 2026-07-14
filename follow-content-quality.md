---
title: Follow Content Quality
description: จัดรูปแบบและคุณภาพเนื้อหาให้ถูกต้อง อ่านง่าย สอดคล้องกัน
auto_execution_mode: 3
related:
  - /write-global-workflows
  - /review-code-quality
  - /review-architecture
  - /dont-over-engine
  - /follow-code-quality
---

## Goal

สร้างเนื้อหาที่มีคุณภาพสูง อ่านง่าย สอดคล้องกัน และไม่ซ้ำซ้อน

## Scope

ใช้กับ content ทุกประเภท (markdown, documentation, workflow files)

## Execute

### 1. Simplify And Condense

ทำให้โครงสร้างและเนื้อหากระชับ

1. ลบ sections ที่ไม่จำเป็นหรือซ้ำซ้อน
2. รวม sections ที่มีเนื้อหาคล้ายกัน
3. ลบ subsections ที่ไม่มีคุณค่าเพิ่ม
4. รวม steps ที่ทำงานคล้ายกัน
5. ลบคำที่ไม่จำเป็นและคำซ้ำซ้อน
6. ทำ `/dont-over-engineer`

### 2. Make Content Explicit

เขียน content ให้ชัดเจน explicit มากกว่า implicit

1. ทำตาม Rules ใน section "Explicit Content" ทั้งหมด
2. ตรวจสอบความชัดเจนด้วยการอ่านซ้ำ
3. ตรวจสอบว่าไม่มี assumptions ที่ไม่ได้ระบุ

### 3. Remove Redundancy

ลบความซ้ำซ้อน

1. ลบข้อมูลที่ซ้ำซ้อนระหว่าง Execute และ Rules
2. ใช้ references แทนการเขียนซ้ำ
3. รวบรวมรายละเอียดที่เหมือนกันไว้ที่เดียว
4. ตรวจสอบว่าเป็น single source of truth

### 4. Improve Content Dimensions

ปรับปรุง content ครบวงจร

1. ทำตาม Rules ใน section "Content Dimensions" ทั้งหมด
2. ทำ `/review-architecture` สำหรับโครงสร้างไฟล์

## Rules

### 1. Format And Structure

ใช้รูปแบบและโครงสร้างที่สม่ำเสมอ

- ใช้ spacing, indentation, headings สม่ำเสมอ
- หัวข้อใช้ Title Case ภาษาอังกฤษ รายการใช้ภาษาไทย
- ลบ subsections ที่ไม่จำเป็นให้เป็น bullet points
- รวม Execute steps ที่ทำงานคล้ายกัน
- Grouping และ hierarchy ชัดเจน logical

### 2. Explicit Content

เขียน content ให้ชัดเจน explicit มากกว่า implicit

- ใช้ภาษาตรงไปตรงมาเสมอ
- ระบุ subject และ object ชัดเจนในทุกประโยค
- หลีกเลี่ยงคำที่กำกวมและ pronouns ที่ไม่ชัดเจน
- ใช้ active voice แทน passive voice
- ระบุเงื่อนไขและข้อจำกัดชัดเจน
- ให้ตัวอย่าง concrete แทน abstract descriptions
- หลีกเลี่ยงคำที่มีหลายความหมาย (should, could, might)
- ใช้คำที่เฉพาะเจาะจงแทนคำทั่วไป
- ระบุ exceptions และ edge cases ชัดเจน
- แยกประเด็นที่แตกต่างออกจากกัน
- ใช้ numbered list สำหรับ steps ที่ต้องทำตามลำดับ
- เขียน documentation สำหรับ logic ที่ซับซ้อน
- อธิบาย "why" ไม่ใช่แค่ "what"
- เขียน error messages ชัดเจนแกะได้
- ให้ context ใน messages (สิ่งที่ผิด, ทำไม, แก้ยังไง)
- ใช้ descriptions และ labels ที่บอก purpose ชัดเจน
- หลีกเลี่ยง generic messages และ descriptions
- ใช้ consistent terminology และ tone
- ตรวจสอบความชัดเจนด้วยการอ่านซ้ำ
- ตรวจสอบว่าไม่มี assumptions ที่ไม่ได้ระบุ

### 3. Non-Redundancy

หลีกเลี่ยงความซ้ำซ้อน

- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- เก็บเนื้อหาสำคัญครบถ้วน
- ความยาวเหมาะสมกับเนื้อหา
- Single source of truth ไม่ซ้ำซ้อน
- ทำ `/dont-over-engineer` เสมอเมื่อเริ่มทำงาน
- ใช้ minimal changes เสมอ

### 4. Content Dimensions

มิติของ content quality

- ทำตาม `/review-architecture` สำหรับโครงสร้างไฟล์
- Readability: explanations ชัดเจน, formatting เหมาะสม, หลีกเลี่ยง jargon
- Completeness: รวม use cases, examples, edge cases
- Correctness: ตรวจสอบ structure, flow, edge cases, assumptions
- Accessibility: screen reader friendly, keyboard navigation, alt text
- Maintainability: organized structure, consistent patterns, documentation
- Relevance: address audience needs, solve real problems
- Actionability: actionable steps, clear instructions, examples ปฏิบัติได้

## Expected Outcome

- เนื้อหาอ่านง่าย กระชับ ตรงประเด็น
- ชัดเจน เข้าใจง่าย ไม่กำกวม
- สอดคล้องกันทั้งหมด
- ถูกต้องตาม principle ที่กำหนด
- จัดระเบียบดี มี hierarchy ชัดเจน
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- เป็น single source of truth
- ยังคงเนื้อหาสำคัญครบถ้วน
- Content เขียนให้ explicit ชัดเจน ไม่กำกวม
- Documentation, messages, comments มีคุณภาพ
- ลดความสับสนจาก implicit content
- บำรุงรักษาได้ง่ายขึ้น
- โครงสร้างไฟล์เป็นระเบียบ สม่ำเสมอ
- naming ที่สอดคล้องกันทั่วทั้งโปรเจกต์
- Content ครบทุกมิติ quality (readability, completeness, correctness, accessibility, maintainability, relevance, actionability)
