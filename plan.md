---
title: Plan
description: วางแผนงานและ architecture อย่างเป็นระบบก่อนเริ่ม implement
auto_execution_mode: 3
related_workflows:
  - /plan-task
  - /plan-code
  - /follow-content-quality
  - /follow-best-practice
---

## Goal

วางแผนงานและ architecture อย่างเป็นระบบก่อนเริ่ม implement โดยแบ่งเป็น task planning และ code planning

## Scope

ครอบคลุมการวางแผน tasks, libraries, implementation path, file architecture, module structure, interfaces, และการ validate แผนงานก่อน implement

## Execute

### 1. Prepare Planning Context

เตรียม context ก่อนเริ่มวางแผน

1. ทำ `/analyze-project` เพื่อเข้าใจ project structure และ dependencies ปัจจุบัน
2. ระบุ scope และ requirements ของงานที่ต้องทำ
3. ระบุ constraints และ assumptions
4. ถ้า project มี `AGENTS.md` ให้อ่านและทำตาม

### 2. Plan Tasks

วางแผนงานและ tasks อย่างละเอียด

1. ทำ `/plan-task` เพื่อวางแผนงานและ tasks
2. รอให้ `/plan-task` เสร็จสิ้น
3. ตรวจสอบ task document ที่สร้างขึ้นใน `.agents/task/`
4. ตรวจสอบ task document มีรายละเอียดครบ: tasks, library choices, milestones, timeline, test strategy

### 3. Plan Architecture

วางแผน architecture และ structure อย่างละเอียด

1. อ่าน task document จากขั้นตอนที่ 2
2. ทำ `/plan-code` เพื่อวางแผน architecture
3. รอให้ `/plan-code` เสร็จสิ้น
4. ตรวจสอบ architecture document ที่สร้างขึ้นใน `.agents/architecture/`
5. ตรวจสอบ architecture document มีรายละเอียดครบ: file architecture, module structure, interfaces, integration plan

### 4. Cross-Validate Documents

ตรวจสอบความสอดคล้องระหว่าง task document และ architecture document

1. ตรวจสอบ tasks ใน task document สอดคล้องกับ file architecture ใน architecture document
2. ตรวจสอบ library choices ใน task document สอดคล้องกับ module structure ใน architecture document
3. ตรวจสอบ milestones ใน task document สอดคล้องกับ integration plan ใน architecture document
4. ตรวจสอบไม่มี contradictions ระหว่างสอง documents

### 5. Validate Plan

ตรวจสอบและยืนยันแผนงานก่อน implement

1. สรุปแผนงานทั้งหมดให้ user อ่าน
2. ระบุ risks และ mitigation strategies
3. ระบุ success criteria สำหรับแต่ละ milestone
4. รอยืนยันจาก user ก่อนเริ่ม implement
5. ถ้า user มี feedback ให้แก้ไข documents แล้ว validate ใหม่

## Rules

### 1. Sequence Order

ทำตามลำดับที่ถูกต้อง

- ทำ `/plan-task` ก่อน `/plan-code` เสมอ
- `/plan-code` ต้องอ่าน task document จาก `/plan-task`
- ห้ามข้ามขั้นตอนใดๆ
- ถ้ามี feedback จาก user ให้กลับไปแก้ไข documents แล้ว validate ใหม่

### 2. Document Verification

ตรวจสอบเอกสารที่สร้างขึ้น

- ตรวจสอบ task document มีอยู่จริงใน `.agents/task/`
- ตรวจสอบ architecture document มีอยู่จริงใน `.agents/architecture/`
- ตรวจสอบ documents สอดคล้องกับ requirements
- ตรวจสอบ documents ไม่ขัดแย้งกัน

### 3. User Confirmation

รอยืนยันจาก user ก่อน implement

- ต้องรอยืนยันจาก user ก่อนเริ่ม implement
- อธิบายแผนงานอย่างชัดเจน
- รอ feedback จาก user
- ถ้า user ไม่ยืนยัน ให้แก้ไข documents ตาม feedback

### 4. Quality Standards

ทำตาม `/follow-content-quality` สำหรับคุณภาพเอกสาร

- เขียน documents ให้ชัดเจน อ่านง่าย ไม่กำกวม
- ใช้ numbered list สำหรับ steps ที่ต้องทำตามลำดับ
- ระบุ subject และ object ชัดเจนในทุกประโยค
- ไม่ซ้ำซ้อนระหว่าง task document และ architecture document

## Expected Outcome

- Task document ที่ครอบคลุมใน `.agents/task/`
- Architecture document ที่ครอบคลุมใน `.agents/architecture/`
- Implementation roadmap ที่ชัดเจน
- Cross-validation ระหว่าง documents
- ระบุ risks และ mitigation strategies
- ระบุ success criteria สำหรับแต่ละ milestone
- ยืนยันจาก user ก่อน implement
