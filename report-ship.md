---
title: Report Ship
description: รายงานผลลัพธ์การ ship code ครบวงจร ตั้งแต่ planning ถึง dev server
auto_execution_mode: 3
related_workflows:
  - /ship
  - /report
  - /suggest-next-action
  - /report-format-table
  - /report-format-terminal
---

## Goal

รายงานผลลัพธ์การ ship code ครบวงจร สรุปสถานะแต่ละขั้นตอน และผลการ verify

## Scope

ใช้สำหรับรายงานผลลัพธ์หลังทำ `/ship` เสร็จ ครอบคลุมทุกขั้นตอนตั้งแต่ planning ถึง dev server

## Execute

### 1. Collect Ship Results

รวบรวมผลลัพธ์จากแต่ละขั้นตอนของ `/ship`

1. รวบรวมสถานะของทุก step (planning, update-project, refactor, best practices, make real, code review, enhance, cleanup, verify, test quality, dev server)
2. ระบุ steps ที่ผ่าน, ไม่ผ่าน, หรือข้าม (optional)
3. รวบรวม metrics สำคัญ (lint errors, type errors, test coverage, build status)
4. ระบุ issues ที่เหลือและความรุนแรง

### 2. Format Ship Report

จัดรูปแบบรายงานตามประเภทข้อมูล

1. ใช้ `/report-format-table` สำหรับตารางสถานะแต่ละขั้นตอน
2. ใช้ `/report-format-table` สำหรับสรุปภาพรวม
3. ใช้ `/report-format-terminal` สำหรับความคืบหน้ารวม

### 3. Report Step Status

แสดงสถานะของแต่ละขั้นตอนใน `/ship`

1. แสดงตารางสถานะ: Step, สถานะ, หมายเหตุ
2. ใช้ symbols: ✅ ผ่าน, ❌ ไม่ผ่าน, ⏭️ ข้าม (optional), ⚠️ มี warning
3. ระบุ issues ที่ต้องแก้ไขเพิ่ม

### 4. Report Metrics

แสดง metrics สำคัญจากการ verify

1. แสดง lint results: errors, warnings
2. แสดง typecheck results: errors
3. แสดง test results: passed, failed, coverage
4. แสดง build results: success, failures
5. แสดง dev server status: running, errors

### 5. Report Remaining Issues

แสดง issues ที่เหลือและคำแนะนำ

1. จัดลำดับ issues ตามความรุนแรง (critical, high, medium, low)
2. แนะนำการดำเนินการถัดไป
3. ระบุ steps ที่ต้องทำซ้ำ

## Rules

### 1. Report Structure

- เริ่มด้วยสรุปภาพรวม (pass/fail รวม)
- แสดงตารางสถานะแต่ละขั้นตอน
- แสดง metrics สำคัญ
- จบด้วย issues ที่เหลือและคำแนะนำ

### 2. Status Symbols

- ✅ ผ่าน
- ❌ ไม่ผ่าน
- ⏭️ ข้าม (optional step)
- ⚠️ มี warning

### 3. Output Channel

- ตอบกลับในแชทเท่านั้น
- ไม่สร้างไฟล์แยก
- ใช้ `markdown` format มาตรฐาน

### 4. Completeness

- รายงานทุกขั้นตอนของ `/ship`
- ไม่ข้าม steps ที่ fail
- ระบุ root cause ของ failures ถ้าเป็นไปได้

## Expected Outcome

- สรุปภาพรวมการ ship code
- ตารางสถานะทุกขั้นตอนชัดเจน
- Metrics สำคัญครบถ้วน
- Issues ที่เหลือพร้อมคำแนะนำ
- ทำตาม `/report`
- ท้า /suggest-next-action เพือแนะนำอก์ชันถัดไป้
