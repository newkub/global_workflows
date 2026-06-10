---
title: Check Architecture
description: ตรวจสอบโครงสร้างไฟล์และ folders ของโปรเจกต์
auto_execution_mode: 3
---

## Goal

ตรวจสอบโครงสร้างไฟล์และ folders ของโปรเจกต์เพื่อดูการจัดระเบียบ

## Execute

### 1. Run Tree Command

1. รัน `eza --tree --git-ignore`
2. ทำ `/use-scripts` เพื่อ analyze directory patterns, check naming conventions, generate tree visualization, และ validate structure against templates ใน script เดียว
3. ทำ `/edit-relative` เพื่ออัปเดทไฟล์ที่เกี่ยวข้องหากมีการเปลี่ยนแปลง

## Rules

### 1. Tree Command

- ใช้ `eza --tree --git-ignore` เพื่อแสดง tree view

### 2. Architecture Validation

- ตรวจสอบว่าโครงสร้างสอดคล้องกับ architecture ที่ตั้งไว้
- ตรวจสอบว่าไม่มีไฟล์ที่ไม่จำเป็น

### 3. File Pattern Rules

สร้างกฎตาม file pattern สำหรับโปรเจกต์

- ตรวจสอบว่ามี file pattern rules สำหรับโปรเจกต์
- สร้าง file pattern rules ตามโครงสร้างจริงของโปรเจกต์
- ใช้ `glob` patterns สำหรับกำหนด file patterns
- แยก file patterns ตามประเภท (components, pages, utils, etc.)
- กำหนด naming conventions สำหรับแต่ละ file pattern

## Expected Outcome

- แสดง tree view ของโครงสร้างโปรเจกต์
- เข้าใจการจัดระเบียบไฟล์และ folders
- ตรวจสอบโครงสร้างได้อย่างรวดเร็ว

