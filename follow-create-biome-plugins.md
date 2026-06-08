---
title: Follow Create Biome Plugins
description: สร้าง custom Biome linter plugins ด้วย GritQL
auto_execution_mode: 3
---

สร้าง custom Biome linter plugins ด้วย GritQL เพื่อเพิ่ม rules ที่เฉพาะทางสำหรับโปรเจกต์

## Goal

สร้าง custom Biome linter plugins ด้วย GritQL เพื่อเพิ่ม rules ที่เฉพาะทางสำหรับโปรเจกต์

## Execute

### 1. Setup

1. ตรวจสอบว่ามี Biome ติดตั้งแล้ว
2. ตรวจสอบว่ามี `biome.jsonc` อยู่แล้ว

### 2. Create Plugin File

1. สร้างไฟล์ `.grit` ที่ root ของโปรเจกต์
2. เขียน GritQL patterns สำหรับ custom rules
3. ใช้ `register_diagnostic()` เพื่อรายงาน diagnostics

### 3. Configure Plugin

1. เพิ่ม plugin path ใน `biome.jsonc` ผ่าน `plugins` array
2. ตรวจสอบว่า plugin ถูก load อย่างถูกต้อง

### 4. Verify

1. รัน `biome lint` เพื่อทดสอบ plugin
2. ตรวจสอบว่า custom rules ทำงานได้ถูกต้อง

## Rules

### 1. Plugin File

- ใช้นามสกุล `.grit` สำหรับ plugin files
- วางไฟล์ที่ root ของโปรเจกต์
- ใช้ GritQL syntax สำหรับ pattern matching

### 2. GritQL Patterns

- ใช้ `any` block สำหรับ multiple rules
- ใช้ `where` clause สำหรับ conditions
- ใช้ `register_diagnostic()` สำหรับรายงาน issues

### 3. register_diagnostic()

- span (required): syntax node ที่ต้องการ attach diagnostic
- message (required): message ที่จะแสดง
- severity (optional): hint, info, warn, error (default: error)

### 4. Target Languages

- JavaScript และ super languages เป็น default
- ต้องระบุ language อย่างชัดเจนสำหรับภาษาอื่น (เช่น CSS)
- ปัจจุบันรองรับ JavaScript และ CSS เท่านั้น

### 5. Configuration

- กำหนด plugin ผ่าน `plugins` array ใน `biome.jsonc`
- ใช้ relative path จาก root ของโปรเจกต์
- ตัวอย่าง: `["./custom-rules.grit"]`

### 6. GritQL Syntax Reference

- Code snippets: ใช้ backticks `` ` `` ครอบ code
- Metavariables: ใช้ `$` prefix เช่น `$message`, `$_`, `$...`
- Rewrites: ใช้ `=>` operator เช่น `` `console.log($msg)` => `console.warn($msg)` ``
- Conditions: `where`, `<:`, `and`, `or`, `!`, `if/else`, `=`, `+=`
- Pattern modifiers: `and`, `or`, `any`, `not`, `maybe`, `contains`, `within`, `after`, `before`, `some`, `every`, `as`
- AST nodes: ใช้ function call syntax เช่น `string()`, `call_expression()`
- Sequential: `sequential { pattern1, pattern2 }`
- Multifile: `multifile` สำหรับ match ข้ามไฟล์
- Functions: Define custom functions ด้วย `function`
- Primitives: strings, numbers, lists, maps
- Range: `range(start_line=1, end_line=3)`
- Bubble: Limit scope ของ metavariable
- Limit: `limit 10` จำกัดจำนวน matches
- Comments: ใช้ `//`

## Expected Outcome

- Plugin file `.grit` สร้างขึ้นที่ root
- GritQL patterns เขียนถูกต้อง
- Plugin กำหนดใน `biome.jsonc` อย่างถูกต้อง
- Custom rules ทำงานได้เมื่อรัน `biome lint`
