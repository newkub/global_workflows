---
title: Review Architecture
description: Review โครงสร้างโปรเจกต์ตามมาตรฐาน architecture
auto_execution_mode: 3
---

## Goal

Review โครงสร้างโปรเจกต์เพื่อให้แน่ใจว่าสอดคล้องกับสถาปัตยกรรมที่ตั้งไว้

## Scope

ใช้สำหรับ review architecture ของโปรเจกต์ทั้งหมด

## Execute

### 1. Analyze Structure

ทำ `/check-architecture` เพื่อวิเคราะห์โครงสร้างโปรเจกต์

1. รัน `/check-architecture` เพื่อดู tree view
2. ตรวจสอบโครงสร้าง folders และ files
3. เปรียบเทียบกับ architecture ที่ตั้งไว้
4. ระบุความไม่สอดคล้องที่พบ

### 2. Review Dependencies

ทำ `/check-circular-dependencies` เพื่อวิเคราะห์ dependencies

1. ตรวจสอบ dependencies ระหว่าง modules
2. วิเคราะห์ circular dependencies
3. ตรวจสอบ coupling และ cohesion
4. ระบุ dependencies ที่ไม่เหมาะสม

### 3. Check Patterns

ตรวจสอบ design patterns ที่ใช้ในโปรเจกต์

1. ตรวจสอบ design patterns ที่ใช้
2. วิเคราะห์ consistency ของ patterns
3. ระบุ anti-patterns ที่พบ
4. แนะนำ patterns ที่ควรใช้

### 4. Validate Principles

ทำ `/follow-principles-engineering` เพื่อตรวจสอบ principles

1. ตรวจสอบ SOLID principles
2. ตรวจสอบ separation of concerns
3. ตรวจสอบ single responsibility
4. ตรวจสอบ DRY principle

## Rules

### 1. Structure Check

ตรวจสอบโครงสร้างโปรเจกต์

- ใช้ `/check-architecture` เพื่อดูโครงสร้าง
- ตรวจสอบว่าโครงสร้างสอดคล้องกับ `/architecture`
- ตรวจสอบ folder organization ตาม domain responsibility
- ตรวจสอบ file naming conventions

### 2. Dependency Review

ตรวจสอบ dependencies

- ตรวจสอบ dependencies ทั้ง internal และ external
- วิเคราะห์ circular dependencies
- ตรวจสอบ coupling levels ระหว่าง modules
- ตรวจสอบ cohesion ภายใน modules

### 3. Pattern Validation

ตรวจสอบ design patterns

- ตรวจสอบว่า patterns ใช้ถูกต้อง
- ตรวจสอบ consistency ของ patterns ทั่ว codebase
- ระบุ anti-patterns ที่พบ
- แนะนำ patterns ที่เหมาะสม

### 4. Principle Compliance

ตรวจสอบ compliance กับ engineering principles

- ตรวจสอบ SOLID principles
- ตรวจสอบ separation of concerns
- ตรวจสอบ single responsibility principle
- ตรวจสอบ DRY principle

### 5. Timing

กำหนดเวลาในการ review

- Review architecture เมื่อมีการเปลี่ยนแปลงใหญ่
- Review ก่อน merge major features
- Review เป็นส่วนหนึ่งของ code review process

### 6. Action

ดำเนินการตามผลการ review

- ใช้ `/improve-codebase` สำหรับ improvement tasks
- ใช้ `/resolve-errors` สำหรับ issues ที่พบ
- ใช้ `/refactor` สำหรับ restructuring tasks
- อัพเดท documentation หาก architecture เปลี่ยน

## Expected Outcome

- ผลการ review architecture ตอบในแชท
- ความไม่สอดคล้องถูกระบุและแก้ไข
- Dependencies ถูกจัดระเบียบให้ดีขึ้น
- Architecture สอดคล้องกับ best practices
- Documentation อัพเดทให้ทันสมัย

