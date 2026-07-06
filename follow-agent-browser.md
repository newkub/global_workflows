---
title: Follow Agent Browser
description: ใช้ agent-browser สำหรับ browser automation และ web testing
auto_execution_mode: 3
---

## Goal

ใช้ `agent-browser` สำหรับ browser automation และ web testing อย่างมีประสิทธิภาพ

## Scope

ใช้สำหรับ browser automation, web testing, และ monitoring ด้วย `agent-browser` CLI

## Execute

### 1. Prepare Environment

ตั้งค่า environment ก่อนเริ่มใช้งาน

- ตรวจสอบว่า `agent-browser` ติดตั้งแล้ว
- พิมพ์ `agent-browser --help` เพื่อดูการใช้งานทั้งหมด
- ตั้งค่า environment variables สำหรับ configuration
- ตรวจสอบ browser dependencies

### 2. Open Browser Session

เปิด browser session ตาม ## Rules ข้อ 1

### 3. Navigate And Interact

นำทางและโต้ตอบกับหน้าเว็บตาม ## Rules ข้อ 2

### 4. Monitor And Debug

Monitor และ debug ตาม ## Rules ข้อ 3

### 5. Handle Errors

จัดการ errors ที่เกิดขึ้นตาม ## Rules ข้อ 4

### 6. Cleanup And Close

ทำ cleanup หลังจากใช้งานเสร็จ

- ปิด browser session ด้วย `close`
- ลบ temporary files และ profiles
- สรุปผลลัพธ์และ issues ที่พบ

## Rules

### 1. Browser Configuration

ตั้งค่า browser configuration อย่างถูกต้อง

- ใช้ `agent-browser` เท่านั้นในการจัดการเบราว์เซอร์
- ใช้ `--headed` เพื่อเปิด browser แบบมองเห็นหน้าต่าง
- ใช้ `--session` สำหรับ isolated sessions
- ใช้ `--profile` สำหรับ persistent data
- ใช้ environment variables สำหรับ configuration ที่ซ้ำซ้อน

### 2. Navigation And Interaction

นำทางและโต้ตอบกับหน้าเว็บอย่างถูกต้อง

- ใช้ `navigate <url>` สำหรับเปลี่ยนหน้า
- ใช้ `click <selector>` สำหรับคลิก elements
- ใช้ `type <selector> <text>` สำหรับกรอกข้อมูล
- ใช้ `snapshot` สำหรับดู accessibility tree และ element references
- รอให้ page load เสร็จก่อน interact

### 3. Monitoring And Debugging

Monitor และ debug อย่างมีประสิทธิภาพ

- Monitor console messages และ errors อย่างต่อเนื่อง
- Monitor network requests และ responses
- ใช้ `screenshot` สำหรับ capture หน้าจอเมื่อจำเป็น
- ใช้ `logs` สำหรับดู browser logs
- ใช้ `snapshot` เพื่อดู accessibility tree

### 4. Error Handling

จัดการ errors ที่เกิดขึ้นอย่างถูกต้อง

- เมื่อเจอ error ต้องเรียก `/resolve-errors` ทันที
- ถ้า `daemon` error ให้ใช้ `browser-preview` แทน
- บันทึก error logs สำหรับ debugging
- ตรวจสอบ element availability ก่อน interact

### 5. Performance

ปรับปรุง performance สำหรับ operations ต่อเนื่อง

- ใช้ `command chaining` && สำหรับ operations ต่อเนื่อง
- ใช้ `--session` สำหรับ isolated sessions
- ใช้ `--profile` สำหรับ persistent data
- ปิด sessions ที่ไม่ได้ใช้เพื่อประหยัด resources

### 6. Security

รักษา security ระหว่างการใช้งาน

- ไม่เก็บ sensitive data ใน browser profiles
- ใช้ isolated sessions สำหรับ sensitive operations
- ลบ temporary files และ profiles หลังใช้งาน
- ไม่แชร์ sessions ระหว่าง test cases

## Expected Outcome

- Browser automation ทำงานได้อย่างมีประสิทธิภาพ
- Console และ network requests ถูก monitor อย่างต่อเนื่อง
- Errors ที่เกิดขึ้นถูกจัดการอย่างถูกต้อง
- Sessions ถูก cleanup หลังใช้งาน
- Performance ถูกปรับปรุงอย่างต่อเนื่อง
