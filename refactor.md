---
title: Refactor
description: Refactor codebase ครบวงจร
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /refactor-modules
  - /refactor-packages
  - /all-workspaces
  - /edit-relative
  - /restructure
  - /use-import-alias
  - /analyze-structure
  - /analyze-code-quality
  - /follow-monorepo
  - /follow-functional-core-imperative-shell
  - /improve-comment
---

## Goal

Refactor codebase ครบวงจรเพื่อปรับปรุงคุณภาพโค้ดและ maintainability

## Scope

ใช้สำหรับ refactor ทั้ง monorepo และ individual workspaces

## Execute

### 1. Deep Analyze Project

วิเคราะห์โปรเจกต์แบบลึกซึ้งและวางแผน refactor

1. ทำ `/deep-analyze-with-use-scripts` เพื่อวิเคราะห์โปรเจกต์ครบทุกมิติด้วย scripts automation
2. อ่าน `/restructure` ก่อนเริ่ม refactor
3. ทำ `/analyze-structure` เพื่อดูโครงสร้างไฟล์และ folders
4. ทำ `/analyze-code-quality` เพื่อระบุ SRP, SoC, type safety, anti-patterns, code smells, dead code, side effects, naming conventions
5. ถ้าเป็น monorepo: ทำ `/follow-monorepo` เพื่อตรวจสอบ monorepo structure
6. ระบุว่าเป็น monorepo หรือ single workspace

### 2. Refactor Code Units

ทำ refactor ระดับ code units (files, functions, modules, types, utils, constants)

1. ระบุ SRP violations ด้วย test coverage
2. แยกไฟล์ที่ยาวกว่า 250 บรรทัด
3. Refactor type definitions ให้มี type safety สูง
4. Refactor utility functions ให้มี single responsibility
5. Extract magic numbers และ strings เป็น constants
6. แยก concerns ตาม responsibilities
7. ทำ `/edit-relative` หลัง split ทุกระดับ

### 3. Refactor Workspaces

ทำ refactor ระดับ workspace หรือ monorepo

**Monorepo:**
1. ย้าย code ไป shared packages (ถ้าจำเป็น)
2. ทำ `/all-workspaces` สำหรับทุก workspace (เริ่มจาก shared packages)
3. ทำ `/refactor-packages` สำหรับแต่ละ workspace
4. ตรวจสอบ dependencies ระหว่าง workspaces

**Single Workspace:**
1. ทำ `/all-workspaces` สำหรับ workspace เดียว
2. ทำ `/refactor-packages` สำหรับ packages

### 4. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำ `/edit-relative` เพื่ออัปเดท references หลัง refactor
2. ตรวจสอบว่าไม่มี broken references

### 5. Restructure Files

ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์

1. ทำ `/restructure` เพื่อปรับปรุง physical structure
2. ตรวจสอบ naming conventions สม่ำเสมอ
3. ตรวจสอบ file organization ตาม domain

### 6. Setup Import Alias

ตั้งค่าและใช้ import alias

1. ทำ `/use-import-alias` เพื่อตั้งค่า import alias
2. แทนที่ relative imports ด้วย import alias
3. ตรวจสอบว่า import alias ทำงานได้ถูกต้อง

### 7. Final Restructure

ทำ `/restructure` อีกครั้งหลัง refactor เสร็จ

1. ทำ `/restructure` เพื่อตรวจสอบ physical structure อีกครั้ง
2. ยืนยันว่าทุกไฟล์และโฟลเดอร์มี single responsibility

## Rules

- ตรวจสอบ project structure ก่อนเริ่ม refactor
- ทำตามลำดับ: code units → workspaces → references → restructure → import alias
- สำหรับ monorepo: refactor shared packages ก่อน workspaces
- รักษา consistency ระหว่าง workspaces (ถ้าเป็น monorepo)
- Shared packages ต้อง generic และ reusable
- ทำ `/edit-relative` หลัง refactor
- สำหรับ barrel files refactor ให้ใช้ workflow แยก

## Expected Outcome

- Project structure ถูกตรวจสอบและระบุประเภท
- Files, functions, modules ถูก refactor ตามมาตรฐาน
- Monorepo ถูก refactor ตามมาตรฐาน (ถ้าเป็น monorepo)
- Workspaces ทั้งหมดถูก refactor ตามมาตรฐาน
- Consistency ระหว่าง workspaces (ถ้าเป็น monorepo)
- Shared packages ที่ generic และ reusable (ถ้าเป็น monorepo)
- Dependencies และ references ถูกอัปเดท
- File และ folder structure ถูก restructure ให้เป็นระเบียบ
- Import alias ถูกตั้งค่าและใช้งานอย่างถูกต้อง
- Naming conventions สม่ำเสมอทั้ง project
- Code ผ่าน lint, typecheck, test, และ build
