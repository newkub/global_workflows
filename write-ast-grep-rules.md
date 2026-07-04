---
title: Write Ast-grep Rules
description: เขียน ast-grep rules ตามไฟล์ที่มีใน .devin/rules
auto_execution_mode: 3
url: https://ast-grep.github.io/guide/rule-config.html
related_workflows:
  - /update-devin-rules
  - /follow-ast-grep
---

## Goal

เขียน ast-grep rules ตามไฟล์ที่มีใน .devin/rules

## Scope

เขียน ast-grep rules สำหรับไฟล์ที่มีใน .devin/rules (always-on/, model_decision/, glob/)

## Execute

### 1. Analyze Devin Rules

วิเคราะห์ไฟล์ที่มีใน .devin/rules

- อ่านไฟล์ทั้งหมดจาก `.devin/rules/always-on/`, `.devin/rules/model_decision/`, `.devin/rules/glob/`
- ระบุ rules ที่สามารถแปลงเป็น ast-grep format
- จัดกลุ่ม rules ตาม priority และความซับซ้อน

### 2. Setup Ast-Grep Project

ตั้งค่า ast-grep project

- สร้าง `rules/` directory ที่ root workspace (ไม่ใช่ใน `.devin/rules/`)
- สร้าง subdirectories ตามหมวดหมู่: `always-on/`, `model_decision/`, `glob/`
- อัพเดท `sgconfig.yml` ให้ชี้ไปที่ `rules/` directories
- **สำคัญ:** `.devin/rules/` สำหรับ devin rules (Markdown สำหรับ AI), `rules/` สำหรับ ast-grep rules (YAML สำหรับ CLI)

### 3. Convert Rules To Ast-Grep Format

แปลง devin rules เป็น ast-grep YAML

- ทำตาม `/follow-ast-grep` สำหรับการแปลง rules
- แปลง atomic rules (pattern, kind, regex, nthChild, range)
- แปลง relational rules (inside, has, precedes, follows)
- แปลง composite rules (all, any, not, matches)
- ตรวจสอบว่า rule มีอย่างน้อย 1 key และเป็น positive rule
- เพิ่ม severity และ message สำหรับแต่ละ rule
- เพิ่ม fix template สำหรับ auto-rewrite

### 4. Test Ast-Grep Rules

ทดสอบ ast-grep rules

- สร้าง test cases (valid และ invalid)
- รัน `ast-grep test` เพื่อ verify rules
- รัน `ast-grep scan` เพื่อ test กับ codebase
- ตรวจสอบว่า fix ไม่ทำให้ code เสีย

### 5. Integrate With Development (Optional)

ผสาน ast-grep rules เข้า development workflow

- เพิ่ม ast-grep scan ใน pre-commit hooks
- รวมใน CI/CD pipeline
- สร้าง documentation สำหรับ team
- ตั้งค่า IDE integration ด้วย LSP

## Rules

### 1. Rule Analysis

กฎการวิเคราะห์:

- วิเคราะห์ devin rules ก่อนแปลง
- ระบุ rules ที่สามารถแปลงเป็น ast-grep format
- จัดกลุ่ม rules ตาม priority และความซับซ้อน

### 2. Ast-Grep Setup

กฎการตั้งค่า:

- สร้าง `rules/` directory แยกจาก `.devin/rules/`
- อัพเดท `sgconfig.yml` ให้ชี้ไปที่ `rules/` directories
- **สำคัญ:** `.devin/rules/` สำหรับ devin rules (Markdown สำหรับ AI), `rules/` สำหรับ ast-grep rules (YAML สำหรับ CLI)

### 3. Rule Conversion

กฎการแปลง:

- Rules ต้องสอดคล้องกับ target language
- Rule ต้องมีอย่างน้อย 1 key และเป็น positive rule
- Atomic rules: pattern, kind, regex, nthChild, range
- Relational rules: inside, has, precedes, follows
- Composite rules: all, any, not, matches
- ใช้ meta variables ($VAR) สำหรับ capture AST nodes
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
- Devin rules แปลงเป็น ast-grep format
- Test cases ครอบคลุม valid และ invalid scenarios
- Rules ทำงานได้เมื่อรัน `ast-grep scan`
- Integration กับ development workflow (optional)

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่ระบุ `language` ใน rule configuration
- ใช้ `pattern` ที่ match หลาย AST nodes โดยไม่ใช้ `kind` ร่วม
- ใช้ `regex` โดยไม่ระบุ `kind` หรือ `pattern` (regex ไม่ใช่ positive rule)
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

