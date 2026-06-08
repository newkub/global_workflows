---
title: Development Workflows
description: รวม workflows สำหรับ development lifecycle ตั้งแต่ planning ไปจนถึง deployment
auto_execution_mode: 3
related_workflows:
  - /plan
  - /development-guidelines
  - /ship-code
  - /run-dev
  - /run-test
  - /run-build
  - /deploy
  - /continue
---

## Goal

อธิบาย development lifecycle และ workflows ที่ใช้ในแต่ละขั้นตอน

## Scope

ครอบคลุม workflows สำหรับ planning, development, testing, build, deployment และ iteration

## Execute

### 1. Planning Phase

เริ่มต้นด้วยการวางแผน

1. ทำ `/plan` เพื่อวางแผนงานครอบคล้ว
2. รอยืนยันจาก user ก่อนเริ่ม implement

### 2. Development Phase

พัฒนาโค้ดตามแนวทางที่กำหนด

1. ทำ `/development-guidelines` เพื่ออ่านแนวทางการพัฒนา
2. ทำ `/run-dev` เพื่อรัน development server และแก้ไข errors

### 3. Testing Phase

ทดสอบคุณภาพโค้ด

1. ทำ `/run-test` เพื่อรัน test suite
2. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน

### 4. Build Phase

สร้าง production artifacts

1. ทำ `/run-build` เพื่อรัน build
2. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน

### 5. Deployment Phase

Deploy ไปยัง production

1. ทำ `/deploy` เพื่อ deploy application
2. ตรวจสอบว่า deployment สำเร็จ

### 6. Iteration Phase

ทำงานต่อหรือเริ่มใหม่

1. ทำ `/continue` เพื่อดำเนินการต่อ
2. กลับไป step 1 เพื่อเริ่ม iteration ใหม่

## Rules

### 1. Phase Order

ทำตามลำดับ phases อย่างเคร่งครัด

- Planning ต้องทำก่อน development
- Development ต้องทำก่อน testing
- Testing ต้องทำก่อน build
- Build ต้องทำก่อน deployment
- Deployment ต้องทำก่อน iteration

### 2. Completion Criteria

แต่ละ phase ต้องผ่านก่อนไป phase ถัดไป

- Planning ต้องได้รับการยืนยันจาก user
- Development ต้องผ่าน code review
- Testing ต้องผ่าน test suite
- Build ต้องสำเร็จ
- Deployment ต้องสำเร็จ

### 3. Loop Until Pass

ใช้ `/loop-until-complete` สำหรับ steps ที่ต้องผ่าน

- Testing ต้อง loop จนกว่าจะผ่าน
- Build ต้อง loop จนกว่าจะผ่าน
- ห้าม skip steps ที่ไม่ผ่าน

## Expected Outcome

- Development lifecycle ชัดเจนและเป็นระบบ
- ทีมทำงานร่วมกันได้อย่าง smooth
- Code quality สูงและสม่ำเสมอ
- Deployment สำเร็จและเสถียร
- Iteration ทำได้อย่างต่อเนื่อง
