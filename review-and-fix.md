---
title: Review And Fix
description: Review codebase และ fix issues อย่าง systematic โดยไม่เพิ่ม features ใหม่
auto_execution_mode: 3
related_workflows:
  - /follow-resolve-errors
  - /only-fix-errors
  - /follow-analyze-errors
---

## Goal

Review codebase เพื่อหา issues และ fix อย่าง systematic โดยไม่เพิ่ม features ใหม่

## Scope

ใช้เมื่อต้องการ review และ fix issues ใน codebase โดยไม่เปลี่ยนแปลง behavior หรือเพิ่มฟีเจอร์ใหม่

## Execute

### 1. Review Codebase

Review codebase เพื่อหา issues ทั้งหมด

1. ทำ `/analyze-all-files` เพื่ออ่านและวิเคราะห์ไฟล์ทั้งหมด
2. ทำ `/search-code` เพื่อค้นหา patterns ที่น่าสงสัย
3. ทำ `/run-check` เพื่อรัน lint, typecheck, test
4. รวบรวม errors, warnings, และ issues ทั้งหมด
5. จัดกลุ่ม issues ตามประเภท (syntax, runtime, type, logic, security)

### 2. Analyze Issues

วิเคราะห์ issues ที่พบอย่างละเอียด

1. ทำ `/follow-analyze-errors` เพื่อวิเคราะห์และจัดลำดับ issues
2. ระบุ root cause ของแต่ละ issue
3. จัดลำดับความสำคัญตาม impact (critical, high, medium, low)
4. ระบุ dependencies ระหว่าง issues
5. สร้าง plan สำหรับการ fix issues ตามลำดับความสำคัญ

### 3. Prioritize By File Length

จัดลำดับการ fix ตามความยาวไฟล์เพื่อประสิทธิภาพ

1. ทำ `/use-scripts` เพื่อเช็คความยาวไฟล์ที่มี issues
2. แก้ไขไฟล์ที่สั้นกว่า 250 บรรทัดก่อน
3. ถ้าไฟล์ยาวกว่า 250 บรรทัด ให้ทำ `/refactor-long-files-to-single-responsibility` ก่อนแก้ไข
4. แก้ไข issues ในไฟล์ที่ refactor แล้ว

### 4. Fix Issues

Fix issues ตามลำดับความสำคัญ

1. ทำ `/follow-resolve-errors` สำหรับแต่ละ issue
2. แก้ไข root cause โดยตรง
3. ทำการเปลี่ยนแปลงน้อยที่สุดที่จำเป็น
4. รักษา consistency กับ code style ที่มีอยู่
5. ตรวจสอบว่าไม่สร้าง side effects ใหม่
6. ทำ `/no-use-ignore` เพื่อลบ ignore comments/attributes

### 5. Verify Fixes

ตรวจสอบว่าการแก้ไขถูกต้อง

1. รัน `/run-check` อีกครั้งเพื่อตรวจสอบ
2. ตรวจสอบว่า issues ที่ fix หายไป
3. ตรวจสอบว่าไม่มี issues ใหม่เกิดขึ้น
4. รัน tests ที่เกี่ยวข้องถ้ามี
5. ถ้ายังมี issues ทำ `/loop-until-complete` จนกว่าจะผ่าน

### 6. Document Changes

บันทึกการเปลี่ยนแปลง

1. เขียน comments อธิบายสาเหตุของการแก้ไขถ้าจำเป็น
2. อัพเดท documentation ที่เกี่ยวข้อง
3. บันทึก pattern ของปัญหาเพื่อใช้อ้างอิง
4. ทำ `/update-reference` เพื่ออัพเดท references

## Rules

### 1. No Feature Additions

ห้ามเพิ่มฟีเจอร์ใหม่:

- ไม่เพิ่ม functionality ใหม่
- ไม่เพิ่ม configurations ใหม่
- ไม่เพิ่ม dependencies ใหม่
- ไม่เพิ่ม test cases ใหม่

### 2. No Refactoring

ห้าม refactor code ที่ไม่เกี่ยวข้องกับ issues:

- ไม่ refactor code ส่วนอื่นที่ไม่มี issues
- ไม่เปลี่ยนโครงสร้าง code ที่ไม่จำเป็น
- ไม่เปลี่ยน naming conventions ที่ไม่เกี่ยวข้อง
- ไม่ปรับปรุง performance ที่ไม่เกี่ยวข้อง

### 3. Minimal Changes

แก้ไขเฉพาะส่วนที่จำเป็น:

- เปลี่ยนเฉพาะบรรทัดที่ทำให้เกิด issues
- ทำการเปลี่ยนแปลงน้อยที่สุดที่จำเป็น
- รักษา consistency กับ code style ที่มีอยู่
- ตรวจสอบว่าไม่สร้าง side effects ใหม่

### 4. Priority Based

Fix issues ตามลำดับความสำคัญ:

- Critical issues ก่อน (security, data loss, crash)
- High issues ถัดมา (functional bugs, performance)
- Medium issues ถัดมา (warnings, code quality)
- Low issues สุดท้าย (styling, minor improvements)

### 5. No Ignore Patterns

ห้ามใช้ ignore comments/attributes:

- ทำตาม `/no-use-ignore`
- แก้ไข issues ที่ source โดยตรง

### 6. Verification Required

ต้องตรวจสอบการแก้ไข:

- รัน checks หลังแก้ไขแต่ละ issue
- ตรวจสอบว่า issues หายไป
- ตรวจสอบว่าไม่มี issues ใหม่เกิดขึ้น
- รัน tests ที่เกี่ยวข้อง

## Expected Outcome

- Issues ทั้งหมดถูก fix อย่างถาวรจาก root cause
- ไม่มี side effects ใหม่เกิดขึ้นจากการแก้ไข
- Code quality รักษาไว้หรือดีขึ้นกว่าเดิม
- มี documentation หรือ comments อธิบายการแก้ไข
- ไม่มี features ใหม่ถูกเพิ่ม
