---
title: Convert Workflow To Skill
description: แปลง workflow file เป็น skill file ตามรูปแบบมาตรฐาน
auto_execution_mode: 3
related_workflows:
  - /follow-write-workflows
  - /follow-write-skills
---

## Goal

แปลง workflow file เป็น skill file โดยรักษาเนื้อหาและปรับโครงสร้างตาม skill format

## Scope

- แปลง frontmatter จาก workflow เป็น skill format
- ปรับโครงสร้าง sections ตาม skill conventions
- รักษาเนื้อหาหลักและ rules
- ปรับ naming และ references ให้เหมาะสมกับ skills

## Execute

### 1. Analyze Workflow Structure

1. อ่าน workflow file ที่ต้องการแปลง
2. ระบุ sections ที่มี: Goal, Scope, Execute, Rules, Expected Outcome
3. ระบุ frontmatter fields: title, description, related_workflows
4. ระบุ MCP tools หรือ dependencies ที่ใช้
5. ระบุ supporting files หรือ examples ที่มี

### 2. Convert Frontmatter

1. เปลี่ยน `title` เป็น skill name (kebab-case)
2. เปลี่ยน `description` เป็น skill description
3. ลบ `auto_execution_mode` (skills ไม่ใช้)
4. แปลง `related_workflows` เป็น `related_skills`
5. เพิ่ม `category` หากจำเป็น (เช่น github, development, testing)
6. เพิ่ม `supporting_files` หากมี examples หรือ templates

### 3. Restructure Sections

1. เปลี่ยน `## Goal` เป็น skill description ใน frontmatter
2. เปลี่ยน `## Scope` เป็น `## When To Use`
3. เปลี่ยน `## Execute` เป็น `## Implementation`
4. เปลี่ยน `## Rules` เป็น `## Best Practices`
5. เปลี่ยน `## Expected Outcome` เป็น `## Benefits`
6. รักษา `## Common Mistakes` และ `## Anti-Patterns`

### 4. Adjust Content Style

1. เปลี่ยนคำสั่ง workflow references (`/workflow-name`) เป็น skill references
2. เปลี่ยน "ทำ" เป็น "ใช้" หรือ "นำไปใช้"
3. เปลี่ยน step-by-step เป็น how-to guidelines
4. เพิ่ม code examples หากจำเป็น
5. เพิ่ม MCP tool references หากใช้

### 5. Create Supporting Files

1. สร้าง templates หาก workflow มี templates
2. สร้าง examples หาก workflow มี examples
3. สร้าง config files หาก workflow มี config
4. อัปเดท references ใน skill file

### 6. Validate Skill File

1. ตรวจสอบว่า frontmatter ถูกต้อง
2. ตรวจสอบว่า sections ครบถ้วน
3. ตรวจสอบว่า references ถูกต้อง
4. ตรวจสอบว่า supporting files มีอยู่
5. ทดสอบว่า skill ใช้งานได้

## Rules

### 1. Frontmatter Conversion

Workflow frontmatter ต้องแปลงเป็น:

```yaml
---
name: skill-name
description: คำอธิบาย skill
category: category-name
related_skills:
  - skill-name-1
  - skill-name-2
supporting_files:
  - file-1.md
  - file-2.md
---
```

### 2. Section Mapping

แมป sections จาก workflow เป็น skill:

| Workflow Section | Skill Section |
|------------------|---------------|
| Goal | description ใน frontmatter |
| Scope | When To Use |
| Execute | Implementation |
| Rules | Best Practices |
| Expected Outcome | Benefits |
| Common Mistakes | Common Mistakes (เหมือนกัน) |
| Anti-Patterns | Anti-Patterns (เหมือนกัน) |

### 3. Content Adaptation

ปรับเนื้อหาจาก workflow เป็น skill:

- เปลี่ยน "สร้าง" เป็น "ใช้"
- เปลี่ยน "ทำ" เป็น "นำไปใช้"
- เปลี่ยน step-by-step เป็น guidelines
- เพิ่ม examples และ code snippets
- เพิ่ม MCP tool references

### 4. Naming Convention

ใช้ naming convention สำหรับ skills:

- ใช้ kebab-case สำหรับ skill name
- ใช้ภาษาอังกฤษสำหรับ skill name
- ใช้ภาษาไทยสำหรับ description
- ตัวอย่าง: `github-issue-management`

### 5. Supporting Files

สร้าง supporting files สำหรับ skill:

- templates/: เก็บ templates ต่างๆ
- examples/: เก็บ examples ต่างๆ
- config/: เก็บ config files ต่างๆ
- อัปเดท references ใน skill file

## Expected Outcome

- Workflow ถูกแปลงเป็น skill สำเร็จ
- Frontmatter ถูกแปลงอย่างถูกต้อง
- Sections ถูก restructure ตาม skill format
- Content ถูกปรับให้เหมาะสมกับ skills
- Supporting files ถูกสร้างครบถ้วน
- Skill ใช้งานได้ทันที

## Common Mistakes

- ไม่แปลง frontmatter อย่างถูกต้อง
- ไม่ปรับ sections ตาม skill format
- ไม่สร้าง supporting files
- ไม่อัปเดท references
- ใช้ naming convention ที่ไม่ถูกต้อง

## Anti-Patterns

- คัดลอก workflow โดยไม่ปรับ
- ไม่ปรับ content style ให้เหมาะสม
- สร้าง skill ที่ไม่มี use case ชัดเจน
- ไม่มี supporting files ที่จำเป็น
