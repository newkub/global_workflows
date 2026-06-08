---
title: Refactor To Workspace
description: Refactor workspaces ให้มี single responsibility และโครงสร้างที่เหมาะสม
auto_execution_mode: 3
---

## Goal

Refactor workspaces ให้แต่ละ workspace มี single responsibility ชัดเจน

## Execute

### 1. Analyze Workspaces

วิเคราะห์แต่ละ workspace ปัจจุบัน

1. ทำ `/each-workspaces` เพื่อวิเคราะห์แต่ละ workspace
2. วิเคราะห์ responsibilities ของแต่ละ workspace
3. ระบุ workspaces ที่มี multiple responsibilities
4. ระบุ code ที่ซ้ำซ้อนระหว่าง workspaces
5. วิเคราะห์ coupling และ cohesion ของแต่ละ workspace

### 2. Planning

วางแผนการ refactor workspaces

1. ทำ `/plan` เพื่อวางแผนการ refactor ครบถ้วน
2. ระบุ workspaces ที่จะ merge, split, หรือ create ใหม่
3. จัดลำดับ refactor ตาม dependency direction
4. รอยืนยันจาก user ก่อนเริ่มทำ

### 3. Refactor Each Workspace

Refactor แต่ละ workspace ให้มี single responsibility

1. ทำ `/each-workspaces` เพื่อ refactor แต่ละ workspace
2. ย้าย code ที่ไม่เกี่ยวข้องไปยัง workspaces ที่เหมาะสม
3. ทำ `/refactor-to-single-responsibility` สำหรับแต่ละ workspace
4. ทำ `/update-docs` เพื่ออัพเดท references ระหว่าง workspaces

### 4. Merge Redundant Workspaces

รวม workspaces ที่ซ้ำซ้อนหรือมี responsibilities ที่ใกล้เคียง

1. ระบุ workspaces ที่มี responsibilities ซ้ำกัน
2. ทำ `/merge` เพื่อรวม workspaces
3. ลบ workspaces เดิมที่ไม่ใช้แล้ว
4. ทำ `/update-reference` เพื่ออัพเดท references

### 5. Validate And Test

ตรวจสอบและทดสอบการ refactor

1. ทำ `/run-typecheck` เพื่อตรวจสอบ type safety
2. ทำ `/run-test` เพื่อทดสอบ functionality
3. ทำ `/run-build` เพื่อตรวจสอบ build
4. ตรวจสอบ dependencies ระหว่าง workspaces

## Rules

### 1. Single Responsibility Principle

แต่ละ workspace ต้องมี single responsibility ชัดเจน

- หนึ่ง workspace ทำหนึ่งเรื่องเท่านั้น
- ไม่ผสม concerns ที่แตกต่างกันใน workspace เดียว
- ตั้งชื่อ workspace ให้สะท้อนถึง responsibility
- แยก domain logic จาก infrastructure concerns

### 2. Dependency Direction

กำหนดทิศทาง dependencies ที่ชัดเจน

- Foundation workspaces ไม่มี dependency กับ workspaces อื่น
- High-level workspaces พึ่งพา low-level workspaces เท่านั้น
- ไม่มี circular dependencies ระหว่าง workspaces
- ใช้ import alias ตาม `/use-import-alias`

### 3. Workspace Granularity

กำหนดขนาดของ workspaces ที่เหมาะสม

- ไม่ split workspaces เล็กเกินไป (over-engineering)
- ไม่รวม workspaces ใหญ่เกินไป (monolith)
- balance ระหว่าง cohesion และ coupling
- พิจารณา reusability และ maintainability

### 4. Code Organization

จัดระเบียบ code ภายในแต่ละ workspace

- ใช้ barrel exports สำหรับ public APIs
- เก็บ internal code ใน private directories
- แยก concerns ภายใน workspace ตาม Clean Architecture
- ใช้ consistent naming conventions

## Expected Outcome

### Workspace Structure

- แต่ละ workspace มี single responsibility ชัดเจน
- Dependencies ระหว่าง workspaces มีทิศทางที่ชัดเจน
- ไม่มี circular dependencies
- Workspace granularity เหมาะสมกับ project

### Code Quality

- ลด code duplication ระหว่าง workspaces
- High cohesion ภายในแต่ละ workspace
- Low coupling ระหว่าง workspaces
- Consistent organization ทั่วทั้ง monorepo

### Maintainability

- ง่ายต่อการ locate code
- ง่ายต่อการเพิ่ม features
- ง่ายต่อการทดสอบ
- ง่ายต่อการ refactor ในอนาคต