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
  - /resolve-issue
  - /follow-code-quality
  - /follow-agents-md
  - /report-health
  - /analyze-code-quality
  - /edit-relative
  - /run-check
  - /commit
  - /report
---

## Goal

Deep review codebase ครบทุกมิติอย่างลึกซึ้งและแก้ไข issues ที่พบจนครบถ้วน

## Scope

ใช้สำหรับ comprehensive review ครอบคลุมทุก dimension ผ่าน `/deep-review` พร้อมแก้ไข issues ที่พบ

## Execute

### 1. Read Context Workflows

อ่าน workflows ที่เกี่ยวข้องเพื่อเข้าใจบริบทก่อน review

1. ทำ `/follow-agents-md` เพื่ออ่านและทำตาม `AGENTS.md` ในทุก workspace
2. อ่าน `/ship` เพื่อเข้าใจขั้นตอนทั้งหมดตั้งแต่ planning ถึง dev server
3. อ่าน `/refactor` เพื่อเข้าใจ process การ refactor
4. อ่าน `/improve-codebase` เพื่อเข้าใจ process การปรับปรุง codebase
5. อ่าน `/realize-implementation` เพื่อเข้าใจ process การแปลง TODO/MOCK เป็น production code

### 2. Baseline Health And Plan

วัด health score และวางแผนการ review

1. ทำ `/report-health` เพื่อวัด health score ก่อนเริ่ม review
2. บันทึก baseline score เป็น metric สำหรับเปรียบเทียบหลังแก้ไข
3. ทำ `/plan` เพื่อวางแผนการ review และกำหนด scope

### 3. Analyze Codebase

ทำ `/analyze-code-quality` สำหรับ comprehensive analysis ครบทุกด้าน

1. ทำ `/analyze-code-quality` วิเคราะห์ codebase ครบทุกด้าน ผ่าน analyze-* sub-workflows
2. ทำ `/deep-review` สำหรับ comprehensive review ครบทุกมิติ พร้อม severity ratings
3. รวบรวม findings ทั้งหมดจาก `/analyze-code-quality` และ `/deep-review`

### 4. Fix Issues

แก้ไข issues ที่พบจาก `/deep-review` ตามลำดับ severity

1. ทำ `/resolve-issue` สำหรับแก้ไข issues แต่ละอย่าง
2. จัดลำดับการแก้ไขตาม severity: Critical → High → Medium → Low
3. ทำตาม workflows ที่เกี่ยวข้อง:
   - สำหรับ refactor: `/refactor`
   - สำหรับ improvement: `/improve-codebase`
   - สำหรับ TODO/MOCK: `/realize-implementation`
4. ทำ `/edit-relative` หลังจากแก้ไขไฟล์
5. ตรวจสอบว่า issues ถูกแก้ไขครบถ้วน
6. ทำ `/run-check` เพื่อตรวจสอบ lint และ typecheck ผ่าน
7. ทำ `/commit` เมื่อแก้ไข issues กลุ่มเสร็จ

### 5. Verify Health

วัด health score หลังแก้ไขเพื่อยืนยันการปรับปรุง

1. ทำ `/report-health` เพื่อวัด health score หลังแก้ไข
2. เปรียบเทียบ before-after score เพื่อยืนยันการปรับปรุง
3. ทำ `/report` เพื่อสรุปผลการ review และแก้ไข

## Rules

### 1. Review Scope

- ใช้ `/deep-review` สำหรับ review ทุกมิติ ไม่ duplicate review steps
- ถ้า project ไม่มี database ให้ข้าม database review
- ถ้า project ไม่มี frontend ให้ข้าม rendering performance review
- ปรับ scope ตาม project characteristics

### 2. Execution Order

- ทำตามลำดับ: Read context → Baseline health + `/plan` → `/deep-review` → Fix → Verify health
- ไม่ข้ามขั้นตอน review หรือ fix

### 3. Non-Redundancy

- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก workflows อื่น
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules

## Expected Outcome

- Context workflows ถูกอ่านและเข้าใจ
- Baseline health score ถูกวัดก่อนเริ่มด้วย `/report-health`
- Review plan ถูกสร้างอย่างชัดเจนด้วย `/plan`
- `/deep-review` ทำ comprehensive review ครบทุกมิติพร้อม severity ratings
- Issues ทั้งหมดถูกระบุ จัดลำดับ และแก้ไขครบถ้วน
- Health score หลังแก้ไขถูกวัดและเปรียบเทียบ before-after ด้วย `/report-health`
- References ถูกอัพเดทหลังการแก้ไข
