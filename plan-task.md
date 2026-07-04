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
  - /follow-content-quality
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
4. ระบุ constraints และ assumptions ของ project
5. ถ้า project มี `AGENTS.md` ให้อ่านและทำตาม

### 2. Research Libraries

สำรวจ library ที่เหมาะสมสำหรับโปรเจกต์

1. ทำ `/use-lib-better` เพื่อสำรวจ library alternatives
2. ทำ `/use-lib-effective` เพื่อวิเคราะห์ dependencies ที่มีอยู่
3. ทำ `/refactor-to-packages-and-use` เพื่อดู packages จาก workspace
4. สำรวจ alternatives อย่างน้อย 2-3 ตัวเลือกสำหรับแต่ละ dependency ใหม่
5. ประเมินแต่ละ candidate ตามเกณฑ์: modern, type safety, performance, DX, maintenance
6. บันทึก library ที่เลือกใช้พร้อมเหตุผลและ scoring

### 3. Define Implementation Path

กำหนดลำดับการ implement ตาม impact order

1. ทำ `/prioritize` เพื่อจัดลำดับ tasks ตาม impact และ effort
2. จัดลำดับ priority ตาม impact: foundation components ก่อน, high risk items เพื่อ fail fast
3. ระบุ critical path และ dependencies ระหว่าง tasks
4. ระบุ tasks ที่ block tasks อื่น และ tasks ที่ blocked โดย tasks อื่น
5. กำหนด milestones สำหรับแต่ละ phase ของ implementation
6. วางแผน timeline โดยรวม buffer สำหรับ high-risk tasks
7. ระบุ tasks ที่สามารถทำ parallel ได้

### 4. Plan Test Strategy

วางแผน test strategy ด้วย DDD approach

1. ตัดสินใจว่าจะใช้ DDD หรือไม่ โดยพิจารณาจาก complexity ของ business logic
2. ออกแบบ test case ที่ครอบคลุม: unit tests, integration tests, e2e tests
3. กำหนด test coverage requirements สำหรับแต่ละ module
4. วางแผน test execution strategy: parallel, sequential, watch mode
5. ระบุ test data และ fixtures ที่ต้องเตรียม
6. วางแผน regression test strategy สำหรับ breaking changes

### 5. Create Task Document

สร้าง task document เพื่อบันทึกแผนงาน

1. สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md`
2. บันทึก tasks ทั้งหมดพร้อม expected outcome ของแต่ละ task
3. บันทึก library choices พร้อมเหตุผลและ scoring
4. บันทึก milestones และ timeline พร้อม success criteria
5. บันทึก test strategy และ coverage requirements
6. บันทึก assumptions, constraints, และ risks
7. บันทึก migration plan ถ้ามี breaking changes

### 6. Validate Plan

ตรวจสอบและยืนยันความถูกต้อง

1. ยืนยัน dependencies ไม่ conflict กับ existing versions
2. ทบทวน plan กับ task document เพื่อตรวจสอบความครบถ้วน
3. ตรวจสอบ timeline realistic หรือไม่ โดยพิจารณา buffer และ risks
4. ตรวจสอบทุก task มี single responsibility และ test ได้
5. ตรวจสอบไม่มี missing tasks หรือ gaps ใน implementation path
6. รอยืนยันจาก user ก่อนเริ่ม implement

## Rules

### 1. Research First

ต้องสำรวจ library ก่อนเริ่ม implement

- ต้องทำ `/use-lib-better` ก่อน implement
- สำรวจ alternatives อย่างน้อย 2-3 ตัวเลือก
- บันทึกเหตุผลในการเลือก library
- ประเมิน candidates ด้วย scoring system

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

- ใช้ existing packages จาก workspace ก่อน third-party
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

- Task document ที่ครอบคลุมทุกด้านใน `.agents/task/`
- Library choices ที่มีเหตุผลและ scoring รองรับ
- Implementation roadmap ที่ practical และ prioritized
- Timeline ที่ realistic พร้อม buffer
- Test strategy ที่ครอบคลุม
- Risks และ mitigation strategies ที่ชัดเจน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย

- ไม่สำรวจ libraries ก่อน implement
- จัดลำดับ tasks โดยไม่พิจารณา dependencies
- ไม่บันทึกเหตุผลในการเลือก library
- ไม่วางแผน test strategy อย่างชัดเจน
- Timeline ไม่ realistic
- ไม่ระบุ assumptions และ constraints
