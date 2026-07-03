---
title: Update Agents
description: เขียน AGENTS.md ตาม project analysis และ dependencies
auto_execution_mode: 3
related_workflows:
  - /check-monorepo
  - /update-dot-devin
---

## Goal

เขียน `AGENTS.md` ตาม project analysis, dependencies และ best practices

## Scope

ใช้สำหรับเขียน `AGENTS.md` ใน workspace ตาม project จริง ถ้าเป็น monorepo ให้เขียนทั้ง root และ workspace level

## Execute

### 1. Check Project Type

ตรวจสอบประเภท project

1. ทำ `/check-monorepo` เพื่อตรวจสอบว่า project เป็น monorepo หรือไม่
2. ถ้าเป็น monorepo ให้ทำตาม Monorepo section
3. ถ้าไม่ใช่ monorepo ให้ทำตาม Single Project section

### 2. Read Global Workflows

เข้าใจมาตรฐานและป้องกันการซ้ำซ้อน

1. ทำ `/at-windsurf-global-rules` เพื่อดู global rules
2. อ่าน workflows ที่คล้ายกันหรือเกี่ยวข้อง
3. ดูตัวอย่างที่ `/example-workflow`

### 3. Analyze Project

วิเคราะห์ project เพื่อเข้าใจ requirements

1. ทำ `/analyze-project` เพื่อวิเคราะห์ codebase
2. อ่าน `package.json` ทั้ง root และ workspace เพื่อดู dependencies
3. ระบุ tech stack และ frameworks ที่ใช้
4. วิเคราะห์ patterns และ conventions ที่มีอยู่

### 4. Identify Workflows And Skills

ระบุ workflows และ skills ที่ควร follow จาก dependencies

1. ดู dependencies ใน `package.json` ทั้ง root และ workspace
2. ทำ `/list-global-workflows` เพื่อดู workflows ที่มีอยู่ทั้งหมด
3. ทำ `/list-skills` เพื่อดู skills ในเครื่องทั้งหมด
4. ถ้าไม่มี skills ที่เกี่ยวข้องในเครื่อง ให้ทำ `/search-skills` เพื่อค้นหา skills จาก external registry ที่เกี่ยวข้องกับ dependencies
5. ระบุ workflows ที่ควร follow สำหรับแต่ละ dependency
6. ระบุ skills ที่ควร follow จากผลลัพธ์ของ `/list-skills` และ `/search-skills` (ถ้ามี)

### 5. Write AGENTS.md

เขียน `AGENTS.md` ตาม Rules section

1. ทำ `/follow-principles` เพื่อเขียนเป็นหลักการ
2. ทำ `/follow-consistency` เพื่อรักษาความสม่ำเสมอ
3. ทำ `/improve-redundancy` เพื่อลดความซ้ำซ้อน
4. เขียน `AGENTS.md` ตาม Rules section

### 6. Validate And Finalize

ตรวจสอบและ finalize

1. ทำ `/improve-content` สำหรับปรับปรุงคุณภาพ
2. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัด
3. ตรวจสอบ references ว่ามีอยู่จริง

## Rules

### 1. Monorepo Handling

ถ้าเป็น monorepo ต้องเขียน `AGENTS.md` ทั้ง root และ workspace level

- Root `AGENTS.md` ต้องมี `## Workspaces` section ที่ระบุว่าให้ทำตาม `AGENTS.md` ของแต่ละ workspace
- แต่ละ workspace ต้องมี `AGENTS.md` ของตัวเองที่เขียนตาม Rules section ด้านล่าง
- Root `AGENTS.md` ต้องมี `## Every Task`, `## Project`, `## Workspaces`, `## Workflows`, `## Skills`
- Workspace `AGENTS.md` ต้องมี `## Every Task`, `## Project`, `## Workflows`, `## Skills`

### 2. Section Structure

โครงสร้าง sections (เรียงลำดับจากบนลงล่าง):

- `## Every Task`: สิ่งที่ต้องทำทุกครั้ง
- `## Project`: project environment information
- `## Workspaces`: (root monorepo เท่านั้น) ระบุว่าให้ทำตาม `AGENTS.md` ของแต่ละ workspace
- `## Workflows`: workflows ที่ควร follow จาก dependencies
- `## Skills`: skills ที่ควร follow จาก dependencies

