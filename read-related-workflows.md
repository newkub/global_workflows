---
title: Read Related Workflows
description: อ่านและสรุป workflows ที่เกี่ยวข้องแบบ recursive ทุกระดับ
auto_execution_mode: 3
---

## Goal

อ่านและสรุป workflows ที่เกี่ยวข้องทั้งหมดแบบ recursive เพื่อทำความเข้าใจ dependencies และสิ่งที่ต้องทำ

## Scope

ครอบคลุมการอ่าน workflow ปัจจุบันและ workflows ที่ถูกอ้างอิงภายในนั้นแบบ recursive

## Execute

### 1. Read Current Workflow

อ่าน workflow ปัจจุบันที่กำลังทำงาน

- อ่าน workflow file ปัจจุบัน
- ระบุ workflows ที่ถูกอ้างอิงใน workflow นี้จาก patterns เช่น `/workflow-name`

### 2. Build Dependency Graph

สร้าง dependency graph ของ workflows ทั้งหมด

- สแกนหา references ของ workflows ใน workflow ปัจจุบันด้วย patterns เช่น `/workflow-name`
- สแกนหา references ของ workflows ใน workflows ที่พบ (recursive)
- สร้าง dependency graph แบบ tree structure

### 3. Read All Related Workflows

อ่าน workflows ทั้งหมดใน dependency graph

- อ่าน workflows ตามลำดับจาก root ไปยัง leaf nodes
- เก็บข้อมูล: title, description, execute steps, rules, expected outcome
- ใช้ `read_file` tool สำหรับอ่าน workflow files

### 4. Summarize Tasks

สรุป tasks ที่ต้องทำจากทุก workflow

- รวบรวม execute steps จากทุก workflow
- รวบรวม rules ที่ต้องปฏิบัติ
- สรุป expected outcomes ทั้งหมด
- จัดลำดับความสำคัญของ tasks ตาม dependency graph

### 5. Generate Summary

สร้าง summary ที่อ่านง่าย

- แสดง dependency graph แบบ tree structure
- แสดง tasks ที่ต้องทำตามลำดับ
- แสดง rules ที่ต้องปฏิบัติ
- แสดง expected outcomes ทั้งหมด
- ใช้ `/report-format-table` สำหรับจัดรูปแบบ output

## Rules

### 1. Dependency Resolution

แก้ไข dependencies ของ workflows อย่างถูกต้อง

- อ่าน workflows ตามลำดับ topological sort
- อ่าน parent workflows ก่อน child workflows
- หลีกเลี่ยง circular dependencies

### 2. Workflow Parsing

แยกวิเคราะห์ workflows อย่างถูกต้อง

- แยก frontmatter, goal, scope, execute, rules, expected outcome
- ระบุ workflow references จาก patterns เช่น `/workflow-name`
- ระบุ workflow references จาก patterns เช่น `workflow-name.md`

### 3. Summary Format

จัดรูปแบบ summary ให้อ่านง่าย

- ใช้ tree structure สำหรับ dependency graph
- ใช้ numbered list สำหรับ tasks
- ใช้ bullet points สำหรับ rules
- ใช้ bullet points สำหรับ expected outcomes

## Expected Outcome

- Dependency graph ที่ครบถ้วนของ workflows ที่เกี่ยวข้อง
- Summary ของ tasks ที่ต้องทำตามลำดับ
- Summary ของ rules ที่ต้องปฏิบัติ
- Summary ของ expected outcomes ทั้งหมด
- เข้าใจ dependencies ของ workflows ทั้งหมด
