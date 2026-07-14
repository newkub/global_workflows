---
title: Update Project
description: อัพเดท project documentation และ configuration ครบถ้วน
auto_execution_mode: 3
related:
  - /update-dot-devin
  - /update-readme
  - /update-agents-md
  - /update-docs
  - /update-ast-grep-rules
  - /follow-create-health
---

## Goal

อัพเดท project documentation และ configuration ครบถ้วนในครั้งเดียว

## Scope

ใช้สำหรับอัพเดท project ทั้งหมด รวม .devin structure, README, AGENTS.md, documentation, ast-grep rules, และ health CLI

## Execute

### 1. Update Dot Devin

อัพเดท .devin structure สำหรับ project

1. ทำ `/update-dot-devin` เพื่ออัพเดท .devin structure ครบถ้วน

### 2. Update README

อัพเดท README.md สำหรับ project

1. ทำ `/update-readme` เพื่ออัพเดท README.md ครบถ้วน

### 3. Update AGENTS.md

อัพเดท AGENTS.md สำหรับ project

1. ทำ `/update-agents-md` เพื่ออัพเดท AGENTS.md ครบถ้วน

### 4. Update Documentation

อัพเดท documentation สำหรับ project (ถ้ามี docs/)

1. ตรวจสอบว่ามี docs/ directory หรือไม่
2. ถ้ามี docs/ ให้ทำ `/update-docs` เพื่ออัพเดท documentation ครบถ้วน

### 5. Update Ast-Grep Rules

อัพเดท ast-grep rules สำหรับ project (ถ้ามี sgconfig.yml)

1. ตรวจสอบว่ามี `sgconfig.yml` และ `rules/` directory หรือไม่
2. ถ้ามี ให้ทำ `/update-ast-grep-rules` เพื่ออัพเดท ast-grep rules ให้สอดคล้องกับ `.devin/rules/`

### 6. Update Health CLI

อัปเดท health CLI สำหรับ project (ถ้ามี `tools/health/`)

1. ตรวจสอบว่ามี `tools/health/` directory หรือไม่
2. ถ้ามี ให้ทำ `/update-health-cli` เพื่อสร้าง/อัปเดท health CLI ให้ครอบคลุม 60+ categories ตาม `/report-health`

## Rules

### 1. Execution Order

ทำตามลำดับที่กำหนดเพื่อให้ได้ผลลัพธ์ที่ถูกต้อง

- ทำ `/update-dot-devin` ก่อนเสมอ เพื่อตั้งค่าพื้นฐาน
- ทำ `/update-readme` หลังจากตั้งค่าพื้นฐาน
- ทำ `/update-agents-md` หลังจากอัพเดท README
- ทำ `/update-docs` เป็นลำดับสุดท้าย (ถ้ามี docs/)
- ทำ `/update-ast-grep-rules` หลังจาก update docs (ถ้ามี `sgconfig.yml`)
- ทำ `/follow-create-health` หลังจาก update ast-grep rules (ถ้ามี `tools/health/`)

### 2. Conditional Execution

ตรวจสอบความจำเป็นก่อน execute

- ทำ `/update-docs` เฉพาะเมื่อมี docs/ directory
- ถ้าไม่มี docs/ ให้ข้าม step นี้
- ทำ `/update-ast-grep-rules` เฉพาะเมื่อมี `sgconfig.yml` และ `rules/` directory
- ถ้าไม่มี ให้ข้าม step นี้
- ทำ `/follow-create-health` เฉพาะเมื่อมี `tools/health/` directory
- ถ้าไม่มี ให้ข้าม step นี้

### 3. Consistency

รักษาความสม่ำเสมอ

- ทำตาม `/write-global-workflows` สำหรับ workflow structure
- ใช้ references แทนการ duplicate เนื้อหา
- ตรวจสอบว่า workflows ที่อ้างถึงมีอยู่จริง

## Expected Outcome

- .devin structure อัพเดทครบถ้วน
- README.md อัพเดทครบถ้วน
- AGENTS.md อัพเดทครบถ้วน
- Documentation อัพเดทครบถ้วน (ถ้ามี docs/)
- Ast-grep rules อัพเดทครบถ้วน (ถ้ามี `sgconfig.yml`)
- Health CLI อัพเดทครบถ้วน (ถ้ามี `tools/health/`)
- Project documentation และ configuration สอดคล้องกัน
