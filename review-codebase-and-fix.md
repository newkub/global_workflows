---
title: Review Codebase And Fix
description: Deep review ครบทุกมิติและแก้ไข issues ที่พบ
auto_execution_mode: 3
related_workflows:
  - /ship
  - /plan
  - /deep-review
  - /refactor
  - /improve-codebase
  - /realize-implementation
  - /review-issue-and-fix
---

## Goal

Deep review codebase ครบทุกมิติอย่างลึกซึ้งและแก้ไข issues ที่พบจนครบถ้วน

## Scope

ใช้สำหรับ comprehensive review ครอบคลุมทุก dimension ผ่าน `/deep-review` พร้อมแก้ไข issues ที่พบ

## Execute

### 1. Read Context Workflows

อ่าน workflows ที่เกี่ยวข้องเพื่อเข้าใจบริบทก่อน review

1. อ่าน `/ship` เพื่อเข้าใจขั้นตอนทั้งหมดตั้งแต่ planning ถึง dev server
2. อ่าน `/refactor` เพื่อเข้าใจ process การ refactor
3. อ่าน `/improve-codebase` เพื่อเข้าใจ process การปรับปรุง codebase
4. อ่าน `/realize-implementation` เพื่อเข้าใจ process การแปลง TODO/MOCK เป็น production code

### 2. Create Review Plan

สร้าง plan สำหรับการ review อย่างเป็นระบบ

1. ทำ `/plan` เพื่อวางแผนการ review และกำหนด scope
2. ระบุ success criteria สำหรับแต่ละ dimension
3. ระบุ metrics ที่ต้องตรวจสอบ (code quality, test coverage, performance, security)
4. สร้าง checklist สำหรับการ review ทุกมิติ

### 3. Deep Review

ทำ `/deep-review` สำหรับ comprehensive review ครบทุกมิติ

1. ทำ `/deep-review` เพื่อ review ทุก dimension: code quality, architecture, security, performance, testing, documentation, configuration, dependencies
2. `/deep-review` ครอบคลุม deep thinking, foundation scan, และ dimension-specific reviews
3. `/deep-review` สร้าง comprehensive report พร้อม severity ratings และ health score
4. รวบรวม findings ทั้งหมดจาก `/deep-review` report

### 4. Fix Issues

แก้ไข issues ที่พบจาก `/deep-review` ตามลำดับ severity

1. ทำ `/review-issue-and-fix` สำหรับแก้ไข issues แต่ละอย่าง
2. จัดลำดับการแก้ไขตาม severity: Critical → High → Medium → Low
3. ทำตาม workflows ที่เกี่ยวข้อง:
   - สำหรับ refactor: `/refactor`
   - สำหรับ improvement: `/improve-codebase`
   - สำหรับ TODO/MOCK: `/realize-implementation`
4. ทำ `/edit-relative` หลังจากแก้ไขไฟล์
5. ตรวจสอบว่า issues ถูกแก้ไขครบถ้วน

## Rules

### 1. Review Scope

- ใช้ `/deep-review` สำหรับ review ทุกมิติ ไม่ duplicate review steps
- ถ้า project ไม่มี database ให้ข้าม database review
- ถ้า project ไม่มี frontend ให้ข้าม rendering performance review
- ปรับ scope ตาม project characteristics

### 2. Execution Order

- ทำตามลำดับ: Read context → `/plan` → `/deep-review` → Fix
- อ่าน context workflows ก่อน review
- สร้าง plan ก่อน review
- ไม่ข้ามขั้นตอน review หรือ fix

### 3. Severity Classification

- ใช้ severity จาก `/deep-review`: Critical, High, Medium, Low
- จัดลำดับการแก้ไขตาม severity: Critical → High → Medium → Low
- แก้ Critical และ High ก่อน Medium และ Low

### 4. Fix Process

- ทำ `/review-issue-and-fix` สำหรับแก้ไข issues ที่พบ
- ทำ `/edit-relative` หลังจากแก้ไขไฟล์
- ทำ review และ fix ครบถ้วนก่อนจบ
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก workflows อื่น

## Expected Outcome

- Context workflows ถูกอ่านและเข้าใจ
- Review plan ถูกสร้างอย่างชัดเจนด้วย `/plan`
- `/deep-review` ทำ comprehensive review ครบทุกมิติพร้อม severity ratings
- Issues ทั้งหมดถูกระบุ จัดลำดับ และแก้ไขครบถ้วน
- References ถูกอัพเดทหลังการแก้ไข
