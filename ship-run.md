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

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/run-verify` เพื่อทดสอบคุณภาพโค้ด

### 3. Run Dev

รัน development server และตรวจสอบ

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/run-dev` เพื่อรัน development server

## Rules

### 1. Execution Order

ทำตามลำดับขั้นตอนอย่างเคร่งครัดและทำตามขอบเขตที่กำหนด

- Ship-code ต้องทำก่อน run-verify
- Run-verify ต้องทำก่อน run-dev
- Run-dev ต้องทำหลังจาก verify เสร็จ
- ทำตามขั้นตอนที่กำหนดจนครบ
- ห้ามข้ามขั้นตอน
- ทำตาม `/resolve-errors` เมื่อพบ error
- ทำงานอัตโนมัติโดยไม่หยุดถาม
- `/ship-code`: Planning → Build (ไม่มี testing)
- `/run-verify`: Testing เท่านั้น (typecheck, lint, test)
- `/run-dev`: Development server

### 2. Mandatory Ship-Code

ห้ามข้าม `/ship-code` โดยเด็ดขาด

- ต้องทำ `/ship-code` ทุกครั้ง
- ห้ามข้าม step นี้ไม่ว่ากรณีใดๆ
- ห้ามใช้คำสั่งอื่นแทน
- ต้องผ่านทุก steps ใน `/ship-code` ก่อนดำเนินการต่อ

## Expected Outcome

### Code Quality

- Code ผ่านการ ship ครบวงจร
- Code ผ่านการ verify ทุกด้าน
- Build สำเร็จ

### Development Server

- Development server ทำงานได้
- ไม่มี critical errors
- Features หลักทำงานได้

