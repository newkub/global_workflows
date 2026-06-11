---
title: Idea Refactor To Packages
description: ระบุและวางแผน refactor code ให้เป็น packages ที่ generic และ reusable
auto_execution_mode: 3
---

## Goal

ระบุและวางแผน refactor code ให้เป็น `packages` ที่ generic และ reusable กับ project อื่นๆ

## Scope

วิเคราะห์ code ที่สามารถ extract เป็น packages และวางแผนการ refactor

## Execute

### 1. Analyze Reusable Code

วิเคราะห์ code ที่สามารถทำเป็น packages ได้

1. ทำ `/analyze-project` เพื่อดูภาพรวม codebase
2. ระบุ `generic code` ที่ใช้ร่วมกันหลายๆ project
3. ระบุ `utilities` ที่ไม่มี domain logic
4. ระบุ `types` และ `interfaces` ที่ generic
5. ระบุ `components` ที่ไม่มี business logic

### 2. Identify Package Candidates

ระบุ code ที่ควรเป็น packages

1. วิเคราะห์ `reusability` ของแต่ละ code block
2. วิเคราะห์ `dependencies` ของแต่ละ code block
3. ระบุ code ที่มี `low coupling` กับ domain
4. ระบุ code ที่มี `high cohesion` ภายในตัวเอง
5. จัดลำดับความสำคัญของ package candidates

### 3. Plan Package Structure

วางแผนการ refactor เป็น packages

1. ทำ `/plan` เพื่อวางแผนการ refactor
2. ระบุ `package names` และ `responsibilities`
3. กำหนด `dependencies` ระหว่าง packages
4. กำหนด `exports` สำหรับแต่ละ package
5. รอยืนยันจาก user ก่อนเริ่มทำ

### 4. Document Package Ideas

บันทึกไอเดีย packages ในรูปแบบ numbered list

1. สร้างไฟล์สำหรับบันทึก package ideas
2. ใช้ `continuous numbering` สำหรับแต่ละ package
3. ระบุ `purpose` ของแต่ละ package
4. ระบุ `files` ที่จะย้ายไปยัง package
5. ระบุ `dependencies` ที่จำเป็น

## Rules

### 1. Generic Code Identification

ระบุ code ที่ generic และ reusable

- Code ที่ไม่มี `domain logic`
- Code ที่ใช้ `common patterns`
- Code ที่มี `low coupling` กับ business logic
- Code ที่สามารถ `test` แยกได้
- Code ที่มี `clear boundaries`

### 2. Package Granularity

กำหนดขนาดของ packages ที่เหมาะสม

- ไม่ split packages เล็กเกินไป (`over-engineering`)
- ไม่รวม packages ใหญ่เกินไป (`monolith`)
- แต่ละ package มี `single responsibility`
- ง่ายต่อการ `install` และ `use`
- ง่ายต่อการ `maintain` และ `update`

### 3. Dependency Management

จัดการ dependencies ระหว่าง packages

- ลบ `internal dependencies` ที่ไม่จำเป็น
- ใช้ `peer dependencies` สำหรับ shared libraries
- กำหนด `version ranges` ที่ชัดเจน
- หลีกเลี่ยง `circular dependencies`
- ใช้ `workspace protocol` สำหรับ monorepo

### 4. Package Naming

ตั้งชื่อ packages ตามมาตรฐาน

- ใช้ `kebab-case` สำหรับ package names
- ชื่อบอก `purpose` ชัดเจน
- หลีกเลี่ยง `abbreviations` ยกเว้นที่รู้จักกันดี
- ใช้ `prefix` สำหรับ packages ใน org เดียวกัน
- ตรวจสอบว่าชื่อไม่ซ้ำกับ packages ใน npm

### 5. Export Strategy

กำหนด exports สำหรับแต่ละ package

- ใช้ `barrel exports` สำหรับ public APIs
- เก็บ `internal code` ใน private directories
- ใช้ `conditional exports` สำหรับ environments ต่างกัน
- ใช้ `types` field สำหรับ TypeScript
- Document ทุก `public exports`

## Expected Outcome

### Package Ideas

- รายการ `package candidates` ที่มี continuous numbering
- แต่ละ package มี `purpose` ชัดเจน
- แต่ละ package มี `files` ที่จะย้าย
- แต่ละ package มี `dependencies` ที่จำเป็น
- มี `priority` สำหรับการ refactor

### Planning

- มีแผนการ refactor ที่ชัดเจน
- มี `dependency graph` ระหว่าง packages
- มี `migration plan` สำหรับย้าย code
- มี `testing strategy` สำหรับแต่ละ package
- มี `rollback plan` หากเกิดปัญหา

### Documentation

- มี `README` สำหรับแต่ละ package
- มี `usage examples` สำหรับแต่ละ package
- มี `API documentation` ครบถ้วน
- มี `migration guide` สำหรับ users
- มี `changelog` สำหรับ versioning
