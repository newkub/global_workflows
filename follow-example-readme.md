---
title: Example Readme
description: สร้าง README จากตัวอย่างโปรเจกต์จริง
auto_execution_mode: 3
related_workflows:
  - /update-readme
---

## Goal

สร้าง README.md โดยใช้ตัวอย่างจากโปรเจกต์จริงเป็น reference

## Scope

ครอบคลุมการใช้ตัวอย่างจาก README.md ที่มีอยู่จริง

## Execute

### 1. Get Example README

1. อ่าน README.md จากโปรเจกต์ตัวอย่าง
2. ใช้ structure และ format เดียวกัน
3. ปรับเนื้อหาให้เหมาะสมกับโปรเจกต์ใหม่

### 2. Validate And Finalize

1. ใช้ `/content-quality` เพื่อตรวจสอบคุณภาพ
2. ตรวจสอบ workflows ที่อ้างอิงมีอยู่จริง
3. ใช้ `/update-reference` หากมี file changes

## Rules

### 1. Example Usage

ใช้ README.md จากโปรเจกต์จริงเป็นตัวอย่าง:

- อ่าน README.md จาก path ที่ระบุ
- ใช้ structure และ format เดียวกัน
- ปรับเนื้อหาให้เหมาะสมกับโปรเจกต์ใหม่
- ทำตาม `/update-readme` สำหรับ sections ทั้งหมด

### 2. Content Standards

รักษาคุณภาพเนื้อหา:

- ใช้ข้อมูลจริงจากโปรเจกต์ตัวอย่าง
- Code examples ต้องรันได้จริง
- ไม่ใช้ placeholder
- Code block มี comment อธิบาย
- Note callouts ต้องมี color

### 3. Language Standards

ใช้ภาษาที่ถูกต้อง:

- README.md: Headers และ Lists เป็นภาษาอังกฤษ
- Workflow: ใช้ภาษาไทย
- ยกเว้นคำศัพท์เฉพาะทาง

## Expected Outcome

- [ ] README.md ที่มีเนื้อหาครบถ้วน ไม่มี placeholder
- [ ] โครงสร้างสม่ำเสมอตามตัวอย่าง
- [ ] Code examples ถูกต้องและพร้อมใช้งาน
- [ ] Note callouts มี color

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ใช้ placeholder แทนข้อมูลจริง
- ไม่ทำตาม structure ของตัวอย่าง
- Note callouts ไม่มี color

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ใช้ placeholder ใน README.md
- ❌ ไม่ทำตาม structure ของตัวอย่าง
- ❌ Note callouts ไม่มี color

