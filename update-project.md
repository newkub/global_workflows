---
title: Update Project
description: อัพเดท project documentation และ configuration ครบถ้วน
auto_execution_mode: 3
related_workflows:
  - /update-dot-devin
  - /update-readme
  - /update-agents
  - /update-docs
---

## Goal

อัพเดท project documentation และ configuration ครบถ้วนในครั้งเดียว

## Scope

ใช้สำหรับอัพเดท project ทั้งหมด รวม .devin structure, README, AGENTS.md, และ documentation

## Execute

### 1. Update Dot Devin

อัพเดท .devin structure สำหรับ project

1. ทำ `/update-dot-devin` เพื่ออัพเดท .devin structure ครบถ้วน

### 2. Update README

อัพเดท README.md สำหรับ project

1. ทำ `/update-readme` เพื่ออัพเดท README.md ครบถ้วน

### 3. Update AGENTS.md

อัพเดท AGENTS.md สำหรับ project

1. ทำ `/update-agents` เพื่ออัพเดท AGENTS.md ครบถ้วน

### 4. Update Documentation

อัพเดท documentation สำหรับ project (ถ้ามี docs/)

1. ตรวจสอบว่ามี docs/ directory หรือไม่
2. ถ้ามี docs/ ให้ทำ `/update-docs` เพื่ออัพเดท documentation ครบถ้วน

## Rules

### 1. Execution Order

ทำตามลำดับที่กำหนดเพื่อให้ได้ผลลัพธ์ที่ถูกต้อง

- ทำ `/update-dot-devin` ก่อนเสมอ เพื่อตั้งค่าพื้นฐาน
- ทำ `/update-readme` หลังจากตั้งค่าพื้นฐาน
- ทำ `/update-agents` หลังจากอัพเดท README
- ทำ `/update-docs` เป็นลำดับสุดท้าย (ถ้ามี docs/)

### 2. Conditional Execution

ตรวจสอบความจำเป็นก่อน execute

- ทำ `/update-docs` เฉพาะเมื่อมี docs/ directory
- ถ้าไม่มี docs/ ให้ข้าม step นี้

### 3. Consistency

รักษาความสม่ำเสมอ

- ทำตาม `/write-windsurf-global-workflows` สำหรับ workflow structure
- ใช้ references แทนการ duplicate เนื้อหา
- ตรวจสอบว่า workflows ที่อ้างถึงมีอยู่จริง

## Expected Outcome

- .devin structure อัพเดทครบถ้วน
- README.md อัพเดทครบถ้วน
- AGENTS.md อัพเดทครบถ้วน
- Documentation อัพเดทครบถ้วน (ถ้ามี docs/)
- Project documentation และ configuration สอดคล้องกัน
