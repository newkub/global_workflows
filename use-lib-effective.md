---
title: Use Library Effectively
description: วิเคราะห์ dependencies ใน package manifest และใช้งานให้เต็มประสิทธิภาพ
auto_execution_mode: 3
---

## Goal

วิเคราะห์ dependencies ที่มีอยู่ในโปรเจกต์และใช้งานให้เต็มประสิทธิภาพ ลดการ reinvent the wheel และ optimize การใช้งาน library

## Execute

### 1. Discover Dependencies

1. อ่าน main package manifest เช่น `package.json`, `Cargo.toml`, `pyproject.toml`
2. สร้างรายการ dependencies ทั้งหมดพร้อม categorize ตาม purpose
3. ตรวจสอบ dependencies ที่ซ้ำซ้อนหรือทำงานคล้ายกัน
4. ระบุ dependencies ที่ใช้ไม่เต็มประสิทธิภาพหรือไม่ได้ใช้เลย

### 2. Research Capabilities

1. ศึกษา documentation และ features ของแต่ละ library ผ่าน `/learn-from-web`
2. ระบุ features ที่ยังไม่ได้ใช้งานแต่จะเป็นประโยชน์
3. ค้นหา best practices และ patterns สำหรับการใช้งาน
4. เปรียบเทียบกับ alternative libraries ผ่าน `/use-lib-better` ถ้าจำเป็น

### 3. Optimize Usage

1. แทนที่ custom implementation ด้วย library functions ที่มีอยู่แล้ว
2. เปิดใช้งาน features ที่เหมาะสม เช่น tree-shaking, lazy loading
3. ปรับ configuration เพื่อ performance ที่ดีที่สุด
4. ลบ dependencies ที่ไม่จำเป็นออก

### 4. Document Patterns

1. สร้าง examples สำหรับการใช้งานที่ซับซ้อน
2. เขียน best practices สำหรับทีม
3. อัพเดท conventions และ standards ถ้าจำเป็น

## Rules

1. Dependency Analysis

- อ่าน manifest files ทั้งหมดใน monorepo
- ใช้ `/analyze-project` เพื่อดู patterns ที่มีอยู่
- ตรวจสอบ unused dependencies ด้วย tools เช่น `knip`, `cargo-udeps`
- เปรียบเทียบ versions ระหว่าง packages ใน monorepo

2. Library Selection

- ใช้ built-in functions ก่อน external libraries
- ใช้ monorepo shared packages ก่อน third-party
- เลือก libraries ที่ actively maintained
- พิจารณา bundle size สำหรับ frontend

3. Effective Usage Patterns

| Library Type | Optimization Strategy |
|-------------|----------------------|
| HTTP Client | Connection pooling, retry logic, caching |
| Database ORM | Query optimization, connection management |
| UI Components | Tree-shaking, lazy loading |
| Utilities | Tree-shakeable imports, specific functions |
| Testing | Parallel execution, proper isolation |

4. Code Quality

- ไม่ reinvent the wheel ถ้ามี library ที่ทำอยู่แล้ว
- Wrap external libraries ด้วย internal abstractions เมื่อจำเป็น
- ใช้ type-safe wrappers สำหรับ dynamic libraries
- Document การใช้งานที่ไม่ตรงตาม conventions

5. Performance

- ใช้ features เฉพาะที่จำเป็น (feature flags)
- Dynamic imports สำหรับ code splitting
- Cache ผลลัพธ์ที่ใช้ซ้ำบ่อย
- Monitor bundle size และ cold start time

## Expected Outcome

- Dependencies ทั้งหมดถูกใช้งานอย่างมีประสิทธิภาพ
- ลด code duplication และ custom implementations ที่ไม่จำเป็น
- Performance ของ application ดีขึ้น
- มี documentation สำหรับการใช้งาน library ที่ซับซ้อน
