---

title: Write Windsurf Skills

description: เขียน skill file ให้เป็นมาตรฐานเดียวกัน

auto_execution_mode: 3

---

## Goal

สร้าง skill file ที่มีโครงสร้างสม่ำเสมอ อ่านง่าย

## Scope

เขียน skill file ใน skills workspace โดยทุก skill ต้องเขียนให้ `/follow-content-quality`

## Rules

### 1. Structure And Consistency

- `title`: Title Case ชัดเจน (ตรงกับ skill name)
- `description`: กระชับไม่เกิน 100 ตัวอักษร
- `auto_execution_mode`: 3 เท่านั้น
- ## Goal, ## Scope, ## Execute, ## Rules, ## Expected Outcome (required)
- ## Report (optional)
- Goal สอดคล้องกับ skill name, Execute สอดคล้องกับ Goal และ Rules
- Expected Outcome สอดคล้องกับ Goal
- ใช้คำศัพท์สม่ำเสมอ

### 2. Directory Structure

- `SKILL.md`: ต้องมีเสมอ
- `guide/`: optional - guides และ how-to
- `key-concepts/`: optional - key concepts และ terminology
- `principles/`: optional - principles และ best practices
- `references/`: optional - API docs, CLI, configuration
- `workflows/`: optional - skill-specific workflows
- `templates/`: optional - templates สำหรับ skill
- `scripts/`: optional - automation scripts

### 3. Content And Style

- หัวข้อภาษาอังกฤษ Title Case, รายการภาษาไทย
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไฟล์ไม่เกิน 250 บรรทัด
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
- เขียนเป็นหลักการ how-to
- ใน Rules สามารถใช้ table, code block ได้
- terminal commands, architecture ใส่ใน code block
- examples ต้องสั้นกระชับ

### 4. References And Non-Redundancy

- ลบข้อความที่ซ้ำซ้อนระหว่าง Execute และ Rules
- ใช้ references แทนการ duplicate เนื้อหา
- ทำ `/check-reference` เพื่อตรวจสอบ references มีอยู่จริง
- เมื่อแก้ไข skill ให้ตรวจสอบ dependent skills
- อ่าน skills ที่เกี่ยวข้องก่อนเขียน
- ถ้าอ้างถึง workflows หรือ skills อย่าพยายามเขียนซ้ำกับไฟล์ที่อ้างไป เขียนแค่ว่าให้ทำตามที่อ้างไป
- เมื่อใช้ reference ให้เขียนเป็นลิงค์เท่านั้น เช่น `ทำตาม /workflow-name` หรือ `ดูจาก /skill-name`

### 5. Execution Guidelines

- Foundation ก่อน, High impact items ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน, Critical path ก่อน
- Hard to change ก่อน, High risk เพื่อ fail fast
- ให้ผลลัพธ์เหมือนกันทุกครั้ง
- ระบุลำดับการทำงานชัดเจน

### 6. Tool Usage Skills

- ใช้ `/use-scripts` สำหรับ skills ที่ต้อง automation
- ใช้ `/use-workflows` สำหรับการใช้ global workflows
- ใช้ `/use-skills` สำหรับการใช้ skills
- ใช้ skills ที่ขึ้นต้นด้วย "use-" สำหรับการใช้ tools/libraries
- ตรวจสอบ references ว่ามีอยู่จริงก่อนอ้างอิง

### 7. Analysis Skills

- ใช้ `/scan-codebase` สำหรับ scan codebase อย่างรวดเร็ว
- ใช้ `/analyze-project` สำหรับ project-level และ code-level analysis

### 8. Report Formatting

- ถ้า skill มี output ต้องระบุ `/report-format-*` ที่ใช้ใน Execute หรือ Rules
- ทำ `/report` เพื่อจัดรูปแบบ output

## Execute

### 1. Research And Learn (Optional)

เรียนรู้จาก official docs

1. ทำ `/follow-best-practice` หรือ `/deep-research` สำหรับ topic ที่เกี่ยวข้อง
2. อ่าน official documentation ของ tools/libraries ที่จะใช้
3. ค้นหา examples และ best practices จาก sources ที่เชื่อถือได้

### 2. Read Global Workflows

เข้าใจมาตรฐานและป้องกันการซ้ำซ้อน

1. ทำ `/at-windsurf-global-rules` เพื่อดู global rules และ conventions
2. อ่าน skills ที่คล้ายกันหรือเกี่ยวข้องเพื่อป้องกันการซ้ำซ้อน
3. ดูตัวอย่างที่ `/example-workflow` สำหรับ reference structure
4. ถ้ามี skill ที่ครอบคลุม topic เดียวกัน ให้ใช้ reference แทนการเขียนซ้ำ

### 3. Write SKILL.md

เขียน SKILL.md ตามมาตรฐาน

1. ทำตาม `/write-windsurf-global-workflows` สำหรับโครงสร้าง
2. เขียน `title` เป็น Title Case ตรงกับ skill name
3. เขียน `description` กระชับไม่เกิน 100 ตัวอักษร
4. ตั้ง `auto_execution_mode: 3` เสมอ
5. เพิ่ม `url` (optional) ถ้ามี external documentation

### 4. Create Directory Structure

สร้าง folder ตามที่จำเป็น

1. สร้าง `guide/` ถ้าจำเป็น
2. สร้าง `key-concepts/` ถ้าจำเป็น
3. สร้าง `principles/` ถ้าจำเป็น
4. สร้าง `references/` ถ้าจำเป็น
5. สร้าง `workflows/` ถ้าจำเป็น
6. สร้าง `templates/` ถ้าจำเป็น
7. สร้าง `scripts/` ถ้าจำเป็น

### 5. Write Content Files

เขียนไฟล์ในแต่ละ folder

1. ทำ `/write-content-coverage` สำหรับแต่ละ folder
2. ตรวจสอบว่าแต่ละไฟล์ไม่เกิน 250 บรรทัด
3. ตรวจสอบว่าแต่ละ heading มี description
4. ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`

### 6. Validate And Finalize

ตรวจสอบและ finalize skill

1. ทำ `/improve-content` สำหรับปรับปรุงคุณภาพ content ครบวงจร
2. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัก
3. ตรวจสอบว่า references มีอยู่จริง

## Expected Outcome

- Skill file มีโครงสร้างสม่ำเสมอ อ่านง่าย
- SKILL.md ถูกต้องตามมาตรฐาน
- Directory structure ถูกต้องตามโครงสร้างใหม่
- Content files เขียนตาม format ที่กำหนด
- ไม่เกิน 250 บรรทัดต่อไฟล์
- Skills ที่อ้างอิงมีอยู่จริง
- ให้ผลลัพธ์เหมือนกันทุกครั้ง 