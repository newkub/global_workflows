---
title: Check Unused Files
description: ตรวจสอบไฟล์ที่ไม่ได้ใช้ในโปรเจกต์
auto_execution_mode: 3
---

## Goal

ตรวจสอบและระบุไฟล์ที่ไม่ได้ใช้ในโปรเจกต์

## Execute

### 1. Scan Project Files

สแกนไฟล์ทั้งหมดในโปรเจกต์

1. ใช้ `find_by_name` สำหรับค้นหาไฟล์
2. รวบรวมไฟล์ทั้งหมดใน codebase
3. แยกประเภทไฟล์ตาม extension
4. ตรวจสอบไฟล์ใน `.gitignore`
5. ตรวจสอบ generated files

### 2. Check File References

ตรวจสอบ references ของแต่ละไฟล์

1. ทำ `/use-scripts` เพื่อ scan files, check references, generate dependency graph, และ analyze side effects ใน script เดียว

### 3. Identify Unused Files

ระบุไฟล์ที่ไม่มีการใช้งาน

1. เปรียบเทียบไฟล์กับ references
2. ระบุไฟล์ที่ไม่มี references
3. ตรวจสอบ side effects
4. ตรวจสอบ entry points
5. สร้างรายการไฟล์ที่ไม่ได้ใช้

### 4. Generate Report

สร้างรายงานผลการตรวจสอบ

1. รวบรวมไฟล์ที่ไม่ได้ใช้
2. จัดกลุ่มตาม directory
3. แสดงขนาดไฟล์
4. แสดงประเภทไฟล์
5. แนะนำการดำเนินการ

## Rules

### 1. Reference Accuracy

ตรวจสอบ references อย่างละเอียด

- ค้นหาทุกประเภทของ references
- ตรวจสอบ dynamic imports
- ตรวจสอบ configuration files
- ตรวจสอบ documentation
- ตรวจสอบ test files

### 2. Side Effects

ตรวจสอบ side effects ก่อนตัดสิน

- ตรวจสอบ module initialization
- ตรวจสอบ global state
- ตรวจสอบ event listeners
- ตรวจสอบ middleware registration
- ตรวจสอบ plugin registration

### 3. Entry Points

ตรวจสอบ entry points ที่อาจใช้ไฟล์

- ตรวจสอบ main entry files
- ตรวจสอบ CLI commands
- ตรวจสอบ web server entry
- ตรวจสอบ build configuration
- ตรวจสอบ deployment scripts

### 4. Generated Files

แยก generated files ออกจาก analysis

- ตรวจสอบ build artifacts
- ตรวจสอบ generated code
- ตรวจสอบ cache files
- ตรวจสอบ temporary files
- ตรวจสอบ lock files

## Expected Outcome

- รายการไฟล์ที่ไม่ได้ใช้
- รายงานที่จัดกลุ่มตาม directory
- ข้อมูลขนาดและประเภทไฟล์
- คำแนะนำการดำเนินการ
- ความมั่นใจในการลบ