---
title: Write Dot Devin
description: อัพเดท .windsurf ให้มี review, rules, hooks, scripts, workflows, skills ครบถ้วน
auto_execution_mode: 3
related_workflows:
  - /write-devin-project-rules
  - /write-devin-project-hooks
---

## Goal

อัพเดท .windsurf ให้มี review, rules, hooks, scripts, workflows, skills ครบถ้วน

## Scope

ใช้สำหรับอัพเดท .windsurf structure ใน project workspace

## File Structure

```
.windsurf/
├── review/          # Code review guidelines
├── rules/           # Project-specific rules
│   ├── libs/        # Rules สำหรับ libraries และ tools
│   ├── patterns/    # Rules สำหรับ code patterns
│   └── project/     # Rules เฉพาะ project
├── hooks/           # Cascade hooks
│   ├── logging/     # Logging hooks
│   ├── security/    # Security hooks
│   ├── validation/  # Validation hooks
│   └── quality/     # Quality assurance hooks
├── scripts/         # Utility scripts
├── workflows/       # Custom workflows
└── skills/          # Custom skills
```

## Execute

### 1. Check Structure

1. ตรวจสอบว่ามี review
2. ตรวจสอบว่ามี rules
3. ตรวจสอบว่ามี hooks
4. ตรวจสอบว่ามี scripts
5. ตรวจสอบว่ามี workflows
6. ตรวจสอบว่ามี skills

### 2. Update Structure

1. เพิ่ม review ถ้ายังไม่มี
2. เพิ่ม rules ถ้ายังไม่มี
3. เพิ่ม hooks ถ้ายังไม่มี
4. เพิ่ม scripts ถ้ายังไม่มี
5. เพิ่ม workflows ถ้ายังไม่มี
6. เพิ่ม skills ถ้ายังไม่มี

### 3. Setup Rules

1. ทำ `/write-devin-project-rules` สำหรับสร้าง rules
2. ตรวจสอบว่า rules/ มี libs/, patterns/, project/ subdirectories
3. ตรวจสอบว่า rules มี frontmatter ที่ถูกต้อง

### 4. Setup Hooks

1. ทำ `/write-devin-project-hooks` สำหรับสร้าง hooks
2. ตรวจสอบว่า hooks/ มี logging/, security/, validation/, quality/ subdirectories
3. ตรวจสอบว่า hooks มี frontmatter ที่ถูกต้อง

### 5. Setup Configuration

1. ทำ `/config` สำหรับ project

## Rules

- ต้องมี review, rules, hooks, scripts, workflows, skills ครบถ้วน
- rules/ ต้องมี libs/, patterns/, project/ subdirectories
- hooks/ ต้องมี logging/, security/, validation/, quality/ subdirectories
- เนื้อหาทั้งหมดใน .windsurf/ ต้องเป็นภาษาอังกฤษ
- ต้องทำ `/write-devin-project-rules` หลังจากสร้าง rules/
- ต้องทำ `/write-devin-project-hooks` หลังจากสร้าง hooks/
- ต้องทำ `/config` หลังจากสร้างโครงสร้าง

## Expected Outcome

- .windsurf มี review, rules, hooks, scripts, workflows, skills ครบถ้วน
- โครงสร้างถูกต้อง
- Rules สร้างเรียบร้อยด้วย `/write-devin-project-rules`
- Hooks สร้างเรียบร้อยด้วย `/write-devin-project-hooks`
- Configuration ตั้งค่าเรียบร้อย
