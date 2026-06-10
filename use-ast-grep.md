---
title: Use Ast-grep
description: ใช้งาน ast-grep สำหรับ code search, linting และ transformation ด้วย AST-based pattern matching
auto_execution_mode: 3
related_workflows:
  - /write-ast-grep-rules
  - /run-scan
---

## Goal

ใช้งาน ast-grep เพื่อค้นหา patterns ใน codebase อย่างมีประสิทธิภาพ ด้วย AST-based pattern matching

## Scope

ครอบคลุมการใช้งาน ast-grep สำหรับ code search, linting, และ transformation ด้วย AST-based pattern matching

## Execute

### 1. Prepare

1. ทำ `/write-windsurf-global-workflows` เมื่อสร้างหรือแก้ไข workflow
2. ติดตั้ง ast-grep CLI: `bun add -g @ast-grep/cli`
3. รัน `ast-grep new` สร้าง project scaffolding (ถ้ายังไม่มี)
4. สร้าง folder `rules/` สำหรับเก็บ rule files

### 2. Create Rule

1. สร้าง rule YAML file ใน `rules/`
2. กำหนด id, language, rule, fix, message
3. ใช้ meta variables ($VAR) สำหรับ capture nodes
4. ใช้ atomic rules: pattern, kind, regex, nthChild, range
5. ทำ `/write-ast-grep-rules` สำหรับเขียน rules ที่ซับซ้อน

### 3. Advanced Rules

1. ใช้ relational rules: inside, has, precedes, follows
2. ใช้ composite rules: all, any, not, matches
3. เขียน fix template สำหรับ auto-rewrite
4. ใช้ transform สำหรับ complex transformations

### 4. Test Rules

1. สร้าง test cases (valid และ invalid)
2. รัน `ast-grep test` เพื่อ verify rules
3. ใช้ snapshot testing สำหรับ complex fixes
4. รัน `ast-grep scan` เพื่อ test กับ codebase

### 5. Usage

1. ใช้ `ast-grep run -p 'pattern'` สำหรับ ad-hoc search
2. รัน `ast-grep scan --config sgconfig.yml` สำหรับ routine check
3. ใช้ `--interactive` สำหรับ selective apply
4. ตรวจสอบ output และ tune rules

## Rules

### 1. Rule Structure

โครงสร้างของ ast-grep rule:

- Rule เป็น YAML file ที่ define pattern สำหรับ match code
- ใช้ id, language, rule, fix, message fields
- Support multiple languages: JavaScript, TypeScript, Python, Rust, Go, Java, etc.
- เก็บ rules ใน folder `rules/` เท่านั้น

### 2. Pattern Matching

การ match patterns ด้วย AST:

- ใช้ `$META_VAR` สำหรับ capture nodes (e.g., `$FUNC`, `$NAME`)
- Pattern based on code syntax เช่น `console.log($ARG)`
- Support strictness level: smart, ast, cst, relaxed
- ใช้ kind สำหรับ match specific AST node types

### 3. Rule Categories

สามประเภทหลักของ ast-grep rules:

**Atomic Rules:**
- pattern, kind, regex, nthChild, range

**Relational Rules:**
- inside, has, precedes, follows

**Composite Rules:**
- all, any, not, matches

### 4. Meta Variables

การใช้ meta variables:

- ใช้ `$NAME` สำหรับ capture AST nodes
- Pattern ต้องเป็น valid code syntax
- Meta variables ใช้ใน fix template: `fix: console.warn($ARG)`

### 5. Rule Configuration

การตั้งค่า rule:

- id: unique identifier สำหรับ rule
- language: target programming language
- severity: error, warning, info, hint
- message: description ที่แสดงเมื่อ match
- fix: automatic rewrite pattern
- files/ignores: glob patterns สำหรับ include/exclude

### 6. Transform and Fix

การใช้ transform และ fix:

- ใช้ fix สำหรับ simple string replacement
- ใช้ transform สำหรับ complex transformations
- Support rewriters สำหรับ reusable transformation logic

### 7. Testing

การทดสอบ rules:

- ทุก rule ต้องมี valid และ invalid test cases
- ตรวจสอบว่า fix ไม่ทำให้ code เสีย
- ใช้ snapshot testing สำหรับ complex rewrites

### 8. Best Practices

แนวทางการเขียน rules:

- Atomic First: เริ่มจาก atomic rules (pattern, kind) ก่อน
- Compose Rules: ใช้ all, any, not สำหรับ combine multiple conditions
- Test Driven: เขียน test cases ก่อนเขียน rules
- Incremental: เริ่มจาก simple patterns แล้วค่อยเพิ่มความซับซ้อน
- Document: เขียน message ที่ชัดเจนสำหรับแต่ละ rule

## Expected Outcome

- ast-grep rules ที่ใช้งานได้จริง
- Code search ที่มีประสิทธิภาพด้วย AST-based matching
- Custom lint rules สำหรับ project
- Automatic code transformation และ refactoring

