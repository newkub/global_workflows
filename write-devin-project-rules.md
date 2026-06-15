s---
title: Write Devin Rules
description: สร้าง devin rules สำหรับ project ตามมาตรฐาน
auto_execution_mode: 3
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
2. สร้าง subdirectories ตาม trigger mode: `always-on/`, `model_decision/`, `glob/`
3. ตั้งชื่อไฟล์ด้วย `kebab-case.md`
4. จัดลำดับไฟล์ตามความสำคัญ

### 3. Write Always-On Rules

เขียน rules ที่ใช้เสมอ (trigger: always_on)

1. เขียน rules สำหรับ tools และ frameworks ที่ใช้ทั่วทั้ง project
2. Rules ใน always-on/ ต้องมี frontmatter `trigger: always_on`
3. รวม rules สำหรับ tools เช่น `biome`, `turborepo`, `lefthook`, `ast-grep`, `bun`, `typescript`, `monorepo`, `knip`
4. Rules ทั่วไปเช่น `architecture`, `general`

### 4. Write Model Decision Rules

เขียน rules ที่ให้ model ตัดสินใจ (trigger: model_decision)

1. เขียน rules สำหรับ domain-specific patterns (booking, customer, payment, etc.)
2. เขียน rules สำหรับ library-specific patterns ตาม dependencies
3. เขียน rules สำหรับ project-specific patterns
4. Rules ใน model_decision/ ต้องมี frontmatter `trigger: model_decision`

### 5. Write Glob Rules

เขียน rules ที่ใช้ file patterns (trigger: globs)

1. วิเคราะห์ file patterns ที่มีใน project
2. เขียน rules สำหรับ patterns ที่ระบุ (components, composables, api, utils, database)
3. Rules ใน glob/ ต้องมี frontmatter `trigger: globs`
4. ระบุ file patterns ใน frontmatter ด้วย `globs:` list

### 6. Format Rules

จัดรูปแบบ rules ให้ถูกต้อง

1. ใช้ numbered list สำหรับ rules
2. ใช้ clear language สำหรับแต่ละ rule
3. เพิ่ม context ถ้าจำเป็น
4. เพิ่ม backticks สำหรับ concepts, tools, และ terms ทั้งหมด

## Rules

### 1. File Structure

โครงสร้าง directory ต้องถูกต้อง

- ต้องมี `.devin/rules` directory
- ต้องมี subdirectories ตาม trigger mode: `always-on/`, `model_decision/`, `glob/`
- ตั้งชื่อไฟล์ด้วย `kebab-case.md`
- จัดลำดับไฟล์ตามความสำคัญ

### 2. Frontmatter Validation

ตรวจสอบ frontmatter ต้องถูกต้อง

- `always-on` rules ต้องมี `trigger: always_on`
- `model_decision` rules ต้องมี `trigger: model_decision`
- `glob` rules ต้องมี `trigger: globs` พร้อม `globs:` list
- ต้องไม่มี field ที่ไม่จำเป็น

### 3. Content Coverage

เนื้อหา rules ต้องครอบคลุม

- Always-on rules ต้องครอบคลุม tools ทั้งหมด: `biome`, `turborepo`, `lefthook`, `ast-grep`, `bun`, `typescript`, `monorepo`, `knip`
- Model decision rules ต้องครอบคลุม domain patterns: `booking`, `customer`, `payment`
- Glob rules ต้องครอบคลุม file patterns: `components`, `composables`, `api`, `utils`, `database`
- Rules ต้องใช้ได้กับทั้ง project

### 4. Dependency Validation

ตรวจสอบว่า rules สอดคล้องกับ dependencies

- Library rules ต้องสอดคล้องกับ dependencies ใน `package.json`
- ต้องไม่มี rules สำหรับ libraries ที่ไม่ได้ใช้
- ต้องมี rules สำหรับ libraries ที่ใช้ทั้งหมด

### 5. Architecture Alignment

ตรวจสอบว่า rules สอดคล้องกับ architecture

- Pattern rules ต้องสอดคล้องกับ architecture
- Domain rules ต้องครอบคลุมทุก business logic
- ต้องไม่มี conflicts ระหว่าง rules

### 6. Format Validation

ตรวจสอบรูปแบบ rules ต้องถูกต้อง

- ต้องใช้ numbered list สำหรับ rules
- ต้องมี backticks สำหรับ `concepts`, `tools`, และ `terms` ทั้งหมด

## Expected Outcome

- Rules directory สร้างเรียบร้อย
- Always-on rules มีครบถ้วนสำหรับ tools และ frameworks
- Model decision rules มีครบถ้วนตาม domain patterns และ dependencies
- Glob rules มีครบถ้วนตาม file patterns ที่มีใน project
- Rules จัดรูปแบบถูกต้อง
- Rules ชัดเจนและเข้าใจง่าย
- Backticks ครบถ้วนในทุก rules

