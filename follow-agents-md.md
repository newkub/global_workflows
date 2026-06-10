---
title: Follow Agents Md
description: Find all AGENTS.md and execute them completely
auto_execution_mode: 3
---

## Goal

หา AGENTS.md ทั้งหมมแล้วทำตามนั้นให้ครบ

## Scope

ค้นหาและทำตาม AGENTS.md ในทุก workspace

## Execute

### 1. Write AGENTS.md

เขียน AGENTS.md ก่อนทำตาม

1. ทำ `/write-agents-md` เพื่อเขียน AGENTS.md
2. ตรวจสอบว่า AGENTS.md เขียนถูกต้อง

### 2. Find AGENTS.md

ค้นหาไฟล์ AGENTS.md ใน workspace root

### 3. Parse AGENTS.md

อ่านและวิเคราะห์ workflows และ skills ที่ระบุ

### 4. Execute Workflows

ทำตาม workflows ที่ระบุใน AGENTS.md ตามลำดับ

### 5. Load Skills

โหลด skills ที่ระบุใน AGENTS.md

## Rules

### 1. File Location

AGENTS.md ต้องอยู่ใน workspace root

### 2. Execution Order

ทำตามลำดับที่ระบุใน AGENTS.md

### 3. Validation

ตรวจสอบว่า workflows และ skills มีอยู่จริง

### 4. Error Handling

ข้าม workflows หรือ skills ที่ไม่มีอยู่

## Expected Outcome

- Workflows ที่ระบุใน AGENTS.md ถูกทำ
- Skills ที่ระบุใน AGENTS.md ถูกโหลด

