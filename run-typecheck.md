---
title: Run Typecheck
description: Run typecheck with config check
auto_execution_mode: 3
related_workflows:
  - /config
  - /analyze-errors
  - /resolve-errors
---

## Goal

รัน typecheck ตามที่กำหนดใน package manifest พร้อมตรวจสอบ config

## Scope

รัน typecheck สำหรับทุก workspace ใน monorepo ตามที่กำหนดใน package manifest

## Execute

### 1. Check Config

1. ทำ `/config` เพื่อตรวจสอบ config
2. ห้ามแก้ไข config ใดๆ

### 2. Run Typecheck

1. ห้ามใช้ ignore comments/attributes ทุกภาษา
2. รัน typecheck ตามที่กำหนดใน package manifest

### 3. Analyze Errors

1. รัน `/analyze-errors` เพื่อวิเคราะห์และจัดลำดับ errors ที่เกิดจาก typecheck
2. `/analyze-errors` จะตัดสินใจว่าควรไป workflow ไหนต่อ:
   - ถ้าเป็น cascade issues → `/debug-issue` → `/resolve-errors`
   - ถ้าเป็น isolated errors → `/resolve-errors`

## Rules

- ทำ `/config` เพื่อตรวจสอบ config แต่ห้ามแก้ไข
- ห้ามใช้ ignore comments/attributes ทุกภาษา แก้ปัญหาที่ source
- แก้ไขข้อผิดพลาดที่เกิดขึ้นจาก typecheck ก่อนดำเนินการต่อ

## Expected Outcome

โค้ดที่ผ่าน typecheck โดยไม่มีข้อผิดพลาด
