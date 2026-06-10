---
title: Remove Unused
description: ลบสิ่งที่ไม่ได้ใช้ทั้งหมดจากโปรเจกต์
auto_execution_mode: 3
---

## Goal

ลบสิ่งที่ไม่ได้ใช้ทั้งหมดจากโปรเจกต์ เพื่อลดขนาดและความซับซ้อน

## Execute

### 1. Check Unused Files

ตรวจสอบไฟล์ที่ไม่ได้ใช้

1. ใช้ `/check-unsued-files`
2. ระบุไฟล์ที่ไม่มีการใช้งาน
3. ตรวจสอบ references ก่อนลบ
4. ลบไฟล์ที่ไม่ได้ใช้อย่างแน่นอน

### 2. Check Unused Dependencies

ตรวจสอบ dependencies ที่ไม่ได้ใช้

1. ใช้ `/check-unused-deps`
2. ระบุ dependencies ที่ไม่ได้ใช้
3. ตรวจสอบ transitive dependencies
4. ลบ dependencies ที่ไม่ได้ใช้จาก package manifests

### 3. Remove Dead Code

ลบโค้ดที่ไม่ได้ใช้

1. ใช้ `/dead-code-removal`
2. ระบุ functions, types, variables ที่ไม่ได้ใช้
3. ตรวจสอบ references ทั่ว codebase
4. ลบ dead code ออกจากโปรเจกต์

### 4. Clean Up

จัดระเบียบโปรเจกต์หลังลบ

1. อัพเดท imports
2. ลบ empty files และ directories
3. อัพเดท exports
4. จัดระเบียบ barrel exports
5. รัน tests เพื่อยืนยันว่าไม่มีผลกระทบ

## Rules

### 1. Verification

ตรวจสอบก่อนลบเสมอ

- ตรวจสอบ references ทั่ว codebase
- ตรวจสอบ dynamic usage
- ตรวจสอบ test files
- ตรวจสอบ configuration references
- รัน tests หลังลบทุกครั้ง

### 2. Impact Order

ทำตามลำดับที่มีผลกระทบน้อยไปมาก

- ลบ files ก่อน dependencies
- ลบ dependencies ก่อน dead code
- ทำทีละขั้นตอนและทดสอบ
- fail fast ถ้ามีปัญหา

### 3. Connected Workflows

เชื่อมโยงกับ workflows ที่เกี่ยวข้อง

- ใช้ `/check-unsued-files` สำหรับตรวจสอบไฟล์
- ใช้ `/check-unused-deps` สำหรับตรวจสอบ dependencies
- ใช้ `/dead-code-removal` สำหรับลบ dead code

## Expected Outcome

- โปรเจกต์ที่ไม่มีไฟล์ที่ไม่ได้ใช้
- Dependencies ที่สะอาด
- Dead code ที่ถูกลบออก
- Codebase ที่มีขนาดเล็กลง
- Functionality ที่ยังทำงานได้

