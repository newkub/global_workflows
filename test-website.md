---
title: Test Website
description: ทดสอบ website ด้วย agent-browser และ watch หน้าเว็บต่อเนื่อง
auto_execution_mode: 3
---

## Goal

ทดสอบ website ด้วย `agent-browser` และ watch หน้าเว็บต่อเนื่อง เพื่อตรวจสอบความถูกต้องและ performance

## Scope

ใช้สำหรับทดสอบ website ด้วย browser automation และ continuous monitoring

## Execute

### 1. Prepare Test Environment

ตั้งค่า environment สำหรับการทดสอบ:

- ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
- ตรวจสอบว่า scan, typecheck, lint, และ test ผ่านทั้งหมม
- รัน dev server หลังจาก verify ผ่าน
- ตรวจสอบว่า dev server พร้อมใช้งาน

### 2. Open Browser With Agent Browser

ทำตาม `/watch-browser` สำหรับเปิด browser

### 3. Test Core Functionality

ทดสอบ functionality หลักของ website:

- ทดสอบ navigation ระหว่าง pages
- ทดสอบ forms และ user inputs
- ทดสอบ interactive elements
- ทดสอบ responsive design

### 4. Monitor Performance

Monitor performance ตาม ## Rules ข้อ 1

### 5. Test Accessibility

ทดสอบ accessibility ตาม ## Rules ข้อ 2

### 6. Continuous Watch

Watch หน้าเว็บต่อเนื่องตาม ## Rules ข้อ 3

## Rules

### 1. Performance Monitoring

Monitor performance อย่างมีประสิทธิภาพ:

- Monitor page load times อย่างต่อเนื่อง
- Monitor Core Web Vitals (LCP, INP, CLS)
- Monitor network requests และ responses
- Monitor memory usage และ CPU
- บันทึก performance metrics สำหรับ analysis

### 2. Accessibility Testing

ทดสอบ accessibility อย่างครบถ้วน:

- ใช้ `snapshot` เพื่อดู accessibility tree
- ทดสอบ keyboard navigation
- ทดสอบ screen reader compatibility
- ทดสอบ color contrast
- ทดสอบ ARIA labels และ roles

### 3. Continuous Monitoring

Monitor อย่างต่อเนื่องและมีประสิทธิภาพ:

- Monitor console messages และ errors อย่างต่อเนื่อง
- Monitor network requests และ responses
- ใช้ `snapshot` เพื่อดู accessibility tree อย่างต่อเนื่อง
- ใช้ `screenshot` เมื่อจำเป็นสำหรับ debugging
- จัดการ errors ที่เกิดขึ้นด้วย `/resolve-errors`

### 4. Error Handling

จัดการ errors ที่เกิดขึ้นอย่างถูกต้อง:

- เมื่อเจอ error ต้องเรียก `/resolve-errors` ทันที
- ถ้า `daemon` error ให้ใช้ `browser-preview` แทน
- บันทึก error logs สำหรับ debugging
- ตรวจสอบ element availability ก่อน interact

### 5. Test Coverage

ทดสอบครอบคลุมทุก features:

- ทดสอบทุก pages และ routes
- ทดสอบทุก forms และ inputs
- ทดสอบทุก interactive elements
- ทดสอบทุก user flows
- ทดสอบ edge cases แล error scenarios

### 6. Documentation

บันทึกผลการทดสอบ:

- บันทึก test results
- บันทึก performance metrics
- บันทึก errors และ issues ที่พบ
- บันทึก recommendations สำหรับ improvements
- สรุป findings ในรูปแบบ report

## Expected Outcome

- Website ถูกทดสอบครอบคลุมทุก features
- Performance metrics ถูกบันทึกและวิเคราะห์
- Accessibility ถูกทดสอบและปรับปรุง
- Errors ที่เกิดขึ้นถูกจัดการอย่างถูกต้อง
- Test results ถูกบันทึกและสรุป
