---
title: Plan Code
description: วางแผน file architecture, module structure, interfaces และ integration
auto_execution_mode: 3
related_workflows:
  - /idea-refactor-files
  - /recommend-architecture
  - /follow-architecture
  - /use-scripts
  - /follow-content-quality
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
3. ระบุ features ที่ต้อง implement จาก task document
4. ระบุ dependencies ที่จะใช้งานจาก library choices ใน task document
5. กำหนด constraints และ assumptions ที่เกี่ยวกับ architecture
6. ระบุ architectural patterns ที่มีอยู่ในปัจจุบัน

### 2. Plan File Architecture

วางแผนโครงสร้างไฟล์ทั้งหมด

1. ทำ `/idea-refactor-files` เพื่อขอไอเดียโครงสร้างไฟล์
2. ทำ `/recommend-architecture` เพื่อแนะนำ architecture ที่เหมาะสม
3. วางแผน file architecture ทั้งหมดโดยจัดกลุ่มตาม responsibility
4. กำหนด naming conventions สำหรับ files และ directories
5. ระบุ barrel files และ entry points
6. วางแผน directory structure แบบ tree พร้อม comment ด้านหลัง
7. สร้าง file pattern table: File Pattern, Description, Naming, Import

### 3. Define Module Structure

กำหนดโครงสร้าง modules และ boundaries

1. แยก modules ตาม domain หรือ feature
2. กำหนด dependencies ระหว่าง modules แบบ directional (high-level → low-level)
3. ระบุ public APIs ของแต่ละ module
4. วางแผน data flow ระหว่าง modules
5. กำหนด module boundaries ชัดเจนเพื่อหลีกเลี่ยง god modules
6. ระบุ shared modules และ common utilities

### 4. Design Interfaces And Contracts

กำหนด interfaces และ contracts ระหว่าง modules

1. กำหนด interfaces สำหรับ module communication
2. กำหนด data contracts (DTOs, entities, value objects)
3. กำหนด API contracts (REST, GraphQL, RPC) ถ้ามี
4. กำหนด event contracts สำหรับ async communication ถ้ามี
5. ออกแบบ interfaces ตาม interface segregation principle
6. ระบุ error types และ error handling contracts

### 5. Plan Integration

วางแผน integration ระหว่าง components

1. วางแผน integration กับ external services ถ้ามี
2. กำหนด integration patterns (adapters, facades, repositories)
3. วางแผน error handling และ retry logic สำหรับ external calls
4. กำหนด caching strategy สำหรับ frequently accessed data
5. วางแผน transaction boundaries สำหรับ data operations
6. ระบุ data validation points ที่ application layer

### 6. Create Architecture Document

สร้างเอกสาร architecture

1. สร้างไฟล์ `.agents/architecture/<name>-DD-MM-YYYY.md`
2. บันทึก file architecture diagram แบบ tree structure
3. บันทึก module dependencies และ data flow
4. บันทึก interfaces และ contracts ทั้งหมด
5. บันทึก integration plan และ patterns ที่เลือก
6. บันทึก architectural decisions พร้อมเหตุผล
7. บันทึก assumptions และ constraints

### 7. Validate Architecture

ตรวจสอบและยืนยัน architecture

1. ตรวจสอบ architecture สอดคล้องกับ requirements ใน task document
2. ตรวจสอบไม่มี circular dependencies ระหว่าง modules
3. ตรวจสอบ scalability และ maintainability ของ architecture
4. ตรวจสอบทุก module มี single responsibility
5. ตรวจสอบ dependency direction ถูกต้อง (high-level → low-level)
6. ตรวจสอบ interfaces ครบถ้วนสำหรับ module communication
7. รอยืนยันจาก user ก่อนเริ่ม implement

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

- บันทึก architectural decisions พร้อมเหตุผล
- Document integration patterns ที่เลือก
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

- Architecture document ที่ครอบคลุมใน `.agents/architecture/`
- File architecture ที่ชัดเจนพร้อม tree structure และ file pattern table
- Module structure ที่มี clear boundaries และ single responsibility
- Interfaces และ contracts ที่ well-defined
- Integration plan ที่ practical พร้อม patterns ที่เลือก
- Architectural decisions ที่บันทึกพร้อมเหตุผล

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย

- วางแผน architecture โดยไม่วิเคราะห์ current state
- ไม่กำหนด interfaces และ contracts ชัดเจน
- สร้าง circular dependencies ระหว่าง modules
- ไม่คำนึงถึง scalability และ maintainability
- ไม่บันทึก architectural decisions
