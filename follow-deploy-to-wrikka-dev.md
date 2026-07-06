---
title: Deploy To Wrikka Dev
description: Deploy จนกว่า domain *wrikka.dev จะเชื่อมต่อและเห็นเว็บไซต์จริง
auto_execution_mode: 3
---


## Goal

Deploy จนกว่า domain *wrikka.dev จะเชื่อมต่อและเห็นเว็บไซต์จริง

## Execute

### 1. Deploy Application

Deploy application ไปยัง platform

1. Run deploy command ตาม platform ที่ใช้
2. ตรวจสอบว่า deployment เริ่มขึ้นแล้ว
3. รับ deployment URL จาก output

### 2. Check Domain Connection

ตรวจสอบว่า domain *wrikka.dev เชื่อมต่อแล้ว

1. ทำ `/watch-browser` ด้วย domain *wrikka.dev
2. ตรวจสอบว่า DNS resolve สำเร็จ
3. ตรวจสอบว่า domain เชื่อมต่อกับ deployment
4. ตรวจสอบว่า page load สำเร็จ

### 3. Verify Website Display

ตรวจสอบว่าเห็นเว็บไซต์จริงๆ

1. ตรวจสอบว่า content แสดงผลถูกต้อง
2. ตรวจสอบว่าไม่มี console errors
3. ตรวจสอบว่าไม่มี network errors
4. ทดสอบ critical user flows

### 4. Fix Errors

แก้ไข errors ที่พบ

1. ทำ `/resolve-errors` เมื่อพบปัญหา
2. ตรวจสอบ root cause ของ errors
3. แก้ไข code ตาม root cause
4. Deploy ใหม่และตรวจสอบอีกครั้ง

### 5. Loop Until Domain Live

ทำซ้ำจนกว่า domain *wrikka.dev live สำเร็จ

1. ใช้ `/loop-until-complete` สำหรับการทำซ้ำ
2. ทำซ้ำขั้นตอน deploy, check, verify, fix
3. หยุดเมื่อ domain *wrikka.dev live สำเร็จ
4. ยืนยันว่าเห็นเว็บไซต์จริงๆ

## Rules

### 1. Domain Connection

- ใช้ `/watch-browser` กับ domain *wrikka.dev
- ตรวจสอบ DNS resolve สำเร็จ
- ตรวจสอบว่า domain เชื่อมต่อกับ deployment

### 2. Website Display

- ตรวจสอบว่า content แสดงผลถูกต้อง
- ตรวจสอบ console และ network errors
- ยืนยันว่าเห็นเว็บไซต์จริงๆ

### 3. Error Handling

- ใช้ `/resolve-errors` เมื่อพบปัญหา
- ตรวจสอบ root cause ก่อนแก้ไข
- Deploy ใหม่และตรวจสอบอีกครั้ง

### 4. Loop Until Success

- ใช้ `/loop-until-complete` สำหรับการทำซ้ำ
- ทำซ้ำจนกว่า domain *wrikka.dev live สำเร็จ
- หยุดเมื่อเห็นเว็บไซต์จริงๆ

## Expected Outcome

- Domain *wrikka.dev เชื่อมต่อสำเร็จ
- เห็นเว็บไซต์จริงๆ
- ไม่มี console errors
- ไม่มี network errors
- Content แสดงผลถูกต้อง

