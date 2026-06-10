---
title: Don't Over-Engineer
description: หลีกเลี่ยงการ over-engineering ใช้ minimal changes
auto_execution_mode: 3
---

## Goal

แก้ปัญหาด้วย minimal changes ที่เป็นไปได้เสมอ

## Execute

### 1. Identify Root Cause

1. วิเคราะห์ปัญหาจนเข้าใจ root cause
2. หา solution ที่เรียบง่ายที่สุด
3. ไม่สร้าง abstraction ที่ไม่จำเป็น

### 2. Apply Minimal Fix

1. ใช้ single-line change เมื่อเป็นไปได้
2. ไม่ refactor ทั้งโค้ดเบสเพื่อแก้ปัญหาเล็กๆ
3. ไม่สร้าง generic solution สำหรับปัญหาเฉพาะ

### 3. Verify

1. ทดสอบว่าแก้ปัญหาได้จริง
2. ตรวจสอบไม่มี side effects
3. ลบ code ที่ไม่จำเป็นที่เพิ่มขึ้น

## Rules

### Minimal Changes

- ใช้ single-line change เมื่อเป็นไปได้
- ไม่ refactor ทั้งโค้ดเบสเพื่อแก้ปัญหาเล็กๆ
- ไม่สร้าง abstraction ที่ไม่จำเป็น

### Root Cause First

- ต้องเข้าใจ root cause ก่อนแก้
- ไม่แก้ symptom โดยไม่รู้สาเหตุ
- ไม่เดา solution โดยไม่วิเคราะห์

### Simple Solutions

- ใช้ solution ที่เรียบง่ายที่สุด
- ไม่สร้าง generic solution สำหรับปัญหาเฉพาะ
- ไม่เพิ่ม complexity โดยไม่จำเป็น

## Expected Outcome

- แก้ปัญหาด้วย minimal changes
- ไม่มี over-engineering
- Code ยังเรียบง่ายและเข้าใจง่าย

