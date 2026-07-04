---
title: Improve Reuseables
description: ปรับปรุง code, components, modules ให้ generic และ reusable
auto_execution_mode: 3
related_workflows:
  - /refactor-shared
  - /refactor-modules
  - /refactor-functions
  - /separate-of-concern
  - /improve-redundancy
---

## Goal

ปรับปรุง code, components, modules ให้มีความ generic และ reusable เพื่อลด code duplication และเพิ่ม maintainability

## Scope

ใช้สำหรับปรับปรุงความสามารถในการ reuse ของ functions, components, modules, utilities, types, และ packages

## Execute

### 1. Identify Non-Reusable Code

ระบุ code ที่ไม่ reusable หรือมีความเฉพาะเจาะจงเกินไป

- ตรวจสอบ functions ที่มี hardcoded values
- ตรวจสอบ components ที่ผูกกับ business logic เฉพาะ
- ตรวจสอบ modules ที่มี dependencies ภายนอกที่ไม่จำเป็น
- ระบุ code ที่ซ้ำซ้อนในหลายส่วนของ project

### 2. Extract Generic Logic

แยก logic ที่ generic ออกจาก business logic เฉพาะ

- แยก core logic ออกจาก implementation details
- สร้าง abstractions สำหรับ patterns ที่ซ้ำกัน
- ใช้ parameterization แทน hardcoded values
- สร้าง interfaces สำหรับ dependencies ที่สามารถ inject ได้

### 3. Parameterize Configurations

ทำให้ configurations สามารถ customize ได้

- แปลง hardcoded values เป็น parameters
- สร้าง configuration objects สำหรับ options
- ใช้ default parameters สำหรับ common cases
- อนุญาตให้ override behaviors ผ่าน callbacks หรือ strategies

### 4. Create Reusable Components

สร้าง components ที่ reusable

- ทำ `/separate-of-concern` เพื่อแยก concerns
- สร้าง components ที่ composition-based แทน inheritance
- ใช้ props/events สำหรับ communication
- ตรวจสอบว่า components ไม่ผูกกับ specific data sources

### 5. Refactor Modules For Reusability

ปรับปรุง modules ให้ reusable

- ทำ `/refactor-modules` เพื่อ refactor modules
- แยก domain logic ออกจาก infrastructure
- สร้าง pure functions ที่ไม่มี side effects
- ใช้ dependency injection สำหรับ external dependencies

### 6. Extract Shared Utilities

แยก utilities ที่ใช้ร่วมกัน

- ระบุ utility functions ที่ซ้ำซ้อน
- ทำ `/refactor-utils` เพื่อ refactor utilities
- ย้าย utilities ไป shared packages (ใช้ `/refactor-shared`)
- ตรวจสอบว่า utilities generic และไม่มี business logic

### 7. Design Generic Types

ออกแบบ types ที่ generic และ reusable

- ทำ `/refactor-types` เพื่อ refactor type definitions
- ใช้ generics สำหรับ types ที่ flexible
- สร้าง type utilities สำหรับ common patterns
- หลีกเลี่ยง type definitions ที่ซ้ำซ้อน

### 8. Document Reusable APIs

เขียน documentation สำหรับ reusable code

- เขียน API documentation ครบถ้วน
- ใส่ examples การใช้งาน
- อธิบาย parameters และ return types
- ระบุ use cases ที่เหมาะสม

### 9. Verify Reusability

ตรวจสอบว่า code สามารถ reuse ได้จริง

- ทดสอบการใช้งานใน contexts ต่างๆ
- ตรวจสอบว่าไม่มี hidden dependencies
- ตรวจสอบว่าไม่มี coupling กับ implementation details
- ทำ `/run-test` เพื่อยืนยัน functionality

## Rules

### 1. Generic Design

ออกแบบให้ generic และ flexible

- หลีกเลี่ยง hardcoded values
- ใช้ parameterization สำหรับ configurations
- อนุญาต customization ผ่าน options/callbacks
- ไม่ผูกกับ specific implementations

### 2. Separation Of Concerns

แยก concerns อย่างชัดเจน

- แยก business logic ออกจาก infrastructure
- แยก core logic ออกจาก presentation
- แยก pure functions ออกจาก side effects
- ทำ `/separate-of-concern` เมื่อจำเป็น

### 3. Dependency Management

จัดการ dependencies อย่างเหมาะสม

- ใช้ dependency injection สำหรับ external dependencies
- ลด dependencies ภายนอกให้น้อยที่สุด
- สร้าง interfaces สำหรับ dependencies
- ไม่ผูกกับ specific libraries หากเป็นไปได้

### 4. API Design

ออกแบบ APIs ที่ reusable

- Public APIs ต้องชัดเจนและเสถียร
- ใช้ consistent naming conventions
- ให้ default behaviors ที่ reasonable
- อนุญาต override และ extension

### 5. Documentation

Reusable code ต้องมี documentation ครบถ้วน

- API documentation ต้องชัดเจน
- Examples การใช้งานต้องครบถ้วน
- อธิบาย use cases ที่เหมาะสม
- ระบุ limitations และ trade-offs

## Expected Outcome

- Code ที่ generic และ reusable เพิ่มขึ้น
- Code duplication ลดลง
- Functions, components, modules สามารถ reuse ได้ใน contexts ต่างๆ
- Shared utilities และ types ถูกจัดระเบียบ
- APIs ที่ reusable มี documentation ครบถ้วน
- Dependencies ภายนอกลดลง
- Maintainability และ testability เพิ่มขึ้น
