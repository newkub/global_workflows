---
title: Fix
description: แก้ไขปัญหาโดยเริ่มจาก validate หา root cause แล้ว fix อย่างรัดกุม
auto_execution_mode: 3
related:
  - /resolve-errors
  - /debug-issue
  - /follow-root-cause-analysis
  - /follow-code-quality
  - /follow-content-quality
  - /follow-config
  - /follow-workflows
  - /follow-architecture
  - /report-review
  - /suggest-next-action
---

## Goal

แก้ไขปัญหาอย่างเป็นระบบ: validate ก่อน หา root cause แล้ว fix อย่างรัดกุม

## Scope

ใช้ได้กับทุกประเภท: `code`, `config`, `docs`, `workflows`, `content` หรืออื่นๆ

ไม่รวม: review อย่างเดียว (ใช้ `/review-*`), improve ทั้งหมด (ใช้ `/improve-*`), สร้างใหม่ (ใช้ `/write-workflows`)

## Execute

### 1. Validate Problem

ตรวจสอบปัญหาก่อนแก้ไข เพื่อไม่แก้ผิดที่

1. ทำ `/validate` เพื่อตรวจสอบความถูกต้อง คุณภาพ และความเหมาะสมของสิ่งที่จะแก้
2. ระบุปัญหาชัดเจน: อะไรผิด ที่ไหน กระทบอะไร
3. ถ้าไม่พบปัญหาจริง ให้หยุดและแจ้งผู้ใช้

### 2. Find Relevant Workflows

ตรวจหา workflows ที่เกี่ยวข้องเพื่อไม่ทำซ้ำ

1. ทำ `/use-workflows` เพื่อค้นหา global workflows ที่เกี่ยวข้อง
2. ถ้าเป็น error: ใช้ `/resolve-errors`
3. ถ้าต้อง debug: ใช้ `/follow-root-cause-analysis`

### 3. Identify Root Cause

หาสาเหตุหลักก่อนแก้ ไม่แก้ที่อาการ

1. วิเคราะห์ root cause ไม่ใช่ symptom
2. ตรวจสอบว่าปัญหาเกิดจาก upstream หรือ downstream
3. ระบุไฟล์และบรรทัดที่เป็นต้นเหตุ

### 4. Apply Fix

แก้ไขอย่างรัดกุมที่ root cause

1. ทำ `/dont-over-engineer` เพื่อใช้การเปลี่ยนแปลงน้อยที่สุด
2. ทำ `/follow-best-practice` ถ้า fix เกี่ยวกับ `tools` หรือ `libraries` เฉพาะเจาะจง
3. แก้ที่ root cause ไม่ใช่ workaround ที่ symptom
4. ถ้าแก้ไขไฟล์มากกว่า 10 ไฟล์: ทำ `/use-scripts`

### 5. Verify And Report

ตรวจสอบว่า fix ทำงาน แล้วรายงานผล

1. ทำ `/check-correctness` เพื่อยืนยัน fix ถูกต้อง
2. ตรวจสอบไม่มี regression: สิ่งที่เคยทำงานยังทำงาน
3. ทำ `/report-format-table` เพื่อสรุป: ปัญหา, root cause, การแก้ไข, ผลลัพธ์

## Rules

### 1. Validate Before Fix

- ห้ามแก้ก่อน validate: ต้องทำ `/validate` เสมอเพื่อยืนยันปัญหาจริง
- ถ้า validate ไม่พบปัญหา ให้หยุด
- ไม่แก้สิ่งที่ไม่ผิด

### 2. Root Cause First

- ห้ามแก้ที่ symptom: ต้องหา root cause ก่อน
- ถ้าไม่พบ root cause ให้ทำ `/root-cause-analysis`
- ห้ามใช้ workaround ถ้าแก้ที่ root cause ได้

### 3. Minimal Changes

- ทำ `/dont-over-engineer`: ใช้การเปลี่ยนแปลงน้อยที่สุดที่แก้ปัญหาได้
- ห้าม refactor นอกเหนือจาก fix
- ห้ามเปลี่ยนสิ่งที่ไม่เกี่ยวข้องกับปัญหา

### 4. Delegation

- ถ้าปัญหาเป็น error: ใช้ `/resolve-errors` แทนการเขียน logic เอง
- ถ้าต้อง debug ลึก: ใช้ `/follow-root-cause-analysis`
- อย่า duplicate หน้าที่ของ workflow อื่น

### 5. Verification

- ต้อง verify หลัง fix เสมอ: ทำ `/check-correctness`
- ตรวจสอบ regression: สิ่งที่เคยทำงานต้องยังทำงาน
- ถ้า fix ไม่ผ่าน verification ให้กลับไป Step 3

## Expected Outcome

- ปัญหาได้รับการ validate ก่อนแก้ไข
- Root cause ถูกระบุและแก้ที่ต้นเหตุ
- การแก้ไขรัดกุม ไม่ over-engineer
- ไม่มี regression
- รายงานผลเป็นตาราง: ปัญหา, root cause, การแก้ไข, ผลลัพธ์
