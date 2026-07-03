---
title: Restructure
description: ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์ให้มีความสม่ำเสมอ จัดระเบียบ และค้นหาง่าย
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /improve-naming-convention
  - /relocation
  - /grouping
  - /analyze-structure
  - /edit-relative
  - /follow-barrel-files
---

## Goal

ปรับปรุงโครงสร้างไฟล์และโฟลเดอร์ให้มีความสม่ำเสมอ จัดระเบียบ และค้นหาง่าย

## Scope

ครอบคลุมการปรับปรุง physical file/folder structure (naming, relocation, grouping) ไม่ใช่ logical concern separation สำหรับ logical concern separation ให้ใช้ `/separate-of-concern`

## Execute

### 1. Analyze Current Structure

วิเคราะห์โครงสร้างปัจจุบันเพื่อระบุปัญหา

1. ทำ `/analyze-structure` เพื่อดูภาพรวมโครงสร้างปัจจุบัน
2. ระบุไฟล์ที่ตั้งชื่อไม่เหมาะสมตาม conventions
3. ตรวจสอบจำนวนไฟล์ในแต่ละโฟลเดอร์เพื่อหาโฟลเดอร์ที่มีไฟล์มากเกินไป

### 2. Improve File Naming

ปรับปรุง naming conventions ให้สม่ำเสมอ

1. ทำ `/improve-naming-convention` สำหรับปรับปรุง naming conventions
2. อัปเดต import paths ที่อ้างอิงถึงไฟล์ที่เปลี่ยนชื่อ

### 3. Relocate To Appropriate Folders

ย้ายไฟล์ไปยังตำแหน่งที่เหมาะสมตาม responsibility

1. ทำ `/relocation` สำหรับย้ายไฟล์
2. ตรวจสอบว่า import paths ถูกอัปเดตทั้งหมด
3. ยืนยันว่าไม่มี circular dependencies ใหม่

### 4. Group Files By Domain

จัดกลุ่มไฟล์ตาม domain หรือ responsibility

1. ทำ `/grouping` สำหรับจัดกลุ่มไฟล์
2. ตรวจสอบว่าโฟลเดอร์ใหม่สอดคล้องกับโครงสร้างที่มีอยู่

### 5. Refactor Barrel Files

ทำให้ entry files มีเฉพาะ re-export และจัดการ imports/exports

1. ทำ `/follow-barrel-files` เพื่อ refactor entry files ให้มีเฉพาะ re-export
2. ตรวจสอบ imports ภายใน module ใช้ direct module path
3. ตรวจสอบ imports ภายนอก module ใช้ barrel file
4. ตรวจสอบว่าไม่มี side effects ใน barrel files

### 6. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมดที่เกี่ยวข้อง

### 7. Validate Changes

ตรวจสอบการเปลี่ยนแปลง

1. รัน build หรือ type check เพื่อยืนยันว่า import paths ถูกต้อง
2. ตรวจสอบว่าไม่มีไฟล์ที่ไม่จำเป็นหลงเหลือ
3. ทำ `/analyze-structure` เพื่อยืนยันโครงสร้างใหม่

## Rules

### 1. Naming Conventions

ทำตาม `/improve-naming-convention`

### 2. Grouping Criteria

ทำตาม `/grouping`

### 3. Relocation Principles

ทำตาม `/relocation`

### 4. Barrel Export

- ทุก subfolder ที่มีหลายไฟล์ควรมี index file สำหรับ barrel export
- ใช้ barrel export เพื่อ simplify import paths
- หลีกเลี่ยง deep imports ที่ซับซ้อน

### 5. Script Automation

ทำตาม `/use-scripts` เมื่อ:

- File operations มากกว่า 10 ไฟล์
- Pattern matching ต้อง parser
- Batch transformations ต้อง consistency

## Expected Outcome

- โครงสร้างไฟล์ที่สม่ำเสมอและเป็นระเบียบ
- naming ที่สอดคล้องกันทั่วทั้งโปรเจกต์
- import paths ที่กระชับและถูกต้อง
- Entry files มีเฉพาะ re-export และ imports ถูกต้องตาม barrel files best practices
- โฟลเดอร์ที่จัดกลุ่มอย่างเหมาะสมตาม responsibility
- สำหรับ logical concern separation ให้ใช้ `/separate-of-concern`


