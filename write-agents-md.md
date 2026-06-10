---
title: Write Agents Md
description: เขียน AGENTS.md ตาม template สำหรับ windsurf rules และ ast-grep
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-rules
  - /write-ast-grep-rules
  - /run-scan
---

## Goal

เขียน AGENTS.md ตาม template สำหรับ windsurf rules และ ast-grep

## Scope

ใช้สำหรับเขียน AGENTS.md ใน workspace ตาม template ที่กำหนด

## Execute

### 1. Copy Template

คัดลอก template มาเขียน AGENTS.md

1. คัดลอก template จาก workflow นี้
2. สร้างไฟล์ AGENTS.md ใน workspace root
3. วาง template ลงในไฟล์

### 2. Verify Template

ตรวจสอบว่า template ถูกต้อง

1. ตรวจสอบ frontmatter ครบถ้วน
2. ตรวจสอบ Execute มี 3 steps
3. ตรวจสอบ Rules มี 3 sections
4. ตรวจสอบ Expected Outcome ครบถ้วน

## Rules

### 1. Template Structure

โครงสร้าง template:

- Frontmatter: title, description, auto_execution_mode: 3, related_workflows
- Execute: 3 steps (Write Windsurf Rules, Convert Rules To Ast-Grep, Run Ast-Grep Scan)
- Rules: 3 sections (Execution Order, Rule Standards, Workflow References)
- Expected Outcome: 3 outcomes

### 2. Template Content

เนื้อหา template:

```markdown
---
title: Agents
description: กฎการทำงานสำหรับ windsurf rules และ ast-grep
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-rules
  - /write-ast-grep-rules
  - /run-scan
---

## Goal

กำหนดกฎการทำงานสำหรับ windsurf rules และ ast-grep

## Scope

ใช้สำหรับกำหนดกฎการทำงานใน workspace ที่เกี่ยวกับ windsurf rules

## Execute

### 1. Write Windsurf Rules

เขียน windsurf rules สำหรับ project

1. ทำ `/write-windsurf-rules` เพื่อเขียน windsurf rules
2. เขียน rules ใน away/, libraries/, domain/, patterns/, project/

### 2. Convert Rules To Ast-Grep

แปลง windsurf rules เป็น ast-grep format

1. ทำ `/write-ast-grep-rules` เพื่อแปลง `.windsurf/rules`
2. แปลง rules เป็น ast-grep YAML format พร้อม test cases

### 3. Run Ast-Grep Scan

รัน ast-grep scan เพื่อตรวจสอบ codebase

1. ทำ `/run-scan` เพื่อรัน ast-grep scan
2. แก้ไข code ตาม suggestions จนไม่มี issues

## Rules

### 1. Execution Order

ลำดับการทำงาน:

- ทำ `/write-windsurf-rules` ก่อน `/write-ast-grep-rules`
- ทำ `/write-ast-grep-rules` ก่อน `/run-scan`
- รัน `/run-scan` ซ้ำจนไม่มี issues

### 2. Rule Standards

มาตรฐาน rules:

- Rules ต้องอยู่ใน away/, libraries/, domain/, patterns/, project/
- Rules ต้องมี frontmatter ที่ถูกต้อง
- ต้องมี test cases สำหรับแต่ละ ast-grep rule
- ต้องใช้ meta variables ($VAR) สำหรับ capture AST nodes

### 3. Workflow References

การอ้างอิง workflows:

- ใช้รูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
- ต้องอ้างอิง workflows ที่มีอยู่จริงใน global_workflows

## Expected Outcome

- Windsurf rules เขียนครบถ้วนสำหรับ project
- Windsurf rules แปลงเป็น ast-grep format
- Codebase ผ่าน ast-grep scan โดยไม่มี errors
```

### 3. File Location

ตำแหน่งไฟล์:

- AGENTS.md ต้องอยู่ใน workspace root
- ไม่อยู่ใน subdirectory

## Expected Outcome

- AGENTS.md สร้างด้วย template ที่ถูกต้อง
- Template ครบถ้วนตามมาตรฐาน
- AGENTS.md พร้อมใช้งาน

