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

1. ตรวจสอบ functions ที่มี hardcoded values
2. ตรวจสอบ components ที่ผูกกับ business logic เฉพาะ
3. ตรวจสอบ modules ที่มี dependencies ภายนอกที่ไม่จำเป็น
4. ระบุ code ที่ซ้ำซ้อนในหลายส่วนของ project

### 2. Extract Generic Logic

แยก logic ที่ generic ออกจาก business logic เฉพาะ

1. แยก core logic ออกจาก implementation details
2. สร้าง abstractions สำหรับ patterns ที่ซ้ำกัน
3. ใช้ parameterization แทน hardcoded values
4. สร้าง interfaces สำหรับ dependencies ที่สามารถ inject ได้

### 3. Parameterize Configurations

ทำให้ configurations สามารถ customize ได้

1. แปลง hardcoded values เป็น parameters
2. สร้าง configuration objects สำหรับ options
3. ใช้ default parameters สำหรับ common cases
4. อนุญาตให้ override behaviors ผ่าน callbacks หรือ strategies

### 4. Create Reusable Components

สร้าง components ที่ reusable

1. ทำ `/separate-of-concern` เพื่อแยก concerns
2. สร้าง components ที่ composition-based แทน inheritance
3. ใช้ props/events สำหรับ communication
4. ตรวจสอบว่า components ไม่ผูกกับ specific data sources

### 5. Refactor Modules For Reusability

ปรับปรุง modules ให้ reusable

1. ทำ `/refactor-modules` เพื่อ refactor modules
2. แยก domain logic ออกจาก infrastructure
3. สร้าง pure functions ที่ไม่มี side effects
4. ใช้ dependency injection สำหรับ external dependencies

### 6. Extract Shared Utilities

แยก utilities ที่ใช้ร่วมกัน

1. ระบุ utility functions ที่ซ้ำซ้อน
2. ทำ `/refactor-utils` เพื่อ refactor utilities
3. ย้าย utilities ไป shared packages (ใช้ `/refactor-shared`)
4. ตรวจสอบว่า utilities generic และไม่มี business logic

### 7. Design Generic Types

ออกแบบ types ที่ generic และ reusable

1. ทำ `/refactor-types` เพื่อ refactor type definitions
2. ใช้ generics สำหรับ types ที่ flexible
3. สร้าง type utilities สำหรับ common patterns
4. หลีกเลี่ยง type definitions ที่ซ้ำซ้อน

### 8. Document Reusable APIs

เขียน documentation สำหรับ reusable code

1. เขียน API documentation ครบถ้วน
2. ใส่ examples การใช้งาน
3. อธิบาย parameters และ return types
4. ระบุ use cases ที่เหมาะสม

### 9. Verify Reusability

ตรวจสอบว่า code สามารถ reuse ได้จริง

1. ทดสอบการใช้งานใน contexts ต่างๆ
2. ตรวจสอบว่าไม่มี hidden dependencies
3. ตรวจสอบว่าไม่มี coupling กับ implementation details
4. ทำ `/run-test` เพื่อยืนยัน functionality

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
