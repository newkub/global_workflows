---
title: Run CI
description: รัน CI pipeline เต็มรูปแบบตาม Standard level scripts
auto_execution_mode: 3
related_workflows:
  - /run-verify
  - /run-build
  - /run-check
---

## Goal

รัน CI pipeline เต็มรูปแบบตาม Standard level scripts เพื่อตรวจสอบคุณภาพโค้ดก่อน merge

## Scope

รัน CI pipeline สำหรับ monorepo และ single workspace ตามที่กำหนดใน package manifest

## Execute

### 1. Setup Environment

1. ติดตั้ง dependencies ด้วย `bun install`
2. ตั้งค่า environment variables ที่จำเป็น
3. ตรวจสอบ build cache และ artifacts
4. ถ้าเป็น monorepo ตรวจสอบ workspace configuration

### 2. Run Verification

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
2. ตรวจสอบว่า verify script รวม check และ test
3. แก้ไข issues ที่พบด้วย `/resolve-errors`

### 3. Run Build

1. ทำ `/run-build` เพื่อสร้าง production artifacts
2. ตรวจสอบ build output
3. ยืนยันว่า build สำเร็จ

### 4. Check Artifacts

1. ตรวจสอบ dist folder หรือ build output
2. ตรวจสอบ type declarations ถ้ามี
3. ตรวจสอบ source maps ถ้าจำเป็น

## Rules

### 1. Execution Order

- Setup: ติดตั้ง environment ก่อน
- Verify: ตรวจสอบคุณภาพโค้ด (check + test)
- Build: สร้าง artifacts
- Check: ตรวจสอบ output

### 2. Standard Level Scripts

ตรวจสอบว่า scripts ตรงตาม Standard level:

- verify: check && test
- check: lint && typecheck && scan
- ci: verify && build

### 3. Failure Handling

- Verify ล้มเหลว: แก้ไข issues ก่อนดำเนินการต่อ
- Build ล้มเหลว: วิเคราะห์และแก้ไข
- ไม่ข้ามขั้นตอนที่มี errors

### 4. CI Environment

- ใช้ cache dependencies เพื่อเพิ่มความเร็ว
- ใช้ parallel execution เมื่อเป็นไปได้
- บันทึก artifacts สำหรับ debugging

## Expected Outcome

- CI pipeline ทำงานสำเร็จ
- Code ผ่านการตรวจสอบ lint, typecheck, scan, และ test
- Build artifacts ถูกสร้างอย่างถูกต้อง
- Tests ผ่านทั้งหมด
- พร้อมสำหรับ merge และ deploy

