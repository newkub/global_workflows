---
title: Follow Agents Md
description: ทำตาม AGENTS.md ใน workspace
auto_execution_mode: 3
related_workflows:
  - /update-agents-md
  - /read-related-workflows
  - /read-related-skills
---


## Goal

ทำตาม `AGENTS.md` ใน workspace ให้ครบถ้วน

## Scope

ค้นหาและทำตาม `AGENTS.md` ในทุก workspace

## Execute

### 1. Update AGENTS.md

ทำ `/update-agents-md` ก่อนเสมอ ก่อนทำอย่างอื่นใด

- ทำ `/update-agents-md` เพื่อเขียน/อัพเดต `AGENTS.md`
- ตรวจสอบว่า `AGENTS.md` เขียนถูกต้องและเป็นปัจจุบัน
- ห้ามข้ามขั้นตอนนี้ไม่ว่ากรณีใดๆ

### 2. Read Related Workflows And Skills

อ่าน workflows และ skills ที่เกี่ยวข้องทั้งหมด

1. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องแบบ recursive
2. ทำ `/read-related-skills` เพื่ออ่าน skills ที่เกี่ยวข้องแบบ recursive
3. ทำตาม workflows และ skills ที่อ่านได้ทั้งหมด

### 3. Find AGENTS.md

ค้นหาไฟล์ `AGENTS.md` ใน workspace root

### 4. Parse AGENTS.md

อ่านและวิเคราะห์ workflows และ skills ที่ระบุ

### 5. Execute Workflows

ทำตาม workflows ที่ระบุใน `AGENTS.md` ตามลำดับ

### 6. Load Skills

โหลด skills ที่ระบุใน `AGENTS.md`

## Rules

- `AGENTS.md` ต้องอยู่ใน workspace root
- ทำตามลำดับที่ระบุใน `AGENTS.md`
- ตรวจสอบว่า workflows และ skills มีอยู่จริง
- ข้าม workflows หรือ skills ที่ไม่มีอยู่

## Expected Outcome

- Workflows ที่ระบุใน `AGENTS.md` ถูกทำ
- Skills ที่ระบุใน `AGENTS.md` ถูกโหลด
