---
title: Write Windsurf Global Workflows
description: เขียน workflow file ให้เป็นมาตรฐานเดียวกัน
auto_execution_mode: 3
related_workflows:
  - /use-workflows
  - /improve-correctness
  - /follow-content-quality
  - /follow-best-practice
  - /read-related-workflows
  - /use-in-another
  - /learn-from-web
  - /edit-relative
---

## Goal

สร้าง workflow file ที่มีโครงสร้างสม่ำเสมอ อ่านง่าย

## Scope

เขียน workflow file ทั้งใน `global_workflows` และ workspace โดยทำตาม `/follow-content-quality`

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
- เขียนเป็นหลักการ how-to ไม่ใช่ step-by-step เฉพาะกรณี

### 3. References And Non-Redundancy

ทำตาม `/use-workflows` สำหรับการใช้ references

- ใช้ references แทนการ duplicate เนื้อหา
- ทำ `/check-reference` เพื่อตรวจสอบ references มีอยู่จริง
- ถ้าอ้างถึง workflows หรือ skills อย่าเขียนซ้ำกับไฟล์ที่อ้างไป
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules

### 4. Execution Guidelines

- เรียงลำดับ: Foundation ก่อน, High impact ก่อน, Dependencies ก่อน, Critical path ก่อน, Hard to change ก่อน, High risk เพื่อ fail fast
- ให้ผลลัพธ์เหมือนกันทุกครั้ง ระบุลำดับการทำงานชัดเจน
- เขียน conditional execution สำหรับ steps ที่ไม่จำเป็นต้องทำทุก project ใช้ "ถ้ามี..." หรือ "ถ้า project มี..." ตรวจสอบ project characteristics ก่อน execute (เช่น มี CLI tools หรือไม่, มี SDK หรือไม่)

### 5. Script Automation

- ใช้ `/use-scripts` เมื่อ file operations มากกว่า 10 ไฟล์, data processing ซับซ้อน, หรือ batch transformations ต้อง consistency
- ใช้ `/use-scripts` เมื่อ pattern matching ต้อง parser หรือ metrics calculation ต้อง aggregation

### 6. Workflow Selection

- ใช้ workflows ที่ขึ้นต้นด้วย "use-" สำหรับ tools/libraries ที่เฉพาะเจาะจง
- ใช้ `/scan-codebase` สำหรับ scan codebase อย่างรวดเร็ว
- ใช้ `/analyze-project` ใน Execute สำหรับ workflows ที่มี step วิเคราะห์
- พยายามใช้ `/use-scripts` ในการ `/deep-analyze` ก่อนเสมอ ถ้าเป็นไปได้ สำหรับ workflows ที่มี step วิเคราะห์โปรเจกต์

### 7. Report Formatting

- ถ้า workflow มี output ต้องระบุ `/report-format-*` ที่ใช้ใน Execute หรือ Rules
- ทำ `/report` เพื่อจัดรูปแบบ output ตามประเภทที่เหมาะสม

### 8. Best Practices Alignment

ทำตาม `/follow-best-practice` สำหรับการเขียนตาม best practices จาก context นั้นๆ

- ตรวจสอบว่า workflow structure สอดคล้องกับ best practices ของ markdown และ documentation
- ใช้ patterns ที่เหมาะสมสำหรับ workflow structure และ conventions
- อ้างอิง official documentation เมื่อเขียนเกี่ยวกับ tools หรือ libraries เฉพาะเจาะจง

## Execute

### 1. Read Global Workflows

อ่าน global workflows เพื่อเข้าใจมาตรฐานและป้องกันการซ้ำซ้อน

1. ทำ `/at-windsurf-global-rules` เพื่อดู global rules และ conventions
2. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องแบบ recursive
3. อ่าน workflows ที่คล้ายกันหรือเกี่ยวข้องเพื่อป้องกันการซ้ำซ้อน
4. ดูตัวอย่าง template ที่ส่วน Example Template ด้านล่างเพื่อเข้าใจ structure
5. ถ้ามี workflow หรือ skill ที่ครอบคลุม topic เดียวกัน ให้ใช้ reference แทนการเขียนซ้ำ

