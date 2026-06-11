---

title: Write Windsurf Global Workflows

description: เขียน workflow file ให้เป็นมาตรฐานเดียวกัน

auto_execution_mode: 3

---

## Goal

สร้าง workflow file ที่มีโครงสร้างสม่ำเสมอ อ่านง่าย

## Scope

เขียน workflow file ทั้งใน global_workflows และ workspace โดยทุก workspace ต้องเขียนให้ `/follow-content-quality`

## Execute

### 1. Research And Learn (Optional)

เรียนรู้จาก official docs สำหรับ workflow ที่เกี่ยวข้องกับ library/framework

1. ทำ `/follow-best-practice` หรือ `/deep-research`
2. อ่าน official documentation และสรุป best practices

### 2. Read Global Workflows

เข้าใจมาตรฐานและป้องกันการซ้ำซ้อน

1. ทำ `/windsurf-global-workflows`
2. อ่าน workflows ที่คล้ายกัน
3. ดูตัวอย่างที่ `/example-workflow`
4. ใช้ `/update-docs` หากมี file operations

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
2. ใช้ `### N. Step Name` (Title Case) และ numbered list (1., 2., 3.)
3. ใช้ `### N. Rule Category` และ bullet points (-) ใน Rules
4. เขียนเป็นหลักการ how-to ในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
5. ทำตาม `/follow-content-quality` และไม่ซ้ำซ้อนระหว่าง Execute และ Rules

### 5. Validate And Finalize

ตรวจสอบและ finalize workflow

1. ตรวจสอบว่าไม่เกิน 250 บรรทัด
2. ทำ `/improve-flow`
3. ทำ `/check-reference` เพื่อตรวจสอบ references มีอยู่จริง
4. ตรวจสอบ dependent workflows ที่อ้างอิง workflow นี้ ว่าต้องแก้ไขอะไรไหม
5. ใช้ `/update-reference` หากมี file operations

## Rules

### 1. Structure And Consistency

ตั้งค่าโครงสร้างและตรวจสอบความสอดคล้องตามมาตรฐาน

- `title`: Title Case ชัดเจน (ตรงกับ filename ไม่รวม `follow-`)
- `description`: กระชับไม่เกิน 100 ตัวอักษร
- `auto_execution_mode`: 3 เท่านั้น
- `related_workflows`, `url`: (optional)
- ## Goal, ## Scope, ## Execute, ## Rules, ## Expected Outcome (required)
- ## Common Mistakes (optional)
- Goal สอดคล้องกับ Filename, Execute สอดคล้องกับ Goal และ Rules
- Expected Outcome สอดคล้องกับ Goal
- ใช้คำศัพท์สม่ำเสมอ ไม่ขัดแย้งกัน

### 2. Content And Style

เขียนเนื้อหาและรูปแบบตามมาตรฐานการเขียน workflow

- หัวข้อภาษาอังกฤษ Title Case, รายการภาษาไทย (ยกเว้นคำศัพท์เฉพาะ)
- ใช้ bullet points (-) ชิดซ้ายใน Rules, ไม่ใช้ ** ในหัวข้อ
- ไฟล์ไม่เกิน 250 บรรทัด (หากเกินให้ refactor แยกเป็น workflows ย่อย)
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`, `environment variables`, `code snippets`, `function names`, `configuration keys`, `package names`, `git commands`
- เขียนเป็นหลักการ how-to ที่ใช้ได้ทั่วไป (ไม่ใช่ manual step-by-step)
- ใช้ keyword กระชับ มีความหมายชัด, เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
- ใน Rules สามารถใช้ table, code block, diagram ได้
- terminal commands, architecture, config examples ใส่ใน code block
- examples ต้องสั้นกระชับ เข้าใจง่าย และสอดคล้องกับ Execute steps

### 3. References And Non-Redundancy

อ้างอิง workflows และหลีกเลี่ยงความซ้ำซ้อนระหว่างไฟล์

- ลบข้อความที่ซ้ำซ้อนระหว่าง Execute และ Rules, รวบรวมรายละเอียดที่เหมือนกันไว้ที่เดียว
- ใช้ references แทนการ duplicate เนื้อหา, เป็น single source of truth
- ทำ `/check-reference` เพื่อตรวจสอบ references มีอยู่จริง
- เมื่อแก้ไข workflow ให้ตรวจสอบ dependent workflows ที่อ้างอิง workflow นี้
- อ่าน workflows ที่เกี่ยวข้องก่อนเขียนเพื่อไม่ให้ซ้ำ

### 4. Execution Guidelines

จัดลำดับ Execute steps และให้ผลลัพธ์เหมือนกันทุกครั้ง

- Foundation ก่อน (`setup`, `config`, `dependencies`), High impact items ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน, Critical path ก่อน
- Hard to change ก่อน, High risk เพื่อ fail fast
- ให้ผลลัพธ์เหมือนกันทุกครั้ง, ไม่ใช้คำสั่ง subjective หรือ ambiguous
- ระบุลำดับการทำงานชัดเจน, ไม่ข้ามขั้นตอน

### 5. Script Automation

พิจารณาใช้ automation สำหรับงานที่ซับซ้อนและซ้ำซ้อน

- File operations มากกว่า 10 ไฟล์, Data processing ที่ซับซ้อน
- Pattern matching ที่ต้อง parser, Metrics calculation ที่ต้อง aggregation
- Batch transformations ที่ consistent

## Expected Outcome

- Workflow file มีโครงสร้างสม่ำเสมอ อ่านง่าย, Frontmatter ถูกต้องตามมาตรฐาน
- Execute และ Rules เขียนตาม format ที่กำหนด, ไม่เกิน 250 บรรทัด
- ผ่าน `/follow-content-quality`, Workflows ที่อ้างอิงมีอยู่จริง
- ให้ผลลัพธ์เหมือนกันทุกครั้ง

## Common Mistakes (optional)

ข้อผิดพลาดที่พบบ่อย

- Execute และ Rules ซ้ำซ้อน, ไม่ใช้ backticks สำหรับ technical terms
- ไฟล์เกิน 250 บรรทัดโดยไม่ refactor, เขียนเป็น manual step-by-step แทนหลักการ how-to
- ไม่มีข้อความด้านบนก่อน bullet ใน Rules, ใช้คำสั่ง subjective หรือ ambiguous
- ไม่ตรวจสอบว่า workflows ที่อ้างอิงมีอยู่จริง
- แก้ไข workflow โดยไม่ตรวจสอบ dependent workflows ที่ได้รับผลกระทบ
