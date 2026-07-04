---
title: Review Test Result
description: วิเคราะห์ผล test execution หา root cause ของ failures และจัดลำดับการแก้ไข
auto_execution_mode: 3
related_workflows:
  - /run-test
  - /analyze-errors
  - /resolve-errors
  - /debug-issue
  - /report
  - /report-format-table
  - /report-format-terminal
---

## Goal

วิเคราะห์ผล test execution เพื่อหา root cause ของ failures จัดลำดับการแก้ไข และสรุปผล

## Scope

ใช้สำหรับ review test results หลังรัน `/run-test` หรือหลัง CI/CD pipeline ครอบคลุม pass, fail, skip, flaky

## Execute

### 1. Collect Test Results

1. รวบรวม test output จาก `/run-test` หรือ CI/CD
2. บันทึกสถิติ: total, passed, failed, skipped, duration
3. ระบุ flaky tests (tests ที่ pass/fail ไม่สม่ำเสมอ)
4. บันทึก coverage metrics ถ้ามี

### 2. Classify Failures

1. จัดประเภท failures:
   - Assertion failure: test logic ผิดพลาด
   - Timeout: test ช้าเกินไป
   - Error/Exception: code มี bug
   - Setup/Teardown failure: environment มีปัญหา
   - Flaky: ไม่สามารถ reproduce ได้สม่ำเสมอ
2. จัดประเภท skips:
   - Intentional skip (`.skip`)
   - Conditional skip (environment ไม่รองรับ)
   - Missing dependency

### 3. Analyze Root Cause

1. อ่าน error message และ stack trace อย่างละเอียด
2. ทำ `/analyze-errors` เพื่อจัดลำดับ failures
3. สำหรับแต่ละ failure:
   - ระบุ root cause ไม่ใช่แค่ symptom
   - ตรวจสอบว่าเป็น code bug หรือ test bug
   - ตรวจสอบว่าเกี่ยวข้องกับ recent changes หรือไม่
4. ถ้า failure ซับซ้อน ให้ทำ `/debug-issue`

### 4. Prioritize Fixes

1. จัดลำดับตามความรุนแรง:
   - Critical: blocking production deploy
   - High: core functionality ไม่ทำงาน
   - Medium: edge case หรือ non-critical path
   - Low: cosmetic หรือ minor
2. จัดลำดับตามจำนวน tests ที่ affected
3. ระบุ cascade failures (failure ที่ทำให้ tests อื่น fail ด้วย)

### 5. Recommend Actions

1. สำหรับ code bug: ทำ `/resolve-errors`
2. สำหรับ test bug: แก้ไข test assertions หรือ mock data
3. สำหรับ timeout: ตรวจสอบ performance และ adjust timeout
4. สำหรับ flaky: แก้ไข root cause ของ non-determinism
5. สำหรับ setup failure: ตรวจสอบ environment และ dependencies

### 6. Report Results

1. ทำ `/report` สรุปผล:
2. ท้า /suggest-next-action เพือแนะนำอก์ชันถัดไป้
   - `/report-format-table` สำหรับสถิติและ coverage
   - `/report-format-table` สำหรับรายการ failures
   - `/report-format-table` สำหรับสรุปภาพรวม
2. แสดงตาราง: Test Name, Status, Type, Root Cause, Priority, Action
3. แสดงสรุป: pass rate, fail count, top 3 priority fixes

## Rules

### 1. Root Cause Focus

- วิเคราะห์ root cause ไม่ใช่แค่ symptoms
- ไม่เดาสุ่ม ใช้ error message และ stack trace
- แยก code bug จาก test bug

### 2. Prioritization

- จัดลำดับตาม business impact
- แก้ critical และ cascade failures ก่อน
- ระบุ quick wins (easy fix, high impact)

### 3. Flaky Test Handling

- ไม่ข้าม flaky tests
- ระบุ root cause ของ non-determinism
- แยก flaky จาก real failures ในรายงาน

### 4. Output

- ใช้ `/report-format-table` สำหรับ failure details
- ใช้ `/report-format-table` สำหรับสถิติ
- ระบุ action items ที่ concrete และ actionable

## Expected Outcome

- ทุก failure ถูกวิเคราะห์ root cause
- Failures จัดลำดับตาม priority
- Action items ชัดเจนและ actionable
- Flaky tests ระบุและแยกจาก real failures
- รายงานสรุปผล test execution ครบถ้วน
