---
title: Try Again
description: ลองทำงานใหม่เมื่อเกิด failure ด้วยการวิเคราะห์สาเหตุ ปรับแก้ และ retry
auto_execution_mode: 3
---

## Goal

ลองทำงานใหม่เมื่อเกิด failure โดยวิเคราะห์สาเหตุ ปรับแก้ปัญหา และ retry จนกว่าจะสำเร็จ

## Scope

ใช้สำหรับงานที่เกิด failure และต้อง retry ด้วยการวิเคราะห์และปรับแก้

## Execute

### 1. Analyze Failure

วิเคราะห์สาเหตุของ failure

1. ตรวจสอบ error message หรือ failure reason
2. ระบุจุดที่เกิด failure
3. วิเคราะห์สาเหตุหลัก (root cause)
4. บันทึก context และข้อมูลที่เกี่ยวข้อง

### 2. Adjust Approach

ปรับแก้แนวทางตามสาเหตุที่วิเคราะห์

1. แก้ไขปัญหาจาก root cause
2. ปรับ configuration หรือ parameters ถ้าจำเป็น
3. เพิ่ม error handling หรือ validation
4. อัพเดท dependencies หรือ environment ถ้าจำเป็น

### 3. Retry Execution

ทำงานใหม่ด้วยแนวทางที่ปรับแก้แล้ว

1. รันงานที่เคย fail อีกครั้ง
2. ตรวจสอบว่าปัญหาหายไปหรือไม่
3. ถ้ายัง fail วิเคราะห์สาเหตุใหม่
4. ทำซ้ำขั้นตอน 2-3 จนกว่าจะสำเร็จ

### 4. Verify Success

ตรวจสอบว่างานสำเร็จอย่างสมบูรณ์

1. ยืนยันว่างานทำสำเร็จ
2. รัน tests หรือ verification ที่เกี่ยวข้อง
3. ตรวจสอบว่าไม่มี side effects ใหม่
4. บันทึบ solution ที่ใช้ได้

## Rules

### 1. Failure Analysis

- ต้องวิเคราะห์ root cause ก่อน retry
- อย่า retry โดยไม่ปรับแก้อะไร
- บันทึก pattern ของ failure ที่เกิดซ้ำ
- ใช้ `/resolve-errors` ถ้าเป็น error ที่ชัดเจน

### 2. Retry Strategy

- ปรับแก้ก่อน retry ทุกครั้ง
- ตั้ง limit สำหรับจำนวน retry
- เปลี่ยนแนวทางถ้า retry หลายครั้ยยังไม่สำเร็จ
- ใช้ `/loop-until-complete` ถ้าต้อง retry หลายรอบ

### 3. Verification

- ต้อง verify ว่าสำเร็จจริงหลัง retry
- รัน tests ทั้งหมดเพื่อตรวจสอบ
- ตรวจสอบว่าไม่สร้างปัญหาใหม่
- บันทึก solution ที่ใช้ได้สำหรับอนาคต

### 4. Learning

- บันทึกสาเหตุของ failure
- บันทึก solution ที่ใช้ได้
- อัพเดท documentation ถ้าจำเป็น
- เพิ่ม test cases เพื่อป้องกัน regression

## Expected Outcome

- งานที่เคย fail ทำสำเร็จ
- มีการวิเคราะห์และแก้ไข root cause
- ไม่มี side effects ใหม่เกิดขึ้น
- มีบันทึก solution สำหรับอนาคต
- ปัญหาเดิมไม่เกิดซ้ำ

