---
title: Git Submodule Status
description: ตรวจสอบสถานะของ git submodules ทั้งหมดเพื่อดู commit ที่ตรงกับ index หรือไม่
auto_execution_mode: 3
---


ตรวจสอบสถานะของ git submodules ทั้งหมดเพื่อดูว่า submodules อยู่ใน commit ที่ตรงกับที่บันทึกไว้ใน superproject หรือไม่

## Execute

### 1. Check All Submodules Status

ตรวจสอบสถานะของ submodules ทั้งหมด

1. รัน `git submodule status` เพื่อดูสถานะของ submodules ทั้งหมด
2. อ่าน output ที่แสดง SHA-1, path, และ git describe สำหรับแต่ละ submodule
3. ตรวจสอบเครื่องหมายนำหน้า SHA-1 แต่ละตัว
4. บันทึกสถานะของแต่ละ submodule เพื่อวิเคราะห์

### 2. Interpret Status Prefixes

อ่านความหมายของเครื่องหมายนำหน้า SHA-1

1. เครื่องหมาย `-` หมายถึง submodule ยังไม่ถูก initialize
2. เครื่องหมาย `+` หมายถึง submodule commit ไม่ตรงกับที่บันทึกไว้ใน index
3. เครื่องหมาย `U` หมายถึง submodule มี merge conflicts
4. ไม่มีเครื่องหมาย หมายถึง submodule อยู่ใน commit ที่ตรงกับที่บันทึกไว้

### 3. Check Cached Status

ตรวจสอบ commit ที่บันทึกไว้ใน superproject

1. รัน `git submodule status --cached` เพื่อดู commit ที่บันทึกไว้
2. เปรียบเทียบกับ status ปัจจุบันเพื่อดู differences
3. ตรวจสอบว่า commit ที่บันทึกไว้เป็น commit ที่ต้องการ
4. บันทึก commit hashes ที่บันทึกไว้สำหรับ reference

### 4. Check Recursive Status

ตรวจสอบสถานะของ nested submodules

1. รัน `git submodule status --recursive` เพื่อดู nested submodules
2. ตรวจสอบสถานะของ submodules ทุก level
3. วิเคราะห์ dependencies ระหว่าง nested submodules
4. บันทึก structure ของ nested submodules

### 5. Check Specific Submodule

ตรวจสอบสถานะของ submodule เฉพาะ

1. รัน `git submodule status <path>` เพื่อดู submodule เฉพาะ
2. ระบุ path ของ submodule ที่ต้องการตรวจสอบ
3. ตรวจสอบสถานะอย่างละเอียดสำหรับ submodule นั้น
4. เปรียบเทียบกับ commit ที่บันทึกไว้ใน index

### 6. Analyze Differences

วิเคราะห์ differences ระหว่าง current state และ recorded state

1. เปรียบเทียบ commit ปัจจุบันกับ commit ที่บันทึกไว้
2. ตรวจสอบว่ามี uncommitted changes ใน submodules หรือไม่
3. ตรวจสอบว่า submodules อยู่ใน branch ที่ถูกต้องหรือไม่
4. วิเคราะห์ผลกระทบของ differences ต่อ project

## Rules

### 1. Status Interpretation Rules

อ่านและตีความสถานะของ submodules อย่างถูกต้อง

1. เครื่องหมาย `-` แสดงว่าต้อง initialize submodule ก่อนใช้งาน
2. เครื่องหมาย `+` แสดงว่า submodule มี changes ที่ยังไม่ commit ใน superproject
3. เครื่องหมาย `U` แสดงว่ามี merge conflicts ที่ต้อง resolve
4. ไม่มีเครื่องหมายแสดงว่า submodule อยู่ใน state ที่ถูกต้อง

### 2. Commit Comparison Rules

เปรียบเทียบ commits อย่างถูกต้อง

1. SHA-1 ที่แสดงคือ commit ปัจจุบันของ submodule
2. SHA-1 ที่บันทึกไว้ใน index คือ commit ที่ superproject ต้องการ
3. ใช้ `git diff` ใน submodule เพื่อดู differences ระหว่าง commits
4. ตรวจสอบว่า differences นั้นปลอดภัยสำหรับ project

### 3. Branch Tracking Rules

ตรวจสอบ branch ที่ submodules track อยู่

1. ตรวจสอบว่า submodules อยู่ใน branch ที่ถูกต้อง
2. ใช้ `git branch` ใน submodule เพื่อดู current branch
3. ตรวจสอบว่า branch ที่ track อยู่ตรงกับที่ตั้งค่าไว้
4. ตรวจสอบว่า branch ที่ track อยู่เป็น branch ที่ active

### 4. Uncommitted Changes Rules

จัดการ uncommitted changes ใน submodules

1. ตรวจสอบว่ามี uncommitted changes ใน submodules หรือไม่
2. ใช้ `git status` ใน submodule เพื่อดู changes
3. ตัดสินใจว่าจะ commit, discard, หรือ keep changes
4. Commit changes ใน superproject หลังจากจัดการ changes ใน submodules

### 5. Nested Submodule Rules

จัดการ nested submodules อย่างถูกต้อง

1. ใช้ `--recursive` เสมอสำหรับ projects ที่มี nested submodules
2. ตรวจสอบสถานะของ submodules ทุก level
3. วิเคราะห์ dependencies ระหว่าง nested submodules
4. ตรวจสอบว่า nested submodules อยู่ใน state ที่ถูกต้อง

### 6. Status Reporting Rules

รายงานสถานะของ submodules อย่างชัดเจน

1. รายงานสถานะของ submodules ทั้งหมดอย่างครบถ้วน
2. อธิบายความหมายของเครื่องหมายแต่ละตัว
3. ระบุ submodules ที่ต้องการ action
4. แนะนำ action ที่ควรทำสำหรับแต่ละ submodule

