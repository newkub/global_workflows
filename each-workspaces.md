---
title: Each Workspaces
description: ทำงานกับแต่ละ workspace ใน monorepo จนครบถ้วนตาม workflow ที่กำหนด
auto_execution_mode: 3
---

## Goal

ทำงานกับแต่ละ workspace ใน monorepo จนครบถ้วนตาม workflow ที่กำหนด

## Execute

### 1. Discover Workspaces

1. ทำ `/analyze-project` เพื่อดู workspace configuration ทั้งหมด
2. อ่าน package manifest เพื่อดูว่ามี workspace อะไรบ้าง
3. ระบุ workspace ที่ต้องการประมวลผล

### 2. Process Each Workspace Systematically

1. อ่าน workspace configuration และ dependencies
2. ทำตาม workflow ที่เกี่ยวข้องกับแต่ละ workspace เพื่อประมวลผล
3. ตรวจสอบว่าการประมวลผลเสร็จสมบูรณ์

### 3. Verify Completion

1. ทำ `/validate` เพื่อตรวจสอบความถูกต้องของการประมวลผล
2. ตรวจสอบว่าแต่ละ workspace ได้รับการประมวลผลแล้ว
3. ตรวจสอบว่าไม่มี workspace ที่ถูกข้าม

## Rules

### 1. Workspace Discovery Strategy

ใช้วิธีการค้นหาที่เหมาะสมกับประเภท workspace:

- ใช้ `find_by_name` สำหรับค้นหาด้วย pattern และ workspace types
- อ่าน package manifest (package.json, Cargo.toml) เพื่อดู workspace configuration
- ระบุ pattern ที่ชัดเจนเพื่อ avoid processing ที่ไม่จำเป็น

### 2. Processing Order

จัดลำดับการประมวลผลตามความสำคัญ:

- ทำ workspaces ที่เป็น foundation ก่อน (shared packages, utilities)
- ทำ workspaces ที่มี dependencies ซับซ้อนทีหลัง
- หลีกเลี่ยง circular dependencies ระหว่าง workspaces

### 3. Batch Operations

ใช้ batch processing เพื่อเพิ่มประสิทธิภาพ:

- อ่าน workspaces แบบ parallel เมื่อเป็นไปได้
- ประมวลผล workspaces แบบ sequential เพื่อหลีกเลี่ยง conflicts
- จัดกลุ่ม workspaces ที่มีลักษณะเดียวกันเพื่อประมวลผลร่วมกัน

### 4. Error Handling

จัดการข้อผิดพลาดอย่างเป็นระบบ:

- บันทึก workspaces ที่มีปัญหาไว้ตรวจสอบ
- ทำ `/resolve-errors` เพื่อแก้ไขปัญหาใน workspaces
- ตรวจสอบว่าการประมวลผลไม่ทำให้เกิดปัญหาใหม่

## Expected Outcome

- แต่ละ workspace ใน scope ได้รับการประมวลผลครบถ้วน
- การประมวลผลเป็นไปตาม workflow ที่กำหนด
- ไม่มี workspace ที่ถูกข้ามหรือมีปัญหาค้างคา
- Monorepo อยู่ในสถานะที่ถูกต้องหลังการประมวลผล
