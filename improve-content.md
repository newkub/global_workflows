---
title: Improve Content
description: ปรับปรุงคุณภาพ content ให้ดีขึ้นครบวงจร
auto_execution_mode: 3
related_workflows:
  - /refactor
  - /analyze-codebase
  - /run-test
  - /review
  - /follow-content-quality
  - /follow-consistency
---

## Goal

ปรับปรุงคุณภาพ content (documentation, workflow, skill, markdown, etc.) ให้ดีขึ้นครบวงจร

## Scope

ใช้ได้กับ content: documentation, workflow, skill, markdown files, README, guides, references

## Execute

### 1. Select Target

เลือก target ที่จะปรับปรุง

1. ระบุ target (file, folder, concept, workflow)
2. กำหนดเป้าหมาย
3. ตรวจสอบ dependencies

### 2. Analyze Current State

วิเคราะห์สถานะปัจจุบัน

1. อ่านและวิเคราะห์ target
2. ระบุปัญหา
3. จัดลำดับความสำคัญ

### 3. Improve Structure

ปรับปรุงโครงสร้าง

1. จัดโครงสร้างชัดเจน (แยกส่วนตาม responsibilities, จัดลำดับ flow)
2. ใช้ pattern เหมาะสม
3. ลบสิ่งไม่จำเป็น

### 4. Improve Naming

ปรับปรุง naming

1. ใช้ชื่อชัดเจนและเป็นมาตรฐาน
2. หลีกเลี่ยงชื่อกำกวม
3. คงความสม่ำเสมอ

### 5. Improve Readability

ปรับปรุงความอ่านง่าย

1. ทำให้อ่านง่าย (explanations ชัดเจน, formatting เหมาะสม, แบ่ง sections ชัดเจน)
2. ใช้ภาษาเหมาะสม (ผู้อ่านเข้าใจ, หลีกเลี่ยง jargon, อธิบายด้วยตัวอย่าง)
3. จัดรูปแบบสวยงาม

### 6. Improve Completeness

ปรับปรุงความครบถ้วน

1. ตรวจสอบความครบถ้วน (use cases, examples, edge cases)
2. เติมข้อมูลขาด
3. อัปเดต content ทันสมัย

### 7. Improve Correctness

ปรับปรุงความถูกต้อง

1. ตรวจสอบความถูกต้อง (structure, flow, edge cases, assumptions)
2. แก้ไข mistakes
3. ปรับปรุง approach

### 8. Improve Accessibility

ปรับปรุง accessibility

1. ทำให้เข้าถึงได้ (screen reader friendly, keyboard navigation, alt text)
2. ใช้ภาษาเข้าใจง่าย (avoid jargon, explain terms, simple language)
3. รองรับหลายภาษา

### 9. Improve Maintainability

ปรับปรุงความง่ายในการบำรุงรักษา

1. ทำให้บำรุงรักษาง่าย (organized structure, clear organization, consistent patterns)
2. ทำ `/improve-redundancy` เพื่อลดความซับซ้อน
3. ทำ `/follow-consistency` เพื่อรักษาความสม่ำเสมอ
4. เพิ่ม documentation (inline notes, external docs, examples)
5. ใช้ version control

### 10. Improve Relevance

ปรับปรุงความเกี่ยวข้อง

1. ทำให้เกี่ยวข้องกับผู้อ่าน (address audience needs, solve real problems)
2. ใช้ examples เกี่ยวข้อง (real-world scenarios, practical use cases)
3. อัปเดต content ทันสมัย
4. ลบ content ไม่เกี่ยวข้อง

### 11. Improve Actionability

ปรับปรุงความสามารถดำเนินการได้

1. ทำให้นำไปใช้ได้จริง (actionable steps, clear instructions)
2. เพิ่ม examples ปฏิบัติได้ (copy-paste ready, templates)
3. ให้ clear next steps (what to do next, how to start)
4. ลบ barriers (complex prerequisites, unclear requirements)

### 13. Review And Validate

ทบทวนและตรวจสอบ

1. Review changes (ทบทวนทุกการเปลี่ยนแปลง, ตรวจสอบ regressions, ตรวจสอบเป้าหมาย)
2. Validate content (ความถูกต้อง, completeness, consistency)
3. Get feedback

## Rules

### 1. File Structure

ปรับปรุงโครงสร้างไฟล์

- ทำตาม `/improve-file-structure` เพื่อปรับปรุงโครงสร้างไฟล์และโฟลเดอร์

### 2. Content Quality

ปรับปรุงคุณภาพ content

- ทำตาม `/follow-content-quality` เพื่อปรับปรุงคุณภาพ content ครบวงจร

### 3. Consistency

รักษาความสม่ำเสมอ

- ทำตาม `/follow-consistency` เพื่อรักษาความสม่ำเสมอทั่วทั้งระบบ

## Expected Outcome

- Target ได้รับการปรับปรุงครบถ้วนตาม 12 ด้าน
- Structure ชัดเจนและเป็นระเบียบ
- Naming สม่ำเสมอและสื่อความหมาย
- Content อ่านง่ายและเข้าใจ
- Information ครบถ้วนและทันสมัย
- Content ถูกต้องและมีประสิทธิภาพ
- Accessible และรองรับผู้ใช้ทุกคน
- Maintainable และบำรุงรักษาง่าย
- Relevant กับผู้อ่านและ context
- Actionable และนำไปใช้ได้จริง
- Searchable และค้นหาได้ง่าย
- Content ผ่านการตรวจสอบและ validation
- Content ผ่าน `/follow-content-quality`
