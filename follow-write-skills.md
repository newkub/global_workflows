---
title: Follow Skills Creator
description: มาตรฐานการเขียนและจัดโครงสร้าง Windsurf Skills
auto_execution_mode: 3
---

## Goal

สร้างหรือแก้ไข Windsurf Skills ให้เป็นมาตรฐานเดียวกัน

## Execute

### 1. Determine Skill Type

1. ระบุ skill type จาก prefix ชื่อ folder
2. Skills types: `guide-`, `lib-`, `framework-`, `lang-`, `runtime-`, `cli-`, `tui-`, `flow-`, `general-`
3. ใช้ skill type เพื่อกำหนด folder และ file ที่ต้องการ

### 2. Create Folder Structure

1. สร้าง `SKILL.md` ที่ root
2. สร้าง `guide/` - REQUIRED สำหรับทุก skill types
3. สร้าง `key-concepts/` - OPTIONAL สำหรับทุก skill types (เก็บไฟล์เกี่ยวกับ key concepts ต่างๆ)
4. สร้าง `principles/` - OPTIONAL สำหรับทุก skill types (เก็บไฟล์เกี่ยวกับ principles ต่างๆ)
5. สร้าง `references/` - REQUIRED สำหรับทุก skill types
6. สร้าง `workflows/` - OPTIONAL สำหรับทุก skill types
7. สร้างไฟล์ตามตาราง requirements

### 3. Write SKILL.md Index

1. เพิ่ม frontmatter คือ `name` และ `description` ที่ด้านบนสุดของไฟล์
2. เขียนคำอธิบายสั้นๆ เกี่ยวกับวัตถุประสงค์
3. สรุปเนื้อหาในตาราง 3 คอลัมน์
4. จัดกลุ่มไฟล์ตามโฟลเดอร์
5. เรียงลำดับตามการใช้งาน

### 4. Write Content Files

1. สำหรับ `references/cli`: รัน `<cli> --help` หรือใช้ `/learn-from-web` ก่อนเขียน
2. สำหรับ `references/api`: ใช้ `/learn-from-web` หรืออ่าน official docs ก่อนเขียน
3. สำหรับ `references/tui-usage`: เขียนตาม TUI interface ที่มีจริง
4. สำหรับ `references/configuration`: เขียนตาม config options ที่มีจริง
5. สำหรับ `guide/how-it-works`: อธิบายและวาดด้วย ansi markdown
6. ทำตาม `/follow-content-quality` สำหรับทุกไฟล์ `.md`
7. ทำตาม `/follow-write-workflows` สำหรับการเขียนเนื้อหา

## Rules

### 1. SKILL.md Frontmatter Requirement

ทุก `SKILL.md` ต้องมี frontmatter ที่ด้านบนสุดของไฟล์:
```yaml
---
name: skill-name
description: คำอธิบายสั้นๆ เกี่ยวกับ skill
---
```

### 2. Skill Types

Skills แบ่งเป็น types ดังนี้:
- `guide-` - guides และ best practices
- `lib-` - libraries
- `framework-` - frameworks
- `lang-` - programming languages
- `runtime-` - runtime environments
- `cli-` - CLI tools
- `tui-` - TUI applications
- `flow-` - development flows
- `general-` - general purpose

### 3. Folder Structure

```text
skill-name/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
    └── ... 
├── key-concepts/
│   └── ...
├── principles/
│   └── ...
├── references/
│   ├── website.md
│   ├── api.md
│   ├── cli.md
│   ├── tui-usage.md
│   ├── configuration.md
│   └── templates/
│       └── ...
└── workflows/
    ├── add-*.md
    ├── refactor-*.md
    ├── update-*.md
    ├── improve-*.md
    ├── optimize-*.md
    ├── migrate-*.md
    ├── bench-*.md
    ├── analyze-*.md
    ├── follow-*.md
    ├── setup-*.md
    ├── check-*.md
    ├── create-*.md
    ├── delete-*.md
    ├── sync-*.md
    ├── run-*.md
    └── ...
```

### 4. File Requirements by Skill Type

