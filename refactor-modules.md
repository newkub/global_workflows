---
title: Refactor Modules
description: Refactor modules ให้มี single responsibility ชัดเจน และ maintainability สูง
auto_execution_mode: 3
related_workflows:
  - /refactor-packages
  - /separate-of-concern
  - /refactor-files
  - /edit-relative
---

## Goal

Refactor code ให้เป็น modules ที่มี single responsibility ชัดเจน และ maintainability สูง

## Scope

Refactor modules ภายใน workspace ให้มี single responsibility และ structure ที่เหมาะสม

## Execute

### 1. Analyze Current Modules

1. ทำ `/analyze-project` เพื่อดูภาพรวม modules ปัจจุบัน
2. วิเคราะห์ responsibilities ของแต่ละ module
3. ระบุ modules ที่มี multiple responsibilities
4. ระบุ code ที่ซ้ำซ้อนระหว่าง modules
5. วิเคราะห์ coupling และ cohesion ของแต่ละ module
6. ตรวจสอบ circular dependencies

### 2. Plan Module Structure

1. ทำ `/plan-code` เพื่อวางแผนการ refactor modules
2. ระบุ modules ที่จะ merge, split, หรือ create ใหม่
3. จัดลำดับ refactor ตาม dependency direction
4. รอยืนยันจาก user ก่อนเริ่มทำ

### 3. Separate Concerns

แยก concerns ระหว่าง modules

1. ทำ `/separate-of-concern` สำหรับแยก concerns
2. แยก business logic จาก presentation
3. แยก data access จาก business logic
4. แยก utilities ออกเป็น shared modules

### 4. Refactor Modules

Refactor แต่ละ module ให้มี single responsibility

1. ทำ `/refactor-files` สำหรับ modules ที่ใหญ่เกินไป
2. ทำ `/relocation` เพื่อย้าย code ไปยัง modules ที่เหมาะสม
3. สร้าง barrel exports สำหรับแต่ละ module
4. กำหนด interfaces ระหว่าง modules
5. ใช้ `/use-scripts` สำหรับ file operations จำนวนมาก

### 5. Refactor Package Responsibilities

แยก packages ที่มีหลาย responsibilities

1. ทำ `/refactor-packages` สำหรับ packages
2. แยก packages ตาม domain boundaries
3. อัปเดท dependencies ระหว่าง packages

### 6. Merge Redundant Modules

รวม modules ที่ซ้ำซ้อนหรือมี responsibilities ที่ใกล้เคียง

1. ระบุ modules ที่มี responsibilities ซ้ำกัน
2. ทำ `/merge` เพื่อรวม modules
3. ลบ modules เดิมที่ไม่ใช้แล้ว
4. ทำ `/edit-relative` เพื่ออัพเดท references

### 7. Validate And Test

ตรวจสอบและทดสอบการ refactor

1. ทำ `/run-lint` และ `/run-typecheck`
2. ทำ `/run-test` เพื่อทดสอบ functionality
3. ทำ `/run-build` เพื่อตรวจสอบ build
4. ตรวจสอบ dependencies ระหว่าง modules
5. ตรวจสอบว่าไม่มี circular dependencies

### 8. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `/edit-relative`

## Rules

### 1. Single Responsibility Principle

แต่ละ module ต้องมี `single responsibility` ชัดเจน

- หนึ่ง module ทำหนึ่งเรื่องเท่านั้น
- ไม่ผสม concerns ที่แตกต่างกันใน module เดียว
- ตั้งชื่อ module ให้สะท้อนถึง responsibility
- แยก domain logic จาก infrastructure concerns

### 2. Module Boundaries

กำหนด boundaries ของแต่ละ module ชัดเจน

- ใช้ `barrel exports` สำหรับ `public APIs`
- เก็บ internal code ใน `private directories`
- แยก concerns ภายใน module ตาม `Clean Architecture`
- ใช้ consistent naming conventions

### 3. Dependency Direction

กำหนดทิศทาง dependencies ที่ชัดเจน

- Foundation modules ไม่มี dependency กับ modules อื่น
- High-level modules พึ่งพา low-level modules เท่านั้น
- ไม่มี `circular dependencies` ระหว่าง modules
- ใช้ `import alias` ตาม `/use-import-alias`

### 4. Cohesion Vs Coupling

balance ระหว่าง `cohesion` และ `coupling`

- `High cohesion` ภายในแต่ละ module
- `Low coupling` ระหว่าง modules
- ไม่ split modules เล็กเกินไป (`over-engineering`)
- ไม่รวม modules ใหญ่เกินไป (`monolith`)

### 5. Module Granularity

กำหนดขนาดของ modules ที่เหมาะสม

- พิจารณา `reusability` และ `maintainability`
- ง่ายต่อการ locate code
- ง่ายต่อการเพิ่ม features
- ง่ายต่อการทดสอบ

## Expected Outcome

### Module Structure

- แต่ละ module มี `single responsibility` ชัดเจน
- Dependencies ระหว่าง modules มีทิศทางที่ชัดเจน
- ไม่มี `circular dependencies`
- Module granularity เหมาะสมกับ project

### Code Quality

- ลด code duplication ระหว่าง modules
- `High cohesion` ภายในแต่ละ module
- `Low coupling` ระหว่าง modules
- Consistent organization ทั่วทั้ง workspace

### Maintainability

- ง่ายต่อการ locate code
- ง่ายต่อการเพิ่ม features
- ง่ายต่อการทดสอบ
- ง่ายต่อการ refactor ในอนาคต
