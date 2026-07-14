---
title: Update Ast-grep Rules
description: อัปเดต ast-grep rules ตามไฟล์ที่มีใน .devin/rules ให้ครอบคลุมและถูกต้อง
auto_execution_mode: 3
url: https://ast-grep.github.io/guide/rule-config.html
related:
  - /follow-ast-grep
  - /deep-research
  - /follow-best-practice
  - /write-global-workflows
  - /validate-ast-grep-rules
---

## Goal

เขียน ast-grep rules ที่ครอบคลุมและถูกต้องตาม `.devin/rules` และ official documentation

## Scope

เขียน ast-grep rules สำหรับไฟล์ที่มีใน `.devin/rules` (`always-on/`, `model_decision/`, `glob/`) ครอบคลุม atomic, relational, และ composite rules โดยสร้าง ast-grep rules ใน `rules/` directory ที่ project root (แยกจาก `.devin/rules/`)

## Execute

### 1. Analyze Devin Rules

1. อ่านไฟล์ทั้งหมดจาก `.devin/rules/always-on/`, `.devin/rules/model_decision/`, `.devin/rules/glob/`
2. ระบุ rules ที่สามารถแปลงเป็น ast-grep format ได้
3. จัดกลุ่ม rules ตาม priority และความซับซ้อน
4. แยก rules ที่เป็น code patterns จาก rules ที่เป็น configuration หรือ process guidelines

### 2. Setup Ast-Grep Project

1. ทำ `/follow-ast-grep` สำหรับการตั้งค่า `sgconfig.yml` และ project structure
2. สร้าง ast-grep rules ใน `rules/always-on/`, `rules/model_decision/`, และ `rules/glob/` ที่ project root
3. ตั้งค่า `sgconfig.yml` ให้ `ruleDirs` ชี้ไปที่ทั้ง 3 directories
4. ตั้งค่า `sgconfig.yml` `languageAliases` สำหรับ `ts`, `tsx` เป็น `TypeScript` และ `js`, `jsx` เป็น `JavaScript`
5. ตั้งค่า `sgconfig.yml` `devPaths` สำหรับ source directories ของแต่ละ workspace
6. เพิ่ม `testConfigs` ใน `sgconfig.yml` สำหรับ test rules ใน `rule-tests/`

### 3. Convert Rules To Ast-Grep Format

1. ทำตาม `/follow-ast-grep` สำหรับ rule structure และ pattern syntax
2. แปลง atomic rules ตาม ## Rules ข้อ 3
3. แปลง relational rules ตาม ## Rules ข้อ 4
4. แปลง composite rules ตาม ## Rules ข้อ 5
5. ใช้ `$ARG` สำหรับ single meta variable, `$$$ARGS` สำหรับ multiple
6. เพิ่ม `severity`, `message`, และ `note` สำหรับแต่ละ rule
7. เพิ่ม `files` และ `ignores` สำหรับ scope การ match
8. เพิ่ม `constraints` สำหรับ filter meta variables เพิ่มเติม
9. เพิ่ม `fix` template สำหรับ auto-rewrite ถ้าเป็นไปได้อย่างปลอดภัย
10. ใช้ `utils` สำหรับ reusable utility rules ถ้าต้องการซ้ำซ้อน
11. เขียน comment ในแต่ละ .yml file อธิบายสิ่งที่ rule ตรวจสอบ, เหตุผล, และตัวอย่าง

### 4. Validate Rules

ทำ `/validate-ast-grep-rules` เพื่อตรวจสอบ rules ครบทุก dimension: parse, false positives, false negatives, fix safety, และ test suite

### 5. Integrate With Development

1. ทำ `/follow-ast-grep` สำหรับการเพิ่ม `scan` script และ CLI usage
2. เพิ่ม `scan` script ใน `package.json`: `"scan": "bunx ast-grep scan"`
3. รวม `ast-grep scan` ใน CI/CD pipeline ได้
4. ตั้งค่า IDE integration ด้วย LSP ได้
5. ถ้าเป็น monorepo ให้เพิ่ม `scan` script ในแต่ละ workspace `package.json`

## Rules

