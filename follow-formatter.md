---
title: Follow Formatter
description: ตั้งค่า formatter สำหรับ project
auto_execution_mode: 3
---

## Goal

ตั้งค่า formatter สำหรับ project

## Execute

### 1. Select Formatter

1. ตรวจสอบ tech stack ของ project
2. เลือก formatter ตามความเหมาะสม:
   - TypeScript/JavaScript: biome
   - Rust: rustfmt
   - Go: gofmt
   - Python: black

### 2. Setup Formatter

1. รัน `/biome` สำหรับ TypeScript/JavaScript
2. รัน `cargo fmt` สำหรับ Rust

### 3. Validate

1. รัน formatter เพื่อทดสอบ
2. ตรวจสอบ configuration

## Rules

- เลือก formatter ตาม tech stack
- ใช้ `/resolve-errors` เมื่อพบ error

## Expected Outcome

- Formatter ตั้งค่าเรียบร้อย
- Formatter ทำงานได้ถูกต้อง

