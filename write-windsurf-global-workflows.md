---
title: Write Windsurf Global Workflows
description: เขียน workflow file ให้เป็นมาตรฐานเดียวกัน
auto_execution_mode: 3
---

## Goal

สร้าง workflow file ที่มีโครงสร้างสม่ำเสมอ อ่านง่าย

## Scope

เขียน workflow file ทั้งใน global_workflows และ workspace โดยทุก workspace ต้องเขียนให้ `/follow-content-quality`

## Rules

### 1. Structure And Consistency

- `title`: Title Case ชัดเจน (ตรงกับ filename)
- `description`: กระชับไม่เกิน 100 ตัวอักษร
- `auto_execution_mode`: 3 เท่านั้น
- `url`: (optional)
- ## Goal, ## Scope, ## Execute, ## Rules, ## Expected Outcome (required)
- ## Report (optional)
- Goal สอดคล้องกับ Filename, Execute สอดคล้องกับ Goal และ Rules
- Expected Outcome สอดคล้องกับ Goal

### 2. Content And Style

ทำตาม `/follow-content-quality` สำหรับคุณภาพเนื้อหา

- หัวข้อภาษาอังกฤษ Title Case, รายการภาษาไทย
- ทุก heading ใน Execute ต้องเป็นภาษาอังกฤษ Title Case
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไฟล์ไม่เกิน 250 บรรทัด
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
- เขียนเป็นหลักการ how-to

### 3. References And Non-Redundancy

ทำตาม `/use-workflows` สำหรับการใช้ references

- ลบข้อความที่ซ้ำซ้อนระหว่าง Execute และ Rules
- ใช้ references แทนการ duplicate เนื้อหา
- ทำ `/check-reference` เพื่อตรวจสอบ references มีอยู่จริง
- ถ้าอ้างถึง workflows หรือ skills อย่าพยายามเขียนซ้ำกับไฟล์ที่อ้างไป เขียนแค่ว่าให้ทำตามที่อ้างไป

### 4. Execution Guidelines

- Foundation ก่อน, High impact items ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน, Critical path ก่อน
- Hard to change ก่อน, High risk เพื่อ fail fast
- ให้ผลลัพธ์เหมือนกันทุกครั้ง
- ระบุลำดับการทำงานชัดเจน

### 5. Script Automation

- ใช้ `/use-scripts` เมื่อ file operations มากกว่า 10 ไฟล์
- ใช้ `/use-scripts` เมื่อ data processing ซับซ้อน
- ใช้ `/use-scripts` เมื่อ pattern matching ต้อง parser
- ใช้ `/use-scripts` เมื่อ metrics calculation ต้อง aggregation
- ใช้ `/use-scripts` เมื่อ batch transformations ต้อง consistency

### 6. Tool Usage Workflows

- ใช้ workflows ที่ขึ้นต้นด้วย "use-" สำหรับ tools/libraries ที่เฉพาะเจาะจง
- ตรวจสอบ references ว่ามีอยู่จริงก่อนอ้างอิงใน workflows ทุกตัว

### 7. Analysis Workflows

- ใช้ `/scan-codebase` สำหรับ scan codebase อย่างรวดเร็ว
- ใช้ `/analyze-project` สำหรับ project-level analysis
- ใช้ `/analyze-codebase` สำหรับ code-level analysis
- เลือก workflow ที่เหมาะสมกับประเภท analysis ที่ต้องการ

### 8. Report Formatting

- ถ้า workflow มี output ต้องระบุ `/report-format-*` ที่ใช้ใน Execute หรือ Rules
- ทำ `/report` เพื่อจัดรูปแบบ output ตามประเภทที่เหมาะสม
- ระบุ report format ใน Execute หรือ Rules อย่างน้อยหนึ่งแห่ง

## Execute

### 1. Read Global Workflows

อ่าน global workflows เพื่อเข้าใจมาตรฐานและป้องกันการซ้ำซ้อน

