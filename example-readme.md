---
title: Example Readme
description: Template สำหรับสร้าง README.md จากตัวอย่างโปรเจกต์จริง
auto_execution_mode: 3
related_workflows:
  - /write-readme
---

## Goal

สร้าง README.md โดยใช้ตัวอย่างจากโปรเจกต์จริงเป็น reference template

## Scope

ครอบคลุมการใช้ตัวอย่างจาก README.md ที่มีอยู่จริงเป็น template

## Execute

### 1. Get Example README

1. อ่าน README.md จากโปรเจกต์ตัวอย่าง
2. ใช้ structure และ format เดียวกัน
3. ปรับเนื้อหาให้เหมาะสมกับโปรเจกต์ใหม่

### 2. Validate And Finalize

1. ใช้ `/content-quality` เพื่อตรวจสอบคุณภาพ
2. ตรวจสอบ workflows ที่อ้างอิงมีอยู่จริง
3. ใช้ `/update-references` หากมี file changes

## Rules

### 1. README Structure Template

ใช้ structure มาตรฐานจาก `/write-readme` สำหรับ README.md:

```markdown
# Project Name

> 🚀 **Status**: Status - Description

Description

![Badge](url)

## Features

| Icon | Feature | Description | Benefit | Usage |
|------|----------|-------------|---------|-------|
| icon | name | desc | benefit | usage |

## Quick Start

1. **Step**
   ```bash
   command
   ```

## Usage

### Method

Description

```bash
command
```

## Key Concepts

<details>
<summary>Concept</summary>

Description

</details>

## Development

<details>
<summary>Environment Setup</summary>

```bash
command
```

</details>

<details>
<summary>Local Development</summary>

```bash
command
```

</details>

<details>
<summary>Testing</summary>

```bash
command
```

</details>

<details>
<summary>Building</summary>

```bash
command
```

</details>

<details>
<summary>Deployment</summary>

```bash
command
```

</details>

<details>
<summary>Debugging</summary>

```bash
command
```

</details>

<details>
<summary>Contributing</summary>

- Point 1
- Point 2

</details>

## Best Practices

> [!TIP]
> **Best Practices**

- Practice 1
- Practice 2

## Reference

<details>
<summary>Scripts</summary>

| Command | Description |
|---------|-------------|
| cmd | desc |

</details>

<details>
<summary>Workspaces</summary>

| Workspace | Description |
|-----------|-------------|
| workspace | description |

</details>

<details>
<summary>Configuration</summary>

| File | Purpose |
|------|---------|
| file | purpose |

</details>

## Information

> [!TIP]
> **Tips**
> - Tip 1

> [!IMPORTANT]
> **Requirements**
> - Req 1

> [!WARNING]
> **Warning**
> - Warn 1

> [!CAUTION]
> **Caution**
> - Caution 1

> [!FAQ]
> **FAQs**

| Q | A |
|---|---|
| Q1 | A1 |

## License

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty
```

### 2. Section Formats

จัดรูปแบบ sections ตามมาตรฐาน:

- `Status Callout`: ด้านบนสุด (หลัง title) - ใช้ `> 🚀` หรือ emoji ที่เหมาะสม
- `Hero Section`: Title, Description, Badges (ชิดซ้าย, รวม License MIT badge)
- `Features`: Markdown table 5 columns (Icon, Feature, Description, Benefit, Usage) พร้อม icon จาก iconify
- `Quick Start`: Installation ด้วย numbered steps
- `Usage`: Markdown format พร้อม code blocks
- `Key Concepts`: `<details>`/`<summary>` accordion
- `Development`: `<details>`/`<summary>` accordion พร้อม subsections (Environment Setup, Local Development, Testing, Building, Deployment, Debugging, Contributing)
- `Best Practices`: Callout `[!TIP]` พร้อม bullet points
- `Reference`: `<details>`/`<summary>` accordion สำหรับ subsections (Scripts, Workspaces, Configuration)
- `Information`: Callout หลายอัน (TIP, IMPORTANT, WARNING, CAUTION, FAQ)
- `License`: Section แยกด้านล่างสุด พร้อม MIT badge

### 3. Content Standards

รักษาคุณภาพเนื้อหา:

- ใช้ข้อมูลจริงจากโปรเจกต์ตัวอย่าง
- Code examples ต้องรันได้จริง
- ไม่ใช้ placeholder ยกเว้น banner image
- Code block มี comment อธิบาย
- Callouts ใช้ emoji แทน GitHub-style (`[!SUCCESS]` → `> 🚀`)

### 4. Language Standards

ใช้ภาษาที่ถูกต้อง:

- README.md: Headers และ Lists เป็นภาษาอังกฤษ
- Workflow: ใช้ภาษาไทย
- ยกเว้นคำศัพท์เฉพาะทาง

## Expected Outcome

- README.md ที่มีเนื้อหาครบถ้วน ไม่มี placeholder
- โครงสร้างสม่ำเสมอตาม template
- Code examples ถูกต้องและพร้อมใช้งาน
- Callouts แสดงผลได้บนทุก platform
