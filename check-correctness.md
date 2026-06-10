---
title: Check Correctness
description: ตรวจสอบความถูกต้องตามที่ผู้ใช้ระบุ
auto_execution_mode: 3
---

## Goal

ตรวจสอบความถูกต้องของสิ่งที่ผู้ใช้ระบุ

## Scope

ตรวจสอบความถูกต้องตามที่ผู้ใช้ระบุ (code, workflow, documentation, configuration, ฯลฯ)

## Execute

### 1. Identify Check Target

1. ระบุสิ่งที่ต้องตรวจสอบจากผู้ใช้
2. กำหนด criteria สำหรับการตรวจสอบ
3. เลือก tools หรือ workflows ที่เกี่ยวข้อง

### 2. Research Best Practices (ถ้าจำเป็น)

1. ตรวจสอบว่าต้องการ research ข้อมูลเพิ่มเติมหรือไม่
2. ถ้าต้องการ ทำ `/deep-research` เพื่อค้นหา:
   - Best practices จาก official documentation
   - Reference implementations จาก GitHub
   - Package information จาก NPM
   - Community standards และ conventions
3. ใช้ findings จาก deep research เพื่อปรับ criteria การตรวจสอบ

### 3. Perform Check

1. ตรวจสอบตาม criteria ที่กำหนด
2. บันทึก issues ที่พบ
3. จัดลำดับความสำคัญของ issues

### 4. Report Results

1. สรุปผลการตรวจสอบ
2. แนะนำการแก้ไข
3. ระบุ priority สำหรับการแก้ไข

## Rules

### 1. Check Criteria

- ต้องชัดเจนว่าตรวจสอบอะไร
- ต้องมี criteria ที่ measurable
- ต้องสอดคล้องกับ requirements

### 2. Issue Prioritization

- Critical: ทำให้ system ไม่ทำงาน
- High: ทำให้มีปัญหา serious
- Medium: ทำให้มีปัญหา moderate
- Low: เป็น minor issues

### 3. Reporting

- สรุปกระชับและชัดเจน
- แนะนำการแก้ไขที่ concrete
- ระบุ priority ชัดเจน

## Expected Outcome

- ตรวจสอบความถูกต้องตามที่ผู้ใช้ระบุ
- บันทึก issues ที่พบ
- แนะนำการแก้ไขที่เหมาะสม
