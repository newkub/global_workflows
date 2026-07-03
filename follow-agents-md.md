---
title: Follow Agents Md
description: Find all AGENTS.md and execute them completely
auto_execution_mode: 3
---

## Goal

หา AGENTS.md ทั้งหมดแล้วทำตามนั้นให้ครบ

## Scope

ค้นหาและทำตาม AGENTS.md ในทุก workspace

## Execute

### 1. Write AGENTS.md

เขียน AGENTS.md ก่อนเสมอ ทำตาม `/update-agents`

- ทำ `/update-agents` เพื่อเขียน AGENTS.md
- ตรวจสอบว่า AGENTS.md เขียนถูกต้อง

### 2. Find AGENTS.md

ค้นหาไฟล์ AGENTS.md ใน workspace root

### 3. Parse AGENTS.md

อ่านและวิเคราะห์ workflows และ skills ที่ระบุ

### 4. Execute Workflows

ทำตาม workflows ที่ระบุใน AGENTS.md ตามลำดับ

### 5. Load Skills

โหลด skills ที่ระบุใน AGENTS.md

### 6. Implement TODO

แปลง TODO จากไฟล์ Markdown เป็น production code

- ค้นหาไฟล์ Markdown ที่มี TODO (TODO.md, ROADMAP.md, ฯลฯ)
- ทำ `/implement-todo-md` เพื่อแปลง TODO เป็น production code
- ตรวจสอบว่า features ที่ implement ใช้งานได้จริง
- อัพเดทไฟล์ Markdown ตามสถานะปัจจุบัน

## Rules

- AGENTS.md ต้องอยู่ใน workspace root
- ทำตามลำดับที่ระบุใน AGENTS.md
- ตรวจสอบว่า workflows และ skills มีอยู่จริง
- ข้าม workflows หรือ skills ที่ไม่มีอยู่

## Expected Outcome

- Workflows ที่ระบุใน AGENTS.md ถูกทำ
- Skills ที่ระบุใน AGENTS.md ถูกโหลด
- TODO จากไฟล์ Markdown ถูกแปลงเป็น production code

