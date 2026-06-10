---

title: Follow Workflows Creator

description: เขียน workflow file ให้เป็นมาตรฐานเดียวกัน

auto_execution_mode: 3

related_workflows:
  - /windsurf-global-workflows
  - /improve-flow
  - /update-docs
  - /update-reference

---

## Goal

สร้าง workflow file ที่มีโครงสร้างสม่ำเสมอ อ่านง่าย

## Scope

เขียน workflow file ทั้งใน global_workflows และ workspace โดยทุก workspace ต้องเขียนให้ `/follow-content-quality`

## Execute

### 1. Research And Learn (Optional)

เรียนรู้จาก official docs สำหรับ workflow ที่เกี่ยวข้องกับ library/framework

1. ทำ `/follow-learn-best-practices` หรือ `/deep-research`
2. อ่าน official documentation และสรุป best practices

### 2. Read Global Workflows

เข้าใจมาตรฐานและป้องกันการซ้ำซ้อน

1. ทำ `/windsurf-global-workflows`
2. อ่าน workflows ที่คล้ายกัน
3. ใช้ `/update-docs` หากมี file operations

### 3. Write Frontmatter

เขียน frontmatter ตามมาตรฐาน

1. เขียน `title` Title Case (ตรงกับ filename ไม่มี follow-)
2. เขียน `description` กระชับไม่เกิน 100 ตัวอักษร
3. ตั้งค่า `auto_execution_mode: 3`
4. เพิ่ม `related_workflows` (optional)
5. เพิ่ม `url` (optional)
6. ห้ามเพิ่ม field อื่นโดยไม่จำเป็น

### 4. Write Execute And Rules

เขียน Execute และ Rules ตามมาตรฐาน

1. จัดลำดับ Execute ตาม impact order
2. ใช้ `### N. Step Name` (Title Case)
3. ใช้ numbered list (1., 2., 3.)
4. ใช้ `### N. Rule Category` สำหรับ Rules
5. ใช้ bullet points (-) ชิดซ้ายใน Rules
6. เขียนเป็นหลักการ how-to
7. เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
8. ทำตาม `/follow-content-quality`
9. ไม่ซ้ำซ้อนระหว่าง Execute และ Rules

### 5. Validate And Finalize

ตรวจสอบและ finalize workflow

1. ตรวจสอบว่าไม่เกิน 300 บรรทัด
2. ทำ `/improve-flow`
3. ตรวจสอบ workflows ที่อ้างอิงมีอยู่จริง
4. ใช้ `/update-reference` หากมี file operations

## Rules

### 1. Frontmatter And Structure

ตั้งค่า frontmatter และโครงสร้างตามมาตรฐาน

- `title`: Title Case ชัดเจน (ตรงกับ filename ไม่รวม `follow-`)
- `description`: กระชับไม่เกิน 100 ตัวอักษร
- `auto_execution_mode`: 3 เท่านั้น
- `related_workflows`: (optional) รายการ workflows ที่เกี่ยวข้อง
- `url`: (optional) URL ภายนอกสำหรับ reference
- ## Goal (required)
- ## Scope (required)
- ## Execute (required)
- ## Rules (required)
- ## Expected Outcome (required)
- ## Common Mistakes (optional)
- ## Anti-Patterns (optional)

### 2. Formatting And Style

ใช้รูปแบบและ style ที่สม่ำเสมอ

