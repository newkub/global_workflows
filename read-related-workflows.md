---
title: Read Related Workflows
description: อ่านและสรุป workflows ที่เกี่ยวข้องแบบ recursive ทุกระดับ
auto_execution_mode: 3
---

## Goal

อ่านและสรุป workflows ที่เกี่ยวข้องทั้งหมดแบบ recursive ทุกระดับเพื่อทำความเข้าใจ dependencies และสิ่งที่ต้องทำ

## Scope

ครอบคลุมการอ่าน workflow ปัจจุบันและ workflows ที่ถูกอ้างอิงภายในนั้นแบบ recursive ทุกระดับ (sub-workflows ของ sub-workflows ของ sub-workflows ฯลฯ)

## Execute

### 1. Read Current Workflow

อ่าน workflow ปัจจุบันที่กำลังทำงาน

- อ่าน workflow file ปัจจุบัน
- ระบุ workflows ที่ถูกอ้างอิงจาก 2 แหล่ง:
  - `related_workflows` ใน frontmatter
  - patterns `/workflow-name` ในเนื้อหา Execute และ Rules

### 2. Build Dependency Graph

สร้าง dependency graph ของ workflows ทั้งหมดแบบ recursive ทุกระดับ

- สแกน `related_workflows` ใน frontmatter ของ workflow ปัจจุบัน
- สแกน references `/workflow-name` ในเนื้อหาของ workflow ปัจจุบัน
- สแกน `related_workflows` และ references ของ workflows ที่พบ (recursive ทุกระดับ)
- อ่าน sub-workflows ของ sub-workflows ของ sub-workflows ฯลฯ จนกว่าจะไม่พบ references ใหม่
- สร้าง dependency graph แบบ tree structure แสดงทุกระดับ

### 3. Read All Related Workflows

อ่าน workflows ทั้งหมดใน dependency graph ทุกระดับ

- อ่าน workflows ตามลำดับจาก root ไปยัง leaf nodes
- อ่าน sub-workflows ของ sub-workflows จนครบทุกระดับ
- เก็บข้อมูล: title, description, execute steps, rules, expected outcome
- ใช้ `read_file` tool สำหรับอ่าน workflow files

### 4. Summarize Tasks

สรุป tasks ที่ต้องทำจากทุก workflow ทุกระดับ

- รวบรวม execute steps จากทุก workflow ทุกระดับ
- รวบรวม rules ที่ต้องปฏิบัติจากทุกระดับ
- สรุป expected outcomes ทั้งหมด
- จัดลำดับความสำคัญของ tasks ตาม dependency graph
- ระบุ tasks ที่ซ้ำซ้อนระหว่าง workflows เพื่อหลีกเลี่ยงการทำซ้ำ

### 5. Generate Summary

สร้าง summary ที่อ่านง่าย

- แสดง dependency graph แบบ tree structure ทุกระดับ
- แสดง tasks ที่ต้องทำตามลำดับ
- แสดง rules ที่ต้องปฏิบัติ
- แสดง expected outcomes ทั้งหมด
- ใช้ `/report-format-table` สำหรับจัดรูปแบบ output

## Rules

### 1. Recursive Depth

- อ่าน sub-workflows ของ sub-workflows ของ sub-workflows ฯลฯ จนกว่าจะไม่พบ references ใหม่
- ไม่จำกัดจำนวนระดับของ recursion
- หยุด recursion เมื่อ workflow ไม่มี `related_workflows` หรือ references ในเนื้อหา
- ตรวจสอบ circular dependencies และหยุดถ้าพบ

### 2. Dependency Resolution

- อ่าน workflows ตามลำดับ topological sort
- อ่าน parent workflows ก่อน child workflows
- หลีกเลี่ยง circular dependencies

### 3. Workflow Parsing

- แยก frontmatter, goal, scope, execute, rules, expected outcome
- ระบุ workflow references จาก `related_workflows` ใน frontmatter
- ระบุ workflow references จาก patterns `/workflow-name` ในเนื้อหา
- ระบุ workflow references จาก patterns `workflow-name.md`

### 4. Redundancy Detection

- ระบุ tasks ที่ซ้ำซ้อนระหว่าง orchestrator และ sub-workflows
- แจ้งว่ารายละเอียดใดอยู่ใน sub-workflow แล้ว
- แนะนำให้ orchestrator อ้างถึง sub-workflow โดยไม่ duplicate

### 5. Summary Format

- ใช้ tree structure สำหรับ dependency graph แสดงทุกระดับ
- ใช้ numbered list สำหรับ tasks
- ใช้ bullet points สำหรับ rules
- ใช้ bullet points สำหรับ expected outcomes

## Expected Outcome

- Dependency graph ที่ครบถ้วนของ workflows ที่เกี่ยวข้องทุกระดับ
- Summary ของ tasks ที่ต้องทำตามลำดับ
- Summary ของ rules ที่ต้องปฏิบัติ
- Summary ของ expected outcomes ทั้งหมด
- ระบุ tasks ที่ซ้ำซ้อนระหว่าง workflows
- เข้าใจ dependencies ของ workflows ทั้งหมดทุกระดับ
