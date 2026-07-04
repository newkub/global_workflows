---
title: Refactor Shared
description: Refactor code ใน workspaces ให้ย้ายไป shared packages
auto_execution_mode: 3
related_workflows:
  - /refactor
  - /refactor-packages
  - /all-workspaces
  - /follow-monorepo
  - /follow-barrel-files
---

## Goal

Refactor code ใน workspaces ให้ย้ายไป shared packages เพื่อ reuse และ maintainability

## Scope

ใช้สำหรับ refactor code ใน workspaces ที่ควรเป็น shared packages เช่น utilities, types, helpers

## Execute

### 1. Identify Code To Share

ระบุ code ที่ควรย้ายไป shared packages

1. ตรวจสอบ workspaces ทั้งหมดสำหรับ code ที่ซ้ำซ้อน
2. ตรวจสอบ code ที่มีความ generic และ reusable
3. ตรวจสอบ utilities, types, helpers ที่ใช้ในหลาย workspaces
4. จัดกลุ่ม code ตาม domain และ responsibility

### 2. Analyze Shared Package Structure

วิเคราะห์โครงสร้าง shared packages ที่มีอยู่และที่ควรสร้าง

1. ทำ `/analyze-structure` สำหรับ shared packages ที่มีอยู่
2. ตรวจสอบว่าแต่ละ shared package มี single responsibility ชัดเจน
3. ตรวจสอบว่าไม่มี overlapping responsibilities ระหว่าง shared packages
4. ระบุ shared packages ใหม่ที่ควรสร้างตาม code ที่ระบุได้

### 3. Create Or Update Shared Packages

สร้างหรืออัปเดต shared packages ตาม code ที่ระบุ

1. สร้าง shared packages ใหม่ถ้าจำเป็น
2. ย้าย code จาก workspaces ไป shared packages
3. ทำ `/refactor-files` สำหรับ shared packages
4. ทำ `/refactor-functions` สำหรับ shared packages
5. ทำ `/refactor-modules` สำหรับ shared packages
6. ทำ `/refactor-constants` สำหรับ shared packages
7. ทำ `/refactor-types` สำหรับ shared packages
8. ทำ `/refactor-utils` สำหรับ shared packages

### 4. Ensure Generic And Reusable

ตรวจสอบและปรับปรุงให้ shared packages generic และ reusable

1. ตรวจสอบว่าไม่มี business logic เฉพาะของ workspace ใดๆ
2. ตรวจสอบว่าไม่มี hardcoded values ที่เฉพาะเจาะจง
3. ตรวจสอบว่า functions และ modules มี parameterization ที่เหมาะสม
4. ตรวจสอบว่าไม่มี dependencies ภายนอกที่ไม่จำเป็น
5. ตรวจสอบว่า exports มีความชัดเจนและเป็น public API ที่ดี

### 5. Setup Barrel Files

ทำให้ entry files มีเฉพาะ re-export

1. ทำ `/follow-barrel-files` สำหรับแต่ละ shared package
2. ตรวจสอบว่า barrel files มีเฉพาะ re-export
3. ตรวจสอบว่า imports ภายใน package ใช้ direct module path
4. ตรวจสอบว่า imports ภายนอก package ใช้ barrel file

### 6. Update Dependencies

อัปเดท dependencies ระหว่าง shared packages และ workspaces

1. ตรวจสอบ dependencies ระหว่าง shared packages ใน `package.json`
2. ตรวจสอบ version constraints ที่เหมาะสม
3. เพิ่ม dependencies ของ shared packages ใน workspaces ที่ใช้
4. อัปเดท dependencies ให้เป็น version ล่าสุดที่เสถียร
5. ตรวจสอบว่าไม่มี unused dependencies

### 7. Update Documentation

อัปเดท documentation สำหรับ shared packages

1. ตรวจสอบ `README.md` ในแต่ละ shared package
2. ตรวจสอบว่ามี examples การใช้งานครบถ้วน
3. ตรวจสอบว่ามี API documentation ครบถ้วน
4. ตรวจสอบว่ามี changelog สำหรับ breaking changes

### 8. Update Source Workspaces

อัปเดท workspaces ต้นทางที่ code ถูกย้ายออก

1. ลบ code ที่ถูกย้ายไป shared packages
2. อัปเดท imports ให้ใช้จาก shared packages
3. ทำ `/edit-relative` สำหรับ references ทั้งหมด
4. ตรวจสอบว่าไม่มี broken references

