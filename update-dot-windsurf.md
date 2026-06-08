---
title: Update Dot Windsurf
description: อัพเดท .windsurf ให้มีโครงสร้างครบถ้วน
auto_execution_mode: 3
---

## Goal

อัพเดท .windsurf ให้มี review, rules, scripts, workflows, skills ครบถ้วน

## File Structure

```
.windsurf/
├── review/          # Code review guidelines
├── rules/           # Project-specific rules
│   └── main.md      # Main rules file
├── scripts/         # Utility scripts
├── workflows/       # Custom workflows
└── skills/          # Custom skills
```

## Execute

### 1. Check Structure

1. ตรวจสอบว่ามี review
2. ตรวจสอบว่ามี rules
3. ตรวจสอบว่ามี scripts
4. ตรวจสอบว่ามี workflows
5. ตรวจสอบว่ามี skills

### 2. Update Structure

1. เพิ่ม review ถ้ายังไม่มี
2. เพิ่ม rules ถ้ายังไม่มี
3. เพิ่ม scripts ถ้ายังไม่มี
4. เพิ่ม workflows ถ้ายังไม่มี
5. เพิ่ม skills ถ้ายังไม่มี

### 3. Setup Configuration

1. ทำ `/setup-config` สำหรับ project

## Rules

### 1. Structure

- ต้องมี review, rules, scripts, workflows, skills
- ตรวจสอบว่าทั้งหมดมีครบถ้วน
- อัพเดทโครงสร้างให้ถูกต้อง
- ทุกอย่างใน .windsurf/ ต้องเป็นภาษาอังกฤษ

### 2. Rules Content

- rules/main.md ต้องมี Structure Rules
- rules/main.md ต้องมี File Pattern Rules สำหรับแต่ละ stack
- rules/main.md ต้องมี Related Global Workflows
- rules/main.md ต้องมี Related Skills

### 3. Language

- เนื้อหาทั้งหมดใน .windsurf/ ต้องเป็นภาษาอังกฤษ
- Workflow ตัวเองเป็นภาษาไทยได้
- แต่เนื้อหาที่สร้างในไฟล์ต่างๆ ใน .windsurf/ ต้องเป็นภาษาอังกฤษ

### 4. Configuration

- ต้องทำ `/setup-config` หลังจากสร้างโครงสร้าง

## Expected Outcome

- .windsurf มี review, rules, scripts, workflows, skills ครบถ้วน
- โครงสร้างถูกต้อง
- Configuration ตั้งค่าเรียบร้อย