- หัวข้อภาษาอังกฤษ Title Case
- รายการใช้ภาษาไทย (ยกเว้นคำศัพท์เฉพาะ)
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไม่ใช้ ** เน้นตัวหนาในหัวข้อ
- ไฟล์ไม่เกิน 300 บรรทัด
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`, `environment variables`, `code snippets`, `function names`, `configuration keys`, `package names`, `git commands`

### 3. Content Guidelines

เขียนเนื้อหาตามแนวทางที่กำหนด

- เขียนเป็นหลักการ how-to ที่ใช้ได้ทั่วไป
- ไม่ใช่ manual step-by-step ที่ละเอียดเกินไป
- ใช้ keyword กระชับ มีความหมายชัด
- เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
- ใน Rules สามารถใช้ table, code block, diagram ได้
- terminal commands, architecture, config examples ใส่ใน code block
- examples ต้องสั้นกระชับ เข้าใจง่าย และสอดคล้องกับ Execute steps

### 4. Consistency And Alignment

ตรวจสอบความสอดคล้องทั่วทั้ง workflow

- Goal สอดคล้องกับ Filename
- Execute สอดคล้องกับ Goal และ Rules
- Expected Outcome สอดคล้องกับ Goal
- ใช้คำศัพท์สม่ำเสมอทั่วทั้ง workflow
- ไม่มีข้อความขัดแย้งกัน

### 5. Non-Redundancy

หลีกเลี่ยงความซ้ำซ้อน

- ลบข้อความที่ซ้ำซ้อนระหว่าง Execute และ Rules
- รวบรวมรายละเอียดที่เหมือนกันไว้ที่เดียว
- ใช้ references แทนการ duplicate เนื้อหา
- เป็น single source of truth

### 6. Execution Order

จัดลำดับ execute ตามลำดับความสำคัญ

- Foundation ก่อน (setup, config, dependencies)
- High impact items ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน
- Critical path ก่อน
- Hard to change ก่อน
- High risk เพื่อ fail fast

### 7. Workflow References

อ้างอิง workflows อย่างถูกต้อง

- เช็คว่า workflows ที่อ้างอิงมีอยู่จริง
- เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
- อ่าน workflows ที่เกี่ยวข้องก่อนเขียนเพื่อไม่ให้ซ้ำ

### 8. Deterministic Execution

workflow ต้องให้ผลลัพธ์เหมือนกันทุกครั้ง

- ให้ผลลัพธ์เหมือนกันทุกครั้งที่ทำตาม
- ไม่ใช้คำสั่ง subjective หรือ ambiguous
- ระบุลำดับการทำงานชัดเจน
- ไม่ข้ามขั้นตอน

### 9. Script Automation

พิจารณาใช้ `/use-scripts` สำหรับงานที่ซับซ้อน

- File operations มากกว่า 10 ไฟล์
- Data processing ที่ซับซ้อน
- Pattern matching ที่ต้อง parser
- Metrics calculation ที่ต้อง aggregation
- Batch transformations ที่ consistent

## Expected Outcome

- Workflow file มีโครงสร้างสม่ำเสมอ อ่านง่าย
- Frontmatter ถูกต้องตามมาตรฐาน
- Execute และ Rules เขียนตาม format ที่กำหนด
- ไม่เกิน 300 บรรทัด
- ผ่าน `/follow-content-quality`
- Workflows ที่อ้างอิงมีอยู่จริง
- ให้ผลลัพธ์เหมือนกันทุกครั้ง

## Template Format Example

ตัวอย่าง workflow file ที่ถูกต้อง:

```yaml
---
title: Workflow Name
description: คำอธิบายกระชับไม่เกิน 100 ตัวอักษร
auto_execution_mode: 3
related_workflows:
  - /workflow-name-1
  - /workflow-name-2
---

## Goal

วัตถุประสงค์กระชับ ไม่เกิน 2 ประโยค

## Scope

ขอบเขตงานที่ครอบคลุม

## Execute

### 1. Step Name

1. ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
2. ทำอย่างอื่นต่อ

## Rules

### 1. Rule Category

คำอธิบาย rule:

- bullet point 1
- bullet point 2

## Expected Outcome

- [ ] Outcome ที่คาดหวัง 1
- [ ] Outcome ที่คาดหวัง 2

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ข้อผิดพลาดที่ 1
- ข้อผิดพลาดที่ 2

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ รูปแบบที่ไม่ควรทำ 1
- ❌ รูปแบบที่ไม่ควรทำ 2
```