### 9. Verify Quality

ตรวจสอบคุณภาพหลัง refactor

1. ทำ `/run-lint` สำหรับ shared packages
2. ทำ `/run-typecheck` สำหรับ shared packages
3. ทำ `/run-test` สำหรับ shared packages
4. ทำ `/run-build` สำหรับ shared packages
5. ทำ `/run-lint` สำหรับ workspaces ที่ถูกอัปเดท
6. ทำ `/run-typecheck` สำหรับ workspaces ที่ถูกอัปเดท
7. ทำ `/run-test` สำหรับ workspaces ที่ถูกอัปเดท

## Rules

### 1. Identify Correct Code

ระบุ code ที่ควรเป็น shared อย่างถูกต้อง

- Code ที่ซ้ำซ้อนในหลาย workspaces
- Code ที่มีความ generic และ reusable
- Utilities, types, helpers ที่ใช้ในหลาย workspaces
- ไม่มี business logic เฉพาะของ workspace ใดๆ

### 2. Single Responsibility

แต่ละ shared package ต้องมี single responsibility ชัดเจน

- ไม่มี overlapping responsibilities ระหว่าง shared packages
- แต่ละ package ต้องมี domain ที่ชัดเจน
- แต่ละ package ต้องมีเหตุผลที่ชัดเจนที่จะเป็น shared

### 3. Generic And Reusable

Shared packages ต้อง generic และ reusable

- ไม่มี business logic เฉพาะของ workspace ใดๆ
- ไม่มี hardcoded values ที่เฉพาะเจาะจง
- Functions และ modules ต้องมี parameterization ที่เหมาะสม
- Exports ต้องเป็น public API ที่ชัดเจน

### 4. Dependency Management

จัดการ dependencies ระหว่าง shared packages และ workspaces อย่างเหมาะสม

- ไม่มี circular dependencies ระหว่าง shared packages
- Dependencies ระหว่าง shared packages ต้องมีเหตุผลที่ชัดเจน
- Version constraints ต้องเหมาะสมและเสถียร
- ไม่มี unused dependencies

### 5. Refactor Order

ทำตามลำดับที่เหมาะสม

- ระบุ code ที่ควรเป็น shared ก่อน
- สร้างหรืออัปเดต shared packages ก่อน
- Refactor shared packages ก่อนอัปเดท workspaces
- อัปเดท workspaces หลังจาก shared packages refactor เสร็จ

### 6. Barrel Files

ใช้ barrel files อย่างถูกต้อง

- Barrel files ต้องมีเฉพาะ re-export
- Imports ภายใน package ต้องใช้ direct module path
- Imports ภายนอก package ต้องใช้ barrel file
- ไม่มี side effects ใน barrel files

### 7. Documentation

Shared packages ต้องมี documentation ครบถ้วน

- ต้องมี `README.md` ที่อธิบาย purpose และ usage
- ต้องมี examples การใช้งานครบถ้วน
- ต้องมี API documentation ครบถ้วน
- ต้องมี changelog สำหรับ breaking changes

### 8. Quality Verification

ตรวจสอบ quality หลัง refactor

- ทำ lint, typecheck, test, build สำหรับ shared packages
- ทำ lint, typecheck, test สำหรับ workspaces ที่ถูกอัปเดท
- ไม่ข้ามขั้นตอน verify
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก workflows อื่น

## Expected Outcome

- Code ที่ควรเป็น shared ถูกระบุและจัดกลุ่มตาม domain
- Shared packages ที่มีอยู่ถูกตรวจสอบและอัปเดต
- Shared packages ใหม่ถูกสร้างตามความจำเป็น
- Code ถูกย้ายจาก workspaces ไป shared packages
- Shared packages ถูก refactor ตามมาตรฐาน code quality
- Shared packages generic และ reusable
- ไม่มี business logic เฉพาะของ workspace ใดๆ
- Barrel files มีเฉพาะ re-export และใช้งานถูกต้อง
- Dependencies ระหว่าง shared packages และ workspaces ถูกจัดการอย่างเหมาะสม
- Documentation ครบถ้วนสำหรับแต่ละ shared package
- Workspaces ต้นทางถูกอัปเดทและลบ code ที่ย้ายออก
- Shared packages ผ่าน lint, typecheck, test, และ build
- Workspaces ที่ถูกอัปเดทผ่าน lint, typecheck, และ test
