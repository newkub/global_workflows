---
title: Refactor
description: ปรับปรุงคุณภาพโค้ดด้วย systematic refactoring
auto_execution_mode: 3
related_workflows:
  - /read-all-files
  - /separate-of-concern
  - /restructure
  - /relocation
  - /refactor-file-to-single-responsibility
  - /refactor-long-files-to-single-responsibility
  - /improve-naming-convention
  - /improve-side-effect
  - /deep-refactor
  - /follow-principles-engineering
---

## Goal

ปรับปรุงคุณภาพโค้ดด้วย systematic refactoring เพื่อเพิ่ม maintainability และ performance

## Scope

Refactor code ทั้งใน global_workflows และ workspace ด้วย systematic approach

## Execute

### 1. Pre-Verification

ตรวจสอบคุณภาพโค้ดก่อนเริ่ม refactor

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด (scan, typecheck, lint, test)
2. ตรวจสอบว่าทุก checks ผ่านก่อนเริ่ม refactor
3. แก้ไขข้อผิดพลาดที่พบก่อนดำเนินการต่อ

### 2. Read All Files

อ่านไฟล์ทั้งหมดในโปรเจกต์เพื่อวิเคราะห์และเข้าใจโครงสร้าง

1. ทำ `/analyze-all-files` เพื่ออ่านและวิเคราะห์ไฟล์ทั้งหมด
2. ระบุความสัมพันธ์ระหว่างไฟล์
3. สรุป pattern และ architecture
4. ตรวจสอบความสมบูรณ์ของการอ่าน

### 3. Analyze Current State

วิเคราะหาสถานะปัจจุบันของโค้ด

1. ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
2. ทำ `/check-duplication` เพื่อตรวจสอบ code duplication
3. ทำ `/check-long-files` เพื่อค้นหาไฟล์ที่ยาวเกินไป
4. วิเคราะหา dependencies และ coupling ระหว่าง modules

### 4. Plan Refactoring Strategy

วางแผนกลยุทธ์การ refactor

1. ทำ `/follow-architecture` เพื่อเลือก architecture pattern ที่เหมาะสม
2. กำหนด priorities ตาม impact และ risk
3. วางแผน breaking changes และ migration path
4. สร้าง test cases สำหรับ protect behavior

### 5. Execute Refactoring

ดำเนินการ refactor ตามลำดับที่กำหนด

1. ทำ `/restructure` เพื่อปรับ physical file/folder structure (ครั้งเดียว)
2. ทำ `/separate-of-concern` เพื่อแยก logical concerns
3. ทำ `/improve-side-effect` เพื่อแยก pure functions จาก side effects
4. ทำ `/improve-architecture` เพื่อปรับปรุงการใช้ design patterns
5. ทำ `/refactor-long-files-to-single-responsibility` สำหรับไฟล์ > 250 บรรทัด
6. ทำ `/refactor-file-to-single-responsibility` สำหรับ modules ที่ใหญ่เกินไป
7. ทำ `/relocation` เฉพาะไฟล์ที่ split ออกมาใหม่จาก logical refactoring
8. ทำ `/improve-naming-convention` เพื่อปรับปรุง naming conventions
9. ทำ `/use-scripts` สำหรับ file operations จำนวนมาก

### 6. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `/edit-relative`

### 7. Final Restructure

ปรับ physical structure อีกรอบหลัง update references

1. ทำ `/restructure` เพื่อปรับ physical file/folder structure ครั้งสุดท้าย
2. ตรวจสอบว่า structure สอดคล้องกับ logical refactoring ที่ทำไปแล้ว

### 8. Post-Verification

ตรวจสอบคุณภาพโค้ดหลัง refactor เสร็จ

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด (scan, typecheck, lint, test)
   - ตรวจสอบว่าทุก checks ผ่านหลัง refactor
   - แก้ไขข้อผิดพลาดที่เกิดจากการ refactor

## Rules

### 1. Refactoring Principles

ทำตามหลักการ refactoring เพื่อรักษา behavior และเพิ่มคุณภาพโค้ด

- เปลี่ยน `structure` โดยไม่เปลี่ยน `behavior`
- ทำทีละ `step` เล็กๆ และ `verify` ทุกครั้ง
- มี `test coverage` ก่อนเริ่ม `refactor`
- ใช้ `automated refactoring tools` เมื่อเป็นไปได้
- ทำตาม `SOLID principles` และ `design patterns`

### 2. When To Refactor

ตรวจสอบสัญญาณที่บ่งชี้ว่าต้อง refactor

- `Code` ยากต่อการอ่านและเข้าใจ
- มี `code duplication` ซ้ำซ้อน
- `Functions/classes` ใหญ่เกินไป (violates `SRP`)
- `Coupling` สูงและ `cohesion` ต่ำ
- มี `technical debt` สะสม
- `Performance issues` ที่พบจาก `monitoring`

### 3. Safety Measures

ใช้มาตรการความปลอดภัยเพื่อลดความเสี่ยง

- มี `automated tests` ก่อนเริ่ม `refactor`
- ใช้ `version control` และ `commit` บ่อยๆ
- ทำ `incremental refactoring` ไม่ใช่ `big bang`
- ใช้ `code review` ก่อน `merge`
- มี `rollback plan` สำหรับกรณี `emergency`

### 4. Execution Order

รักษาลำดับการทำงานเพื่อความสม่ำเสมอและปลอดภัย

- ต้อง `typecheck` ก่อน `test` เพื่อ `fail fast`
- ห้ามข้ามขั้นตอนใดๆ
- ทำ `/restructure` ครั้งเดียวเท่านั้น
- ใช้ `/relocation` สำหรับไฟล์ที่เปลี่ยนเฉพาะเจาะจงก่อน
- เลือก `architecture pattern` ที่เหมาะสมด้วย `/follow-architecture`

## Expected Outcome

- ทุก file ได้รับการ refactor ครบถ้วน
- Functions มีขนาดเล็ก (ไม่เกิน 20-30 บรรทัด)
- แต่ละ function มีหน้าที่เดียว (SRP)
- Concerns แยกชัดเจนตาม responsibilities
- Architecture สอดคล้องกับ best practices
- Code ง่ายต่อการ test และ maintain
- `Code quality` สูงและ `maintainability` ดีขึ้น
- `Technical debt` ลดลงอย่างมีนัยสำคัญ
- `Typecheck` ผ่านทั้งหมด
- `Tests` ผ่านทั้งหมด
- `Functionality` ยังทำงานได้

