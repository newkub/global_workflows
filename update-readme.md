---
title: Update Readme
description: สร้าง README.md ครบถ้วนด้วย template มาตรฐานและข้อมูลจริงจากโปรเจกต์
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /all-workspaces
  - /follow-content-quality
  - /write-windsurf-global-workflows
---

## Goal

สร้าง `README.md` ที่มีเนื้อหาครบถ้วนด้วย template มาตรฐานและข้อมูลจริงจากการวิเคราะห์โปรเจกต์ สำหรับ root และ workspaces ใน monorepo

## Scope

ครอบคลุมการสร้าง `README.md` สำหรับ root และทุก workspace ใน monorepo

## Execute

### 1. Generate Changelog And Release

สร้าง changelog และ release notes ก่อนสร้าง README

1. ทำ `/gen-changelog` เพื่อสร้าง CHANGELOG.md
2. ทำ `/gen-release` เพื่อสร้าง RELEASE.md

### 2. Detect Project Type

ตรวจสอบประเภท project ก่อนเขียน README

1. อ่าน `package.json` หรือ `Cargo.toml` เพื่อดู type
2. ตรวจสอบ source code structure:
   - CLI/SDK: มี `bin/`, CLI commands, API exports, library exports
   - App: มี UI components, web app, mobile app, desktop app
3. ตรวจสอบ dependencies:
   - CLI/SDK: commander, yargs, typescript, build tools
   - App: react, vue, solid, UI frameworks, bundlers
4. กำหนด project type: `cli-sdk` หรือ `app`

### 3. Analyze And Write Root README

วิเคราะห์และเขียน README สำหรับ root

1. ทำ `/analyze-project` เพื่อเก็บข้อมูลโปรเจกต์ root
2. อ่าน `manifest files`, `source code`, และ `config files`
3. เลือก template ตาม project type:
   - ใช้ CLI/SDK Template สำหรับ CLI หรือ SDK
   - ใช้ App Template สำหรับ web/mobile/desktop apps
4. เขียน README ตาม template ที่เลือก
5. `Configuration` อยู่ใน `API References section`

### 4. Update Workspaces READMEs

อัพเดท README สำหรับทุก workspaces

1. ทำ `/all-workspaces` เพื่อ update README ทุก workspaces
2. ตรวจสอบ project type ของแต่ละ workspace
3. เลือก template ตาม project type ของ workspace
4. `Configuration` อยู่ใน `API References section`
5. ไม่ต้องมี `License` และ `History sections` (ใช้ของ root)

### 5. Validate And Finalize

ตรวจสอบและ finalize

1. ทำ `/follow-content-quality` เพื่อตรวจสอบคุณภาพ
2. ตรวจสอบ workflows ที่อ้างอิงมีอยู่จริง
3. ใช้ `/update-references` หากมี file changes

## Rules

### 1. Section Order

จัดเรียง sections ตามลำดับต่อไปนี้:

- `Status Callout`: ด้านบนสุด - ใช้ `> 🚀` หรือ emoji ที่เหมาะสม
- `Hero Section`: Title, Description, Badges (ชิดซ้าย, รวม License MIT badge)
- `## Project`: `<details>`/`<summary>` accordion ลำดับ Goal, Scope, Key Concepts, Core Principles, Best Practices (อยู่เหนือ Features)
- `## Features`: Markdown table 5 columns (Icon, Feature, Description, Benefit, Usage) พร้อม icon จาก iconify - เขียนให้ครอบคลุมที่สุด, maximize coverage
- `## Quick Start`: Installation ด้วย numbered steps ไม่มี indent, มี filename ใน codeblock, มี file structure
- `## Usage`: HTML 2-column layout (ซ้าย: code block + filename, ขวา: 2 ส่วน - description ตรงกลาง + ANSI preview, ยืดสูงเท่า col ซ้าย)
- `## API References`: `<details>`/`<summary>` accordion สำหรับ subsections พร้อมตาราง (ไม่มี file structure)
- `## Development`: `<details>`/`<summary>` accordion ลำดับ Tech Stack, How It Work, Architecture, Scripts, Workflows, Skills
- `## License`: Section แยกด้านล่างสุด พร้อม MIT badge (root เท่านั้น)

### 2. Usage Format

ใช้ HTML 2-column layout สำหรับ Usage section:

- ซ้าย: แสดง `### filename.ts` เป็น heading, ตามด้วย `typescript` codeblock แสดงตัวอย่างการใช้งาน
- ขวา: แบ่งเป็น 2 ส่วนใน `<td>` เดียว:
  - ส่วนบน: description คำอธิบายสั้นๆ ของ preview ใช้ `<p align="center">` เพื่อจัดกึ่งกลาง
  - ส่วนล่าง: ANSI preview แสดงผลลัพธ์ที่ผู้ใช้เห็นจริง
