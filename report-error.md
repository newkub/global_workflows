---
title: Report Error
description: รายงาน errors และ exceptions ที่เกิดขึ้นอย่างเป็นระบบ
auto_execution_mode: 3
related_workflows:
  - /report-status
  - /report-progress
---

## Goal

รายงาน errors และ exceptions ที่เกิดขึ้นอย่างเป็นระบบเพื่อการวิเคราะห์และแก้ไข

## Scope

ใช้สำหรับการรายงาน errors จาก logs, exceptions, หรือ runtime issues

## Execute

### 1. Collect Error Information

รวบรวมข้อมูล errors

1. รวบรวม error logs จากทุก sources
2. รวบรวม stack traces
3. รวบรวม context information (user actions, system state)
4. รวบรวม timestamps และ frequency

### 2. Categorize Errors

จัดกลุ่ม errors ตามประเภท

1. จัดกลุ่มตาม severity (critical, high, medium, low)
2. จัดกลุ่มตาม type (runtime, validation, network, database)
3. จัดกลุ่มตาม module หรือ component
4. จัดกลุ่มตาม frequency

### 3. Analyze Root Causes

วิเคราะห์สาเหตุหลักของ errors

1. วิเคราะห์ stack traces เพื่อระบุ source
2. ตรวจสอบ code paths ที่นำไปสู่ error
3. ระบุ edge cases ที่ trigger errors
4. วิเคราะห์ correlations ระหว่าง errors

### 4. Report Findings

รายงานผลการวิเคราะห์

1. สรุป error patterns ที่พบบ่อย
2. ระบุ root causes ของ errors หลัก
3. แนะนำ fixes สำหรับ errors แต่ละประเภท
4. ระบุ preventive measures

## Rules

### 1. Complete Context

ต้องรวบรวม context ครบถ้วน

- รวบรวม stack traces ทั้งหมด
- รวบรวม user actions ก่อน error
- รวบรวม system state ณ เวลาเกิด error
- รวบรวม environment information

### 2. Severity Classification

ต้องจัดกลุ่ม severity อย่างถูกต้อง

- Critical: ทำให้ระบบหยุดทำงาน
- High: กระทบ user experience อย่างมาก
- Medium: กระทบ features บางอย่าง
- Low: ไม่กระทบ functionality หลัก

### 3. Pattern Recognition

ต้องระบุ patterns ที่ซ้ำซ้อน

- ระบุ errors ที่เกิดขึ้นซ้ำๆ
- ระบุ common root causes
- ระบุ modules ที่มี error rates สูง
- ระบุ temporal patterns (time-based)

### 4. Actionable Recommendations

ต้องให้ recommendations ที่นำไปปฏิบัติได้

- ระบุ specific code changes ที่ต้องทำ
- ระบุ tests ที่ต้องเพิ่ม
- ระบุ monitoring ที่ต้องเพิ่ม
- ระบุ priority ของแต่ละ fix

## Expected Outcome

- Errors ถูกระบุและจัดกลุ่มอย่างถูกต้อง
- Root causes ถูกระบุอย่างชัดเจน
- Recommendations ที่ actionable และ prioritized
- สามารถป้องกัน errors ซ้ำในอนาคต

## Common Mistakes (optional)

ข้อผิดพลาดที่พบบ่อย:

- ไม่รวบรวม context ครบถ้วน
- จัดกลุ่ม severity ไม่ถูกต้อง
- ไม่ระบุ root causes ที่แท้จริง
- ให้ recommendations ที่ generic หรือไม่ actionable
