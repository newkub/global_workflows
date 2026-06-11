---
title: Report Progress
description: รายงานความคืดหน้าของงานที่กำลังดำเนินการ
auto_execution_mode: 3
related_workflows:
  - /report-status
  - /report-error
---

## Goal

รายงานความคืดหน้าของงานที่กำลังดำเนินการอย่างชัดเจนและมีประสิทธิภาพ

## Scope

ใช้สำหรับการรายงานความคืดหน้าของงานที่มีหลายขั้นตอนหรือใช้เวลานาน

## Execute

### 1. Track Current Progress

ติดตามความคืดหน้าปัจจุบัน

1. ระบุ tasks ที่กำลังดำเนินการ
2. บันทึกสถานะของแต่ละ task (pending, in_progress, completed)
3. ระบุ dependencies ระหว่าง tasks
4. คำนวณ progress percentage

### 2. Show Progress Summary

แสดงสรุปความคืดหน้า

1. แสดง tasks ที่เสร็จสิ้นแล้ว
2. แสดง tasks ที่กำลังดำเนินการ
3. แสดง tasks ที่ยังไม่ได้เริ่ม
4. แสดง estimated time remaining

### 3. Report Blocked Items

รายงานสิ่งที่ถูกบล็อก

1. ระบุ tasks ที่ถูกบล็อก
2. อธิบายสาเหตุที่ถูกบล็อก
3. ระบุ dependencies ที่ต้องการ
4. แนะนำวิธีแก้ไข

### 4. Update Timeline

อัพเดท timeline และ milestones

1. ปรับปรุง estimated completion time
2. อัพเดท milestones หากจำเป็น
3. ระบุ risks ที่อาจกระทบ timeline
4. แจ้งเตือนถ้าใกล่วงเกิน deadline

## Rules

### 1. Clear Status Indicators

ต้องแสดงสถานะอย่างชัดเจน

- ใช้ `pending`, `in_progress`, `completed`, `blocked`
- แสดง progress percentage อย่างชัดเจน
- ใช้ visual indicators ถ้าเหมาะสม
- ระบุ task owner ถ้ามี

### 2. Accurate Estimation

ต้องประเมินเวลาอย่างแม่นยำ

- ใช้ historical data ถ้ามี
- ปรับปรุง estimation ตาม actual progress
- ระบุ uncertainty ใน estimation
- ให้ buffer time สำหรับ tasks ที่ไม่แน่นอน

### 3. Dependency Awareness

ต้องระบุ dependencies อย่างชัดเจน

- ระบุ tasks ที่ต้องเสร็จก่อน
- แสดง critical path อย่างชัดเจน
- ระบุ tasks ที่สามารถทำแบบ parallel
- ระบุ tasks ที่ block อื่นๆ

### 4. Actionable Updates

ต้องให้ข้อมูลที่นำไปปฏิบัติได้

- ระบุ next steps อย่างชัดเจน
- ระบุ blockers และวิธีแก้ไข
- ระบุ resources ที่ต้องการ
- ระบุ decisions ที่ต้องทำ

## Expected Outcome

- ความคืดหน้าของงานชัดเจนและเป็นปัจจุบัน
- รู้ว่า tasks ไหนถูกบล็อกและวิธีแก้ไข
- Timeline ที่แม่นยำและ realistic
- สามารถจัดการ expectations ได้ดี

## Common Mistakes (optional)

ข้อผิดพลาดที่พบบ่อย:

- ไม่อัพเดท progress อย่างสม่ำเสมอ
- ไม่ระบุ blockers อย่างชัดเจน
- ประเมินเวลาแบบ overly optimistic
- ไม่ระบุ dependencies ระหว่าง tasks
