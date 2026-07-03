---
title: Cleanup Unused Files
description: ตรวจสอบและลบไฟล์ที่ไม่ได้ใช้ในโปรเจกต์
auto_execution_mode: 3
related_workflows:
  - /check-unsued-files
  - /delete
  - /edit-relative
---

## Goal

ตรวจสอบและลบไฟล์ที่ไม่ได้ใช้ในโปรเจกต์อย่างปลอดภัย

## Scope

ใช้สำหรับ cleanup ไฟล์ที่ไม่ได้ใช้ในโปรเจกต์ทั้งหมด

## Execute

### 1. Scan And Identify

ตรวจสอบและระบุไฟล์ที่ไม่ได้ใช้

1. ทำ `/check-unsued-files` เพื่อตรวจสอบไฟล์ที่ไม่ได้ใช้
2. ตรวจสอบรายงานที่ได้จากการ scan
3. ยืนยันว่าไฟล์ไม่มี side effects หรือ entry points
4. จัดลำดับความสำคัญของไฟล์ที่จะลบ

### 2. Delete Files

ลบไฟล์ที่ไม่ได้ใช้

1. ทำ `/delete` เพื่อลบไฟล์และอัพเดท references
2. ลบไฟล์ตามลำดับความสำคัญที่กำหนด
3. ตรวจสอบว่า references ทั้งหมดถูกอัพเดทแล้ว
4. ทำ `/edit-relative` เพื่ออัพเดท references ที่เกี่ยวข้อง

### 3. Verify Cleanup

ตรวจสอบว่า cleanup เสร็จสมบูรณ์

1. ทำ `/run-lint` เพื่อตรวจสอบว่าไม่มี broken references
2. ทำ `/run-typecheck` เพื่อตรวจสอบว่าไม่มี type errors
3. ทำ `/check-unsued-files` อีกครั้งเพื่อยืนยัน
4. ทำ `/loop-until-complete` จนกว่าจะไม่มีไฟล์ที่ไม่ได้ใช้เหลือ

## Rules

### 1. Safety First

ตรวจสอบก่อนลบเสมอ

- ตรวจสอบ references ทั้งหมดก่อน delete
- ตรวจสอบ side effects ก่อนลบ
- ตรวจสอบ entry points ก่อนลบ
- ลบไฟล์ทีละไฟล์เพื่อ monitor ผลลัพธ์

### 2. Reference Management

จัดการ references อย่างเป็นระบบ

- อัพเดท references ทั้งหมดหลัง delete
- ตรวจสอบว่าไม่มี circular dependencies
- ตรวจสอบ imports ทั้งหมด
- ตรวจสอบ barrel exports

### 3. Verification

ตรวจสอบผลลัพธ์อย่างละเอียด

- ตรวจสอบ lint ผ่าน
- ตรวจสอบ typecheck ผ่าน
- ตรวจสอบ build ผ่าน
- ตรวจสอบ test ผ่าน

### 4. Generated Files

ไม่ลบ generated files

- ตรวจสอบ build artifacts
- ตรวจสอบ generated code
- ตรวจสอบ cache files
- ตรวจสอบ temporary files
- ตรวจสอบ lock files

## Expected Outcome

- ไฟล์ที่ไม่ได้ใช้ถูกลบทั้งหมด
- References ทั้งหมดอัพเดตแล้ว
- ไม่มี broken references
- Lint ผ่าน
- Typecheck ผ่าน
- Build ผ่าน
- Test ผ่าน
- Codebase สะอาดและ maintainable
