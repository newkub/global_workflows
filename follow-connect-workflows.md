---
title: Connect Workflows
description: วิเคราะห์และเชื่อมโยง workflows ใน global_workflows ให้สอดคล้องกันผ่านการอ้างอิง /workflows
auto_execution_mode: 3
---

## Goal

สำรวจและวิเคราะห์ workflows ทั้งหมดใน `global_workflows/` เพื่อเพิ่มการอ้างอิง `/workflows` ใน frontmatter และปรับปรุง discoverability

## Execute

### 1. Prepare Context

1. ตรวจสอบโครงสร้าง directory `global_workflows/`
2. อ่าน `/write-workflows` เพื่อเข้าใจมาตรฐานการเขียน workflow
3. อ่าน `/review-workflows` เพื่อเข้าใจเกณฑ์การตรวจสอบ

### 2. Research Workflows

1. อ่านรายชื่อไฟล์ `.md` ทั้งหมดใน `global_workflows/`
2. อ่าน frontmatter ของแต่ละ workflow เพื่อเข้าใจ purpose และ follow references
3. จัดกลุ่ม workflows ตามหมวดหมู่ (เช่น git, refactor, follow-*)

### 3. Analyze Relationships

1. หา workflows ที่มี purpose คล้ายกันหรือทำงานต่อเนื่องกัน
2. หา workflows ที่ควรอ้างอิงถึงกันแต่ยังไม่มีการเชื่อมโยง
3. ระบุ workflows ที่เป็น prerequisite ของ workflows อื่น

### 4. Identify Gaps

1. หา workflows ที่ไม่มี `follow.workflows` ใน frontmatter
2. หา workflows ที่ควรมีการอ้างอิงแต่ขาดหายไป
3. ระบุ duplicate workflows หรือ workflows ที่ซ้ำซ้อนกัน

### 5. Plan Connections

1. กำหนดลำดับความสำคัญของการเพิ่ม references
2. ระบุ workflows หลักที่ควรถูกอ้างอิงบ่อยที่สุด
3. วางแผนการจัดกลุ่ม workflows ตาม use case

### 6. Add References

1. แก้ไข frontmatter ของแต่ละ workflow ที่ต้องการเชื่อมโยง
2. เพิ่ม `follow.workflows` โดยใช้รูปแบบ `/-[workflow-name]`
3. ตรวจสอบว่า workflow ที่อ้างอิงมีอยู่จริง

### 7. Update Content

1. แก้ไข Steps ให้มีการอ้างอิงถึง workflows ที่เกี่ยวข้อง
2. เพิ่ม bullet point ใน Steps เพื่อใช้งาน workflows ที่เชื่อมโยง

### 8. Verify

1. ตรวจสอบว่า `follow.workflows` ทั้งหมดมีไฟล์ที่อ้างอิงอยู่จริง
2. ตรวจสอบว่าไม่มีการอ้างอิง workflow ที่ไม่มีอยู่
3. ตรวจสอบ syntax ของ frontmatter

### 9. Review Quality

1. อ่านทวน workflows ที่แก้ไข
2. ตรวจสอบว่าการเชื่อมโยงมีความหมายและเป็นประโยชน์
3. ยืนยันว่าไม่มี broken references

### 10. Finalize

1. สรุปจำนวน workflows ที่เชื่อมโยง
2. บันทึก workflows ที่ยังไม่ได้เชื่อมโยงและเหตุผล
3. ยืนยันไฟล์พร้อมใช้งาน

## Rules

1. ตรวจสอบว่า `follow.workflows` ทั้งหมดมีไฟล์ที่อ้างอิงอยู่จริง
2. ไม่มีการอ้างอิง workflow ที่ไม่มีอยู่
3. Workflows ที่เกี่ยวข้องกันสามารถค้นพบได้ง่ายผ่าน `follow.workflows`
4. ผู้ใช้สามารถ navigate ระหว่าง workflows ที่เกี่ยวข้องได้สะดวก

## Expected Outcome

- Workflows ใน `global_workflows/` มีการอ้างอิงถึงกันใน frontmatter
- ไม่มี broken references (references ที่อ้างอิงถึงไฟล์ที่ไม่มีอยู่)
- Workflows ที่เกี่ยวข้องกันสามารถค้นพบได้ง่ายผ่าน `follow.workflows`
- ผู้ใช้สามารถ navigate ระหว่าง workflows ที่เกี่ยวข้องได้สะดวก

