---
title: Report Format JSON
description: จัดรูปแบบ JSON output สำหรับ API responses และ structured data
auto_execution_mode: 3
---

## Goal

จัดรูปแบบ JSON output ให้สอดคล้องกับมาตรฐานและอ่านง่าย

## Scope

ใช้สำหรับการจัดรูปแบบ output จาก:
- API responses
- Structured data exports
- Configuration files
- Data interchange

## Execute

### 1. Define JSON Structure

1. กำหนด schema สำหรับ JSON output
2. ใช้ consistent naming conventions (camelCase หรือ snake_case)
3. จัดลำดับ fields ตามความสำคัญ
4. ใช้ nested objects สำหรับ data ที่เกี่ยวข้องกัน

### 2. Format JSON Content

1. ใช้ pretty print ด้วย indentation 2 spaces
2. ใช้ arrays สำหรับ lists ของ items
3. ใช้ objects สำหรับ key-value pairs
4. ใช้ null แทน undefined หรือ empty strings

### 3. Add Metadata

1. เพิ่ม timestamp สำหรับ generation time
2. เพิ่ม version สำหรับ schema version
3. เพิ่ม status สำหรับ operation status
4. เพิ่ม metadata สำหรับ additional context

### 4. Validate JSON

1. ตรวจสอบว่า JSON valid ตามมาตรฐาน
2. ตรวจสอบ data types ตาม schema
3. ตรวจสอบ required fields มีครบถ้วน
4. ตรวจสอบไม่ม circular references

## Rules

### Structure

โครงสร้าง JSON ที่ต้องใช้

- ใช้ consistent naming conventions ทั้ง JSON
- จัดลำดับ fields ตามความสำคัญ
- ใช้ nested objects สำหรับ data ที่เกี่ยวข้องกัน
- ใช้ arrays สำหรับ lists ของ items

### Data Types

การใช้ data types ที่เหมาะสม

- ใช้ strings สำหรับ text data
- ใช้ numbers สำหรับ numeric data
- ใช้ booleans สำหรับ true/false
- ใช้ null สำหรับ absent values

### Metadata

ข้อมูลเพิ่มเติมที่ควรมี

- timestamp สำหรับ generation time
- version สำหรับ schema version
- status สำหรับ operation status
- metadata สำหรับ additional context

## Expected Outcome

- JSON output ที่ valid ตามมาตรฐาน
- Structure ที่ชัดเจนและ consistent
- Metadata ที่ครบถ้วน
- Data types ที่ถูกต้อง
