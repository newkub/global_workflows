---
title: Improve Correctness
description: ปรับปรุงความถูกต้องของ code, workflow, documentation หรือ configuration
auto_execution_mode: 3
related_workflows:
  - /check-correctness
  - /improve-content
  - /improve-codebase
  - /resolve-errors
  - /follow-code-quality
---

## Goal

ปรับปรุงความถูกต้องของสิ่งที่ผู้ใช้ระบุตาม criteria ที่กำหนด

## Scope

ใช้สำหรับปรับปรุงความถูกต้องของ code, workflow, documentation, configuration หรือสิ่งอื่นๆ

## Execute

### 1. Perform Correctness Check

ตรวจสอบความถูกต้องตาม criteria

1. ทำ `/check-correctness` เพื่อตรวจสอบตาม criteria ที่กำหนด
2. รับผลการตรวจสอบพร้อม issues และ priority
3. วิเคราะห์ issues ที่พบ

### 2. Prioritize Issues

จัดลำดับความสำคัญของ issues

1. จัดกลุ่ม issues ตาม priority (Critical, High, Medium, Low)
2. วางแผนการแก้ไขตามลำดับความสำคัญ
3. ระบุ dependencies ระหว่าง issues

### 3. Fix Critical Issues

แก้ไข issues ระดับ Critical ก่อน

1. แก้ไข issues ที่ทำให้ system ไม่ทำงาน
2. ทำ `/resolve-errors` สำหรับ issues ที่ซับซ้อน
3. ตรวจสอบว่าแก้ไขแล้วไม่ทำให้เกิด issues ใหม่

### 4. Fix High Priority Issues

แก้ไข issues ระดับ High

1. แก้ไข issues ที่ทำให้มีปัญหา serious
2. ทำ `/improve-content` สำหรับ content issues
3. ทำ `/improve-codebase` สำหรับ code issues
4. ตรวจสอบผลลัพธ์

### 5. Fix Medium And Low Issues

แก้ไข issues ระดับ Medium และ Low

1. แก้ไข issues ที่เป็น moderate และ minor
2. ทำ `/edit-only` สำหรับการแก้ไขง่ายๆ
3. ตรวจสอบความสอดคล้อง

### 6. Verify Improvements

ตรวจสอบผลการปรับปรุง

1. ทำ `/check-correctness` อีกครั้งเพื่อ verify
2. ตรวจสอบว่า issues ทั้งหมดถูกแก้ไข
3. ทำ regression test ถ้าจำเป็น

### 7. Update References

อัปเดต references ที่เกี่ยวข้อง

1. ทำ `/update-references` หากมี file operations
2. อัปเดต dependencies ที่เกี่ยวข้อง
3. ตรวจสอบ consistency

## Rules

### 1. Priority-Based Execution

ทำตามลำดับความสำคัญของ issues

- แก้ไข Critical issues ก่อนเสมอ
- แก้ไข High issues ก่อน Medium และ Low
- ทีละ issue และตรวจสอบก่อนดำเนินต่อ
- ถ้าแก้ไข issue หนึ่งแล้วเกิด issue ใหม่ ให้แก้ issue ใหม่ก่อน

### 2. Minimal Changes

ใช้การเปลี่ยนแปลงน้อยที่สุด

- แก้ไขเฉพาะสิ่งที่จำเป็น
- หลีกเลี่ยง over-engineering
- ใช้ single-line changes เมื่อเป็นไปได้
- ทำตาม `/dont-over-engineer`

### 3. Root Cause Focus

โฟกัสที่ root cause ไม่ใช่ symptoms

- หาสาเหตุหลักก่อนแก้ไข
- แก้ไขที่ source ไม่ใช่ที่ downstream
- ทำตาม `/follow-root-cause-analysis`

### 4. Verification

ตรวจสอบทุกการเปลี่ยนแปลง

- ทำ `/check-correctness` อีกครั้งหลังแก้ไข
- รัน tests ถ้ามี
- ตรวจสอบ regressions
- ทำ `/run-test` ถ้าจำเป็น

### 5. Use References

ใช้ references แทนการเขียนซ้ำ

- ทำตาม workflows ที่ระบุใน Execute
- ใช้ `/improve-content` สำหรับ content
- ใช้ `/improve-codebase` สำหรับ code
- ใช้ `/resolve-errors` สำหรับ errors

## Expected Outcome

- Issues ทั้งหมดถูกแก้ไขตาม priority
- Critical issues แก้ไขแล้วทันที
- High issues แก้ไขแล้วใน sprint ปัจจุบัน
- Medium และ Low issues แก้ไขแล้วตามเวลาที่กำหนด
- ไม่มี regressions จากการแก้ไข
- Code/content ถูกต้องตาม criteria
- References อัปเดตแล้ว
- System ทำงานได้อย่างถูกต้อง
