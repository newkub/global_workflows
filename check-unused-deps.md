---
title: Check Unused Dependencies
description: ตรวจสอบ dependencies ที่ไม่ได้ใช้ในโปรเจกต์
auto_execution_mode: 3
---

## Goal

ตรวจสอบและระบุ dependencies ที่ไม่ได้ใช้ในโปรเจกต์

## Execute

### 1. Read Package Manifest

อ่าน package manifest ทั้งหมด

1. อ่าน `package.json` สำหรับ JavaScript/TypeScript
2. อ่าน `Cargo.toml` สำหรับ Rust
3. อ่าน `requirements.txt` สำหรับ Python
4. อ่าน `go.mod` สำหรับ Go
5. รวบรวม dependencies ทั้งหมด

### 2. Scan Code Usage

สแกนการใช้งาน dependencies ใน code

1. ค้นหา import statements
2. ค้นหา require statements
3. ค้นหา use statements
4. ค้นหา dynamic imports
5. ค้นหา configuration references

### 3. Identify Unused Dependencies

ระบุ dependencies ที่ไม่ได้ใช้

1. เปรียบเทียบ dependencies กับ usage
2. ระบุ dependencies ที่ไม่มีการใช้งาน
3. ตรวจสอบ transitive dependencies
4. ตรวจสอบ dev dependencies
5. ตรวจสอบ peer dependencies

### 4. Use Specialized Tools

ใช้ tools เฉพาะทางสำหรับตรวจสอบ

1. ใช้ `knip` สำหรับ JavaScript/TypeScript
2. ใช้ `cargo-udeps` สำหรับ Rust
3. ใช้ `pip-autoremove` สำหรับ Python
4. ใช้ `go mod tidy` สำหรับ Go
5. ทำ `/use-scripts` เพื่อ parse multiple tool outputs, cross-reference results, และ generate unified report ใน script เดียว

### 5. Generate Report

สร้างรายงานผลการตรวจสอบ

1. รวบรวม dependencies ที่ไม่ได้ใช้
2. จัดกลุ่มตามประเภท (dev, peer, optional)
3. แสดงขนาด dependencies
4. แสดง transitive dependencies
5. แนะนำการดำเนินการ

## Rules

### 1. Package Types

ตรวจสอบทุกประเภทของ dependencies

- ตรวจสอบ production dependencies
- ตรวจสอบ dev dependencies
- ตรวจสอบ peer dependencies
- ตรวจสอบ optional dependencies
- ตรวจสอบ transitive dependencies

### 2. Usage Detection

ตรวจสอบการใช้งานอย่างครอบคลุม

- ตรวจสอบ import statements
- ตรวจสอบ dynamic imports
- ตรวจสอบ configuration usage
- ตรวจสอบ build scripts
- ตรวจสอบ runtime usage

### 3. Tool Validation

ใช้หลาย tools เพื่อยืนยันผลลัพธ์

- ใช้ tools เฉพาะทางสำหรับแต่ละภาษา
- เปรียบเทียบผลลัพธ์จากหลาย tools
- ตรวจสอบ false positives
- ตรวจสอบ edge cases
- ยืนยันด้วย manual inspection

### 4. Safety

ระมัดระวังในการตัดสิน

- ตรวจสอบ implicit usage
- ตรวจสอบ plugin systems
- ตรวจสอบ framework conventions
- ตรวจสอบ type definitions
- ทดสอบหลังลบ

## Expected Outcome

- รายการ dependencies ที่ไม่ได้ใช้
- รายงานจัดกลุ่มตามประเภท
- ข้อมูลขนาดและผลกระทบ
- คำแนะนำการดำเนินการ
- ความมั่นใจในการลบ