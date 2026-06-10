---
title: Watch Wezterm and Fix
description: เปิดเบราว์เซอร์และ watch terminal ที่เปิดอยู่ แล้วแก้ไข error อัตโนมัติ
auto_execution_mode: 3
---

## Goal

Monitor terminal process ที่เปิดอยู่อย่างต่อเนื่อง และแก้ไข errors ที่เกิดขึ้นอัตโนมัติด้วย /resolve-errors

## Execute

### 1. Identify Terminal Process

1. ตรวจสอบ terminal ที่เปิดอยู่ในปัจจุบัน
2. ระบุ process ID ของ terminal ที่ต้องการ monitor
3. ตรวจสอบว่า process กำลังรันอะไรอยู่
4. บันทึก ProcessID และ Name สำหรับใช้ในการ monitor

### 2. Open Browser Preview

1. เปิด browser preview สำหรับ web server ถ้ามี
2. ใช้ browser_preview tool พร้อม URL และ Name
3. ตั้งค่าให้ monitor อย่างต่อเนื่อง
4. ตรวจสอบว่า browser preview เปิดสำเร็จ

### 3. Monitor Terminal Output

1. ใช้ read_terminal tool เพื่ออ่าน output จาก terminal
2. ระบุ interval สำหรับการ monitor (เช่น ทุก 5 วินาที)
3. ตรวจสอบ output เป็นระยะเพื่อหา errors
4. บันทึก error messages ที่พบ

### 4. Detect and Analyze Errors

1. ตรวจสอบ output สำหรับ error patterns
2. จัดกลุ่ม errors ตามประเภท (TypeScript, ESLint, Runtime, etc.)
3. ระบุไฟล์และบรรทัดที่เกิด error
4. วิเคราะห์ root cause ของแต่ละ error

### 5. Execute Fix Error

1. เรียกใช้ /resolve-errors workflow เพื่อแก้ไข errors
2. ส่ง error messages ที่รวบรวมไปยัง resolve-errors
3. รอให้ resolve-errors ทำงานเสร็จ
4. ตรวจสอบว่า errors ถูกแก้ไขสำเร็จ

### 6. Continue Monitoring

1. กลับไป monitor terminal อีกครั้งหลังแก้ไข
2. ตรวจสอบว่า errors ไม่เกิดซ้ำ
3. monitor อย่างต่อเนื่องจนกว่าจะไม่มี errors
4. หยุด monitoring เมื่อ process จบหรือไม่มี errors

## Rules

1. Continuous Monitoring

- ต้อง monitor terminal อย่างต่อเนื่อง ไม่หยุด
- ตั้งค่า interval ที่เหมาะสม (ไม่เกิน 5 วินาที)
- ไม่ skip การ check ใดๆ
- รายงานสถานะเป็นระยะ

2. Error Detection

- ตรวจสอบทุก output อย่างละเอียด
- ไม่ ignore warnings หรือ minor errors
- ระบุ error patterns ที่ซับซ้อน
- จัดกลุ่ม errors อย่างเป็นระบบ

3. Automated Fixing

- ใช้ /resolve-errors ทุกครั้งที่พบ errors
- ไม่แก้ไข errors เองโดยตรง
- ให้ resolve-errors จัดการตามมาตรฐาน
- ตรวจสอบผลลัพธ์หลังแก้ไข

4. Process Management

- ต้องรู้ ProcessID และ Name ของ terminal เสมอ
- ใช้ read_terminal tool อย่างถูกต้อง
- ตรวจสอบว่า process ยังทำงานอยู่
- จบการ monitoring เมื่อ process หยุด

5. Browser Integration

- เปิด browser preview ถ้ามี web server
- ใช้ browser_preview tool พร้อม parameters ที่ถูกต้อง
- monitor browser logs ถ้าจำเป็น
- ปิด browser preview เมื่อเสร็จสิ้น

## Expected Outcome

1. Terminal process ถูก monitor อย่างต่อเนื่อง
2. Errors ถูก detect และแก้ไขอัตโนมัติ
3. Browser preview เปิดและ monitor ถ้ามี web server
4. Codebase ไม่มี errors เหลืออยู่
5. Process ทำงานสำเร็จโดยไม่มี interruptions
