---
title: Watch Deployment Until Live
description: Deploy, commit, push และ watch browser จนกว่า deployment จะ live
auto_execution_mode: 3
---

## Goal

Deploy application, commit และ push changes, และ watch browser จนกว่า deployment จะ live สำเร็จ

## Execute

### 1. Deploy Application

Deploy application ตาม platform ที่ใช้

1. Deploy ด้วย command ที่เหมาะสม (npm run deploy, wrangler deploy, ฯลฯ)
2. ตรวจสอบว่า deployment เริ่มขึ้นแล้ว

### 2. Commit and Push

Commit และ push changes ไปยัง repository

1. ทำ /commit
2. ทำ /git-push

### 3. Watch Until Live

Watch deployment ด้วย browser จนกว่าจะ live

1. ทำ /watch-browser ด้วย deployment URL
2. ตรวจสอบว่า page load สำเร็จ
3. ตรวจสอบ console errors
4. ทำ /resolve-errors ถ้าพบปัญหา
5. ทำซ้ำจนกว่า deployment live สำเร็จ

### 4. Verify Deployment

ตรวจสอบว่า deployment live และใช้งานได้จริง

1. ตรวจสอบว่า page load สำเร็จ
2. ตรวจสอบว่าไม่มี console errors
3. ทดสอบ critical user flows
4. ยืนยันว่า deployment live สำเร็จ

## Rules

### 1. Deployment Order

- Deploy ก่อน commit/push ถ้าจำเป็น
- Commit/push หลังจาก deploy สำเร็จ
- Watch browser หลังจากได้ deployment URL

### 2. Browser Watch

- ใช้ /watch-browser สำหรับ monitoring
- ใช้ /resolve-errors เมื่อพบปัญหา
- ตรวจสอบ console และ network errors

### 3. Loop Until Success

- ทำซ้ำการ deploy และ watch จนกว่า live
- ใช้ /loop-until-complete สำหรับการทำซ้ำ
- หยุดเมื่อ deployment live สำเร็จ

### 4. Error Handling

- แก้ไข errors ทันทีด้วย /resolve-errors
- ตรวจสอบ root cause ก่อนแก้ไข
- ทดสอบอีกครั้งหลังแก้ไข

## Expected Outcome

- Application deploy สำเร็จ
- Changes committed และ pushed แล้ว
- Deployment live และใช้งานได้
- ไม่มี console หรือ network errors
