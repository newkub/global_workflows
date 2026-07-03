---
title: Review Codebase And Fix
description: Review codebase ครบวงจรและแก้ไข issues ที่พบ
auto_execution_mode: 3
related_workflows:
  - /refactor
  - /improve-codebase
  - /realize-implementation
  - /analyze-project
  - /analyze-over-engineering
  - /analyze-consistency
  - /report-format-table
  - /review-issue-and-fix
---

## Goal

Review codebase ครบวงจรเพื่อตรวจสอบคุณภาพโค้ดและแก้ไข issues ที่พบ

## Scope

ใช้สำหรับ review codebase ครบวงจรทั้ง structure, quality, architecture, security, performance, และ testing พร้อมแก้ไข issues ที่พบ

## Execute

### 1. Read Improvement Workflows

อ่าน workflows ที่เกี่ยวข้องกับการปรับปรุง codebase

1. อ่าน `/refactor` เพื่อเข้าใจ process การ refactor
2. อ่าน `/improve-codebase` เพื่อเข้าใจ process การปรับปรุง codebase
3. อ่าน `/realize-implementation` เพื่อเข้าใจ process การแปลง TODO/MOCK เป็น production code

### 2. Plan Expected Outcomes

วางแผนว่าควร expect อะไรจากการ review

1. ระบุ success criteria สำหรับแต่ละ workflow
2. กำหนด expected outcomes สำหรับแต่ละ phase
3. ระบุ metrics ที่ต้องตรวจสอบ (code quality, test coverage, performance)
4. สร้าง checklist สำหรับการ review

### 3. Deep Analyze

วิเคราะห์โปรเจกต์อย่างละเอียด

1. ทำ `/analyze-project` เพื่อวิเคราะหาโปรเจกต์และ code-level patterns
2. ทำ `/analyze-over-engineering` เพื่อหาสิ่งที่ over-engineer
3. ทำ `/analyze-consistency` เพื่อตรวจสอบความสม่ำเสมอ
5. รวบรวม findings จากการวิเคราะหา
6. จัดลำดับความสำคัญของ issues

### 4. Report Findings

รายงาน findings ในรูปแบบตาราง

1. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง
2. สร้างตาราง findings พร้อม columns: Category, Issue, Priority, Location, Recommendation
3. จัดกลุ่ม findings ตาม category และ priority
4. เพิ่ม recommendations สำหรับแต่ละ issue

### 5. Fix Issues

แก้ไข issues ที่พบจากการ review

1. ทำ `/review-issue-and-fix` สำหรับแก้ไข issues แต่ละอย่าง
2. จัดลำดับการแก้ไขตาม priority
3. ทำตาม workflows ที่เกี่ยวข้อง:
   - สำหรับ refactor: `/refactor`
   - สำหรับ improvement: `/improve-codebase`
   - สำหรับ TODO/MOCK: `/realize-implementation`
4. ทำ `/edit-relative` หลังจากแก้ไขไฟล์
5. ตรวจสอบว่า issues ถูกแก้ไขครบถ้วน

## Rules

- ทำตามลำดับ review อย่างเคร่งครัด: Read Workflows → Plan → Analyze → Report → Fix
- อ่าน `/refactor`, `/improve-codebase`, `/realize-implementation` ก่อน review
- Plan expected outcomes ก่อนวิเคราะห์
- ทำ analysis workflows ตามลำดับ: project → codebase → over-engineering → consistency
- ทำ `/report-format-table` เพื่อรายงาน findings
- ทำ `/review-issue-and-fix` สำหรับแก้ไข issues ที่พบ
- ทำ `/edit-relative` หลังจากแก้ไขไฟล์
- ไม่ข้ามขั้นตอน review หรือ fix
- ทำ review และ fix ครบถ้วนก่อนจบ
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก workflows อื่น

## Expected Outcome

- Workflows ใน `/refactor`, `/improve-codebase`, `/realize-implementation` ถูกอ่านและเข้าใจครบถ้วน
- Expected outcomes ถูก plan อย่างชัดเจน
- Project ถูกวิเคราะหาอย่างละเอียดด้วย analysis workflows
- Findings ถูกรายงานในรูปแบบตาราง
- Issues ทั้งหมดถูกระบุและจัดลำดับ
- Recommendations ชัดเจนสำหรับแต่ละ issue
- Issues ที่พบถูกแก้ไขครบถ้วน
- References ถูกอัพเดทหลังการแก้ไข