### 1. Rule Analysis

- วิเคราะห์ devin rules ก่อนแปลงเสมอ
- แยก rules ที่เป็น code patterns จาก process guidelines
- ไม่ใช่ devin rule ทุกข้อสามารถแปลงเป็น ast-grep ได้
- จัดกลุ่มตาม priority: `error` > `warning` > `info`

### 2. Ast-Grep Setup

- ทำ `/follow-ast-grep` สำหรับ setup ทั้งหมด
- `rules/` สำหรับ ast-grep rules (YAML) ที่ project root แยกจาก `.devin/rules/` ที่เก็บ devin rules (Markdown)
- rule files ใช้ `kebab-case` filename

### 3. Atomic Rules

- `pattern`: ใช้ code snippet พร้อม meta variables เช่น `console.log($$$ARGS)`
- `pattern` รับ Object ที่มี `context`, `selector`, `strictness` สำหรับ matching ที่ซับซ้อน
- `strictness` มี: `cst`, `smart`, `ast`, `relaxed`, `signature`
- `kind`: ใช้ AST node type name เช่น `call_expression`, `type_annotation`
- `kind` รองรับ ESquery syntax ตั้งแต่ ast-grep 0.39+ เช่น `call_expression > identifier`
- `regex`: ใช้ Rust regex บน source text ต้อง match ทั้ง text ของ node
- `regex` ไม่ใช่ positive rule ใช้กับ `kind` หรือ `pattern` เสมอ
- ใช้ `kind` ร่วมกับ `pattern` เพื่อ match ให้แม่นยำ

### 4. Relational Rules

- `inside`: target node ต้องอยู่ภายใน node ที่ match sub-rule
- `has`: target node ต้องมี descendant node ที่ match sub-rule
- `precedes`: target node ต้องอยู่ก่อน node ที่ match sub-rule
- `follows`: target node ต้องอยู่หลัง node ที่ match sub-rule
- `stopBy`: ควบคุมการหยุด search (`neighbor`, `end`, หรือ Rule object)
- `field`: ระบุ sub-node ใน target (ใช้กับ `inside` และ `has` เท่านั้น)
- `precedes` และ `follows` ไม่มี `field` option

### 5. Composite Rules

- `all`: ต้อง match ทุก sub-rules, meta variables รวมจากทุก sub-rules
- `any`: match อย่างน้อย 1 sub-rule, meta variables เฉพาะ sub-rule ที่ match
- `not`: match ถ้า sub-rule ไม่ match
- `matches`: ใช้ utility rule id ผ่าน `utils`
- `all`/`any`/`not` ใช้กับ rules ไม่ใช่ nodes จะไม่ match หลาย nodes พร้อมกัน
- rule object เป็น unordered `all` โดยปริยาย ถ้าไม่ได้ผลให้ใช้ `all` เพื่อระบุ order

### 6. Meta Variables And Constraints

- `$ARG`: จับ single node
- `$$$ARGS`: จับ multiple nodes
- `constraints`: filter หลัง match `rule` แล้ว ใช้กับ `$ARG` (single) เท่านั้น
- `constraints` ไม่รองรับ `$$$ARGS` (multiple)
- `constraints` ใช้กับ `not` ได้ยาก ควรหลีกเลี่ยง

### 7. Utility Rules And Fix

- `utils`: dictionary ของ local utility rules สำหรับ reuse ใน rule file
- `matches`: ใช้ utility rule id จาก `utils` หรือ `utilDirs`
- `fix`: pattern สำหรับ auto-rewrite ต้อง safe ไม่ทำให้ code เสีย
- ใช้ `--interactive` เพื่อตรวจสอบ `fix` ก่อน apply
- ใช้ `--update-all` เพื่อ apply ทุก rewrites

### 8. Globbing And Scope

- `files`: glob patterns สำหรับระบุไฟล์ที่ rule ใช้
- `ignores`: glob patterns สำหรับยกเว้นไฟล์
- `ignores` ตรวจสอบก่อน `files` เสมอ
- paths ใน `files` และ `ignores` เป็น relative ของ `sgconfig.yml` directory
- ไม่ใช้ `./` นำหน้า paths

