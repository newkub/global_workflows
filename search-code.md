---
title: Search Code
description: ค้นหา code patterns, symbols และ references ใน codebase อย่างมีประสิทธิภาพ
auto_execution_mode: 3
---

## Goal

ค้นหา code patterns, symbols, references หรือ specific implementations ใน codebase อย่างมีประสิทธิภาพด้วย Windsurf tools

## Execute

### 1. Define Search Scope

ระบุ scope และ target ของการค้นหา

1. ระบุว่าต้องการค้นหา code pattern, symbol name, string literal หรือ reference
2. กำหนด scope ของการค้นหา (ทั้งโปรเจกต์, specific folder, หรือ file type)
3. ระบุ file types ที่เกี่ยวข้อง (เช่น ts, vue, rs)
4. กำหนด case sensitivity และ word boundaries

### 2. Choose Search Tool

เลือก tool ที่เหมาะสมกับการค้นหา

1. ใช้ `Grep` tool สำหรับ text search ทั่วไปใน code files
2. ใช้ `find_by_name` tool สำหรับค้นหาไฟล์ตามชื่อหรือ pattern
3. ใช้ `Grep` ด้วย multiline mode สำหรับ structural search
4. ใช้ `Grep` สำหรับค้นหาใน tracked files

### 3. Execute Text Search

ค้นหาด้วย Grep tool

1. ใช้ `pattern` และ `path` สำหรับ basic pattern search
2. ใช้ `type` parameter สำหรับ filter ตาม file type
3. ใช้ `output_mode: content` พร้อม `-A`, `-B`, `-C` สำหรับ context
4. ใช้ `case_sensitive: true` สำหรับ case sensitive search
5. ใช้ `glob` สำหรับ filter ตาม file pattern
6. ใช้ `head_limit` สำหรับ limit results

### 4. Execute Structural Search

ค้นหาด้วย Grep multiline mode

1. ใช้ `multiline: true` สำหรับ search patterns ข้ามหลายบรรทัด
2. ใช้ regex patterns ที่ซับซ้อนสำหรับ structural matching
3. ใช้ `-A`, `-B` สำหรับ context ใน multiline patterns
4. ใช้ `type` parameter สำหรับ filter ตาม language

### 5. Execute File Search

ค้นหาไฟล์ด้วย find_by_name

1. ใช้ `Pattern` สำหรับ find files ตาม name pattern
2. ใช้ `SearchDirectory` สำหรับ find ใน specific directory
3. ใช้ `Extensions` สำหรับ filter ตาม file extension
4. ใช้ `Type` สำหรับ filter ตาม file หรือ directory
5. ใช้ `MaxDepth` สำหรับ limit search depth

### 6. Analyze Results

วิเคราะห์และปรับปรุงผลลัพธ์

1. วิเคราะห์ผลลัพธ์เบื้องต้น
2. ปรับ search pattern ถ้า results มาก/น้อยเกินไป
3. ใช้ `head_limit` สำหรับ limiting results
4. Document findings และ patterns ที่พบ

### 7. Verify Results

ตรวจสอบและ cross-reference

1. ค้นหา related symbols หรือ dependencies
2. Verify ว่า found results ตรงกับ intent
3. Check ว่ามี false positives หรือไม่
4. สร้าง summary ของ findings

## Rules

### Tool Selection

เลือก tool ที่เหมาะสม

- ใช้ `Grep` tool สำหรับ general text search ใน code
- ใช้ `Grep` ด้วย multiline mode สำหรับ structural search
- ใช้ `find_by_name` tool สำหรับ file discovery ไม่ใช่ content search
- ใช้ `Grep` เมื่อต้องการ search เฉพาะ tracked files
- ไม่ใช้ external CLI tools (ripgrep, fd, ast-grep) เพราะ Windsurf tools รองรับ

### Search Patterns

ใช้ search patterns อย่างมีประสิทธิภาพ

- ใช้ specific terms ลดผลลัพธ์ที่ไม่เกี่ยวข้อง
- ใช้ regex เฉพาะเมื่อจำเป็น - literal search เร็วกว่า
- ใช้ word boundaries ใน regex เพื่อหลีกเลี่ยง partial matches
- ใช้ `case_sensitive: true` เป็นค่า default (ใช้ false เมื่อจำเป็น)
- Limit scope ด้วย `type`, `glob`, หรือ `path` เพื่อลด noise

### Performance Optimization

ปรับปรุง performance ของการค้นหา

- ใช้ `type` parameter กำหนด file types แทน post-filter
- ใช้ `glob` สำหรับ file pattern filtering
- ใช้ `head_limit` สำหรับ limiting results ใน proof-of-concept
- ใช้ `output_mode: files_with_matches` สำหรับ fast search

### Result Quality

รักษาคุณภาพของผลลัพธ์

- ตรวจสอบ context ด้วย `-A` (after), `-B` (before), `-C` (context)
- ใช้ `output_mode: content` สำหรับดู full results
- Document assumptions และ limitations ของ search
- Verify ผลลัพธ์ด้วย manual check อย่างน้อย 3-5 results

## Expected Outcome

- Found code patterns หรือ symbols ที่ต้องการ
- Organized search results พร้อม context
- Documented search queries และ findings
- Identified relationships และ dependencies
- Actionable insights สำหรับ next steps

