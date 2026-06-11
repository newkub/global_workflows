---
title: Verify
description: รัน verify task ตามที่กำหนดใน package manifest
auto_execution_mode: 3
related_workflows:
  - /follow-tasks
  - /run-dev
  - /resolve-errors
---

## Goal

รัน verify task เพื่อตรวจสอบคุณภาพโค้ดตามที่กำหนดใน package manifest

## Scope

ตรวจสอบคุณภาพโค้ดด้วย verify script ที่รวม scan, typecheck, lint, และ test

## Execute

### 1. Setup Tasks

1. ทำ `/follow-tasks` เพื่อตั้งค่า scripts มาตรฐานใน package manifest
2. ตรวจสอบว่ามี verify script ใน package manifest
3. ทำ `/follow-config` เพื่อตั้งค่า config files ตาม dependencies
4. ทำ `/follow-gitignore` เพื่อตั้งค่า gitignore

### 2. Update Dependencies

1. ทำ `/update-dependencies` เพื่ออัพเดท dependencies ทั้งหมด

### 3. Run Verify

1. รัน verify script ตามที่กำหนดใน package manifest
2. ตรวจสอบว่า scan, typecheck, lint, และ test ผ่านทั้งหมด

### 4. Fix Errors

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/resolve-errors` เพื่อแก้ไขข้อผิดพลาด
   - รัน verify ซ้ำจนกว่าจะผ่านทั้งหมด

### 5. Run Dev Server

1. ทำ `/run-dev` เพื่อรัน development server
2. ติดตามและแก้ไขข้อผิดพลาดที่เกิดขึ้นทันทีจนกว่าจะผ่าน
3. ตรวจสอบว่า dev server เริ่มต้นสำเร็จ

## Rules

### 1. Verify Script Requirements

ตรวจสอบ verify script ใน package manifest และจัดการ errors

- ต้องมี verify script ใน package manifest ก่อนรัน
- verify script ควรรวม scan, typecheck, lint, และ test
- ใช้คำสั่งที่เหมาะสมกับ package manager (bun, npm, pnpm, yarn)
- ใช้ `/resolve-errors` เมื่อพบ error
- รัน verify ซ้ำหลังจากแก้ไข
- ไม่ข้ามขั้นตอนที่มี errors
- ต้องรัน dev server หลังจาก verify ผ่าน
- ติดตามและแก้ไข runtime errors ทันที
- ตรวจสอบว่า features หลักทำงานได้

## Expected Outcome

- Code ผ่านการ verify ทั้งหมด
- ไม่มี scan, typecheck, lint, หรือ test errors
- Development server ทำงานได้
- ไม่มี critical runtime errors