- ทั้ง 2 ส่วนของ col ขวา ต้องยืดสูงจนเท่ากับ col ซ้าย (ใช้ `<br>` หรือช่องว่างเติมให้เต็ม)
- ใช้ `<table><tr><td width="50%" valign="top">` สำหรับทั้ง 2 คอลัมน์
- แต่ละ usage example มี heading `###` ของตัวเอง พร้อม filename
- ทุก usage section ต้องกว้างเท่ากัน (ใช้ `width="50%"` ทั้งคู่)

### 3. API References Format

ใช้ accordion สำหรับ API References:

- แต่ละ subsection เป็น `<details>`/`<summary>` accordion
- ภายใน accordion ใช้ Markdown table
- ไม่มี file structure ใน API References (file structure อยู่ใน Development > Architecture)
- ใช้ตารางสำหรับ Functions, Types, Classes, Interfaces ฯลฯ

### 4. Project Format

ใช้ accordion สำหรับ Project section เรียงลำดับ (อยู่เหนือ Features):

- `Goal`: ตาราง 4 columns (Icon, Goal, Status, Description) พร้อม icon จาก iconify, รวม items ที่เป็น goal และไม่ใช่ goal (Status: ✓ Goal / ✗ Not Goal)
- `Scope`: ตาราง 4 columns (Icon, Scope, Status, Description) พร้อม icon จาก iconify, รวม items ที่เป็น scope และไม่ใช่ scope (Status: ✓ In Scope / ✗ Out of Scope)
- `Key Concepts`: ตาราง 3 columns (Icon, Concept, Description) พร้อม icon จาก iconify
- `Core Principles`: ตาราง 3 columns (Icon, Principle, Description) พร้อม icon จาก iconify
- `Best Practices`: ตาราง 3 columns (Icon, Practice, Description) พร้อม icon จาก iconify

### 5. Development Format

ใช้ accordion สำหรับ Development section เรียงลำดับ:

- `Tech Stack`: ตาราง 4 columns (Layer, Technology, Version, Description) พร้อมข้อมูลจริงจาก package.json
- `How It Work`: ANSI visual workflow diagram วาด flow การทำงานแบบ visual ให้เห็นภาพ เข้าใจง่าย ไม่ใช่แค่ input→process→output แต่เป็น workflow จริงของ package
- `Architecture`: codeblock แสดง file structure
- `Scripts`: codeblock แสดงคำสั่งทั้งหมด
- `Workflows`: codeblock แสดง `.devin/` structure
- `Skills`: codeblock แสดง skills ที่ใช้ใน package

### 6. Quick Start Format

เขียน Quick Start โดย:

- ใช้ numbered steps แบบไม่มี indent (เลขนอก, codeblock ไม่ indent)
- แต่ละ codeblock ต้องมี filename ระบุว่าทำในไฟล์ไหน
- มี file structure แสดงโครงสร้างไฟล์ที่เกี่ยวข้อง
- ตัวอย่าง:

```
1. **Install** — `terminal`
   ```bash
   bun add @wrikka/package-name
   ```

2. **Import** — `src/index.ts`
   ```typescript
   import { func } from '@wrikka/package-name';
   ```

3. **Use** — `src/app.ts`
   ```typescript
   func();
   ```
```

- หลังจาก steps ให้แสดง file structure:

```
src/
├── index.ts    # Import and export
└── app.ts      # Usage example
```

### 7. Content Standards

รักษาคุณภาพเนื้อหาตามมาตรฐาน:

- ใช้ข้อมูลจริงจาก `/analyze-project`
- Code examples ต้องรันได้จริง, มี comment อธิบาย
- ไม่ใช้ placeholder ยกเว้น banner image
- แต่ละ `## heading` ต้องมี description ใต้
- โดยเริ่มต้นไม่ต้องมี license/history ถ้าไม่มี tag release
- README.md: Headers และ Lists เป็นภาษาอังกฤษ
- Workflow: ใช้ภาษาไทย, ยกเว้นคำศัพท์เฉพาะทาง
- ไม่มี `## Information` section (removed)
- ไม่มี `## Key Concepts` เป็น section แยก (ย้ายไป `## Project` accordion)
- ไม่มี `## Tech Stack` เป็น section แยก (ย้ายไป `## Development` accordion)

### 8. Features Writing Standards

เขียน features ให้ละเอียดและครอบคลุมที่สุด:

- Coverage: ครอบคลุมทุก features หลักจากการวิเคราะห์ source code ทั้งหมด ไม่มีการข้าม
- Business-Focused: เขียน business value ไม่ใช่แค่ technical details
- Description: อธิบาย feature อย่างชัดเจนว่าทำอะไร และทำงานอย่างไร อย่างละเอียด
- Benefit: ระบุประโยชน์ที่เป็นคุณค่าต่อผู้ใช้จริงๆ ไม่ใช่คำกว้างๆ
- Usage: ให้ตัวอย่างการใช้งานที่เป็นรูปธรรม และใช้งานได้จริง
- Icons: ใช้ icon จาก iconify ที่เหมาะสมกับแต่ละ feature
- No Generic: หลีกเลี่ยงคำอธิบายที่ generic หรือไม่ชัดเจน
- User-Centric: เน้นประโยชน์ต่อผู้ใช้ ไม่ใช่แค่ technical details
- Maximize: ยิ่งครอบคลุมยิ่งดี ไม่จำกัดจำนวน rows

