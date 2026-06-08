---
title: Refactor Safe
description: Refactor พร้อม verify ด้วย typecheck และ tests
auto_execution_mode: 3
---

## Goal

Refactor พร้อม verify ด้วย typecheck และ tests เพื่อความปลอดภัย

## Execute

### 0. Foundation

เตรียมความพร้อมก่อนเริ่ม refactor

1. ทำ `/git-branch` เพื่อสร้าง branch ใหม่สำหรับ refactor
2. ทำ `/run-test` เพื่อตรวจสอบ baseline ก่อนเริ่ม

### 1. Refactor

ทำการ refactor ตาม workflow

1. ทำ `/refactor` เพื่อปรับปรุงคุณภาพโค้ด

### 2. Validate

ตรวจสอบว่า refactor ไม่ทำลาย functionality

1. ทำ `/run-typecheck` เพื่อตรวจสอบ type safety
2. ทำ `/run-test` เพื่อยืนยันว่า functionality ยังทำงาน
3. ทำ `/test-usage` เพื่อตรวจสอบการใช้งานจริง

## Rules

### 1. Incremental Approach

ทำ refactor ทีละส่วนเพื่อลดความเสี่ยง

- ทำทีละไฟล์หรือทีละส่วน ไม่ refactor ทั้งหมดพร้อมกัน
- รัน tests หลังจากแต่ละขั้นตอนสำคัญ
- ยืนยันว่าแต่ละส่วนทำงานได้ก่อนทำส่วนถัดไป
- rollback ง่ายหากมีปัญหา

### 2. Execution Order

ทำตามลำดับที่กำหนด

- ต้องทำ `/refactor` ก่อนเสมอ
- ต้อง typecheck ก่อน test เพื่อ fail fast
- ห้ามข้ามขั้นตอนใดๆ

## Expected Outcome

- Refactor เสร็จสมบูรณ์
- Typecheck ผ่านทั้งหมด
- Tests ผ่านทั้งหมด
- Functionality ยังทำงานได้
