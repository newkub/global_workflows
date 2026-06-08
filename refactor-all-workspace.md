---
title: Refactor All Workspaces
description: ปรับปรุงโครงสร้างโค้ดทุก workspace ใน monorepo ด้วย systematic refactoring
auto_execution_mode: 3
---

## Goal

ปรับปรุงโครงสร้างโค้ดทุก workspace ใน monorepo ด้วย systematic refactoring

## Execute

### 1. Discover Workspaces

ค้นหาและระบุ workspaces ทั้งหมดใน monorepo

1. ทำ `/analyze-project` เพื่อดู workspace configuration ทั้งหมด
2. จัดลำดับ workspaces ตามความสำคัญ (foundation packages ก่อน, applications ทีหลัง)

### 2. Process Each Workspace

ทำ refactoring ในแต่ละ workspace ตามลำดับที่กำหนด

1. ทำ `/refactor` เพื่อปรับปรุงโครงสร้างโค้ดใน workspace
2. ทำ `/run-test` เพื่อตรวจสอบว่า workspace ทำงานได้ปกติ
3. ทำ `/run-typecheck` เพื่อตรวจสอบ types ถูกต้อง

### 3. Verify Completion

ตรวจสอบว่าแต่ละ workspace ได้รับการประมวลผลแล้ว

1. ทำ `/validate` เพื่อตรวจสอบความถูกต้องของการประมวลผล

## Rules

### 1. Workspace Processing Order

จัดลำดับการประมวลผลตามความสำคัญ

- ทำ workspaces ที่เป็น foundation ก่อน (shared packages, utilities)
- ทำ workspaces ที่มี dependencies ซับซ้อนทีหลัง
- หลีกเลี่ยง circular dependencies ระหว่าง workspaces

### 2. Error Handling

จัดการข้อผิดพลาดอย่างเป็นระบบ

- ทำ `/resolve-errors` สำหรับ workspaces ที่มี issues
- ตรวจสอบว่าการประมวลผลไม่ทำให้เกิดปัญหาใหม่

## Expected Outcome

- แต่ละ workspace ใน monorepo ได้รับการปรับปรุงโครงสร้างครบถ้วน
- ไม่มี workspace ที่ถูกข้ามหรือมีปัญหาค้างคา
- Monorepo อยู่ในสถานะที่ถูกต้องหลังการปรับปรุงทั้งหมด
