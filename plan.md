---
title: Plan
description: วางแผนงานครอบคล้วพร้อมสำรวจ library และวางโครงสร้างไฟล์
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /use-lib-better
  - /idea-file-structure
  - /ship-code
---

## Goal

วางแผนงานอย่างเป็นระบบโดยสำรวจ best practices และ library ที่เหมาะสมก่อนเริ่ม implement

## Scope

ครอบคลุมการวิเคราะห์โปรเจกต์ สำรวจ library วางแผน architecture และกำหนด implementation path

## Execute

### 1. Analyze Project

วิเคราะห์โปรเจกต์เพื่อเข้าใจโครงสร้างและ dependencies

- ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์
- บันทึก project structure และ dependencies

### 2. Research Libraries

สำรวจ library ที่เหมาะสมสำหรับโปรเจกต์

- ทำ `/use-lib-better` เพื่อสำรวจ library
- ทำ `/use-lib-effective` เพื่อวิเคราะห์ dependencies
- ทำ `/use-packages` เพื่อดู packages จาก workspace
- บันทึก library ที่เลือกใช้

### 3. Plan Architecture

วางแผนโครงสร้างไฟล์และ integration

- ทำ `/idea-file-structure` เพื่อขอไอเดียโครงสร้าง
- วางแผน file architecture ทั้งหมด
- ระบุ dependencies ที่จะใช้งาน
- วางแผน integration ระหว่าง components

### 4. Define Implementation Path

กำหนดลำดับการ implement ตาม impact order

- ทำ `/ship-code` เพื่อเข้าใจขั้นตอนการพัฒนา
- จัดลำดับ priority ตาม impact
- ระบุ critical path และ dependencies
- กำหนด milestones

### 5. Plan Test Strategy

วางแผน test strategy ด้วย DDD approach

- ตัดสินใจว่าจะใช้ DDD หรือไม่
- ออกแบบ test case ที่ครอบคลุม
- กำหนด test coverage requirements
- วางแผน loop จนกว่า test จะผ่าน

### 6. Create Task Document

สร้าง task document เพื่อบันทึกแผนงาน

- สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md`
- บันทึก architecture และ tasks
- บันทึก expected outcome

### 7. Validate Plan

ตรวจสอบและยืนยันความถูกต้อง

- ตรวจสอบ architecture สอดคล้อง
- ยืนยัน dependencies ไม่ conflict
- ทบทวน plan กับ task document

## Rules

### 1. Research First

ต้องสำรวจ library ก่อนเริ่ม implement

- ต้องทำ `/use-lib-better` ก่อน implement
- สำรวจ alternatives อย่างน้อย 2-3 ตัวเลือก
- บันทึกเหตุผลในการเลือก library

### 2. Single Responsibility

แต่ละ task ต้องมี single responsibility

- แต่ละ task ต้องทำสิ่งเดียวที่ชัดเจน
- ห้ามรวมหลาย responsibilities ไว้ใน task เดียว
- แยก tasks ที่ซับซ้อนออกเป็น tasks ย่อย
- ทำให้แต่ละ task สามารถ test ได้ง่าย

### 3. Complete Architecture

วางโครงสร้างไฟล์ทั้งหมดก่อนเขียน code

- วางโครงสร้างไฟล์ทั้งหมดก่อนเขียน code
- ระบุ interfaces และ contracts ระหว่าง modules
- คำนึงถึง scalability และ maintainability

### 4. Impact Order

จัดลำดับ implement ตามลำดับความสำคัญ

- Foundation components ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน
- High risk items เพื่อ fail fast
- Core business logic ก่อน features รอบข้าง

### 5. Dependencies Management

จัดการ dependencies อย่างมีประสิทธิภาพ

- ใช้ existing packages จาก workspace
- Avoid dependency bloat
- Check compatibility กับ existing versions
- Consider bundle size สำหรับ frontend

### 6. Documentation

บันทึกข้อมูลอย่างครบถ้วน

- บันทึก architectural decisions
- Document integration patterns
- ระบุ assumptions และ constraints
- เตรียม migration plan ถ้ามี breaking changes

## Expected Outcome

- Task document ที่ครอบคล้วทุกด้าน
- Library choices ที่มีเหตุผลรองรับ
- File architecture ที่ชัดเจน
- Implementation roadmap ที่ practical
