---
title: Plan
description: วางแผนงานและ architecture อย่างเป็นระบบก่อนเริ่ม implement
auto_execution_mode: 3
related_workflows:
  - /plan-task
  - /plan-code
---

## Goal

วางแผนงานและ architecture อย่างเป็นระบบก่อนเริ่ม implement

## Scope

ครอบคลุมการวางแผน tasks, libraries, implementation path, file architecture, module structure, และ interfaces

## Execute

### 1. Plan Tasks

วางแผนงานและ tasks

1. ทำ `/plan-task` เพื่อวางแผนงานและ tasks
2. รอให้ `/plan-task` เสร็จสิ้น
3. ตรวจสอบ task document ที่สร้างขึ้น

### 2. Plan Architecture

วางแผน architecture และ structure

1. ทำ `/plan-code` เพื่อวางแผน architecture
2. รอให้ `/plan-code` เสร็จสิ้น
3. ตรวจสอบ architecture document ที่สร้างขึ้น

### 3. Validate Plan

ตรวจสอบและยืนยันแผนงาน

1. ตรวจสอบ task document และ architecture document
2. รอยืนยันจาก user ก่อนเริ่ม implement

## Rules

### 1. Sequence Order

ทำตามลำดับที่ถูกต้อง

- ทำ `/plan-task` ก่อน `/plan-code` เสมอ
- `/plan-code` ต้องอ่าน task document จาก `/plan-task`
- ห้ามข้ามขั้นตอนใดๆ

### 2. Document Verification

ตรวจสอบเอกสารที่สร้างขึ้น

- ตรวจสอบ task document มีอยู่จริง
- ตรวจสอบ architecture document มีอยู่จริง
- ตรวจสอบ documents สอดคล้องกับ requirements

### 3. User Confirmation

รอยืนยันจาก user ก่อน implement

- ต้องรอยืนยันจาก user ก่อนเริ่ม implement
- อธิบายแผนงานอย่างชัดเจน
- รอ feedback จาก user

## Expected Outcome

- Task document ที่ครอบคล้ว
- Architecture document ที่ครอบคล้ว
- Implementation roadmap ที่ชัดเจน
- ยืนยันจาก user ก่อน implement
