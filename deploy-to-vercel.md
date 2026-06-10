---
title: Deploy To Vercel
description: Deploy application ไปยัง Vercel ด้วย nitro build deploy
auto_execution_mode: 3
---

## Goal

Deploy application ไปยัง Vercel ด้วย nitro build deploy จนกว่าจะ live สำเร็จ

## Execute

### 1. Build Application

Build application สำหรับ deployment

1. Run `nitro build` command
2. ตรวจสอบว่า build สำเร็จ
3. ตรวจสอบว่า output พร้อมสำหรับ deployment

### 2. Deploy To Vercel

Deploy ไปยัง Vercel ด้วย nitro build deploy

1. Run `nitro build deploy vercel`
2. ตรวจสอบว่า deployment เริ่มขึ้นแล้ว
3. รับ deployment URL จาก output

### 3. Watch Deployment

Watch deployment ด้วย browser preview

1. ทำ `/watch-browser` ด้วย deployment URL
2. ตรวจสอบว่า page load สำเร็จ
3. ตรวจสอบ console errors
4. ตรวจสอบ network errors

### 4. Fix Errors

แก้ไข errors ที่พบ

1. ทำ `/resolve-errors` เมื่อพบปัญหา
2. ตรวจสอบ root cause ของ errors
3. แก้ไข code ตาม root cause
4. Deploy ใหม่และตรวจสอบอีกครั้ง

### 5. Loop Until Live

ทำซ้ำจนกว่า deployment live สำเร็จ

1. ใช้ `/loop-until-complete` สำหรับการทำซ้ำ
2. ทำซ้ำขั้นตอน deploy และ watch
3. หยุดเมื่อ deployment live สำเร็จ
4. ยืนยันว่าไม่มี errors เหลือ

## Rules

### 1. Build Process

- ใช้ `nitro build` ก่อน deploy เสมอ
- ตรวจสอบ build output
- ตรวจสอบว่า build สำเร็จ

### 2. Nitro Deploy

- ใช้ `nitro build deploy vercel` สำหรับ deployment
- ตรวจสอบ deployment output
- รับ deployment URL จาก output

### 3. Browser Watch

- ใช้ `/watch-browser` สำหรับ monitoring
- ตรวจสอบ console และ network errors
- ตรวจสอบว่า content แสดงผลถูกต้อง

### 4. Error Handling

- ใช้ `/resolve-errors` เมื่อพบปัญหา
- ตรวจสอบ root cause ก่อนแก้ไข
- Deploy ใหม่และตรวจสอบอีกครั้ง

### 5. Loop Until Success

- ใช้ `/loop-until-complete` สำหรับการทำซ้ำ
- ทำซ้ำจนกว่า deployment live สำเร็จ
- หยุดเมื่อไม่มี errors เหลือ

## Expected Outcome

- Application build สำเร็จด้วย nitro build
- Deploy ไป Vercel สำเร็จด้วย nitro build deploy vercel
- Deployment live และใช้งานได้
- ไม่มี console errors
- ไม่มี network errors

