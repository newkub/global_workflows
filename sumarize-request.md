---
title: Sumarize Request
description: สรุป request และแสดงผลเป็นตารางครบถ้วนโดยใช้ /idea-features สำหรับสร้างตาราง features
auto_execution_mode: 3
---

ใช้ workflow นี้เพื่อสรุป request จากผู้ใช้และแสดงผลเป็นตารางที่ชัดเจน โดยใช้ /idea-features สำหรับสร้างตาราง features ที่ครบถ้วน

## Execute

### 1. Analyze Request

อ่านและวิเคราะห์ request จากผู้ใช้ให้เข้าใจอย่างละเอียด

1. ระบุประเภทของ request (feature, bug fix, refactor, new project, etc.)
2. ดึงข้อมูลหลักจาก request (context, requirements, constraints)
3. ระบุสิ่งที่ต้องทำทั้งหมดจาก request
4. วิเคราะห์ dependencies และ dependencies ที่เกี่ยวข้อง
5. ระบุ priority และ urgency ของงาน

### 2. Prepare Context for /idea-features

เตรียม context ที่จำเป็นสำหรับการเรียกใช้ /idea-features

1. ระบุ project context และ current state
2. ระบุ features ที่มีอยู่แล้วใน project
3. ระบุ gaps และ missing capabilities จาก request
4. ระบุ user needs และ pain points จาก request
5. ระบุ target users และ use cases จาก request

### 3. Call /idea-features Workflow

เรียกใช้ /idea-features workflow เพื่อสร้างตาราง features

1. ใช้ /idea-features สำหรับสร้างตาราง features ที่ครบถ้วน
2. ตารางจะมี columns: #, Feature, Description, Problem/Solves, How To, Dependencies, Parent/Category, Type, Difficult, Impact
3. เรียงลำดับตาม Impact (High → Medium → Low)
4. ใช้ continuous numbering 1-N
5. Type ระบุเป็น: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)

### 4. Present Summary with Overview

นำเสนอสรุปพร้อมภาพรวมและขั้นตอนต่อไป

1. แสดงสรุปภาพรวมของ request ด้านบน
2. แสดงตาราง features จาก /idea-features
3. เพิ่มขั้นตอนต่อไปที่แนะนำ
4. เพิ่ม notes หรือ considerations เพิ่มเติมถ้าจำเป็น
5. ให้ผู้ใช้ยืนยันหรือปรับเปลี่ยนแผนการทำงาน

## Rules

### 1. Use /idea-features for Table Generation

ใช้ /idea-features workflow สำหรับสร้างตาราง features เสมอ

1. ไม่ต้องสร้างตารางซ้ำซ้อนใน workflow นี้
2. เรียกใช้ /idea-features เพื่อสร้างตาราง features
3. ตารางจะมี columns ตามที่ /idea-features กำหนด
4. เรียงลำดับตาม Impact (High → Medium → Low)
5. ใช้ continuous numbering 1-N

### 2. Context Preparation

เตรียม context ให้ครบถ้วนก่อนเรียก /idea-features

1. ระบุ project context และ current state ชัดเจน
2. ระบุ features ที่มีอยู่แล้วใน project
3. ระบุ gaps และ missing capabilities จาก request
4. ระบุ user needs และ pain points จาก request
5. ระบุ target users และ use cases จาก request

### 3. Summary Presentation

นำเสนอสรุปในรูปแบบที่อ่านง่ายและเข้าใจได้ทันที

1. แสดงสรุปภาพรวมของ request ด้านบนตาราง
2. แสดงตาราง features จาก /idea-features
3. เพิ่มขั้นตอนต่อไปที่แนะนำ
4. เพิ่ม notes หรือ considerations เพิ่มเติมถ้าจำเป็น
5. ใช้ markdown table format จาก /idea-features
