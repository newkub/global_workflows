---
title: Suggest Next Action
description: วิเคราะห์สถานการณ์และแนะนำ action ถัดไปที่ควรทำ
auto_execution_mode: 3
---

## Goal

วิเคราะห์สถานการณ์ปัจจุบันและแนะนำ action ถัดไปที่เหมาะสม

## Execute

### 1. Analyze Current State

1. รัน `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
2. ตรวจสอบสิ่งที่ทำไปแล้วจาก conversation history
3. ตรวจสอบสิ่งที่ยังไม่ได้ทำจาก TODO list (ถ้ามี)

### 2. Identify Gaps

1. ตรวจสอบว่ามี error หรือปัญหาที่ยังไม่ได้แก้ไหม
2. ตรวจสอบว่ามี task ที่ค้างอยู่ไหม
3. ตรวจสอบว่ามี dependencies ที่ขาดไหม

### 3. Suggest Actions

1. จัดลำดับความสำคัญของ actions ที่ควรทำ
2. แนะนำ action ถัดไปที่มีความสำคัญสูงสุด
3. อธิบายเหตุผลว่าทำไมควรทำ action นั้น
4. แสดงผลในรูปแบบตาราง 5 columns: Number, Title, Impact, Why, Expected Result

### 4. Ask User

1. ถามผู้ใช้ว่าต้องการทำ action ที่แนะนำไหม
2. ถ้าไม่ต้องการ ถามว่าต้องการทำอะไรแทน
3. ถ้าต้องการ ดำเนินการตาม action ที่แนะนำ

## Rules

### 1. Analysis

- ต้องวิเคราะห์สถานการณ์ก่อนแนะนำ
- ต้องพิจารณา context จาก conversation history
- ต้องตรวจสอบ TODO list ถ้ามี

### 2. Prioritization

- ต้องจัดลำดับความสำคัญของ actions
- ต้องเลือก action ที่มีความสำคัญสูงสุด
- ต้องอธิบายเหตุผลของการแนะนำ

### 3. Output Format

- ต้องแสดงผลในรูปแบบตาราง 5 columns
- ต้องมี Number, Title, Impact, Why, Expected Result
- ต้องถามผู้ใช้ก่อนดำเนินการ

## Template Format

ตารางแนะนำ actions ต้องมี 5 columns:

| Number | Title | Impact | Why | Expected Result |
|--------|-------|--------|-----|----------------|
| 1 | Action Title | High/Low/Medium | เหตุผลที่ควรทำ | ผลลัพธ์ที่คาดหวัง |
| 2 | Action Title | High/Low/Medium | เหตุผลที่ควรทำ | ผลลัพธ์ที่คาดหวัง |

## Expected Outcome

- แนะนำ action ถัดไปที่เหมาะสม
- มีเหตุผลที่ชัดเจนสำหรับการแนะนำ
- ผู้ใช้เข้าใจและตัดสินใจได้

