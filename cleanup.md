---
title: Cleanup
description: ทำความสะอาด project โดยลบไฟล์/โฟลเดอร์ที่ไม่จำเป็น
auto_execution_mode: 3
---

## Goal

ทำความสะอาด project โดยลบไฟล์และโฟลเดอร์ที่ไม่จำเป็น

## Execute

### 1. Check Current Structure

ตรวจสอบโครงสร้างปัจจุบันก่อนลบ

1. ทำ `/check-file-structure` เพื่อดูโครงสร้างไฟล์และโฟลเดอร์
2. ระบุไฟล์และโฟลเดอร์ที่อาจไม่จำเป็น
3. ตรวจสอบว่าไม่ลบไฟล์ที่จำเป็น (เช่น .git, node_modules)

### 2. Clean Empty Directories

ลบโฟลเดอร์ที่ว่างเปล่าหรือไม่มีเนื้อหา

1. ค้นหาโฟลเดอร์ที่ไม่มีไฟล์ใน project
2. ค้นหาโฟลเดอร์ที่มีไฟล์แต่ไฟล์ทั้งหมดว่างเปล่า
3. ลบโฟลเดอร์ที่ไม่จำเป็น
4. ตรวจสอบว่าไม่ลบโฟลเดอร์ที่จำเป็น (เช่น .git, node_modules)

### 3. Clean Empty Files

ลบไฟล์ที่ไม่มีเนื้อหา

1. ค้นหาไฟล์ที่มีขนาด 0 bytes
2. ค้นหาไฟล์ที่มีเนื้อหาว่างเปล่า (เช่น whitespace เท่านั้น)
3. ตรวจสอบว่าไม่ใช่ไฟล์ placeholder ที่จำเป็น
4. ลบไฟล์ที่ไม่มีเนื้อหาที่ไม่จำเป็น

### 4. Clean GitHub Actions Runs

ลบ GitHub Actions runs ที่ fail หรือเก่า

1. ตรวจสอบ GitHub Actions runs ด้วย `gh run list`
2. ลบ runs ที่ fail หรือเก่าด้วย `gh run delete`
3. เก็บไว้เฉพาะ runs ที่จำเป็นสำหรับ debugging

### 5. Clean Unused Dependencies

ตรวจสอบและลบ dependencies ที่ไม่ได้ใช้

1. ทำ `/check-unused-deps` เพื่อตรวจสอบ dependencies ที่ไม่ได้ใช้
2. ลบ dependencies ที่ไม่ได้ใช้จริง
3. ทำ `/update-reference` เพื่ออัพเดท references

## Rules

### 1. Safety First

ตรวจสอบก่อนลบ

- ตรวจสอบว่าไม่ลบไฟล์ที่จำเป็น
- ใช้ `git status` เพื่อดูการเปลี่ยนแปลง
- มี backup ก่อนลบข้อมูลสำคัญ
- ตรวจสอบ `.gitignore` ก่อนลบ

### 2. Selective Cleanup

ลบเฉพาะที่จำเป็น

- ไม่ลบไฟล์ configuration ที่จำเป็น
- ไม่ลบไฟล์ placeholder ที่จำเป็น
- เก็บไว้เฉพาะ GitHub Actions runs ที่จำเป็นสำหรับ debugging
- ตรวจสอบก่อนลบ dependencies

### 3. Incremental Approach

ทำทีละขั้นตอน

- ทำทีละ category ไม่รวมทุกอย่างในครั้งเดียว
- ตรวจสอบผลลัพธ์หลังแต่ละขั้นตอน
- ใช้ version control เพื่อ rollback ได้
- ทดสอบ project หลัง cleanup

## Expected Outcome

- Project สะอาดขึ้นโดยไม่เสียหาย
- ลบโฟลเดอร์ว่างเปล่าและโฟลเดอร์ที่ไม่มีเนื้อหา
- ลบไฟล์ว่างเปล่าและไฟล์ที่ไม่มีเนื้อหา
- GitHub Actions runs ที่จัดการเรียบร้อย
- Dependencies ที่ไม่ได้ใช้ถูกลบ
- Project ยังทำงานได้ปกติหลัง cleanup
