---
title: Refactor Files
description: Refactor file structure และ organization
auto_execution_mode: 3
related_workflows:
  - /relocation
  - /rename
  - /delete
  - /edit-relative
---

## Goal

Refactor file structure และ organization เพื่อปรับปรุง maintainability

## Scope

ใช้สำหรับ refactor file structure, file naming, และ file organization

## Execute

### 1. Analyze File Structure

วิเคราะห์โครงสร้างไฟล์ปัจจุบัน

1. ตรวจสอบไฟล์ที่ยาวกว่า 250 บรรทัด
2. ตรวจสอบไฟล์ที่มีหลาย responsibilities
3. ตรวจสอบไฟล์ที่ไม่อยู่ในตำแหน่งที่เหมาะสม
4. ระบุไฟล์ที่ต้อง refactor

### 2. Refactor Long Files

แยกไฟล์ที่ยาวกว่า 250 บรรทัด

1. ค้นหาและจัดลำดับไฟล์ > 250 บรรทัด
2. กรองไฟล์ที่เว้นออก (`generated`, `config`, `node_modules`, `.git`, `dist`, `build`, `coverage`)
3. วิเคราะห์โครงสร้างและ dependencies ระหว่าง sections
4. วางแผนการ split ตาม responsibilities
5. สร้างไฟล์ใหม่สำหรับแต่ละ section
6. ย้าย code ไปยังไฟล์ใหม่
7. เพิ่ม exports จากไฟล์ใหม่
8. ลบ code ที่ถูกย้ายออกจากไฟล์เดิม
9. ทำ `/edit-relative` อัพเดท imports ทั้งหมด

### 3. Refactor File Responsibilities

แยกไฟล์ที่มีหลาย responsibilities

1. ตรวจสอบขนาดไฟล์ (ถ้า > 250 บรรทัด ใช้ step 2)
2. ระบุ function ที่มีหลาย responsibilities
3. แยก `business logic`, `I/O operations`, `data transformations`, `validation/logic`
4. แยก `pure functions` ออกจาก functions ที่มี `side effects`
5. สร้าง function ใหม่สำหรับแต่ละ responsibility
6. รวม functions ย่อยใน function หลัก
7. ปรับ imports หลังจาก refactor
8. ทำ `/edit-relative` อัพเดท references

### 4. Rename Files

เปลี่ยนชื่อไฟล์ให้สอดคล้องกับ naming conventions

1. ทำ `/rename` สำหรับไฟล์ที่ต้องเปลี่ยนชื่อ
2. ทำ `/edit-relative` หลังเปลี่ยนชื่อ

### 5. Delete Unnecessary Files

ลบไฟล์ที่ไม่จำเป็น

1. ทำ `/delete` สำหรับไฟล์ที่ไม่จำเป็น
2. ทำ `/edit-relative` หลังลบไฟล์

## Rules

- ตรวจสอบ file structure ก่อน refactor
- ไฟล์ไม่ควรเกิน 250 บรรทัด
- แต่ละไฟล์ควรมี single responsibility
- ใช้ minimal changes เสมอ
- แยก concerns ตามลักษณะการทำงาน (Business Logic, I/O Operations, Data Transform, Utilities)
- แยก pure functions ออกจาก side effects
- ตั้งชื่อให้สื่อความหมาย (VerbNoun pattern)
- ทำ `/edit-relative` หลัง rename, delete, หรือ split
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก workflows อื่น

## Expected Outcome

- ไฟล์ทั้งหมดไม่เกิน 250 บรรทัด
- แต่ละไฟล์มี single responsibility
- File names สอดคล้องกับ naming conventions
- ไฟล์อยู่ในตำแหน่งที่เหมาะสม
- References อัปเดทครบถ้วน
