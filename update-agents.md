---
title: Update Agents
description: อัพเดท AGENTS.md ตาม project analysis และ dependencies
auto_execution_mode: 3
---

## Goal

อัพเดท AGENTS.md ตาม project analysis, dependencies และ best practices

## Scope

ใช้สำหรับอัพเดท AGENTS.md ทุก workspace ใน monorepo

## Execute

### 1. Discover Workspaces

ค้นหา workspaces ทั้งหมดใน monorepo

1. ทำ `/analyze-project` เพื่อดู workspace configuration ทั้งหมด
2. อ่าน package manifest เพื่อดูว่ามี workspace อะไรบ้าง
3. ระบุ workspace ที่ต้องประมวลผล (apps/*, packages/*)

### 2. Process Each Workspace

ทำงานกับแต่ละ workspace ตามลำดับ

1. อ่าน workspace configuration และ dependencies ของแต่ละ workspace
2. วิเคราะห์ project เพื่อเข้าใจ requirements ของแต่ละ workspace
3. ระบุ workflows และ skills ที่ควร follow จาก dependencies ของแต่ละ workspace
4. อัพเดท AGENTS.md ของแต่ละ workspace:
   - อัพเดท ## Custom Rules section (ว่างเปล่า)
   - อัพเดท ## Rules section (ว่างเปล่า)
   - อัพเดท ## Project ENV section พร้อม environment information
   - อัพเดท ## Workflows section พร้อม workflows ที่ควร follow
   - อัพเดท ## Skills section พร้อม skills ที่ควร follow

### 3. Verify Completion

ตรวจสอบว่าทุก workspace ได้รับการอัพเดทแล้ว

1. ทำ `/validate` เพื่อตรวจสอบความถูกต้องของการอัพเดท
2. ตรวจสอบว่าแต่ละ workspace มี AGENTS.md ที่ถูกอัพเดทแล้ว
3. ตรวจสอบว่าไม่มี workspace ที่ถูกข้าม

## Rules

### 1. Section Structure

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

- AGENTS.md มี ## Custom Rules, ## Rules, ## Workflows, ## Skills ครบถ้วน
- Custom Rules และ Rules ว่างเปล่า (ผู้ใช้เขียนเอง)
- Workflows อิงจาก dependencies ใน package.json
- Skills อิงจาก dependencies ใน package.json

