---
title: Review Architecture
description: Review โครงสร้างโปรเจกต์ตามมาตรฐาน architecture
auto_execution_mode: 3
---

## Goal

Review โครงสร้างโปรเจกต์เพื่อให้แน่ใจว่าสอดคล้องกับสถาปัตยกรรมที่ตั้งไว้

## Execute

### 1. Analyze Structure

1. รัน `/check-architecture` เพื่อดู tree view
2. ตรวจสอบโครงสร้าง folders และ files
3. เปรียบเทียบกับ architecture ที่ตั้งไว้
4. ระบุความไม่สอดคล้องที่พบ

### 2. Review Dependencies

1. ตรวจสอบ dependencies ระหว่าง modules
2. วิเคราะห์ circular dependencies
3. ตรวจสอบ coupling และ cohesion
4. ระบุ dependencies ที่ไม่เหมาะสม

### 3. Check Patterns

1. ตรวจสอบ design patterns ที่ใช้
2. วิเคราะห์ consistency ของ patterns
3. ระบุ anti-patterns ที่พบ
4. แนะนำ patterns ที่ควรใช้

### 4. Validate Principles

1. ตรวจสอบ SOLID principles
2. ตรวจสอบ separation of concerns
3. ตรวจสอบ single responsibility
4. ตรวจสอบ DRY principle

## Rules

### 1. Structure Check

ตรวจสอบโครงสร้างโปรเจกต์

- ใช้ `/check-architecture` เพื่อดูโครงสร้าง
- ตรวจสอบว่าโครงสร้างสอดคล้องกับ `/architecture`

### 2. Dependency Review

ตรวจสอบ dependencies

- ตรวจสอบ dependencies ทั้ง internal และ external
- วิเคราะห์ circular dependencies

### 3. Timing

กำหนดเวลาในการ review

- Review architecture เมื่อมีการเปลี่ยนแปลงใหญ่

### 4. Action

ดำเนินการตามผลการ review

- ใช้ `/improve-codebase` สำหรับ improvement tasks
- ใช้ `/resolve-errors` สำหรับ issues ที่พบ

## Expected Outcome

- ผลการ review architecture ตอบในแชท
- ความไม่สอดคล้องถูกระบุและแก้ไข
- Dependencies ถูกจัดระเบียบให้ดีขึ้น
- Architecture สอดคล้องกับ best practices

