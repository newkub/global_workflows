---
title: Plan Code
description: วางแผน file architecture, module structure, interfaces และ integration
auto_execution_mode: 3
related_workflows:
  - /idea-file-structure
  - /recommend-architecture
  - /follow-architecture
  - /use-scripts
---

## Goal

วางแผนโครงสร้างไฟล์และ architecture อย่างเป็นระบบก่อนเริ่ม implement

## Scope

ครอบคลุมการวางแผน file architecture, module structure, interfaces และ integration ระหว่าง components

## Execute

### 1. Analyze Current State

วิเคราะห์ architecture ปัจจุบันเพื่อเข้าใจ context ก่อนวางแผน

1. อ่าน task document จาก `/plan-task`
2. ทำ `/analyze-project` เพื่อวิเคราะห์ architecture ปัจจุบัน
3. ระบุ features ที่ต้อง implement
4. ระบุ dependencies ที่จะใช้งาน
5. กำหนด constraints และ assumptions

### 2. Plan File Architecture

วางแผนโครงสร้างไฟล์ทั้งหมด

1. ทำ `/idea-file-structure` เพื่อขอไอเดียโครงสร้าง
2. วางแผน file architecture ทั้งหมด
3. จัดกลุ่ม files ตาม responsibility
4. กำหนด naming conventions

### 3. Define Module Structure

กำหนดโครงสร้าง modules และ boundaries

1. แยก modules ตาม domain หรือ feature
2. กำหนด dependencies ระหว่าง modules
3. ระบุ public APIs ของแต่ละ module
4. วางแผน data flow ระหว่าง modules

### 4. Design Interfaces And Contracts

กำหนด interfaces และ contracts ระหว่าง modules

1. กำหนด interfaces สำหรับ module communication
2. กำหนด data contracts (DTOs, entities)
3. กำหนด API contracts (REST, GraphQL, RPC)
4. กำหนด event contracts สำหรับ async communication

### 5. Plan Integration

วางแผน integration ระหว่าง components

1. วางแผน integration กับ external services
2. กำหนด integration patterns (adapters, facades)
3. วางแผน error handling และ retry logic
4. กำหนด caching strategy

### 6. Create Architecture Document

สร้างเอกสาร architecture

1. สร้างไฟล์ `.agents/architecture/<name>-DD-MM-YYYY.md`
2. บันทึก file architecture diagram
3. บันทึก module dependencies
4. บันทึก interfaces และ contracts

### 7. Validate Architecture

ตรวจสอบและยืนยัน architecture

1. ตรวจสอบ architecture สอดคล้องกับ requirements
2. ตรวจสอบไม่ม circular dependencies
3. ตรวจสอบ scalability และ maintainability
4. รอยืนยันจาก user ก่อนเริ่ม implement

## Rules

### 1. Complete Architecture

วางโครงสร้างไฟล์ทั้งหมดก่อนเขียน code

- วางโครงสร้างไฟล์ทั้งหมดก่อนเขียน code
- ระบุ interfaces และ contracts ระหว่าง modules
- คำนึงถึง scalability และ maintainability

### 2. Single Responsibility

แต่ละ module ต้องมี single responsibility

- แยก modules ตาม domain หรือ feature
- หลีกเลี่ยง god objects และ god modules
- กำหนด clear boundaries ระหว่าง modules

### 3. Dependency Direction

จัดการ dependencies ตาม direction ที่ถูกต้อง

- Dependencies ควรไปในทิศทางเดียว (high-level → low-level)
- หลีกเลี่ยง circular dependencies
- ใช้ dependency injection สำหรับ loose coupling

### 4. Interface Segregation

กำหนด interfaces ที่เฉพาะเจาะจง

- Interfaces ควรมี single responsibility
- หลีกเลี่ยง fat interfaces
- แยก interfaces ตาม client needs

### 5. Documentation

บันทึก architecture อย่างครบถ้วน

- บันทึก architectural decisions
- Document integration patterns
- ระบุ assumptions และ constraints
- สร้าง diagrams สำหรับ complex flows

### 6. Layering Principles

กำหนด layers ชัดเจนตาม Clean Architecture

- แยก presentation layer, domain layer, และ infrastructure layer
- Domain layer ไม่มี dependency กับ layers อื่น
- Infrastructure layer ใช้ interfaces จาก domain layer
- Presentation layer พึ่งพา domain layer เท่านั้น

### 7. Data Consistency

วางแผน data consistency และ transactions

- กำหนด transaction boundaries ชัดเจน
- วางแผน data validation ที่ application layer
- กำหนด data access patterns (repository pattern)
- วางแผน error handling สำหรับ data operations

## Expected Outcome

- Architecture document ที่ครอบคล้ว
- File architecture ที่ชัดเจน
- Module structure ที่มี clear boundaries
- Interfaces และ contracts ที่ well-defined
- Integration plan ที่ practical

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย

- วางแผน architecture โดยไม่วิเคราะหา current state
- ไม่กำหนด interfaces และ contracts ชัดเจน
- สร้าง circular dependencies ระหว่าง modules
- ไม่คำนึงถึง scalability และ maintainability
- ไม่บันทึก architectural decisions