## Example Template

```markdown
# @wrikka/package-name

> 🚀 Short description

Longer description.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Project

<details>
<summary>Goal</summary>

| Icon | Goal | Status | Description |
|------|------|--------|-------------|
| <center>![icon](url)</center> | Goal item | ✓ Goal | Description |
| <center>![icon](url)</center> | Non-goal item | ✗ Not Goal | Description |

</details>

<details>
<summary>Scope</summary>

| Icon | Scope | Status | Description |
|------|-------|--------|-------------|
| <center>![icon](url)</center> | In scope item | ✓ In Scope | Description |
| <center>![icon](url)</center> | Out of scope item | ✗ Out of Scope | Description |

</details>

<details>
<summary>Key Concepts</summary>

| Icon | Concept | Description |
|------|---------|-------------|
| <center>![icon](url)</center> | Concept | Description |

</details>

<details>
<summary>Core Principles</summary>

| Icon | Principle | Description |
|------|-----------|-------------|
| <center>![icon](url)</center> | Principle | Description |

</details>

<details>
<summary>Best Practices</summary>

| Icon | Practice | Description |
|------|----------|-------------|
| <center>![icon](url)</center> | Practice | Description |

</details>

## Features

| Icon | Feature | Description | Benefit | Usage |
|------|---------|-------------|---------|-------|
| <center>![icon](url)</center> | Name | What it does | Why it matters | `func()` |

## Quick Start

1. **Install** — `terminal`
   ```bash
   bun add @wrikka/package-name
   ```

2. **Import** — `src/index.ts`
   ```typescript
   import { func } from '@wrikka/package-name';
   ```

3. **Use** — `src/app.ts`
   ```typescript
   func();
   ```

```
src/
├── index.ts    # Import and export
└── app.ts      # Usage example
```

## Usage

### example.ts

<table>
<tr>
<td width="50%" valign="top">

```typescript
import { func } from '@wrikka/package-name';
func('hello');
```

</td>
<td width="50%" valign="top">

<p align="center">Preview shows the terminal output after running the example code.</p>

```ansi
┌─────────────────────────┐
│  Result output here     │
│  ✓ Done                 │
└─────────────────────────┘
```

</td>
</tr>
</table>

## API References

<details>
<summary>Functions</summary>

| Function | Description |
|----------|-------------|
| `func(arg)` | Does something |

</details>

## Development

<details>
<summary>Tech Stack</summary>

| Layer | Technology | Version | Description |
|-------|-------------|---------|-------------|
| Runtime | Bun | >= 1.3.10 | JavaScript runtime |
| Language | TypeScript | 6.0.3 | Type-safe development |
| Build | bunup | latest | Bundling with Bun |

</details>

<details>
<summary>How It Work</summary>

```ansi
┌─────────────┐
│  User Input │
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌──────────────┐
│  Validate   │────▶│  Transform   │
└─────────────┘     └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
         ┌────────┐  ┌────────┐  ┌────────┐
         │  OK    │  │ Error  │  │ Cache  │
         └────────┘  └────────┘  └────────┘
              │            │            │
              └────────────┼────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Output    │
                    └─────────────┘
```

</details>

<details>
<summary>Architecture</summary>

```
src/
├── modules/
│   └── ...
└── index.ts
```

</details>

<details>
<summary>Scripts</summary>

```bash
bun run dev      # Development
bun run build    # Build
bun run test     # Test
bun run lint     # Lint
bun run verify   # Verify
```

</details>

<details>
<summary>Workflows</summary>

```
.devin/
├── rules/
│   └── model_decision/
├── scripts/
├── workflows/
└── hooks/
```

</details>

<details>
<summary>Skills</summary>

```
(No skills needed for this package)
```

</details>
```

## Expected Outcome

- README.md ครบถ้วน ไม่มี placeholder
- Project section อยู่เหนือ Features
- Project accordions: Goal (table with Status), Scope (table with Status), Key Concepts, Core Principles, Best Practices
- Features เขียนให้ครอบคลุมที่สุด maximize coverage
- Tech Stack ย้ายเข้า Development เป็น accordion 4 columns (Layer, Technology, Version, Description)
- Quick Start ไม่มี indent, มี filename ใน codeblock, มี file structure
- Usage: col ขวา 2 ส่วน (description ตรงกลาง + ANSI), ยืดสูงเท่า col ซ้าย, ทุก section กว้างเท่ากัน
- API References ไม่มี file structure
- How It Work เป็น visual ANSI workflow diagram ที่เข้าใจง่าย
- Development accordions: Tech Stack, How It Work, Architecture, Scripts, Workflows, Skills
- ไม่มี Information section
- ไม่มี markdown diff
