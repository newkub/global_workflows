---
title: Improve Naming
description: ปรับปรุง naming conventions ให้ชัดเจนและสม่ำเสมอทั่ว codebase
auto_execution_mode: 3
related_workflows:
  - /follow-code-quality
  - /refactor-workspace
---

## Goal

ปรับปรุง naming conventions ให้ชัดเจน สม่ำเสมอ และอ่านง่ายทั่ว codebase

## Scope

ใช้สำหรับปรับปรุง naming ของ files, functions, variables, types, components ทั้งหมด

## Execute

### 1. Analyze Current Naming

วิเคราะห์ naming conventions ปัจจุบัน

1. สำรวจ naming patterns ทั่ว codebase
2. ระบุ inconsistencies ใน naming
3. ตรวจสอบ naming conventions ตามภาษาที่ใช้
4. ค้นหา abbreviations ที่ไม่ชัดเจน
5. ตรวจสอบชื่อที่ไม่สื่อความหมาย

### 2. Apply Universal Principles

ใช้หลักการทั่วไปที่ใช้ได้กับทุกภาษา

1. ชื่อบอก purpose ชัดเจน (what it does, not how)
2. ใช้ domain language ที่ถูกต้อง
3. หลีกเลี่ยง abbreviations ยกเว้นที่รู้จักกันดี
4. ตั้งชื่อตาม business concepts
5. รักษา consistency ทั้ง codebase
6. ชื่อสั้นแต่ชัดเจน
7. ใช้คำเชิงบวก (is_valid) ไม่ใช่เชิงลบ

### 3. Apply Language-Specific Conventions

ใช้ conventions ตามภาษาที่ใช้

1. ทำตาม style guide ของภาษา
2. ทำตาม conventions ของ community
3. ใช้ linter ที่เหมาะสม

### 4. Rename Files

ปรับปรุง naming ของ files

1. ทำ `/follow-rename` สำหรับ rename ไฟล์
2. ใช้ conventions ตาม file type:
   - Vue components: `PascalCase.vue`
   - TypeScript files: `kebab-case.ts`
   - Composables: `use-kebab-case.ts`
3. อัปเดท references ทั้งหมด

### 5. Rename Code Elements

ปรับปรุง naming ของ code elements

1. Types: `PascalCase`, `IPascalCase`, `PascalCaseType`
2. Constants: `UPPER_SNAKE_CASE` (global), `camelCase` (local)
3. Errors: `PascalCaseError`, `PascalCaseException`, `UPPER_SNAKE_CASE`
4. Functions: `camelCase` (verb), `useCamelCase`, `handleCamelCase`, `isCamelCase`, `onCamelCase`
5. Components: `PascalCase`, `BasePascalCase`, `PascalCaseUI`, `PascalCaseLayout`
6. Variables: `camelCase`, `_camelCase`, `$camelCase`, `camelCaseList`

### 6. Validate Changes

ตรวจสอบการเปลี่ยนแปลง

1. รัน typecheck เพื่อตรวจสอบ
2. รัน lint เพื่อตรวจสอบ
3. รัน tests เพื่อตรวจสอบ
4. ตรวจสอบ consistency ทั่ว codebase

## Rules

### 1. Universal Naming Principles

หลักการทั่วไปที่ใช้ได้กับทุกภาษา

- ชื่อบอก purpose ชัดเจน (what it does, not how)
- ใช้ domain language ที่ถูกต้อง
- หลีกเลี่ยง abbreviations ยกเว้นที่รู้จักกันดี
- ตั้งชื่อตาม business concepts
- รักษา consistency ทั้ง codebase
- ชื่อสั้นแต่ชัดเจน
- ใช้คำเชิงบวก (is_valid) ไม่ใช่เชิงลบ

### 2. Language-Specific Conventions

ใช้ conventions ตามภาษาที่ใช้

- ทำตาม style guide ของภาษา
- ทำตาม conventions ของ community
- ใช้ linter ที่เหมาะสม

### 3. Naming Conventions

รวม naming conventions ทั้งหมด

- File: `PascalCase.vue`, `kebab-case.ts`, `use-kebab-case.ts`
- Type: `PascalCase`, `IPascalCase`, `PascalCaseType`
- Constant: `UPPER_SNAKE_CASE` (global), `camelCase` (local)
- Error: `PascalCaseError`, `PascalCaseException`, `UPPER_SNAKE_CASE`
- Function: `camelCase` (verb), `useCamelCase`, `handleCamelCase`, `isCamelCase`, `onCamelCase`
- Component: `PascalCase`, `BasePascalCase`, `PascalCaseUI`, `PascalCaseLayout`
- Variable: `camelCase`, `_camelCase`, `$camelCase`, `camelCaseList`

## Expected Outcome

- Naming conventions สม่ำเสมอทั่ว codebase
- ชื่อที่ชัดเจนและอ่านง่าย
- Consistency ตามภาษาและ conventions
- ไม่มี abbreviations ที่สับสน
- Domain language ที่ถูกต้อง
- Typecheck ผ่าน
- Lint ผ่าน
- Tests ผ่าน
