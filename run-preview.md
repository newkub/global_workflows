---
title: Run Preview
description: รัน preview build เพื่อทดสอบก่อน deploy จริง
auto_execution_mode: 3
related_workflows:
  - /run-build
  - /run-dev
---

## Goal

รัน preview build เพื่อทดสอบก่อน deploy จริง

## Execute

### 1. Build Preview

1. ทำ `/run-build` เพื่อสร้าง preview build
2. ตั้งค่า build mode เป็น preview
3. ตรวจสอบ build output

### 2. Start Preview Server

1. รัน preview server command ตาม framework
2. ตรวจสอบว่า server ทำงาน
3. บันทึก preview URL

### 3. Test Preview

1. เปิด preview URL ใน browser
2. ทำ `/watch-browser` เพื่อตรวจสอบ
3. ทดสอบ features สำคัญ
4. ตรวจสอบ console errors

### 4. Verify Preview

1. ตรวจสอบว่า pages โหลดถูกต้อง
2. ตรวจสอบ assets และ static files
3. ทดสอบ user flows สำคัญ
4. ตรวจสอบ responsive design

### 5. Share Preview

1. แชร์ preview URL ให้ทีม
2. รวบรวม feedback
3. บันทึก issues ที่พบ

## Rules

### 1. Preview Configuration

- ใช้ preview build mode ไม่ใช่ production
- ตั้งค่า environment variables สำหรับ preview
- ใช้ preview database หากจำเป็น

### 2. Testing Scope

- ทดสอบ features ที่เปลี่ยนแปลงล่าสุด
- ทดสอบ critical user flows
- ทดสอบ cross-browser compatibility

### 3. Preview Lifecycle

- Preview server ควรหยุดเมื่อไม่ใช้งาน
- ลบ preview builds เก่าเป็นระยะ
- ใช้ preview URLs ชั่วคราว

## Expected Outcome

- Preview build สำเร็จ
- Preview server ทำงานได้
- Features ทำงานถูกต้องใน preview
- Issues ถูกระบุและบันทึก
- Feedback จากทีมถูกรวบรวม