| File/Folder | guide | lib | framework | lang- | runtime- | cli- | tui- | flow- | general- |
|-------------|-------|-----|-----------|-------|----------|-----|------|------|----------|
| 📁 guide/ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 key-concept.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 how-it-works.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 features.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 installation.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 configuration.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 quick-start.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 best-practices.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 integration.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 architecture.md | ⭕ | ✅ | ✅ | ✅ | ✅ | ✅ | ⭕ | ⭕ | ⭕ |
| 📁 key-concepts/ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ |
| 📁 principles/ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ |
| 📁 references/ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 website.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 api.md | ⭕ | ✅ | ✅ | ⭕ | ⭕ | ✅ | ⭕ | ⭕ | ⭕ |
| 📄 cli.md | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ✅ | ⭕ | ⭕ | ⭕ |
| 📄 tui-usage.md | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ✅ | ⭕ | ⭕ |
| 📄 configuration.md | ⭕ | ✅ | ✅ | ⭕ | ⭕ | ✅ | ⭕ | ⭕ | ⭕ |
| 📁 templates/ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ |
| 📁 workflows/ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ |

✅ = REQUIRED, ⭕ = OPTIONAL

### 5. Content Standards

- `guide/` - เขียนเป็นภาษาไทย ใช้ตารางสรุป มี how-it-works พร้อม ansi markdown diagrams
- `key-concepts/` - เขียนเป็นภาษาไทย อธิบาย concepts สำคัญแต่ละอย่างในไฟล์แยกกัน (เช่น ownership, borrowing, lifecycle สำหรับ Rust)
- `principles/` - เขียนเป็นภาษาไทย อธิบาย principles ที่ควรปฏิบัติตาม (เช่น SOLID, DRY, KISS สำหรับ programming)
- `references/` - เขียนเป็นภาษาอังกฤษ สรุป API/commands ในตาราง
- `references/templates/` - code snippets พร้อม comments
- `workflows/` - Markdown workflow files

### 6. Key Concepts & Principles Guidelines

- **key-concepts/**: เขียนเนื้อหาเกี่ยวกับ key concepts ต่างๆ ตามความเหมาะสมกับ skill
  - แต่ละ concept ควรอยู่ในไฟล์แยกกัน
  - ใช้ชื่อไฟล์ที่สื่อความหมายชัดเจน (เช่น `ownership.md`, `borrowing.md`)
  - อธิบายแนวคิด ตัวอย่าง และ use case

- **principles/**: เขียนเนื้อหาเกี่ยวกับ principles ต่างๆ ตามความเหมาะสมกับ skill
  - แต่ละ principle ควรอยู่ในไฟล์แยกกัน
  - ใช้ชื่อไฟล์ที่สื่อความหมายชัดเจน (เช่น `solid.md`, `dry.md`)
  - อธิบาย principle ตัวอย่าง และวิธีการปฏิบัติตาม

### 7. File Naming

- ใช้ชื่อสื่อความหมายโดยตรง
- ไม่ใช้ prefix ชื่อ skill
- ใช้ `kebab-case` เสมอ
- ชื่อไฟล์ต้องสอดคล้องกับเนื้อหา

### 8. Verification Before Writing

- สำหรับ `references/cli`: รัน `<cli> --help` หรือใช้ `/learn-from-web` ก่อนเขียน
- สำหรับ `references/api`: ใช้ `/learn-from-web` หรืออ่าน official docs ก่อนเขียน
- ตรวจสอบว่าครอบคลุมทุก features/commands/APIs ก่อนเขียน

### 9. File Length

- แต่ละไฟล์ต้องไม่เกิน 200 บรรทัด
- ถ้าเกิน 200 บรรทัดให้ refactor แยกไฟล์
- ใช้ folder structure สำหรับจัดกลุ่มไฟล์ที่แยกออกมา

### 10. Deterministic Behavior

- ทำตาม Execute ตามลำดับเสมอ
- ตรวจสอบ skill type ก่อนสร้าง folder
- สร้างไฟล์ตามตาราง requirements เท่านั้น
- ตรวจสอบความครบถ้วนก่อนเขียน

## Expected Outcome

- Windsurf Skills ที่มีโครงสร้างสม่ำเสมอ
- Folder structure ที่เป็นระบบ
- SKILL.md index ที่ครบถ้วน
- File naming ที่สอดคล้องกัน
- Content ที่มีคุณภาพ
