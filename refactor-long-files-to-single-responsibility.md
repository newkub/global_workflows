---
title: Refactor Long Files To Single Responsibility
description: Split ไฟล์ที่ยาวกว่า 250 บรรทัดตาม Single Responsibility Principle
auto_execution_mode: 3
related_workflows:
  - /check-long-files
  - /dont-over-engineer
  - /separate-of-concern
  - /restructure
  - /update-references
  - /refactor-file-to-single-responsibility
---

## Goal

แยกไฟล์ที่เกิน 250 บรรทัดให้มีขนาดเหมาะสม จัดเก็บตาม Single Responsibility Principle

## Scope

ใช้สำหรับ split ไฟล์ที่ยาวกว่า 250 บรรทัดในทุกภาษา

## Execute

### 1. Identify And Prioritize

ค้นหาและจัดลำดับไฟล์ที่ต้อง split

1. ทำ `/check-long-files` ค้นหาไฟล์ > 250 บรรทัด
2. กรองไฟล์ที่เว้นออก (`generated`, `config`, `node_modules`, `.git`, `dist`, `build`, `coverage`)
3. เรียงลำดับตามขนาด (ใหญ่สุดก่อน)

### 2. Analyze Structure

วิเคราะห์โครงสร้างและ dependencies

1. อ่านไฟล์ที่จะ split
2. อ่าน `/refactor` เพื่อเข้าใจ systematic refactoring approach
3. ระบุ sections และ groups ของ code
4. วิเคราะห์ dependencies ระหว่าง sections
5. ทำ `/separate-of-concern` เข้าใจ layer separation

### 3. Plan Split

วางแผนการ split ตาม responsibilities

1. กำหนด folder ปลายทางสำหรับแต่ละ section
2. ตั้งชื่อไฟล์ตาม responsibilities
3. วางแผน import/export structure

### 4. Execute Split

แยกไฟล์ตามแผนที่วางไว้

1. สร้างไฟล์ใหม่สำหรับแต่ละ section
2. ย้าย code ไปยังไฟล์ใหม่
3. เพิ่ม exports จากไฟล์ใหม่
4. ทำ `/update-references` อัพเดท imports ทั้งหมด
5. ตรวจสอบ circular dependencies
6. ลบ code ที่ถูกย้ายออกจากไฟล์เดิม

### 5. Verify And Iterate

ตรวจสอบและทำซ้ำจนครบถ้วน

1. รัน typecheck, lint, test ตรวจสอบความถูกต้อง
2. ตรวจสอบว่าไฟล์เดิมไม่เกิน 250 บรรทัด
3. ทำ `/loop-until-complete` ทำซ้ำจนไม่มีไฟล์ > 250 บรรทัด
4. ทำ `/check-long-files` ยืนยันผลลัพธ์

## Rules

### 1. File Selection

เลือกไฟล์ที่เหมาะสมสำหรับ split

- รัน loc ก่อนเสมอ
- กรองไฟล์ที่เว้นออก (`generated`, `config`, `node_modules`, `.git`, `dist`, `build`, `coverage`)
- เลือกไฟล์ > 250 บรรทัดทีละไฟล์
- split แล้วเช็คซ้ำ

### 2. Responsibility Boundaries

Split ตาม Single Responsibility Principle

- ไม่ split แบบมั่วๆ โดยไม่คิดถึง folder structure
- จัดเก็บไฟล์ตาม responsibilities
- รักษา folder structure ที่สม่ำเสมอ
- ใช้ barrel exports สำหรับ folder ที่มีหลายไฟล์

### 3. Minimal Impact

ใช้ minimal changes เสมอ

- ทำ `/dont-over-engineer` หลีกเลี่ยง over-engineering
- ไม่ split ทั้ง codebase เพื่อแก้ปัญหาเล็กๆ
- ไม่สร้าง folder ที่ไม่จำเป็น
- รักษา naming conventions เดิม
- รักษา import aliases ที่มีอยู่

### 4. Verification Standards

ตรวจสอบผลลัพธ์อย่างเข้มงวด

- รัน typecheck ตรวจสอบไม่มี type errors
- รัน lint ตรวจสอบ code quality
- รัน test ตรวจสอบ functionality
- ตรวจสอบว่าไฟล์เดิมไม่เกิน 250 บรรทัด

## Expected Outcome

- ไม่มีไฟล์ > 250 บรรทัดเหลือ (ยกเว้นไฟล์ที่เว้นไว้)
- ไฟล์อยู่ใน folder ที่เหมาะสมตาม Single Responsibility Principle
- ไม่มี broken imports หรือ missing references
- ไม่มี circular dependencies
- Code ยังทำงานได้เหมือนเดิม
- Naming conventions สม่ำเสมอ
- สำหรับ physical file organization ให้ใช้ `/restructure`

