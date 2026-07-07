---
title: What Do You Do
description: วิเคราะห์สถานการณ์และแนะนำสิ่งที่ควรทำถัดไป
auto_execution_mode: 3
related_workflows:
  - /suggest-next-action
  - /prioritize
  - /follow-incident-triage
  - /report-format-table
  - /analyze-project
---

## Goal

วิเคราะห์สถานการณ์ปัจจุบันและแนะนำสิ่งที่ควรทำถัดไปอย่างมีประสิทธิภาพ

## Scope

ใช้สำหรับการวิเคราะห์สถานการณ์และแนะนำ actions ทั้งใน development, debugging, และ planning

## Execute

### 1. Analyze Current State

วิเคราะห์สถานการณ์ปัจจุบัน

1. ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
2. ตรวจสอบสิ่งที่ทำไปแล้วจาก conversation history
3. ตรวจสอบสิ่งที่ยังไม่ได้ทำจาก TODO list (ถ้ามี)
4. ตรวจสอบ errors หรือ issues ที่เกิดขึ้น
5. ตรวจสอบ context ของงานปัจจุบัน

### 2. Identify What To Do

ระบุสิ่งที่ควรทำ

1. ระบุ tasks ที่ค้างอยู่
2. ระบุ issues ที่ต้องแก้ไข
3. ระบุ dependencies ที่ขาด
4. ระบุ improvements ที่สามารถทำได้
5. ระบุ risks ที่ต้องจัดการ

### 3. Prioritize Actions

จัดลำดับความสำคัญของ actions

1. ทำ `/prioritize` เพื่อจัดลำดับความสำคัญ
2. ประเมิน impact ของแต่ละ action
3. ประเมิน effort ที่ต้องใช้
4. กำหนด priority (P0-P4)
5. พิจารณา dependencies ระหว่าง actions

### 4. Suggest Next Action

แนะนำ action ถัดไปที่ควรทำ

1. เลือก action ที่มี priority สูงสุด
2. ทำ `/suggest-next-action` เพื่อแนะนำ actions แบบครบถ้วน
3. ทำ `/report-format-table` เพื่อจัดรูปแบบ: #, Action, Priority, Why, Expected Result
4. ถามผู้ใช้ว่าต้องการทำ action นั้นไหม

### 5. Execute Or Adjust

ดำเนินการหรือปรับแผน

1. ถ้าผู้ใช้ตกลง ดำเนินการตาม action ที่แนะนำ
2. ถ้าผู้ใช้ไม่ตกลง ถามว่าต้องการทำอะไรแทน
3. ปรับแผนตาม feedback ของผู้ใช้
4. ทำซ้ำขั้นตอนที่ 1-4 จนกว่างานเสร็จ

## Rules

### 1. Non-Duplication

- ใช้ `/suggest-next-action` สำหรับการแนะนำ action แบบครบถ้วน
- Workflow นี้เน้นการวิเคราะห์สถานการณ์ก่อนแนะนำ
- ไม่ซ้ำซ้อนกับ Execute — ใช้ reference แทนการ duplicate

### 2. Analysis Before Action

- ต้องวิเคราะห์ project state ก่อนเสมอ
- ต้องตรวจสอบ errors และ issues ก่อนแนะนำ
- ต้องพิจารณา context ของงานปัจจุบัน

### 3. User Decision

- ต้องถามผู้ใช้ก่อนดำเนินการ
- ต้องปรับแผนตาม feedback
- ต้องแสดงผลในรูปแบบตารางด้วย `/report-format-table`

### 4. Iteration

- ทำซ้ำจนกว่างานเสร็จ
- อัพเดท progress อย่างสม่ำเสมอ
- ตรวจสอบผลลัพธ์หลังดำเนินการ

## Expected Outcome

- สถานการณ์ถูกวิเคราะห์อย่างครบถ้วน
- Actions ถูกระบุอย่างถูกต้อง
- Actions ถูกจัดลำดับความสำคัญอย่างถูกต้อง
- Action ถัดไปถูกแนะนำอย่างชัดเจน
- ผู้ใช้เข้าใจและตัดสินใจได้
- งานดำเนินการได้อย่างมีประสิทธิภาพ
