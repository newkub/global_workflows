---
title: Ship Run
description: Ship code ครบวงจร ทดสอบ และรัน development server
auto_execution_mode: 3
related_workflows:
  - /ship-code
  - /run-verify
  - /verify-test
  - /run-dev
---

## Goal

Ship code ครบวงจร ทดสอบคุณภาพ และรัน development server

## Execute

### 1. Ship Code

ทำ `/ship-code` เพื่อ ship code ครบวงจร (planning → build)

### 2. Run Verify

ทำ `/loop-until-complete` เพื่อรัน `/run-verify` จนกว่าจะผ่าน (typecheck, lint, test)

### 3. Verify Test Quality (Optional)

ทำ `/verify-test` เพื่อตรวจสอบ test quality ครบวงจร (formal verification, mutation, security, performance)

### 4. Run Dev

ทำ `/loop-until-complete` เพื่อรัน `/run-dev` จนกว่าจะผ่าน

## Rules

### 1. Execution Order

ทำตามลำดับ: `/ship-code` → `/run-verify` → `/verify-test` (optional) → `/run-dev`

- ห้ามข้ามขั้นตอน
- ทำ `/resolve-errors` เมื่อพบ error
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 2. Mandatory Ship-Code

ต้องทำ `/ship-code` ทุกครั้ง ห้ามข้ามหรือใช้คำสั่งอื่นแทน

## Expected Outcome

- Code ผ่านการ ship ครบวงจร
- Code ผ่านการ verify ทุกด้าน
- Test quality ผ่านการ verify ครบวงจร (ถ้าใช้)
- Build สำเร็จ
- Development server ทำงานได้ ไม่มี critical errors

