---
title: Check Duplication
description: ตรวจสอบ code duplication ด้วย jscpd
auto_execution_mode: 3
---

## Goal

ตรวจสอบและระบุ code duplication ใน codebase เพื่อลดความซ้ำซ้อน

## Execute

### 1. Check Tool Options

ตรวจสอบ options ที่มีใน jscpd

1. รัน `bunx jscpd --help` เพื่อดู options ทั้งหมด
2. ทำความเข้าใจ parameters สำคัญ เช่น min-lines, min-tokens, threshold

### 2. Run Duplication Detection

รัน jscpd เพื่อตรวจสอบ code duplication

1. ใช้ `Grep` เพื่อค้นหา code patterns ที่ซ้ำกัน
2. รัน `bunx jscpd . --min-lines 5 --min-tokens 50 --threshold 10 --reporters console,json --output report`
3. ทำ `/use-scripts` เพื่อ parse jscpd JSON output, generate custom reports, และ group results ใน script เดียว
4. ระบุไฟล์และส่วนที่มี duplication

### 3. Analyze Results

วิเคราะห์ผลลัพธ์จาก jscpd

1. ดูรายการ files ที่มี duplication
2. วิเคราะห์ pattern ของ code ที่ซ้ำกัน
3. จัดลำดับความสำคัญของ duplication ตามขนาดและความถี่
4. ตัดสินใจว่าส่วนไหนควร refactor ก่อน

## Rules

1. Tool Parameters

- min-lines: 5 (ขั้นต่ำของบรรทัดที่ถือว่า duplicate)
- min-tokens: 50 (ขั้นต่ำของ tokens)
- threshold: 10 (threshold สำหรับ exit with error)
- reporters: console, json (output formats)
- output: report (directory สำหรับเก็บ reports)

2. Analysis Criteria

- พิจารณา duplication ที่มีผลกระทบสูงก่อน
- ให้ความสำคัญกับ core logic มากกว่า boilerplate
- พิจารณาความง่ายในการ refactor
- ตรวจสอบว่า duplication ไม่ใช่ pattern ที่จำเป็น

3. Refactor Priority

- ลบ duplication ที่ชัดเจนก่อน
- extract common logic เป็น reusable functions
- สร้าง shared utilities สำหรับ code ที่ใช้ร่วมกัน
- ใช้ composition แทน inheritance เมื่อเหมาะสม

## Expected Outcome

- รายงาน code duplication ที่ชัดเจน
- ระบุ files และ sections ที่มี duplication
- มี priority list สำหรับการ refactor
- เข้าใจ pattern ของ duplication ใน codebase
- มีแผนสำหรับลด duplication อย่างเป็นระบบ 
