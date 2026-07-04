---
title: Read Workflows Before Work
description: อ่าน workflows ที่เกี่ยวข้องแบบ recursive ก่อนเริ่มทำงาน
auto_execution_mode: 3
---

## Goal

ตรวจสอบและอ่าน workflows ที่เกี่ยวข้องทั้งหมดก่อนเริ่มทำงานเพื่อทำความเข้าใจ dependencies และสิ่งที่ต้องทำ

## Scope

ใช้สำหรับทุก task ที่ต้องทำตาม workflows เพื่อให้แน่ใจว่าอ่าน workflows ที่เกี่ยวข้องครบถ้วน

## Execute

### 1. Identify Current Workflow

ระบุ workflow ปัจจุบันที่กำลังทำงาน

- ระบุ workflow ปัจจุบันจาก context หรือ user request
- ตรวจสอบว่า workflow มีอยู่จริง

### 2. Read Related Workflows

อ่าน workflows ที่เกี่ยวข้องแบบ recursive

- ทำ `/read-related-workflows` เพื่ออ่าน workflows ทั้งหมด
- ระบุ dependency graph ของ workflows
- สรุป tasks, rules, expected outcomes

### 3. Check Execution Order

ตรวจสอบลำดับการทำงาน

- ตรวจสอบว่ามี circular dependencies หรือไม่
- จัดลำดับ tasks ตาม dependency graph
- ยืนยันว่าลำดับการทำงานถูกต้อง

## Rules

- ต้องอ่าน workflows ที่เกี่ยวข้องก่อนเริ่มทำงานเสมอ
- ใช้ `/read-related-workflows` สำหรับการอ่านแบบ recursive
- ตรวจสอบ circular dependencies ก่อน execute
- จัดลำดับ tasks ตาม topological sort

## Expected Outcome

- เข้าใจ dependencies ของ workflows ทั้งหมด
- มี dependency graph ที่ครบถ้วน
- มีลำดับการทำงานที่ถูกต้อง
- ไม่มี circular dependencies
