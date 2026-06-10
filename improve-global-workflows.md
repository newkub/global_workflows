---
title: Improve Global Workflows
description: ปรับปรุง global workflows ให้สอดคล้องกับ principles, content quality, และ avoid over-engineering
auto_execution_mode: 3
related_workflows:
  - /follow-principles-engineering
  - /follow-content-quality
  - /follow-best-practice
  - /check-correctness
  - /dont-over-engineer
  - /write-windsurf-global-workflows
---

## Goal

ปรับปรุง global workflows ให้สอดคล้องกับ principles, content quality, และ avoid over-engineering

## Scope

ปรับปรุง global workflows ทั้งหมดให้ match กับมาตรฐาน (principles, content quality, best practices)

## Execute

### 1. Check Principles Compliance

ตรวจสอบว่า workflow match กับ software engineering principles

1. ทำ `/follow-principles-engineering` เพื่อตรวจสอบ principles compliance
2. ระบุ principle จาก file name
3. ตรวจสอบ structure, logic, naming match กับ principle
4. ระบุ violations และ recommendations

### 2. Apply Content Quality

จัดรูปแบบและคุณภาพเนื้อหาให้ถูกต้อง

1. ทำ `/follow-content-quality` เพื่อตรวจสอบ format และ quality
2. ตรวจสอบ spacing, indentation, headings สม่ำเสมอ
3. ตรวจสอบ clarity, consistency, correctness
4. ลบคำที่ไม่จำเป็นและ redundancy

### 3. Apply Minimal Changes

หลีกเลี่ยง over-engineering ใช้ minimal changes

1. ทำ `/dont-over-engineer` เพื่อใช้ minimal changes
2. ใช้ single-line change เมื่อเป็นไปได้
3. ไม่ refactor ทั้งโค้ดเบสเพื่อแก้ปัญหาเล็กๆ
4. ตรวจสอบไม่มี side effects

### 4. Check Correctness

ตรวจสอบความถูกต้องตามที่ระบุ

1. ทำ `/check-correctness` เพื่อตรวจสอบความถูกต้อง
2. ระบุ criteria สำหรับการตรวจสอบ
3. ตรวจสอบตาม criteria ที่กำหนด
4. บันทึก issues ที่พบและจัดลำดับความสำคัญ
5. สรุปผลการตรวจสอบและแนะนำการแก้ไข

### 5. Follow Write Workflows Standard

เขียนตามมาตรฐาน write-windsurf-global-workflows

1. ทำ `/write-windsurf-global-workflows` เพื่อตรวจสอบ standard
2. ตรวจสอบ frontmatter (title, description, auto_execution_mode: 3)
3. ตรวจสอบโครงสร้าง (Goal, Scope, Execute, Rules, Expected Outcome)
4. ตรวจสอบ formatting (Title Case, numbered list, bullet points)
5. ตรวจสอบการใช้ backticks สำหรับ tools, commands, workflows
6. ตรวจสอบการอ้างอิง workflows ที่มีอยู่จริง
7. ตรวจสอบความยาวไม่เกิน 200 บรรทัด

## Rules

### 1. Principles Compliance

ทำตาม `/follow-principles-engineering`:

- ระบุ principle จาก file name อย่างถูกต้อง
- ปฏิบัติตาม principle โดยตรง
- ตรวจสอบ structure, logic, naming match กับ principle
- ระบุ violations และแก้ไข

### 2. Content Quality

ทำตาม `/follow-content-quality`:

- ใช้ spacing, indentation, headings สม่ำเสมอ
- หัวข้อใช้ Title Case ภาษาอังกฤษ รายการใช้ภาษาไทย
- เขียนให้ชัดเจน explicit มากกว่า implicit
- ใช้คำศัพท์สม่ำเสมอทั่วเอกสาร
- ลบ redundancy และเป็น single source of truth

### 3. Minimal Changes

ทำตาม `/dont-over-engineer`:

- ใช้ single-line change เมื่อเป็นไปได้
- ไม่ refactor ทั้งโค้ดเบสเพื่อแก้ปัญหาเล็กๆ
- ไม่สร้าง abstraction ที่ไม่จำเป็น
- ใช้ solution ที่เรียบง่ายที่สุด

### 4. Best Practices

ทำตาม `/follow-best-practice`:

- ใช้ best practices ของ markdown และ documentation
- ใช้ conventions ที่สม่ำเสมอทั่ว global workflows
- ใช้ patterns ที่เหมาะสมกับ workflow files
- รักษา consistency ทั่วทั้ง global workflows

### 5. Correctness Check

ทำตาม `/check-correctness`:

- ตรวจสอบตาม criteria ที่ measurable
- จัดลำดับความสำคัญของ issues (Critical, High, Medium, Low)
- สรุปกระชับและชัดเจน
- แนะนำการแก้ไขที่ concrete

### 6. Write Workflows Standard

ทำตาม `/write-windsurf-global-workflows`:

- Frontmatter: `title`, `description`, `auto_execution_mode: 3`
- Execute ใช้ `### N. Step Name` และ numbered list
- Rules ใช้ `### N. Rule Category` และ bullet points
- แต่ละ ### มีข้อความด้านบนก่อน bullet points
- ใช้ backticks สำหรับ `tools`, `commands`, `workflows`
- ไฟล์ไม่เกิน 200 บรรทัด
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- เขียน content ให้ explicit ชัดเจน

### 7. Write Concise Rules

เขียนกฎให้รัดกุ่ม ชัดเจน และเจาะจง

- เขียนกฎสั้นกระชับ ไม่ซ้ำซ้อน
- ใช้ภาษาที่ชัดเจน explicit ไม่ implicit
- ระบุ action ที่ต้องทำอย่างเจาะจง
- หลีกเลี่ยงคำที่ไม่จำเป็นและ redundancy
- ใช้ bullet points สั้นๆ ชัดเจน

## Expected Outcome

- Global workflows ที่สอดคล้องกับ principles
- เนื้อหามีคุณภาพสูง อ่านง่าย ไม่ซ้ำซ้อน
- ใช้ minimal changes ไม่ over-engineering
- โครงสร้างสม่ำเสมอตามมาตรฐาน write workflows
- Frontmatter สมบูรณ์
- Consistency สูงกับ workflows อื่น
- ใช้ best practices ของ markdown และ documentation
- ตรวจสอบความถูกต้องตาม criteria ที่กำหนด
- Issues ที่พบได้รับการจัดลำดับความสำคัญ

