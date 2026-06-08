---
title: Check Consistency
description: ตรวจสอบความสม่ำเสมอของ naming, style, และ structure
auto_execution_mode: 3
related_workflows:
  - /improve-naming
  - /follow-content-quality
---

## Goal

ตรวจสอบความสม่ำเสมอของ naming, style, และ structure ทั่ว codebase

## Execute

### 1. Check Naming Consistency

1. ทำ `/use-scripts` เพื่อ scan naming patterns, check style consistency, validate conventions, และ generate consistency report ใน script เดียว

### 2. Check Style Consistency

1. ตรวจสอบ code style สม่ำเสมอ
2. ตรวจสอบ formatting สม่ำเสมอ
3. ตรวจสอบ indentation สม่ำเสมอ
4. ตรวจสอบ comment style สม่ำเสมอ

### 3. Check Structure Consistency

1. ทำ `/check-file-structure` เพื่อดูโครงสร้างไฟล์และโฟลเดอร์
2. ตรวจสอบ folder structure สม่ำเสมอ
3. ตรวจสอบ file organization สม่ำเสมอ
4. ตรวจสอบ module structure สม่ำเสมอ
5. ตรวจสอบ component structure สม่ำเสมอ

### 4. Check Documentation Consistency

1. ตรวจสอบ README format สม่ำเสมอ
2. ตรวจสอบ API documentation format
3. ตรวจสอบ comment style สม่ำเสมอ
4. ตรวจสอบ changelog format

### 5. Check Pattern Consistency

1. ตรวจสอบ design patterns ที่ใช้
2. ตรวจสอบ architectural patterns สม่ำเสมอ
3. ตรวจสอบ error handling patterns
4. ตรวจสอบ state management patterns

### 6. Run Consistency Check

1. ใช้ linting rules สำหรับ consistency
2. ใช้ AST-based tools สำหรับ pattern matching
3. รัน manual review สำหรับ complex patterns
4. บันทึก inconsistencies ที่พบ

## Rules

### 1. Naming Conventions

- Variables: camelCase
- Functions: camelCase
- Classes: PascalCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case หรือ PascalCase (ตามภาษา)

### 2. Style Guidelines

- ใช้ formatter (Prettier, Biome, dprint)
- ใช้ linter (ESLint, Biome)
- ตั้งค่า rules ให้ strict
- ใช้ pre-commit hooks

### 3. Priority Levels

- Critical: ทำให้ code อ่านไม่รู้เรื่อง
- High: ทำให้ code สับสน
- Medium: ทำให้ code ไม่สวยงาม
- Low: เป็น nitpicks

## Expected Outcome

- Naming สม่ำเสมอทั่ว codebase
- Style สม่ำเสมอทั่ว codebase
- Structure สม่ำเสมอทั่ว codebase
- Documentation สม่ำเสมอ
- Patterns สม่ำเสมอ
