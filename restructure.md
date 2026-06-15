---
title: Restructure
description: ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์ให้มีความสม่ำเสมอ จัดระเบียบ และค้นหาง่าย
auto_execution_mode: 3
related_workflows:
  - analyze-project
  - relocation
  - use-scripts
  - check-architecture
---

## Goal

ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์ให้มีความสม่ำเสมอ จัดระเบียบ และค้นหาง่าย

## Scope

ครอบคลุมการปรับปรุง physical file/folder structure (naming, relocation, grouping) ไม่ใช่ logical concern separation สำหรับ logical concern separation ให้ใช้ `separate-of-concern`

## Execute

### 1. Analyze Current Structure

1. ทำ `analyze-project` เพื่อดูภาพรวมโครงสร้างปัจจุบัน
2. ระบุไฟล์ที่ตั้งชื่อไม่เหมาะสม (snake_case, PascalCase, หรือไม่สื่อความหมาย)
3. ตรวจสอบจำนวนไฟล์ในแต่ละโฟลเดอร์ เพื่อหาโฟลเดอร์ที่มีไฟล์มากเกินไป (มากกว่า 10-15 ไฟล์)

### 2. Improve File Naming

1. ทำ `/improve-naming` สำหรับปรับปรุง naming conventions ครบถ้วน
2. กำหนด naming convention ที่เหมาะสมกับโปรเจกต์ เช่น:
   - ไฟล์ component และ composable: camelCase หรือ PascalCase
   - ไฟล์ types และ utilities: camelCase หรือ kebab-case
3. เปลี่ยนชื่อไฟล์ที่ไม่ตรง convention โดยใช้ `search_replace` แทนการลบและสร้างใหม่
4. อัปเดต import paths ที่อ้างอิงถึงไฟล์ที่เปลี่ยนชื่อ

### 3. Relocate To Appropriate Folders

1. ทำ `/relocation` เพื่อย้ายไฟล์ไปยังโฟลเดอร์ที่เหมาะสม
2. ตรวจสอบว่า import paths ถูกอัปเดตทั้งหมด
3. ยืนยันว่าไม่มี circular dependencies ใหม่

### 4. Group Files By Domain

1. ถ้าโฟลเดอร์มีไฟล์มากกว่า 10-15 ไฟล์ ให้สร้าง subfolder สำหรับจัดกลุ่ม
2. ใช้เกณฑ์การจัดกลุ่ม:
   - Feature grouping: `features/auth/`, `features/tasks/`
   - Type grouping: `types/`, `constants/`, `utils/`
   - Layer grouping: `components/`, `composables/`, `server/`
3. สร้าง `index.ts` barrel export สำหรับแต่ละ subfolder
4. ตรวจสอบว่าโฟลเดอร์ใหม่สอดคล้องกับโครงสร้างที่มีอยู่

### 5. Validate Changes

1. รัน build หรือ type check เพื่อยืนยันว่า import paths ถูกต้อง
2. ตรวจสอบว่าไม่มีไฟล์ที่ไม่จำเป็นหลงเหลือ (orphan files)
3. ทำ `/check-architecture` เพื่อยืนยันโครงสร้างใหม่

### 6. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `/edit-relative`

## Rules

### 1. Naming Conventions

ใช้ naming conventions ที่สอดคล้องกันทั่วทั้งโปรเจกต์:

- ใช้ camelCase สำหรับ functions, variables, composables
- ใช้ PascalCase สำหรับ components, types, classes, interfaces
- ใช้ kebab-case สำหรับ file names และ directory names
- ชื่อไฟล์ต้องสื่อความหมายและสอดคล้องกับ content

### 2. Grouping Criteria

เลือกเกณฑ์การจัดกลุ่มที่เหมาะสมกับโปรเจกต์:

- Feature-based: จัดกลุ่มตาม feature หรือ domain เช่น `auth/`, `tasks/`
- Type-based: จัดกลุ่มตามประเภทเช่น `types/`, `utils/`, `constants/`
- Layer-based: จัดกลุ่มตาม layer เช่น `components/`, `composables/`, `server/`
- เลือก criteria ที่เหมาะสมกับโปรเจกต์และใช้สม่ำเสมอ

### 3. Relocation Principles

หลักการย้ายไฟล์:

- ย้ายไฟล์ตาม domain หรือ responsibility ไม่ใช่ตาม file type อย่างเดียว
- รักษา dependency direction: high-level modules พึ่งพา low-level modules
- หลีกเลี่ยง circular dependencies ระหว่างโฟลเดอร์
- อัปเดต import paths ทันทีหลังย้ายไฟล์

### 4. Barrel Export

การใช้ barrel exports:

- ทุก subfolder ที่มีหลายไฟล์ควรมี index file สำหรับ barrel export
- ใช้ barrel export เพื่อ simplify import paths
- หลีกเลี่ยง deep imports ที่ซับซ้อน

## Expected Outcome

- โครงสร้างไฟล์ที่สม่ำเสมอและเป็นระเบียบ
- naming ที่สอดคล้องกันทั่วทั้งโปรเจกต์
- import paths ที่กระชับและถูกต้อง
- โฟลเดอร์ที่จัดกลุ่มอย่างเหมาะสมตาม responsibility
- สำหรับ logical concern separation ให้ใช้ `/separate-of-concern`

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่อัปเดต import paths หลังย้ายไฟล์
- จัดกลุ่มไฟล์ตาม file type แทน domain/responsibility
- สร้าง circular dependencies ระหว่างโฟลเดอร์
- ไม่ใช้ barrel exports สำหรับ subfolders
- ตั้งชื่อไฟล์ที่ไม่สื่อความหมาย

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ย้ายไฟล์โดยไม่อัปเดต import paths
- ❌ จัดกลุ่มไฟล์แบบ random หรือไม่มีเกณฑ์ชัดเจน
- ❌ สร้างโฟลเดอร์ลึกเกินไป (deep nesting)
- ❌ ใช้ naming conventions ผสมกัน
- ❌ ทิ้ง orphan files ไว้หลังย้าย


