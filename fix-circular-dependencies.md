---
title: Fix Circular Dependencies
description: ตรวจสอบและแก้ไข circular dependencies ป้องกันโค้ดที่ยุ่งเหยิง
auto_execution_mode: 3
---

## Goal

ตรวจสอบและแก้ไข circular dependencies เพื่อป้องกันโค้ดที่ยุ่งเหยิงและยากต่อการบำรุงรักษา

## Execute

### 1. Detect Circular Dependencies

ตรวจสอบ circular dependencies ใน codebase

1. ใช้ dependency graph analysis tools
2. ใช้ madge สำหรับ JavaScript/TypeScript projects
3. ใช้ cargo-depgraph สำหรับ Rust projects
4. วิเคราะห์ import/export cycles
5. ตรวจสอบ module dependencies

### 2. Analyze Dependency Graph

วิเคราะห์โครงสร้าง dependencies

1. สร้าง dependency graph
2. ระบุ circular dependencies
3. จัดกลุ่มตามความรุนแรง
4. ระบุ modules ที่เป็นจุดวนซ้ำ
5. วิเคราะห์ impact ของแต่ละ cycle

### 3. Refactor Architecture

แก้ไข architecture เพื่อทำลาย circular dependencies

1. แยก concerns ตาม Clean Architecture
2. สร้าง shared interfaces หรือ abstractions
3. ใช้ dependency inversion principle
4. สร้าง separate layer สำหรับ shared code
5. ย้าย common logic ไปยัง shared modules

### 4. Reorganize Imports

จัดระเบียบ imports ใหม่

1. ระบุ imports ที่สร้าง circular dependencies
2. แยก imports ออกเป็น layers
3. ใช้ barrel exports สำหรับ public APIs
4. ใช้ dependency injection
5. อัพเดท import paths

### 5. Validate

ตรวจสอบว่า circular dependencies ถูกแก้ไข

1. รัน dependency graph analysis อีกครั้ง
2. ตรวจสอบว่าไม่มี cycles เหลืออยู่
3. ทดสอบว่า functionality ยังทำงานได้
4. ตรวจสอบ imports ทั้งหมด
5. ตรวจสอบ build และ tests

## Rules

### 1. Detection Strategy

ตรวจสอบ circular dependencies อย่างครบถ้วน

- ใช้ tools ที่เชื่อถือได้
- ตรวจสอบทั้ง direct และ indirect dependencies
- วิเคราะห์ dependency graph อย่างละเอียด
- จัดลำดับความรุนแรงของ cycles
- ระบุ root cause ของแต่ละ cycle

### 2. Refactoring Principles

แก้ไขตาม architectural principles

- แยก concerns ออกจากกัน
- ใช้ dependency inversion
- สร้าง abstractions สำหรับ shared code
- ใช้ dependency injection
- รักษา single responsibility

### 3. Layer Separation

แยก layers อย่างชัดเจน

- กำหนด layer boundaries ชัดเจน
- ห้าม import จาก layer บนไป layer ล่าง
- ใช้ interfaces สำหรับ communication ระหว่าง layers
- จัดระเบียบ imports ตาม layers
- ใช้ barrel exports สำหรับ public APIs

### 4. Dependency Management

จัดการ dependencies อย่างเป็นระบบ

- ลบ dependencies ที่ไม่จำเป็น
- ใช้ dependency injection
- ใช้ lazy loading เมื่อเป็นไปได้
- จัดระเบียบ imports ตามลำดับ
- ตรวจสอบ circular dependencies อย่างสม่ำเสมอ

## Expected Outcome

- ไม่มี circular dependencies
- Dependency graph ที่ชัดเจน
- Architecture ที่เป็นระบบ
- Imports ที่จัดระเบียบดี
- Code ที่ maintain ได้ง่ายขึ้น
- Functionality ที่ยังทำงานได้

