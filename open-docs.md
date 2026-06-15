---
title: Open Documentation
description: เปิด documentation site ใน browser และรัน dev server
auto_execution_mode: 3
related_workflows:
  - /run-dev
  - /open-web
  - /watch-browser
---

## Goal

เปิด documentation site ใน browser และรัน dev server ตาม @[/run-dev] ใน package manifest

## Scope

ใช้สำหรับเปิดและรัน documentation site ที่สร้างด้วย VitePress, Docus, หรือ documentation frameworks อื่นๆ

## Execute

### 1. Check Documentation Setup

1. ตรวจสอบว่ามี documentation config หรือไม่ (VitePress, Docus, ฯลฯ)
2. ตรวจสอบ package manifest สำหรับ dev script
3. ตรวจสอบว่า dependencies ถูกติดตั้งแล้ว

### 2. Run Dev Server

1. ทำ `/run-dev` เพื่อรัน development server สำหรับ documentation
2. รอให้ dev server เริ่มต้นสำเร็จ
3. ตรวจสอบว่าไม่มี errors ที่ขัดขวาง

### 3. Open Browser

1. ทำ `/open-web` เพื่อเปิด documentation site ใน browser
2. หรือทำ `/watch-browser` ถ้าต้องการ monitor และ debug ผ่าน browser automation
3. ตรวจสอบว่า documentation site โหลดได้จริง

### 4. Verify

1. ตรวจสอบว่า navigation ทำงานได้
2. ตรวจสอบว่า content แสดงผลถูกต้อง
3. ตรวจสอบว่า styling และ theme ทำงานได้
4. ตรวจสอบว่าไม่มี console errors

## Rules

### 1. Dev Server

- ทำ `/run-dev` ตาม package manifest scripts
- ใช้ dev script ที่เหมาะสมกับ documentation framework
- รอให้ dev server เริ่มต้นสำเร็จก่อนเปิด browser

### 2. Browser Opening

- ทำ `/open-web` สำหรับเปิดใน browser เท่านั้น
- ทำ `/watch-browser` สำหรับ browser automation และ monitoring
- ใช้ URL จาก dev server output

### 3. Verification

- ตรวจสอบ navigation และ content
- ตรวจสอบ styling และ theme
- ตรวจสอบ console errors
- ตรวจสอบว่า features หลักทำงานได้

## Expected Outcome

- Documentation dev server ทำงานได้
- Documentation site เปิดใน browser ได้
- Content แสดงผลถูกต้อง
- Styling และ theme ทำงานได้
- ไม่มี console errors
