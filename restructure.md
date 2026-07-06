---
title: Restructure
description: ปรับโครงสร้างไฟล์และโฟลเดอร์ให้มี single responsibility
auto_execution_mode: 3
related_workflows:
  - /simplify-content
  - /analyze-code-structure
  - /analyze-codebase-quality
  - /check-long-files
  - /improve-naming-convention
  - /refactor
  - /relocation
  - /grouping
  - /edit-relative
  - /follow-barrel-files
  - /use-import-alias
  - /use-scripts
  - /follow-code-quality
---

## Goal

ปรับปรุง physical file/folder structure ให้ทุกไฟล์และโฟลเดอร์มี single responsibility

## Scope

ครอบคลุม naming, relocation, grouping ของ physical structure สำหรับ logical concern separation ให้ใช้ `/refactor`

## Execute

### 1. Analyze Current Structure

1. ทำ `/analyze-code-structure` เพื่อดูภาพรวม
2. ทำ `/analyze-codebase-quality` เพื่อระบุ SRP, SoC, type safety, hard code, anti-patterns, code smells, dead code, side effects, naming conventions
3. ทำ `/check-long-files` เพื่อระบุไฟล์ที่ยาวกว่า 250 บรรทัด

### 2. Improve File Naming

1. ทำ `/improve-naming-convention` เพื่อปรับปรุง naming
2. ทำ `/edit-relative` เพื่ออัปเดต import paths

### 3. Split Files With Multiple Responsibilities

1. ทำ `/refactor` สำหรับไฟล์ที่ยาวกว่า 250 บรรทัด
2. ทำ `/edit-relative` เพื่ออัปเดต imports

### 4. Relocate And Group By Domain

1. ทำ `/relocation` เพื่อย้ายไฟล์ไปยังโฟลเดอร์ที่สอดคล้องกับ responsibility
2. ทำ `/grouping` เพื่อจัดกลุ่มไฟล์ตาม domain
3. ทำ `/edit-relative` เพื่ออัปเดต imports

### 5. Refactor Barrel Files And Import Aliases

1. ทำ `/follow-barrel-files` เพื่อ refactor entry files
2. ทำ `/use-import-alias` เพื่อแทนที่ relative paths ที่ซับซ้อน

### 6. Validate Single Responsibility

1. รัน build หรือ type check เพื่อยืนยัน import paths ถูกต้อง
2. ทำ `/check-long-files` เพื่อยืนยันไม่มีไฟล์ที่ยาวกว่า 250 บรรทัด

## Rules

- ทำ `/dont-over-engineer` เสมอเมื่อเริ่มทำงาน
- ใช้ minimal changes เสมอ
- หนึ่งไฟล์ทำหนึ่งเรื่อง ไม่เกิน 250 บรรทัด
- หนึ่งโฟลเดอร์รวมไฟล์ที่เกี่ยวข้องกับ domain เดียว
- ทำ `/edit-relative` ทุกครั้งหลังย้ายหรือเปลี่ยนชื่อไฟล์
- ใช้ `/use-scripts` เมื่อ file operations มากกว่า 10 ไฟล์
- สำหรับ logical concern separation ให้ใช้ `/refactor`

## Expected Outcome

- ทุกไฟล์มี `single responsibility` ชัดเจน ไม่เกิน 250 บรรทัด
- ทุกโฟลเดอร์จัดกลุ่มตาม domain เดียว
- naming สะท้อน responsibility ทั่วทั้งโปรเจกต์
- import paths ถูกต้อง ใช้ alias แทน relative paths ที่ซับซ้อน
