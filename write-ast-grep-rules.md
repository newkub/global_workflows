---
title: Write Ast-grep Rules
description: เขียน ast-grep rules สำหรับ AST-based code search, linting และ transformation
auto_execution_mode: 3
related_workflows:
  - /follow-create-validators
---

## Goal

เขียน ast-grep rules สำหรับ code search, linting และ transformation ด้วย AST-based pattern matching

## Scope

ครอบคลุม atomic rules, relational rules, composite rules, constraints, utils, transform และ fix

## Execute

### 1. Setup Project

1. ติดตั้ง ast-grep CLI: `npm install -g @ast-grep/cli`
2. รัน `ast-grep new` สร้าง project scaffolding
3. สร้าง rule directory structure (rules/, tests/, snapshots/)
4. สร้าง sgconfig.yml พร้อม configuration

### 2. เขียน Atomic Rules

1. เขียน rule YAML พร้อม id, language, rule
2. ใช้ pattern ด้วย meta variables ($VAR)
3. ใช้ atomic rules: pattern, kind, regex, nthChild, range
4. เพิ่ม severity และ message

### 3. เขียน Relational Rules

1. ใช้ inside สำหรับ match nodes ภายใน context
2. ใช้ has สำหรับ match descendants
3. ใช้ precedes และ follows สำหรับ positional matching
4. ทำ `/follow-create-validators` เพื่อแปลงกฎจาก AGENTS.md

### 4. เขียน Composite Rules

1. ใช้ all สำหรับ match ทุก sub-rules
2. ใช้ any สำหรับ match บาง sub-rules
3. ใช้ not สำหรับ negate patterns
4. ใช้ matches สำหรับ reference utility rules

### 5. เพิ่ม Constraints และ Utils

1. ใช้ constraints สำหรับ filter matches
2. ใช้ utils สำหรับ define reusable rules
3. ใช้ transform สำหรับ meta-variable manipulation
4. เขียน fix template สำหรับ auto-rewrite

### 6. Test Rules

1. สร้าง test cases (valid และ invalid)
2. รัน `ast-grep test` เพื่อ verify rules
3. ใช้ snapshot testing สำหรับ complex fixes
4. รัน `ast-grep scan` เพื่อ test กับ codebase

### 7. Integrate กับ CI/CD

1. Publish rules หรือ integrate ใน CI/CD
2. สร้าง documentation สำหรับ rule usage
3. Config languageGlobs สำหรับ custom file extensions

## Rules

### 1. Rule Structure

Rule เป็น YAML file ที่ define pattern สำหรับ match code:
- id: unique identifier
- language: target programming language
- rule: pattern matching logic
- fix: automatic rewrite pattern
- message: description เมื่อ match
- severity: error, warning, info, hint

### 2. Atomic Rules

ใช้สำหรับ match basic AST nodes:
- pattern: code pattern ด้วย meta variables
- kind: match ตาม AST node type
- regex: match ด้วย regular expression
- nthChild: match ตาม position ใน siblings
- range: match ตาม line range

### 3. Relational Rules

ใช้สำหรับ match ตาม positional relationships:
- inside: node ต้องอยู่ภายใน another node
- has: node ต้องมี descendant ที่ match
- precedes: node ต้องอยู่ก่อน another node
- follows: node ต้องอยู่หลัง another node

### 4. Composite Rules

ใช้สำหรับ combine rules:
- all: match ถ้าทุก sub-rules match
- any: match ถ้าบาง sub-rules match
- not: match ถ้า sub-rule ไม่ match
- matches: reference utility rule โดย ID

### 5. Meta Variables

ใช้ `$NAME` สำหรับ capture AST nodes:
- Pattern ต้องเป็น valid code syntax
- Meta variables ใช้ใน fix template
- Support constraints สำหรับ additional filtering
- Support transform สำหรับ manipulation

### 6. Constraints และ Utils

- constraints: filter matches ตาม meta-variable patterns
- utils: define reusable rules สำหรับ matches reference
- transform: create new variables จาก transformations

### 7. Fix และ Transform

- fix: simple string replacement pattern
- transform: complex transformations ด้วย dictionary
- Support rewriters สำหรับ reusable logic
- Meta variables จาก rule ใช้ใน fix

### 8. Testing

- ทุก rule ต้องมี valid และ invalid test cases
- ตรวจสอบว่า fix ไม่ทำให้ code เสีย
- ใช้ snapshot testing สำหรับ complex rewrites

## Expected Outcome

- ast-grep project ตั้งค่าอย่างถูกต้อง
- Rule YAML files สร้างขึ้นพร้อม pattern, fix, message
- Test cases ครอบคลุม valid และ invalid scenarios
- Rules จาก AGENTS.md แปลงเป็น ast-grep format
- Custom lint rules ทำงานได้เมื่อรัน `ast-grep scan`

## Common Mistakes

- ไม่กำหนด language field
- ใช้ pattern ที่ไม่ valid syntax
- ไม่ test rules กับ code จริง
- ใช้ fix ที่อาจทำให้ code เสีย
- ไม่ใช้ constraints ลด false positives

## Examples

### Atomic Rule

```yaml
id: no-console-log
language: typescript
rule:
  pattern: console.log($ARG)
message: "Use console.warn or console.error instead"
```

### Relational Rule

```yaml
id: no-await-in-loop
language: typescript
rule:
  pattern: await $EXPR
  inside:
    kind: for_statement
message: "Don't use await inside for loop"
```

### Composite Rule

```yaml
id: no-mock-without-comment
language: typescript
rule:
  all:
    - pattern: mock($$$)
    - not:
        has:
          pattern: '// MOCK'
message: "Mock must be marked with // MOCK comment"
```

### Rule with Fix

```yaml
id: prefer-const
language: typescript
rule:
  pattern: let $VAR = $INIT
  fix: const $VAR = $INIT
message: "Use const instead of let"
```

## CLI Reference

```bash
# Search pattern
ast-grep run -p 'console.log($ARG)'

# Search and rewrite
ast-grep run -p 'console.log($ARG)' -r 'console.warn($ARG)'

# Scan with rules
ast-grep scan --config sgconfig.yml

# Test rules
ast-grep test --config sgconfig.yml

# Interactive mode
ast-grep scan --interactive
```

## Tools

- ast-grep CLI - Main tool for running rules
- ast-grep playground - Test patterns online
- ast-grep LSP - Editor integration

## References

- [ast-grep Documentation](https://ast-grep.github.io/)
- [Rule Essentials](https://ast-grep.github.io/guide/rule-config.html)
- [Pattern Syntax](https://ast-grep.github.io/guide/pattern-syntax.html)
