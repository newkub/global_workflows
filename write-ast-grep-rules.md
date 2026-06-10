---
title: Write Ast-grep Rules
description: เขียน ast-grep rules ตามไฟล์ที่มีใน .windsurf/rules
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-rules
---

## Goal

เขียน ast-grep rules ตามไฟล์ที่มีใน .windsurf/rules

## Scope

เขียน ast-grep rules สำหรับไฟล์ที่มีใน .windsurf/rules (away/, libraries/, domain/, patterns/, project/)

## Execute

### 1. Analyze Windsurf Rules

วิเคราะห์ไฟล์ที่มีใน .windsurf/rules

1. อ่านไฟล์ทั้งหมดจาก `.windsurf/rules/away/`, `.windsurf/rules/libraries/`, `.windsurf/rules/domain/`, `.windsurf/rules/patterns/`, `.windsurf/rules/project/`
2. ระบุ rules ที่สามารถแปลงเป็น ast-grep format
3. จัดกลุ่ม rules ตาม priority และความซับซ้อน

### 2. Setup Ast-Grep Project

ตั้งค่า ast-grep project

1. สร้าง `rules/` directory ที่ root workspace (ไม่ใช่ใน `.windsurf/rules/`)
2. สร้าง subdirectories ตามหมวดหมู่: `away/`, `libraries/`, `domain/`, `patterns/`, `project/`
3. อัพเดท `sgconfig.yml` ให้ชี้ไปที่ `rules/` directories
4. **สำคัญ:** `.windsurf/rules/` สำหรับ windsurf rules (Markdown สำหรับ AI), `rules/` สำหรับ ast-grep rules (YAML สำหรับ CLI)

### 3. Convert Rules To Ast-Grep Format

แปลง windsurf rules เป็น ast-grep YAML

1. แปลง atomic rules:
   - `pattern`: match โครงสร้าง code (เช่น `console.log($ARG)`)
   - `kind`: match โดย AST node kind (เช่น `if_statement`)
   - `regex`: match ด้วย Rust regex (เช่น `^regex.+$`)
   - `nthChild`: match โดย index ใน siblings
   - `range`: match โดย character span
   - `context` + `selector`: parse ambiguous patterns
2. แปลง relational rules:
   - `inside`: target ต้องอยู่ใน parent/ancestor
   - `has`: target ต้องมี child/descendant
   - `precedes`: target ต้องอยู่ก่อน node อื่น
   - `follows`: target ต้องอยู่หลัง node อื่น
   - `field`: match โดย semantic role
   - `stopBy`: search จนถึง end
3. แปลง composite rules:
   - `all`: target ต้อง satisfy ทุก rules
   - `any`: target ต้อง satisfy อย่างน้อย 1 rule
   - `not`: target ต้องไม่ satisfy rule
   - `matches`: match โดย utility rule
4. เพิ่ม severity และ message สำหรับแต่ละ rule
5. เพิ่ม fix template สำหรับ auto-rewrite

### 4. Test Ast-Grep Rules

ทดสอบ ast-grep rules

1. สร้าง test cases (valid และ invalid)
2. รัน `ast-grep test` เพื่อ verify rules
3. รัน `ast-grep scan` เพื่อ test กับ codebase
4. ตรวจสอบว่า fix ไม่ทำให้ code เสีย

### 5. Integrate With Development (Optional)

ผสาน ast-grep rules เข้า development workflow

1. เพิ่ม ast-grep scan ใน pre-commit hooks
2. รวมใน CI/CD pipeline
3. สร้าง documentation สำหรับ team
4. ตั้งค่า IDE integration ด้วย LSP

## Rules

### 1. Rule Analysis

กฎการวิเคราะห์:

- วิเคราะห์ windsurf rules ก่อนแปลง
- ระบุ rules ที่สามารถแปลงเป็น ast-grep format
- จัดกลุ่ม rules ตาม priority และความซับซ้อน

### 2. Ast-Grep Setup

กฎการตั้งค่า:

- สร้าง `rules/` directory แยกจาก `.windsurf/rules/`
- อัพเดท `sgconfig.yml` ให้ชี้ไปที่ `rules/` directories
- **สำคัญ:** `.windsurf/rules/` สำหรับ windsurf rules (Markdown สำหรับ AI), `rules/` สำหรับ ast-grep rules (YAML สำหรับ CLI)

### 3. Rule Conversion

กฎการแปลง:

- Rules ต้องสอดคล้องกับ target language
- ใช้ meta variables ($VAR) สำหรับ capture AST nodes
- ใช้ constraints ลด false positives
- Fix templates ต้อง safe ไม่ทำให้ code เสีย
- Rules เปรียบเสมือ CSS selectors สำหรับ AST nodes

### 4. Testing

กฎการทดสอบ:

- ทุก rule ต้องมี test cases
- รัน `ast-grep test` เพื่อ verify rules
- รัน `ast-grep scan` เพื่อ test กับ codebase
- ตรวจสอบว่า fix ไม่ทำให้ code เสีย

## Expected Outcome

- Ast-grep project ตั้งค่าอย่างถูกต้อง
- Windsurf rules แปลงเป็น ast-grep format
- Test cases ครอบคลุม valid และ invalid scenarios
- Rules ทำงานได้เมื่อรัน `ast-grep scan`
- Integration กับ development workflow (optional)

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่ระบุ `language` ใน rule configuration
- ใช้ `pattern` ที่ match หลาย AST nodes โดยไม่ใช้ `kind` ร่วม
- ใช้ `regex` โดยไม่ระบุ `kind` หรือ `pattern`
- ไม่ใช้ meta variables ($VAR) สำหรับ capture
- Fix templates ไม่ safe ทำให้ code เสีย
- ไม่ทดสอบ rules กับ codebase จริง

## Anti-Patterns

รูปแบบที่ควรหลีกเลี่ยง:

- ❌ สร้าง rules ที่ซับซ้อนเกินไปโดยไม่จำเป็น
- ❌ ไม่ใช้ `all`, `any`, `not` สำหรับ combine rules
- ❌ ไม่ใช้ `inside`, `has` สำหรับ structural matching
- ❌ ไม่เพิ่ม test cases สำหรับ rules
- ❌ ไม่รัน `ast-grep test` ก่อนใช้ใน production

