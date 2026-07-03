---
title: Plan Task
description: วางแผนงาน สำรวจ libraries จัดลำดับ priority และ test strategy
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /use-lib-better
  - /use-lib-effective
  - /refactor-to-packages-and-use
  - /prioritize
  - /deep-research
  - /use-scripts
---

## Goal

วางแผนงานอย่างเป็นระบบโดยสำรวจ best practices และ library ที่เหมาะสมก่อนเริ่ม implement

## Scope

ครอบคลุมการวิเคราะห์โปรเจกต์ สำรวจ library กำหนด implementation path และจัดลำดับ priority

## Execute

### 1. Analyze Current State

วิเคราะห์โปรเจกต์ปัจจุบันเพื่อเข้าใจ context

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์
2. ระบุ project structure และ dependencies ปัจจุบัน
3. ระบุ scope และ requirements ของงานที่ต้องทำ

### 2. Research Libraries

สำรวจ library ที่เหมาะสมสำหรับโปรเจกต์

1. ทำ `/use-lib-better` เพื่อสำรวจ library alternatives
2. ทำ `/use-lib-effective` เพื่อวิเคราะห์ dependencies ที่มีอยู่
3. ทำ `/refactor-to-packages-and-use` เพื่อดู packages จาก workspace
4. บันทึก library ที่เลือกใช้พร้อมเหตุผล

### 3. Define Implementation Path

กำหนดลำดับการ implement ตาม impact order

1. จัดลำดับ priority ตาม impact
2. ระบุ critical path และ dependencies
3. กำหนด milestones
4. วางแผน timeline

### 4. Plan Test Strategy

วางแผน test strategy ด้วย DDD approach

1. ตัดสินใจว่าจะใช้ DDD หรือไม่
2. ออกแบบ test case ที่ครอบคลุม
3. กำหนด test coverage requirements
4. วางแผน test execution strategy

### 5. Create Task Document

สร้าง task document เพื่อบันทึกแผนงาน

1. สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md`
2. บันทึก tasks และ expected outcome
3. บันทึก library choices พร้อมเหตุผล
4. บันทึก milestones และ timeline

### 6. Validate Plan

ตรวจสอบและยืนยันความถูกต้อง

1. ยืนยัน dependencies ไม่ conflict
2. ทบทวน plan กับ task document
3. ตรวจสอบ timeline realistic หรือไม่
4. รอยืนยันจาก user ก่อนเริ่ม implement

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

### 3. Impact Order

จัดลำดับ implement ตามลำดับความสำคัญ

- Foundation components ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน
- High risk items เพื่อ fail fast
- Core business logic ก่อน features รอบข้าง

### 4. Dependencies Management

จัดการ dependencies อย่างมีประสิทธิภาพ

- ใช้ existing packages จาก workspace
- Avoid dependency bloat
- Check compatibility กับ existing versions
- Consider bundle size สำหรับ frontend

### 5. Documentation

บันทึกข้อมูลอย่างครบถ้วน

- บันทึก library choices พร้อมเหตุผล
- Document milestones และ timeline
- ระบุ assumptions และ constraints
- เตรียม migration plan ถ้ามี breaking changes

### 6. MVP Discipline

รักษาวินัยในการ implement สำหรับ projects ที่อยู่ใน MVP phase

- ทำเฉพาะ must-have features ใน MVP
- ไม่ทำ optional features หรือ enhancements
- หยุดเมื่อ MVP requirements ครบถ้วน
- ใช้ `/implement-features-to-mvp` ถ้าจำเป็น

### 7. Risk Assessment

ประเมินความเสี่ยงของแต่ละ task

- ระบุ high-risk tasks ที่ต้องทำก่อน (fail fast)
- ประเมิน impact ของการเปลี่ยนแปลง
- วางแผน rollback strategy สำหรับ high-risk items
- กำหนด success criteria ชัดเจนสำหรับแต่ละ task

## Expected Outcome

- Task document ที่ครอบคล้วทุกด้าน
- Library choices ที่มีเหตุผลรองรับ
- Implementation roadmap ที่ practical
- Timeline ที่ realistic

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย

- ไม่สำรวจ libraries ก่อน implement
- จัดลำดับ tasks โดยไม่พิจารณา dependencies
- ไม่บันทึกเหตุผลในการเลือก library
- ไม่วางแผน test strategy อย่างชัดเจน
- Timeline ไม่ realistic
