---
title: Ship Run
description: Ship code ครบวงจร ทดสอบ และรัน development server
auto_execution_mode: 3
related_workflows:
  - /ship-code
  - /run-verify
  - /run-dev
---

## Goal

Ship code ครบวงจร ทดสอบคุณภาพ และรัน development server

## Execute

### 1. Ship Code

ดำเนินการ ship code ครบวงจร (planning → build)

1. ทำ `/ship-code` เพื่อ ship code ครบวงจร

### 2. Run Verify

ทดสอบคุณภาพโค้ด (typecheck, lint, test)

1. ทำ `/run-verify` เพื่อทดสอบคุณภาพโค้ด

### 3. Run Dev

รัน development server และตรวจสอบ

1. ทำ `/run-dev` เพื่อรัน development server

## Rules

### 1. Execution Order

ทำตามลำดับขั้นตอนอย่างเคร่งครัด

- Ship-code ต้องทำก่อน run-verify
- Run-verify ต้องทำก่อน run-dev
- Run-dev ต้องทำหลังจาก verify เสร็จ

### 2. Execution Scope

- ทำตามขั้นตอนที่กำหนดจนครบ
- ห้ามข้ามขั้นตอน
- ทำตาม `/resolve-errors` เมื่อพบ error
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 3. Responsibilities

แต่ละ workflow มีหน้าที่ชัดเจน

- `/ship-code`: Planning → Build (ไม่มี testing)
- `/run-verify`: Testing เท่านั้น (typecheck, lint, test)
- `/run-dev`: Development server

## Expected Outcome

### Code Quality

- Code ผ่านการ ship ครบวงจร
- Code ผ่านการ verify ทุกด้าน
- Build สำเร็จ

### Development Server

- Development server ทำงานได้
- ไม่มี critical errors
- Features หลักทำงานได้
