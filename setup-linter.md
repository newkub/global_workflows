---
title: Follow Linter
description: ตั้งค่า linter สำหรับ project
auto_execution_mode: 3
---

## Goal

ตั้งค่า linter สำหรับ project

## Execute

### 1. Select Linter

1. ตรวจสอบ tech stack ของ project
2. เลือก linter ตามความเหมาะสม:
   - TypeScript/JavaScript: oxlint หรือ biome
   - Rust: clippy
   - Go: golangci-lint
   - Python: ruff

### 2. Setup Linter

1. รัน `/follow-biome` สำหรับ TypeScript/JavaScript
2. รัน `/follow-oxlint` สำหรับ TypeScript/JavaScript
3. รัน `/follow-clippy` สำหรับ Rust

### 3. Validate

1. รัน linter เพื่อทดสอบ
2. ตรวจสอบ configuration

## Rules

- เลือก linter ตาม tech stack
- ใช้ `/resolve-errors` เมื่อพบ error

## Expected Outcome

- Linter ตั้งค่าเรียบร้อย
- Linter ทำงานได้ถูกต้อง