### 3. Content Language

เนื้อหาใน `AGENTS.md` ต้องเป็นภาษาอังกฤษทั้งหมด

- ทุก section, bullet point, description ต้องเป็นภาษาอังกฤษ
- ใช้ backticks สำหรับ `concepts`, `tools`, `terms`, และ `commands`
- ห้ามใช้ภาษาไทยใน `AGENTS.md`

### 4. Every Task Format

รูปแบบ `## Every Task`:

- เขียนเป็น bullet points ภาษาอังกฤษ:
  - Read all workflows, skills, and references, and follow them all
  - Run `/run-verify` after completing work
  - Run `/refactor` after completing work
  - Run `/realize-implementation` after completing work
- ใช้เพื่อเน้นว่าต้องทำทุกครั้ง

### 5. Project Format

รูปแบบ `## Project`:

- เพิ่ม Project Type: ระบุประเภท project (เช่น `web`, `cli`, `sdk`, `mobile`, `desktop`, `api`, `library`, `monorepo`)
- เพิ่ม Workspaces: ระบุ workspaces ใน monorepo (ถ้ามี) พร้อมคำอธิบายสั้นๆ
- ใช้ bullet points พร้อม colon separator
- ตัวอย่าง: `Package Manager: \`Bun\``
- ไม่ใช้ตาราง

### 6. Workflow Format

รูปแบบ `## Workflows`:

- ใช้ bullet points พร้อมคำว่า "Follow" และ backticks
- เพิ่มข้อความนำหน้า section: "Workflows used in this project:"
- ตัวอย่าง: `- Follow \`/follow-biome\``
- ไม่ใช้ตาราง
- ลบรายการ workflows ทั้งหมดที่เกี่ยวข้องจาก dependencies ใน `package.json`
- ตรวจสอบทั้ง root และ workspace `package.json`
- รวม workflows สำหรับ: runtime, framework, build tool, linter, formatter, test runner, database, ORM, validation, styling, router, state management, auth, payment, API layer, monorepo, git hooks, deployment, code analysis, unused code detection

### 7. Skills Format

รูปแบบ `## Skills`:

- ใช้ bullet points พร้อมคำว่า "Follow" และ backticks
- เพิ่มข้อความนำหน้า section: "Skills used in this project:"
- ตัวอย่าง: `- Follow \`context7-mcp\``
- ไม่ใช้ตาราง
- ลบรายการ skills ทั้งหมดที่เกี่ยวข้องจาก dependencies ใน `package.json`
- Skills ไม่ใช่ optional - ต้องมี section นี้เสมอ
- ตรวจสอบทั้ง root และ workspace `package.json` สำหรับ dependencies ที่เกี่ยวข้องกับ skills
- รวม skills สำหรับ MCP servers, AI integrations, หรือ specialized tooling
- Skills ที่ควรตรวจสอบ: `mcp-builder`, `frontend-design`, `shadcn-vue`, `vueuse`
- ถ้าไม่มี skills ให้เขียน: `- (No skills needed for this project)`

## Expected Outcome

- ถ้าเป็น monorepo: root `AGENTS.md` มี `## Workspaces` ที่บอกให้ทำตาม workspace `AGENTS.md`
- ถ้าเป็น monorepo: แต่ละ workspace มี `AGENTS.md` ของตัวเอง
- `AGENTS.md` มี `## Every Task`, `## Project`, `## Workflows`, `## Skills` ครบถ้วน
- เนื้อหาทั้งหมดเป็นภาษาอังกฤษ
- `## Every Task` เป็น bullet points ภาษาอังกฤษ
- `## Project` เป็น bullet points พร้อม colon separator
- `## Workflows` เป็น bullet points พร้อม "Follow" และ backticks
- `## Skills` เป็น bullet points พร้อม "Follow" และ backticks - ห้ามว่างหรือหาย
- Workflows อิงจาก dependencies ใน `package.json`
- Skills อิงจาก dependencies ใน `package.json`
