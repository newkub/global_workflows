---
title: Improve Architecture
description: ปรับปรุง architecture, file structure และ routing
auto_execution_mode: 3
related_workflows:
  - /read-all-files
  - /plan-task
  - /improve-config
  - /improve-file-structure
  - /improve-naming-convention
  - /improve-routing
  - /improve-redundancy
  - /improve-reuseables
  - /review-architecture
  - /follow-code-quality
---

## Goal

ปรับปรุง architecture, file structure, naming, routing และ reusability ของ codebase

## Scope

ใช้สำหรับการปรับปรุงโครงสร้าง architecture ของ codebase ทั้ง config, file structure และ routing

## Execute

### 1. Analyze And Plan

1. ทำ `/read-all-files` เพื่อวิเคราะห์ไฟล์ทั้งหมด
2. ทำ `/plan-task` เพื่อวางแผนการปรับปรุง
3. รอยืนยันจาก user ก่อนเริ่มทำ

### 2. Config

1. ทำ `/improve-config` เพื่อปรับปรุง configuration files

### 3. Structure And Naming

1. ทำ `/improve-file-structure` เพื่อปรับปรุงโครงสร้างไฟล์
2. ทำ `/improve-naming-convention` เพื่อปรับปรุง naming conventions
3. ทำ `/improve-routing` เพื่อปรับปรุง routing architecture

### 4. Quality And Review

1. ทำ `/improve-redundancy` เพื่อลดความซ้ำซ้อน
2. ทำ `/improve-reuseables` เพื่อปรับปรุง reusability
3. ทำ `/review-architecture` เพื่อ review architecture
4. ทำ modernize & update latest เพื่อทำให้ codebase ทันสมัย

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

## Expected Outcome

- Architecture ถูกปรับปรุงและทันสมัย
- File structure และ naming conventions สม่ำเสมอ
- Routing architecture ถูกปรับปรุง
- ลดความซ้ำซ้อนและเพิ่ม reusability
