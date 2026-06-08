---
title: Follow Windsurf Global Workflows
description: แนวทางการใช้งาน global workflows สำหรับ setup และการพัฒนา
auto_execution_mode: 3
---

## Goal

ให้ใช้ global workflows อย่างถูกต้องก่อนเริ่ม setup หรือพัฒนาใดๆ เพื่อให้สอดคล้องกับมาตรฐาน

## Execute

### 1. Check Global Workflows

1. ตรวจสอบ global workflows ที่มีอยู่ใน `global_workflows/`
2. อ่าน workflow ที่เกี่ยวข้องกับงานที่จะทำ
3. ทำความเข้าใจขั้นตอนและกฎที่กำหนด
4. ตรวจสอบว่า workflow นั้นเป็นมาตรฐานล่าสุด

### 2. Follow Relevant Workflow

1. ใช้ `/workflow` หรือชื่อ workflow ที่เกี่ยวข้อง
2. ทำตามขั้นตอนใน Execute อย่างเคร่งครัด
3. ปฏิบัติตาม Rules ที่กำหนด
4. ตรวจสอบ Expected Outcome ว่าตรงตามที่ต้องการ

### 3. Validate Consistency

1. ตรวจสอบว่าการทำงานสอดคล้องกับ global rules
2. ยืนยันว่าไม่ขัดกับ workflows อื่น
3. ตรวจสอบความสม่ำเสมอกับงานก่อนหน้า
4. ปรับปรุงถ้าพบความไม่สอดคล้อง

## Rules

1. ต้องอ่าน global workflows ก่อนเริ่ม setup ใดๆ
2. ใช้ workflow ที่เกี่ยวข้องโดยตรงกับงานที่จะทำ
3. ห้ามข้ามขั้นตอนที่กำหนดใน workflow
4. ต้องปฏิบัติตาม Rules ของ workflow นั้นๆ
5. ถ้าไม่มี workflow ที่เหมาะสม ให้สร้าง workflow ใหม่ตาม `/follow-write-workflows`

## Expected Outcome

- การ setup และพัฒนาสอดคล้องกับมาตรฐาน
- ความสม่ำเสมอในการทำงานทั้งหมด
- ลดความผิดพลาดจากการไม่ทำตามมาตรฐาน
- เอกสารและโค้ดที่เป็นระบบ
