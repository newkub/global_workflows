---
title: Simplify Code
description: ทำให้โค้ดเรียบง่าย อ่านง่าย และบำรุงรักษาได้
auto_execution_mode: 3
related_workflows:
  - /follow-code-quality
---

## Goal

ทำให้โค้ดเรียบง่าย อ่านง่าย และบำรุงรักษาได้ด้วยการลดความซับซ้อน

## Scope

ใช้สำหรับปรับปรุงโค้ดที่ซับซ้อน ยาว หรือยากต่อการเข้าใจ

## Execute

### 1. Simplify Functions

ทำให้ functions เรียบง่าย

- แบ่ง functions ที่ยาว (>30 บรรทัด)
- ลด nested logic (max 2-3 levels)
- Extract helper functions
- ใช้ early return แทน nested if
- ลบ code ที่ไม่ได้ใช้

### 2. Improve Naming

ปรับปรุง naming

- ใช้ชื่อที่สื่อความหมายชัดเจน
- หลีกเลี่ยง abbreviations
- ใช้ naming conventions ที่สม่ำเสมอ
- แก้ชื่อที่ไม่ชัดเจน

### 3. Reduce Complexity

ลดความซับซ้อน

- ลบ code duplication
- ใช้ functions ที่มีอยู่แล้ว
- แยก concerns ที่ผสมกัน
- ลบ unnecessary abstractions

### 4. Improve Readability

ปรับปรุย readability

- เขียน code ที่อ่านง่าย
- ใช้ meaningful variable names
- เขียน comments สำหรับ logic ที่ซับซ้อน
- ใช้ consistent formatting

## Rules

### 1. Minimal Changes

ทำการเปลี่ยนแปลงขั้นต่ำ

- เปลี่ยนเฉพาะที่จำเป็น
- ไม่ refactor ทั้งหมดในครั้งเดียว
- เน้นที่ code ที่มีปัญหาจริงๆ

### 2. Single Responsibility

ใช้ single responsibility principle

- แต่ละ function ทำอย่างเดียว
- แต่ละ class มี responsibility เดียว
- แบ่ง modules ตาม responsibility

### 3. No Over-Engineering

หลีกเลี่ยง over-engineering

- ไม่สร้าง abstractions ที่ไม่จำเป็น
- ใช้ simple solutions ก่อน
- ไม่ optimize ก่อนเวลา

## Expected Outcome

- Code ที่อ่านง่ายขึ้น
- Functions ที่สั้นและชัดเจน
- ลด code duplication
- Naming conventions สม่ำเสมอ
- บำรุงรักษาได้ง่ายขึ้น
