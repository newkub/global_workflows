---
title: Run Verify
description: รัน verify task เพื่อตรวจสอบคุณภาพโค้ดตาม package manifest
auto_execution_mode: 3
related:
  - /follow-tasks
  - /run-scan
  - /run-lint
  - /run-typecheck
  - /run-test
  - /run-build
  - /resolve-errors
  - /run-dev
  - /follow-code-quality
---

## Goal

รัน verify task เพื่อตรวจสอบคุณภาพโค้ดตามที่กำหนดใน package manifest

## Scope

ตรวจสอบคุณภาพโค้ดด้วย verify script ที่รวม scan, typecheck, lint, และ test (ไม่รวม build)

## Execute

### 1. Setup Tasks

1. ทำ `/follow-tasks` เพื่อตั้งค่า scripts มาตรฐานใน package manifest
2. ถ้า project ยังไม่มี verify script ให้สร้างตามมาตรฐาน
3. ทำ `/follow-config` เพื่อตั้งค่า config files ตาม dependencies
4. ทำ `/follow-gitignore` เพื่อตั้งค่า gitignore

### 2. Run Scan

1. ทำ `/run-scan` เพื่อตรวจสอบ codebase ด้วย AST-based patterns

### 3. Run Lint

1. ทำ `/run-lint` เพื่อตรวจสอบ code quality และ style

### 4. Run Typecheck

1. ทำ `/run-typecheck` เพื่อตรวจสอบ type safety

### 5. Run Test

1. ทำ `/run-test` เพื่อรัน test suite และตรวจสอบ coverage

### 6. Run CI (optional)

1. ถ้าต้องการ build artifacts ให้รัน `bun run ci` แทน `bun run verify`
2. `ci` = `verify && build` รวมทั้งตรวจสอบคุณภาพและสร้าง artifacts

### 7. Fix Errors

1. ทำ `/resolve-errors` เพื่อแก้ไขข้อผิดพลาด
2. รัน verify ซ้ำจนกว่าจะผ่านทั้งหมด

### 8. Run Dev Server

1. ทำ `/run-dev` เพื่อรัน development server
2. ติดตามและแก้ไขข้อผิดพลาดที่เกิดขึ้นทันทีจนกว่าจะผ่าน

## Rules

### 1. Verify Script Requirements

- ต้องมี verify script ใน package manifest ก่อนรัน
- verify script รวม scan, typecheck, lint, และ test (ไม่รวม build)
- ci script รวม verify และ build สำหรับ CI/CD pipeline
- ใช้คำสั่งที่เหมาะสมกับ package manager (`bun`, `npm`, `pnpm`, `yarn`)

### 2. Error Handling

- ใช้ `/resolve-errors` เมื่อพบ error
- รัน verify ซ้ำหลังจากแก้ไข
- ห้ามข้ามขั้นตอนที่มี errors

### 3. Dev Server

- ต้องรัน dev server หลังจาก verify ผ่าน
- ติดตามและแก้ไข runtime errors ทันที

## Expected Outcome

- Code ผ่าน scan, lint, typecheck, และ test ทั้งหมด
- ไม่มี scan, typecheck, lint, หรือ test errors
- ถ้ารัน ci: Build artifacts ถูกสร้างอย่างถูกต้อง
- Development server ทำงานได้ ไม่มี critical runtime errors

