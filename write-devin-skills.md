---
title: Follow Skills Creator
description: มาตรฐานการเขียนและจัดโครงสร้าง Devin Skills
auto_execution_mode: 3
---

## Goal

สร้างหรือแก้ไข Devin Skills ให้เป็นมาตรฐานเดียวกัน

## Execute

### 1. Determine Skill Type

1. ระบุ skill type จาก prefix ชื่อ folder
2. Skills types: `guide-`, `lib-`, `framework-`, `lang-`, `runtime-`, `cli-`, `tui-`, `flow-`, `general-`
3. ใช้ skill type เพื่อกำหนด folder และ file ที่ต้องการ

### 2. Research Before Writing

1. ทำ `/deep-research` สำหรับค้นหาข้อมูลเกี่ยวกับ skill ที่จะเขียน
2. ใช้ CRW สำหรับ web research และ documentation
3. ค้นหาใน package registries ตามภาษาที่เกี่ยวข้อง
4. ใช้ DeepWiki สำหรับ GitHub repositories
5. ใช้ Context7 สำหรับ library documentation
6. ตรวจสอบ source reputation และ information freshness
7. สรุป findings ที่สำคัญก่อนเขียน

### 3. Create Folder Structure

1. สร้าง `SKILL.md` ที่ root
2. สร้าง `knowledge/` - REQUIRED สำหรับทุก skill types
3. สร้าง `knowledge/guide/` - REQUIRED สำหรับทุก skill types
4. สร้าง `knowledge/key-concepts/` - OPTIONAL สำหรับทุก skill types (เก็บไฟล์เกี่ยวกับ key concepts ต่างๆ)
5. สร้าง `knowledge/principles/` - OPTIONAL สำหรับทุก skill types (เก็บไฟล์เกี่ยวกับ principles ต่างๆ)
6. สร้าง `references/` - REQUIRED สำหรับทุก skill types
7. สร้าง `workflows/` - OPTIONAL สำหรับทุก skill types
8. สร้างไฟล์ตามตาราง requirements

### 4. Write SKILL.md Index

1. เพิ่ม frontmatter คือ `name` และ `description` ที่ด้านบนสุดของไฟล์
2. เขียนคำอธิบายสั้นๆ เกี่ยวกับวัตถุประสงค์
3. สรุปเนื้อหาในตาราง 3 คอลัมน์
4. จัดกลุ่มไฟล์ตามโฟลเดอร์
5. เรียงลำดับตามการใช้งาน

### 5. Write Content Files

1. ทำตาม `/content-quality` สำหรับทุกไฟล์ `.md`
2. ทำตาม `/write-devin-global-workflows` สำหรับการเขียนเนื้อหา
3. เวลาเขียนเกี่ยวกับการติดตั้ง ให้ใช้ `bun add` หรือ `bun add -D` แทน `npm install` เสมอ

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
├── knowledge/
│   ├── guide/
│   │   ├── key-concept.md
│   │   ├── how-it-works.md
│   │   ├── features.md
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   ├── quick-start.md
│   │   ├── best-practices.md
│   │   ├── integration.md
│   │   └── architecture.md
│   │       └── ...
│   ├── key-concepts/
│   │   └── ...
│   └── principles/
│       └── ...
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
| 📁 knowledge/ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📁 knowledge/guide/ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 key-concept.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 how-it-works.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 features.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 installation.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 configuration.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 quick-start.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 best-practices.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 integration.md | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📄 architecture.md | ⭕ | ✅ | ✅ | ✅ | ✅ | ✅ | ⭕ | ⭕ | ⭕ |
| 📁 knowledge/key-concepts/ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ |
| 📁 knowledge/principles/ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ | ⭕ |
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

- `knowledge/guide/` - เขียนเป็นภาษาไทย ใช้ตารางสรุป มี how-it-works พร้อม ansi markdown diagrams
- `knowledge/key-concepts/` - เขียนเป็นภาษาไทย แต่ละ concept อยู่ในไฟล์แยกกัน ใช้ชื่อไฟล์ที่สื่อความหมายชัดเจน
- `knowledge/principles/` - เขียนเป็นภาษาไทย แต่ละ principle อยู่ในไฟล์แยกกัน ใช้ชื่อไฟล์ที่สื่อความหมายชัดเจน
- `references/` - เขียนเป็นภาษาอังกฤษ สรุป API/commands ในตาราง
- `references/templates/` - code snippets พร้อม comments
- `workflows/` - Markdown workflow files

### 6. File Naming

- ใช้ชื่อสื่อความหมายโดยตรง ไม่ใช้ prefix ชื่อ skill
- ใช้ `kebab-case` เสมอ ชื่อไฟล์ต้องสอดคล้องกับเนื้อหา

### 7. Verification

- สำหรับ `references/cli`: รัน `<cli> --help` หรือใช้ `/learn-from-web` ก่อนเขียน
- สำหรับ `references/api`: ใช้ `/learn-from-web` หรืออ่าน official docs ก่อนเขียน
- สำหรับ `references/tui-usage`: เขียนตาม TUI interface ที่มีจริง
- สำหรับ `references/configuration`: เขียนตาม config options ที่มีจริง
- Check reference interface ก่อนเขียนเสมอ สำหรับทุกไฟล์ references

### 8. File Length

- แต่ละไฟล์ต้องไม่เกิน 200 บรรทัด ถ้าเกินให้ refactor แยกไฟล์
- ใช้ folder structure สำหรับจัดกลุ่มไฟล์ที่แยกออกมา

### 9. Deterministic Behavior

- ทำตาม Execute ตามลำดับเสมอ ตรวจสอบ skill type ก่อนสร้าง folder
- สร้างไฟล์ตามตาราง requirements เท่านั้น ตรวจสอบความครบถ้วนก่อนเขียน

### 10. Heading And Format Guidelines

- แต่ละ heading ต้องมี description สั้นๆ อธิบายว่า section นั้นเกี่ยวกับอะไร
- ใช้ `table` สำหรับสรุปข้อมูลที่เปรียบเทียบได้
- ใช้ `codeblock` สำหรับ code examples, configuration, หรือ commands
- ใช้ `ansi markdown diagrams` สำหรับ flow, architecture, หรือ how-it-works
- ใช้ `bullet points` สำหรับรายการที่ไม่ต้องการลำดับ
- ใช้ `numbered list` สำหรับ steps หรือลำดับที่สำคัญ
- ใช้ `backticks` สำหรับ technical terms, file names, commands, หรือ code references

## Expected Outcome

- Devin Skills ที่มีโครงสร้างสม่ำเสมอ
- Folder structure ที่เป็นระบบ
- SKILL.md index ที่ครบถ้วน
- File naming ที่สอดคล้องกัน
- Content ที่มีคุณภาพ

