---
title: Run Verify
description: รัน verify task ตามที่กำหนดใน package manifest
auto_execution_mode: 3
---

## Goal

รัน verify task เพื่อตรวจสอบคุณภาพโค้ดตามที่กำหนดใน package manifest

## Scope

ตรวจสอบคุณภาพโค้ดด้วย verify script ที่รวม typecheck, lint, และ test

## Execute

### 1. Setup Config

1. ทำ `/setup-config` เพื่อตั้งค่า config files ตาม dependencies
2. ทำ `/setup-gitignore` เพื่อตั้งค่า gitignore

### 2. Update Dependencies

1. ทำ `/update-dependencies` เพื่ออัพเดท dependencies ทั้งหมด

### 3. Run Verify

1. run verify ตามที่กำหนดใน package manifest

### 4. Fix Errors

1. ทำ `/resolve-errors` เพื่อแก้ไขข้อผิดพลาด

## Rules

### 1. Verify Script Requirements

- ต้องมี verify script ใน package manifest ก่อนรัน
- verify script ควรรวม typecheck, lint, และ test

### 2. Error Handling

- ใช้ /resolve-errors เมื่อพบ error

## Expected Outcome

- Code ผ่านการ verify ทั้งหมด
- ไม่มี typecheck, lint, หรือ test errors
