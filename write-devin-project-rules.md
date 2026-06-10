---
title: Write Devin Rules
description: สร้าง devin rules สำหรับ project ตามมาตรฐาน
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /content-quality
---

## Goal

สร้าง devin rules สำหรับ project ตามมาตรฐาน

## Scope

ใช้สำหรับสร้าง devin rules ใน project workspace

## Execute

### 1. Analyze Project

วิเคราะห์ project เพื่อดู tech stack, structure, และ patterns

1. ทำ `/analyze-project` เพื่อดู tech stack, structure, และ patterns
2. ระบุ workflows ที่ตรงกับ project
3. ระบุ workflows ที่จำเป็นสำหรับ project

### 2. Setup File Structure

จัด file structure สำหรับ devin rules

1. สร้าง `.devin/rules` directory ถ้ายังไม่มี
2. สร้าง subdirectories ตามหมวดหมู่:
   - `away/` - General rules (always_on + away: true)
   - `libraries/` - Library-specific rules
   - `domain/` - Domain-specific rules
   - `patterns/` - Code patterns
   - `project/` - Project-specific rules
3. ตั้งชื่อไฟล์ด้วย `kebab-case.md`
4. จัดลำดับไฟล์ตามความสำคัญ

### 3. Write Away Rules

เขียน general rules ที่ใช้เสมอ (always_on + away: true)

1. เขียน rules สำหรับ tools และ frameworks ที่ใช้ทั่วทั้ง project
2. Rules ใน away/ ต้องมี frontmatter `always_on: true` และ `away: true`
3. รวม rules สำหรับ tools เช่น `biome`, `turborepo`, `lefthook`, `ast-grep`, `bun`, `typescript`, `monorepo`
4. Rules ทั่วไปเช่น `architecture`, `general`

### 4. Write Library Rules

เขียน rules สำหรับ libraries และ tools ตาม dependencies ที่มีใน project

1. อ่าน `package.json` manifest เพื่อดู dependencies และ devDependencies
2. ระบุ libraries และ tools ที่ใช้ใน project
3. เขียน rules สำหรับ libraries และ tools ที่ระบุ
4. Rules ต้องสอดคล้องกับ dependencies ที่มีใน project

### 5. Write Domain Rules

เขียน rules สำหรับ domain-specific patterns

1. วิเคราะห์ domain ที่มีใน project (เช่น booking, customer, payment, etc.)
2. ระบุ domain patterns ที่ใช้ใน project
3. เขียน rules สำหรับ domain patterns ที่ระบุ
4. Rules ต้องใช้ได้กับทั้ง project

### 6. Write Pattern Rules

เขียน rules สำหรับ code patterns ตาม file patterns ที่มีใน project

1. วิเคราะห์ file patterns ที่มีใน project
2. ระบุ patterns ที่ใช้ใน project
3. เขียน rules สำหรับ patterns ที่ระบุ
4. Rules ต้องใช้ได้กับทั้ง project

### 7. Write Project-Specific Rules

เขียน rules เฉพาะ project ตามผลจาก analyze

1. เขียน rules เฉพาะ project ตามผลจาก `/analyze-project`
2. จัดลำดับ rules ตามความสำคัญ
3. คิดเองว่า project ต้องการ rules อะไรเพิ่มเติม

### 8. Format Rules

จัดรูปแบบ rules ให้ถูกต้อง

1. ใช้ numbered list สำหรับ rules
2. ใช้ clear language สำหรับแต่ละ rule
3. เพิ่ม context ถ้าจำเป็น
4. ทำ `/content-quality` สำหรับคุณภาพเนื้อหา
5. เพิ่ม frontmatter สำหรับ activation mode:
   - `trigger: glob` - สำหรับ file patterns เดียว
   - `trigger: globs` - สำหรับหลาย file patterns
   - `always_on` - ใช้เสมอ
   - `model_decision` - ให้ model ตัดสินใจ
   - `manual` - ใช้เมื่อ mention ด้วย `@rule-name`
6. เพิ่ม backticks สำหรับ concepts, tools, และ terms ทั้งหมด

## Rules

- วิเคราะห์ project ก่อนเขียน rules ด้วย `/analyze-project`
- Away rules ต้องมี frontmatter `always_on: true` และ `away: true`
- Library rules ต้องสอดคล้องกับ dependencies ที่มีใน `package.json`
- Domain rules ต้องใช้ได้กับทั้ง project
- Pattern rules ต้องใช้ได้กับทั้ง project
- Project rules ต้องคิดเองจากผล analyze
- ใช้คำที่กระชับ มีความหมายชัด
- เพิ่ม backticks สำหรับ concepts, tools, และ terms ทั้งหมด

## Expected Outcome

- Rules directory สร้างเรียบร้อย
- Away rules มีครบถ้วนสำหรับ tools และ frameworks
- Library rules มีครบถ้วนตาม dependencies ที่มีใน project
- Domain rules มีครบถ้วนตาม domain patterns ที่มีใน project
- Pattern rules มีครบถ้วนตาม file patterns ที่มีใน project
- Project-specific rules มีตามความต้องการ
- Rules จัดรูปแบบถูกต้อง
- Rules ชัดเจนและเข้าใจง่าย
- Backticks ครบถ้วนในทุก rules

