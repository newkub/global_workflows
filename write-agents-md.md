---
title: Write Agents Md
description: เขียน AGENTS.md ตาม project analysis และ dependencies
auto_execution_mode: 3
---

## Goal

เขียน AGENTS.md ตาม project analysis, dependencies และ best practices

## Scope

ใช้สำหรับเขียน AGENTS.md ใน workspace ตาม project จริง

## Execute

### 1. Read Global Workflows

เข้าใจมาตรฐานและป้องกันการซ้ำซ้อน

1. ทำ `/at-windsurf-global-rules` เพื่อดู global rules
2. อ่าน workflows ที่คล้ายกันหรือเกี่ยวข้อง
3. ดูตัวอย่างที่ `/example-workflow`

### 2. Analyze Project

วิเคราะห์ project เพื่อเข้าใจ requirements

1. ทำ `/analyze-project` เพื่อวิเคราะห์ codebase
2. อ่าน `package.json` เพื่อดู dependencies
3. ระบุ tech stack และ frameworks ที่ใช้
4. วิเคราะห์ patterns และ conventions ที่มีอยู่

### 3. Identify Workflows And Skills

ระบุ workflows และ skills ที่ควร follow จาก dependencies

1. ดู dependencies ใน `package.json`
2. ค้นหา workflows ที่เกี่ยวข้องใน global_workflows
3. ค้นหา skills ที่เกี่ยวข้องใน skills registry
4. ระบุ workflows และ skills ที่ควร follow สำหรับแต่ละ dependency

### 4. Write AGENTS.md

เขียน AGENTS.md ตาม Rules section

1. ทำ `/follow-principles` เพื่อเขียนเป็นหลักการ
2. ทำ `/follow-consistency` เพื่อรักษาความสม่ำเสมอ
3. ทำ `/improve-redundancy` เพื่อลดความซ้ำซ้อน
4. เขียน AGENTS.md ตาม Rules section

### 5. Validate And Finalize

ตรวจสอบและ finalize

1. ทำ `/improve-content` สำหรับปรับปรุงคุณภาพ
2. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัด
3. ตรวจสอบ references ว่ามีอยู่จริง

## Rules

### 1. Section Structure

โครงสร้าง sections (เรียงลำดับจากบนลงล่าง):

- ## Every Task: สิ่งที่ต้องทำทุกครั้ง
- ## Project: project environment information (package manager, runtime, monorepo, etc.)
- ## Workflows: workflows ที่ควร follow จาก dependencies
- ## Skills: skills ที่ควร follow จาก dependencies

### 2. Every Task Format

รูปแบบ ## Every Task:

- เขียนเป็น bullet points ด้วย backticks:
  - อ่านทุก workflows, skills และทุก references ที่อ้างอิง และทำตามนั้นทั้งหมด
  - ทำตาม `/ship-run` หลังทำเสร็จ
  - ทำ `/refactor` หลังทำเสร็จ
  - ทำ `/realize-implementation` หลังทำเสร็จ
- ใช้เพื่อเน้นว่าต้องทำทุกครั้ง

### 3. Project Format

รูปแบบ ## Project:

- ใช้ bullet points พร้อม colon separator
- ตัวอย่าง: Package Manager: `Bun`
- ไม่ใช้ตาราง

### 4. Workflow And Skill Format

รูปแบบ workflows และ skills:

- เพิ่มข้อความนำหน้า section: "Workflows ที่ใช้ใน project:" หรือ "Skills ที่ใช้ใน project:"
- ใช้ bullet points พร้อมคำว่า "ทำ" และ backticks
- ตัวอย่าง: `- ทำ `/follow-biome`` หรือ `- ทำ `context7-mcp``
- ไม่ใช้ตาราง

## Expected Outcome

- AGENTS.md มี ## Every Task, ## Project, ## Workflows, ## Skills ครบถ้วน
- ## Every Task มีเนื้อหาเป็น bullet points ด้วย backticks:
  - อ่านทุก workflows, skills และทุก references ที่อ้างอิง และทำตามนั้นทั้งหมด
  - ทำตาม `/ship-run` หลังทำเสร็จ
  - ทำ `/refactor` หลังทำเสร็จ
  - ทำ `/realize-implementation` หลังทำเสร็จ
- Project เป็น bullet points พร้อม colon separator
- Workflows และ Skills เป็น bullet points พร้อมคำว่า "ทำ" และ backticks
- Workflows อิงจาก dependencies ใน package.json
- Skills อิงจาก dependencies ใน package.json
