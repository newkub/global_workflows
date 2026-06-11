---
title: Refactor To New Devin Global Workflows
description: Refactor global workflows ให้สอดคล้องกับมาตรฐานใหม่
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-global-workflows
  - /follow-content-quality
---

## Goal

Refactor global workflows ทั้งหมดให้สอดคล้องกับมาตรฐานใหม่ของ Devin global workflows

## Scope

ใช้สำหรับ refactor global workflows ทั้งหมดใน `c:\Users\Veerapong\.codeium\windsurf\global_workflows`

## Execute

### 1. Analyze Current Workflows

วิเคราะห์ global workflows ทั้งหมด

1. ทำ `/search-code` เพื่อค้นหาไฟล์ `.md` ใน `c:\Users\Veerapong\.codeium\windsurf\global_workflows`
2. ตรวจสอบ frontmatter ของแต่ละ workflow
3. ตรวจสอบโครงสร้างของแต่ละ workflow
4. ระบุ workflows ที่ไม่สอดคล้องกับ `/write-windsurf-global-workflows`
5. สรุปผลการ analyze ทั้งหมม

### 2. Refactor Frontmatter

ปรับปรุง frontmatter ของ workflows

1. เพิ่ม `title` สำหรับ workflows ที่ขาด
2. เพิ่ม `description` สำหรับ workflows ที่ขาด
3. เพิ่ม `auto_execution_mode: 3` สำหรับ workflows ที่ขาด
4. เพิ่ม `related_workflows` (optional) สำหรับ workflows ที่เกี่ยวข้อง
5. ปรับปรุง format ของ frontmatter ให้ถูกต้อง

### 3. Refactor Structure

ปรับปรุงโครงสร้างของ workflows

1. เพิ่ม `## Goal` section สำหรับ workflows ที่ขาด
2. เพิ่ม `## Scope` section สำหรับ workflows ที่ขาด
3. เพิ่ม `## Execute` section สำหรับ workflows ที่ขาด
4. เพิ่ม `## Rules` section สำหรับ workflows ที่ขาด
5. เพิ่ม `## Expected Outcome` section สำหรับ workflows ที่ขาด
6. จัดเรียง sections ตามลำดับที่ถูกต้อง

### 4. Refactor Execute Section

ปรับปรุง Execute section ตามมาตรฐาน

1. ใช้ `### N. Step Name` (Title Case) สำหรับ subheadings
2. ใช้ numbered list (1., 2., 3.) สำหรับ steps
3. เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
4. เพิ่มข้อความด้านบนก่อน bullet ในแต่ละ ###
5. ใช้ backticks สำหรับ `/workflow-name`, `file paths`, `commands`

### 5. Refactor Rules Section

ปรับปรุง Rules section ตามมาตรฐาน

1. ใช้ `### N. Rule Category` (Title Case) สำหรับ subheadings
2. แต่ละ ### มีข้อความด้านบนก่อน bullet
3. ใช้ bullet points (-) ชิดซ้าย
4. เพิ่ม backticks สำหรับ `tools`, `functions`, `concepts`
5. ลดความซ้ำซ้อนกับ Execute section

### 6. Refactor Content

ปรับปรุงเนื้อหาของ workflows

1. เพิ่ม backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
2. ปรับปรุงคำอธิบายให้ชัดเจนและกระชับ
3. ลบข้อความซ้ำซ้อนระหว่าง Execute และ Rules
4. ลดความยาวไฟล์ไม่เกิน 300 บรรทัด
5. ทำ `/follow-content-quality` สำหรับทุก workflow

### 7. Verify Changes

ตรวจสอบการปรับปรุง

1. ตรวจสอบ frontmatter ครบถ้วนตามมาตรฐาน
2. ตรวจสอบโครงสร้างถูกต้อง (Goal, Scope, Execute, Rules, Expected Outcome)
3. ตรวจสอบ Execute section ใช้ format ที่ถูกต้อง
4. ตรวจสอบ Rules section ใช้ format ที่ถูกต้อง
5. ตรวจสอบความยาวไฟล์ไม่เกิน 300 บรรทัด
6. ตรวจสอบ workflows ที่อ้างอิงมีอยู่จริง

## Rules

### 1. Frontmatter And Structure

ตั้งค่า frontmatter และโครงสร้างตามมาตรฐาน

- `title`: Title Case ชัดเจน (ตรงกับ filename ไม่รวม `follow-`)
- `description`: กระชับไม่เกิน 100 ตัวอักษร
- `auto_execution_mode`: 3 เท่านั้น
- `related_workflows`: (optional) รายการ workflows ที่เกี่ยวข้อง
- `## Goal` (required)
- `## Scope` (required)
- `## Execute` (required)
- `## Rules` (required)
- `## Expected Outcome` (required)

### 2. Formatting And Style

ใช้รูปแบบและ style ที่สม่ำเสมอ

- หัวข้อภาษาอังกฤษ Title Case
- รายการใช้ภาษาไทย (ยกเว้นคำศัพท์เฉพาะ)
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไม่ใช้ ** เน้นตัวหนาในหัวข้อ
- ไฟล์ไม่เกิน 300 บรรทัด
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`, `environment variables`, `code snippets`, `function names`, `configuration keys`, `package names`, `git commands`

### 3. Content Guidelines

เขียนเนื้อหาตามแนวทางที่กำหนด

- เขียนเป็นหลักการ how-to ที่ใช้ได้ทั่วไป
- ไม่ใช่ manual step-by-step ที่ละเอียดเกินไป
- ใช้ keyword กระชับ มีความหมายชัด
- เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
- ใน Rules สามารถใช้ table, code block, diagram ได้
- terminal commands, architecture, config examples ใส่ใน code block
- examples ต้องสั้นกระชับ เข้าใจง่าย และสอดคล้องกับ Execute steps

### 4. Consistency And Alignment

ตรวจสอบความสอดคล้องทั่วทั้ง workflow

- Goal สอดคล้องกับ Filename
- Execute สอดคล้องกับ Goal และ Rules
- Expected Outcome สอดคล้องกับ Goal
- ใช้คำศัพท์สม่ำเสมอทั่วทั้ง workflow
- ไม่มีข้อความขัดแย้งกัน

### 5. Non-Redundancy

หลีกเลี่ยงความซ้ำซ้อน

- ลบข้อความที่ซ้ำซ้อนระหว่าง Execute และ Rules
- รวบรวมรายละเอียดที่เหมือนกันไว้ที่เดียว
- ใช้ references แทนการ duplicate เนื้อหา
- เป็น single source of truth

### 6. Workflow References

อ้างอิง workflows อย่างถูกต้อง

- เช็คว่า workflows ที่อ้างอิงมีอยู่จริง
- เขียนในรูปแบบ ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
- อ่าน workflows ที่เกี่ยวข้องก่อนเขียนเพื่อไม่ให้ซ้ำ

## Expected Outcome

- Global workflows ทั้งหมดมี frontmatter ครบถ้วนตามมาตรฐาน
- Global workflows ทั้งหมดมีโครงสร้างถูกต้อง (Goal, Scope, Execute, Rules, Expected Outcome)
- Execute sections ทั้งหมดใช้มาตรฐานเดียวกัน
- Rules sections ทั้งหมดใช้มาตรฐานเดียวกัน
- เนื้อหาทั้งหมดมี backticks ครบถ้วน
- ไฟล์ทั้งหมดไม่เกิน 300 บรรทัด
- Global workflows สอดคล้องกับมาตรฐาน `/write-windsurf-global-workflows`
- Workflows ที่อ้างอิงมีอยู่จริง

