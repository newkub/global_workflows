---
title: Separate Of Concern
description: แยกโค้ดตาม responsibilities เพื่อเพิ่ม maintainability
auto_execution_mode: 3
related_workflows:
  - /refactor
  - /refactor-files
---

## Goal

แยกโค้ดตาม responsibilities เพื่อลด coupling และเพิ่ม cohesion

## Scope

ครอบคลุมการแยก logical concerns ตาม responsibilities (layers, interfaces, data flow) ไม่ใช่ physical file organization สำหรับ physical file organization ให้ใช้ `/restructure`

## Execute

### 1. Identify Concerns

1. วิเคราะห์โค้ดเพื่อระบุ concerns ที่ผสมกัน
2. จัดกลุ่ม concerns ตาม business domains
3. ระบุ dependencies ระหว่าง concerns
4. ตรวจสอบ concerns ที่มี coupling สูง

### 2. Define Boundaries

1. กำหนด interfaces ระหว่าง concerns
2. สร้าง contracts สำหรับ communication
3. กำหนด data flow ระหว่าง concerns
4. วางแผน layer separation

### 3. Extract Concerns

1. สร้าง modules ใหม่สำหรับแต่ละ concern
2. ย้าย logic ที่เกี่ยวข้องไปยัง modules
3. สร้าง adapters สำหรับ integration
4. ลบ dependencies ที่ไม่จำเป็น

### 4. Verify Separation

1. รัน `/run-verify` เพื่อตรวจสอบคุณภาพ
2. ทำ `/test-usage` เพื่อยืนยันว่าใช้งานได้
3. ตรวจสอบ coupling ระหว่าง modules
4. ทำ `/update-references` หากมี file operations

### 5. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `@[/edit-relative]`

## Rules

### 1. Concern Types

ประเภทของ concerns ที่ควรแยก:

- Business logic และ domain rules
- Data access และ persistence
- Presentation และ UI logic
- Infrastructure และ external services
- Cross-cutting concerns (logging, caching, validation)
- Side effects (I/O, state mutations, async operations) - ทำ `/improve-side-effect`

### 2. Separation Principles

หลักการแยก concerns:

- Single Responsibility Principle (SRP)
- High cohesion ภายใน concern เดียวกัน
- Low coupling ระหว่าง concerns
- Clear interfaces ระหว่าง concerns
- Independent deployment ของ concerns

### 3. Layer Architecture

ใช้ layer separation เมื่อเหมาะสม:

- Presentation layer (UI, API endpoints)
- Application layer (use cases, workflows)
- Domain layer (business logic, entities)
- Infrastructure layer (database, external services)

### 4. Communication Patterns

รูปแบบการสื่อสารระหว่าง concerns:

- Dependency injection สำหรับ loose coupling
- Events สำหรับ async communication
- Adapters สำหรับ protocol translation
- Facades สำหรับ complex subsystems

### 5. Data Flow

จัดการ data flow ระหว่าง concerns:

- Unidirectional data flow เมื่อเป็นไปได้
- Clear ownership ของ data
- Immutable data passing
- Validation ที่ boundaries

## Expected Outcome

- Concerns แยกชัดเจนตาม responsibilities
- Coupling ลดลงระหว่าง modules
- Cohesion สูงขึ้นภายใน modules
- Code ง่ายต่อการ test และ maintain
- Architecture สอดคล้องกับ SOLID principles
- สำหรับ physical file organization ให้ใช้ `/restructure`

