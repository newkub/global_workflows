---
title: Improve File Structure
description: ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์ให้เป็นระเบียบ สม่ำเสมอ และค้นหาง่าย
auto_execution_mode: 3
related_workflows:
  - /restructure
  - /analyze-project
  - /check-architecture
---

## Goal

ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์ให้เป็นระเบียบ สม่ำเสมอ และค้นหาง่าย

## Scope

ครอบคลุมการปรับปรุง physical file/folder structure (naming, organization, grouping) ไม่ใช่ logical concern separation สำหรับ logical concern separation ให้ใช้ `/separate-of-concern`

## Execute

### 1. Analyze Current Structure

วิเคราะห์โครงสร้างปัจจุบัน

1. ทำ `/analyze-project` เพื่อดูภาพรวม
2. ระบุไฟล์ที่ตั้งชื่อไม่เหมาะสม
3. ตรวจสอบจำนวนไฟล์ในแต่ละโฟลเดอร์ (มากกว่า 10-15 ไฟล์)
4. ระบุโฟลเดอร์ที่ไม่มีเกณฑ์การจัดกลุ่มชัดเจน

### 2. Improve File Naming

ปรับปรุง naming

1. กำหนด naming convention ที่เหมาะสมกับโปรเจกต์
2. เปลี่ยนชื่อไฟล์ที่ไม่ตรง convention
3. อัปเดต import paths ที่อ้างอิงถึงไฟล์ที่เปลี่ยนชื่อ
4. ตรวจสอบความสม่ำเสมอของ naming

### 3. Improve Folder Organization

ปรับปรุงการจัดระเบียบโฟลเดอร์

1. ทำ `/relocation` เพื่อย้ายไฟล์ไปยังโฟลเดอร์ที่เหมาะสม
2. จัดกลุ่มไฟล์ตาม domain หรือ responsibility
3. สร้าง subfolder สำหรับโฟลเดอร์ที่มีไฟล์มากเกินไป
4. สร้าง `index.ts` barrel export สำหรับแต่ละ subfolder

### 4. Improve Grouping Strategy

ปรับปรุงเกณฑ์การจัดกลุ่ม

1. เลือกเกณฑ์การจัดกลุ่มที่เหมาะสม (feature, type, layer)
2. ใช้เกณฑ์เดียวกันทั่วทั้งโปรเจกต์
3. ตรวจสอบว่า grouping สอดคล้องกับ architecture
4. หลีกเลี่ยง deep nesting (มากกว่า 3-4 levels)

### 5. Validate Structure

ตรวจสอบโครงสร้าง

1. รัน build หรือ type check เพื่อยืนยัน import paths
2. ทำ `/check-architecture` เพื่อยืนยันโครงสร้าง
3. ตรวจสอบว่าไม่มี orphan files
4. ตรวจสอบว่าไม่มี circular dependencies

### 6. Update References

อัปเดท references

1. ทำตาม `/edit-relative`

## Rules

### 1. Naming Conventions

ใช้ naming conventions ที่สอดคล้องกัน:

- ใช้ camelCase สำหรับ functions, variables, composables
- ใช้ PascalCase สำหรับ components, types, classes, interfaces
- ใช้ kebab-case สำหรับ file names และ directory names
- ชื่อไฟล์ต้องสื่อความหมายและสอดคล้องกับ content
- ไม่ใช้ prefix ชื่อ skill หรือ project

### 2. Grouping Criteria

เลือกเกณฑ์การจัดกลุ่มที่เหมาะสม:

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

### 5. Structure Depth

จำกัดความลึกของโครงสร้าง:

- หลีกเลี่ยง deep nesting (มากกว่า 3-4 levels)
- โฟลเดอร์ไม่ควรมีไฟล์มากกว่า 10-15 ไฟล์
- สร้าง subfolder เมื่อจำเป็นเพื่อจัดกลุ่ม

## Expected Outcome

- โครงสร้างไฟล์ที่สม่ำเสมอและเป็นระเบียบ
- naming ที่สอดคล้องกันทั่วทั้งโปรเจกต์
- import paths ที่กระชับและถูกต้อง
- โฟลเดอร์ที่จัดกลุ่มอย่างเหมาะสมตาม responsibility
- ไม่มี orphan files หรือ circular dependencies
- สำหรับ logical concern separation ให้ใช้ `/separate-of-concern`
