---
title: Update Dot Devin
description: สร้าง .devin structure ครบถ้วนรวม rules และ hooks โดยไม่มี workflows directory
auto_execution_mode: 3
related_workflows:
  - /update-devin-rules
  - /update-agents
  - /check-monorepo
  - /write-ast-grep-rules
  - /follow-ast-grep
---

## Goal

สร้าง `.devin` structure ครบถ้วนสำหรับ project workspace รวม rules และ hooks โดยไม่มี `workflows/` directory

## Scope

ใช้สำหรับสร้าง `.devin` structure ใน project workspace ใดๆ ถ้าเป็น monorepo ให้แต่ละ workspace มี `.devin/rules/` และ `AGENTS.md` ของตัวเอง

## Directory Structure

### Single Project

```
.devin/
├── rules/
│   ├── always-on/
│   ├── model_decision/
│   └── glob/
├── hooks/
│   ├── hooks.json
│   ├── run-lint.ts
│   └── run-typecheck.ts
├── skills/ (optional)
└── mcp/ (optional)
```

### Monorepo

```
.devin/
├── rules/
│   ├── always-on/
│   ├── model_decision/
│   └── glob/
├── hooks/
│   ├── hooks.json
│   ├── run-lint.ts
│   └── run-typecheck.ts
apps/<workspace>/
├── .devin/
│   └── rules/
│       ├── always-on/
│       ├── model_decision/
│       └── glob/
├── AGENTS.md
integrations/<workspace>/
├── .devin/
│   └── rules/
│       ├── always-on/
│       ├── model_decision/
│       └── glob/
├── AGENTS.md
```

## Execute

### 1. Check Project Type

ตรวจสอบประเภท project เพื่อกำหนด structure

1. ทำ `/check-monorepo` เพื่อตรวจสอบว่า project เป็น monorepo หรือไม่
2. ถ้าเป็น monorepo ให้ทำตาม Monorepo section ด้านล่าง
3. ถ้าไม่ใช่ monorepo ให้ทำตาม Single Project section

### 2. Analyze Project

วิเคราะห์ project เพื่อดู tech stack, structure, และ patterns

1. ทำ `/analyze-project` เพื่อดู tech stack, structure, และ patterns
2. อ่าน `package.json` ทั้ง root และ workspace เพื่อดู dependencies ทั้งหมด

### 3. Setup Root Rules And Hooks

สร้าง root `.devin` structure สำหรับ shared rules และ hooks

1. อ่าน https://docs.devin.ai/cli/extensibility/rules เพื่อเข้าใจ rules
2. สร้าง `.devin/rules` directory พร้อม subdirectories: `always-on/`, `model_decision/`, `glob/`
3. ทำ `/update-devin-rules` เพื่อเขียน rules ตาม dependencies จริง
4. ทำตาม Rules section ด้านล่างสำหรับ frontmatter และ format

### 4. Setup Hooks

สร้าง hooks สำหรับ Cascade

1. อ่าน https://docs.devin.ai/cli/extensibility/hooks/overview เพื่อเข้าใจ hooks
2. สร้าง `.devin/hooks` directory
3. สร้าง TypeScript scripts: `run-lint.ts`, `run-typecheck.ts`
4. สร้าง `.devin/hooks/hooks.json` configuration
5. ทำตาม Rules section ด้านล่างสำหรับ hook format

### 5. Setup Workspace Rules And AGENTS.md (Monorepo Only)

ถ้าเป็น monorepo ให้สร้าง `.devin/rules/` และ `AGENTS.md` สำหรับแต่ละ workspace

1. ระบุ workspaces ทั้งหมดจาก root `package.json` `workspaces` field
2. สำหรับแต่ละ workspace:
   1. สร้าง `<workspace>/.devin/rules/` พร้อม subdirectories: `always-on/`, `model_decision/`, `glob/`
   2. ทำ `/update-devin-rules` สำหรับ workspace นั้น โดยอ้างอิง dependencies ใน `<workspace>/package.json`
   3. ทำ `/update-agents` สำหรับ workspace นั้น เพื่อเขียน `AGENTS.md`
3. ทำ `/update-agents` สำหรับ root `AGENTS.md` โดยระบุว่าให้ทำตาม `AGENTS.md` ของแต่ละ workspace

### 6. Setup Skills And MCP (Optional)

ตั้งค่า skills และ MCP servers (ถ้า project มีความต้องการเฉพาะ)

1. อ่าน https://docs.devin.ai/cli/extensibility/skills/overview เพื่อเข้าใจ skills
2. อ่าน https://docs.devin.ai/cli/extensibility/mcp/overview เพื่อเข้าใจ MCP
3. ตั้งค่า skills และ MCP servers ตามความจำเป็นของ project

