---
title: Run Documentation Site
description: ตั้งค่าและรัน documentation site ด้วย Docus
auto_execution_mode: 3
---

ตั้งค่าและรัน documentation site ด้วย Docus

## Goal

ตั้งค่าและรัน documentation site ด้วย Docus

## Execute

### 1. Update Documentation

1. ใช้ `/write-docs` เพื่อสร้างและอัพเดทเอกสาร
2. ตรวจสอบว่า documentation ถูกสร้างอย่างถูกต้อง
3. ตรวจสอบว่า content structure ครบถ้วน

### 2. Setup Docus

1. ใช้ `/docus` เพื่อตั้งค่า Docus documentation framework
2. ตรวจสอบว่า Docus ถูกตั้งค่าอย่างถูกต้อง
3. ตรวจสอบ project structure ตามมาตรฐาน Docus

### 3. Run Development Server

1. ใช้ `/run-dev` เพื่อรัน development server
2. ตรวจสอบว่า dev server ทำงานได้
3. ทดสอบเข้าถึง documentation site ผ่าน browser

## Rules

### 1. Update Documentation

ต้องใช้ `/write-docs` ก่อนเพื่อสร้างและอัพเดทเอกสาร

- ต้องใช้ `/write-docs` ก่อน
- ต้องตรวจสอบว่า documentation ถูกสร้างอย่างถูกต้อง

### 2. Setup

ต้องใช้ `/docus` ก่อนและตรวจสอบว่า setup เสร็จสมบูรณ์

- ต้องใช้ `/docus` ก่อน
- ต้องตรวจสอบว่า setup เสร็จสมบูรณ์

### 3. Development

ต้องใช้ `/run-dev` เพื่อรัน dev server และตรวจสอบว่า dev server ทำงานได้

- ต้องใช้ `/run-dev` เพื่อรัน dev server
- ต้องตรวจสอบว่า dev server ทำงานได้

## Expected Outcome

- Docus documentation site ที่ตั้งค่าเรียบร้อย
- Development server ทำงานได้
- Content สร้างด้วย MDC syntax และ Vue components