### 9. Testing And Verification

- รัน `bunx ast-grep scan --inspect summary` ก่อนเพื่อตรวจสอบ parse
- รัน `bun run scan` เพื่อ test กับ codebase จริง
- ตรวจสอบ false positives และปรับ `ignores` หรือ `constraints`
- ตรวจสอบ false negatives และปรับ `pattern` หรือเพิ่ม `any` patterns
- ถ้ามี `testConfigs` รัน `bunx ast-grep test`
- ใช้ `bunx ast-grep scan --filter 'RULE_ID'` เพื่อ test rule เฉพาะ

### 10. Common Mistakes

- ใช้ `pattern` ที่ match หลาย AST nodes โดยไม่ใช้ `kind` ร่วม
- ใช้ `$$$ARGS` ใน `constraints` ซึ่งไม่รองรับ
- จับ framework utilities เป็น violations เช่น `sql` template tag ของ Drizzle
- ไม่ ignore test files สำหรับ rules ที่ match test patterns
- สร้าง rules ที่ซับซ้อนเกินไปโดยไม่จำเป็น
- ใช้ `regex` โดยไม่ระบุ `kind` หรือ `pattern`
- ลืมว่า rule object เป็น unordered ทำให้ `has`/`inside` ไม่ได้ผลตามที่คาด
- ไม่ทดสอบ `fix` กับ `--interactive` ก่อน apply
- ลืมระบุ `files` สำหรับ rules ที่ใช้เฉพาะ workspace ใน monorepo
- ลืมเพิ่ม `rules/glob/` ใน `sgconfig.yml` `ruleDirs`
- ลืมตั้งค่า `languageAliases` ทำให้ `.tsx` ไม่ถูก scan
- ลืมตั้งค่า `devPaths` ทำให้ scan ช้าหรือ scan ไฟล์ไม่จำเป็น
- ใช้ `./` นำหน้า paths ใน `files` และ `ignores` ซึ่งไม่ถูกต้อง
- สร้าง rule ที่ match เกินไป (false positives) โดยไม่ใช้ `constraints` หรือ `all`
- ไม่เขียน comment อธิบาย rule ที่ด้านบนของไฟล์
- ใช้ `severity: error` สำหรับ rules ที่ควรเป็น `warning` หรือ `info`

### 11. Monorepo-Specific Guidelines

- ถ้าเป็น monorepo ให้สร้าง ast-grep rules ที่ project root `rules/` directory เท่านั้น
- ใช้ `files` field เพื่อจำกัด rule ให้ทำงานเฉพาะ workspace ที่กำหนด
- ระบุ `devPaths` ใน `sgconfig.yml` สำหรับ source directories ของแต่ละ workspace
- อย่าสร้าง `rules/` directory แยกในแต่ละ workspace - ใช้ `files` field แทน
- ตรวจสอบว่า rules ไม่ match ข้าม workspace boundaries โดยไม่ตั้งใจ
- สำหรับ rules ที่ใช้กับทุก workspace ไม่ต้องระบุ `files` field

## Expected Outcome

- `sgconfig.yml` ตั้งค่า `ruleDirs` ครบทั้ง 3 directories: `rules/always-on`, `rules/model_decision`, `rules/glob`
- `sgconfig.yml` มี `languageAliases` สำหรับ `ts`, `tsx`, `js`, `jsx`
- `sgconfig.yml` มี `devPaths` สำหรับ source directories ของแต่ละ workspace
- Devin rules แปลงเป็น ast-grep YAML format สำเร็จ ครอบคลุม atomic, relational, composite
- `bunx ast-grep scan --inspect summary` แสดง rules ทั้งหมด effective
- `bun run scan` ทำงานได้และ report ผลลัพธ์
- False positives ถูกปรับด้วย `ignores` และ `constraints`
- False negatives ถูกปรับด้วย `pattern` และ `any`
- `fix` templates ทำงานได้โดยไม่ทำให้ code เสีย
- แต่ละ rule มี comment อธิบายที่ด้านบนของไฟล์
- Monorepo rules ใช้ `files` field จำกัด scope อย่างถูกต้อง

