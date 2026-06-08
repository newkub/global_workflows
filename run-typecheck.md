---
title: Run Typecheck
description: Run typecheck with config check
auto_execution_mode: 3
---

## Goal

รัน typecheck ตามที่กำหนดใน package manifest พร้อมตรวจสอบ config

## Execute

1. ทำ `/run-format` เพื่อ format code ก่อน
2. รอให้ format เสร็จสิ้นก่อนดำเนินการต่อ
3. ถ้ามีข้อผิดพลาดจาก format ให้แก้ไขก่อน
4. ทำ `/setup-config` เพื่อตรวจสอบ config
5. **ห้ามแก้ไข config ใดๆ**
6. **ห้ามใช้ ignore comments/attributes ทุกภาษา**
7. รัน typecheck ตามที่กำหนดใน package manifest
8. รัน `/analyze-errors` เพื่อวิเคราะห์และจัดลำดับ errors ที่เกิดจาก typecheck
9. `/analyze-errors` จะตัดสินใจว่าควรไป workflow ไหนต่อ:
   - ถ้าเป็น cascade issues → `/debug-issue` → `/resolve-errors`
   - ถ้าเป็น isolated errors → `/resolve-errors`

## Rules

- ทำ `/setup-config` เพื่อตรวจสอบ config แต่ **ห้ามแก้ไข**
- **ห้ามใช้ ignore comments/attributes ทุกภาษา** แก้ปัญหาที่ source
- แก้ไขข้อผิดพลาดที่เกิดขึ้นจาก typecheck ก่อนดำเนินการต่อ

## Expected Outcome

โค้ดที่ผ่าน typecheck โดยไม่มีข้อผิดพลาด