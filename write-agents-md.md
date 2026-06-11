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

### 1. Analyze Project

วิเคราะห์ project เพื่อเข้าใจ requirements

1. ทำ `/analyze-project` เพื่อวิเคราะห์ codebase
2. อ่าน `package.json` เพื่อดู dependencies
3. ระบุ tech stack และ frameworks ที่ใช้
4. วิเคราะห์ patterns และ conventions ที่มีอยู่

### 2. Identify Workflows And Skills

ระบุ workflows และ skills ที่ควร follow จาก dependencies

1. ดู dependencies ใน `package.json`
2. ค้นหา workflows ที่เกี่ยวข้องใน global_workflows
3. ค้นหา skills ที่เกี่ยวข้องใน skills registry
4. ระบุ workflows และ skills ที่ควร follow สำหรับแต่ละ dependency

### 3. Write AGENTS.md

เขียน AGENTS.md ครบถ้วน

1. เพิ่ม header: อ่าน `/ship-code` และ `/review-everything` ก่อนแก้ไข code ทุกครั้ง
2. เขียน ## Custom Rules section (ว่างเปล่า)
3. เขียน ## Rules section (ว่างเปล่า)
4. เขียน ## Project ENV section พร้อม environment information
5. เขียน ## Workflows section พร้อม workflows ที่ควร follow
6. เขียน ## Skills section พร้อม skills ที่ควร follow

## Rules

### 1. Header Requirement

ต้องมี header ด้านบนสุด:

- เขียนว่า อ่าน `/ship-code` และ `/review-everything` ก่อนแก้ไข code ทุกครั้ง
- ต้องอยู่บรรทัดแรกของไฟล์

### 2. Section Structure

โครงสร้าง sections:

- ## Custom Rules: custom rules ที่ผู้ใช้เขียนเอง
- ## Rules: rules ที่ผู้ใช้เขียนเอง
- ## Project ENV: project environment information (package manager, runtime, monorepo, etc.)
- ## Workflows: workflows ที่ควร follow จาก dependencies
- ## Skills: skills ที่ควร follow จาก dependencies

### 3. Workflow And Skill Format

รูปแบบ workflows และ skills:

- ใช้รูปแบบ `/workflow-name` สำหรับ workflows
- ใช้รูปแบบ `skill-name` สำหรับ skills
- เพิ่มคำว่า ทำ ก่อนทุก workflow และ skill
- Custom Rules และ Rules ต้องว่างเปล่า ผู้ใช้เขียนเอง

## Expected Outcome

- AGENTS.md มี header อ่าน `/ship-code` และ `/review-everything` ก่อนแก้ไข code ทุกครั้ง
- AGENTS.md มี ## Custom Rules, ## Rules, ## Workflows, ## Skills ครบถ้วน
- Custom Rules และ Rules ว่างเปล่า (ผู้ใช้เขียนเอง)
- Workflows อิงจาก dependencies ใน package.json
- Skills อิงจาก dependencies ใน package.json

