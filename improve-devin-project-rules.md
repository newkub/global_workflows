---
title: Improve Devin Project Rules
description: ปรับปรุง devin project rules ด้วย deep analyze และ minimal changes
auto_execution_mode: 3
related_workflows:
  - /follow-deep-analyze
  - /write-devin-project-rules
  - /write-ast-grep-rules
  - /dont-over-engineer
  - /simplify-content
  - /follow-content-quality
  - /write-windsurf-global-workflows
---

## Goal

ปรับปรุง devin rules ด้วยการวิเคราะห์อย่างละเอียดและทำการเปลี่ยนแปลงแบบ minimal

## Scope

ใช้สำหรับปรับปรุง devin rules ใน project workspace ด้วย deep analysis และ minimal changes

## Execute

### 1. Deep Analyze Rules

วิเคราะห์ `devin rules` อย่างละเอียด

1. ทำ `/follow-deep-analyze` เพื่อวิเคราะห์ `project` และ `rules` ทั้งหมด
2. อ่านไฟล์ทั้งหมดใน `.windsurf/rules/` directory
3. ระบุ `rules` ที่ซ้ำซ้อน, ล้าสมัย, หรือไม่สอดคล้องกับ `project`
4. วิเคราะห์ `dependencies` และ `tech stack` ปัจจุบัน

### 2. Identify Improvements

ระบุสิ่งที่ต้องปรับปรุง

1. ระบุ `rules` ที่ต้องเพิ่ม ตาม `dependencies` ใหม่
2. ระบุ `rules` ที่ต้องลบ หรือ merge เพื่อลดความซ้ำซ้อน
3. ระบุ `rules` ที่ต้องอัพเดท ตาม `best practices` ใหม่
4. จัดลำดับความสำคัญของแต่ละ `improvement`

### 3. Apply Minimal Changes

ทำการเปลี่ยนแปลงแบบ `minimal`

1. ทำ `/dont-over-engineer` เพื่อใช้ `minimal changes`
2. ใช้ `single-line change` เมื่อเป็นไปได้
3. ไม่ refactor ทั้ง `rules directory` เพื่อแก้ปัญหาเล็กๆ
4. ไม่สร้าง `generic solution` สำหรับปัญหาเฉพาะ

### 4. Manage Rule Files

จัดการไฟล์ `rules` ด้วย `file operations`

1. Add `rules` ใหม่ตาม `dependencies` ที่ต้องการ
2. Delete `rules` ที่ไม่จำเป็นหรือล้าสมัย
3. Refactor `rules` ที่ซับซ้อนเพื่อความชัดเจน
4. Relocation `rules` ไปยัง `folders` ที่เหมาะสมตาม `domain`

### 5. Verify And Test

ตรวจสอบและทดสอบ

1. ตรวจสอบว่า `rules` ยังใช้งานได้
2. ทดสอบกับ `codebase` จริง
3. ตรวจสอบไม่มี `side effects`
4. ลบ `code` ที่ไม่จำเป็นที่เพิ่มขึ้น

### 6. Convert To Ast-Grep Rules

แปลง `devin rules` เป็น `ast-grep format` และตรวจสอบความตรงกัน

1. ทำ `/write-ast-grep-rules` เพื่อสร้าง `ast-grep rules` ใน `rules/` directory (ไม่ใช่ใน `.windsurf/rules/`)
2. **สำคัญ:** `.windsurf/rules/` สำหรับ windsurf rules (Markdown สำหรับ AI), `rules/` สำหรับ ast-grep rules (YAML สำหรับ CLI)
3. ตรวจสอบว่า `ast-grep rules` ครอบคลุม patterns ที่ detect ได้จาก `devin rules`
4. รัน `ast-grep scan` เพื่อ test กับ `codebase`
5. แก้ไข `ast-grep rules` ที่ไม่ทำงาน

## Rules

### 1. Analysis First

กฎการวิเคราะห์:

- ต้องทำ `/deep-analyze` ก่อนเริ่มปรับปรุง
- ต้องอ่าน `rules` ทั้งหมดก่อนเปลี่ยนแปลง
- ต้องเข้าใจ `dependencies` และ `tech stack` ปัจจุบัน
- ต้องระบุ `root cause` ของปัญหาก่อนแก้

### 2. Minimal Changes

กฎการทำ `minimal changes`:

- ทำ `/dont-over-engineer` เสมอ
- ใช้ `single-line change` เมื่อเป็นไปได้
- ไม่ refactor ทั้ง `rules directory` เพื่อแก้ปัญหาเล็กๆ
- ไม่สร้าง `abstraction` ที่ไม่จำเป็น

### 3. Rule Quality

กฎคุณภาพของ `rules`:

- `Rules` ต้องสอดคล้องกับ `dependencies` ที่มีใน `project`
- `Rules` ต้องใช้ `backticks` สำหรับ `concepts` และ `terms`
- `Rules` ต้องมี `frontmatter` ที่ถูกต้อง
- `Rules` ต้องชัดเจนและเข้าใจง่าย

### 4. Verification

กฎการตรวจสอบ:

- ต้องทดสอบ `rules` กับ `codebase` จริง
- ต้องตรวจสอบไม่มี `side effects`
- ต้องลบ `code` ที่ไม่จำเป็นที่เพิ่มขึ้น
- ต้อง verify ว่าแก้ปัญหาได้จริง

## Expected Outcome

- Devin rules ปรับปรุงเรียบร้อย
- Rules สอดคล้องกับ dependencies และ tech stack ปัจจุบัน
- ไม่มี rules ซ้ำซ้อนหรือล้าสมัย
- การเปลี่ยนแปลงเป็น minimal และ safe
- Rules ยังใช้งานได้และชัดเจน
- Ast-grep rules สร้างขึ้นและตรงกันกับ devin rules
- rules/ จาก ast-grep ตรงกับ .windsurf/rules/
