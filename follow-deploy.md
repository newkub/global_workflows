---
title: Deploy
description: Deploy application ตาม platform ที่ใช้
auto_execution_mode: 3
---

## Goal

Deploy application ตาม platform ที่ใช้

## Execute

### 1. Choose Platform

เลือก platform ที่จะ deploy

1. ตรวจสอบ project type และ requirements
2. เลือก platform ที่เหมาะสม:
   - Cloudflare ใช้ `deploy-to-cloudflare`
   - Vercel ใช้ `deploy-to-vercel`
   - Wrikka Dev ใช้ `deploy-to-wrikka-dev`
3. ตรวจสอบว่า platform configuration พร้อม

### 2. Deploy Application

Deploy application ตาม platform ที่เลือก

1. ใช้ workflow ตาม platform ที่เลือก
2. ตรวจสอบว่า deployment เริ่มขึ้นแล้ว
3. ตรวจสอบว่า deployment สำเร็จ

## Rules

### 1. Platform Selection

- เลือก platform ตาม project type
- Cloudflare ใช้ `deploy-to-cloudflare`
- Vercel ใช้ `deploy-to-vercel`
- Wrikka Dev ใช้ `deploy-to-wrikka-dev`

### 2. Workflow Execution

- ใช้ `workflow` ที่เหมาะสมกับ platform
- ตรวจสอบว่า deployment สำเร็จ
- ตรวจสอบ errors และแก้ไข

## Expected Outcome

- Application deploy สำเร็จ
- Deployment live และใช้งานได้

