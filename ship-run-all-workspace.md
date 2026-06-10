---
title: Ship Run All Workspace
description: Ship code และรัน dev server สำหรับทุก workspace ใน monorepo
auto_execution_mode: 3
---

## Goal

Ship code ครบวงจรและรัน development server สำหรับทุก workspace ใน monorepo

## Execute

### 1. Discover Workspaces

ค้นหาและระบุ workspaces ทั้งหมดใน monorepo

1. ทำ `/analyze-project` เพื่อดู workspace configuration ทั้งหมด
2. อ่าน package manifest เพื่อดูว่ามี workspace อะไรบ้าง
3. ระบุ workspace ที่ต้องประมวลผล

### 2. Process Each Workspace

ทำ ship-run สำหรับแต่ละ workspace ตามลำดับ

1. ทำ `/each-workspaces` เพื่อดำเนินการกับแต่ละ workspace
2. ทำ `/ship-run` สำหรับแต่ละ workspace ที่ค้นพบ
3. ตรวจสอบว่าแต่ละ workspace ได้รับการประมวลผลครบถ้วน

### 3. Verify Completion

ตรวจสอบว่าทุก workspace ผ่านการ ship-run

1. ทำ `/validate` เพื่อตรวจสอบความถูกต้อง
2. ตรวจสอบว่าไม่มี workspace ที่ถูกข้าม
3. ตรวจสอบว่าไม่มี workspace ที่มีปัญหาค้างคา

## Rules

### 1. Workspace Processing Order

จัดลำดับการประมวลผลตามความสำคัญ

- ทำ workspaces ที่เป็น foundation ก่อน (shared packages, utilities)
- ทำ workspaces ที่มี dependencies ซับซ้อนทีหลัง
- หลีกเลี่ยง circular dependencies ระหว่าง workspaces

### 2. Error Handling

จัดการข้อผิดพลาดอย่างเป็นระบบ

- บันทึก workspaces ที่มีปัญหาไว้ตรวจสอบ
- ทำ `/resolve-errors` เพื่อแก้ไขปัญหาใน workspaces
- ตรวจสอบว่าการประมวลผลไม่ทำให้เกิดปัญหาใหม่

### 3. Batch Operations

ใช้ batch processing เพื่อเพิ่มประสิทธิภาพ

- อ่าน workspaces แบบ parallel เมื่อเป็นไปได้
- ประมวลผล workspaces แบบ sequential เพื่อหลีกเลี่ยง conflicts
- จัดกลุ่ม workspaces ที่มีลักษณะเดียวกันเพื่อประมวลผลร่วมกัน

## Expected Outcome

- ทุก workspace ใน monorepo ได้รับการ ship-run ครบถ้วน
- การประมวลผลเป็นไปตาม workflow ที่กำหนด
- ไม่มี workspace ที่ถูกข้ามหรือมีปัญหาค้างคา
- Development servers ทำงานได้สำหรับทุก workspace

