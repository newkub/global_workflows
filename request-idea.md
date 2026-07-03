---
title: Request Idea
description: สร้างไอเดียทั่วไปสำหรับทุกประเภท วิเคราะห์ gaps, needs และ opportunities
auto_execution_mode: 3
---

## Goal

สร้างไอเดียทั่วไปสำหรับทุกประเภท (features, UX/UI, refactor, improvements, etc) วิเคราะห์ gaps, needs และ opportunities

## Scope

ครอบคลุมการวิเคราะห์โปรเจกต์ การสร้างไอเดียทั้งหมด และการจัดลำดับตาม impact

## Execute

### 1. Analyze Project

วิเคราะห์โปรเจกต์เพื่อเข้าใจโครงสร้างและ gaps

- ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์
- ระบุ gaps และ improvement opportunities

### 2. Generate Ideas

สร้างไอเดียทั้ง Extends และ New

- สร้างไอเดียปรับปรุงจากเดิม (Extends)
- สร้างไอเดียใหม่ที่ยังไม่มี (New)
- ระบุ problem ที่แต่ละไอเดียจะ solve
- จัดกลุ่มไอเดียตาม topics

### 3. Prioritize

จัดลำดับตาม impact

- จัดลำดับตาม value vs effort
- ระบุ quick wins และ strategic ideas
- เรียงลำดับตาม Impact: 🔴 สูง → 🟡 ปานกลาง → 🟢 ต่ำ

## Rules

### 1. Define Problem First

ทุกไอเดียต้อง solve real problem

- ทุกไอเดียต้อง solve real problem
- ไม่สร้างไอเดียเพราะเท่ห์อย่างเดียว
- Focus บน pain points ที่มี impact สูง

### 2. Direct Execution

ทำงานอัตโนมัติโดยไม่หยุดถาม

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/realize-implementation` เลย
- ไม่ต้องทำตาม workflow ปกติถ้าผู้ใช้สั่งโดยตรง

## Expected Outcome

- ไอเดียทั้งหมด (Extends + New) พร้อมจัดลำดับตาม Impact
- ทุกไอเดีย solve real problem
