---
title: Follow Devin Project Rules
description: ทำตาม rules ใน .devin/rules ให้ครบถ้วน
auto_execution_mode: 3
related_workflows:
  - /write-devin-project-rules
---

## Goal

ทำตาม rules ใน `.devin/rules` ให้ครบถ้วน

## Scope

ใช้สำหรับทำตาม rules ใน `.devin/rules` ใน workspace

## Directory Structure

```
.devin/
└── rules/
    ├── always-on/
    │   ├── naming-convention.md
    │   ├── structure.md
    │   ├── follow-workflows.md
    │   └── follow-skills.md
    └── optional/
```

## Execute

### 1. Check Rules Existence

ตรวจสอบว่ามี rules หรือไม่

1. ตรวจสอบว่ามี `.devin/rules` directory หรือไม่
2. ถ้าไม่มี ให้ทำ `/write-devin-project-rules` เพื่อสร้าง rules

### 2. Read Always-On Rules

อ่านและเข้าใจ always-on rules พื้นฐาน

1. อ่าน `naming-convention.md` สำหรับ naming conventions
2. อ่าน `structure.md` สำหรับโครงสร้าง directory
3. อ่าน `follow-workflows.md` สำหรับการใช้ workflows
4. อ่าน `follow-skills.md` สำหรับการใช้ skills

### 3. Apply Rules

ปฏิบัติตาม always-on rules พื้นฐาน

1. ทำตาม `naming-convention.md`
2. ทำตาม `structure.md`
3. ทำตาม `follow-workflows.md`
4. ทำตาม `follow-skills.md`
5. ทำตาม rules ใน `optional/` ถ้ามี

## Rules

### 1. Always-On Rules

- `naming-convention.md`: naming conventions ที่ต้องใช้
- `structure.md`: โครงสร้าง directory ที่ต้องใช้
- `follow-workflows.md`: การใช้ workflows ที่ต้องทำตาม
- `follow-skills.md`: การใช้ skills ที่ต้องทำตาม

### 2. Optional Rules

- ทำตาม rules ใน `optional/` ถ้ามี
- ถ้า rule ขัดแย้งกันให้ถาม user

## Expected Outcome

- Always-on rules ถูกทำตามครบถ้วน
- Optional rules ถูกทำตามครบถ้วนถ้ามี
- โครงสร้าง directory ถูกต้องตามมาตรฐาน
