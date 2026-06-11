---
title: Refactor To Packages
description: Refactor packages ให้ generic และ reusable กับ project อื่นๆ
auto_execution_mode: 3
---

## Goal

Refactor packages ให้แต่ละ package มี single responsibility และ generic สามารถ reuse กับ project อื่นๆ ได้

## Execute

### 1. Analyze Packages

วิเคราะห์แต่ละ package ปัจจุบัน

1. ทำ `/all-folders` ใน `packages/` เพื่อวิเคราะห์แต่ละ package
2. วิเคราะห์ responsibilities ของแต่ละ package
3. ระบุ packages ที่มี multiple responsibilities
4. ระบุ code ที่ซ้ำซ้อนระหว่าง packages
5. วิเคราะห์ coupling และ cohesion ของแต่ละ package
6. ระบุ dependencies ที่ specific กับ project เท่านั้น

### 2. Planning

วางแผนการ refactor packages

1. ทำ `/plan` เพื่อวางแผนการ refactor ครบถ้วน
2. ระบุ packages ที่จะ merge, split, หรือ create ใหม่
3. จัดลำดับ refactor ตาม dependency direction
4. ระบุ features ที่ต้อง generic และ reusable
5. รอยืนยันจาก user ก่อนเริ่มทำ

### 3. Refactor Each Package

Refactor แต่ละ package ให้ generic และ reusable

1. ทำ `/all-folders` ใน `packages/` เพื่อ refactor แต่ละ package
2. ย้าย code ที่ไม่เกี่ยวข้องไปยัง packages ที่เหมาะสม
3. ทำ `/refactor-file-to-single-responsibility` สำหรับแต่ละ package
4. แยก project-specific logic ออกจาก generic logic
5. ทำ `/update-docs` เพื่ออัพเดท references ระหว่าง packages

### 4. Merge Redundant Packages

รวม packages ที่ซ้ำซ้อนหรือมี responsibilities ที่ใกล้เคียง

1. ระบุ packages ที่มี responsibilities ซ้ำกัน
2. ทำ `/merge` เพื่อรวม packages
3. ลบ packages เดิมที่ไม่ใช้แล้ว
4. ทำ `/update-reference` เพื่ออัพเดท references

### 5. Validate And Test

ตรวจสอบและทดสอบการ refactor

1. ทำ `/run-typecheck` เพื่อตรวจสอบ type safety
2. ทำ `/run-test` เพื่อทดสอบ functionality
3. ทำ `/run-build` เพื่อตรวจสอบ build
4. ตรวจสอบ dependencies ระหว่าง packages
5. ทดสอบ reusability กับ project อื่นๆ (ถ้ามี)

### 6. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `@[/edit-relative]`

## Rules

### 1. Single Responsibility Principle

แต่ละ package ต้องมี single responsibility ชัดเจน

- หนึ่ง package ทำหนึ่งเรื่องเท่านั้น
- ไม่ผสม concerns ที่แตกต่างกันใน package เดียว
- ตั้งชื่อ package ให้สะท้อนถึง responsibility
- แยก domain logic จาก infrastructure concerns

### 2. Generic And Reusable

Packages ต้อง generic และ reusable กับ project อื่นๆ

- ไม่ hardcode project-specific values หรือ configurations
- ใช้ parameters, options, หรือ configuration objects แทน
- แยก project-specific logic ออกจาก generic logic
- รองรับ customization ผ่าน configuration
- ไม่มี dependencies ที่ specific กับ project เท่านั้น
- เขียน documentation ครบถ้วนสำหรับ reusability

### 3. Dependency Direction

กำหนดทิศทาง dependencies ที่ชัดเจน

- Foundation packages ไม่มี dependency กับ packages อื่น
- High-level packages พึ่งพา low-level packages เท่านั้น
- ไม่มี circular dependencies ระหว่าง packages
- ใช้ import alias ตาม `/use-import-alias`

### 4. Package Granularity

กำหนดขนาดของ packages ที่เหมาะสม

- ไม่ split packages เล็กเกินไป (over-engineering)
- ไม่รวม packages ใหญ่เกินไป (monolith)
- balance ระหว่าง cohesion และ coupling
- พิจารณา reusability และ maintainability

### 5. Code Organization

จัดระเบียบ code ภายในแต่ละ package

- ใช้ barrel exports สำหรับ public APIs
- เก็บ internal code ใน private directories
- แยก concerns ภายใน package ตาม Clean Architecture
- ใช้ consistent naming conventions

## Expected Outcome

### Package Structure

- แต่ละ package มี single responsibility ชัดเจน
- Packages generic และ reusable กับ project อื่นๆ
- Dependencies ระหว่าง packages มีทิศทางที่ชัดเจน
- ไม่มี circular dependencies
- Package granularity เหมาะสมกับ project

### Code Quality

- ลด code duplication ระหว่าง packages
- High cohesion ภายในแต่ละ package
- Low coupling ระหว่าง packages
- Consistent organization ทั่วทั้ง monorepo

### Maintainability

- ง่ายต่อการ locate code
- ง่ายต่อการเพิ่ม features
- ง่ายต่อการทดสอบ
- ง่ายต่อการ reuse ใน project อื่นๆ
- ง่ายต่อการ refactor ในอนาคต
