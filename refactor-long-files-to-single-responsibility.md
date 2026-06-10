---
title: Refactor Long Files To Single Responsibility
description: Split ไฟล์ที่ยาวกว่า 250 บรรทัดตาม Single Responsibility Principle
auto_execution_mode: 3
related_workflows:
  - /check-long-files
  - /dont-over-engineer
  - /separate-of-concern
  - /restructure
  - /update-reference
  - /refactor-file-to-single-responsibility
---

## Goal

Split ไฟล์ที่ยาวกว่า 250 บรรทัดให้มีขนาดเหมาะสม และจัดเก็บตาม Single Responsibility Principle

## Scope

ใช้สำหรับ split ไฟล์ที่ยาวกว่า 250 บรรทัดในทุกภาษา

## Execute

### 1. Identify Long Files

ตรวจสอบและระบุไฟล์ที่ยาวกว่า 250 บรรทัด

1. ทำ `/check-long-files` เพื่อค้นหาไฟล์ที่ยาวกว่า 250 บรรทัด
2. กรองไฟล์ที่ต้องเว้นออกตามประเภท (`config`, `types`, `test`, `generated`)
3. บันทึกรายชื่อไฟล์ที่ต้อง `split`
4. เรียงลำดับตามขนาด (ใหญ่สุดก่อน)

### 2. Analyze File Structure

วิเคราะห์โครงสร้างไฟล์ที่จะ split

1. อ่านไฟล์ที่จะ `split`
2. ระบุ `sections` หรือ `groups` ของ `code`
3. ระบุ `dependencies` ระหว่าง `sections`
4. วิเคราะห์ `folder structure` ที่เหมาะสม

### 3. Plan Split Strategy

วางแผนการ split ตาม Single Responsibility Principle

1. ทำ `/separate-of-concern` เพื่อเข้าใจ `layer separation` ที่ถูกต้อง
2. กำหนด `folder` ปลายทางสำหรับแต่ละ `section`
3. ตั้งชื่อไฟล์ใหม่ตาม `responsibilities`
4. วางแผน `import/export structure`

### 4. Split File

แยกไฟล์ตาม responsibilities ที่วางแผนไว้

1. สร้างไฟล์ใหม่สำหรับแต่ละ `section`
2. ย้าย `code` ไปยังไฟล์ใหม่
3. ตั้งชื่อไฟล์ตาม `responsibilities`
4. เพิ่ม `exports` จากไฟล์ใหม่

### 5. Update References

อัพเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำ `/update-reference` อัพเดท `imports` ทั้งหมด
2. อัพเดท `imports` ในไฟล์เดิม
3. ตรวจสอบ `circular dependencies`
4. ลบ `code` ที่ถูกย้ายออกจากไฟล์เดิม

### 6. Verify Split

ตรวจสอบผลลัพธ์หลัง split

1. รัน `typecheck` ตรวจสอบไม่มี `type errors`
2. รัน `lint` ตรวจสอบ `code quality`
3. รัน `test` ตรวจสอบ `functionality`
4. ตรวจสอบว่าไฟล์เดิมไม่เกิน 250 บรรทัด

### 7. Repeat Until Complete

ทำซ้ำจนไม่มีไฟล์ > 250 บรรทัด

1. ทำ `/loop-until-complete` ทำซ้ำจนไม่มีไฟล์ > 250 บรรทัด
2. ทำ `/check-long-files` ยืนยันไม่มีไฟล์ > 250 บรรทัดเหลือ
3. ตรวจสอบว่าทุกไฟล์อยู่ใน `folder` ที่เหมาะสม

## Rules

### 1. File Size Limit

ตรวจสอบและระบุไฟล์ที่ต้อง split

- รัน `loc` ก่อนเสมอ
- กรองไฟล์ที่ต้องเว้นออก (`config`, `types`, `test`, `generated`)
- เลือกไฟล์ > 250 บรรทัดทีละไฟล์
- `split` แล้วเช็คซ้ำ

### 2. Single Responsibility Principle

Split ตาม Single Responsibility Principle และ folder ที่เหมาะสม

- ไม่ `split` แบบมั่วๆ หรือแยกโดยไม่คิดถึง `folder structure`
- ใช้ `/separate-of-concern` เพื่อเข้าใจ `layer separation` ที่ถูกต้อง
- จัดเก็บไฟล์ตาม `responsibilities`
- รักษา `folder structure` ที่สม่ำเสมอ

### 3. Minimal Changes

ใช้ `minimal changes` เสมอเมื่อ `split`

- ทำ `/dont-over-engineer` หลีกเลี่ยงการ `over-engineering`
- ไม่ `split` ทั้งโค้ดเบสเพื่อแก้ปัญหาเล็กๆ
- ไม่สร้าง `folder` ที่ไม่จำเป็น
- รักษา `naming conventions` เดิม

### 4. Dependency Management

จัดการ `dependencies` อย่างถูกต้อง

- ใช้ `/update-reference` อัพเดท `imports` และ `references`
- ตรวจสอบ `circular dependencies`
- ใช้ `barrel exports` สำหรับ `folder` ที่มีหลายไฟล์
- รักษา `import aliases` ที่มีอยู่

### 5. Verification

ตรวจสอบผลลัพธ์หลัง `split`

- รัน `typecheck` ตรวจสอบไม่มี `type errors`
- รัน `lint` ตรวจสอบ `code quality`
- รัน `test` ตรวจสอบ `functionality`
- ตรวจสอบว่าไฟล์เดิมไม่เกิน 250 บรรทัด

## Expected Outcome

- ไม่มีไฟล์ > 250 บรรทัดเหลือ (ยกเว้นไฟล์ที่เว้นไว้)
- ไฟล์อยู่ใน `folder` ที่เหมาะสมตาม Single Responsibility Principle
- ไม่มี `broken imports` หรือ `missing references`
- ไม่มี `circular dependencies`
- `Code` ยังทำงานได้เหมือนเดิม
- `Naming conventions` สม่ำเสมอ
- สำหรับ `physical file organization` ให้ใช้ `/restructure`

