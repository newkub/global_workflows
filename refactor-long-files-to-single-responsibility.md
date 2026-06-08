---
title: Refactor Long Files
description: Split ไฟล์ที่ยาวกว่า 250 บรรทัดตาม Clean Architecture
auto_execution_mode: 3
---

## Goal

Split ไฟล์ที่ยาวกว่า 250 บรรทัดตาม Clean Architecture จนไม่มีเหลือ

## Execute

### 1. Check Long Files

1. รัน `loc` ตรวจสอบไฟล์ > 250 บรรทัด
2. กรองไฟล์ที่ต้องเว้นออกตามประเภท
3. บันทึกรายชื่อไฟล์ที่ต้อง refactor

### 2. Loop Until Complete

1. ทำ `/dont-over-engineer` หลีกเลี่ยงการ over-engineering
2. ทำ `/restructure` จัดกลุ่มไฟล์ให้เป็นระเบียบก่อน
3. ทำ `/refactor` split ไฟล์ตาม Clean Architecture
4. ทำ `/update-docs` อัพเดท imports และ references
5. ทำ `/loop-until-complete` ทำซ้ำจนไม่มีไฟล์ > 250 บรรทัด

### 3. Verify

รัน `loc` ยืนยันไม่มีไฟล์ > 250 บรรทัดเหลือ

## Rules

### Split Files

- Split อย่างเป็นระบบตาม Clean Architecture และ folder ที่เหมาะสม
- ไม่ split แบบมั่วๆ หรือแยกโดยไม่คิดถึง folder structure
- ใช้ `/update-reference` อัพเดท imports และ references

### Loop Until Complete

- เลือกไฟล์ > 250 บรรทัดทีละไฟล์ → Split แล้วเช็คซ้ำ
- หยุดเมื่อไม่มีไฟล์ที่ยาวกว่า 250 บรรทัดเหลือ

### Check First

- รัน `loc` ใน pwsh ก่อนเสมอ
- กรองไฟล์ที่ต้องเว้นออก
- วิเคราะห์ทุกไฟล์ที่พบ

## Expected Outcome

- ไม่มีไฟล์ > 250 บรรทัดเหลือ (ยกเว้นไฟล์ที่เว้นไว้)
- ไฟล์อยู่ใน folder ที่เหมาะสมตาม Clean Architecture
- ไม่มี broken imports หรือ missing references
