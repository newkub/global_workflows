---
title: Use Library Effectively
description: วิเคราะห์ dependencies ใน package manifest และใช้งานให้เต็มประสิทธิภาพ
auto_execution_mode: 3
---

## Goal

นำ libraries ที่มีอยู่ใน package manifest ไปใช้ใน codebase ให้มีประสิทธิภาพ

## Scope

ใช้สำหรับทุก workspace ที่มี dependencies ใน package manifest

## Execute

### 1. Discover Dependencies

1. อ่าน `package manifest` เช่น `package.json`, `Cargo.toml`, `pyproject.toml`
2. ทำ `/analyze-project` เพื่อดู patterns ที่มีอยู่
3. สร้างรายการ dependencies พร้อม categorize ตาม purpose
4. ระบุ dependencies ที่ซ้ำซ้อนหรือทำงานคล้ายกัน

### 2. Research Capabilities

1. ทำ `/learn-from-web` เพื่อศึกษา documentation และ features
2. ระบุ features ที่ยังไม่ได้ใช้งานแต่จะเป็นประโยชน์
3. ค้นหา best practices และ patterns สำหรับการใช้งาน
4. ทำ `/use-lib-better` เพื่อเปรียบเทียบกับ alternative libraries

### 3. Analyze Type Declarations

1. ทำ `/check-type-declarations` เพื่อค้นหาและวิเคราะห์ d.ts files
2. ค้นหา d.ts files ใน project และ node_modules
3. วิเคราะห์ internal types และ external types
4. ระบุ APIs ที่พร้อมใช้งานจาก dependencies
5. สรุป types ที่ยังไม่ได้ใช้และแนะนำให้ใช้เพิ่มเติม

### 4. Optimize Usage

1. แทนที่ custom implementation ด้วย library functions
2. เปิดใช้งาน features เช่น `tree-shaking`, `lazy loading`
3. ปรับ configuration เพื่อ performance ที่ดีที่สุด
4. ใช้ features เฉพาะที่จำเป็น (`feature flags`)

### 5. Document Patterns

1. สร้าง examples สำหรับการใช้งานที่ซับซ้อน
2. เขียน best practices สำหรับทีม
3. อัพเดท conventions และ standards

## Rules

### 1. Library Selection

เลือก libraries ที่เหมาะสมสำหรับโปรเจกต์

- ใช้ `built-in functions` ก่อน external libraries
- ใช้ `monorepo shared packages` ก่อน third-party
- เลือก libraries ที่ `actively maintained`
- พิจารณา `bundle size` สำหรับ frontend

### 2. Effective Usage Patterns

ใช้งาน libraries อย่างมีประสิทธิภาพ

- `HTTP Client`: Connection pooling, retry logic, caching
- `Database ORM`: Query optimization, connection management
- `UI Components`: Tree-shaking, lazy loading
- `Utilities`: Tree-shakeable imports, specific functions
- `Testing`: Parallel execution, proper isolation

### 3. Code Quality

รักษาคุณภาพโค้ดเมื่อใช้ external libraries

- ไม่ `reinvent the wheel` ถ้ามี library ที่ทำอยู่แล้ว
- Wrap external libraries ด้วย `internal abstractions` เมื่อจำเป็น
- ใช้ `type-safe wrappers` สำหรับ dynamic libraries
- Document การใช้งานที่ไม่ตรงตาม conventions

### 4. Performance

Optimize performance เมื่อใช้ libraries

- `Dynamic imports` สำหรับ code splitting
- Cache ผลลัพธ์ที่ใช้ซ้ำบ่อย
- Monitor `bundle size` และ `cold start time`

## Expected Outcome

- `Dependencies` ทั้งหมดถูกใช้งานอย่างมีประสิทธิภาพ
- ลด `code duplication` และ `custom implementations` ที่ไม่จำเป็น
- `Performance` ของ application ดีขึ้น
- มี `documentation` สำหรับการใช้งาน library ที่ซับซ้อน