1. ทำ `/at-windsurf-global-rules` เพื่อดู global rules และ conventions
2. อ่าน workflows ที่คล้ายกันหรือเกี่ยวข้องเพื่อป้องกันการซ้ำซ้อน
3. ดูตัวอย่าง template ที่ส่วน Example Template ด้านล่างเพื่อเข้าใจ structure
4. ถ้ามี workflow หรือ skill ที่ครอบคลุม topic เดียวกัน ให้ใช้ reference แทนการเขียนซ้ำ

### 2. Check References

ตรวจสอบ references ก่อนเริ่มเขียน

1. ทำ `/check-reference` เพื่อตรวจสอบ references ที่จะใช้มีอยู่จริง
2. ตรวจสอบ workflows หรือ skills ที่จะอ้างถึงว่ามีอยู่จริง

### 3. Research And Learn (Optional)

เรียนรู้จาก official docs ถ้าจำเป็น

1. ทำ `/follow-best-practice` หรือ `/deep-research` สำหรับ topic ที่เกี่ยวข้อง
2. อ่าน official documentation ของ tools/libraries ที่จะใช้
3. ค้นหา examples และ best practices จาก sources ที่เชื่อถือได้

### 4. Write Frontmatter

เขียน frontmatter ตามมาตรฐาน

1. เขียน `title` เป็น Title Case ตรงกับ filename
2. เขียน `description` กระชับไม่เกิน 100 ตัวอักษร
3. ตั้ง `auto_execution_mode: 3` เสมอ
4. เพิ่ม `url` (optional) ถ้ามี external documentation
5. เพิ่ม `related_workflows` (optional) ถ้ามี dependencies

### 5. Write Execute And Rules

เขียน Execute และ Rules ตามมาตรฐาน

1. ทำ `/follow-principles` เพื่อเขียนเป็นหลักการทั่วไป
2. ทำ `/follow-consistency` เพื่อรักษาความสม่ำเสมอ
3. เขียน Execute แต่ละขั้นตอนด้วย numbered list ชัดเจน
4. เขียน Rules แต่ละหมวดหมู่ด้วย bullet points
5. ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`

### 6. Validate And Finalize

ตรวจสอบและ finalize workflow

1. ทำ `/improve-windsurf-workflows` สำหรับปรับปรุงคุณภาพ global workflows
2. ทำ `/improve-correctness` สำหรับตรวจสอบความถูกต้อง
3. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัด
4. ตรวจสอบว่า references มีอยู่จริง

## Example Template

ตัวอย่าง workflow structure ที่ใช้เป็น reference:

```markdown
---
title: Workflow Name
description: กระชับไม่เกิน 100 ตัวอักษร
auto_execution_mode: 3
---

## Goal

วัตถุประสงค์กระชับ

## Scope

ขอบเขตงานที่ครอบคลุม

## Analyze (optional)

วิเคราะห์ปัญหาหรือสถานการณ์ก่อนดำเนินการ

1. วิเคราะห์สถานการณ์ปัจจุบัน
2. ระบุปัญหาหรือความต้องการ
3. วางแผนการแก้ไขหรือพัฒนา

## Execute

### 1. Step Name

1. ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]

## Rules

### 1. Rule Category

คำอธิบาย rule:

- bullet point 1

## Expected Outcome

- Outcome ที่คาดหวัง

## Report (optional)

รายงานผลลัพธ์

1. ทำ `/report` เพื่อจัดรูปแบบ output ตามประเภทที่เหมาะสม
```

## Expected Outcome

- Workflow file มีโครงสร้างสม่ำเสมอ อ่านง่าย
- Frontmatter ถูกต้องตามมาตรฐาน
- Execute และ Rules เขียนตาม format ที่กำหนด
- ไม่เกิน 250 บรรทัด
- Workflows ที่อ้างอิงมีอยู่จริง
- ให้ผลลัพธ์เหมือนกันทุกครั้ง
