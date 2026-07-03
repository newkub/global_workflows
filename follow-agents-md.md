---
title: Follow Agents Md
description: ทำตาม AGENTS.md ใน workspace
auto_execution_mode: 3
---

## Goal

ทำตาม `AGENTS.md` ใน workspace ให้ครบถ้วน

## Scope

ค้นหาและทำตาม `AGENTS.md` ในทุก workspace

## Execute

### 1. Update AGENTS.md

ทำ `/update-agents` ก่อนเสมอ ก่อนทำอย่างอื่นใด

- ทำ `/update-agents` เพื่อเขียน/อัพเดต `AGENTS.md`
- ตรวจสอบว่า `AGENTS.md` เขียนถูกต้องและเป็นปัจจุบัน
- ห้ามข้ามขั้นตอนนี้ไม่ว่ากรณีใดๆ

### 2. Find AGENTS.md

ค้นหาไฟล์ `AGENTS.md` ใน workspace root

### 3. Parse AGENTS.md

อ่านและวิเคราะห์ workflows และ skills ที่ระบุ

### 4. Execute Workflows

ทำตาม workflows ที่ระบุใน `AGENTS.md` ตามลำดับ

### 5. Load Skills

โหลด skills ที่ระบุใน `AGENTS.md`

## Rules

- `AGENTS.md` ต้องอยู่ใน workspace root
- ทำตามลำดับที่ระบุใน `AGENTS.md`
- ตรวจสอบว่า workflows และ skills มีอยู่จริง
- ข้าม workflows หรือ skills ที่ไม่มีอยู่

## Expected Outcome

- Workflows ที่ระบุใน `AGENTS.md` ถูกทำ
- Skills ที่ระบุใน `AGENTS.md` ถูกโหลด
