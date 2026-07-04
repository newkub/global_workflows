---
title: Refactor
description: Refactor codebase ครบวงจรทั้ง monorepo และ workspace
auto_execution_mode: 3
related_workflows:
  - /refactor-shared
  - /refactor-files
  - /refactor-functions
  - /refactor-modules
  - /refactor-constants
  - /refactor-types
  - /refactor-utils
  - /refactor-packages
  - /all-workspaces
  - /edit-relative
  - /restructure
  - /use-import-alias
  - /analyze-project
  - /analyze-structure
  - /follow-barrel-files
---

## Goal

Refactor codebase ครบวงจรเพื่อปรับปรุงคุณภาพโค้ดและ maintainability

## Scope

ใช้สำหรับ refactor ทั้ง monorepo และ individual workspaces ตามโครงสร้าง project

## Execute

### 0. Analyze Project

วิเคราะห์โปรเจกต์อย่างครบถ้วนก่อนเริ่ม refactor

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์พื้นฐาน
2. รับผลลัพธ์จากการวิเคราะห์เพื่อใช้ในการวางแผน refactor

### 1. Check Project Structure

ตรวจสอบว่าเป็น monorepo หรือ single workspace

1. ทำ `/analyze-structure` เพื่อดูโครงสร้างไฟล์และ folders
2. ตรวจสอบ `package.json` สำหรับ `workspaces` field
3. ตรวจสอบ turbo.json หรือ moon config สำหรับ monorepo setup
4. ระบุว่าเป็น monorepo หรือ single workspace

### 2. Refactor Files

ทำ refactor ระดับ files

1. ทำ `/refactor-files` เพื่อ refactor file structure และ organization
2. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัด
3. ตรวจสอบว่าแต่ละไฟล์มี single responsibility

### 3. Refactor Functions

ทำ refactor ระดับ functions

1. ทำ `/refactor-functions` เพื่อ refactor functions
2. ตรวจสอบว่า functions ไม่เกิน 20-30 บรรทัด
3. ตรวจสอบว่าแต่ละ function มี single responsibility

### 4. Refactor Modules

ทำ refactor ระดับ modules

1. ทำ `/refactor-modules` เพื่อ refactor modules
2. ตรวจสอบว่า modules มี single responsibility
3. ตรวจสอบว่าไม่มี circular dependencies

### 5. Refactor Constants

ทำ refactor ระดับ constants

1. ทำ `/refactor-constants` เพื่อ extract magic numbers และ strings
2. ตรวจสอบว่าไม่มี magic numbers หรือ hardcoded strings
3. ตรวจสอบว่า constants จัดระเบียบตาม domain

### 6. Refactor Types

ทำ refactor ระดับ types

1. ทำ `/refactor-types` เพื่อ refactor type definitions
2. ตรวจสอบว่าไม่มี type definitions ซ้ำซ้อน
3. ตรวจสอบว่าไม่มี `any` types

### 7. Refactor Utils

ทำ refactor ระดับ utility functions

1. ทำ `/refactor-utils` เพื่อ refactor utility functions
2. ตรวจสอบว่า utility functions มี single responsibility
3. ตรวจสอบว่าไม่มี utility functions ซ้ำซ้อน

### 8. Refactor Workspaces (Monorepo) Or Single Workspace

ทำ refactor ระดับ workspace หรือ monorepo

**ถ้าเป็น Monorepo:**
1. ทำ `/refactor-shared` สำหรับย้าย code ไป shared packages
2. ทำ `/all-workspaces` สำหรับทุก workspace (เริ่มจาก shared packages)
3. ทำ `/refactor-packages` สำหรับแต่ละ workspace เพื่อ refactor packages
4. ตรวจสอบ dependencies ระหว่าง workspaces
5. ตรวจสอบ shared packages ที่ถูกใช้งานอย่างถูกต้อง
6. ตรวจสอบ versioning ที่สอดคล้องกัน
7. ตรวจสอบ consistency ระหว่าง workspaces

**ถ้าเป็น Single Workspace:**
1. ทำ `/all-workspaces` สำหรับ workspace เดียว
2. ทำ `/refactor-packages` สำหรับ packages

### 9. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `/edit-relative`

### 10. Restructure Files And Folders

ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์หลัง refactor เสร็จ

1. ทำ `/restructure` เพื่อปรับปรุง physical structure
2. ตรวจสอบ naming conventions สม่ำเสมอ
3. ตรวจสอบ file organization ตาม domain
4. ตรวจสอบ folder structure ที่เหมาะสม

### 11. Setup Import Alias

ตั้งค่าและใช้ import alias แทน relative paths ที่ซับซ้อน

1. ทำ `/use-import-alias` เพื่อตั้งค่า import alias
2. ตรวจสอบ configuration files สำหรับ import alias
3. แทนที่ relative imports ด้วย import alias
4. ตรวจสอบว่า import alias ทำงานได้ถูกต้อง

### 12. Refactor Barrel Files

ทำให้ entry files มีเฉพาะ re-export และจัดการ imports/exports

1. ทำ `/follow-barrel-files` เพื่อ refactor entry files ให้มีเฉพาะ re-export
2. ตรวจสอบ imports ภายใน module ใช้ direct module path
3. ตรวจสอบ imports ภายนอก module ใช้ barrel file
4. ตรวจสอบว่าไม่มี side effects ใน barrel files

### 13. Verify Quality

ตรวจสอบคุณภาพหลัง refactor

1. ทำ `/run-lint` และ `/run-typecheck`
2. ทำ `/run-test` เพื่อตรวจสอบว่าไม่มี regression
3. ทำ `/run-build` เพื่อตรวจสอบว่า build ผ่าน

## Rules

### 1. Project Structure Check

ตรวจสอบ project structure ก่อนเริ่ม refactor

- ตรวจสอบว่าเป็น monorepo หรือ single workspace
- ใช้ strategy ที่เหมาะสมกับ project type

### 2. Refactor Order

ทำตามลำดับที่เหมาะสม

- ทำ `/refactor-files`, `/refactor-functions`, `/refactor-modules` ก่อน refactor workspaces
- สำหรับ monorepo: refactor shared packages ก่อน
- สำหรับ monorepo: refactor workspaces ที่มี dependencies น้อยก่อน
- ทำ `/restructure` หลังจาก refactor และ update references เสร็จ
- ทำ `/use-import-alias` หลังจาก restructure เสร็จ
- ทำ `/follow-barrel-files` หลังจาก setup import alias เสร็จ

### 3. Monorepo Consistency

รักษา consistency ระหว่าง workspaces

- ใช้ naming conventions เดียวกันทั้ง monorepo
- ใช้ architecture patterns เดียวกันทั้ง monorepo
- ใช้ linting และ formatting rules เดียวกันทั้ง monorepo

### 4. Shared Packages

จัดการ shared packages อย่างเหมาะสม

- Shared packages ต้อง generic และ reusable
- Shared packages ต้องมี versioning ที่ชัดเจน
- Shared packages ต้องมี documentation ครบถ้วน

### 5. Reference Updates

อัปเดท references อย่างครบถ้วน

- ทำ `/edit-relative` หลัง refactor
- ตรวจสอบว่าไม่มี broken references

### 6. Quality Verification

ตรวจสอบ quality หลัง refactor

- ทำ lint, typecheck, test, build
- ไม่ข้ามขั้นตอน verify
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก workflows อื่น

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
- Entry files มีเฉพาะ re-export และ imports ถูกต้องตาม barrel files best practices
- Naming conventions สม่ำเสมอทั้ง project
- Code ผ่าน lint, typecheck, test, และ build
