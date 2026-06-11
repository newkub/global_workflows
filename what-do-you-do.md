---
title: What Do You Do
description: วิเคราะห์สถานการณ์และแนะนำสิ่งที่ควรทำถัดไป
auto_execution_mode: 3
related_workflows:
  - follow-suggest-next-action
  - prioritize
  - follow-incident-triage
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
2. อธิบายเหตุผลที่ควรทำ action นั้น
3. แสดงผลลัพธ์ที่คาดหวัง
4. แสดงในรูปแบบตาราง 5 columns: Number, Action, Priority, Why, Expected Result
5. ถามผู้ใช้ว่าต้องการทำ action นั้นไหม

### 5. Execute Or Adjust

ดำเนินการหรือปรับแผน

1. ถ้าผู้ใช้ตกลง ดำเนินการตาม action ที่แนะนำ
2. ถ้าผู้ใช้ไม่ตกลง ถามว่าต้องการทำอะไรแทน
3. ปรับแผนตาม feedback ของผู้ใช้
4. ทำซ้ำขั้นตอนที่ 1-4 จนกว่างานเสร็จ

## Rules

### 1. Analysis

วิเคราะห์สถานการณ์อย่างครบถ้วน

- ต้องวิเคราะห์ project state ก่อน
- ต้องตรวจสอบ conversation history
- ต้องตรวจสอบ TODO list ถ้ามี
- ต้องตรวจสอบ errors และ issues
- ต้องพิจารณา context ของงาน

### 2. Identification

ระบุสิ่งที่ควรทำอย่างถูกต้อง

- ต้องระบุ tasks ที่ค้างอยู่
- ต้องระบุ issues ที่ต้องแก้ไข
- ต้องระบุ dependencies ที่ขาด
- ต้องระบุ improvements ที่สามารถทำได้
- ต้องระบุ risks ที่ต้องจัดการ

### 3. Prioritization

จัดลำดับความสำคัญอย่างถูกต้อง

- ต้องใช้ `/prioritize` เพื่อจัดลำดับ
- ต้องประเมิน impact และ effort
- ต้องกำหนด priority อย่างชัดเจน
- ต้องพิจารณา dependencies
- ต้องเลือก action ที่มี priority สูงสุด

### 4. Suggestion

แนะนำ action อย่างชัดเจน

- ต้องแนะนำ action ที่มี priority สูงสุด
- ต้องอธิบายเหตุผลอย่างชัดเจน
- ต้องแสดงผลลัพธ์ที่คาดหวัง
- ต้องแสดงในรูปแบบตาราง
- ต้องถามผู้ใช้ก่อนดำเนินการ

### 5. Execution

ดำเนินการตามแผน

- ต้องดำเนินการตาม action ที่แนะนำ
- ต้องปรับแผนตาม feedback
- ต้องทำซ้ำจนกว่างานเสร็จ
- ต้องอัพเดท progress อย่างสม่ำเสมอ
- ต้องตรวจสอบผลลัพธ์

## Expected Outcome

- สถานการณ์ถูกวิเคราะห์อย่างครบถ้วน
- Actions ถูกระบุอย่างถูกต้อง
- Actions ถูกจัดลำดับความสำคัญอย่างถูกต้อง
- Action ถัดไปถูกแนะนำอย่างชัดเจน
- ผู้ใช้เข้าใจและตัดสินใจได้
- งานดำเนินการได้อย่างมีประสิทธิภาพ
