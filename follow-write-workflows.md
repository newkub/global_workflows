---

title: Follow Workflows Creator

description: เขียน workflow file ให้เป็นมาตรฐานเดียวกัน

auto_execution_mode: 3

related_workflows:
  - /follow-content-quality
  - /improve-flow
  - /update-docs
  - /update-reference

---

## Goal

สร้าง workflow file ที่มีโครงสร้างสม่ำเสมอ อ่านง่าย

## Scope

เขียน workflow file ทั้งใน global_workflows และ workspace

## Execute

### 1. Research And Prepare

1. อ่าน workflows ที่คล้ายกันใน global_workflows
2. ใช้ `/follow-content-quality` ก่อนเริ่มเขียน
3. ใช้ `/update-docs` เพื่อเก็บ reference หากมี file operations

### 2. Write Frontmatter And Goal

1. เขียน `title` ชัดเจน ใช้ Title Case (ตรงกับ filename ไม่มี follow-)
2. เขียน `description` กระชับไม่เกิน 100 ตัวอักษร
3. ตั้งค่า `auto_execution_mode: 3`
4. เพิ่ม `related_workflows` (optional) หากมี workflows ที่เกี่ยวข้อง
5. เพิ่ม `url` (optional) หากมี reference ภายนอก
6. เขียนวัตถุประสงค์กระชับ ไม่เกิน 2 ประโยค
7. ห้ามเพิ่ม field อื่นโดยไม่จำเป็น

### 3. Write Execute And Rules

1. จัดลำดับ Execute ตาม impact order (foundation ก่อน, high impact ก่อน)
2. ใช้ `### N. Step Name` สำหรับแต่ละขั้นตอน (Title Case)
3. ใช้ numbered list (1., 2., 3.) ภายในแต่ละขั้นตอน
4. ใช้ `### N. Rule Category` สำหรับ grouping Rules
5. ใช้ bullet points (-) ชิดซ้ายใน Rules
6. เขียนเป็นหลักการ how-to ที่ใช้ได้ทั่วไป
7. เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
8. ไม่ซ้ำซ้อนระหว่าง Execute และ Rules

### 4. Validate And Finalize

1. ตรวจสอบว่าไม่เกิน 300 บรรทัด
2. ทำ `/improve-flow` เพื่อปรับปรุง flow ให้ดีขึ้น
3. ใช้ `/follow-content-quality` เพื่อตรวจสอบคุณภาพ
4. ตรวจสอบ workflows ที่อ้างอิงมีอยู่จริง
5. ใช้ `/update-reference` หากมี file operations

## Rules

### 1. Frontmatter

Frontmatter ต้องมี fields ดังนี้:

- `title`: Title Case ชัดเจน (ตรงกับ filename ไม่รวม follow-)
- `description`: กระชับไม่เกิน 100 ตัวอักษร
- `auto_execution_mode`: 3 เท่านั้น
- `related_workflows`: (optional) รายการ workflows ที่เกี่ยวข้อง
- `url`: (optional) URL ภายนอกสำหรับ reference

ห้ามเพิ่ม field อื่นโดยไม่จำเป็น

### 2. Structure

โครงสร้างมาตรฐานสำหรับทุก workflow:

- ## Goal (required)
- ## Scope (required)
- ## Execute (required)
- ## Rules (required)
- ## Expected Outcome (required)
- ## Common Mistakes (optional)
- ## Anti-Patterns (optional)

### 3. Formatting

รูปแบบการเขียนที่ต้อง follow:

- หัวข้อภาษาอังกฤษ Title Case
- รายการใช้ภาษาไทย (ยกเว้นคำศัพท์เฉพาะ)
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไม่ใช้ ** เน้นตัวหนาในหัวข้อ
- ไฟล์ไม่เกิน 300 บรรทัด

### 4. Backticks Usage

ใช้ backticks สำหรับ:

- tools, commands, file paths
- workflows (`/workflow-name`)
- environment variables, code snippets
- function names, configuration keys
- package names, git commands

### 5. Content Style

แนวทางการเขียนเนื้อหา:

- เขียนเป็นหลักการ how-to ที่ใช้ได้ทั่วไป
- ไม่ใช่ manual step-by-step ที่ละเอียดเกินไป
- ใช้ keyword กระชับ มีความหมายชัด
- เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์] เพื่ออ้างอิง workflows อื่น
- ใน Rules สามารถใช้ table, code block, diagram ได้
- terminal commands ใส่ใน code block
- architecture file structure ใส่ใน code block
- config examples ใส่ใน code block
- examples ต้องสั้นกระชับ เข้าใจง่าย
- examples ต้องสอดคล้องกับ Execute steps

### 6. Alignment And Consistency

ตรวจสอบความสอดคล้อง:

- Goal สอดคล้องกับ Filename
- Execute สอดคล้องกับ Goal และ Rules
- Expected Outcome สอดคล้องกับ Goal
- ใช้คำศัพท์สม่ำเสมอทั่วทั้ง workflow
- ไม่มีข้อความขัดแย้งกัน

### 7. Non-Redundancy

หลีกเลี่ยงความซ้ำซ้อน:

- ลบข้อความที่ซ้ำซ้อนระหว่าง Execute และ Rules
- รวบรวมรายละเอียดที่เหมือนกันไว้ที่เดียว
- ใช้ references แทนการ duplicate เนื้อหา
- เป็น single source of truth

### 8. Impact Order

จัดลำดับ execute ตามลำดับความสำคัญ:

- Foundation ก่อน (setup, config, dependencies)
- High impact items ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน
- Critical path ก่อน
- Hard to change ก่อน
- High risk เพื่อ fail fast

### 9. Workflow References

การอ้างอิง workflows:

- เช็คว่า workflows ที่อ้างอิงมีอยู่จริง
- เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
- อ่าน workflows ที่เกี่ยวข้องก่อนเขียนเพื่อไม่ให้ซ้ำ

### 10. Deterministic Execution

workflow ต้อง:

- ให้ผลลัพธ์เหมือนกันทุกครั้งที่ทำตาม
- ไม่ใช้คำสั่ง subjective หรือ ambiguous
- ระบุลำดับการทำงามชัดเจน
- ไม่ข้ามขั้นตอน

### 11. Script Automation Guidelines

พิจารณาใช้ `/use-scripts` สำหรับ workflows ที่ต้องการประมวลผลข้อมูลขนาดใหญ่หรือ file operations จำนวนมาก

เงื่อนไขการใช้:
- File operations มากกว่า 10 ไฟล์
- Data processing ที่ซับซ้อน
- Pattern matching ที่ต้อง parser
- Metrics calculation ที่ต้อง aggregation
- Batch transformations ที่ consistent

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

