---
title: Cleanup Files
description: ตรวจสอบและลบไฟล์ โฟลเดอร์ และ dependencies ที่ไม่จำเป็นในโปรเจกต์
auto_execution_mode: 3
related:
  - /check-unsued-files
  - /check-unused-deps
  - /delete
  - /edit-relative
  - /run-verify
  - /deep-analyze-with-use-scripts
  - /update-rules
---

## Goal

ทำความสะอาด codebase โดยลบไฟล์ โฟลเดอร์ dependencies และ code ที่ไม่จำเป็นอย่างปลอดภัย

## Scope

ใช้สำหรับ cleanup ทุกประเภทในโปรเจกต์: unused files, unused dependencies, dead code, empty directories, temporary files, และ build artifacts

## Execute

### 1. Scan Unused Files

ตรวจสอบไฟล์ที่ไม่ได้ใช้

1. ทำ `/check-unsued-files` เพื่อสแกนไฟล์ที่ไม่มี references
2. ตรวจสอบรายงานที่ได้
3. ยืนยันว่าไฟล์ไม่มี side effects หรือ entry points

### 2. Scan Unused Dependencies

ตรวจสอบ dependencies ที่ไม่ได้ใช้

1. ทำ `/check-unused-deps` เพื่อตรวจสอบ dependencies ที่ไม่ได้ใช้
2. ตรวจสอบ devDependencies ที่ไม่จำเป็น
3. ตรวจสอบ duplicate dependencies

### 3. Scan Dead Code

ตรวจสอบ code ที่ไม่ได้ใช้

1. รัน `knip` หรือเครื่องมือที่เทียบเท่าเพื่อหา unused exports
2. ระบุ functions, variables, types ที่ไม่ได้ใช้
3. ระบุ unreachable code
4. ตรวจสอบ commented-out code

### 4. Scan Empty Directories

ตรวจสอบโฟลเดอร์ที่ว่าง

1. ค้นหา directories ที่ไม่มีไฟล์
2. ค้นหา directories ที่มีเฉพาะ `.gitkeep` หรือ placeholder files
3. ตรวจสอบว่าไม่จำเป็นต้องเก็บไว้สำหรับ structure

### 5. Scan Temporary And Build Artifacts

ตรวจสอบไฟล์ชั่วคราวและ build artifacts

1. ตรวจสอบ `dist/`, `build/`, `.cache/` ที่ไม่จำเป็น
2. ตรวจสอบ log files, temporary files
3. ตรวจสอบว่าอยู่ใน `.gitignore` แล้ว
4. ไม่ลบ generated files ที่จำเป็นสำหรับ runtime

### 6. Delete And Clean

ลบไฟล์และโฟลเดอร์ที่ไม่จำเป็น

1. ทำ `/cleanup-files` เพื่อลบ unused files และอัพเดท references
2. ลบ unused dependencies จาก `package.json` หรือ `Cargo.toml`
3. ลบ dead code ที่ไม่ได้ใช้
4. ลบ empty directories
5. ลบ temporary files และ build artifacts ที่ไม่จำเป็น
6. ทำ `/edit-relative` เพื่ออัพเดท references ที่เกี่ยวข้อง

### 7. Verify Cleanup

ตรวจสอบว่า cleanup เสร็จสมบูรณ์

1. ทำ `/run-verify` เพื่อตรวจสอบ scan, lint, typecheck, test, build
2. ทำ `/check-unsued-files` อีกครั้งเพื่อยืนยัน
3. ทำ `/check-unused-deps` อีกครั้งเพื่อยืนยัน
4. ทำ `/loop-until-complete` จนกว่าจะไม่มีสิ่งที่ไม่จำเป็นเหลือ

## Rules

### 1. Safety First

ตรวจสอบก่อนลบเสมอ

- ตรวจสอบ references ทั้งหมดก่อน delete
- ตรวจสอบ side effects ก่อนลบ
- ตรวจสอบ entry points ก่อนลบ
- ลบทีละไฟล์เพื่อ monitor ผลลัพธ์

### 2. Reference Management

จัดการ references อย่างเป็นระบบ

- อัพเดท references ทั้งหมดหลัง delete
- ตรวจสอบ imports ทั้งหมด
- ตรวจสอบ barrel exports
- ตรวจสอบ configuration files

### 3. Generated Files

ไม่ลบ generated files ที่จำเป็น

- ตรวจสอบ build artifacts ก่อนลบ
- ตรวจสอบ generated code ที่ runtime ต้องการ
- ตรวจสอบ lock files ห้ามลบ
- ตรวจสอบ cache files ที่จำเป็น

### 4. Dependency Removal

ระวังเมื่อลบ dependencies

- ตรวจสอบ transitive dependencies
- ตรวจสอบ peer dependencies
- ตรวจสอบ optional dependencies
- รัน `bun install` หรือเทียบเท่าหลังลบเพื่อยืนยัน

### 5. Verification

ตรวจสอบผลลัพธ์อย่างละเอียด

- ตรวจสอบ lint ผ่าน
- ตรวจสอบ typecheck ผ่าน
- ตรวจสอบ build ผ่าน
- ตรวจสอบ test ผ่าน

## Expected Outcome

- ไฟล์ที่ไม่ได้ใช้ถูกลบทั้งหมด
- Dependencies ที่ไม่ได้ใช้ถูกลบ
- Dead code ถูกลบ
- Empty directories ถูกลบ
- Temporary files และ build artifacts ถูกลบ
- References ทั้งหมดอัพเดตแล้ว
- ไม่มี broken references
- Lint, typecheck, build, test ผ่าน
- Codebase สะอาดและ maintainable