### 7. Write Ast-Grep Rules

เขียน ast-grep rules ใน `.devin/rules/` ตาม devin rules ที่สร้างขึ้น

1. ทำ `/write-ast-grep-rules` เพื่อแปลง devin rules เป็น ast-grep YAML format
2. สร้าง ast-grep rules ใน `.devin/rules/always-on/` และ `.devin/rules/model_decision/`
3. อัพเดท `sgconfig.yml` ให้ `ruleDirs` ชี้ไปที่ `.devin/rules/always-on` และ `.devin/rules/model_decision`
4. รัน `bunx ast-grep scan --inspect summary` เพื่อตรวจสอบว่า rules parse ได้
5. รัน `bun run scan` เพื่อ scan ทั้ง codebase

### 8. Remove Workflows Directory

ลบ `.devin/workflows/` directory ถ้ามีอยู่

1. ตรวจสอบว่า `.devin/workflows/` directory มีอยู่หรือไม่
2. ถ้ามี ให้ลบทิ้งทั้ง directory

### 9. Test And Validate

ทดสอบและตรวจสอบ

1. ทดสอบ hooks ด้วยการแก้ไข code
2. ตรวจสอบ exit codes และ output
3. ตรวจสอบ JSON configuration ถูกต้อง
4. ตรวจสอบว่าไม่มี `.devin/workflows/` directory
5. ตรวจสอบว่า ast-grep rules ใน `.devin/rules/` ทำงานได้

## Rules

### 1. No Workflows Directory

- ห้ามมี `.devin/workflows/` directory
- ถ้ามีอยู่ ให้ลบทิ้ง

### 2. Content Language

- เนื้อหาทั้งหมดใน `.devin/` ต้องเป็นภาษาอังกฤษ

### 3. File Structure

- ต้องมี `.devin/rules` directory พร้อม subdirectories: `always-on/`, `model_decision/`, `glob/`
- ตั้งชื่อไฟล์ด้วย `kebab-case.md`
- ถ้าเป็น monorepo แต่ละ workspace ต้องมี `.devin/rules/` และ `AGENTS.md` ของตัวเอง

### 4. Frontmatter Validation

- `always-on` rules ต้องมี `trigger: always_on`
- `model_decision` rules ต้องมี `trigger: model_decision`
- `glob` rules ต้องมี `trigger: glob` พร้อม `globs:` list

### 5. Rules Update

- ใช้ `/update-devin-rules` สำหรับเขียนและอัพเดท rules ทั้ง root และ workspace
- Rules ต้องสอดคล้องกับ dependencies ใน `package.json`

### 6. AGENTS.md Update

- ใช้ `/update-agents` สำหรับเขียน `AGENTS.md` ทั้ง root และ workspace
- Root `AGENTS.md` ต้องระบุว่าให้ทำตาม `AGENTS.md` ของแต่ละ workspace
- แต่ละ workspace ต้องมี `AGENTS.md` ของตัวเอง

### 7. Hook Format

- รูปแบบ hooks configuration อ้างอิงจาก https://docs.devin.ai/cli/extensibility/hooks/overview
- ใช้ `post_write_code` event สำหรับรัน lint หลังจากเขียน code
- รัน hooks ด้วย `bun .devin/hooks/run-lint.ts`

### 8. TypeScript Scripts

- สร้าง scripts ใน `.devin/hooks/` directory
- รันด้วย `bun .devin/hooks/run-lint.ts`
- Parse JSON input จาก stdin

### 9. Ast-Grep Rules

- ใช้ `/write-ast-grep-rules` สำหรับสร้าง ast-grep rules ใน `.devin/rules/`
- `sgconfig.yml` ต้องชี้ `ruleDirs` ไปที่ `.devin/rules/always-on` และ `.devin/rules/model_decision`
- ast-grep rules (YAML) และ devin rules (Markdown) อยู่ใน `.devin/rules/` ที่เดียวกัน

## Expected Outcome

- `.devin` มี rules และ hooks ครบถ้วน ไม่มี `workflows/` directory
- ถ้าเป็น monorepo แต่ละ workspace มี `.devin/rules/` และ `AGENTS.md` ของตัวเอง
- Root `AGENTS.md` บอกให้ทำตาม workspace `AGENTS.md`
- Rules จัดรูปแบบถูกต้องตามมาตรฐาน
- Hooks ทำงานตาม events ที่กำหนด
- ast-grep rules อยู่ใน `.devin/rules/` และ `sgconfig.yml` ชี้ไปที่ถูกต้อง