### 2. Check References

1. ทำ `/check-reference` เพื่อตรวจสอบ references ที่จะใช้มีอยู่จริง
2. ตรวจสอบ workflows หรือ skills ที่จะอ้างถึงว่ามีอยู่จริง

### 3. Research And Learn

เรียนรู้ best practices และ official docs ก่อนเขียน workflow

1. ทำ `/follow-best-practice` สำหรับ topic ที่เกี่ยวข้อง
2. ทำ `/learn-from-web` เพื่อเรียนรู้จาก official documentation และเว็บไซต์หลัก
3. ทำ `/deep-research` เมื่อต้องการข้อมูลลึกจาก multiple sources
4. ค้นหา examples และ best practices จาก sources ที่เชื่อถือได้

### 4. Write Frontmatter

เขียน frontmatter ตามมาตรฐาน

1. เขียน `title` เป็น Title Case ตรงกับ filename
2. เขียน `description` กระชับไม่เกิน 100 ตัวอักษร
3. ตั้ง `auto_execution_mode: 3` เสมอ
4. เพิ่ม `url` (optional) ถ้ามี external documentation
5. เพิ่ม `related_workflows` (optional) ถ้ามี dependencies

### 5. Write Execute And Rules

1. ทำ `/follow-principles` เพื่อเขียนเป็นหลักการทั่วไป
2. ทำ `/follow-consistency` เพื่อรักษาความสม่ำเสมอ
3. เขียน Execute ด้วย numbered list และ Rules ด้วย bullet points
4. ทำ `/use-scripts` สำหรับ data processing ซับซ้อน หรือ metrics calculation
5. ทำ `/follow-content-quality` เพื่อปรับปรุงคุณภาพเนื้อหาครบวงจร
6. ทำ `/improve-correctness` เพื่อตรวจสอบความถูกต้อง
7. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัดและ references มีอยู่จริง

### 6. Suggest Related Workflows

1. ทำ `/suggest-next-action` เพื่อแนะนำ global workflows ที่ควรใช้ต่อ
2. วิเคราะห์จาก workflow ที่เพิ่งเขียนว่ามี workflows อื่นที่เกี่ยวข้องหรือควรใช้ร่วมกัน
3. ตรวจสอบว่า workflows ที่แนะนำมีอยู่จริงใน `global_workflows`
4. แนะนำเป็นลิสต์พร้อมเหตุผลว่าทำไมควรใช้

### 7. Check Cross-References

ตรวจสอบว่า workflow ที่เขียนควรถูกอ้างอิงในไฟล์ใดบ้าง

1. ทำ `/use-in-another` เพื่อวิเคราะห์ว่า workflow ควรถูกอ้างอิงในไฟล์ใดบ้างของ project
2. เพิ่ม references ในไฟล์ที่ขาด เช่น `AGENTS.md`, `README.md`, workflow files อื่น
3. ตรวจสอบว่าไม่เพิ่ม reference ในไฟล์ที่ไม่เกี่ยวข้อง

### 8. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้องหลังจากแก้ไข workflow

1. ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมดที่เกี่ยวข้องกับ workflow ที่แก้ไข
2. ตรวจสอบว่าไม่มี references เก่าเหลืออยู่
3. ตรวจสอบว่า references ใหม่ถูกต้อง

## Example Template

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

## Execute

### 1. Step Name

1. ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]

## Rules

### 1. Rule Category

- bullet point 1

## Expected Outcome

- Outcome ที่คาดหวัง
```

## Expected Outcome

- Workflow file มีโครงสร้างสม่ำเสมอ อ่านง่าย
- Frontmatter ถูกต้องตามมาตรฐาน
- Execute และ Rules เขียนตาม format ที่กำหนด
- ไม่เกิน 250 บรรทัด
- Workflows ที่อ้างอิงมีอยู่จริง
- ให้ผลลัพธ์เหมือนกันทุกครั้ง
- แนะนำ global workflows ที่ควรใช้ต่อ
